// src/app/blog/thekkady-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Thekkady Travel Guide: Periyar Wildlife Sanctuary & Spice Plantations",
  description:
    "The complete Thekkady travel guide. Periyar Lake boat safaris, bamboo rafting, spice plantation tours, where to stay, best time to visit, and a full itinerary through Kerala's wildlife and spice country.",
  keywords:
    "Thekkady travel guide, Periyar Wildlife Sanctuary, Periyar Tiger Reserve, Kumily, boat safari Thekkady, spice plantations Kerala, best time to visit Thekkady, how to reach Thekkady",
  openGraph: {
    title: "Thekkady Travel Guide: Periyar Wildlife Sanctuary & Spice Plantations",
    description: "Boat safaris across a reservoir ringed by elephant herds, and spice plantations still growing the cardamom and pepper that built Kerala's ancient trade routes — the complete guide to Thekkady.",
    url: "https://club.kudozz.in/blog/thekkady-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Forest and reservoir landscape representative of Thekkady, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thekkady Travel Guide: Periyar Wildlife Sanctuary & Spice Plantations",
    description: "Boat safaris and spice plantations at Periyar Wildlife Sanctuary — the complete guide to Thekkady.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/thekkady-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Thekkady Travel Guide: Periyar Wildlife Sanctuary & Spice Plantations",
          description: "The complete Thekkady travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/thekkady-travel-guide" },
          about: { "@type": "Place", name: "Thekkady", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Thekkady Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Thekkady?", a: "Two days covers a boat safari, one other Forest Department activity (bamboo rafting or a jungle walk), and a spice plantation tour comfortably." },
  { q: "What is the best time to visit Thekkady?", a: "October to February is most comfortable overall, though wildlife sightings can be decent across the dry months up to June. Monsoon (June–September) restricts some activities and trails." },
  { q: "How do I reach Thekkady?", a: "The nearest airports are Madurai in Tamil Nadu (~140km) and Kochi (~190km). The nearest railway station is Kottayam (~100km) or Madurai; road access is the primary route from either side." },
  { q: "Is a jeep safari available at Thekkady, like other Indian tiger reserves?", a: "Thekkady's signature safari format is boat-based on Periyar Lake rather than jeep-based — a genuine point of difference from most North and Central Indian tiger reserves. The Forest Department also runs bamboo rafting, jungle walks, and border hikes." },
  { q: "Do I need to book safaris in advance?", a: "Yes — book boat safaris and other Kerala Forest Department activities in advance, especially in peak season, as slots are limited." },
  { q: "What is the budget for a trip to Thekkady?", a: "A budget traveler can manage on roughly ₹1,700 a day, a mid-range trip closer to ₹4,000 a day including a spice plantation tour. Forest Department activities are typically sold as tiered packages at different price points." },
  { q: "Is Thekkady good for a family trip?", a: "Yes — the standard boat safari and spice plantation tours are manageable for most ages, while bamboo rafting and border treks suit more active groups." },
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
  { id: "introduction", title: "Why Thekkady?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Thekkady", level: 2 },
  { id: "safari-activities", title: "Safaris & Activities", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const THEKKADY_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for boat safaris, forest walks, and plantation tours",
    emoji: "🐘",
    items: [
      { name: "Binoculars", description: "For spotting elephant herds and birdlife across Periyar Lake from the boat safari.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Wildlife on the boat safari is often visible only from a distance across the lake." },
      { name: "Insect Repellent", description: "Forest walks and border hikes through Thekkady's dense terrain bring a real mosquito and insect presence.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Thekkady's forest terrain and lake edges are prime mosquito habitat." },
      { name: "Comfortable Walking Shoes", description: "For jungle patrol walks, bamboo rafting embarkation points, and spice plantation tours.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes"), tag: "Trek essential", tagColor: "bg-sky-100 text-sky-700", why: "Several Forest Department activities involve real walking on uneven forest paths." },
      { name: "Light Rain Layer", description: "Thekkady's elevation and forest cover mean showers are common even outside peak monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-purple-100 text-purple-700", why: "Weather can shift quickly on the boat safari and forest walks." },
    ],
  },
];

