// src/app/blog/kumarakom-travel-guide/page.tsx
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
  title: "Kumarakom Travel Guide: Vembanad Lake, Bird Sanctuary & Houseboats",
  description:
    "The complete Kumarakom travel guide. Vembanad Lake, the Kumarakom Bird Sanctuary, houseboat resorts, Pathiramanal Island, where to stay, best time to visit, and a full itinerary through Kerala's quieter backwater retreat.",
  keywords:
    "Kumarakom travel guide, Vembanad Lake, Kumarakom Bird Sanctuary, Kumarakom houseboat, best time to visit Kumarakom, how to reach Kumarakom, Pathiramanal Island, Kerala backwaters",
  openGraph: {
    title: "Kumarakom Travel Guide: Vembanad Lake, Bird Sanctuary & Houseboats",
    description: "A quieter, greener answer to Alleppey's backwaters, with a bird sanctuary on Kerala's largest lake — the complete guide to Kumarakom.",
    url: "https://club.kudozz.in/blog/kumarakom-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jammu-kashmir/dal.jpg", width: 1200, height: 630, alt: "Lake landscape representative of Kumarakom, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumarakom Travel Guide: Vembanad Lake, Bird Sanctuary & Houseboats",
    description: "A quieter, greener answer to Alleppey's backwaters, with a bird sanctuary on Kerala's largest lake.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kumarakom-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kumarakom Travel Guide: Vembanad Lake, Bird Sanctuary & Houseboats",
          description: "The complete Kumarakom travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kumarakom-travel-guide" },
          about: { "@type": "Place", name: "Kumarakom", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kumarakom Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Kumarakom?", a: "One to two days is enough — a morning at the bird sanctuary, an afternoon houseboat cruise or resort relaxation, and time for Pathiramanal Island if you want a quieter add-on." },
  { q: "What is the best time to visit Kumarakom?", a: "November to February is the dry season and also the peak period for migratory birds at the sanctuary, making it the best overall window." },
  { q: "How do I reach Kumarakom?", a: "The nearest airport is Kochi (COK), about 85km away. Kottayam railway station is much closer, roughly 15km, and is the more practical rail option." },
  { q: "Is Kumarakom better than Alleppey for backwaters?", a: "It depends on what you want. Kumarakom is quieter, greener, and skews toward upscale resorts with a strong birdwatching angle, while Alleppey has a livelier houseboat scene and more budget options. Many travelers combine both on a longer Kerala trip." },
  { q: "What is the budget for a trip to Kumarakom?", a: "Kumarakom leans toward resort stays, so budgets run a bit higher than budget Alleppey — expect roughly ₹4,000-8,000/night for a mid-range to upscale resort, plus food and activities." },
  { q: "Is the bird sanctuary worth visiting outside winter?", a: "It's most rewarding November to February when migratory birds are present, but resident species and the wetland scenery make it worthwhile at other times too, just with fewer species to spot." },
  { q: "Can I do a houseboat cruise from Kumarakom?", a: "Yes — houseboat cruises operate from Kumarakom much like Alleppey, typically from a calmer, more resort-oriented base." },
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
  { id: "introduction", title: "Why Kumarakom?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kumarakom", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KUMARAKOM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for birdwatching and backwater resort stays",
    emoji: "🦩",
    items: [
      { name: "Binoculars", description: "Essential for the Kumarakom Bird Sanctuary, especially during the winter migratory season.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+birdwatching"), tag: "Sanctuary essential", tagColor: "bg-amber-100 text-amber-700", why: "Many bird species stay well back from the boardwalks — binoculars are the difference between a blur and a real sighting." },
      { name: "Camera with Zoom Lens", description: "For capturing birdlife at the sanctuary and the lake scenery from a resort or houseboat.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("camera+zoom+lens+wildlife"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A zoom lens turns distant wetland birds into a usable photo." },
      { name: "Insect Repellent", description: "Wetland and lake-edge settings mean mosquitoes are a real presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Lake essential", tagColor: "bg-forest-100 text-forest-700", why: "Vembanad Lake's wetlands are prime mosquito territory in the evenings." },
      { name: "Light, Breathable Clothing", description: "Kerala's coastal humidity is high year-round — loose cotton clothing is far more comfortable on a houseboat or resort deck.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("breathable+cotton+travel+clothing"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Humidity around the lake can be intense, especially in the afternoon." },
    ],
  },
];

