// src/app/blog/achanakmar-travel-guide/page.tsx
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
  title: "Achanakmar Tiger Reserve Travel Guide: Safari & Best Time",
  description:
    "The complete Achanakmar Tiger Reserve travel guide. Safari zones, wildlife, the Achanakmar-Amarkantak Biosphere Reserve, where to stay, best time to visit, and honest safari expectations.",
  keywords:
    "Achanakmar Tiger Reserve travel guide, Achanakmar Amarkantak Biosphere Reserve, Achanakmar safari, best time to visit Achanakmar, how to reach Achanakmar, Chhattisgarh tiger reserve, Bilaspur wildlife",
  openGraph: {
    title: "Achanakmar Tiger Reserve Travel Guide: Safari & Best Time",
    description: "A tiger reserve inside the Achanakmar-Amarkantak Biosphere Reserve, bordering Madhya Pradesh's forested plateau country — the complete guide to Achanakmar.",
    url: "https://club.kudozz.in/blog/achanakmar-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Dense forest and river landscape representative of Achanakmar, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Achanakmar Tiger Reserve Travel Guide: Safari & Best Time", description: "A quieter tiger reserve on the Chhattisgarh-Madhya Pradesh border — the complete guide to Achanakmar.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/achanakmar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Achanakmar Tiger Reserve Travel Guide: Safari & Best Time",
      description: "The complete Achanakmar Tiger Reserve travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/achanakmar-travel-guide" },
      about: { "@type": "Place", name: "Achanakmar Tiger Reserve", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Achanakmar Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need at Achanakmar?", a: "One to two days covers two safaris, which is enough given the reserve's more modest scale compared to Kanha or Bandhavgarh." },
  { q: "What are the tiger-sighting odds at Achanakmar?", a: "More modest than at bigger-name Madhya Pradesh reserves like Kanha or Bandhavgarh — go for the quieter forest experience and broader wildlife rather than expecting a guaranteed tiger sighting." },
  { q: "How do I reach Achanakmar?", a: "Bilaspur is the nearest airport (~45km) and major railway station. Raipur (~140km) is a larger alternative airport. Road access is via Bilaspur or Mungeli." },
  { q: "What is the best time to visit Achanakmar?", a: "November to June is the general safari season, though the park is typically closed roughly July to October for monsoon — verify current closure dates before planning." },
  { q: "Is Achanakmar connected to Amarkantak?", a: "Yes — it's part of the larger Achanakmar-Amarkantak Biosphere Reserve, which spans the Chhattisgarh-Madhya Pradesh border. Amarkantak itself is a separate pilgrimage town in Madhya Pradesh that some travelers combine into the same regional trip." },
  { q: "What wildlife besides tigers can I see at Achanakmar?", a: "Leopards, bison/gaur, and various deer species are present across the reserve's sal and bamboo forest terrain." },
  { q: "What is the budget for a trip to Achanakmar?", a: "A budget traveler can manage on roughly ₹1,700 a day including a basic safari, a mid-range trip closer to ₹4,000 a day." },
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
  { id: "introduction", title: "Why Achanakmar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Achanakmar", level: 2 },
  { id: "safari-zones", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ACHANAKMAR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a quieter Central Indian safari", emoji: "🐅",
  items: [
    { name: "Neutral/Khaki Clothing", description: "Standard safari practice — neutral tones are less disruptive to wildlife in open forest.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Bright colors stand out sharply against Achanakmar's dense sal and bamboo forest." },
    { name: "Binoculars", description: "Given the more modest sighting odds here, binoculars help you make the most of distant views.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Achanakmar's dense cover means wildlife is often glimpsed rather than seen up close." },
    { name: "Telephoto Camera / Lens", description: "For photographing wildlife at a respectful distance across the reserve's forest terrain.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A longer lens turns a distant glimpse into a usable photo." },
    { name: "Insect Repellent", description: "Dense forest and river-adjacent terrain make insects a real presence on safaris.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Sal and bamboo forest cover holds humidity and insects longer than open grassland." },
  ],
}];

