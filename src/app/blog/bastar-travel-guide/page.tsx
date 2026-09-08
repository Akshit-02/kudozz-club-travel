// src/app/blog/bastar-travel-guide/page.tsx
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
  title: "Bastar Travel Guide: Tribal Culture, Bastar Dussehra & Dandami Art",
  description:
    "The complete Bastar travel guide. Bastar Dussehra, Dhokra/Dandami metal art, tribal haats, Jagdalpur as a base, where to stay, best time to visit, and a respectful, honest itinerary for exploring the region's indigenous cultures.",
  keywords:
    "Bastar travel guide, Bastar Dussehra, Dhokra art Bastar, Dandami metal casting, tribal haats Chhattisgarh, best time to visit Bastar, how to reach Bastar, Jagdalpur Bastar region",
  openGraph: {
    title: "Bastar Travel Guide: Tribal Culture, Bastar Dussehra & Dandami Art",
    description: "A 75-day tribal Dussehra festival unlike any other in India, and a district that's home to some of the country's most distinct indigenous cultures — the complete guide to Bastar.",
    url: "https://club.kudozz.in/blog/bastar-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Forested tribal landscape representative of Bastar, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Bastar Travel Guide: Tribal Culture, Bastar Dussehra & Dandami Art", description: "Tribal culture, the 75-day Bastar Dussehra, and Dhokra art — the complete guide to Bastar.", images: ["/images/destinations/ziro/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/bastar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Bastar Travel Guide: Tribal Culture, Bastar Dussehra & Dandami Art",
      description: "The complete Bastar travel guide.",
      image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bastar-travel-guide" },
      about: { "@type": "Place", name: "Bastar", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Bastar Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need to explore Bastar?", a: "3-4 days is a reasonable window to cover Jagdalpur, the region's waterfalls (Chitrakote, Tirathgarh), Kanger Valley, and at least one tribal haat or village visit at an unhurried pace." },
  { q: "What is the Bastar Dussehra?", a: "A genuinely unique 75-day festival cycle centered on the goddess Danteshwari, far longer than mainstream Hindu Dussehra celebrations, involving a series of distinct rituals culminating in a large chariot procession that blends tribal and Hindu religious traditions. Verify current-year dates as it follows a traditional calendar." },
  { q: "How do I reach Bastar?", a: "Jagdalpur is the practical regional hub, with its own airport and railway station. Road access connects to the wider district network from there." },
  { q: "What is Dhokra or Dandami art?", a: "A lost-wax bronze-casting technique producing distinctive figurines and decorative items, practiced by artisan communities across the Bastar region for generations. Seek it out through genuine artisan cooperatives rather than mass-produced tourist versions." },
  { q: "Is it respectful to visit tribal villages and markets?", a: "Yes, with the right approach — engage a knowledgeable local guide, ask before photographing people, and treat haats (markets) and villages as places where people live and trade, not photo opportunities. Bastar is home to numerous distinct communities (Gond, Muria, Maria, Dhurwa, and others), each with its own customs — avoid treating 'tribal Bastar' as a single culture." },
  { q: "What is the best time to visit Bastar?", a: "October to March for comfortable weather generally. If the Bastar Dussehra specifically interests you, time your visit around its broader October season, but expect very heavy crowds during that period." },
  { q: "What is the budget for a trip to Bastar?", a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day. A 3-day trip totals roughly ₹5,400 on a budget and ₹13,500 mid-range, excluding transport to the region." },
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
  { id: "introduction", title: "Why Bastar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bastar", level: 2 },
  { id: "top-attractions", title: "Culture, Craft & Landscape", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BASTAR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a respectful regional cultural trip", emoji: "🎭",
  items: [
    { name: "Comfortable Walking Shoes", description: "For village visits, haats, and short walks between Bastar's waterfall and forest sites.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "A multi-day Bastar itinerary covers a lot of varied, sometimes uneven terrain." },
    { name: "Insect Repellent", description: "Dense forest terrain and village visits both call for reliable insect protection.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Bastar's forest and river terrain make insects a genuine, ongoing presence." },
    { name: "Modest, Respectful Clothing", description: "Appropriate for temple visits, village stops, and cultural sites throughout the region.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Cultural essential", tagColor: "bg-purple-100 text-purple-700", why: "Respectful dress matters more here than at a typical tourist stop, given how much of the trip involves local communities." },
    { name: "Camera with a Discreet Zoom", description: "For photographing landscapes and craft at a respectful distance — always ask before photographing people directly.", price: "₹—", rating: 4.4, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+zoom+travel"), tag: "Photography essential", tagColor: "bg-sky-100 text-sky-700", why: "A zoom lens lets you capture scenes without needing to intrude on people's space." },
  ],
}];

export default function BastarGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Forested tribal landscape representative of Bastar, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bastar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bastar", "Tribal Culture", "Off-beat", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bastar Travel Guide: Tribal Culture, Bastar Dussehra & Dandami Art
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A 75-day tribal Dussehra festival unlike any other in India, and a district that's home to some of the country's most distinct indigenous cultures.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bastar, Chhattisgarh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" },
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
                  <h2>Why Bastar?</h2>
                  <p>
                    <strong>Bastar</strong> refers to a broad region — a former princely state now split across several districts including Jagdalpur/Bastar, Dantewada, and Kanker (see our separate guides to <Link href="/blog/jagdalpur-travel-guide">Jagdalpur</Link>, <Link href="/blog/danteshwari-temple-travel-guide">Danteshwari Temple</Link>, and <Link href="/blog/kanker-travel-guide">Kanker</Link>). The region is home to numerous distinct indigenous communities — Gond, Muria, Maria, Dhurwa, and others — each with its own language, customs, and artistic traditions. This guide treats that diversity specifically rather than as a single "tribal culture."
                  </p>
                  <p>
                    The region's forest-and-waterfall geography, covered in our <Link href="/blog/chitrakote-travel-guide">Chitrakote</Link>, <Link href="/blog/tirathgarh-travel-guide">Tirathgarh</Link>, and <Link href="/blog/kanger-valley-travel-guide">Kanger Valley</Link> guides, sits alongside a living cultural landscape — weekly tribal haats, renowned metal-casting traditions, and the extraordinary Bastar Dussehra.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🎭</span> Bastar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🏛️", label: "Regional Hub", value: "Jagdalpur" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🎊", label: "Signature Event", value: "Bastar Dussehra (75 days)" },
                        { icon: "🎨", label: "Known For", value: "Dhokra/Dandami metal art" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bastar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather for exploring waterfalls, forest sites, and villages comfortably." },
                      { season: "Around Oct", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Bastar Dussehra season", text: "The 75-day festival cycle culminates in this broader window — verify current-year specific dates, and expect very heavy crowds." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-purple-50 border-purple-200", mood: "Hot", text: "Warmer conditions make extended outdoor exploring less comfortable." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Waterfalls run fullest, but travel between sites becomes harder and less predictable." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February for a comfortable, well-rounded trip, or specifically around the Bastar Dussehra period if the cultural spectacle is the priority — verify current-year dates.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bastar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jagdalpur has its own airport with domestic connectivity.</li>
                    <li><strong>By Train:</strong> Jagdalpur is also a railway station, the practical regional hub.</li>
                    <li><strong>By Road:</strong> From Jagdalpur, road networks reach the wider district's waterfalls, forests, and villages.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in Jagdalpur and hire a knowledgeable local driver/guide for day trips — the region's key sites are spread out and best covered with local knowledge.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Culture, Craft & Landscape</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Forest and village landscape around Bastar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bastar Dussehra:</strong> A 75-day festival cycle centered on the goddess Danteshwari, culminating in a large chariot procession that blends tribal and Hindu religious traditions found nowhere else in India.</li>
                    <li><strong>Dhokra/Dandami metal casting:</strong> A lost-wax bronze technique producing distinctive figurines and decorative pieces, practiced by artisan communities across the region — seek genuine work through cooperatives.</li>
                    <li><strong>Tribal haats (markets):</strong> Weekly rotating village markets offering an authentic, unstaged look at local trade — observe respectfully rather than treating them as a photo opportunity.</li>
                    <li><strong>Waterfalls and Kanger Valley:</strong> Chitrakote, Tirathgarh, and Kanger Valley National Park round out the region's natural landscape (see our dedicated guides to each).</li>
                    <li><strong>Distinct tribal communities:</strong> Gond, Muria, Maria, Dhurwa, and others each maintain their own languages and customs — a genuine cultural diversity worth understanding specifically rather than generically.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Bastar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Jagdalpur", "Basic lodges near key sites"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Mid-range hotels in Jagdalpur"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of better-appointed properties — genuine luxury remains rare here"] },
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
                  <h2>What to Eat in Bastar</h2>
                  <ul>
                    <li><strong>Chhattisgarhi staples:</strong> Rice-based dishes and vegetable preparations widely available in Jagdalpur.</li>
                    <li><strong>Local tribal cuisine:</strong> Forest produce, millets, and regional preparations found at village haats and some local eateries — worth trying with an open mind.</li>
                    <li><strong>Bastar's famous chapda chutney:</strong> A red weaver ant chutney, a genuine local delicacy in parts of the region (optional for adventurous eaters, mention it's not for everyone).</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>4-Day Bastar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Jagdalpur Arrival", color: "bg-amber-700", activities: ["Arrive, check in", "Explore Jagdalpur town and local market"] },
                      { day: "Day 2", title: "Waterfalls", color: "bg-forest-600", activities: ["Chitrakote Falls in the morning", "Tirathgarh Falls in the afternoon"] },
                      { day: "Day 3", title: "Kanger Valley", color: "bg-orange-600", activities: ["Full day in Kanger Valley National Park", "Caves, forest walks, and river scenery"] },
                      { day: "Day 4", title: "Village & Craft", color: "bg-purple-600", activities: ["Visit a tribal haat if the day aligns", "Dhokra art workshop or cooperative visit", "Departure"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport/guide per day", "₹400", "₹600"],
                          ["Daily total", "₹1,800", "₹4,500"],
                          ["4-Day trip total", "₹7,200", "₹18,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bastar</h2>
                  <ul>
                    <li><strong>Engage a knowledgeable local guide:</strong> For genuine cultural context and respectful access to tribal communities.</li>
                    <li><strong>Seek authentic Dhokra art:</strong> Buy from artisan cooperatives rather than mass-produced souvenirs.</li>
                    <li><strong>Verify Bastar Dussehra current-year dates:</strong> If timing your visit around the festival specifically.</li>
                    <li><strong>Approach villages and haats with genuine respect:</strong> Ask before photographing people, and treat these as places where people live and trade.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a knowledgeable local guide", "Buy Dhokra art from genuine artisan cooperatives", "Ask consent before photographing people", "Visit a tribal haat if timing allows", "Verify Bastar Dussehra dates if that's your focus"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Treat 'tribal Bastar' as one single, uniform culture", "Photograph people without asking first", "Buy mass-produced 'tribal art' expecting authenticity", "Rush the region in a single day", "Show up during Bastar Dussehra without expecting heavy crowds"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bastar", "Tribal Culture", "Bastar Dussehra", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BASTAR_GEAR} destination="Bastar" />
              <RelatedPostsGrid currentSlug="bastar-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="bastar-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
