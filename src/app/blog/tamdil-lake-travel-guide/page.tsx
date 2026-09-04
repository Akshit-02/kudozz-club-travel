// src/app/blog/tamdil-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tamdil Lake Guide: Legend, Boating & Tips",
  description:
    "Complete Tamdil Lake guide — the mustard-plant origin legend, boating and lakeside resorts, how to reach from Thenzawl and Aizawl, and a full visit plan.",
  keywords:
    "Tamdil Lake, Tamdil Lake Mizoram, Tamdil Lake legend, Tamdil Lake boating, how to reach Tamdil Lake, Saitual district, Mizoram lakes, Thenzawl day trip",
  openGraph: {
    title: "Tamdil Lake Guide: Legend, Boating & Tips",
    description:
      "A natural lake born from local legend, popular for boating and lakeside stays — the complete guide to Tamdil Lake in central Mizoram.",
    url: "https://club.kudozz.in/blog/tamdil-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake surrounded by hills, evoking Tamdil Lake in central Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamdil Lake Guide: Legend, Boating & Tips",
    description:
      "A natural lake born from local legend, popular for boating and lakeside stays in central Mizoram.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tamdil-lake-travel-guide",
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
          headline: "Tamdil Lake Guide: Legend, Boating & Tips",
          description:
            "Complete Tamdil Lake guide — the mustard-plant origin legend, boating and lakeside resorts, how to reach from Thenzawl and Aizawl, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/tamdil-lake-travel-guide",
          },
          keywords: "Tamdil Lake, Mizoram, legend, boating, Saitual district, off-beat",
          about: {
            "@type": "Place",
            name: "Tamdil Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Mizoram",
              addressCountry: "IN",
            },
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
              { "@type": "ListItem", position: 4, name: "Tamdil Lake" },
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
    q: "What is the legend behind Tamdil Lake's name?",
    a: "\"Tamdil\" translates roughly to \"lake of the mustard plant.\" Local legend tells of a giant mustard plant that once stood on the site — when it collapsed, it's said to have created the lake as it fell.",
  },
  {
    q: "Is boating available at Tamdil Lake?",
    a: "Yes, boating is one of the main activities here, making it a popular picnic and day-trip spot, especially for visitors from Aizawl.",
  },
  {
    q: "How far is Tamdil Lake from Aizawl and Thenzawl?",
    a: "It's a short drive from Thenzawl, and a slightly longer one from Aizawl (roughly 130 km to Thenzawl, then onward to the lake) — most visitors combine it with a Thenzawl-based central Mizoram trip.",
  },
  {
    q: "Is Tamdil Lake a good family destination?",
    a: "Yes — it's one of Mizoram's more accessible, family-friendly natural attractions, with resort-style accommodation and easy boating nearby, making it a good pick if traveling with children or limited time.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to March offers the most comfortable weather and clearest water for boating and lakeside relaxation.",
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
  { id: "introduction", title: "A Lake Born from Legend", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tamdil Lake", level: 2 },
  { id: "things-to-do", title: "Boating & the Legend", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TamdilLakeGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Calm lake surrounded by hills, evoking Tamdil Lake in central Mizoram"
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
                { label: "Tamdil Lake", href: null },
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
              {["Tamdil Lake", "Mizoram", "Legend", "Saitual District"].map((tag) => (
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
              Tamdil Lake: Legend, Boating & Central Mizoram&apos;s Favourite Picnic Spot
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A lake said to have formed when a giant mustard plant collapsed
              — today, one of Mizoram&apos;s most popular boating and picnic
              destinations.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Saitual District, Mizoram",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,980 words",
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
                  <h2>A Lake Born from Legend</h2>
                  <p>
                    <strong>Tamdil Lake</strong>, near{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>{" "}
                    and Saitual, is a natural lake tied to a well-known local
                    legend. &quot;Tamdil&quot; translates roughly to
                    &quot;lake of the mustard plant,&quot; referring to a
                    story of a giant mustard plant that once stood on the
                    site — when it collapsed, it&apos;s said to have created
                    the lake as it fell.
                  </p>
                  <p>
                    Today the lake functions as one of central
                    Mizoram&apos;s most popular boating and picnic spots,
                    with resort-style accommodation nearby making it one of
                    the more accessible weekend destinations from Aizawl.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚣</span> Tamdil Lake at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Saitual District, Mizoram" },
                        { icon: "🚗", label: "From Thenzawl", value: "Short drive" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚣", label: "Known For", value: "Boating, Legend" },
                        { icon: "🏨", label: "Stay", value: "Lakeside resorts" },
                        { icon: "🎯", label: "Pairs Well With", value: "Vantawng Falls" },
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
                  <h2>Best Time to Visit Tamdil Lake</h2>
                  <p>Clear water and comfortable temperatures both peak in the drier months.</p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear — the most comfortable window for boating and a lakeside picnic.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pleasant",
                        text: "Still enjoyable, with warmer days good for a full afternoon by the water.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — full lake",
                        text: "The lake fills up dramatically, but rain can disrupt boating plans and make roads slippery.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest, coolest",
                        text: "The most reliable stretch for calm water and crisp visibility across the lake.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> October to March — calm water,
                    clear skies, and the most comfortable conditions for
                    boating and a lakeside picnic.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tamdil Lake</h2>
                  <ul>
                    <li>
                      <strong>From Thenzawl:</strong> A short, easy drive —
                      the most practical base for a visit.
                    </li>
                    <li>
                      <strong>From Aizawl:</strong> Roughly 130 km to
                      Thenzawl first, then onward to the lake, a combined
                      journey of around 4-5 hours.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Visit on a weekday if
                    possible — weekends bring more local visitors and a
                    busier boating queue.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Boating & the Legend</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Lake surrounded by hills, evoking Tamdil Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Boating on the Lake</h3>
                  <p>
                    Boat rides across Tamdil Lake are the main activity here,
                    giving visitors a relaxed way to take in the surrounding
                    hills from the water.
                  </p>
                  <h3>The Mustard-Plant Legend</h3>
                  <p>
                    Ask any local guide about the lake&apos;s origin and
                    you&apos;ll hear the story of the collapsing mustard
                    plant that is said to have created it — a distinctive
                    piece of Mizo folklore that gives the lake its name and
                    character.
                  </p>
                  <h3>Lakeside Picnicking</h3>
                  <p>
                    The area around the lake is set up for picnics, with
                    resort grounds and open spaces making it a popular
                    weekend spot for families from Aizawl.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay at Tamdil Lake</h2>
                  <p>
                    Lakeside resort-style accommodation is a genuine
                    highlight here, compared to some of Mizoram&apos;s more
                    remote natural attractions.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic lakeside lodges", "Guesthouses in Thenzawl"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Lakeside resort rooms", "Cottage-style stays"] },
                      { tier: "Luxury", icon: "🌿", range: "₹4,000–₹7,000+/night", picks: ["Premium lake-view cottages", "Full-board weekend packages"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
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
                        day: "Half-Day",
                        title: "Lake Visit",
                        color: "bg-amber-700",
                        activities: ["Arrive from Thenzawl", "Boating on the lake", "Picnic lunch by the water"],
                      },
                      {
                        day: "Overnight",
                        title: "Lakeside Stay",
                        color: "bg-sky-600",
                        activities: ["Check into a lakeside resort", "Evening walk around the shore", "Onward to Vantawng Falls the next day"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
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
                    <Link href="/blog/vantawng-falls-travel-guide">Vantawng Falls</Link>{" "}
                    for an efficient central Mizoram circuit from Thenzawl.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Resort dining:</strong> Lakeside resorts
                      typically serve meals to guests, the most convenient
                      option near the lake.
                    </li>
                    <li>
                      <strong>Picnic supplies:</strong> Many visitors bring
                      their own food for a lakeside picnic.
                    </li>
                  </ul>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹5,500"],
                          ["Boating (per session)", "₹150", "₹300", "₹500"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
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
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Tamdil Lake</h2>
                  <ul>
                    <li>
                      <strong>Visit on a weekday:</strong> Weekends bring
                      more local visitors and busier boating queues.
                    </li>
                    <li>
                      <strong>Combine with Vantawng Falls:</strong> The two
                      sit close enough together for an efficient single-day
                      loop.
                    </li>
                    <li>
                      <strong>Book lakeside resorts ahead:</strong> Popular
                      on weekends, especially in the cooler months.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Try boating on the lake", "Ask a guide about the mustard-plant legend", "Visit on a weekday for fewer crowds", "Book a lakeside resort in advance on weekends", "Combine with Vantawng Falls"].map((item) => (
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
                        {["Expect a quiet lake on weekends", "Skip booking ahead in peak season", "Rely on cards outside Aizawl", "Rush the boating experience", "Forget a rain layer in monsoon"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Tamdil Lake pairs
                    naturally with{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">Vantawng Falls</Link>{" "}
                    and{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>.
                    See our full{" "}
                    <Link href="/blog/mizoram-travel-guide">
                      Mizoram travel guide
                    </Link>{" "}
                    for the wider state.
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Tamdil Lake", "Mizoram", "Legend", "Saitual District", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="tamdil-lake-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tamdil-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
