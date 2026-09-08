// src/app/blog/namdapha-travel-guide/page.tsx
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
  title: "Namdapha National Park Travel Guide: India's Most Biodiverse Park",
  description:
    "The complete Namdapha travel guide. Four big cat species, exceptional biodiversity, permits, best time to visit, where to stay, and honest expectations for one of India's most remote national parks.",
  keywords:
    "Namdapha National Park travel guide, Namdapha tiger reserve, Miao Arunachal Pradesh, four big cats India, best time to visit Namdapha, how to reach Namdapha, Namdapha permits, Arunachal Pradesh wildlife",
  openGraph: {
    title: "Namdapha National Park Travel Guide: India's Most Biodiverse Park",
    description: "The only park in the world confirmed to hold four big cat species — tiger, leopard, snow leopard, and clouded leopard — the complete guide to Namdapha.",
    url: "https://club.kudozz.in/blog/namdapha-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Dense forest and river landscape representative of Namdapha, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Namdapha National Park Travel Guide: India's Most Biodiverse Park", description: "Exceptional biodiversity in one of India's most remote national parks — the complete guide to Namdapha.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/namdapha-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Namdapha National Park Travel Guide: India's Most Biodiverse Park",
      description: "The complete Namdapha travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/namdapha-travel-guide" },
      about: { "@type": "Place", name: "Namdapha National Park", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Namdapha Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Will I actually see a tiger or snow leopard at Namdapha?", a: "Almost certainly not — while Namdapha is genuinely notable for potentially holding four big cat species due to its unusual altitude range, actual sightings of any big cat here are extremely rare, even for dedicated researchers. Visit for the extraordinary biodiversity and landscape, not a wildlife guarantee." },
  { q: "How many days do I need at Namdapha?", a: "A minimum of 2-3 days, given the remoteness alone — reaching Miao town and then the park core takes real time, and much of the park requires multi-day guided trekking to explore meaningfully." },
  { q: "Do I need a permit to visit Namdapha?", a: "Yes — an Inner Line Permit and park entry permits are both required. Requirements and the application process can change, so verify current rules before you go, ideally through your booking operator." },
  { q: "What is the best time to visit Namdapha?", a: "November to April, the dry season. The park is genuinely difficult or effectively closed during monsoon (roughly May–September) due to heavy rain and access issues." },
  { q: "How do I reach Namdapha?", a: "The nearest airport is Dibrugarh in Assam, still a significant onward journey. The park is accessed via Miao town in Arunachal Pradesh, with road being the only practical route in." },
  { q: "Is Namdapha suitable for casual tourists?", a: "It suits serious wildlife and nature enthusiasts more than casual sightseers — infrastructure is minimal, access is genuinely difficult, and this is one of India's most remote major national parks. Go in with realistic expectations." },
  { q: "What is the budget for a trip to Namdapha?", a: "Costs are driven largely by mandatory guide and permit fees plus the logistics of reaching Miao — budget roughly ₹2,500–₹5,000 a day including guide/permit costs, higher if arranging a full multi-day guided trek." },
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
  { id: "introduction", title: "Why Namdapha?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Namdapha", level: 2 },
  { id: "top-attractions", title: "Wildlife & Biodiversity", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NAMDAPHA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a remote, multi-day forest trek", emoji: "🐆",
  items: [
    { name: "Sturdy Trekking Boots", description: "Namdapha's terrain spans lowland tropical forest to high-altitude sections — proper boots matter across the elevation range.", price: "₹3,499", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("sturdy+trekking+boots+forest"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Terrain here is genuinely varied and often muddy or uneven across the park's altitude range." },
    { name: "Binoculars", description: "Given how rare cat sightings genuinely are, binoculars matter for the park's exceptional bird and general wildlife diversity instead.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+birdwatching"), tag: "Biodiversity essential", tagColor: "bg-amber-100 text-amber-700", why: "Namdapha's real draw is its exceptional plant and bird diversity, not guaranteed cat sightings." },
    { name: "Insect Repellent", description: "Dense, humid forest terrain makes this essential across most of the park.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+trekking"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Namdapha's lowland forest sections are genuinely humid and insect-heavy." },
    { name: "Rain Layer", description: "Weather can shift quickly across the park's varied terrain, even outside peak monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Namdapha's altitude range means genuinely unpredictable weather in different park sections." },
  ],
}];

export default function NamdaphaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Dense forest and river landscape representative of Namdapha, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Namdapha", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Namdapha National Park", "Biodiversity", "Adventure", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Namdapha National Park Travel Guide: India's Most Biodiverse Park
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The only park in the world confirmed to hold four big cat species — tiger, leopard, snow leopard, and clouded leopard — an honest guide to one of India's most remote parks.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Namdapha, Arunachal Pradesh" },
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
                  <h2>Why Namdapha?</h2>
                  <p>
                    <strong>Namdapha National Park</strong> holds a genuinely remarkable distinction: it's one of the only protected areas in the world documented to potentially hold four big cat species — tiger, leopard, snow leopard, and clouded leopard — a result of its unusual altitude range, spanning lowland tropical forest to high-altitude terrain within a single park.
                  </p>
                  <p>
                    We'll be upfront: actual sightings of any big cat here, let alone all four, are extremely rare, even for dedicated researchers who've spent years in the park. Namdapha is worth visiting for its extraordinary biodiversity and landscape rather than any expectation of a wildlife-viewing guarantee — treat that as this guide's central, honest premise.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐆</span> Namdapha at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🐆", label: "Known For", value: "Four big cat species (rare sightings)" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dibrugarh, Assam" },
                        { icon: "🌿", label: "Draw", value: "Exceptional biodiversity" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,500 – ₹5,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Namdapha</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Apr", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Dry season — the only realistic window", text: "Roads and trails are accessible, and this is the park's genuine visiting season." },
                      { season: "May – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — very difficult access", text: "Heavy rain makes much of the park genuinely difficult or effectively closed — not a realistic window to plan a visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Verify current-year access and permit status directly with an experienced local operator before committing to travel dates — conditions here change more than at India's better-established parks.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Namdapha</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dibrugarh in Assam is the nearest airport, still a significant onward journey by road.</li>
                    <li><strong>By Road:</strong> The park is accessed via Miao town in Arunachal Pradesh — road is the only practical route in.</li>
                    <li><strong>Permits:</strong> An Inner Line Permit and park entry permits are both required — verify current requirements, ideally through your booking operator.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book through an experienced local operator who can handle permit logistics — this is genuinely one of India's more complex parks to arrange independently.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Wildlife & Biodiversity</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest landscape within Namdapha National Park" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Four big cat species:</strong> Tiger, leopard, snow leopard, and clouded leopard are all documented in the park — though actual sightings of any are genuinely rare.</li>
                    <li><strong>Exceptional plant diversity:</strong> The park's altitude range supports an unusually wide variety of flora, a major draw for botanists and serious naturalists.</li>
                    <li><strong>Birdlife:</strong> A significant destination for serious birders given the park's habitat diversity.</li>
                    <li><strong>Local communities:</strong> Lisu, Chakma, and other communities live in and around the park's buffer areas, adding a genuine cultural dimension.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Namdapha</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses in Miao", "Forest rest houses (where available)"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed Miao lodges"] },
                      { tier: "Luxury", icon: "✨", range: "Very limited", picks: ["Options here are genuinely limited given the park's remoteness"] },
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
                  <h2>What to Eat Near Namdapha</h2>
                  <ul>
                    <li><strong>Lodge-served meals:</strong> Most stays serve simple, home-style Assamese/Arunachali food.</li>
                    <li><strong>Bring extra supplies:</strong> Given the remoteness, carrying some of your own snacks and staples is a sensible precaution.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Namdapha Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Travel to Miao", color: "bg-amber-700", activities: ["Long journey from Dibrugarh to Miao", "Check in, arrange permits and guide"] },
                      { day: "Day 2", title: "Park Exploration", color: "bg-forest-600", activities: ["Guided trekking/exploration within the park", "Focus on birdwatching and general biodiversity"] },
                      { day: "Day 3", title: "Further Exploration & Departure", color: "bg-orange-600", activities: ["Additional guided trekking if staying longer", "Begin return journey"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Guide + permit fees", "₹1,500", "₹2,500"],
                          ["Daily total", "₹2,900", "₹6,400"],
                          ["3-Day trip total", "₹8,700", "₹19,200"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Dibrugarh. Guide/permit costs vary by operator and current requirements — verify before booking.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Namdapha</h2>
                  <ul>
                    <li><strong>Set realistic expectations:</strong> This is not a guaranteed-sighting safari park — visit for the biodiversity and landscape.</li>
                    <li><strong>Book through an experienced operator:</strong> Permit logistics and guided access are genuinely complex here.</li>
                    <li><strong>Come prepared for basic infrastructure:</strong> This is one of India's most remote major national parks.</li>
                    <li><strong>Verify current permit requirements:</strong> Rules and processes can change — confirm before you travel.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book through an experienced local operator", "Verify current permit requirements before travel", "Set realistic expectations on wildlife sightings", "Come prepared for basic, remote infrastructure", "Focus on birdwatching and general biodiversity"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip expecting guaranteed big-cat sightings", "Attempt independent access without permits arranged", "Visit during monsoon expecting normal access", "Underestimate the journey time from Dibrugarh", "Skip booking through a knowledgeable local operator"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Namdapha National Park", "Biodiversity", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NAMDAPHA_GEAR} destination="Namdapha" />
              <RelatedPostsGrid currentSlug="namdapha-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="namdapha-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
