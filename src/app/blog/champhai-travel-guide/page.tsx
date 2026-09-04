// src/app/blog/champhai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Champhai Travel Guide: Rice Bowl of Mizoram",
  description:
    "Complete Champhai guide — Mizoram's fertile paddy valleys, the Rih Dil lake legend, the India-Myanmar border trade town, Murlen National Park, and a full visit plan.",
  keywords:
    "Champhai travel guide, Rice Bowl of Mizoram, Rih Dil lake, Champhai Myanmar border, Murlen National Park, Mizoram terraced fields, how to reach Champhai",
  openGraph: {
    title: "Champhai Travel Guide: Rice Bowl of Mizoram",
    description:
      "Terraced paddy valleys, a mythologically significant border lake, and a trade town on the edge of Myanmar — the complete Champhai guide.",
    url: "https://club.kudozz.in/blog/champhai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Terraced green hills, evoking Champhai's fertile paddy valleys in Mizoram",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Champhai Travel Guide: Rice Bowl of Mizoram",
    description: "Terraced paddy valleys and a border trade town on the edge of Myanmar — the complete Champhai guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/champhai-travel-guide" },
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
          headline: "Champhai Travel Guide: Rice Bowl of Mizoram",
          description:
            "Complete Champhai guide — Mizoram's fertile paddy valleys, the Rih Dil lake legend, the India-Myanmar border trade town, Murlen National Park, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/champhai-travel-guide" },
          keywords: "Champhai, Rice Bowl of Mizoram, Rih Dil, Myanmar border, Mizoram",
          about: {
            "@type": "Place",
            name: "Champhai",
            address: { "@type": "PostalAddress", addressRegion: "Mizoram", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mizoram", item: "https://club.kudozz.in/blog/mizoram-travel-guide" },
              { "@type": "ListItem", position: 4, name: "Champhai" },
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
    q: "Why is Champhai called the Rice Bowl of Mizoram?",
    a: "Its valleys are unusually fertile for a state otherwise dominated by forested hills, supporting extensive terraced paddy cultivation that supplies a significant share of Mizoram's rice — a striking agricultural landscape worth seeing from an elevated viewpoint.",
  },
  {
    q: "Can you visit Rih Dil and what are the border rules?",
    a: "Rih Dil, the heart-shaped lake of deep significance in traditional Mizo mythology, actually lies just across the border in Myanmar. Visiting requires special cross-border arrangements — check current access rules locally rather than assuming casual entry.",
  },
  {
    q: "How far is Champhai from Aizawl?",
    a: "It's a fairly long drive given Champhai's eastern, border-adjacent location — budget a full day of travel, and consider it as a multi-day trip from the capital.",
  },
  {
    q: "Is Champhai connected to Murlen National Park?",
    a: "Yes, Murlen National Park is near Champhai, making the town a useful regional base for combining the two into a single eastern Mizoram trip.",
  },
  {
    q: "What is the best time to see the paddy fields?",
    a: "The fields are striking in two different ways depending on timing — lush green during the growing season, and golden at harvest — both worth seeing, so pick based on which look appeals more to you.",
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
  { id: "introduction", title: "The Rice Bowl of Mizoram", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Champhai", level: 2 },
  { id: "things-to-do", title: "Paddy Fields, Rih Dil & More", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChamphaiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/coorg.jpg"
              alt="Terraced green hills, evoking Champhai's fertile paddy valleys in Mizoram"
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
                { label: "Champhai", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (<Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>) : (<span className="text-white/35">{crumb.label}</span>)}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Champhai", "Rice Bowl of Mizoram", "Mizoram", "Myanmar Border"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Champhai Travel Guide: Rice Bowl of Mizoram
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Terraced paddy valleys, a mythologically significant border
              lake, and a trade town on the edge of Myanmar.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Champhai, Mizoram" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24"><TableOfContents items={tableOfContents} /></div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>The Rice Bowl of Mizoram</h2>
                  <p>
                    <strong>Champhai</strong> is known as the "Rice Bowl of
                    Mizoram" for its unusually fertile valleys, supporting
                    extensive terraced paddy fields — a striking agricultural
                    landscape in a state otherwise dominated by dense
                    forested hills. It sits directly on the India-Myanmar
                    border and functions as a significant trade town given
                    this position.
                  </p>
                  <p>
                    Nearby is Rih Dil, a heart-shaped lake that lies just
                    across the border in Myanmar but holds deep significance
                    in traditional Mizo culture — historically regarded as a
                    mythological transit point souls were believed to pass
                    through on their journey to the afterlife. Given its
                    location, visiting Rih Dil itself may require special
                    cross-border arrangements, so check current access rules
                    locally rather than assuming casual entry.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌾</span> Champhai at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Mizoram" },
                        { icon: "🌾", label: "Known For", value: "Terraced paddy fields" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🗺️", label: "Border", value: "India-Myanmar" },
                        { icon: "🏞️", label: "Nearby", value: "Rih Dil, Murlen NP" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Champhai</h2>
                  <p>The look of the paddy fields changes dramatically through the agricultural year, worth factoring into your timing.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-forest-50 border-forest-200", mood: "Best time — our pick", text: "Cool, dry, and comfortable for sightseeing and viewpoint visits over the terraced valleys." },
                      { season: "Harvest season", emoji: "🌾", color: "bg-amber-50 border-amber-200", mood: "Golden fields", text: "The paddy fields turn a striking gold at harvest — a distinctive alternative look to the growing season's green." },
                      { season: "Growing season", emoji: "🌱", color: "bg-purple-50 border-purple-200", mood: "Lush green fields", text: "The terraces are at their most vividly green during active cultivation months." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain is common; roads to outlying viewpoints and Murlen National Park can be affected." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March for comfortable travel, timed to either harvest or growing season depending on which look of the fields appeals more.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Champhai</h2>
                  <ul>
                    <li><strong>By road from Aizawl:</strong> A fairly long drive given Champhai's eastern, border-adjacent location — budget a full day of travel.</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Champhai with Murlen National Park given their proximity, rather than treating either as a standalone side trip.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Paddy Fields, Rih Dil & More</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Terraced fields near Champhai, Mizoram" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <h3>Terraced Paddy Fields</h3>
                  <p>Best appreciated from elevated viewpoints around town, the terraces are Champhai's signature landscape and worth a slow, dedicated look.</p>
                  <h3>Rih Dil</h3>
                  <p>A heart-shaped lake of deep mythological significance in Mizo culture, lying just across the border in Myanmar — check current cross-border access rules before planning around a visit.</p>
                  <h3>Murlen National Park</h3>
                  <p>A nearby park worth combining with a Champhai visit — see our dedicated <Link href="/blog/murlen-travel-guide">Murlen guide</Link> for details.</p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Champhai</h2>
                  <p>Accommodation is modest, centred in Champhai town itself.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in town", "Basic lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,000/night", picks: ["Better town hotels", "Tourist department properties"] },
                      { tier: "Luxury", icon: "🌾", range: "Limited options", picks: ["Best available town hotels"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Champhai Town & Paddy Fields", color: "bg-amber-700", activities: ["Arrive, check in", "Viewpoints over the terraced fields", "Explore the trade-town market"] },
                      { day: "Day 2", title: "Murlen or Rih Dil", color: "bg-sky-600", activities: ["Day trip to Murlen National Park", "Or check current access for Rih Dil", "Return to Champhai"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => (<li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>))}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat in Champhai</h2>
                  <ul>
                    <li><strong>Local Mizo eateries:</strong> Rice-centric meals given the region's agricultural identity, alongside standard Mizo dishes.</li>
                    <li><strong>Border-trade market stalls:</strong> A mix of local and cross-border goods and snacks reflecting the town's trade role.</li>
                  </ul>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹2,200", "₹4,000"],
                          ["Food/day", "₹350", "₹800", "₹1,600"],
                          ["Local transport/day", "₹400", "₹900", "₹1,800"],
                          ["Murlen NP day trip", "₹1,500", "₹2,500", "₹4,000"],
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
                  <h2>Essential Tips for Visiting Champhai</h2>
                  <ul>
                    <li><strong>Check Rih Dil access rules before planning around it:</strong> It lies in Myanmar, so casual entry isn't guaranteed.</li>
                    <li><strong>Time your visit for either harvest or growing season:</strong> The paddy fields look dramatically different depending on timing.</li>
                    <li><strong>Combine with Murlen National Park:</strong> Their proximity makes a single regional trip efficient.</li>
                    <li><strong>Carry ID given the border-town setting:</strong> Standard practice for any Northeast India border-adjacent travel.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current Rih Dil access rules locally", "Time your visit around the paddy field look you want", "Combine with Murlen National Park", "Carry ID for border-area travel", "Visit elevated viewpoints for the best field views", "Try local market food near the trade area"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume you can casually cross to Rih Dil", "Underestimate the drive time from Aizawl", "Visit expecting green fields at harvest time or vice versa", "Skip Murlen National Park if you have the time", "Forget ID for a border-area trip", "Expect a large dedicated tourist infrastructure"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Champhai pairs naturally with{" "}
                    <Link href="/blog/murlen-travel-guide">Murlen National Park</Link>{" "}
                    for a fuller eastern Mizoram trip. See our full{" "}
                    <Link href="/blog/mizoram-travel-guide">Mizoram travel guide</Link>{" "}
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
                {["Champhai", "Rice Bowl of Mizoram", "Mizoram", "Myanmar Border", "Rih Dil", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="champhai-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="champhai-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