export default function KumarakomGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Lake landscape representative of Kumarakom, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kumarakom", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kumarakom", "Vembanad Lake", "Backwaters", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kumarakom Travel Guide: Vembanad Lake, Bird Sanctuary & Houseboats
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A quieter, greener answer to Alleppey's backwaters, with a bird sanctuary on Kerala's largest lake — everything you need to plan a trip to Kumarakom.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kumarakom, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Kumarakom?</h2>
                  <p>
                    <strong>Kumarakom</strong> sits on the shore of Vembanad Lake — Kerala's largest lake and part of the same backwater system as Alleppey, but with a distinctly quieter, greener, more resort-oriented character. Where Alleppey's houseboat scene can feel busy and commercial, Kumarakom leans toward upscale lakeside resorts and a genuine wildlife draw: the Kumarakom Bird Sanctuary.
                  </p>
                  <p>
                    It's a good pick for travelers who want the backwater experience without the crowds, or who want to pair birdwatching with a slower, more relaxed pace than a full houseboat itinerary.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🦩</span> Kumarakom at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🦜", label: "Key Site", value: "Kumarakom Bird Sanctuary" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kochi (~85km)" },
                        { icon: "🚆", label: "Nearest Rail", value: "Kottayam (~15km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,500 – ₹7,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kumarakom</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry season and peak migratory bird activity at the sanctuary, ideal for both comfort and birdwatching." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warm, quieter", text: "Warmer and more humid, with fewer birds and fewer crowds." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Lush green wetlands, but choppier water and less predictable weather for boat activities." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — the dry season overlaps directly with peak migratory bird season at the sanctuary.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kumarakom</h2>
                  <ul>
                    <li><strong>By Air:</strong> Cochin International Airport (COK), about 85km away.</li>
                    <li><strong>By Train:</strong> Kottayam railway station, roughly 15km, is the closer and more practical rail option.</li>
                    <li><strong>By Road:</strong> Well connected from Kochi and Kottayam; often combined with Alleppey (~30km away) on a longer backwater itinerary.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Kottayam railway station, not Kochi, is your best bet if arriving by train — it's a much shorter transfer into Kumarakom.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kumarakom</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Lake scenery around Kumarakom" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kumarakom Bird Sanctuary:</strong> A wetland sanctuary especially rewarding for migratory birds in winter, with boardwalks and boat-based birdwatching.</li>
                    <li><strong>Vembanad Lake:</strong> Kerala's largest lake, ideal for a slow houseboat cruise or a sunset boat ride.</li>
                    <li><strong>Pathiramanal Island:</strong> A small island reachable by boat, known for birdlife and a quiet nature walk away from the main resort strip.</li>
                    <li><strong>Bay Island Driftwood Museum:</strong> A small, quirky museum of driftwood sculptures worth a short stop.</li>
                    <li><strong>Houseboat cruises:</strong> Similar to Alleppey but from a calmer, more resort-oriented base.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kumarakom</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,500–₹3,000/night", picks: ["Simple guesthouses near the sanctuary", "Basic lake-adjacent homestays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹4,000–₹8,000/night", picks: ["Lakeside mid-range resorts", "Houseboat stays (1 night, meals included)"] },
                      { tier: "Luxury", icon: "✨", range: "₹12,000–₹25,000+/night", picks: ["Premium backwater resorts", "High-end lake-view villas"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Kumarakom skews toward resort stays — genuinely budget options are fewer here than in Alleppey.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Kumarakom</h2>
                  <ul>
                    <li><strong>Karimeen (pearl spot fish) curry:</strong> A Vembanad Lake specialty, widely available at resorts and local restaurants.</li>
                    <li><strong>Resort-style Kerala meals:</strong> Most stays serve set Kerala menus featuring appam, stew, and fresh lake fish.</li>
                    <li><strong>Toddy shops nearby:</strong> Local toddy (palm wine) shops in the wider Kuttanad region serve simple, hearty accompanying food.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kumarakom Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Bird Sanctuary & Lake", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Kumarakom Bird Sanctuary", "Afternoon: relax at resort or short lake cruise", "Evening: sunset on Vembanad Lake"] },
                      { day: "Day 2", title: "Pathiramanal & Departure", color: "bg-forest-600", activities: ["Morning: boat trip to Pathiramanal Island", "Late morning: Bay Island Driftwood Museum", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹1,800", "₹5,500", "₹18,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Sanctuary entry + boat trips", "₹300", "₹800", "₹1,500"],
                          ["Daily total", "₹2,600", "₹7,500", "₹22,000"],
                          ["2-Day trip total", "₹5,200", "₹15,000", "₹44,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Kumarakom generally runs pricier than budget Alleppey given its resort-heavy stay mix.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kumarakom</h2>
                  <ul>
                    <li><strong>Visit the bird sanctuary early morning:</strong> Bird activity and cooler temperatures both favor an early start.</li>
                    <li><strong>Book resorts ahead in peak season:</strong> December–February sees strong demand for lakeside properties.</li>
                    <li><strong>Consider Kumarakom as a calmer alternative to Alleppey:</strong> Especially if Alleppey's houseboat crowds aren't appealing.</li>
                    <li><strong>Carry insect repellent:</strong> Wetland evenings bring mosquitoes.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the bird sanctuary early morning", "Book lakeside resorts ahead in peak season", "Try karimeen curry", "Take a boat trip to Pathiramanal Island", "Carry binoculars for the sanctuary"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect budget Alleppey-level pricing here", "Skip insect repellent for evening lake time", "Visit the sanctuary at midday expecting peak bird activity", "Book last-minute in peak December–February", "Overlook Pathiramanal Island as a quiet add-on"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kumarakom", "Vembanad Lake", "Backwaters", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KUMARAKOM_GEAR} destination="Kumarakom" />
              <RelatedPostsGrid currentSlug="kumarakom-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kumarakom-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
