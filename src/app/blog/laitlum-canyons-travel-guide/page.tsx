// src/app/blog/laitlum-canyons-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Laitlum Canyons Guide: Meghalaya's Grand Canyon",
  description:
    "Complete Laitlum Canyons guide — sweeping gorge views near Shillong, the best sunset viewpoint, how to reach, and a full visit plan.",
  keywords:
    "Laitlum Canyons, Meghalaya Grand Canyon, Laitlum Shillong, Laitlum sunset point, how to reach Laitlum Canyons, Shillong day trip, Meghalaya viewpoints",
  openGraph: {
    title: "Laitlum Canyons Guide: Meghalaya's Grand Canyon",
    description:
      "A deep gorge, distant villages far below, and one of Meghalaya's most dramatic sunset viewpoints — the complete guide to Laitlum Canyons.",
    url: "https://club.kudozz.in/blog/laitlum-canyons-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Dramatic canyon and valley landscape, evoking Laitlum Canyons' sweeping gorge views near Shillong",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Laitlum Canyons Guide: Meghalaya's Grand Canyon",
    description:
      "A deep gorge, distant villages far below, and one of Meghalaya's most dramatic sunset viewpoints.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/laitlum-canyons-travel-guide",
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
          headline: "Laitlum Canyons Guide: Meghalaya's Grand Canyon",
          description:
            "Complete Laitlum Canyons guide — sweeping gorge views near Shillong, the best sunset viewpoint, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/laitlum-canyons-travel-guide",
          },
          keywords: "Laitlum Canyons, Meghalaya, Shillong, viewpoint, sunset, off-beat",
          about: {
            "@type": "Place",
            name: "Laitlum Canyons",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Laitlum Canyons" },
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
    q: "Why is Laitlum called Meghalaya's Grand Canyon?",
    a: "The name is an informal comparison drawn from the scale and drama of the view — Laitlum's viewpoint looks out over a deep gorge with distant villages visible far below, a landscape genuinely reminiscent of a canyon rather than Meghalaya's more typical forested hills or waterfalls.",
  },
  {
    q: "How far is Laitlum Canyons from Shillong?",
    a: "Laitlum is a manageable drive from Shillong, making it one of the easier and more popular half-day excursions from the capital.",
  },
  {
    q: "Is it a difficult hike or easily accessible?",
    a: "Laitlum is one of the more accessible Meghalaya viewpoints — it's reachable largely by vehicle with only minimal walking to the main viewpoint, unlike more demanding experiences such as the Nongriat living-root-bridge trek.",
  },
  {
    q: "What is the best time to visit for the views?",
    a: "October to April generally offers the clearest skies. Even then, Meghalaya's frequent mist and cloud cover can obscure the view, so check weather conditions before setting out rather than assuming a guaranteed clear vista.",
  },
  {
    q: "Is sunset really the best time to visit?",
    a: "Yes — late afternoon and evening light over the canyon and surrounding hills is widely considered the most dramatic time to be there, and it's the window most photographers and visitors specifically plan around.",
  },
  {
    q: "Can Laitlum be combined with other nearby attractions?",
    a: "Yes, it pairs naturally with Umiam Lake for an efficient near-Shillong day of sightseeing, since both are relatively short, easy excursions from the city.",
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
  { id: "introduction", title: "Meghalaya's Grand Canyon", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Laitlum Canyons", level: 2 },
  { id: "things-to-do", title: "The Viewpoint & Sunset", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LaitlumCanyonsGuidePage() {
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
              alt="Dramatic canyon and valley landscape, evoking Laitlum Canyons' sweeping gorge views near Shillong"
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
                { label: "Laitlum Canyons", href: null },
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
              {["Laitlum Canyons", "Shillong", "Meghalaya", "Viewpoint"].map((tag) => (
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
              Laitlum Canyons: Meghalaya's Grand Canyon Guide
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A gorge that plunges away beneath your feet, distant villages
              scattered far below, and one of the easiest, most dramatic
              sunset viewpoints near Shillong.
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
                  <h2>Meghalaya's Grand Canyon</h2>
                  <p>
                    <strong>Laitlum Canyons</strong>, a short drive from{" "}
                    <Link href="/blog/shillong-travel-guide">Shillong</Link>,
                    offers one of Meghalaya's most dramatic views — a deep
                    gorge dropping away below a viewpoint, with distant
                    villages scattered across the valley floor far beneath.
                    The scale and drama of the landscape have earned it the
                    informal nickname of Meghalaya's own "Grand Canyon," and
                    while the comparison is a stretch in literal terms, the
                    sense of sudden, vertiginous scale is genuinely there.
                  </p>
                  <p>
                    Unlike more demanding Meghalaya experiences such as the
                    Nongriat living-root-bridge trek, Laitlum is refreshingly
                    accessible — reachable largely by vehicle with only
                    minimal walking required to reach the main viewpoint,
                    making it a good fit for travelers with limited time,
                    limited mobility, or simply a preference for scenery
                    without a hike attached.
                  </p>
                  <p>
                    It's especially popular for sunset visits, when the light
                    over the canyon and surrounding hills turns genuinely
                    spectacular — plan your timing around this if the view is
                    the priority.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Laitlum Canyons at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Near Shillong, Meghalaya" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "🌄", label: "Known For", value: "Canyon views, sunset" },
                        { icon: "🚶", label: "Difficulty", value: "Easy — mostly vehicle access" },
                        { icon: "⏱️", label: "Time Needed", value: "Half day" },
                        { icon: "🎯", label: "Pairs Well With", value: "Umiam Lake" },
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
                  <h2>Best Time to Visit Laitlum Canyons</h2>
                  <p>
                    Meghalaya's weather — famously wet for much of the year —
                    plays a big role in whether Laitlum's views are visible
                    at all.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The driest, clearest window of the year, giving the best odds of an unobstructed view over the canyon and valley below.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon, increasingly humid",
                        text: "Still generally visitable, though cloud cover starts building more frequently as the monsoon approaches.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy mist and rain",
                        text: "Meghalaya's monsoon is intense, and Laitlum's views are frequently obscured entirely by thick mist and cloud during this window.",
                      },
                      {
                        season: "Late afternoon",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best time of day",
                        text: "Regardless of season, late afternoon and early evening light over the canyon is considered the most dramatic time to visit.",
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
                    <strong>Our pick:</strong> a dry-season afternoon between
                    October and April, timed to arrive an hour or so before
                    sunset for the best light over the gorge.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Laitlum Canyons</h2>
                  <ul>
                    <li>
                      <strong>By road from Shillong:</strong> A manageable
                      drive from the city, making Laitlum one of the more
                      accessible half-day excursions from Shillong.
                    </li>
                    <li>
                      <strong>Self-drive or taxi:</strong> Both are common —
                      the roads are generally in reasonable condition, though
                      as with much of Meghalaya, expect winding hill routes.
                    </li>
                    <li>
                      <strong>Minimal walking required:</strong> Unlike many
                      of Meghalaya's headline attractions, the main viewpoint
                      is reachable with only a short walk from where vehicles
                      can park.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check the weather forecast
                    before heading out — even in the dry season, mist can
                    roll in and obscure the view entirely, so a clear-sky day
                    is worth prioritizing over a fixed itinerary slot.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Viewpoint & Sunset</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Deep valley and canyon terrain, evoking the view from Laitlum Canyons"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Canyon Viewpoint</h3>
                  <p>
                    The main draw at Laitlum is simply the view itself — a
                    sudden, sweeping drop into a deep gorge, with villages and
                    terraced landscape visible far below. The scale is what
                    makes it memorable: after the closed-in forest and
                    waterfall scenery typical of much of Meghalaya, Laitlum's
                    open, vertiginous panorama feels like a genuine change of
                    register.
                  </p>
                  <h3>Sunset at Laitlum</h3>
                  <p>
                    Late afternoon light over the canyon and surrounding
                    hills is widely considered the best time to be at the
                    viewpoint, and many visitors plan their day specifically
                    to arrive in time for it. Arrive with enough daylight to
                    settle in before the light starts to turn, since the best
                    color often comes and goes quickly.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no dedicated accommodation at Laitlum itself —
                    almost everyone visits as a day trip from{" "}
                    <Link href="/blog/shillong-travel-guide">Shillong</Link>,
                    which has the region's full range of hotels and
                    guesthouses.
                  </p>
                  <blockquote>
                    Base yourself in Shillong and treat Laitlum as a
                    half-day excursion — there's genuinely no reason to stay
                    overnight at the canyons themselves.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Half Day",
                        title: "Shillong to Laitlum & Back",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Shillong in the early-to-mid afternoon",
                          "Arrive at Laitlum with time to explore before sunset",
                          "Watch the sunset over the canyon, then return to Shillong",
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
                    <Link href="/blog/umiam-lake-travel-guide">Umiam Lake</Link>{" "}
                    for a fuller near-Shillong day trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Local stalls near the viewpoint:</strong> A few
                      simple stalls sell tea and snacks near the main
                      viewpoint — useful for a quick bite while watching the
                      sunset.
                    </li>
                    <li>
                      <strong>Shillong:</strong> For a proper meal, wait
                      until you're back in Shillong, which has a far wider
                      range of restaurants and cafes.
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
                          ["Taxi hire (round trip from Shillong)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Snacks at the viewpoint", "₹100", "₹200", "₹300"],
                          ["Entry (if applicable)", "₹20", "₹20", "₹20"],
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
                    group; costs vary by group size and negotiation.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Laitlum Canyons</h2>
                  <ul>
                    <li>
                      <strong>Time your visit for late afternoon:</strong>{" "}
                      Sunset is genuinely the best time to be at the
                      viewpoint — don't rush through at midday if you can
                      help it.
                    </li>
                    <li>
                      <strong>Check the weather first:</strong> Mist can
                      obscure the view completely, even outside monsoon
                      season, so a clear-sky forecast matters more than the
                      exact calendar date.
                    </li>
                    <li>
                      <strong>Combine with Umiam Lake:</strong> Both are
                      short, easy excursions from Shillong and pair well in a
                      single day.
                    </li>
                    <li>
                      <strong>Bring a light jacket:</strong> It can get
                      breezy and cool at the viewpoint, especially as the sun
                      goes down.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Time your visit for sunset",
                          "Check weather/visibility before heading out",
                          "Combine with Umiam Lake for a fuller day",
                          "Bring a light jacket for the breeze",
                          "Carry cash for local stalls",
                          "Allow extra time in case of traffic leaving Shillong",
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
                          "Visit at midday expecting the best light",
                          "Assume the view will be clear without checking weather",
                          "Expect a demanding hike — it's mostly vehicle access",
                          "Rely on finding a meal at the viewpoint itself",
                          "Skip the jacket thinking it stays warm at sunset",
                          "Rush the visit — the view rewards a slower pace",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Laitlum
                    Canyons with{" "}
                    <Link href="/blog/umiam-lake-travel-guide">Umiam Lake</Link>{" "}
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
                {["Laitlum Canyons", "Shillong", "Meghalaya", "Viewpoint", "Sunset", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="laitlum-canyons-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="laitlum-canyons-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
