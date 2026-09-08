// src/app/blog/vagator-travel-guide/page.tsx
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
  title: "Vagator Beach Travel Guide: Red Cliffs & Chapora Fort",
  description:
    "The complete Vagator travel guide. Red laterite cliffs, Big and Little Vagator beaches, Chapora Fort sunset views, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Vagator travel guide, Vagator beach Goa, Chapora Fort, Little Vagator Ozran, best time to visit Vagator, how to reach Vagator, North Goa beaches",
  openGraph: {
    title: "Vagator Beach Travel Guide: Red Cliffs & Chapora Fort",
    description: "Red laterite cliffs dropping into the Arabian Sea, beside the fort that made a cameo in every Goa road-trip photo since Dil Chahta Hai — the complete guide to Vagator.",
    url: "https://club.kudozz.in/blog/vagator-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Hilltop fort and coastal cliffs representative of Vagator, Goa" }],
  },
  twitter: { card: "summary_large_image", title: "Vagator Beach Travel Guide: Red Cliffs & Chapora Fort", description: "Red cliffs and Chapora Fort's famous sunset views — the complete guide to Vagator.", images: ["/images/destinations/jaisalmer/fort.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/vagator-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Vagator Beach Travel Guide: Red Cliffs & Chapora Fort",
      description: "The complete Vagator travel guide.",
      image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/vagator-travel-guide" },
      about: { "@type": "Place", name: "Vagator", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Vagator Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "What is Chapora Fort famous for?", a: "A Portuguese-era hilltop fort overlooking the coast, made famous to Indian audiences by the Bollywood film Dil Chahta Hai — one of the most-referenced filming locations in Goa, and still a popular sunset viewpoint." },
  { q: "What is the difference between Big Vagator and Little Vagator?", a: "Big Vagator is the main beach with more shacks and activity; Little Vagator (also called Ozran) is a smaller, calmer cove reached via a short walk, generally quieter." },
  { q: "How many days do I need in Vagator?", a: "A single day covers the beach and Chapora Fort sunset comfortably. Most travelers combine it with Anjuna, just a short drive away." },
  { q: "What is the best time to visit Vagator?", a: "November to February offers the driest weather and full beach-shack season. Monsoon (June–September) closes most facilities and brings rough seas." },
  { q: "How do I reach Vagator?", a: "The nearest airports are Dabolim (Goa International) or Manohar International (Mopa), both requiring a road transfer. Road access from anywhere in North Goa is straightforward." },
  { q: "Is Vagator good for nightlife?", a: "It has an active, if calmer than Baga's, party scene tied to Goa's psy-trance heritage alongside neighboring Anjuna — livelier than South Goa's quiet beaches but less dense than the Calangute-Baga strip." },
  { q: "Is Vagator beach good for swimming?", a: "Conditions vary by section — check locally, as the red-cliff coastline here is more rugged than flatter sandy beaches elsewhere in Goa." },
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
  { id: "introduction", title: "Why Vagator?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vagator", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VAGATOR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the cliffs, the fort, and the beach", emoji: "🏰",
  items: [
    { name: "Comfortable Walking Shoes", description: "For the climb up to Chapora Fort and walking between Big and Little Vagator.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "The fort approach and cliff paths are uneven, unlike flat beach sand." },
    { name: "Sun Hat & Sunglasses", description: "For the exposed fort viewpoint and beach time, both with little shade.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Beach essential", tagColor: "bg-sky-100 text-sky-700", why: "Chapora Fort's hilltop has minimal shade during the day." },
    { name: "Camera", description: "For Chapora Fort's sunset views over the coastline — genuinely one of North Goa's best photo spots.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sunset essential", tagColor: "bg-purple-100 text-purple-700", why: "This is one of the most photographed viewpoints in Goa for good reason." },
    { name: "Waterproof Phone Pouch", description: "For swimming at Big or Little Vagator without worrying about a dropped phone.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Beach essential", tagColor: "bg-forest-100 text-forest-700", why: "A cheap pouch beats an expensive phone repair." },
  ],
}];

export default function VagatorGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Hilltop fort and coastal cliffs representative of Vagator, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Vagator", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Vagator", "Beaches", "Chapora Fort", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Vagator Beach Travel Guide: Red Cliffs & Chapora Fort
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Red laterite cliffs dropping into the Arabian Sea, beside the fort that made a cameo in every Goa road-trip photo since Dil Chahta Hai.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Vagator, Goa" },
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
                  <h2>Why Vagator?</h2>
                  <p>
                    <strong>Vagator</strong> is defined by its coastline — distinctive red laterite cliffs
                    dropping into the Arabian Sea, split into <strong>Big Vagator</strong> and the quieter{" "}
                    <strong>Little Vagator (Ozran)</strong> beach. Above it all sits <strong>Chapora Fort</strong>,
                    a Portuguese-era hilltop fort that became one of India's most recognized film locations after
                    appearing in Dil Chahta Hai, and remains one of North Goa's best sunset viewpoints.
                  </p>
                  <p>
                    Vagator shares Anjuna's psy-trance heritage and keeps an active, if calmer, party scene —
                    a good middle ground between the dense Calangute-Baga strip and South Goa's quiet beaches.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Vagator at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🏰", label: "Landmark", value: "Chapora Fort" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim / Mopa" },
                        { icon: "🏖️", label: "Beaches", value: "Big & Little Vagator" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Vagator</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, warm weather with all shacks open and the fullest atmosphere." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot, thinning crowds", text: "Increasingly hot as the season winds down, with fewer travelers." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — mostly shut", text: "Most beach shacks close and seas turn rough." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February for the driest weather and the fullest beach-shack season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vagator</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim (Goa International Airport) or Manohar International Airport (Mopa), both requiring a road transfer.</li>
                    <li><strong>By Train:</strong> Thivim railway station is the closest option.</li>
                    <li><strong>By Road:</strong> A short drive from Anjuna, and well connected to the rest of North Goa.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Time your Chapora Fort visit for roughly 45 minutes before sunset to get a spot with an unobstructed view before it fills up.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Vagator</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Chapora Fort and coastal views at Vagator" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Chapora Fort:</strong> A Portuguese-era hilltop fort, made famous by Dil Chahta Hai, and one of North Goa's best sunset viewpoints.</li>
                    <li><strong>Big Vagator Beach:</strong> The main beach, with shacks and beach activity beneath the red cliffs.</li>
                    <li><strong>Little Vagator (Ozran) Beach:</strong> A smaller, calmer cove reached via a short walk.</li>
                    <li><strong>Vagator's party scene:</strong> An active, if calmer than Baga's, nightlife thread tied to the area's psy-trance heritage.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Vagator</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Guesthouses inland", "Basic beach huts"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Boutique cliffside stays", "Cottage-style resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹14,000+/night", picks: ["Premium sea-view villas"] },
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
                  <h2>What to Eat in Vagator</h2>
                  <ul>
                    <li><strong>Goan fish curry rice:</strong> The regional staple at beach shacks.</li>
                    <li><strong>Feni:</strong> The local cashew/coconut spirit, widely available.</li>
                    <li><strong>International cafe menus:</strong> A reflection of Vagator's long-running traveler crowd.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Vagator Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beaches & Sunset Fort", color: "bg-amber-700", activities: ["Morning: Big Vagator Beach", "Afternoon: walk to Little Vagator (Ozran)", "Late afternoon: Chapora Fort for sunset", "Evening: dinner at a beach shack"] },
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
                          ["Accommodation/night", "₹800", "₹2,500", "₹8,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹300", "₹600", "₹1,500"],
                          ["1-Day total", "₹1,500", "₹4,000", "₹12,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights/trains to Goa.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Vagator</h2>
                  <ul>
                    <li><strong>Arrive early for sunset at Chapora Fort:</strong> The best spots fill up as sunset approaches.</li>
                    <li><strong>Check sea conditions before swimming:</strong> The cliff-lined coast is more rugged than sandier beaches.</li>
                    <li><strong>Combine with Anjuna:</strong> They're a short drive apart and pair naturally.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Catch sunset at Chapora Fort", "Visit both Big and Little Vagator beaches", "Combine with a trip to Anjuna", "Check sea conditions before swimming", "Rent a scooter for easy local travel"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Arrive at Chapora Fort right at sunset expecting space", "Swim past the shallows without checking conditions", "Expect open shacks during peak monsoon", "Skip Little Vagator for a quieter alternative", "Leave valuables unattended on the beach"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Vagator", "Beaches", "Chapora Fort", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VAGATOR_GEAR} destination="Vagator" />
              <RelatedPostsGrid currentSlug="vagator-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="vagator-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
