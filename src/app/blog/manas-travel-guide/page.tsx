// src/app/blog/manas-travel-guide/page.tsx
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
  title: "Manas National Park Travel Guide: Tiger Reserve & UNESCO Site",
  description:
    "The complete Manas National Park travel guide. Tigers, one-horned rhinos, golden langurs, the park's conservation comeback story, safari zones, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Manas National Park travel guide, Manas tiger reserve, Manas UNESCO, golden langur Manas, Manas Bhutan border, best time to visit Manas, how to reach Manas National Park, Assam wildlife safari",
  openGraph: {
    title: "Manas National Park Travel Guide: Tiger Reserve & UNESCO Site",
    description: "A UNESCO World Heritage tiger reserve on the Bhutan border, rebuilt from near-collapse into one of India's genuine conservation comeback stories — the complete guide to Manas.",
    url: "https://club.kudozz.in/blog/manas-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/hero.jpg", width: 1200, height: 630, alt: "Forest and grassland landscape representative of Manas National Park, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Manas National Park Travel Guide: Tiger Reserve & UNESCO Site", description: "A UNESCO World Heritage tiger reserve on the Bhutan border — the complete guide to Manas.", images: ["/images/destinations/meghalaya/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/manas-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Manas National Park Travel Guide: Tiger Reserve & UNESCO Site",
      description: "The complete Manas National Park travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/manas-travel-guide" },
      about: { "@type": "Place", name: "Manas National Park", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Manas National Park Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Is Manas safe and stable to visit today?", a: "Yes — Manas went through a genuinely difficult period of poaching and infrastructure damage during regional unrest in the 1980s-90s, which saw it added to UNESCO's 'World Heritage in Danger' list. Since then it has undergone a well-documented conservation recovery and was removed from that danger list. Today it operates as a normal, safe-to-visit tiger reserve." },
  { q: "How many days do I need at Manas?", a: "One to two days covers a couple of safaris comfortably. Given the travel time from Guwahati, most visitors stay at least one night near the park." },
  { q: "What is the best time to visit Manas?", a: "November to April is the safari season, similar to Kaziranga. The park is typically closed roughly May–October for monsoon — verify current exact closure dates before planning." },
  { q: "How do I reach Manas?", a: "The nearest airport is Guwahati (~140km), and the nearest railway station is Barpeta Road. Road access from Guwahati is the standard route." },
  { q: "Can I see tigers at Manas?", a: "Tigers are present, but as with most reserves, sightings aren't guaranteed on any single visit. Manas is also notable for other wildlife — one-horned rhinos (reintroduced as part of the park's recovery), golden langurs, wild water buffalo, and pygmy hogs." },
  { q: "How is Manas different from Kaziranga?", a: "Manas is generally quieter and less crowded than Kaziranga, straddles the Bhutan border with a genuinely compelling conservation-recovery story, and is a particularly notable habitat for golden langurs — a species Kaziranga isn't known for." },
  { q: "What is the budget for a trip to Manas?", a: "A budget traveler can manage on roughly ₹2,000 a day including a basic safari, a mid-range trip closer to ₹5,000 a day." },
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
  { id: "introduction", title: "Why Manas?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Manas", level: 2 },
  { id: "safari-zones", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MANAS_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for safaris across Manas's forest and grassland zones", emoji: "🐅",
  items: [
    { name: "Binoculars", description: "Essential for spotting golden langurs in the canopy and wildlife across open grassland stretches.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Manas's mixed forest-grassland terrain rewards good optics more than open-plains parks." },
    { name: "Telephoto Camera / Lens", description: "For photographing wildlife at a respectful distance across the park's varied terrain.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A longer lens matters especially for golden langurs, which stay high in the canopy." },
    { name: "Neutral/Khaki Clothing", description: "Standard safari practice — neutral tones are less disruptive to wildlife.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-forest-100 text-forest-700", why: "Bright colors stand out against Manas's green forest-and-grassland mix." },
    { name: "Insect Repellent", description: "River-valley terrain and forest cover make for a genuine mosquito presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-sky-100 text-sky-700", why: "The Manas River valley's humidity keeps mosquito activity high near dusk." },
  ],
}];

export default function ManasGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/hero.jpg" alt="Forest and grassland landscape representative of Manas National Park, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Manas National Park", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Manas National Park", "Tiger Reserve", "Adventure", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Manas National Park Travel Guide: Tiger Reserve & UNESCO Site
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A UNESCO World Heritage tiger reserve on the Bhutan border, rebuilt from near-collapse into one of India's genuine conservation comeback stories.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Manas National Park, Assam" },
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
                  <h2>Why Manas?</h2>
                  <p>
                    <strong>Manas National Park</strong> is a UNESCO World Heritage Site and Project Tiger reserve straddling the Assam-Bhutan border, contiguous with Bhutan's own Royal Manas National Park on the other side — together forming a significant transboundary conservation landscape.
                  </p>
                  <p>
                    Manas's story is worth knowing before you go: during a period of regional unrest in the 1980s-90s, the park suffered severe poaching and infrastructure damage, and was placed on UNESCO's "World Heritage in Danger" list. What followed was a genuine, well-documented conservation recovery — rhinos were reintroduced, patrolling and infrastructure rebuilt, and the park was eventually removed from that danger list. Visiting Manas today means visiting a real comeback story, not just a wildlife park.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐅</span> Manas at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🌍", label: "Status", value: "UNESCO World Heritage Site" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Guwahati (~140km)" },
                        { icon: "🐒", label: "Notable Species", value: "Golden langur" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹5,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Manas</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather with the most comfortable safari conditions." },
                      { season: "Mar – Apr", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Still good", text: "Warmer but still within the safari season, with wildlife often visible near remaining water sources." },
                      { season: "May – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — typically closed", text: "The park closes for monsoon and river flooding, similar to Kaziranga — verify current exact dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window and the peak of the safari season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Manas</h2>
                  <ul>
                    <li><strong>By Air:</strong> Guwahati is the nearest airport, about 140km away.</li>
                    <li><strong>By Train:</strong> Barpeta Road is the nearest railway station.</li>
                    <li><strong>By Road:</strong> Road access from Guwahati is the standard route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Manas is a genuinely good, quieter alternative to Kaziranga if you want a similar safari experience without Kaziranga's peak-season crowds.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/hero.jpg" alt="Manas National Park forest and grassland" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tigers:</strong> Present in the park as part of Project Tiger, though sightings aren't guaranteed on any single visit.</li>
                    <li><strong>One-horned rhinos:</strong> Reintroduced as part of the park's post-crisis conservation recovery.</li>
                    <li><strong>Golden langurs:</strong> A rare, striking primate species for which Manas is a particularly notable habitat.</li>
                    <li><strong>Pygmy hogs:</strong> One of the world's rarest and smallest wild pig species, with Manas a key conservation site.</li>
                    <li><strong>Wild water buffalo and elephants:</strong> Also present across the park's forest and grassland zones.</li>
                    <li><strong>Manas River:</strong> Runs through the park, adding scenic river-valley terrain to the ecosystem.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Manas</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,200/night", picks: ["Basic lodges near the park gate", "Simple guesthouses in Barpeta Road"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Forest-adjacent mid-range resorts", "Better-appointed eco-lodges"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of premium safari lodges — luxury options remain limited here"] },
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
                  <h2>What to Eat Near Manas</h2>
                  <ul>
                    <li><strong>Assamese thalis:</strong> Simple rice, dal, and vegetable meals available at most lodges.</li>
                    <li><strong>Khar and tenga:</strong> Two distinctive Assamese preparations — an alkaline dish and a light sour curry — worth seeking out at local eateries.</li>
                    <li><strong>Assam tea:</strong> A genuine constant across the region, given the state's tea-growing heritage.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Manas Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Guwahati", "Check in near the park gate", "Afternoon safari"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari (best golden-langur viewing odds)", "Late morning: rest/departure prep", "Travel back to Guwahati"] },
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
                          ["Accommodation/night", "₹1,200", "₹3,500"],
                          ["Food/day", "₹400", "₹900"],
                          ["Safari/gypsy hire", "₹1,800", "₹3,000"],
                          ["Daily total", "₹2,000", "₹5,000"],
                          ["2-Day trip total", "₹4,000", "₹10,000"],
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
                  <h2>Essential Travel Tips for Manas</h2>
                  <ul>
                    <li><strong>Book safaris in advance:</strong> Especially during peak winter months.</li>
                    <li><strong>Verify current monsoon closure dates:</strong> The park's exact reopening date can shift year to year.</li>
                    <li><strong>Watch for golden langurs specifically:</strong> A genuine Manas highlight not found at most other Indian reserves.</li>
                    <li><strong>Consider Manas over Kaziranga if you want fewer crowds:</strong> Both cross-reference well as a combined Assam wildlife trip.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safaris ahead of your visit", "Look out for golden langurs in the canopy", "Verify current park opening/closure dates", "Consider pairing with Kaziranga for a fuller Assam wildlife trip", "Bring good binoculars for the mixed terrain"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a guaranteed tiger sighting", "Show up without confirming safari availability", "Visit during the monsoon closure without checking dates", "Wear bright colors on safari", "Skip insect repellent given the river-valley humidity"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Manas National Park", "Tiger Reserve", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MANAS_GEAR} destination="Manas National Park" />
              <RelatedPostsGrid currentSlug="manas-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="manas-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
