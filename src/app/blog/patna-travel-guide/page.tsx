// src/app/blog/patna-travel-guide/page.tsx
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
  title: "Patna Travel Guide: Golghar, Patna Sahib & Bihar's Capital",
  description:
    "The complete Patna travel guide. Golghar granary, Takht Sri Patna Sahib, Patna Museum, Kumhrar ruins, where to stay, best time to visit, and a full itinerary through Bihar's riverside capital.",
  keywords:
    "Patna travel guide, Golghar Patna, Patna Sahib Gurdwara, Patna Museum, Kumhrar Pataliputra ruins, best time to visit Patna, how to reach Patna, Patna itinerary, Bihar capital",
  openGraph: {
    title: "Patna Travel Guide: Golghar, Patna Sahib & Bihar's Capital",
    description: "A riverside capital city with a colonial-era granary shaped like a beehive, and one of Sikhism's holiest gurdwaras — the complete guide to Patna.",
    url: "https://club.kudozz.in/blog/patna-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Riverside city architecture representative of Patna, Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patna Travel Guide: Golghar, Patna Sahib & Bihar's Capital",
    description: "Golghar's colonial-era granary and Patna Sahib's Sikh heritage — the complete guide to Patna.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/patna-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Patna Travel Guide: Golghar, Patna Sahib & Bihar's Capital",
      description: "The complete Patna travel guide.",
      image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/patna-travel-guide" },
      about: { "@type": "Place", name: "Patna", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Patna Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Patna?", a: "One to two days covers Golghar, Patna Sahib, the Patna Museum, and Kumhrar comfortably. Most travelers use Patna primarily as a base or transit hub for the wider Bihar heritage circuit." },
  { q: "What is the best time to visit Patna?", a: "October to March offers the most comfortable weather for sightseeing." },
  { q: "How do I reach Patna?", a: "Jay Prakash Narayan Airport (PAT) serves the city directly. Patna Junction is a major railway hub, and road connectivity is extensive given Patna's role as the state capital." },
  { q: "What is Golghar?", a: "A distinctive beehive-shaped granary built by the British in the late 18th century, originally intended as a famine-relief grain store. A spiral external staircase leads to a viewing platform over the Ganges and the city." },
  { q: "Is Patna Sahib open to all visitors?", a: "Yes — Takht Sri Patna Sahib is an active gurdwara and one of Sikhism's five Takhts, marking the birthplace of Guru Gobind Singh. Visitors of all backgrounds are welcome, with modest dress and respectful behavior expected." },
  { q: "Is Patna a good base for exploring the rest of Bihar's heritage sites?", a: "Yes — it's the practical transport hub for reaching Bodh Gaya, Nalanda, Rajgir, and Vaishali, with the best air and rail connectivity in the state." },
  { q: "What is the budget for a trip to Patna?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day." },
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
  { id: "introduction", title: "Why Patna?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Patna", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PATNA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for city sightseeing and the gurdwara visit", emoji: "🏙️",
  items: [
    { name: "Modest Clothing", description: "Expected at Patna Sahib Gurdwara — covered head (a scarf/cloth) is typically required inside.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+scarf+travel"), tag: "Gurdwara essential", tagColor: "bg-purple-100 text-purple-700", why: "Sikh gurdwaras require head covering — carry your own scarf rather than relying on one being provided." },
    { name: "Comfortable Walking Shoes", description: "For Golghar's spiral staircase and general city sightseeing.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "City essential", tagColor: "bg-amber-100 text-amber-700", why: "Golghar's viewing platform is reached via a full spiral climb." },
    { name: "Camera", description: "For the Ganges riverfront views from Golghar and the city's colonial-era architecture.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-sky-100 text-sky-700", why: "Golghar's rooftop view over the Ganges is one of Patna's best photo opportunities." },
    { name: "Reusable Water Bottle", description: "For a full day moving between Golghar, Patna Sahib, the museum, and Kumhrar.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Patna's main sights are spread across the city, adding up to real walking distance." },
  ],
}];

export default function PatnaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Riverside city architecture representative of Patna, Bihar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Patna", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Patna", "Golghar", "Patna Sahib", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Patna Travel Guide: Golghar, Patna Sahib & Bihar's Capital
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A riverside capital city with a colonial-era granary shaped like a beehive, and one of Sikhism's holiest gurdwaras.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Patna, Bihar" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Patna?</h2>
                  <p>
                    <strong>Patna</strong> is Bihar's capital and its practical transport hub, sitting on the Ganges with a genuinely layered history stretching back to ancient Pataliputra, once the capital of the Mauryan Empire under Ashoka. Today it's a working state capital first, but carries real heritage worth a stop — a colonial-era granary shaped like a beehive, one of Sikhism's five most important seats, and a museum holding artifacts from across Bihar's ancient past.
                  </p>
                  <p>
                    For most travelers, Patna also functions as the gateway to the wider Bihar Buddhist heritage circuit — Bodh Gaya, Nalanda, Rajgir, and Vaishali are all reachable from here, making Patna a sensible base even if the city itself isn't the headline of your trip.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏙️</span> Patna at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India (capital)" },
                        { icon: "🏛️", label: "Key Site", value: "Golghar" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Jay Prakash Narayan (PAT)" },
                        { icon: "🛕", label: "Landmark", value: "Takht Sri Patna Sahib" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Patna</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for city sightseeing and the surrounding heritage circuit." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat and humidity — manageable but not the most pleasant window for walking the city." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain, with the Ganges running high — can disrupt outdoor sightseeing plans." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable stretch for both Patna itself and the wider Buddhist heritage circuit.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Patna</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jay Prakash Narayan Airport (PAT) serves the city with strong domestic connectivity.</li>
                    <li><strong>By Train:</strong> Patna Junction is a major railway hub on the national network.</li>
                    <li><strong>By Road:</strong> Well connected as the state capital, with routes to Bodh Gaya, Nalanda, Rajgir, and Vaishali.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Patna has the best air and rail connectivity in Bihar — use it as your arrival/departure hub even if you're spending most of your trip elsewhere in the state.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Patna</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="City architecture and riverfront in Patna" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Golghar:</strong> A beehive-shaped colonial-era granary with a spiral staircase leading to a viewing platform over the Ganges and the city.</li>
                    <li><strong>Takht Sri Patna Sahib:</strong> One of Sikhism's five Takhts, marking the birthplace of Guru Gobind Singh — a major Sikh pilgrimage site.</li>
                    <li><strong>Patna Museum:</strong> Historical and archaeological artifacts spanning Bihar's ancient heritage, including Mauryan and Buddhist-era pieces.</li>
                    <li><strong>Kumhrar:</strong> Archaeological remains linked to ancient Pataliputra, the historic Mauryan capital under Ashoka.</li>
                    <li><strong>Ganges riverfront and ghats:</strong> A pleasant evening walk along the river.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Patna</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Budget hotels near the railway station", "Simple guesthouses in the city centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Business-class hotels", "Comfortable mid-range city stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Premium hotels catering to business and heritage travelers"] },
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
                  <h2>What to Eat in Patna</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish — roasted sattu-stuffed wheat balls with mashed spiced vegetables — widely available across the city.</li>
                    <li><strong>Sattu paratha and thekua:</strong> Common Bihari staples, easy to find at local eateries.</li>
                    <li><strong>Langar at Patna Sahib:</strong> The gurdwara serves free community meals (langar) to all visitors, a genuine part of the Sikh pilgrimage experience.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Patna Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Golghar & Patna Sahib", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Golghar and Ganges riverfront", "Afternoon: Takht Sri Patna Sahib", "Evening: Ganges ghats"] },
                      { day: "Day 2", title: "Museum & Ruins", color: "bg-forest-600", activities: ["Morning: Patna Museum", "Afternoon: Kumhrar archaeological site", "Evening: departure or onward to Bodh Gaya/Nalanda"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,200", "₹9,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Local transport per day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹1,500", "₹4,000", "₹11,500"],
                          ["2-Day trip total", "₹3,000", "₹8,000", "₹23,000"],
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
                  <h2>Essential Travel Tips for Patna</h2>
                  <ul>
                    <li><strong>Cover your head at Patna Sahib:</strong> Standard gurdwara etiquette — carry a scarf or cloth.</li>
                    <li><strong>Use Patna as your regional hub:</strong> Best air/rail connectivity in Bihar for reaching the wider heritage circuit.</li>
                    <li><strong>Visit Golghar for sunset:</strong> Good light over the Ganges from the viewing platform.</li>
                    <li><strong>Try the langar at Patna Sahib:</strong> A genuine part of the Sikh pilgrimage tradition, open to all visitors.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Cover your head when visiting Patna Sahib", "Visit Golghar for sunset river views", "Use Patna as a base for the wider heritage circuit", "Try litti chokha and the Patna Sahib langar", "Visit the Patna Museum for regional historical context"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Enter Patna Sahib without a head covering", "Treat Patna as just a transit stop and skip its sights entirely", "Expect a leisure-resort atmosphere — this is a working capital city", "Skip Kumhrar if ancient Mauryan history interests you", "Rush the museum visit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Patna", "Golghar", "Patna Sahib", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PATNA_GEAR} destination="Patna" />
              <RelatedPostsGrid currentSlug="patna-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="patna-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
