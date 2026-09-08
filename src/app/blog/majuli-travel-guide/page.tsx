// src/app/blog/majuli-travel-guide/page.tsx
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
  title: "Majuli Travel Guide: The World's Largest River Island",
  description:
    "The complete Majuli travel guide. Neo-Vaishnavite satras, Sattriya dance, mask-making villages, ferry schedules, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Majuli travel guide, Majuli river island, satra Majuli, Sattriya dance, mask making Majuli, best time to visit Majuli, how to reach Majuli, Nimati Ghat ferry, Assam river island",
  openGraph: {
    title: "Majuli Travel Guide: The World's Largest River Island",
    description: "A shifting, slowly-shrinking river island that's home to centuries-old Neo-Vaishnavite monasteries and mask-making villages — the complete guide to Majuli.",
    url: "https://club.kudozz.in/blog/majuli-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "River island scenery representative of Majuli, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Majuli Travel Guide: The World's Largest River Island", description: "Centuries-old monasteries and mask-making villages on a shifting Brahmaputra island — the complete guide to Majuli.", images: ["/images/destinations/kerala/alleppey.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/majuli-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Majuli Travel Guide: The World's Largest River Island",
      description: "The complete Majuli travel guide.",
      image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/majuli-travel-guide" },
      about: { "@type": "Place", name: "Majuli", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Majuli Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Majuli?", a: "One to two days covers the main satras, a mask-making village, and a bicycle ride around the island comfortably." },
  { q: "What is the best time to visit Majuli?", a: "October to March, when ferry access and island roads are most reliable. Monsoon (June–September) brings flooding that can significantly restrict movement." },
  { q: "How do I reach Majuli?", a: "Ferries depart from Nimati Ghat near Jorhat to Majuli's main ghat. Jorhat is the standard gateway, with its own airport roughly 20km from the ghat." },
  { q: "Is Majuli island actually shrinking?", a: "Yes — this is a genuine, ongoing environmental issue. The island has lost significant area over recent decades due to the Brahmaputra's shifting course and annual erosion." },
  { q: "What are satras?", a: "Neo-Vaishnavite monastic institutions founded in the 15th-16th centuries by the Assamese saint-reformer Srimanta Sankardev — centres of religious practice, classical Sattriya dance, and traditional arts. Majuli has one of the highest concentrations of active satras anywhere." },
  { q: "What is the budget for a trip to Majuli?", a: "A budget traveler can manage on roughly ₹1,500 a day with a homestay, a mid-range trip closer to ₹3,500 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹7,000 mid-range." },
  { q: "Is Majuli good for a family trip?", a: "Yes — the pace is slow and rural, well suited to unhurried exploring, though facilities are basic compared to bigger destinations. Cycling around the island is a popular family activity." },
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
  { id: "introduction", title: "Why Majuli?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Majuli", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MAJULI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for island cycling and satra visits", emoji: "🛶",
  items: [
    { name: "Comfortable Cycling Shoes", description: "Many visitors explore Majuli by bicycle — comfortable footwear makes a real difference over a full day.", price: "₹1,499", rating: 4.4, reviews: "3.6k", image: "🚲", affiliateUrl: amazonSearchUrl("comfortable+cycling+shoes"), tag: "Island-exploring essential", tagColor: "bg-amber-100 text-amber-700", why: "Majuli's flat, rural roads are ideal for cycling, and the right footwear matters over a full day." },
    { name: "Insect Repellent", description: "The island's wetland and rice-paddy environment brings a real mosquito presence.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Essential", tagColor: "bg-forest-100 text-forest-700", why: "Majuli's wetlands and paddies make it prime mosquito territory, especially at dusk." },
    { name: "Modest Clothing", description: "For visiting satras respectfully, particularly during active prayer or practice sessions.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Satra-visit essential", tagColor: "bg-purple-100 text-purple-700", why: "Satras are active monastic institutions, not museums — modest, respectful dress matters." },
    { name: "Waterproof Phone Pouch", description: "Useful for the ferry crossing to and from the island.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Ferry essential", tagColor: "bg-sky-100 text-sky-700", why: "The Brahmaputra ferry crossing carries a real risk of a soaked phone without one." },
  ],
}];

export default function MajuliGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="River island scenery representative of Majuli, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Majuli", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Majuli", "River Island", "Off-beat", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Majuli Travel Guide: The World's Largest River Island
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A shifting, slowly-shrinking river island that's home to centuries-old Neo-Vaishnavite monasteries and mask-making villages.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Majuli, Assam" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Majuli?</h2>
                  <p>
                    <strong>Majuli</strong> is widely cited as one of the world's largest river islands, formed by the Brahmaputra — though the island is genuinely, actively shrinking, having lost significant area over recent decades to erosion and the river's shifting course, a real environmental concern worth knowing before you visit rather than treating it as a permanent fixture.
                  </p>
                  <p>
                    The island is home to <strong>satras</strong> — Neo-Vaishnavite monastic institutions founded in the 15th-16th centuries by the Assamese saint-reformer Srimanta Sankardev — making Majuli one of the most religiously and culturally significant places in Assam, alongside a rural landscape of rice paddies, mask-making villages, and traditional stilt houses.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛶</span> Majuli at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🛕", label: "Known For", value: "Neo-Vaishnavite satras" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "⛴️", label: "Access", value: "Ferry from Nimati Ghat" },
                        { icon: "🎭", label: "Craft", value: "Traditional mask-making" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Majuli</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry season with the most reliable ferry access and easiest island exploration by bicycle or on foot." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — restricted access", text: "Flooding can significantly restrict movement around the island and affect ferry reliability." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most reliable window for ferry crossings and exploring the island by bicycle.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Majuli</h2>
                  <ul>
                    <li><strong>By Ferry:</strong> The standard route — ferries depart from Nimati Ghat near Jorhat to Majuli's main ghat.</li>
                    <li><strong>By Air:</strong> Jorhat Airport is roughly 20km from Nimati Ghat.</li>
                    <li><strong>By Road:</strong> Jorhat is the practical gateway town for organizing the ferry crossing.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current ferry schedules before traveling — they can be weather-dependent and change seasonally.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Majuli</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Rural river-island scenery around Majuli" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Visit a satra:</strong> Explore one of Majuli's Neo-Vaishnavite monasteries, ideally during an active prayer or practice session for genuine cultural insight.</li>
                    <li><strong>Samaguri Satra:</strong> Known specifically for its traditional mask-making craft, worth seeing the process firsthand.</li>
                    <li><strong>Sattriya dance:</strong> A classical Indian dance form rooted in the satras — ask locally about performance opportunities.</li>
                    <li><strong>Cycle around the island:</strong> A popular and genuinely rewarding way to see the rice paddies, pottery villages, and stilt houses.</li>
                    <li><strong>Birdwatching:</strong> The island's wetlands attract migratory birds in season.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Majuli</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Local homestays", "Basic guesthouses near the main ghat"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["Bamboo-cottage style eco-stays", "Better-appointed homestays"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of higher-end eco-resorts — options here remain genuinely limited"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>A local homestay is genuinely the most authentic and recommended way to experience Majuli.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Majuli</h2>
                  <ul>
                    <li><strong>Homestay-cooked Assamese meals:</strong> Fresh, simple rice-based meals with local vegetables and fish.</li>
                    <li><strong>Khar and tenga:</strong> Classic Assamese preparations, widely served at local homestays.</li>
                    <li><strong>Satra prasad:</strong> Some satras offer simple communal meals to visitors — a genuine, humble local experience.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Majuli Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Ferry & Satras", color: "bg-amber-700", activities: ["Morning ferry from Nimati Ghat", "Check into a homestay", "Afternoon: visit 1-2 major satras"] },
                      { day: "Day 2", title: "Cycling & Crafts", color: "bg-forest-600", activities: ["Morning: cycle around the island's villages", "Visit Samaguri Satra for mask-making", "Afternoon: ferry back to Jorhat"] },
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
                          ["Accommodation/night", "₹700", "₹2,500"],
                          ["Food/day", "₹300", "₹700"],
                          ["Ferry + local transport", "₹500", "₹300"],
                          ["Daily total", "₹1,500", "₹3,500"],
                          ["2-Day trip total", "₹3,000", "₹7,000"],
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
                  <h2>Essential Travel Tips for Majuli</h2>
                  <ul>
                    <li><strong>Check ferry schedules ahead:</strong> They're weather-dependent and can change seasonally.</li>
                    <li><strong>Stay in a homestay:</strong> The most authentic way to experience the island.</li>
                    <li><strong>Visit satras respectfully:</strong> These are active religious institutions, not tourist attractions.</li>
                    <li><strong>Rent a bicycle:</strong> The best way to see the island's spread-out villages.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current ferry schedules before traveling", "Stay in a local homestay for an authentic experience", "Visit a satra during an active practice session if possible", "Rent a bicycle to explore the island", "Dress modestly and respectfully at satras"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Travel to Majuli in monsoon expecting easy movement", "Treat satras as photo-op tourist attractions", "Skip checking ferry timing in advance", "Expect developed tourist infrastructure", "Rush through without cycling around the island"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Majuli", "River Island", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MAJULI_GEAR} destination="Majuli" />
              <RelatedPostsGrid currentSlug="majuli-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="majuli-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
