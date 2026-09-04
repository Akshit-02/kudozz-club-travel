// src/app/blog/serchhip-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Serchhip Travel Guide: Gateway & Tips",
  description:
    "Complete Serchhip guide — the practical base town for Vantawng Falls, Thenzawl, and Tamdil Lake, how to reach from Aizawl, and a full visit plan for central Mizoram.",
  keywords:
    "Serchhip travel guide, Serchhip Mizoram, Serchhip district, Vantawng Falls base, how to reach Serchhip, central Mizoram gateway",
  openGraph: {
    title: "Serchhip Travel Guide: Gateway & Tips",
    description:
      "A district headquarters town and the practical gateway to central Mizoram's biggest natural attractions — the complete guide to Serchhip.",
    url: "https://club.kudozz.in/blog/serchhip-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Scenic hill town landscape, evoking Serchhip's setting in central Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Serchhip Travel Guide: Gateway & Tips",
    description:
      "A district headquarters town and the practical gateway to central Mizoram's biggest natural attractions.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/serchhip-travel-guide",
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
          headline: "Serchhip Travel Guide: Gateway & Tips",
          description:
            "Complete Serchhip guide — the practical base town for Vantawng Falls, Thenzawl, and Tamdil Lake, how to reach from Aizawl, and a full visit plan for central Mizoram.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/serchhip-travel-guide",
          },
          keywords: "Serchhip, Mizoram, gateway town, Serchhip district, off-beat",
          about: {
            "@type": "Place",
            name: "Serchhip",
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
              { "@type": "ListItem", position: 4, name: "Serchhip" },
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
    q: "Is Serchhip worth visiting for its own sake or mainly as a base?",
    a: "Serchhip functions primarily as a practical gateway and base town for exploring central Mizoram — particularly Vantawng Falls, which sits within Serchhip district. Treat it as a comfortable base rather than a headline attraction in itself.",
  },
  {
    q: "How far is Serchhip from Aizawl?",
    a: "Serchhip is a manageable drive from Aizawl, making it an easy stop on the way into central Mizoram's natural-attraction circuit.",
  },
  {
    q: "How does Serchhip connect to Vantawng Falls and Thenzawl?",
    a: "Vantawng Falls sits within Serchhip district, and Thenzawl (the base for Tamdil Lake) is close by, making all three easy to combine into one central Mizoram trip.",
  },
  {
    q: "What infrastructure is available in Serchhip?",
    a: "As a district headquarters, Serchhip has reasonable infrastructure for a Mizoram town of its size — guesthouses, basic services, and supplies, making it a comfortable stop before heading to more remote parts of central Mizoram.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to March offers the most comfortable weather for exploring the town and the wider central Mizoram region.",
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
  { id: "introduction", title: "Central Mizoram's Practical Gateway", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Serchhip", level: 2 },
  { id: "things-to-do", title: "The Town & the Wider Circuit", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SerchhipGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/chandigarh/hero.jpg"
              alt="Scenic hill town landscape, evoking Serchhip's setting in central Mizoram"
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
                { label: "Serchhip", href: null },
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
              {["Serchhip", "Mizoram", "Serchhip District", "Gateway Town"].map((tag) => (
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
              Serchhip: The Practical Gateway to Central Mizoram
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A district headquarters town with a pleasant hill setting, and
              the natural base for exploring Vantawng Falls, Thenzawl, and
              Tamdil Lake.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Serchhip District, Mizoram",
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
                  <h2>Central Mizoram&apos;s Practical Gateway</h2>
                  <p>
                    <strong>Serchhip</strong> is the headquarters of Serchhip
                    district and functions primarily as a gateway and base
                    town for exploring central Mizoram&apos;s natural
                    attractions, particularly{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">
                      Vantawng Falls
                    </Link>
                    , which sits within Serchhip district itself.
                  </p>
                  <p>
                    The town has a pleasant, scenic hill setting typical of
                    Mizoram, though it functions more as a practical base
                    than a singular headline attraction — worth saying
                    plainly so visitors set the right expectations. As a
                    district headquarters, it has reasonable infrastructure
                    for a Mizoram town of its size, making it a comfortable
                    stop for travelers exploring the wider region.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏘️</span> Serchhip at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Mizoram" },
                        { icon: "🚗", label: "From Aizawl", value: "Manageable drive" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🎯", label: "Role", value: "Gateway / Base Town" },
                        { icon: "🏞️", label: "Nearby", value: "Vantawng Falls, Thenzawl" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹4,000" },
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
                  <h2>Best Time to Visit Serchhip</h2>
                  <p>Mizoram&apos;s subtropical hill climate shapes when the town and its surrounding sights are most comfortable to explore.</p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear — the most comfortable window for using Serchhip as a base for regional sightseeing.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Temperatures climb ahead of the monsoon, still workable with an early start.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Roads to Vantawng Falls and Tamdil Lake can get slippery; plan with extra flexibility.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🧣",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, clearest",
                        text: "The most reliable stretch for clear regional day trips and comfortable walking weather.",
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
                    <strong>Our pick:</strong> October to March — cool, dry
                    conditions that make Serchhip a comfortable base for
                    exploring the wider central Mizoram circuit.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Serchhip</h2>
                  <ul>
                    <li>
                      <strong>By road from Aizawl:</strong> A manageable
                      drive, making Serchhip an easy first stop when heading
                      into central Mizoram.
                    </li>
                    <li>
                      <strong>Nearest airport:</strong> Lengpui Airport near
                      Aizawl is the state&apos;s main air connection, with a
                      road transfer onward to Serchhip.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Stock up on any supplies you
                    need in Serchhip before heading further into central
                    Mizoram — it has better infrastructure than some of the
                    smaller stops on the circuit.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Town & the Wider Circuit</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Hill town setting evoking Serchhip, Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Town Itself</h3>
                  <p>
                    Serchhip&apos;s hill setting is pleasant for a short
                    walk, and the town has enough services to function
                    comfortably as a base — but it&apos;s honest to say the
                    main draw of visiting this area is the surrounding
                    countryside, not the town itself.
                  </p>
                  <h3>Vantawng Falls</h3>
                  <p>
                    Mizoram&apos;s highest waterfall sits within Serchhip
                    district, a short drive from town — see our full{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">
                      Vantawng Falls guide
                    </Link>{" "}
                    for details.
                  </p>
                  <h3>Thenzawl & Tamdil Lake</h3>
                  <p>
                    Both{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>{" "}
                    and{" "}
                    <Link href="/blog/tamdil-lake-travel-guide">
                      Tamdil Lake
                    </Link>{" "}
                    are close enough to combine with Serchhip into a single
                    central Mizoram circuit.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Serchhip</h2>
                  <p>
                    As a district headquarters, Serchhip offers reasonable
                    infrastructure for a comfortable overnight base.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Local guesthouses", "Basic lodges near the town centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Small hotels", "Family-run stays"] },
                      { tier: "Luxury", icon: "🌿", range: "₹3,500–₹6,000+/night", picks: ["Best-available rooms in town", "Advance booking recommended"] },
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
                        day: "Day 1",
                        title: "Arrival & Vantawng Falls",
                        color: "bg-amber-700",
                        activities: ["Drive in from Aizawl, check in", "Afternoon visit to Vantawng Falls", "Evening in Serchhip town"],
                      },
                      {
                        day: "Day 2",
                        title: "Onward to Thenzawl",
                        color: "bg-sky-600",
                        activities: ["Drive to Thenzawl", "Visit Tamdil Lake", "Continue the central Mizoram circuit"],
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
                </section>

                <section id="food-guide">
                  <h2>Where to Eat in Serchhip</h2>
                  <ul>
                    <li>
                      <strong>Local eateries:</strong> Simple Mizo meals are
                      the standard fare in town — rice, meat or fish
                      curries, and bai.
                    </li>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Most
                      accommodation serves home-style meals, a reliable
                      option given the limited standalone restaurant scene.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹4,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
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
                  <h2>Essential Tips for Visiting Serchhip</h2>
                  <ul>
                    <li>
                      <strong>Use it as a base, not a destination:</strong>{" "}
                      Set expectations honestly — the appeal is the
                      surrounding circuit, not the town itself.
                    </li>
                    <li>
                      <strong>Stock up before heading further:</strong>{" "}
                      Serchhip has better infrastructure than some smaller
                      stops on the central Mizoram circuit.
                    </li>
                    <li>
                      <strong>Combine with Vantawng Falls, Thenzawl, and
                      Tamdil Lake:</strong> All three are within easy reach.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Use Serchhip as a base for the central circuit", "Stock up on supplies before heading further", "Visit Vantawng Falls while based here", "Carry cash for the region", "Plan an early start for regional day trips"].map((item) => (
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
                        {["Expect a headline attraction in the town itself", "Skip Vantawng Falls given how close it is", "Assume wide card acceptance outside Aizawl", "Rush between Serchhip and Thenzawl in one day without planning", "Forget to check road conditions in monsoon"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Serchhip pairs
                    naturally with{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">Vantawng Falls</Link>
                    ,{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>,
                    and{" "}
                    <Link href="/blog/tamdil-lake-travel-guide">
                      Tamdil Lake
                    </Link>
                    . See our full{" "}
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
                {["Serchhip", "Mizoram", "Serchhip District", "Gateway Town", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="serchhip-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="serchhip-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
