// src/app/blog/palak-dil-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Palak Dil Guide: Mizoram's Largest Lake",
  description:
    "Complete Palak Dil guide — Mizoram's largest natural lake in remote Saiha district, the flood-village legend behind it, birdlife, how to reach, and a full visit plan.",
  keywords:
    "Palak Dil travel guide, Mizoram largest lake, Saiha district, Palak lake legend, Mizoram offbeat destinations, how to reach Palak Dil, South Mizoram travel",
  openGraph: {
    title: "Palak Dil Guide: Mizoram's Largest Lake",
    description:
      "Mizoram's largest natural lake, ringed by dense forest deep in remote Saiha district — the complete guide to Palak Dil.",
    url: "https://club.kudozz.in/blog/palak-dil-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Calm forested lake, evoking Palak Dil, Mizoram's largest natural lake in remote Saiha district",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Palak Dil Guide: Mizoram's Largest Lake",
    description:
      "Mizoram's largest natural lake, deep in remote Saiha district near the Myanmar border — the complete Palak Dil guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/palak-dil-travel-guide",
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
          headline: "Palak Dil Guide: Mizoram's Largest Lake",
          description:
            "Complete Palak Dil guide — Mizoram's largest natural lake in remote Saiha district, the flood-village legend behind it, birdlife, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/palak-dil-travel-guide",
          },
          keywords: "Palak Dil, Mizoram, Saiha district, largest lake, off-beat",
          about: {
            "@type": "Place",
            name: "Palak Dil",
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
              { "@type": "ListItem", position: 4, name: "Palak Dil" },
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
    q: "How remote is Palak Dil and how long does it take to reach?",
    a: "Genuinely remote — Palak Dil sits in Saiha district in the far south of Mizoram, near the Myanmar border, and reaching it from Aizawl involves a long journey over multiple days given the distance and road conditions. This is one of the most remote destinations in the state, not a casual day trip.",
  },
  {
    q: "What is the legend behind the lake?",
    a: "Local legend holds that a village once stood at the site before being submerged by a great flood, with Palak Dil forming as a result. The story is part of the area's oral tradition and adds a layer of cultural meaning to a visit beyond the scenery alone.",
  },
  {
    q: "Is it worth the effort compared to more accessible Mizoram lakes like Tamdil?",
    a: "That depends on what you're after. Tamdil Lake is far easier to reach from Aizawl and better suited to a relaxed day trip. Palak Dil is for travelers specifically seeking remoteness, forest scenery, and a genuine off-the-grid experience — it rewards effort rather than convenience.",
  },
  {
    q: "Is a guide necessary?",
    a: "Yes, strongly advised. Given the remote setting, limited signage, and sparse infrastructure in Saiha district, a local guide makes navigation, permissions, and logistics considerably easier and safer.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to March offers the most comfortable travel conditions for the long approach to Saiha district. Heavy monsoon rains (roughly June-September) can make the already-difficult roads considerably harder to manage.",
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
  { id: "introduction", title: "Mizoram's Largest Lake", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Palak Dil", level: 2 },
  { id: "things-to-do", title: "The Lake, Forest & Legend", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PalakDilGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Calm forested lake, evoking Palak Dil, Mizoram's largest natural lake in remote Saiha district"
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
                { label: "Palak Dil", href: null },
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
              {["Palak Dil", "Mizoram", "Saiha District", "Off-beat"].map((tag) => (
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
              Palak Dil: Mizoram&apos;s Largest Lake Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A vast forest-ringed lake deep in Mizoram&apos;s remote south, born —
              local legend says — from a village lost to a flood.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Saiha district, Mizoram",
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
                  <h2>Mizoram&apos;s Largest Lake</h2>
                  <p>
                    <strong>Palak Dil</strong> is Mizoram&apos;s largest natural
                    lake, tucked into Saiha district in the far south of the
                    state, close to the Myanmar border. Local legend holds
                    that a village once stood on this very ground before a
                    great flood submerged it, and that the lake formed in its
                    place — a striking origin story that shapes how the site
                    is understood locally, not just a scenic backdrop.
                  </p>
                  <p>
                    Dense forest wraps around the water on almost every side,
                    and the surrounding wilderness supports notable birdlife,
                    drawing a small but dedicated stream of nature-focused
                    travelers each year. What sets Palak Dil apart from
                    Mizoram&apos;s more accessible lakes, like{" "}
                    <Link href="/blog/mizoram-travel-guide">Tamdil Lake</Link>{" "}
                    closer to Aizawl, is precisely its remoteness — this is
                    not a lake you stumble upon on a weekend drive.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Palak Dil at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Saiha district, Mizoram" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🏞️", label: "Known For", value: "Largest lake in Mizoram" },
                        { icon: "🐦", label: "Wildlife", value: "Forest birdlife" },
                        { icon: "🚗", label: "Access", value: "Remote, multi-day trip" },
                        { icon: "📖", label: "Legend", value: "A village lost to flood" },
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
                  <h2>Best Time to Visit Palak Dil</h2>
                  <p>
                    The window for a comfortable visit is shaped almost
                    entirely by the difficulty of the approach through
                    Saiha district.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, stable conditions make the long journey to Saiha district considerably more manageable, and the lake and surrounding forest are at their most pleasant.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pre-monsoon",
                        text: "Still workable for the journey, though heat and humidity build ahead of the monsoon.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the already difficult roads into Saiha district genuinely risky. This window is best avoided entirely.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest forest views",
                        text: "Cooler, drier air gives the clearest views across the lake and the forested hills around it.",
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
                    <strong>Our pick:</strong> November to February —
                    the roads into Saiha district are at their most
                    reliable, and the lake is at its most atmospheric.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Palak Dil</h2>
                  <p>
                    This is genuinely one of the most remote destinations in
                    Mizoram, and the journey should be planned with that in
                    mind rather than treated as a casual add-on to an
                    Aizawl-based trip.
                  </p>
                  <ul>
                    <li>
                      <strong>From Aizawl:</strong> A long overland journey
                      south through Lunglei and on to Saiha town, typically
                      requiring an overnight stop en route given the
                      distance and road conditions.
                    </li>
                    <li>
                      <strong>From Saiha town:</strong> A further stretch of
                      road, often the roughest leg of the trip, connects
                      Saiha to the lake itself.
                    </li>
                    <li>
                      <strong>Local guidance:</strong> Given limited
                      signage, arranging a local guide or driver familiar
                      with the route from Saiha is strongly advisable.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm current road
                    conditions in Saiha district before setting out — this
                    is not a route to attempt casually or without
                    up-to-date local information.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Lake, Forest & Legend</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Forested lake shoreline, evoking Palak Dil in southern Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Lake Itself</h3>
                  <p>
                    As Mizoram&apos;s largest natural lake, Palak Dil has a
                    genuine sense of scale that&apos;s rare among the
                    state&apos;s smaller water bodies. Its shoreline is
                    almost entirely forested, with few signs of development
                    breaking the tree line.
                  </p>
                  <h3>The Flood-Village Legend</h3>
                  <p>
                    Local oral tradition holds that a village once stood
                    where the lake now sits, and that a great flood
                    submerged it, giving rise to Palak Dil. The story is
                    worth asking a local guide about in more detail — it
                    adds a layer of meaning that pure scenery doesn&apos;t
                    capture on its own.
                  </p>
                  <h3>Birdlife & Forest</h3>
                  <p>
                    The dense forest ringing the lake supports a range of
                    birdlife, making a quiet early-morning walk along the
                    shoreline rewarding for anyone with even a casual
                    interest in birdwatching.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Palak Dil</h2>
                  <p>
                    Accommodation options are genuinely limited — this is not
                    a destination with a developed hospitality scene, and
                    that should be understood plainly before planning a trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: ["Basic guesthouses, Saiha town", "Government circuit houses (if available)", "Homestays via local contacts"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹2,500/night",
                        picks: ["Better-appointed lodges, Saiha town", "Pre-arranged stays via local operators"],
                      },
                      {
                        tier: "Practical Note",
                        icon: "⚠️",
                        range: "Plan ahead",
                        picks: ["No accommodation at the lake itself", "Saiha town is the realistic base", "Confirm arrangements before travel"],
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
                  <p>
                    Given the remoteness, treat this as a multi-day trip
                    rather than a rushed excursion.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Aizawl to Saiha",
                        color: "bg-amber-700",
                        activities: ["Long overland drive south via Lunglei", "Overnight stop en route if needed", "Arrive Saiha town, rest"],
                      },
                      {
                        day: "Day 2",
                        title: "Palak Dil",
                        color: "bg-sky-600",
                        activities: ["Drive from Saiha to the lake", "Explore the shoreline and forest", "Learn the local legend from a guide"],
                      },
                      {
                        day: "Day 3",
                        title: "Return Journey",
                        color: "bg-forest-600",
                        activities: ["Depart Saiha for Aizawl", "Overnight stop en route if needed"],
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
                      <strong>Saiha town eateries:</strong> Simple local
                      Mizo meals are the norm — expect basic but hearty
                      fare rather than a varied restaurant scene.
                    </li>
                    <li>
                      <strong>Carry your own supplies:</strong> Between
                      Saiha and the lake, facilities are minimal, so pack
                      snacks and water for the day.
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
                          ["Accommodation/night", "₹800", "₹2,000"],
                          ["Vehicle hire (round trip from Aizawl)", "₹8,000", "₹14,000"],
                          ["Food/day", "₹400", "₹800"],
                          ["Local guide/day", "₹800", "₹1,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Vehicle hire is a round-trip figure best split across a group, given the distance involved.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Palak Dil</h2>
                  <ul>
                    <li>
                      <strong>Plan well in advance:</strong> Confirm road
                      conditions, accommodation, and guide arrangements
                      before setting out — this is not a spontaneous trip.
                    </li>
                    <li>
                      <strong>Hire a local guide:</strong> Given limited
                      signage and infrastructure, local knowledge is
                      genuinely valuable here.
                    </li>
                    <li>
                      <strong>Budget extra travel days:</strong> The
                      distance from Aizawl means this trip needs real time,
                      not a rushed weekend.
                    </li>
                    <li>
                      <strong>Carry cash and supplies:</strong> ATM access
                      and shops thin out considerably beyond Saiha town.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Confirm road conditions before departing",
                          "Hire a local guide for the final approach",
                          "Carry sufficient cash and supplies",
                          "Budget at least 3 days for the round trip",
                          "Ask locally about the flood legend",
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
                          "Attempt the trip during heavy monsoon",
                          "Expect developed tourist infrastructure",
                          "Travel without confirming accommodation first",
                          "Rush the visit into a single rushed day",
                          "Rely on ATMs beyond Saiha town",
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
                    <strong>🗺️ Extend the trip:</strong> If Palak Dil&apos;s
                    remoteness isn&apos;t what you&apos;re after, Mizoram&apos;s
                    more accessible Tamdil Lake makes a much easier day trip
                    from Aizawl. See our full{" "}
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
                {["Palak Dil", "Mizoram", "Largest Lake", "Saiha District", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="palak-dil-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="palak-dil-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
