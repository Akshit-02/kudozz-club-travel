// src/app/blog/hmuifang-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hmuifang Guide: Paragliding & Views",
  description:
    "Complete Hmuifang guide — paragliding above the Mizoram hills, sweeping viewpoints, traditional Mizo village heritage, how to reach from Aizawl, and a full visit plan.",
  keywords:
    "Hmuifang travel guide, Mizoram paragliding, Aizawl weekend getaway, Hmuifang resort, Mizoram adventure sports, how to reach Hmuifang",
  openGraph: {
    title: "Hmuifang Guide: Paragliding & Views",
    description:
      "A scenic hill south of Aizawl known for paragliding and sweeping Mizoram views — the complete Hmuifang guide.",
    url: "https://club.kudozz.in/blog/hmuifang-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Scenic hill valley landscape, evoking Hmuifang's paragliding viewpoints south of Aizawl, Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hmuifang Guide: Paragliding & Views",
    description:
      "Paragliding, sweeping views, and traditional Mizo village heritage south of Aizawl — the complete Hmuifang guide.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hmuifang-travel-guide",
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
          headline: "Hmuifang Guide: Paragliding & Views",
          description:
            "Complete Hmuifang guide — paragliding above the Mizoram hills, sweeping viewpoints, traditional Mizo village heritage, how to reach from Aizawl, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/hmuifang-travel-guide",
          },
          keywords: "Hmuifang, Mizoram, paragliding, Aizawl weekend getaway",
          about: {
            "@type": "Place",
            name: "Hmuifang",
            address: { "@type": "PostalAddress", addressRegion: "Mizoram", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mizoram",
                item: "https://club.kudozz.in/blog/mizoram-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Hmuifang" },
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
    q: "How far from Aizawl?",
    a: "Hmuifang is a manageable drive south of Aizawl, making it a popular day-trip or weekend destination that doesn't require the long travel commitment of Mizoram's more remote attractions.",
  },
  {
    q: "Is paragliding available year-round or seasonal?",
    a: "Paragliding conditions are best in the drier months, roughly October to March, when weather is more stable and predictable. Availability can be more limited during the monsoon.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes, especially on weekends — booking paragliding slots ahead of time helps avoid disappointment given demand from Aizawl-based visitors.",
  },
  {
    q: "Is it a day trip or worth an overnight?",
    a: "Both work well. A day trip covers the paragliding and viewpoints comfortably, but an overnight stay at the Hmuifang resort/lodge allows for a more relaxed pace and time to explore nearby village heritage.",
  },
  {
    q: "What else is there to do besides paragliding?",
    a: "The viewpoint scenery alone is worth the trip, and nearby traditional Mizo village heritage adds a cultural dimension for visitors who want more than just the adventure-sport angle.",
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
  { id: "introduction", title: "Views & Paragliding South of Aizawl", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hmuifang", level: 2 },
  { id: "things-to-do", title: "Paragliding, Views & Village Heritage", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HmuifangGuidePage() {
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
              alt="Scenic hill valley landscape, evoking Hmuifang's paragliding viewpoints south of Aizawl, Mizoram"
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
                { label: "Mizoram", href: "/blog/mizoram-travel-guide" },
                { label: "Hmuifang", href: null },
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
              {["Hmuifang", "Mizoram", "Paragliding", "Weekend Getaway"].map((tag) => (
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
              Hmuifang: Paragliding & Views Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A scenic hill south of Aizawl where paragliders launch over
              sweeping Mizoram views, backed by traditional village heritage.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "South of Aizawl, Mizoram",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                <section id="introduction">
                  <h2>Views & Paragliding South of Aizawl</h2>
                  <p>
                    <strong>Hmuifang</strong> is a scenic hill destination
                    south of Aizawl, known for sweeping views over the
                    surrounding Mizoram landscape and for being a notable
                    paragliding site — a genuinely distinctive adventure-sport
                    draw that sets it apart from most other Mizoram
                    destinations.
                  </p>
                  <p>
                    A tourist resort/lodge at Hmuifang gives visitors a
                    comfortable base, and the area also has traditional Mizo
                    village heritage nearby, adding a cultural dimension
                    alongside the scenery and adventure sport. Given its
                    manageable distance from{" "}
                    <Link href="/blog/mizoram-travel-guide">Aizawl</Link>,
                    Hmuifang has become a popular day-trip or weekend
                    destination.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪂</span> Hmuifang at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "South of Aizawl, Mizoram" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🪂", label: "Known For", value: "Paragliding, sweeping views" },
                        { icon: "🏨", label: "Stay", value: "Tourist resort/lodge" },
                        { icon: "🏘️", label: "Also Nearby", value: "Traditional Mizo villages" },
                        { icon: "🎯", label: "Trip Type", value: "Day trip or weekend" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Hmuifang</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear, stable weather gives the best paragliding conditions and the clearest views over the surrounding hills.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, workable",
                        text: "Still generally fine for a visit, though building heat and occasional pre-monsoon showers can affect flying conditions.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — limited flying",
                        text: "Heavy rain and unpredictable wind conditions make paragliding less reliable during this window.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest skies",
                        text: "The most reliable stretch for clear-sky paragliding and unobstructed viewpoint photography.",
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
                    <strong>Our pick:</strong> December to February — the
                    most reliable window for both clear-sky paragliding and
                    good viewpoint photography.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Hmuifang</h2>
                  <ul>
                    <li>
                      <strong>From Aizawl:</strong> A manageable drive
                      south, making Hmuifang genuinely accessible for a day
                      trip or weekend without the long travel commitment
                      some other Mizoram destinations require.
                    </li>
                    <li>
                      <strong>Self-drive or hired vehicle:</strong> The
                      route is straightforward enough for a self-drive
                      outing or a hired taxi from Aizawl.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Aizawl early if
                    paragliding is the priority — morning conditions tend to
                    be calmer and more predictable for flying.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Paragliding, Views & Village Heritage</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Rolling hills landscape, evoking Hmuifang's viewpoint scenery in Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Paragliding</h3>
                  <p>
                    Hmuifang&apos;s paragliding site is a genuine draw for
                    adventure-sport enthusiasts, offering a bird&apos;s-eye
                    view over the surrounding Mizoram hills that&apos;s hard
                    to get any other way in the state.
                  </p>
                  <h3>The Viewpoint</h3>
                  <p>
                    Even without paragliding, Hmuifang&apos;s viewpoint
                    scenery is worth the trip — sweeping views over rolling,
                    forested hills that capture what makes Mizoram&apos;s
                    landscape distinctive.
                  </p>
                  <h3>Traditional Mizo Village Heritage</h3>
                  <p>
                    Nearby villages preserve traditional Mizo architecture
                    and customs, giving visitors a cultural counterpoint to
                    the adventure-sport side of a Hmuifang visit.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay at Hmuifang</h2>
                  <p>
                    A dedicated tourist resort/lodge at Hmuifang provides a
                    genuine, purpose-built option here — a real advantage
                    over some of Mizoram&apos;s more remote destinations.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,500/night",
                        picks: ["Basic rooms at the Hmuifang resort/lodge"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: ["Better-appointed lodge rooms with views"],
                      },
                      {
                        tier: "Day-Trip Option",
                        icon: "🚗",
                        range: "No stay needed",
                        picks: ["Return to Aizawl same day", "Ideal for a focused paragliding trip"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day Trip",
                        title: "Aizawl to Hmuifang & Back",
                        color: "bg-amber-700",
                        activities: ["Early drive from Aizawl", "Paragliding session", "Viewpoint photography, lunch, return"],
                      },
                      {
                        day: "Weekend",
                        title: "Overnight at the Resort",
                        color: "bg-sky-600",
                        activities: ["Arrive and check in", "Paragliding and viewpoint time", "Explore nearby village heritage the next morning"],
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
                </section>

                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Hmuifang resort/lodge:</strong> The main
                      dining option on-site, serving simple, hearty meals.
                    </li>
                    <li>
                      <strong>Aizawl before/after:</strong> Aizawl offers a
                      wider spread of dining if combining the trip with
                      city sightseeing.
                    </li>
                  </ul>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹2,500"],
                          ["Paragliding session", "₹1,500", "₹3,000"],
                          ["Vehicle hire (round trip from Aizawl)", "₹2,500", "₹4,500"],
                          ["Food/day", "₹400", "₹800"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Hmuifang</h2>
                  <ul>
                    <li>
                      <strong>Book paragliding in advance:</strong>{" "}
                      Especially on weekends, when demand from Aizawl
                      visitors is highest.
                    </li>
                    <li>
                      <strong>Go early for calmer flying conditions:</strong>{" "}
                      Morning sessions tend to be more predictable.
                    </li>
                    <li>
                      <strong>Combine with village heritage:</strong> Don&apos;t
                      skip the nearby traditional Mizo villages if time
                      allows.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Book your paragliding slot in advance",
                          "Visit Oct-Mar for the best flying conditions",
                          "Arrive early for calmer morning winds",
                          "Explore nearby village heritage if time allows",
                          "Consider an overnight stay for a relaxed pace",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect walk-in paragliding slots on weekends",
                          "Plan a flight during heavy monsoon weather",
                          "Rush the trip without checking flying conditions",
                          "Skip the resort's weekend booking window",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
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
                    <strong>🗺️ Extend the trip:</strong> Hmuifang makes an
                    easy add-on to an Aizawl-based Mizoram trip. See our
                    full{" "}
                    <Link href="/blog/mizoram-travel-guide">Mizoram travel guide</Link>{" "}
                    for the wider state.
                  </div>
                </section>

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

              <div className="mt-10 flex flex-wrap gap-2">
                {["Hmuifang", "Mizoram", "Paragliding", "Weekend Getaway", "Adventure"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="hmuifang-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hmuifang-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
