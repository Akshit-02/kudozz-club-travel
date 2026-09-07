// src/app/blog/pachmarhi-travel-guide/page.tsx
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
  title: "Pachmarhi Travel Guide: Waterfalls, Caves & Satpura's Only Hill Station",
  description:
    "The complete Pachmarhi travel guide. Dhoopgarh, Bee Falls, Pandav Caves, Jata Shankar, Chauragarh trek, Satpura National Park, where to stay, best time to visit, and a full 2-day itinerary through Madhya Pradesh's only hill station.",
  keywords:
    "Pachmarhi travel guide, Dhoopgarh, Bee Falls Pachmarhi, Pandav Caves, Jata Shankar, Chauragarh trek, Satpura National Park, best time to visit Pachmarhi, how to reach Pachmarhi, Pachmarhi itinerary, Madhya Pradesh hill station",
  openGraph: {
    title: "Pachmarhi Travel Guide: Waterfalls, Caves & Satpura's Only Hill Station",
    description: "The Satpura range's only hill station, with cave temples, waterfalls hidden in sandstone gorges, and Madhya Pradesh's highest peak — the complete guide to Pachmarhi.",
    url: "https://club.kudozz.in/blog/pachmarhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty forested hills representative of Pachmarhi, Madhya Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pachmarhi Travel Guide: Waterfalls, Caves & Satpura's Only Hill Station",
    description: "Cave temples, sandstone gorge waterfalls, and Madhya Pradesh's highest peak — the complete guide to Pachmarhi.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/pachmarhi-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Pachmarhi Travel Guide: Waterfalls, Caves & Satpura's Only Hill Station",
          description: "The complete Pachmarhi travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pachmarhi-travel-guide" },
          about: { "@type": "Place", name: "Pachmarhi", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Pachmarhi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Pachmarhi?", a: "Two full days cover the main viewpoints, Bee Falls, the Pandav Caves, and Jata Shankar comfortably. Add a third day if you want to attempt the Chauragarh trek or do a Satpura National Park safari without rushing." },
  { q: "What is the best time to visit Pachmarhi?", a: "October to June works, with October–February the most comfortable for sightseeing and March–June hot but good if pre-monsoon showers have already filled the waterfalls. The monsoon (July–September) is lush but many viewpoints and caves close for safety." },
  { q: "How do I reach Pachmarhi?", a: "The nearest railway station is Pipariya, about 50km away, from where a scenic drive climbs up into the hills. The nearest airports are Bhopal (~210km) and Jabalpur (~190km); most travelers combine a train to Pipariya with a taxi for the last stretch." },
  { q: "Is the Chauragarh trek difficult?", a: "It's a steep pilgrim trail of roughly 1,300+ steps to a hilltop Shiva shrine — strenuous but not technical. Reasonable fitness and a decent pace get most travelers to the top in 2–3 hours, with a faster descent." },
  { q: "Do I need a permit or guide for Pachmarhi's caves and viewpoints?", a: "Several sites within the Satpura Tiger Reserve buffer area require a local guide or forest permit, and requirements do change — check current rules with your hotel or the forest department office in Pachmarhi before setting out." },
  { q: "What is the budget for a trip to Pachmarhi?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip runs closer to ₹4,200 a day, and a resort-level stay can run ₹9,000+ a day. A 2-day trip totals roughly ₹3,200 on a budget and ₹8,400 mid-range, excluding transport to the region." },
  { q: "Is Pachmarhi good for a family trip?", a: "Yes — Bee Falls, Pandav Caves, and the main viewpoints are all manageable for most fitness levels and ages, while the Chauragarh trek and deeper forest trails suit more active groups." },
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
  { id: "introduction", title: "Why Pachmarhi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pachmarhi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PACHMARHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for waterfalls, cave trails, and the Chauragarh climb",
    emoji: "⛰️",
    items: [
      { name: "Trekking Shoes", description: "Grippy soles matter on the steep, sometimes wet stone steps to Chauragarh and the paths around Bee Falls and Jata Shankar.", price: "₹3,299", rating: 4.5, reviews: "6.8k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+men+women"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Slippery rock steps around the waterfalls and the long Chauragarh climb are where most minor injuries happen." },
      { name: "Rain Jacket / Poncho", description: "Even outside peak monsoon, Satpura's forested hills see sudden showers — a packable rain layer keeps a day trip from turning into a soggy retreat.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Pachmarhi's elevation and forest cover mean weather can shift fast, especially in shoulder season." },
      { name: "Reusable Water Bottle (1L)", description: "Several attractions, especially Chauragarh, have long stretches without shops — carrying enough water is non-negotiable on the climb.", price: "₹449", rating: 4.5, reviews: "7.9k", image: "💧", affiliateUrl: amazonSearchUrl("1l+reusable+water+bottle+steel"), tag: "Trek essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities thin out fast once you're past the main viewpoints into forested sections." },
      { name: "Insect Repellent", description: "Dense forest and waterfall spray zones mean mosquitoes and other insects are a real presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-purple-100 text-purple-700", why: "Evenings around forested viewpoints and caves see a noticeable uptick in mosquito activity." },
      { name: "Daypack (20L)", description: "For carrying water, snacks, a rain layer, and a camera across a full day of viewpoint-hopping and the Chauragarh trek.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("20l+daypack+trekking"), tag: "All-day essential", tagColor: "bg-stone-100 text-stone-700", why: "A comfortable daypack makes the difference on the longer Chauragarh climb, where every extra weight matters." },
    ],
  },
];

export default function PachmarhiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty forested hills representative of Pachmarhi, Madhya Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Pachmarhi", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pachmarhi", "Satpura", "Off-beat", "Trekking", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Pachmarhi Travel Guide: Waterfalls, Caves & Satpura's Only Hill Station
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Cave temples tucked into sandstone gorges, waterfalls fed by dense forest, and Madhya Pradesh's highest peak — everything you need to plan a trip to Pachmarhi.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Pachmarhi, Madhya Pradesh" },
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
                  <h2>Why Pachmarhi?</h2>
                  <p>
                    <strong>Pachmarhi</strong> is the only hill station in the Satpura Range, sitting inside the Satpura Tiger Reserve and Biosphere Reserve at roughly 1,100 metres. British officer Captain James Forsyth is credited with "discovering" it for colonial use in the 1850s, and it became a monsoon retreat much like Shimla or Ooty — but its landscape is distinctly different: sandstone gorges, cave temples, and dense sal forest rather than open Himalayan or Nilgiri slopes.
                  </p>
                  <p>
                    The town centres on a cluster of viewpoints, waterfalls, and cave sites spread across the plateau, most reachable by a short drive followed by a walk. It's a quieter, less commercial alternative to Madhya Pradesh's bigger-name destinations, and a genuinely good base for a couple of unhurried days outdoors.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛰️</span> Pachmarhi at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🏔️", label: "Key Site", value: "Dhoopgarh (MP's highest point)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Jun" },
                        { icon: "🚆", label: "Nearest Rail", value: "Pipariya (~50km)" },
                        { icon: "🥾", label: "Signature Trek", value: "Chauragarh" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Pachmarhi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear, and comfortable for both viewpoint-hopping and the Chauragarh climb, with all sites typically open." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but manageable", text: "Temperatures climb, but Pachmarhi's elevation keeps it noticeably cooler than the plains — waterfalls run lower unless pre-monsoon showers have arrived." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but restricted", text: "Waterfalls and forest are at their greenest, but several viewpoints, caves, and trails close for safety during heavy rain." },
                      { season: "Sep", emoji: "🌤️", color: "bg-purple-50 border-purple-200", mood: "Transitional", text: "Rains taper off and access gradually reopens, though trails can still be muddy and slippery in places." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — the most reliable window for both the caves/waterfalls and a full Chauragarh climb without weather-related closures.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pachmarhi</h2>
                  <ul>
                    <li><strong>By Air:</strong> The nearest airports are Bhopal (BHO, ~210km) and Jabalpur (JLR, ~190km), both requiring a long onward drive.</li>
                    <li><strong>By Train:</strong> Pipariya, about 50km away, is the nearest railway station, well connected to Bhopal, Jabalpur, and the wider national network.</li>
                    <li><strong>By Road:</strong> A scenic ghat road climbs from Pipariya up into the hills — the most common last leg for almost every visitor, regardless of how they arrive at Pipariya.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Because Pachmarhi is genuinely harder to reach than MP's bigger heritage towns, it stays noticeably quieter — worth the extra travel time if you want fewer crowds.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Pachmarhi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Forested hills and viewpoints around Pachmarhi" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Dhoopgarh:</strong> Madhya Pradesh's highest point at roughly 1,350m, popular for sunset views across the Satpura range.</li>
                    <li><strong>Bee Falls (Jamuna Prapat):</strong> A popular waterfall close to town, good for swimming when flow and safety conditions allow.</li>
                    <li><strong>Pandav Caves:</strong> Rock-cut caves with legendary links to the Pandavas of the Mahabharata, though historically believed to have been Buddhist monk dwellings.</li>
                    <li><strong>Jata Shankar:</strong> A cave shrine formed by a natural rock formation resembling Shiva's matted hair, with a stream running through it.</li>
                    <li><strong>Chauragarh:</strong> A hilltop Shiva temple reached via a steep pilgrim trail lined with trishuls, one of the more physically demanding sights here.</li>
                    <li><strong>Satpura National Park:</strong> Jeep, walking, and boat safaris — a rarer combination among Indian parks — with lower crowds than Kanha or Bandhavgarh.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Pachmarhi</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["MPT/government guesthouses", "Basic hotels near the bus stand", "Budget lodges in the main market"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Resort-style hotels near Bee Falls road", "Cottage-style stays on the plateau edge", "Nature-focused mid-range resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹12,000+/night", picks: ["Forest-view resort properties", "Premium cottage resorts near Satpura buffer"] },
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
                  <h2>What to Eat in Pachmarhi</h2>
                  <p>Food here leans toward simple North Indian and MP staples served at hotels and small local eateries around the main market.</p>
                  <ul>
                    <li><strong>Dal Bafla / Poha:</strong> MP comfort staples widely available at local eateries.</li>
                    <li><strong>Forest-lodge thalis:</strong> Most mid-range and resort stays serve set vegetarian and non-vegetarian thalis.</li>
                    <li><strong>Local market chai and snacks:</strong> Simple stalls around the bus stand and market area for quick bites between sightseeing stops.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Pachmarhi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Waterfalls & Caves", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Bee Falls and Pandav Caves", "Afternoon: Jata Shankar cave shrine", "Evening: Sunset at a viewpoint near town"] },
                      { day: "Day 2", title: "Dhoopgarh & Chauragarh", color: "bg-forest-600", activities: ["Early morning: Dhoopgarh sunrise", "Mid-morning: Chauragarh trek (or a Satpura National Park safari as an alternative)", "Afternoon: Rest and departure prep"] },
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
                          ["Accommodation/night", "₹900", "₹3,000", "₹9,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹250", "₹600", "₹1,200"],
                          ["Entry fees / guide", "₹100", "₹300", "₹500"],
                          ["Daily total", "₹1,600", "₹4,200", "₹9,700"],
                          ["2-Day trip total", "₹3,200", "₹8,400", "₹19,400"],
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
                  <h2>Essential Travel Tips for Pachmarhi</h2>
                  <ul>
                    <li><strong>Verify current permit/guide rules:</strong> Several viewpoints and caves fall within the Satpura Tiger Reserve buffer and requirements change — check locally before setting out.</li>
                    <li><strong>Start Chauragarh early:</strong> The climb is long and shadeless in stretches — an early start avoids the worst midday heat.</li>
                    <li><strong>Carry cash:</strong> Card acceptance is limited outside larger hotels.</li>
                    <li><strong>Hire a local guide/driver:</strong> Sites are spread across the plateau and a guide who knows current access rules saves time and hassle.</li>
                    <li><strong>Check monsoon closures:</strong> Several trails and viewpoints close for safety during heavy rain — verify current status if visiting Jul–Sep.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Catch sunrise or sunset at Dhoopgarh", "Attempt the Chauragarh trek with an early start", "Combine sightseeing with a Satpura National Park safari", "Carry water and snacks for spread-out sites", "Hire a local guide for cave and forest areas"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt Chauragarh in the midday heat", "Rely on cards outside major hotels", "Ignore local guidance on closed trails/viewpoints", "Expect nightlife or big-city infrastructure", "Skip checking monsoon-season access restrictions"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Pachmarhi", "Satpura", "Off-beat", "Trekking", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PACHMARHI_GEAR} destination="Pachmarhi" />
              <RelatedPostsGrid currentSlug="pachmarhi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="pachmarhi-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
