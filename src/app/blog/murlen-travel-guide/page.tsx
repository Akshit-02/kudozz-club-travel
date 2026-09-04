// src/app/blog/murlen-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Murlen National Park: Biodiversity & Tips",
  description:
    "Complete Murlen National Park guide — exceptional Indo-Myanmar biodiversity corridor flora and fauna, trekking, proximity to Champhai, how to reach, and a full visit plan.",
  keywords:
    "Murlen National Park, Mizoram biodiversity, Champhai, Indo-Myanmar biodiversity hotspot, Mizoram trekking, how to reach Murlen National Park",
  openGraph: {
    title: "Murlen National Park: Biodiversity & Tips",
    description:
      "An under-explored park within the Indo-Myanmar biodiversity hotspot, near Champhai in eastern Mizoram — the complete Murlen guide.",
    url: "https://club.kudozz.in/blog/murlen-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested mountain landscape, evoking Murlen National Park's biodiversity-rich terrain near Champhai, Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Murlen National Park: Biodiversity & Tips",
    description:
      "A relatively unexplored park in the Indo-Myanmar biodiversity corridor near Champhai — the complete Murlen guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/murlen-travel-guide",
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
          headline: "Murlen National Park: Biodiversity & Tips",
          description:
            "Complete Murlen National Park guide — exceptional Indo-Myanmar biodiversity corridor flora and fauna, trekking, proximity to Champhai, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/murlen-travel-guide",
          },
          keywords: "Murlen National Park, Mizoram, Champhai, biodiversity, trekking",
          about: {
            "@type": "Place",
            name: "Murlen National Park",
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
              { "@type": "ListItem", position: 4, name: "Murlen National Park" },
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
    q: "What makes Murlen National Park's biodiversity significant?",
    a: "Murlen sits within the broader Indo-Myanmar biodiversity corridor, one of the world's recognised biodiversity hotspots. Its flora and fauna diversity is exceptional, and the park remains relatively unexplored and under-surveyed compared to India's more famous wildlife destinations, giving it genuine scientific interest.",
  },
  {
    q: "How far from Champhai?",
    a: "Murlen National Park is near Champhai in eastern Mizoram, with the town serving as the practical base and gateway for anyone visiting the park.",
  },
  {
    q: "Is it a day trip?",
    a: "It can be, depending on how deep into the park you go — many visitors treat it as a day trip or short trek from Champhai, though a longer stay allows for more thorough exploration.",
  },
  {
    q: "Do I need a guide?",
    a: "Yes, strongly advised. Given the park's remoteness and relatively undeveloped visitor infrastructure, a local guide makes both navigation and wildlife spotting considerably easier.",
  },
  {
    q: "What wildlife might I encounter?",
    a: "Murlen supports a range of species typical of this ecologically rich border region, reflecting its position within the Indo-Myanmar biodiversity hotspot — though as an under-surveyed park, exact sighting odds for specific species are less documented than at India's better-known reserves.",
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
  { id: "introduction", title: "A Biodiversity Hotspot", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Murlen", level: 2 },
  { id: "things-to-do", title: "Trekking & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MurlenGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Forested mountain landscape, evoking Murlen National Park's biodiversity-rich terrain near Champhai, Mizoram"
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
                { label: "Murlen National Park", href: null },
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
              {["Murlen National Park", "Mizoram", "Champhai", "Biodiversity"].map((tag) => (
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
              Murlen National Park: Biodiversity Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A relatively unexplored park within the Indo-Myanmar
              biodiversity hotspot, best reached through nearby Champhai.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Champhai district, Mizoram",
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
                  <h2>A Biodiversity Hotspot</h2>
                  <p>
                    <strong>Murlen National Park</strong>, near Champhai in
                    eastern Mizoram, is known for exceptional floral and
                    faunal diversity — owed largely to its position within
                    the wider Indo-Myanmar biodiversity corridor, one of the
                    world&apos;s formally recognised biodiversity hotspots.
                  </p>
                  <p>
                    Unlike India&apos;s more famous wildlife parks, Murlen
                    remains relatively unexplored and under-surveyed, which
                    gives it genuine scientific interest and appeals to
                    travelers who want something authentically off the
                    beaten path rather than a well-trodden safari circuit.
                    Trekking through its dense forest is the main way to
                    experience the park, and it&apos;s closely tied to{" "}
                    <Link href="/blog/champhai-travel-guide">Champhai</Link>,
                    the practical base for any visit.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Murlen at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Near Champhai, Mizoram" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🌏", label: "Setting", value: "Indo-Myanmar biodiversity corridor" },
                        { icon: "🥾", label: "Explore By", value: "Trekking" },
                        { icon: "🔬", label: "Character", value: "Under-explored, scientifically rich" },
                        { icon: "🎯", label: "Gateway", value: "Champhai town" },
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
                  <h2>Best Time to Visit Murlen</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, stable conditions make trekking through the park's dense forest genuinely comfortable.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pre-monsoon",
                        text: "Still trekkable, though building heat and humidity make early starts worthwhile.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes trails slippery and difficult; best avoided for trekking into the park.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest conditions",
                        text: "Cool, dry air gives the clearest visibility for exploring the park's forest trails.",
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
                    <strong>Our pick:</strong> November to February — the
                    most comfortable trekking conditions and clearest forest
                    visibility.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Murlen National Park</h2>
                  <ul>
                    <li>
                      <strong>Via Champhai:</strong> The practical gateway
                      to Murlen — cross-link{" "}
                      <Link href="/blog/champhai-travel-guide">Champhai</Link>,
                      reached by road from Aizawl before continuing to the
                      park.
                    </li>
                    <li>
                      <strong>Local guide:</strong> Given the park&apos;s
                      remoteness and undeveloped visitor infrastructure, a
                      local guide is genuinely valuable for both navigation
                      and wildlife spotting.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Champhai
                    and arrange the trek into Murlen as a day excursion
                    unless you plan to go deep into the park.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Trekking & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Dense forested hills, evoking Murlen National Park's trekking terrain"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Forest Trekking</h3>
                  <p>
                    Trekking is the main way to experience Murlen&apos;s
                    biodiversity, moving through dense forest that supports
                    a range of species typical of this ecologically rich
                    border region.
                  </p>
                  <h3>Flora & Fauna Diversity</h3>
                  <p>
                    Murlen&apos;s location within the Indo-Myanmar
                    biodiversity corridor gives it exceptional species
                    diversity — though as an under-surveyed park, much of
                    what lives here is still being documented, adding a
                    genuine sense of discovery to a visit.
                  </p>
                  <h3>Champhai Connection</h3>
                  <p>
                    The park&apos;s close relationship with nearby{" "}
                    <Link href="/blog/champhai-travel-guide">Champhai</Link>{" "}
                    means most visitors combine the two, using the town as
                    a comfortable base for exploring the park.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There is little to no accommodation within Murlen
                    itself — Champhai is the realistic base for any visit.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: ["Basic guesthouses, Champhai", "Government circuit houses (if available)"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: ["Better-appointed hotels, Champhai"],
                      },
                      {
                        tier: "Practical Note",
                        icon: "⚠️",
                        range: "Plan ahead",
                        picks: ["No lodging inside the park", "Champhai is the realistic base", "Arrange guides through Champhai"],
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
                        day: "Day 1",
                        title: "Champhai to Murlen",
                        color: "bg-amber-700",
                        activities: ["Base in Champhai overnight", "Arrange guide for the following day"],
                      },
                      {
                        day: "Day 2",
                        title: "Murlen Trek",
                        color: "bg-sky-600",
                        activities: ["Trek into Murlen National Park", "Explore forest trails with a guide", "Return to Champhai by evening"],
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
                    * Extend to a longer trek if going deeper into the
                    park — see our full{" "}
                    <Link href="/blog/champhai-travel-guide">Champhai guide</Link>{" "}
                    for the wider eastern Mizoram region.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Champhai town:</strong> A reasonable spread
                      of local Mizo eateries, the practical base for meals
                      before and after the trek.
                    </li>
                    <li>
                      <strong>Carry supplies:</strong> Minimal facilities
                      within the park itself, so pack water and food for
                      the day.
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
                          ["Accommodation/night (Champhai)", "₹800", "₹2,200"],
                          ["Guide + permit/day", "₹1,200", "₹2,000"],
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
                  <h2>Essential Tips for Visiting Murlen</h2>
                  <ul>
                    <li>
                      <strong>Hire a local guide:</strong> Given the
                      park&apos;s remoteness and undeveloped visitor
                      infrastructure, this is genuinely important.
                    </li>
                    <li>
                      <strong>Combine with Champhai:</strong> Treat this as
                      part of a wider eastern Mizoram trip rather than a
                      standalone stop.
                    </li>
                    <li>
                      <strong>Approach with a nature-focused mindset:</strong>{" "}
                      This is a genuine biodiversity/nature experience,
                      not a polished wildlife-park visitor setup.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Base yourself in Champhai",
                          "Hire a local guide for the trek",
                          "Visit Oct-Mar for the driest trails",
                          "Combine with wider Champhai sightseeing",
                          "Carry water and snacks for the day",
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
                          "Trek without a local guide",
                          "Attempt heavy trekking during monsoon",
                          "Expect a polished wildlife-park setup",
                          "Skip planning accommodation in Champhai first",
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
                    <strong>🗺️ Extend the trip:</strong> Murlen pairs
                    naturally with{" "}
                    <Link href="/blog/champhai-travel-guide">Champhai</Link>.
                    See our full{" "}
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
                {["Murlen National Park", "Mizoram", "Champhai", "Biodiversity", "Trekking"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="murlen-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="murlen-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
