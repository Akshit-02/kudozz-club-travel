// src/app/blog/dongargarh-travel-guide/page.tsx
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
  title: "Dongargarh Travel Guide: Bamleshwari Temple & Ropeway",
  description:
    "The complete Dongargarh travel guide. Bade and Chhote Bamleshwari Temple, the hilltop ropeway, Navratri crowds, where to stay, best time to visit, and a full itinerary through one of Chhattisgarh's most-visited pilgrimage sites.",
  keywords:
    "Dongargarh travel guide, Bamleshwari Temple, Bade Bamleshwari, Dongargarh ropeway, best time to visit Dongargarh, how to reach Dongargarh, Chhattisgarh pilgrimage, Navratri Dongargarh",
  openGraph: {
    title: "Dongargarh Travel Guide: Bamleshwari Temple & Ropeway",
    description: "A hilltop Shakti temple reached by nearly 1,000 steps or a ropeway, one of Chhattisgarh's most-visited pilgrimage sites — the complete guide to Dongargarh.",
    url: "https://club.kudozz.in/blog/dongargarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Hilltop temple scenery representative of Dongargarh, Chhattisgarh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dongargarh Travel Guide: Bamleshwari Temple & Ropeway",
    description: "A hilltop Shakti temple and one of Chhattisgarh's most-visited pilgrimage sites — the complete guide to Dongargarh.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/dongargarh-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Dongargarh Travel Guide: Bamleshwari Temple & Ropeway",
          description: "The complete Dongargarh travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dongargarh-travel-guide" },
          about: { "@type": "Place", name: "Dongargarh", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Dongargarh Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Dongargarh?", a: "One day is enough — most visitors arrive, climb or ride the ropeway to Bade Bamleshwari Temple, visit Chhote Bamleshwari, and depart the same day or the next morning." },
  { q: "What is the best time to visit Dongargarh?", a: "October to March offers the most comfortable weather for the climb. Navratri (dates follow the lunar calendar — verify current-year timing) brings the fullest festival atmosphere but also the heaviest crowds." },
  { q: "How many steps are there to Bamleshwari Temple?", a: "The traditional climb is commonly cited at close to 1,000 stone steps. A ropeway now offers an alternative for visitors who can't or don't want to make the full climb — verify its current operational status before relying on it." },
  { q: "How do I reach Dongargarh?", a: "Dongargarh has its own railway station on the Mumbai-Howrah main line, making it genuinely well-connected by rail compared to many smaller Chhattisgarh towns. The nearest airport is Raipur, about 110km away." },
  { q: "Is Dongargarh crowded?", a: "It's one of Chhattisgarh's most-visited pilgrimage sites, so expect steady footfall year-round and very heavy crowds specifically during Navratri." },
  { q: "What is the budget for a trip to Dongargarh?", a: "A budget traveler can manage on roughly ₹1,000 a day, a mid-range trip closer to ₹2,500 a day. This is a low-cost, single-day pilgrimage stop for most visitors." },
  { q: "Can I combine Dongargarh with other Chhattisgarh destinations?", a: "Yes — it's a reasonable stop en route between Raipur and destinations further west or south in the state, given its rail connectivity on the main Mumbai-Howrah line." },
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
  { id: "introduction", title: "Why Dongargarh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dongargarh", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DONGARGARH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the temple climb and pilgrimage crowds",
    emoji: "🛕",
    items: [
      { name: "Comfortable Walking/Climbing Shoes", description: "For the roughly 1,000-step climb to Bade Bamleshwari Temple, should you choose the stairs over the ropeway.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Climb essential", tagColor: "bg-amber-100 text-amber-700", why: "Close to a thousand stone steps is a genuine workout — proper footwear matters." },
      { name: "Modest Clothing", description: "Standard temple-visit etiquette applies at this active pilgrimage site.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Dongargarh is a genuine, active pilgrimage destination, not a tourist reconstruction." },
      { name: "Reusable Water Bottle", description: "The climb and hilltop visit take real time, especially during crowded festival periods.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Climb essential", tagColor: "bg-sky-100 text-sky-700", why: "Facilities can be limited during peak Navratri crowds." },
      { name: "Small Daypack", description: "For carrying water, shoes-for-the-return, and any offerings across the visit.", price: "₹699", rating: 4.4, reviews: "4.1k", image: "🎒", affiliateUrl: amazonSearchUrl("small+daypack+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Keeps your hands free during the climb and temple visit." },
    ],
  },
];

export default function DongargarhGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Hilltop temple scenery representative of Dongargarh, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dongargarh", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dongargarh", "Bamleshwari Temple", "Heritage", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dongargarh Travel Guide: Bamleshwari Temple & Ropeway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hilltop Shakti temple reached by nearly 1,000 steps or a ropeway, one of Chhattisgarh's most-visited pilgrimage sites.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dongargarh, Chhattisgarh" },
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
                  <h2>Why Dongargarh?</h2>
                  <p>
                    <strong>Dongargarh</strong> is built around one hill and one temple: <strong>Bade Bamleshwari Temple</strong>, a Shakti (Goddess) shrine sitting atop a hill above the town, widely regarded as one of Chhattisgarh's most significant and most-visited pilgrimage sites. The traditional approach is a climb of close to a thousand stone steps — a genuine act of devotion for many pilgrims — though a ropeway now offers an alternative route to the summit.
                  </p>
                  <p>
                    A second, smaller shrine, <strong>Chhote Bamleshwari Temple</strong>, sits nearby as a companion site, part of the same broader pilgrimage complex. Together they draw steady year-round footfall, with crowds swelling dramatically during Navratri.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Dongargarh at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🛕", label: "Key Site", value: "Bade Bamleshwari Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Rail Access", value: "Own station, Mumbai-Howrah line" },
                        { icon: "🚡", label: "Alternative", value: "Ropeway to the summit" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dongargarh</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for the climb and hilltop visit." },
                      { season: "Navratri", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Peak festival season", text: "The fullest devotional atmosphere, but also by far the heaviest crowds — verify current-year dates on the lunar calendar." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-purple-50 border-purple-200", mood: "Hot", text: "The climb is genuinely tough in the heat — plan an early morning visit if traveling in this window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March, outside the Navratri crowds, for a comfortable climb and a calmer temple visit.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dongargarh</h2>
                  <ul>
                    <li><strong>By Train:</strong> Dongargarh has its own railway station directly on the Mumbai-Howrah main line — a genuine advantage over many smaller Chhattisgarh towns.</li>
                    <li><strong>By Air:</strong> The nearest airport is Raipur, about 110km away.</li>
                    <li><strong>By Road:</strong> Straightforward road access from Raipur and surrounding towns.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Dongargarh's rail connectivity makes it an easy stop if you're already traveling between Maharashtra/Central India and Chhattisgarh by train.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Dongargarh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Hilltop temple complex near Dongargarh" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bade Bamleshwari Temple:</strong> The main hilltop shrine, reached by roughly 1,000 steps or the ropeway — the centrepiece of a Dongargarh visit.</li>
                    <li><strong>Chhote Bamleshwari Temple:</strong> A smaller companion shrine nearby, part of the same pilgrimage complex.</li>
                    <li><strong>Ropeway ride:</strong> An alternative to the step climb, offering aerial views over the hill and surrounding plains — verify current operational status.</li>
                    <li><strong>Hilltop viewpoints:</strong> Panoramic views over Dongargarh town and the plains beyond, a highlight even for non-pilgrim visitors.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dongargarh</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Dharamshala-style pilgrim accommodation", "Basic guesthouses near the station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Simple private hotels in town"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Better-appointed hotels are limited — most visitors stay in Raipur or make it a day trip"] },
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
                  <h2>What to Eat in Dongargarh</h2>
                  <ul>
                    <li><strong>Chhattisgarhi thalis:</strong> Simple vegetarian meals widely available at local eateries near the temple and station.</li>
                    <li><strong>Prasad and temple offerings:</strong> Standard sweets and offerings sold near the temple complex.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Dongargarh Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "The Climb & Bade Bamleshwari", color: "bg-amber-700", activities: ["Arrive early to beat the heat and crowds", "Climb the steps or take the ropeway to Bade Bamleshwari Temple", "Darshan at the hilltop shrine"] },
                      { day: "Afternoon", title: "Chhote Bamleshwari & Departure", color: "bg-forest-600", activities: ["Visit Chhote Bamleshwari Temple", "Explore the town briefly", "Departure by train or road"] },
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
                          ["Accommodation/night (if staying)", "₹600", "₹2,000"],
                          ["Food/day", "₹250", "₹600"],
                          ["Ropeway ticket (optional)", "₹100", "₹200"],
                          ["Daily total", "₹1,000", "₹2,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Most visitors treat this as a single-day, low-cost stop.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Dongargarh</h2>
                  <ul>
                    <li><strong>Use the ropeway if the full climb isn't feasible:</strong> Verify current operational status before relying on it.</li>
                    <li><strong>Expect heavy Navratri crowds:</strong> Plan accordingly if visiting during this period.</li>
                    <li><strong>Dress modestly:</strong> This is an active, working pilgrimage site.</li>
                    <li><strong>Start early:</strong> Beats both the heat and the crowds on the climb.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Start the climb early in the day", "Use the ropeway as a backup if needed", "Dress modestly for the temple", "Carry water for the climb", "Verify Navratri dates if timing your visit around the festival"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt the climb in peak midday heat", "Visit during Navratri expecting a quiet experience", "Skip water for the long climb", "Wear beachwear-style clothing at the temple", "Assume the ropeway is guaranteed operational without checking"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dongargarh", "Bamleshwari Temple", "Heritage", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DONGARGARH_GEAR} destination="Dongargarh" />
              <RelatedPostsGrid currentSlug="dongargarh-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="dongargarh-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
