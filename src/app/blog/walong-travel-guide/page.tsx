// src/app/blog/walong-travel-guide/page.tsx
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
  title: "Walong Travel Guide: The Easternmost Battlefield of the 1962 War",
  description:
    "The complete Walong travel guide. The Battle of Walong war memorial, the Lohit Valley, permit requirements, best time to visit, and honest planning advice for one of India's most remote frontier towns.",
  keywords:
    "Walong travel guide, Battle of Walong, Lohit Valley, 1962 Sino-Indian War, best time to visit Walong, how to reach Walong, Arunachal Pradesh border permits",
  openGraph: {
    title: "Walong Travel Guide: The Easternmost Battlefield of the 1962 War",
    description: "One of India's easternmost inhabited towns, site of a fierce 1962 war battle, deep in the Lohit Valley near the China border — the complete guide to Walong.",
    url: "https://club.kudozz.in/blog/walong-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/leh-ladakh/leh-ladakh.jpg", width: 1200, height: 630, alt: "Remote high-altitude valley representative of Walong, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Walong Travel Guide: The Easternmost Battlefield of the 1962 War", description: "A remote frontier town in the Lohit Valley, site of the 1962 Battle of Walong — the complete guide.", images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/walong-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Walong Travel Guide: The Easternmost Battlefield of the 1962 War",
      description: "The complete Walong travel guide.",
      image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/walong-travel-guide" },
      about: { "@type": "Place", name: "Walong", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Walong Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "What permits do I need to visit Walong?", a: "Beyond the standard Inner Line Permit required for Arunachal Pradesh, Walong's proximity to the China border likely requires additional Protected Area Permit clearance. Verify current requirements thoroughly and well in advance — this is not a casually accessible destination." },
  { q: "How many days do I need for a Walong trip?", a: "Given the extreme travel distance from Dibrugarh, budget at least 2-3 days, and ideally travel with an experienced guide or operator familiar with current permit requirements and road conditions." },
  { q: "What happened at Walong in 1962?", a: "Walong was the site of a fiercely fought battle during the 1962 Sino-Indian War, one of the significant engagements of that conflict. A war memorial commemorates the soldiers who fought there." },
  { q: "How do I reach Walong?", a: "The nearest airport is Dibrugarh in Assam — a very long multi-day journey from there. Road access runs via Tezu and further into the Lohit Valley, and is the only practical route." },
  { q: "What is the best time to visit Walong?", a: "March–June and September–November avoid peak monsoon road disruptions. Winter brings difficult cold and snow given the altitude and northern position." },
  { q: "Is Walong accessible to casual tourists?", a: "Not really — this requires serious logistical commitment: confirmed permits arranged well ahead, realistic time budgeted for the journey, and ideally an experienced local operator. It's best suited to travelers with a genuine interest in border history and far-frontier travel." },
  { q: "What is the budget for a trip to Walong?", a: "Costs vary significantly depending on transport arrangements and any guide/operator fees, which are recommended given the region's remoteness and permit complexity — budget generously above typical Arunachal daily costs." },
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
  { id: "introduction", title: "Why Walong?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Walong", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const WALONG_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a demanding frontier journey", emoji: "🏔️",
  items: [
    { name: "Warm Layers", description: "Walong's altitude and far-northern position mean genuinely cold conditions, especially outside summer.", price: "₹2,499", rating: 4.5, reviews: "4.7k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+trekking+jacket+layers"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "This is one of the coldest, most exposed destinations in this guide series." },
    { name: "Sturdy Footwear", description: "For uneven terrain around the war memorial and valley viewpoints.", price: "₹2,999", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+mountain"), tag: "Trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Terrain in the Lohit Valley is rugged and undeveloped in most areas." },
    { name: "Complete Permit Documentation", description: "Physical copies of your Inner Line Permit and any Protected Area Permit, plus identification.", price: "₹—", rating: 5.0, reviews: "—", image: "📄", affiliateUrl: amazonSearchUrl("document+organizer+travel+folder"), tag: "Absolutely required", tagColor: "bg-purple-100 text-purple-700", why: "Checkpoints in this border-sensitive region will require documentation at multiple points." },
    { name: "Basic First-Aid Kit", description: "Given the extreme remoteness and distance from medical facilities.", price: "₹499", rating: 4.4, reviews: "3.9k", image: "🩹", affiliateUrl: amazonSearchUrl("travel+first+aid+kit"), tag: "Remote-travel essential", tagColor: "bg-sky-100 text-sky-700", why: "Medical facilities are sparse to nonexistent for much of this journey." },
  ],
}];

export default function WalongGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/leh-ladakh/leh-ladakh.jpg" alt="Remote high-altitude valley representative of Walong, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Walong", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Walong", "Lohit Valley", "Off-beat", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Walong Travel Guide: The Easternmost Battlefield of the 1962 War
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of India's easternmost inhabited towns, site of a fierce 1962 war battle, deep in the Lohit Valley near the China border.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Walong, Arunachal Pradesh" },
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
                  <h2>Why Walong?</h2>
                  <p>
                    <strong>Walong</strong> sits among India's easternmost inhabited settlements, tucked into the remote <strong>Lohit Valley</strong> near the China border. In 1962, it was the site of a fiercely fought battle during the Sino-Indian War — a significant and difficult chapter in the region's modern history, commemorated today by a war memorial honoring the soldiers who fought there.
                  </p>
                  <p>
                    We want to be upfront: this is one of the most logistically demanding destinations covered on this site. It's a genuinely remote, minimally developed border area, and it suits travelers with a serious interest in frontier history and far-flung travel rather than casual sightseeing.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Walong at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "⚔️", label: "Historic Site", value: "Battle of Walong (1962)" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sept–Nov" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dibrugarh, Assam (very long drive)" },
                        { icon: "📄", label: "Permits", value: "ILP + likely PAP required" },
                        { icon: "💰", label: "Budget", value: "Plan generously" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Walong</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Good road conditions", text: "One of the more reliable windows before monsoon disruption sets in." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Also reliable", text: "Post-monsoon clarity and manageable road conditions." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — avoid", text: "Heavy rain can seriously disrupt the already-difficult road access." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, possible snow", text: "Genuinely difficult conditions given the altitude and northern position." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Avoid peak monsoon entirely — road access is already difficult and heavy rain makes it significantly worse.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Walong</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dibrugarh (Assam) is the nearest airport — a very long, multi-day journey from there.</li>
                    <li><strong>By Road:</strong> Via Tezu and further into the Lohit Valley — the only practical route, and a genuinely demanding one.</li>
                    <li><strong>Permits:</strong> Beyond the standard Inner Line Permit, additional Protected Area Permit clearance is likely required given the border proximity — verify current requirements thoroughly and arrange well in advance.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Work with a local operator experienced in border-area permits and logistics — attempting this route without confirmed, current permits is not advisable.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Walong</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/leh-ladakh/leh-ladakh.jpg" alt="Lohit Valley landscape around Walong" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Battle of Walong War Memorial:</strong> A memorial commemorating the 1962 battle fought here — visit with genuine respect for its history.</li>
                    <li><strong>Lohit Valley scenery:</strong> Dramatic river-valley terrain, among the most remote landscapes accessible in India.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Walong</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "Very limited", picks: ["Basic government/circuit-house style accommodation, if available"] },
                      { tier: "Mid-Range", icon: "🏨", range: "Minimal to none", picks: ["Standard mid-range hotels are essentially unavailable this far into the frontier"] },
                      { tier: "Luxury", icon: "✨", range: "Not available", picks: ["No developed luxury infrastructure exists here"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Accommodation here is genuinely basic — arrange this through your guide/operator rather than expecting to book independently.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Walong</h2>
                  <p>Food options are extremely limited given the remoteness — most travelers eat what's arranged through their guide or local hosts.</p>
                </section>

                <section id="itinerary">
                  <h2>Suggested Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1-2", title: "Journey to Walong", color: "bg-amber-700", activities: ["Multi-day travel from Dibrugarh via Tezu", "Permit checkpoints along the route", "Arrive Walong, settle in"] },
                      { day: "Day 3", title: "War Memorial & Valley", color: "bg-forest-600", activities: ["Visit the Battle of Walong War Memorial", "Explore the Lohit Valley surroundings", "Begin the return journey"] },
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
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-stone-600">
                    Costs vary significantly based on transport arrangements and guide/operator fees, which we recommend given the permit complexity and remoteness. Budget well above typical Arunachal daily costs, and factor in multiple days of travel time each way.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Walong</h2>
                  <ul>
                    <li><strong>Arrange all permits well in advance:</strong> Do not attempt this trip without confirmed, current documentation.</li>
                    <li><strong>Budget realistic time:</strong> The journey alone takes multiple days each way.</li>
                    <li><strong>Travel with an experienced operator:</strong> Local knowledge of current road and permit conditions is genuinely valuable here.</li>
                    <li><strong>Treat the war memorial with respect:</strong> This honors real sacrifice — approach it accordingly.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Confirm all permits well before departure", "Travel with an experienced local operator", "Budget generous time for the journey", "Approach the war memorial with genuine respect", "Carry warm layers regardless of season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt this trip without confirmed permits", "Underestimate the travel time and difficulty", "Expect developed tourist infrastructure", "Travel during peak monsoon", "Treat the battle site casually"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Walong", "Lohit Valley", "1962 War", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={WALONG_GEAR} destination="Walong" />
              <RelatedPostsGrid currentSlug="walong-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="walong-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
