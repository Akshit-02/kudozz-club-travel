// src/app/blog/itanagar-travel-guide/page.tsx
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
  title: "Itanagar Travel Guide: Arunachal Pradesh's Capital City",
  description:
    "The complete Itanagar travel guide. Ita Fort, the State Museum, Ganga Lake, Inner Line Permit logistics, where to stay, best time to visit, and a full itinerary for Arunachal Pradesh's capital.",
  keywords:
    "Itanagar travel guide, Ita Fort, Arunachal Pradesh capital, Jawaharlal Nehru State Museum, Ganga Lake Itanagar, Inner Line Permit, best time to visit Itanagar, how to reach Itanagar",
  openGraph: {
    title: "Itanagar Travel Guide: Arunachal Pradesh's Capital City",
    description: "A hillside capital built around a 14th-century fort, and the practical starting point for almost every trip into Arunachal Pradesh — the complete guide to Itanagar.",
    url: "https://club.kudozz.in/blog/itanagar-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Forested hillside city representative of Itanagar, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Itanagar Travel Guide: Arunachal Pradesh's Capital City", description: "Ita Fort, the State Museum, and the practical starting point for Arunachal Pradesh — the complete guide to Itanagar.", images: ["/images/destinations/coorg/coorg.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/itanagar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Itanagar Travel Guide: Arunachal Pradesh's Capital City",
      description: "The complete Itanagar travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/itanagar-travel-guide" },
      about: { "@type": "Place", name: "Itanagar", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Itanagar Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Itanagar?", a: "One to two days covers Ita Fort, the State Museum, and Ganga Lake comfortably. Most travelers use it as a starting or ending point for a longer Arunachal Pradesh trip rather than a standalone multi-day destination." },
  { q: "What is the best time to visit Itanagar?", a: "October to March offers the most comfortable weather for sightseeing." },
  { q: "How do I reach Itanagar?", a: "Donyi Polo Airport (Hollongi) serves Itanagar with improving connectivity — verify current flight routes. The nearest railway station is across the river in Naharlagun. Road access via Guwahati, Assam is also common." },
  { q: "Do I need a permit to visit Itanagar?", a: "Yes, an Inner Line Permit is required for all of Arunachal Pradesh. Itanagar is a common place to arrange or finalize this if you haven't already done so in advance — verify the current application process." },
  { q: "What is Ita Fort's history?", a: "Ita Fort is a 14th-15th century brick fort that gives Itanagar its name. Its exact builders and precise origins remain debated among historians — it's a significant archaeological site, but travelers should treat detailed historical claims with appropriate caution." },
  { q: "Is Itanagar a good base for exploring Arunachal Pradesh?", a: "Yes — it's the state's administrative and transport hub, and the Jawaharlal Nehru State Museum offers valuable cultural context on Arunachal's many tribal communities before heading into more remote regions." },
  { q: "What is the budget for a trip to Itanagar?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,500 a day." },
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
  { id: "introduction", title: "Why Itanagar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Itanagar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ITANAGAR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the capital and onward Arunachal travel", emoji: "🏛️",
  items: [
    { name: "Comfortable Walking Shoes", description: "For Ita Fort's grounds, the State Museum, and general city exploring.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Itanagar's hillside layout means genuine uphill and downhill walking between sights." },
    { name: "Document Organizer", description: "For keeping your Inner Line Permit and identification secure and accessible as you head onward.", price: "₹—", rating: 4.5, reviews: "—", image: "📄", affiliateUrl: amazonSearchUrl("document+organizer+travel+folder"), tag: "Permit essential", tagColor: "bg-purple-100 text-purple-700", why: "You'll need your permit at checkpoints throughout Arunachal Pradesh." },
    { name: "Light Rain Layer", description: "Itanagar's forested hill setting sees regular rain outside the driest months.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "The hillside terrain and forest cover mean unpredictable showers are common." },
    { name: "Daypack", description: "For carrying essentials as you explore Ita Fort, the museum, and Ganga Lake across a full day.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("daypack+travel+trekking"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Itanagar's sights are spread across the hilly town, not walkable in a tight loop." },
  ],
}];

export default function ItanagarGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Forested hillside city representative of Itanagar, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Itanagar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Itanagar", "Ita Fort", "Destination Guide", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Itanagar Travel Guide: Arunachal Pradesh's Capital City
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hillside capital built around a 14th-century fort, and the practical starting point for almost every trip into Arunachal Pradesh.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Itanagar, Arunachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Itanagar?</h2>
                  <p>
                    <strong>Itanagar</strong> is Arunachal Pradesh's capital, named for and built around <strong>Ita Fort</strong> — a 14th-15th century brick fort whose exact builders remain a matter of historical debate, but which stands as a genuinely significant archaeological landmark all the same.
                  </p>
                  <p>
                    For most visitors, though, Itanagar's real value is practical: it's the state's administrative and transport hub, home to a museum that offers essential cultural context on Arunachal's many distinct tribal communities, and often the place where travelers finalize their Inner Line Permit before heading into the state's more remote regions.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Itanagar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🏰", label: "Key Site", value: "Ita Fort" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Donyi Polo Airport (Hollongi)" },
                        { icon: "🏛️", label: "Role", value: "State capital & transport hub" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Itanagar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather ideal for sightseeing and any onward travel arrangements." },
                      { season: "Apr – Jun", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm, workable", text: "Warmer but still manageable, before peak monsoon sets in." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain is common — the hillside terrain can make getting around less pleasant." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for both sightseeing and onward permit/travel logistics.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Itanagar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Donyi Polo Airport (Hollongi) serves Itanagar with improving connectivity — verify current flight routes.</li>
                    <li><strong>By Train:</strong> The nearest railway station is across the river in Naharlagun.</li>
                    <li><strong>By Road:</strong> Well connected via Guwahati, Assam, a common overland route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you haven't already arranged your Inner Line Permit online, Itanagar is a practical place to sort it out before heading further into the state.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Itanagar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Hillside scenery around Itanagar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Ita Fort:</strong> The 14th-15th century brick fort that gives the city its name — significant, though its precise origins remain debated among historians.</li>
                    <li><strong>Jawaharlal Nehru State Museum:</strong> A substantial collection of tribal artifacts and textiles representing Arunachal Pradesh's many distinct ethnic communities — valuable context before heading into more remote regions.</li>
                    <li><strong>Ganga Lake (Gyaker Sinyi):</strong> A scenic lake near the city, popular for a relaxed outing.</li>
                    <li><strong>Buddha Vihar:</strong> A hilltop Buddhist temple with panoramic city views.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Itanagar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in the city centre", "Budget hotels near the market"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Business-style hotels", "Government tourism board options"] },
                      { tier: "Luxury", icon: "✨", range: "₹5,500–₹10,000+/night", picks: ["A handful of higher-end hotels"] },
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
                  <h2>What to Eat in Itanagar</h2>
                  <ul>
                    <li><strong>Arunachali fare:</strong> A capital-city mix of dishes reflecting the state's many tribal culinary traditions.</li>
                    <li><strong>General North Indian and Northeast Indian food:</strong> Widely available given Itanagar's role as an administrative hub.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Itanagar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Ita Fort & Museum", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Ita Fort", "Afternoon: Jawaharlal Nehru State Museum", "Evening: Buddha Vihar for sunset views"] },
                      { day: "Day 2", title: "Ganga Lake & Logistics", color: "bg-forest-600", activities: ["Morning: Ganga Lake", "Midday: finalize permits/travel arrangements for onward Arunachal travel", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹7,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹1,900", "₹4,600", "₹11,000"],
                          ["2-Day trip total", "₹3,800", "₹9,200", "₹22,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Itanagar</h2>
                  <ul>
                    <li><strong>Sort your Inner Line Permit here if needed:</strong> Verify the current application process before or on arrival.</li>
                    <li><strong>Visit the State Museum early in your trip:</strong> It provides valuable context for the tribal cultures you'll encounter elsewhere in Arunachal.</li>
                    <li><strong>Use Itanagar as a logistics base:</strong> It's the practical place to plan onward travel to more remote parts of the state.</li>
                    <li><strong>Verify current airport connectivity:</strong> Flight routes to Donyi Polo Airport are still developing.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the State Museum for cultural context", "Sort out Inner Line Permit logistics here if needed", "Use Itanagar as a practical trip-planning base", "Verify current airport flight connectivity", "Allow hillside walking time between sights"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Arrive without an Inner Line Permit sorted", "Overclaim Ita Fort's exact historical origins", "Skip the State Museum before heading into remote areas", "Assume flight connectivity without checking current routes", "Expect a headline multi-day tourist destination"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Itanagar", "Ita Fort", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ITANAGAR_GEAR} destination="Itanagar" />
              <RelatedPostsGrid currentSlug="itanagar-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="itanagar-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
