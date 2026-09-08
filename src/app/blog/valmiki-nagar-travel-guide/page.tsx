// src/app/blog/valmiki-nagar-travel-guide/page.tsx
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
  title: "Valmiki Nagar Travel Guide: Tiger Reserve & Himalayan Foothills",
  description:
    "The complete Valmiki Nagar travel guide. Valmiki Tiger Reserve safaris, the Gandak River, Himalayan foothill scenery, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Valmiki Nagar travel guide, Valmiki Tiger Reserve, Bihar tiger safari, Gandak River, best time to visit Valmiki Nagar, how to reach Valmiki Nagar, Bihar wildlife",
  openGraph: {
    title: "Valmiki Nagar Travel Guide: Tiger Reserve & Himalayan Foothills",
    description: "Bihar's only tiger reserve, tucked into the Himalayan foothills where the Gandak River enters India from Nepal — the complete guide to Valmiki Nagar.",
    url: "https://club.kudozz.in/blog/valmiki-nagar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Forested foothill landscape representative of Valmiki Nagar, Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valmiki Nagar Travel Guide: Tiger Reserve & Himalayan Foothills",
    description: "Bihar's only tiger reserve on the Nepal border — the complete guide to Valmiki Nagar.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/valmiki-nagar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Valmiki Nagar Travel Guide: Tiger Reserve & Himalayan Foothills",
          description: "The complete Valmiki Nagar travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/valmiki-nagar-travel-guide" },
          about: { "@type": "Place", name: "Valmiki Nagar", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Valmiki Nagar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Is Valmiki Nagar a good place to see a tiger?", a: "Be realistic about this — Valmiki Tiger Reserve's sighting odds are genuinely more modest than at India's marquee reserves like Kanha or Bandhavgarh. Visit for the Himalayan foothill landscape and broader wildlife rather than a guaranteed tiger sighting." },
  { q: "How do I reach Valmiki Nagar?", a: "The nearest airport is Patna, about 230km away — a genuinely long drive. Gorakhpur in Uttar Pradesh is another option. Bagaha is the nearest railway station, with road access being the primary route in." },
  { q: "What is the best time to visit Valmiki Nagar?", a: "November to June is the safari season. The reserve is typically closed roughly July to October for monsoon — verify current closure dates before planning a trip." },
  { q: "Is Valmiki Nagar connected to Nepal's wildlife parks?", a: "Yes — the reserve is contiguous with the landscape around Nepal's Chitwan National Park across the border, part of a broader shared transboundary conservation area." },
  { q: "What is the significance of the name Valmiki?", a: "The area is traditionally associated with the sage Valmiki, author of the Ramayana, giving the region a layer of religious and literary significance alongside its wildlife." },
  { q: "Do I need to book safari permits in advance?", a: "Yes — book through the Bihar Forest Department in advance, especially for weekends and the winter peak season." },
  { q: "What is the budget for a trip to Valmiki Nagar?", a: "A budget traveler can manage on roughly ₹1,800 a day including a basic safari, a mid-range trip closer to ₹4,000 a day. Given the distance from Patna, factor in transport costs separately." },
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
  { id: "introduction", title: "Why Valmiki Nagar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Valmiki Nagar", level: 2 },
  { id: "safari-zones", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VALMIKI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for safaris in a remote Himalayan-foothill reserve",
    emoji: "🐅",
    items: [
      { name: "Neutral/Khaki Clothing", description: "Standard safari practice — neutral tones are less disruptive to wildlife across the reserve's grassland and forest zones.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Bright colors stand out against the terai grassland and forest edges here." },
      { name: "Binoculars", description: "Given the reserve's more modest tiger-sighting odds, binoculars help you make the most of the broader wildlife and birdlife present.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "A genuinely useful investment given this reserve's less frequent big-cat sightings." },
      { name: "Telephoto Camera", description: "For photographing wildlife at a respectful distance across open terai terrain.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "Open grassland sightings are often distant — a longer lens makes the difference." },
      { name: "Insect Repellent", description: "Terai/foothill terrain near the Gandak River is genuinely mosquito-prone, especially at dawn and dusk safari times.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "River-adjacent terai terrain sees more mosquito activity than drier Central Indian reserves." },
    ],
  },
];

export default function ValmikiNagarGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Forested foothill landscape representative of Valmiki Nagar, Bihar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Valmiki Nagar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Valmiki Nagar", "Tiger Reserve", "Adventure", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Valmiki Nagar Travel Guide: Tiger Reserve & Himalayan Foothills
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Bihar's only tiger reserve, tucked into the Himalayan foothills where the Gandak River enters India from Nepal.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Valmiki Nagar, Bihar" },
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
                  <h2>Why Valmiki Nagar?</h2>
                  <p>
                    <strong>Valmiki Tiger Reserve</strong> is Bihar's only tiger reserve, part of India's Project Tiger network, sitting in the Himalayan foothills — sub-Himalayan terai and bhabar terrain — right along the India-Nepal border where the Gandak River crosses into India. It's genuinely contiguous with the landscape around Nepal's Chitwan National Park across the border, part of a shared transboundary conservation area.
                  </p>
                  <p>
                    We'll be upfront: tiger-sighting odds here are more modest than at India's marquee reserves like Kanha or Bandhavgarh. Come for the foothill scenery, the broader wildlife, and the region's genuine literary connection to the sage Valmiki, author of the Ramayana — treat any tiger sighting as a bonus.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐅</span> Valmiki Nagar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🐅", label: "Known For", value: "Bihar's only tiger reserve" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Jun (verify closures)" },
                        { icon: "🚆", label: "Nearest Rail", value: "Bagaha" },
                        { icon: "🏔️", label: "Terrain", value: "Himalayan foothills, terai" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Valmiki Nagar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for safaris, with good general wildlife activity." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but active", text: "Wildlife tends to concentrate near water sources as temperatures climb." },
                      { season: "Jul – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — likely closed", text: "The reserve typically closes for monsoon regeneration — verify current dates before planning around this window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most reliable window for comfortable safaris and general wildlife activity.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Valmiki Nagar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Patna is the nearest airport, about 230km away — a genuinely long drive. Gorakhpur in Uttar Pradesh is another option depending on your route.</li>
                    <li><strong>By Train:</strong> Bagaha is the nearest railway station, with a further road journey to the reserve.</li>
                    <li><strong>By Road:</strong> Road access is the primary route in — this is one of the more remote entries in Bihar's tourist circuit, so build in real travel time.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Given the distance from Patna, plan Valmiki Nagar as a dedicated 2-3 day trip rather than a quick add-on to a Bihar heritage circuit.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Foothill forest scenery around Valmiki Tiger Reserve" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jeep safaris:</strong> Run through the Bihar Forest Department across designated zones — book in advance, especially for weekends.</li>
                    <li><strong>Tigers:</strong> Present in the reserve, but sighting odds are genuinely more modest than at Central India's bigger-name reserves.</li>
                    <li><strong>Elephants and leopards:</strong> Also present, alongside various deer species, adding to the reserve's wildlife interest.</li>
                    <li><strong>Transboundary landscape:</strong> The reserve connects with the forest landscape around Nepal's Chitwan National Park across the border — a genuinely notable conservation feature.</li>
                    <li><strong>Valmiki Ashram association:</strong> The region is traditionally linked to the sage Valmiki, author of the Ramayana, adding a layer of literary/religious significance to a visit here.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Valmiki Nagar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses near the reserve gate", "Simple lodges in Bagaha"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Forest-department or private mid-range stays", "Better-appointed lodges near the reserve"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very few premium options in this remote region — set expectations accordingly"] },
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
                  <h2>What to Eat Near Valmiki Nagar</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish — roasted stuffed wheat balls served with mashed spiced vegetables.</li>
                    <li><strong>Sattu paratha:</strong> A hearty roasted-gram-flour-stuffed flatbread, a Bihari staple.</li>
                    <li><strong>Local thalis:</strong> Simple regional meals at guesthouses and lodges, given limited dining options in this remote area.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Valmiki Nagar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Patna or Bagaha", "Check in near the reserve gate", "Afternoon jeep safari"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari", "Late morning: rest and departure prep", "Travel back toward Patna or onward"] },
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
                          ["Safari/gypsy hire", "₹1,500", "₹2,800"],
                          ["Daily total", "₹1,800", "₹4,000"],
                          ["2-Day trip total", "₹3,600", "₹8,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes the long transport leg from Patna, which can add significantly to the trip cost.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Valmiki Nagar</h2>
                  <ul>
                    <li><strong>Verify current park access before booking:</strong> Monsoon closure dates should be confirmed directly with the Forest Department.</li>
                    <li><strong>Set realistic sighting expectations:</strong> Treat a tiger sighting as a bonus, not the guaranteed centrepiece of the trip.</li>
                    <li><strong>Book through a recognized local operator:</strong> Given the remote setting, local knowledge matters.</li>
                    <li><strong>Plan for the distance:</strong> This is a genuinely long trip from Patna — build in adequate travel time.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safari permits well in advance", "Go with realistic expectations about tiger sightings", "Plan for the long travel distance from Patna", "Carry sufficient cash", "Appreciate the foothill landscape and broader wildlife"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip around a guaranteed tiger sighting", "Underestimate the travel time from Patna", "Skip verifying current park access before travelling", "Expect Kanha/Bandhavgarh-level infrastructure", "Rely on cards for payment in this remote area"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Valmiki Nagar", "Tiger Reserve", "Adventure", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VALMIKI_GEAR} destination="Valmiki Nagar" />
              <RelatedPostsGrid currentSlug="valmiki-nagar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="valmiki-nagar-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