export default function AchanakmarGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Dense forest and river landscape representative of Achanakmar, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Achanakmar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Achanakmar Tiger Reserve", "Adventure", "Wildlife", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Achanakmar Tiger Reserve Travel Guide: Safari & Best Time
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A tiger reserve inside the Achanakmar-Amarkantak Biosphere Reserve, bordering Madhya Pradesh's forested plateau country.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Achanakmar, Chhattisgarh" },
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
                  <h2>Why Achanakmar?</h2>
                  <p>
                    <strong>Achanakmar Tiger Reserve</strong> sits within the larger <strong>Achanakmar-Amarkantak Biosphere Reserve</strong>, a forested landscape spanning the Chhattisgarh-Madhya Pradesh border that also includes the sacred plateau town of Amarkantak nearby. Dense sal and bamboo forest cover the reserve, and jeep safaris run through designated zones managed by the Chhattisgarh Forest Department.
                  </p>
                  <p>
                    Be realistic going in: tiger-sighting odds here are more modest than at bigger-name Madhya Pradesh reserves like Kanha or Bandhavgarh. Achanakmar rewards travelers who want a quieter, less crowded forest experience over a guaranteed sighting.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐅</span> Achanakmar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🌲", label: "Terrain", value: "Sal & bamboo forest" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Jun" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bilaspur (~45km)" },
                        { icon: "🐆", label: "Wildlife", value: "Tigers, leopards, gaur" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Achanakmar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Cool season — our pick", text: "Comfortable temperatures and generally reliable park access." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but active", text: "Wildlife tends to concentrate near water sources as heat builds toward summer." },
                      { season: "Jul – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — likely closed", text: "The park is typically closed for regeneration during this window — verify current dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window, with the reserve reliably open.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Achanakmar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Bilaspur, about 45km away, is the nearest airport; Raipur (~140km) is a larger alternative.</li>
                    <li><strong>By Train:</strong> Bilaspur is also the nearest major railway station.</li>
                    <li><strong>By Road:</strong> Road access is via Bilaspur or Mungeli.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're already planning a trip to Amarkantak in neighboring Madhya Pradesh, Achanakmar is a reasonable regional add-on given their shared biosphere reserve.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest terrain around Achanakmar Tiger Reserve" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jeep safaris:</strong> Run through designated zones managed by the Chhattisgarh Forest Department, across dense sal and bamboo forest.</li>
                    <li><strong>Tigers:</strong> Present, but sighting odds are more modest than at Kanha or Bandhavgarh — set realistic expectations.</li>
                    <li><strong>Leopards, gaur, and deer:</strong> Additional wildlife present across the reserve, adding to the broader forest experience.</li>
                    <li><strong>Lower footfall:</strong> A genuine point of difference from Madhya Pradesh's marquee reserves — a quieter safari experience overall.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Achanakmar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Basic lodges near the park gate", "Simple guesthouses in Bilaspur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,000/night", picks: ["Forest-adjacent mid-range resorts"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of better-appointed lodges — options remain limited here"] },
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
                  <h2>What to Eat Near Achanakmar</h2>
                  <ul>
                    <li><strong>Lodge-served thalis:</strong> Simple vegetarian and non-vegetarian meals are the norm at most stays.</li>
                    <li><strong>Chhattisgarhi staples:</strong> Rice-based dishes and local vegetable preparations at Bilaspur town eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Achanakmar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Bilaspur", "Check in near the park gate", "Afternoon safari"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari", "Late morning: rest/departure prep", "Travel back to Bilaspur or onward"] },
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
                          ["Accommodation/night", "₹900", "₹3,000"],
                          ["Food/day", "₹350", "₹800"],
                          ["Safari/gypsy hire", "₹1,500", "₹2,500"],
                          ["Daily total", "₹1,700", "₹4,000"],
                          ["2-Day trip total", "₹3,400", "₹8,000"],
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
                  <h2>Essential Travel Tips for Achanakmar</h2>
                  <ul>
                    <li><strong>Book safaris in advance:</strong> Permit slots are limited even at a quieter reserve like this.</li>
                    <li><strong>Set realistic sighting expectations:</strong> This isn't Kanha or Bandhavgarh — value the forest and broader wildlife over a guaranteed tiger.</li>
                    <li><strong>Verify current monsoon closure dates:</strong> The reserve typically closes roughly July-October.</li>
                    <li><strong>Consider combining with Amarkantak:</strong> A reasonable regional pairing given the shared biosphere reserve, though it's in a different state.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safaris in advance", "Go with realistic tiger-sighting expectations", "Verify current park/monsoon status before travelling", "Carry binoculars for distant sightings", "Consider a regional pairing with Amarkantak"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect Kanha/Bandhavgarh-level tiger sightings", "Show up without booking safari slots", "Plan around monsoon months without checking closure dates", "Wear bright colors on safari", "Skip insect repellent in this dense forest terrain"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Achanakmar Tiger Reserve", "Adventure", "Wildlife", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ACHANAKMAR_GEAR} destination="Achanakmar" />
              <RelatedPostsGrid currentSlug="achanakmar-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="achanakmar-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