export default function ThekkadyGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest and reservoir landscape representative of Thekkady, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Thekkady", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Thekkady", "Periyar Wildlife Sanctuary", "Adventure", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Thekkady Travel Guide: Periyar Wildlife Sanctuary & Spice Plantations
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Boat safaris across a reservoir ringed by elephant herds, and spice plantations still growing the cardamom and pepper that built Kerala's ancient trade routes.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Thekkady, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Thekkady?</h2>
                  <p>
                    <strong>Thekkady</strong> is built around Periyar Wildlife Sanctuary and Tiger Reserve, centered on the large man-made Periyar Lake. Its signature experience is a boat safari — a quieter, water-based format very different from the jeep safaris that define most Indian tiger reserves — where elephant herds, deer, and occasionally gaur come down to the water's edge in full view of the boats.
                  </p>
                  <p>
                    The Kerala Forest Department runs a genuinely wide range of eco-tourism activities beyond the standard boat ride: bamboo rafting, jungle patrol walks, border hikes, and tribal-guide-led treks. The surrounding hills are also cardamom and pepper country, home to spice plantations that trace back to the historic Western Ghats spice trade.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐘</span> Thekkady at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🚤", label: "Signature Activity", value: "Periyar Lake boat safari" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Madurai (~140km)" },
                        { icon: "🌶️", label: "Known For", value: "Cardamom & pepper plantations" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Thekkady</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Dec – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Most comfortable — our pick", text: "Cool, dry weather ideal for the boat safari and outdoor activities." },
                      { season: "Oct – Nov & Mar – Jun", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Good sighting odds", text: "Wildlife sightings can be strong across these months, though it gets progressively hotter toward June." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — restricted", text: "Some trails and activities are restricted or suspended for safety during heavy rain." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — the most reliable window for both comfort and wildlife activity around the lake.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Thekkady</h2>
                  <ul>
                    <li><strong>By Air:</strong> Madurai (Tamil Nadu, ~140km) and Kochi (~190km) are the nearest airports.</li>
                    <li><strong>By Train:</strong> Kottayam (~100km) or Madurai are the nearest railway stations.</li>
                    <li><strong>By Road:</strong> Road access from either Kerala or the Tamil Nadu side is the primary route into Kumily, Thekkady's base town.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book boat safaris and other Forest Department activities in advance, especially in peak season — slots at popular time windows fill up.
                  </div>
                </section>

                <section id="safari-activities">
                  <h2>Safaris & Activities</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Periyar Lake and forest scenery around Thekkady" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Periyar Lake boat safari:</strong> The core Thekkady experience — a slow boat ride where wildlife often approaches the water's edge, run by the Kerala Forest Department.</li>
                    <li><strong>Bamboo rafting:</strong> A day-long rafting experience deeper into the sanctuary's core, typically requiring advance booking.</li>
                    <li><strong>Jungle patrol walks:</strong> Guided walking treks through the buffer forest, led by trained local guides.</li>
                    <li><strong>Border hikes:</strong> Longer treks along the sanctuary's periphery for a more immersive forest experience.</li>
                    <li><strong>Spice plantation tours:</strong> Guided walks through cardamom and pepper plantations, with tastings and explanations of the historic spice trade.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Thekkady</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Kumily town", "Budget homestays near plantations"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Plantation-view mid-range resorts", "Forest-edge cottage stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Premium wildlife-view resorts", "Spice-estate luxury stays"] },
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
                  <h2>What to Eat in Thekkady</h2>
                  <ul>
                    <li><strong>Kerala thalis:</strong> Traditional vegetarian and non-vegetarian meals widely available in Kumily town.</li>
                    <li><strong>Spice-country dishes:</strong> Local cooking here often features the cardamom and pepper grown in the surrounding plantations.</li>
                    <li><strong>Plantation-stay meals:</strong> Many plantation homestays serve home-cooked Kerala food as part of the stay.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Thekkady Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Boat Safari & Town", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Periyar Lake boat safari", "Evening: explore Kumily town"] },
                      { day: "Day 2", title: "Forest Activity & Plantations", color: "bg-forest-600", activities: ["Morning: bamboo rafting or jungle patrol walk (booked ahead)", "Afternoon: spice plantation tour with tastings", "Evening: departure"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹10,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Boat safari + activities", "₹500", "₹1,200", "₹2,500"],
                          ["Daily total", "₹1,700", "₹4,000", "₹11,000"],
                          ["2-Day trip total", "₹3,400", "₹8,000", "₹22,000"],
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
                  <h2>Essential Travel Tips for Thekkady</h2>
                  <ul>
                    <li><strong>Book boat safaris and other activities in advance:</strong> Slots are limited and fill up in peak season.</li>
                    <li><strong>Morning slots are typically best for sightings:</strong> Wildlife activity around the lake tends to be higher earlier in the day.</li>
                    <li><strong>Combine a spice plantation tour with your safari day:</strong> They pair naturally into a full day of activities.</li>
                    <li><strong>Wear neutral clothing:</strong> Standard wildlife-viewing etiquette applies on the boat safari.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book the boat safari and Forest Department activities ahead", "Choose a morning slot for better sighting odds", "Pair a spice plantation tour with the safari day", "Wear neutral-toned clothing", "Try bamboo rafting for a deeper forest experience"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up without booking safari slots", "Expect a jeep safari format like Kanha or Bandhavgarh", "Wear bright colors on the boat safari", "Skip checking monsoon-season activity restrictions", "Rush the spice plantation tour — it rewards a slower pace"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Thekkady", "Periyar Wildlife Sanctuary", "Adventure", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={THEKKADY_GEAR} destination="Thekkady" />
              <RelatedPostsGrid currentSlug="thekkady-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="thekkady-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
