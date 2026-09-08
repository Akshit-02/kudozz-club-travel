// src/app/blog/danteshwari-temple-travel-guide/page.tsx
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
  title: "Danteshwari Temple Travel Guide: Bastar's Shakti Peetha",
  description:
    "The complete Danteshwari Temple travel guide. History, the Bastar royal connection, the Shankhini-Dankini river confluence, how to reach Dantewada, and practical, up-to-date travel advice.",
  keywords:
    "Danteshwari Temple travel guide, Dantewada temple, Shakti Peetha Bastar, Bastar Dussehra Danteshwari, how to reach Dantewada, Chhattisgarh pilgrimage temples",
  openGraph: {
    title: "Danteshwari Temple Travel Guide: Bastar's Shakti Peetha",
    description: "The presiding deity temple of the former Bastar kingdom, and one of the 52 Shakti Peethas of Hindu tradition — the complete guide to Danteshwari Temple.",
    url: "https://club.kudozz.in/blog/danteshwari-temple-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Temple architecture representative of Danteshwari Temple, Dantewada, Chhattisgarh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danteshwari Temple Travel Guide: Bastar's Shakti Peetha",
    description: "The presiding deity temple of the former Bastar kingdom — the complete guide to Danteshwari Temple.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/danteshwari-temple-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Danteshwari Temple Travel Guide: Bastar's Shakti Peetha",
          description: "The complete Danteshwari Temple travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/danteshwari-temple-travel-guide" },
          about: { "@type": "Place", name: "Danteshwari Temple", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Danteshwari Temple Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "What makes Danteshwari Temple significant?", a: "It's traditionally counted among the 52 Shakti Peethas of Hindu mythology, and it was historically the presiding deity and patron goddess of the former Bastar princely kingdom, with deep ties to the erstwhile royal family's ceremonial life." },
  { q: "How is Danteshwari Temple connected to Bastar Dussehra?", a: "The temple has historically played a central role in the Bastar Dussehra festival, a roughly 75-day tribal celebration distinct from Dussehra traditions elsewhere in India — see our separate Bastar guide for the broader festival context." },
  { q: "How do I reach Danteshwari Temple?", a: "Jagdalpur, about 85km away, is the nearest airport and railway connection, and functions as the practical regional base for visiting Dantewada — see our Jagdalpur guide." },
  { q: "Is it safe to visit Dantewada?", a: "Parts of this broader region have, at times, seen periods of security sensitivity. Check current local conditions and travel advisories before planning a visit, and consider going as part of an organized regional itinerary from Jagdalpur or with local guidance rather than fully independent travel to remote surrounding areas." },
  { q: "What is the best time to visit?", a: "October to March for comfortable weather. Navratri brings the fullest devotional atmosphere, following the lunar calendar — verify current-year dates." },
  { q: "How many days do I need?", a: "A single day is enough for the temple visit itself, typically as part of a broader day trip or regional itinerary based out of Jagdalpur." },
  { q: "What is the confluence near the temple?", a: "The temple sits near where the Shankhini and Dankini rivers meet — a geographically and religiously significant location tied to the site's history." },
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
  { id: "introduction", title: "Why Danteshwari Temple?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "top-attractions", title: "What to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DANTESHWARI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a respectful, well-prepared temple visit",
    emoji: "🛕",
    items: [
      { name: "Modest Clothing", description: "Standard expectation at this active, historically significant temple.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is a working pilgrimage site with genuine religious significance, not a tourist stop." },
      { name: "Comfortable Walking Shoes", description: "For the temple grounds and any riverside walking near the confluence.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Practical footwear for temple grounds and riverside areas." },
      { name: "Offline Maps / Local SIM", description: "Useful given the region's remoteness — having reliable navigation and connectivity matters more here than in more developed tourist areas.", price: "₹—", rating: 4.3, reviews: "—", image: "📱", affiliateUrl: amazonSearchUrl("portable+power+bank+travel"), tag: "Remote-travel essential", tagColor: "bg-sky-100 text-sky-700", why: "Connectivity and navigation support matter more in this less-developed region." },
      { name: "Reusable Water Bottle", description: "Sensible for a day trip into a region with fewer roadside amenities than more touristed parts of Chhattisgarh.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Trip essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities thin out the further you go from Jagdalpur." },
    ],
  },
];

