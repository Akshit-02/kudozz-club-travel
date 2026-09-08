// src/app/blog/morjim-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, { GearSection } from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Morjim Beach Travel Guide: Turtle Nesting & Quiet North Goa",
  description:
    "The complete Morjim travel guide. Olive ridley turtle nesting zones, Chapora River views, quiet beach shacks, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Morjim travel guide, Morjim beach Goa, Morjim turtle nesting, quiet North Goa beaches, best time to visit Morjim, how to reach Morjim, Chapora River Goa",
  openGraph: {
    title: "Morjim Beach Travel Guide: Turtle Nesting & Quiet North Goa",
    description: "A quiet, olive-ridley-turtle-nesting beach at the mellow northern edge of Goa's party coast — the complete guide to Morjim.",
    url: "https://club.kudozz.in/blog/morjim-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/hero.jpg", width: 1200, height: 630, alt: "Quiet coastal beach scenery representative of Morjim, Goa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morjim Beach Travel Guide: Turtle Nesting & Quiet North Goa",
    description: "A quiet, turtle-nesting beach at the mellow edge of North Goa — the complete guide to Morjim.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/morjim-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Morjim Beach Travel Guide: Turtle Nesting & Quiet North Goa",
          description: "The complete Morjim travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/morjim-travel-guide" },
          about: { "@type": "Place", name: "Morjim", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Morjim Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Morjim?", a: "Two days is enough to settle into Morjim's slow pace — one for the beach, one to add a river-mouth boat trip or a visit to nearby Ashwem or Mandrem." },
  { q: "What is the best time to visit Morjim?", a: "November to February offers dry, sunny weather and typically overlaps with the olive ridley turtle nesting season." },
  { q: "How do I reach Morjim?", a: "Both of Goa's airports (Dabolim and Manohar International) connect by road; Morjim sits in North Goa across the Chapora River from Vagator, reachable by a ferry crossing or a longer road route around." },
  { q: "Can I see turtles nesting at Morjim?", a: "Morjim is one of Goa's designated olive ridley turtle nesting sites, with marked, monitored areas during the season, typically November to March. Verify current-year protocols and respect any posted access restrictions near nesting zones." },
  { q: "Why does Morjim have a Russian community reputation?", a: "Morjim has drawn a long-term Russian expatriate and tourist community over the past couple of decades, genuinely reflected in local signage and restaurant menus — a distinctive characteristic of the beach's current character." },
  { q: "Is Morjim quieter than Calangute or Baga?", a: "Yes, noticeably — Morjim has a much calmer, less developed shack scene than the busier North Goa party belt further south." },
  { q: "What is the budget for a trip to Morjim?", a: "A budget traveller can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,200 a day. A 2-day trip totals roughly ₹3,600 on a budget and ₹8,400 mid-range, excluding flights or trains to Goa." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Morjim?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Morjim", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MORJIM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a quiet North Goa beach stay",
    emoji: "🐢",
    items: [
      { name: "Reef-Safe Sunscreen (SPF 50)", description: "Morjim's long, open beach means extended sun exposure for anyone settling in for the day.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "A full beach day here means hours of direct sun without much shade." },
      { name: "Binoculars", description: "Useful for birdwatching near the Chapora river mouth, a genuinely good spot for waterbirds.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+birdwatching"), tag: "Nature essential", tagColor: "bg-forest-100 text-forest-700", why: "The river-mouth area near Morjim draws a decent range of waterbirds worth spotting." },
      { name: "Waterproof Phone Pouch", description: "For river-mouth boat trips and swimming without worrying about a dropped phone.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Boat-trip essential", tagColor: "bg-sky-100 text-sky-700", why: "River crossings and boat trips carry real risk for an unprotected phone." },
      { name: "Comfortable Sandals", description: "For walking between the beach, the river mouth, and nearby Ashwem or Mandrem.", price: "₹899", rating: 4.4, reviews: "4.8k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "All-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Morjim's beach and river-adjacent paths are sandy and uneven." },
    ],
  },
];

export default function MorjimGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/hero.jpg" alt="Quiet coastal beach scenery representative of Morjim, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Morjim", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Morjim", "North Goa", "Beaches", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Morjim Beach Travel Guide: Turtle Nesting & Quiet North Goa
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A quiet, olive-ridley-turtle-nesting beach at the mellow northern edge of Goa's party coast.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Morjim, Goa" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Morjim?</h2>
                  <p>
                    <strong>Morjim</strong> sits at the mellow northern edge of Goa's party coast, a quiet, comparatively undeveloped beach that stands in sharp contrast to Calangute and Baga further south. It's one of Goa's designated <strong>olive ridley turtle nesting</strong> sites, with marked, monitored zones active during the season.
                  </p>
                  <p>
                    Morjim has also drawn a long-running Russian expatriate and tourist community over the past couple of decades — genuinely visible in local signage and restaurant menus — giving the beach a distinctive character alongside its river-mouth scenery where the Chapora meets the sea.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐢</span> Morjim at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🐢", label: "Known For", value: "Olive ridley turtle nesting" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim / Manohar Intl" },
                        { icon: "🌊", label: "Nearby", value: "Chapora River mouth" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Morjim</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, sunny weather with every shack open, and this window typically overlaps with turtle nesting season." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but quiet", text: "Fewer crowds and lower prices, but noticeably hotter for extended beach time." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — shacks shut", text: "Most beach shacks close and swimming is unsafe due to rough seas." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — dry weather, open shacks, and the best odds of overlapping with turtle nesting season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Morjim</h2>
                  <ul>
                    <li><strong>By Air:</strong> Both Dabolim and Manohar International Airport connect to Morjim by road.</li>
                    <li><strong>By Road:</strong> Straightforward from anywhere in North Goa.</li>
                    <li><strong>From Vagator:</strong> A ferry crossing over the Chapora River, or a longer road route around, connects Morjim to Vagator (cross-reference that guide).</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current ferry timings before planning a Vagator-Morjim crossing — schedules can be irregular outside peak season.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Morjim</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/hero.jpg" alt="Beach and river-mouth scenery around Morjim" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Morjim Beach:</strong> A long, relatively quiet stretch of sand with a lower-key shack scene than the busier North Goa strip.</li>
                    <li><strong>Turtle nesting zones:</strong> Marked, monitored areas active during the season — respect posted access limits.</li>
                    <li><strong>Chapora River mouth:</strong> River-mouth scenery and boat-trip options where the river meets the sea.</li>
                    <li><strong>Ashwem and Mandrem:</strong> Neighbouring quiet beaches worth combining into the same trip (cross-reference the Mandrem guide).</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Morjim</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Beach huts and guesthouses", "Budget rooms in the village"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Beachfront cottages", "Boutique mid-range stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,500–₹13,000+/night", picks: ["Premium beachfront villas", "Quiet luxury resorts"] },
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

                <section id="food-guide">
                  <h2>What to Eat in Morjim</h2>
                  <ul>
                    <li><strong>Russian and Eastern European menus:</strong> A genuine reflection of the beach's long-running expat community, alongside standard Goan shack fare.</li>
                    <li><strong>Fresh seafood:</strong> Kingfish, prawns, and calamari at beachfront shacks.</li>
                    <li><strong>Goan curries:</strong> Fish curry-rice at local restaurants.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Morjim Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beach & Village", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: beach time and a sunset walk", "Evening: dinner at a beach shack"] },
                      { day: "Day 2", title: "River & Nearby Beaches", color: "bg-forest-600", activities: ["Morning: Chapora river-mouth boat trip", "Afternoon: visit Ashwem or Mandrem", "Evening: return, relax"] },
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

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹9,000"],
                          ["Food/day", "₹450", "₹1,000", "₹2,200"],
                          ["Local transport per day", "₹300", "₹600", "₹1,500"],
                          ["Daily total", "₹1,800", "₹4,200", "₹11,700"],
                          ["2-Day trip total", "₹3,600", "₹8,400", "₹23,400"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights or trains to Goa.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Morjim</h2>
                  <ul>
                    <li><strong>Respect marked turtle nesting zones:</strong> Verify current-year protocols and access restrictions before visiting during nesting season.</li>
                    <li><strong>Check ferry timings for the Vagator crossing:</strong> Schedules can be irregular outside peak season.</li>
                    <li><strong>Combine with Ashwem and Mandrem:</strong> Neighbouring quiet beaches pair naturally with a Morjim stay.</li>
                    <li><strong>Most shacks close outside Nov–Mar:</strong> Plan around this if visiting in the off-season.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current turtle-nesting zone protocols", "Try a river-mouth boat trip", "Combine with Ashwem and Mandrem", "Check ferry timings for the Vagator crossing", "Book beachfront stays ahead in peak season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Enter marked turtle nesting zones", "Expect Calangute-Baga-level nightlife here", "Rely on the ferry without checking current timings", "Visit expecting open shacks outside Nov-Mar", "Skip sun protection during long beach days"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
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
                {["Morjim", "North Goa", "Beaches", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MORJIM_GEAR} destination="Morjim" />
              <RelatedPostsGrid currentSlug="morjim-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="morjim-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
