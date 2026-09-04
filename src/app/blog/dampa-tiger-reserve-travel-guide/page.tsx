// src/app/blog/dampa-tiger-reserve-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dampa Tiger Reserve: Safari Guide & Tips",
  description:
    "Complete Dampa Tiger Reserve guide — bamboo forest ecosystem, hoolock gibbons, birdwatching, honest notes on tiger sighting odds, how to reach, and a full visit plan.",
  keywords:
    "Dampa Tiger Reserve, Mizoram wildlife, Mamit district, hoolock gibbon Mizoram, bamboo forest reserve, Important Bird Area Mizoram, how to reach Dampa Tiger Reserve",
  openGraph: {
    title: "Dampa Tiger Reserve: Safari Guide & Tips",
    description:
      "A bamboo-forest reserve on the Bangladesh border, better known for gibbons and birdlife than guaranteed tiger sightings — the complete Dampa guide.",
    url: "https://club.kudozz.in/blog/dampa-tiger-reserve-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green forest landscape, evoking Dampa Tiger Reserve's bamboo forest ecosystem in Mamit district, Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dampa Tiger Reserve: Safari Guide & Tips",
    description:
      "Bamboo forest, hoolock gibbons, and honest expectations on tiger sightings — the complete guide to Dampa Tiger Reserve.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dampa-tiger-reserve-travel-guide",
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
          headline: "Dampa Tiger Reserve: Safari Guide & Tips",
          description:
            "Complete Dampa Tiger Reserve guide — bamboo forest ecosystem, hoolock gibbons, birdwatching, honest notes on tiger sighting odds, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/dampa-tiger-reserve-travel-guide",
          },
          keywords: "Dampa Tiger Reserve, Mizoram, Mamit district, bamboo forest, wildlife safari",
          about: {
            "@type": "Place",
            name: "Dampa Tiger Reserve",
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
              { "@type": "ListItem", position: 4, name: "Dampa Tiger Reserve" },
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
    q: "Are tiger sightings likely at Dampa?",
    a: "Not really — as with several of Northeast India's lesser-known reserves, actual tiger sightings at Dampa are rare. It's better to visit for the reserve's overall ecological richness, its bamboo forest ecosystem, and its birdlife than to expect a guaranteed big-cat encounter.",
  },
  {
    q: "What makes the bamboo forest ecosystem distinctive?",
    a: "Dampa's habitat is dominated by bamboo forest, a distinctive vegetation type that supports a different mix of wildlife than the sal or evergreen forests found in many other Indian reserves — including elephants, serow, and hoolock gibbons.",
  },
  {
    q: "How far from Aizawl?",
    a: "Dampa Tiger Reserve is in Mamit district, reached by road from Aizawl — a journey of several hours depending on road conditions, making it a genuine excursion rather than a quick day trip.",
  },
  {
    q: "Is it good for birdwatching?",
    a: "Yes — Dampa is recognised as an Important Bird Area given its notable bird diversity, and it's a strong pick for birdwatchers even if tiger sightings aren't the priority.",
  },
  {
    q: "Can you see hoolock gibbons here?",
    a: "Hoolock gibbons — India's only ape species — are found within the reserve's bamboo and forest habitat, and spotting or hearing them is one of the more memorable wildlife experiences Dampa can offer, though sightings still require some luck and a good guide.",
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
  { id: "introduction", title: "A Bamboo Forest Reserve", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dampa", level: 2 },
  { id: "things-to-do", title: "Safaris, Gibbons & Birdlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DampaTigerReserveGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Green forest landscape, evoking Dampa Tiger Reserve's bamboo forest ecosystem in Mamit district, Mizoram"
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
                { label: "Dampa Tiger Reserve", href: null },
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
              {["Dampa Tiger Reserve", "Mizoram", "Mamit District", "Wildlife Safari"].map((tag) => (
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
              Dampa Tiger Reserve: Safari & Wildlife Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A bamboo-forest reserve on the Bangladesh border where gibbons
              and birdlife, not guaranteed tiger sightings, are the real draw.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mamit district, Mizoram",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>A Bamboo Forest Reserve</h2>
                  <p>
                    <strong>Dampa Tiger Reserve</strong>, in Mamit district
                    near the Bangladesh border, is one of India&apos;s
                    designated tiger reserves — though, honestly, it&apos;s
                    not the place to come expecting a guaranteed tiger
                    sighting. As with several of Northeast India&apos;s
                    lesser-known reserves, tigers here are elusive, and the
                    reserve is better appreciated for its overall ecological
                    richness than as a big-cat safari destination.
                  </p>
                  <p>
                    What Dampa does offer is genuinely distinctive: an
                    ecosystem dominated by bamboo forest, recognition as an
                    Important Bird Area, and a resident population of hoolock
                    gibbons — India&apos;s only ape species. Set that
                    expectation from the start and Dampa becomes a rewarding,
                    quietly rich wildlife destination in its own right.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Dampa at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Mamit district, Mizoram" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        { icon: "🎋", label: "Ecosystem", value: "Bamboo forest" },
                        { icon: "🐦", label: "Recognition", value: "Important Bird Area" },
                        { icon: "🐒", label: "Wildlife", value: "Hoolock gibbons, elephants" },
                        { icon: "🐅", label: "Tiger Sightings", value: "Rare — set expectations low" },
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
                  <h2>Best Time to Visit Dampa Tiger Reserve</h2>
                  <p>
                    The reserve&apos;s access and comfort levels shift
                    sharply with the seasons.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The reserve is typically open and accessible, with dry conditions making both safaris and birdwatching genuinely comfortable.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming up",
                        text: "Still workable, though heat and humidity build ahead of the monsoon.",
                      },
                      {
                        season: "Jul – Oct",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — often closed",
                        text: "Heavy rain frequently makes the reserve difficult or inaccessible; many operators pause visits during this window.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🐦",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak birdwatching",
                        text: "Cool, dry conditions and active bird populations make this the strongest window specifically for birding.",
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
                    <strong>Our pick:</strong> December to February —
                    the reserve is fully accessible and birdlife is at
                    its most active.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dampa Tiger Reserve</h2>
                  <ul>
                    <li>
                      <strong>From Aizawl:</strong> A road journey of
                      several hours to Mamit district, then on to the
                      reserve itself.
                    </li>
                    <li>
                      <strong>Permits:</strong> Entry requires forest
                      department permits, best arranged in advance through
                      a registered local operator or guide.
                    </li>
                    <li>
                      <strong>Local guide:</strong> Given the reserve&apos;s
                      size and the value of expert eyes for birding and
                      gibbon-spotting, a knowledgeable guide is genuinely
                      worth arranging.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your guide and
                    permits ahead of arrival — Mamit district has limited
                    walk-in infrastructure compared to more established
                    reserves elsewhere in India.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Safaris, Gibbons & Birdlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Dense forest canopy, evoking Dampa Tiger Reserve's bamboo forest ecosystem"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Bamboo Forest Ecosystem</h3>
                  <p>
                    Dampa&apos;s defining feature is its bamboo-dominated
                    forest, a habitat type distinct from the sal and
                    evergreen forests of many other Indian reserves — and
                    one worth appreciating on its own terms rather than
                    only as a backdrop for wildlife.
                  </p>
                  <h3>Hoolock Gibbons</h3>
                  <p>
                    India&apos;s only ape species lives within Dampa&apos;s
                    forest canopy. Hearing their distinctive calls at dawn,
                    even without a clear sighting, is one of the reserve&apos;s
                    most memorable experiences.
                  </p>
                  <h3>Birdwatching</h3>
                  <p>
                    Dampa&apos;s status as an Important Bird Area reflects
                    genuinely strong bird diversity — a serious draw for
                    birders even setting aside the reserve&apos;s
                    namesake tigers.
                  </p>
                  <h3>Other Wildlife</h3>
                  <p>
                    Elephants and serow (a goat-antelope species) are also
                    found within the reserve, adding to a mix of wildlife
                    that rewards patient, guided exploration.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Dampa</h2>
                  <p>
                    Accommodation is modest, concentrated in Mamit town
                    rather than at the reserve boundary itself.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: ["Basic guesthouses, Mamit town", "Forest department rest houses (if available)"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: ["Better-appointed lodges, Mamit town", "Pre-arranged homestays"],
                      },
                      {
                        tier: "Practical Note",
                        icon: "⚠️",
                        range: "Plan ahead",
                        picks: ["No accommodation inside the reserve", "Mamit town is the realistic base", "Book through a local operator"],
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & First Safari",
                        color: "bg-amber-700",
                        activities: ["Drive from Aizawl to Mamit district", "Afternoon safari/birding walk", "Overnight in Mamit town"],
                      },
                      {
                        day: "Day 2",
                        title: "Dawn Birding & Departure",
                        color: "bg-sky-600",
                        activities: ["Early-morning birding for peak activity", "Listen for hoolock gibbon calls", "Depart for Aizawl"],
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
                      <strong>Mamit town eateries:</strong> Simple local
                      Mizo meals, the practical option before or after a
                      safari.
                    </li>
                    <li>
                      <strong>Carry snacks:</strong> Facilities inside the
                      reserve are minimal, so pack water and food for
                      full-day excursions.
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
                          ["Permit + guide/day", "₹1,500", "₹2,500"],
                          ["Vehicle hire (round trip from Aizawl)", "₹5,000", "₹8,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Figures are approximate and per person unless noted; vehicle hire is a round-trip figure best split across a group.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Dampa</h2>
                  <ul>
                    <li>
                      <strong>Set realistic expectations:</strong> Come for
                      the birdlife, gibbons, and bamboo ecosystem — not a
                      guaranteed tiger sighting.
                    </li>
                    <li>
                      <strong>Hire a knowledgeable guide:</strong>{" "}
                      Especially valuable for birding and gibbon-spotting,
                      where local expertise makes a real difference.
                    </li>
                    <li>
                      <strong>Book permits in advance:</strong> Mamit
                      district has limited walk-in infrastructure.
                    </li>
                    <li>
                      <strong>Avoid the monsoon window:</strong> The
                      reserve is often difficult to access or closed
                      Jul-Oct.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Book permits and a guide in advance",
                          "Visit Dec-Feb for peak birding",
                          "Go on an early-morning safari for gibbon calls",
                          "Set realistic expectations on tiger sightings",
                          "Carry water and snacks for full-day visits",
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
                          "Visit expecting a guaranteed tiger sighting",
                          "Travel during heavy monsoon (Jul-Oct)",
                          "Skip arranging a local guide",
                          "Arrive without confirmed permits",
                          "Rely on facilities inside the reserve",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Dampa with
                    a wider Mizoram itinerary — see our full{" "}
                    <Link href="/blog/mizoram-travel-guide">Mizoram travel guide</Link>{" "}
                    for the rest of the state.
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
                {["Dampa Tiger Reserve", "Mizoram", "Mamit District", "Wildlife Safari", "Hoolock Gibbon"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="dampa-tiger-reserve-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dampa-tiger-reserve-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
