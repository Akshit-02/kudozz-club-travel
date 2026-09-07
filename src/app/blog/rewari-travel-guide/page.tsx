// src/app/blog/rewari-travel-guide/page.tsx
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
  title: "Rewari Travel Guide: Brass Town & 1857 Rebellion History",
  description:
    "The complete Rewari travel guide. Brass markets, the Rewari Railway Heritage Museum, 1857 rebellion history, where to stay, best time to visit, and a full day itinerary.",
  keywords:
    "Rewari travel guide, Rewari brass market, Rewari Railway Heritage Museum, 1857 rebellion Rewari, best time to visit Rewari, how to reach Rewari, Haryana heritage towns",
  openGraph: {
    title: "Rewari Travel Guide: Brass Town & 1857 Rebellion History",
    description: "A centuries-old brassware manufacturing hub that also played a role in the 1857 rebellion, on the historic route between Delhi and Rajasthan — the complete guide to Rewari.",
    url: "https://club.kudozz.in/blog/rewari-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/virupaksha.jpg", width: 1200, height: 630, alt: "Historic town architecture representative of Rewari, Haryana" }],
  },
  twitter: { card: "summary_large_image", title: "Rewari Travel Guide: Brass Town & 1857 Rebellion History", description: "A brassware hub with 1857 rebellion history — the complete guide to Rewari.", images: ["/images/destinations/hampi/virupaksha.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/rewari-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Rewari Travel Guide: Brass Town & 1857 Rebellion History",
      description: "The complete Rewari travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/rewari-travel-guide" },
      about: { "@type": "Place", name: "Rewari", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Rewari Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Rewari?", a: "One day is sufficient — the brass market, railway heritage site, and any 1857-era memorials can be covered in a single focused day." },
  { q: "What is the best time to visit Rewari?", a: "October to March offers the most comfortable weather for walking the market and outdoor sites." },
  { q: "How do I reach Rewari?", a: "Delhi is the nearest major airport, about 80km away. Rewari Junction is a well-connected railway station, and road access is via NH48." },
  { q: "What is Rewari known for?", a: "Brassware manufacturing (utensils, decorative items, and industrial components), a documented role in the 1857 rebellion against British rule, and historic significance in Indian railway heritage." },
  { q: "Is the Rewari Railway Heritage Museum open to visitors?", a: "Rewari has notable railway heritage significance, but museum/steam locomotive shed opening status and hours can vary — verify current status before planning a dedicated visit." },
  { q: "What is the budget for a trip to Rewari?", a: "A day trip typically runs ₹1,000-2,500 covering transport, food, and market browsing, excluding transport to the region." },
  { q: "Is Rewari worth a dedicated visit?", a: "It works best as a stop on a Delhi-Rajasthan road route rather than a standalone multi-day destination — genuinely interesting for its brass craft tradition and layered history, but modest in scale." },
];

function FAQSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    })}} />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Rewari?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rewari", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const REWARI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a market walk and heritage stop", emoji: "🔔",
  items: [
    { name: "Comfortable Walking Shoes", description: "For navigating the brass market's narrow lanes and any heritage-site walking.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Market essential", tagColor: "bg-amber-100 text-amber-700", why: "The brass market's lanes are busy and best explored on foot." },
    { name: "Cash Pouch", description: "Many market vendors and small shops in Rewari's brass district prefer cash.", price: "₹299", rating: 4.3, reviews: "2.1k", image: "👛", affiliateUrl: amazonSearchUrl("travel+cash+pouch"), tag: "Shopping essential", tagColor: "bg-sky-100 text-sky-700", why: "Card acceptance is inconsistent at smaller brass workshops and stalls." },
    { name: "Camera", description: "For the brass workshops, market scenes, and any railway heritage sights.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "The brass-making process and market activity make for genuinely interesting photography." },
    { name: "Sun Hat", description: "For a comfortable day walking outdoor market areas and heritage sites.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Comfort essential", tagColor: "bg-purple-100 text-purple-700", why: "Much of the day involves outdoor walking with limited shade." },
  ],
}];

