// src/app/blog/vantawng-falls-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Vantawng Falls Guide: Mizoram's Tallest Falls",
  description:
    "Complete Vantawng Falls guide — Mizoram's highest waterfall, the viewing platform, best time to see it at full flow, how to reach from Thenzawl, and a full visit plan.",
  keywords:
    "Vantawng Falls, Mizoram's tallest waterfall, Vantawng Falls Serchhip, how to reach Vantawng Falls, Thenzawl waterfall, Mizoram waterfalls, best time Vantawng Falls",
  openGraph: {
    title: "Vantawng Falls Guide: Mizoram's Tallest Falls",
    description:
      "A multi-tiered cascade through forested gorge — Mizoram's highest and most spectacular waterfall, the complete Vantawng Falls guide.",
    url: "https://club.kudozz.in/blog/vantawng-falls-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Multi-tiered waterfall in forested terrain, evoking Vantawng Falls in Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantawng Falls Guide: Mizoram's Tallest Falls",
    description:
      "A multi-tiered cascade through forested gorge — Mizoram's highest and most spectacular waterfall.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/vantawng-falls-travel-guide",
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
          headline: "Vantawng Falls Guide: Mizoram's Tallest Falls",
          description:
            "Complete Vantawng Falls guide — Mizoram's highest waterfall, the viewing platform, best time to see it at full flow, how to reach from Thenzawl, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/vantawng-falls-travel-guide",
          },
          keywords: "Vantawng Falls, Mizoram, waterfall, Serchhip district, off-beat",
          about: {
            "@type": "Place",
            name: "Vantawng Falls",
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
              { "@type": "ListItem", position: 4, name: "Vantawng Falls" },
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
    q: "How tall is Vantawng Falls?",
    a: "Vantawng Falls is Mizoram's highest waterfall, dropping in multiple tiers through a forested gorge near Thenzawl in Serchhip district — widely regarded as one of the scenic highlights of the state.",
  },
  {
    q: "Is Vantawng Falls easy to access?",
    a: "Yes, relative to many of Mizoram's remote natural attractions — a viewing platform offers a good vantage point over the falls without requiring a difficult descent.",
  },
  {
    q: "How far is Vantawng Falls from Thenzawl and Aizawl?",
    a: "It's a short drive from Thenzawl, which itself is roughly 130 km (4-5 hours) from Aizawl. Most visitors base themselves in Thenzawl and visit the falls as part of a central Mizoram day trip.",
  },
  {
    q: "What is the best time to see the falls at their fullest?",
    a: "Monsoon (June-September) brings the strongest flow but wetter, more difficult access. Post-monsoon through winter (October-February) offers a strong flow combined with clear access and comfortable weather — the better balance for most visitors.",
  },
  {
    q: "Can Vantawng Falls be combined with Tamdil Lake in one day?",
    a: "Yes — both sit close to Thenzawl, making it easy to combine a morning at Tamdil Lake with an afternoon stop at Vantawng Falls in a single day trip.",
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
  { id: "introduction", title: "Mizoram's Highest Waterfall", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vantawng Falls", level: 2 },
  { id: "things-to-do", title: "The Falls & Viewing Platform", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VantawngFallsGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Multi-tiered waterfall in forested terrain, evoking Vantawng Falls in Mizoram"
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
                { label: "Vantawng Falls", href: null },
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
              {["Vantawng Falls", "Mizoram", "Waterfall", "Serchhip District"].map((tag) => (
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
              Vantawng Falls: Mizoram&apos;s Tallest Waterfall
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A multi-tiered cascade dropping through a forested gorge near
              Thenzawl — widely regarded as one of the scenic highlights of
              the entire state.
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
                  text: "1,950 words",
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
                  <h2>Mizoram&apos;s Highest Waterfall</h2>
                  <p>
                    <strong>Vantawng Falls</strong> is Mizoram&apos;s highest
                    and most spectacular waterfall, a multi-tiered cascade
                    dropping dramatically through a forested gorge near{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>{" "}
                    in Serchhip district. It&apos;s widely regarded as one of
                    the scenic highlights of the entire state — the kind of
                    view that stops most visitors in their tracks.
                  </p>
                  <p>
                    A viewing platform offers a good vantage point over the
                    falls without requiring a difficult descent, making it
                    relatively accessible compared to some of Mizoram&apos;s
                    more remote natural attractions.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💧</span> Vantawng Falls at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Serchhip District, Mizoram" },
                        { icon: "🚗", label: "From Thenzawl", value: "Short drive" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "💧", label: "Known For", value: "Tallest Falls in Mizoram" },
                        { icon: "🥾", label: "Access", value: "Viewing platform" },
                        { icon: "🎯", label: "Pairs Well With", value: "Tamdil Lake" },
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
                  <h2>Best Time to Visit Vantawng Falls</h2>
                  <p>The falls&apos; flow and the region&apos;s road conditions both shape when a visit is at its best.</p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Strong flow combined with clear, dry access and comfortable temperatures — the most reliable window.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, flow easing",
                        text: "Still a good visit, though flow gradually reduces as the dry season progresses toward summer.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — fullest flow",
                        text: "The falls are at their most dramatic, but access roads and the viewing platform area can be slippery and difficult.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest skies",
                        text: "The best photography window, with crisp air and minimal cloud cover over the gorge.",
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
                    <strong>Our pick:</strong> October to February — a strong
                    flow, clear access, and the best conditions for enjoying
                    the viewing platform without slippery footing.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vantawng Falls</h2>
                  <ul>
                    <li>
                      <strong>From Thenzawl:</strong> A short drive — the
                      practical base for visiting the falls.
                    </li>
                    <li>
                      <strong>From Aizawl:</strong> Roughly 130 km to
                      Thenzawl first, then onward to the falls, a combined
                      journey of around 4-5 hours.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>{" "}
                    rather than day-tripping directly from Aizawl — it makes
                    combining the falls with Tamdil Lake far more relaxed.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Falls & Viewing Platform</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Waterfall cascading through forest, evoking Vantawng Falls"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Viewing Platform</h3>
                  <p>
                    A purpose-built platform offers a good vantage point over
                    the full drop of the falls without requiring visitors to
                    scramble down into the gorge — the main way most people
                    experience Vantawng Falls.
                  </p>
                  <h3>The Multi-Tiered Drop</h3>
                  <p>
                    The falls cascade through several tiers as they descend
                    the forested gorge, giving the site a genuinely dramatic
                    scale that&apos;s best appreciated from the platform in
                    good light.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There&apos;s no dedicated accommodation at the falls
                    themselves —{" "}
                    <Link href="/blog/thenzawl-travel-guide">Thenzawl</Link>{" "}
                    is the practical base for anyone visiting.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Thenzawl", "Basic lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Small hotels in Thenzawl", "Family-run stays"] },
                      { tier: "Luxury", icon: "🌿", range: "₹3,500–₹6,000+/night", picks: ["Best-available rooms in Thenzawl", "Advance booking recommended"] },
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
                        title: "Falls & Tamdil Lake Combo",
                        color: "bg-amber-700",
                        activities: ["Drive from Thenzawl to Vantawng Falls", "Time at the viewing platform", "Continue to Tamdil Lake in the afternoon"],
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
                    <Link href="/blog/tamdil-lake-travel-guide">Tamdil Lake</Link>{" "}
                    for an efficient central Mizoram day trip from Thenzawl.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>No facilities at the falls:</strong> Carry
                      water and snacks — eat before or after in Thenzawl.
                    </li>
                    <li>
                      <strong>Thenzawl guesthouse meals:</strong> The most
                      reliable dining option before or after your visit.
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
                          ["Local transport (round trip)", "₹500", "₹1,200", "₹2,500"],
                          ["Entry/parking fee", "₹50", "₹50", "₹50"],
                          ["Food/day (in Thenzawl)", "₹400", "₹800", "₹1,500"],
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
                  <h2>Essential Tips for Visiting Vantawng Falls</h2>
                  <ul>
                    <li>
                      <strong>Use the viewing platform:</strong> It offers a
                      genuinely good vantage point without a difficult
                      climb.
                    </li>
                    <li>
                      <strong>Wear grippy footwear:</strong> Surfaces near
                      the platform can be wet, especially post-monsoon.
                    </li>
                    <li>
                      <strong>Combine with Tamdil Lake:</strong> The two sit
                      close enough together to make an efficient single-day
                      loop from Thenzawl.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Oct-Feb for the best balance of flow and access", "Wear grippy footwear on the platform", "Combine with Tamdil Lake", "Carry water and snacks", "Photograph in the morning for the best light"].map((item) => (
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
                        {["Attempt a difficult descent beyond the platform", "Visit during heavy monsoon downpours", "Expect food facilities at the falls", "Skip Tamdil Lake if you have the time", "Forget cash for local transport"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Vantawng Falls pairs
                    naturally with{" "}
                    <Link href="/blog/tamdil-lake-travel-guide">Tamdil Lake</Link>{" "}
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
                {["Vantawng Falls", "Mizoram", "Waterfall", "Serchhip District", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="vantawng-falls-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="vantawng-falls-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