export default function DanteshwariTempleGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Temple architecture representative of Danteshwari Temple, Dantewada, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Danteshwari Temple", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Danteshwari Temple", "Dantewada", "Heritage", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Danteshwari Temple Travel Guide: Bastar's Shakti Peetha
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The presiding deity temple of the former Bastar kingdom, and one of the 52 Shakti Peethas of Hindu tradition.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dantewada, Chhattisgarh" },
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
                  <h2>Why Danteshwari Temple?</h2>
                  <p>
                    <strong>Danteshwari Temple</strong> in Dantewada is traditionally counted among the 52 Shakti Peethas of Hindu mythology — sites across the subcontinent linked to the legend of Sati, each marking a major Goddess pilgrimage destination. Historically, Danteshwari was the presiding deity and patron goddess of the former Bastar princely kingdom, with deep ties to the erstwhile royal family's ceremonial and religious life.
                  </p>
                  <p>
                    The temple sits near where the <strong>Shankhini and Dankini rivers</strong> meet, a geographically and religiously significant setting, and it has historically played a central role in the <strong>Bastar Dussehra</strong> festival — a roughly 75-day tribal celebration distinct from Dussehra traditions elsewhere in India (see our separate Bastar guide for that broader context).
                  </p>
                  <p>
                    A practical note worth stating plainly: parts of this broader region have, at times over the past decades, seen periods of security sensitivity. Check current local conditions and travel advisories before planning a visit, and consider traveling with local knowledge or through an organized regional itinerary from Jagdalpur rather than fully independent exploration of remote surrounding areas.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Danteshwari Temple at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🛕", label: "Significance", value: "One of the 52 Shakti Peethas" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Hub", value: "Jagdalpur (~85km)" },
                        { icon: "🏞️", label: "Setting", value: "Shankhini-Dankini confluence" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable weather for the temple visit and any onward regional travel." },
                      { season: "Navratri", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Peak devotional season", text: "The fullest festival atmosphere, following the lunar calendar — verify current-year dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Combine your visit with a broader Jagdalpur-based itinerary rather than a standalone trip, and check current local conditions regardless of season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Danteshwari Temple</h2>
                  <ul>
                    <li><strong>Via Jagdalpur:</strong> The nearest airport and railway station, roughly 85km away, and the practical regional base for a Dantewada visit (see our Jagdalpur guide).</li>
                    <li><strong>By Road:</strong> Road access from Jagdalpur is the standard route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current local travel advisories for the Dantewada area before finalizing your itinerary, and consider an organized tour or local guide for the surrounding region.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See at Danteshwari Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Temple complex near the Shankhini-Dankini confluence" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The main shrine:</strong> The Danteshwari Temple itself, the historic presiding deity of the Bastar kingdom.</li>
                    <li><strong>Shankhini-Dankini confluence:</strong> The riverside setting adjacent to the temple, significant to the site's religious identity.</li>
                    <li><strong>Bastar Dussehra connection:</strong> Understanding the temple's central role in the region's most important festival adds real depth to a visit.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Basic guesthouses in Dantewada town", "Simple lodges near the temple"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Better-appointed hotels in Jagdalpur (recommended base)"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very limited in Dantewada itself — Jagdalpur has more developed options"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most travelers base themselves in Jagdalpur and visit Dantewada as a day trip rather than staying overnight in Dantewada itself.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Chhattisgarhi/Bastar tribal cuisine:</strong> Simple local meals available in Dantewada and Jagdalpur, reflecting regional tribal cooking traditions.</li>
                    <li><strong>Basic vegetarian thalis:</strong> Widely available at local eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Travel to Dantewada", color: "bg-amber-700", activities: ["Depart Jagdalpur early", "Arrive Dantewada, visit Danteshwari Temple"] },
                      { day: "Afternoon", title: "Confluence & Return", color: "bg-forest-600", activities: ["Visit the Shankhini-Dankini confluence", "Return to Jagdalpur"] },
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
                          ["Local transport (day trip from Jagdalpur)", "₹500", "₹1,500"],
                          ["Food/day", "₹300", "₹700"],
                          ["Daily total", "₹1,200", "₹3,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Jagdalpur/the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Check current local advisories:</strong> Verify current conditions for the Dantewada area before finalizing plans.</li>
                    <li><strong>Base yourself in Jagdalpur:</strong> The more practical, better-developed regional hub.</li>
                    <li><strong>Dress modestly:</strong> Standard temple etiquette applies.</li>
                    <li><strong>Consider an organized tour or local guide:</strong> Particularly useful for this region.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current local travel advisories before visiting", "Base yourself in Jagdalpur", "Dress modestly at the temple", "Consider a local guide or organized tour", "Combine with a broader Bastar-region itinerary"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Travel to remote surrounding areas independently without checking current conditions", "Skip verifying local advisories", "Wear immodest clothing at the temple", "Expect extensive tourist infrastructure in Dantewada town itself"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Danteshwari Temple", "Dantewada", "Bastar", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DANTESHWARI_GEAR} destination="Danteshwari Temple" />
              <RelatedPostsGrid currentSlug="danteshwari-temple-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="danteshwari-temple-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