export default function RewariGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Historic town architecture representative of Rewari, Haryana" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Rewari", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Rewari", "Brassware", "Heritage", "Haryana"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Rewari Travel Guide: Brass Town & 1857 Rebellion History
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A centuries-old brassware manufacturing hub that also played a role in the 1857 rebellion, on the historic route between Delhi and Rajasthan.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Rewari, Haryana" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>{m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0"><div className="sticky top-24"><TableOfContents items={tableOfContents} /></div></div>
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Rewari?</h2>
                  <p>
                    <strong>Rewari</strong> has been a centre for <strong>brassware manufacturing</strong> for generations — utensils, decorative items, and industrial brass components made here supply markets across North India. Beyond the craft tradition, the town played a documented role in the <strong>1857 Indian Rebellion</strong> against British rule, and it holds real significance in Indian railway history, with a heritage steam locomotive site tied to the town's transit-hub past.
                  </p>
                  <p>
                    Sitting on the historic route connecting Delhi to Rajasthan, Rewari makes most sense as a focused day stop rather than a multi-day destination.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🔔</span> Rewari at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🔔", label: "Known For", value: "Brassware manufacturing" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Delhi (~80km)" },
                        { icon: "🚂", label: "Heritage Site", value: "Railway steam locomotive shed" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Rewari</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for walking the market and outdoor heritage sites." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "North Indian plains heat makes extended outdoor walking less pleasant." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Occasional heavy rain can interrupt a day of market/heritage exploring." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for a full day exploring the market and heritage sites.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Rewari</h2>
                  <ul>
                    <li><strong>By Air:</strong> Delhi, about 80km away, is the nearest major airport.</li>
                    <li><strong>By Train:</strong> Rewari Junction is a well-connected railway station.</li>
                    <li><strong>By Road:</strong> Accessible via NH48, a straightforward drive from Delhi or Gurugram.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Rewari makes a good stopover if you're driving from Delhi toward Rajasthan — plan a few hours here rather than a dedicated round trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Rewari</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Historic architecture around Rewari" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Brass market:</strong> Workshops and shops producing utensils, decorative items, and industrial brass components — a genuine local craft tradition worth browsing.</li>
                    <li><strong>Rewari Railway Heritage Museum/Steam Locomotive Shed:</strong> A notable railway heritage site — check current opening status before a dedicated visit.</li>
                    <li><strong>1857 Rebellion sites:</strong> Local memorials and history connected to Rewari's documented role in the uprising.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Rewari</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Mid-range business hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Better options available in Gurugram or Delhi if needed"] },
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
                  <h2>What to Eat in Rewari</h2>
                  <ul>
                    <li><strong>Haryanvi thalis:</strong> Simple, hearty regional meals at local dhabas and restaurants.</li>
                    <li><strong>Rewari revdi/gajak:</strong> A locally famous sweet snack (sesame-jaggery brittle), a genuine regional specialty worth trying.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Rewari Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Brass Market", color: "bg-amber-700", activities: ["Arrive, explore the brass market and workshops", "Browse for genuine local craftsmanship"] },
                      { day: "Afternoon", title: "Heritage & Departure", color: "bg-forest-600", activities: ["Visit the railway heritage site (verify current status)", "Explore any 1857 rebellion memorials", "Depart"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Local transport", "₹300–₹800"],
                          ["Food", "₹300–₹700"],
                          ["Market shopping (optional)", "Varies"],
                          ["1-Day total (excl. shopping)", "₹600–₹1,500"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region and any brassware purchases.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Rewari</h2>
                  <ul>
                    <li><strong>Carry cash for the market:</strong> Card acceptance is inconsistent at smaller brass workshops.</li>
                    <li><strong>Verify railway museum hours:</strong> Check current status before a dedicated visit.</li>
                    <li><strong>Combine with a Delhi-Rajasthan road trip:</strong> Rewari works best as a stopover rather than a standalone destination.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Browse the brass market for genuine local craft", "Carry cash for smaller shops", "Verify railway heritage site status before visiting", "Combine with a Delhi-Rajasthan road route", "Try local gajak/revdi sweets"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rely solely on cards at the brass market", "Plan a dedicated trip to the railway museum without checking hours", "Expect a multi-day itinerary's worth of sights", "Skip carrying cash for small purchases"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Rewari", "Brassware", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={REWARI_GEAR} destination="Rewari" />
              <RelatedPostsGrid currentSlug="rewari-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="rewari-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
