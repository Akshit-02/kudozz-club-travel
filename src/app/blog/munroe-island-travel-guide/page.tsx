// src/app/blog/munroe-island-travel-guide/page.tsx
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
  title: "Munroe Island Travel Guide: Backwater Canoeing & Village Life",
  description:
    "The complete Munroe Island travel guide. Canal canoe tours, coir-village life, Ashtamudi Lake and the Kallada River, where to stay, best time to visit, and how to reach this quiet Kerala backwater cluster.",
  keywords:
    "Munroe Island travel guide, Munroethuruthu, Ashtamudi Lake, Kollam backwaters, canoe tour Munroe Island, best time to visit Munroe Island, how to reach Munroe Island, Kerala backwaters off-beat",
  openGraph: {
    title: "Munroe Island Travel Guide: Backwater Canoeing & Village Life",
    description: "A cluster of tiny islands where the Ashtamudi Lake meets the Kallada River, explored by narrow canoe through coir-village canals — the complete guide to Munroe Island.",
    url: "https://club.kudozz.in/blog/munroe-island-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/andaman/havelock.jpg", width: 1200, height: 630, alt: "Quiet backwater canal representative of Munroe Island, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munroe Island Travel Guide: Backwater Canoeing & Village Life",
    description: "A quiet cluster of islands explored by narrow canoe through coir-village canals — the complete guide to Munroe Island.",
    images: ["/images/destinations/andaman/havelock.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/munroe-island-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Munroe Island Travel Guide: Backwater Canoeing & Village Life",
          description: "The complete Munroe Island travel guide.",
          image: "https://club.kudozz.in/images/destinations/andaman/havelock.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/munroe-island-travel-guide" },
          about: { "@type": "Place", name: "Munroe Island", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Munroe Island Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How is Munroe Island different from Alleppey?", a: "Munroe Island is explored by narrow country canoe through tight village canals rather than a large houseboat, offering a quieter, more intimate look at actual backwater village life — coir-making, small homes, coconut groves — rather than Alleppey's bigger, more commercial houseboat scene." },
  { q: "How many days do I need at Munroe Island?", a: "A half-day or full-day canoe tour covers the essentials. An overnight homestay is a good option if you want a slower pace and an early-morning canoe ride." },
  { q: "How do I reach Munroe Island?", a: "The nearest airport is Thiruvananthapuram (TRV), about 75km away. Kollam Junction railway station is only about 20km away and is well connected on the main Kerala coastal line." },
  { q: "What is the best time to visit Munroe Island?", a: "November to February is driest with the calmest water for canoeing. The monsoon (June–September) brings lush greenery but choppier canals." },
  { q: "Is Munroe Island good for photography?", a: "Yes — the narrow canals, coir-making demonstrations, and everyday village life make it one of Kerala's most photogenic and least-touristy backwater spots." },
  { q: "What is the budget for a trip to Munroe Island?", a: "A half-day canoe tour typically costs a fraction of a full houseboat package — expect roughly ₹800-1,500 per person for a guided canoe tour, more for an overnight homestay." },
  { q: "Can I combine Munroe Island with Alleppey or Kollam?", a: "Yes — it's a short drive from Kollam town and makes a good half-day or full-day add-on to a broader Kerala backwaters trip." },
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
  { id: "introduction", title: "Why Munroe Island?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Munroe Island", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MUNROE_ISLAND_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for canoe tours and village walks",
    emoji: "🛶",
    items: [
      { name: "Insect Repellent", description: "Narrow canal-side canoeing brings a steady mosquito presence, especially in the early morning and evening.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Canoe essential", tagColor: "bg-forest-100 text-forest-700", why: "The canal-village setting is prime mosquito habitat." },
      { name: "Sun Hat", description: "Little shade on the open canoe stretches — a hat makes a real difference on a longer tour.", price: "₹399", rating: 4.4, reviews: "4.5k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Day-tour essential", tagColor: "bg-amber-100 text-amber-700", why: "Canoe tours run for hours with direct sun exposure on the water." },
      { name: "Waterproof Phone Pouch", description: "Narrow canoes carry a real risk of a dropped phone — worth protecting for photos of the canal-village scenery.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Canoe essential", tagColor: "bg-sky-100 text-sky-700", why: "Munroe Island's biggest draw is photogenic — protecting your phone matters." },
      { name: "Comfortable Sandals", description: "For village walks and easy on-and-off during canoe embarkation.", price: "₹599", rating: 4.4, reviews: "4.0k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "Village-walk essential", tagColor: "bg-purple-100 text-purple-700", why: "Getting in and out of a canoe repeatedly is easier with simple, secure footwear." },
    ],
  },
];

export default function MunroeIslandGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/andaman/havelock.jpg" alt="Quiet backwater canal representative of Munroe Island, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Munroe Island", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Munroe Island", "Backwaters", "Off-beat", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Munroe Island Travel Guide: Backwater Canoeing & Village Life
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A cluster of tiny islands where the Ashtamudi Lake meets the Kallada River, explored by narrow canoe through coir-village canals.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Munroe Island, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Munroe Island?</h2>
                  <p>
                    <strong>Munroe Island</strong>, also called Munroethuruthu, is a cluster of eight small islands formed where Ashtamudi Lake meets the Kallada River, named after Colonel John Munro, a British Resident credited with reclaiming the land in the 19th century. Unlike Alleppey's big houseboat cruises, Munroe Island is explored by narrow country canoe, gliding through tight canals lined with coir-making villages, coconut groves, and small homes.
                  </p>
                  <p>
                    It's a genuinely quieter, more intimate way to see backwater village life — traditional coir (coconut fibre) rope-making happens right along the canals, not as a staged tourist show but as ongoing local work.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛶</span> Munroe Island at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🛶", label: "Key Experience", value: "Narrow canoe canal tours" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "🚆", label: "Nearest Rail", value: "Kollam Junction (~20km)" },
                        { icon: "🪢", label: "Known For", value: "Coir-making village life" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Munroe Island</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry season with the calmest water, ideal for canoe tours and photography." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warmer", text: "Still workable but hotter and more humid for canal touring." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but choppier", text: "Vivid greenery, but canals are less calm and canoeing conditions less predictable." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — calm water and comfortable weather for a leisurely canoe tour.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Munroe Island</h2>
                  <ul>
                    <li><strong>By Air:</strong> Thiruvananthapuram (TRV) is the nearest airport, about 75km away.</li>
                    <li><strong>By Train:</strong> Kollam Junction, about 20km away, is well connected on the main Kerala coastal line — one of the more easily rail-accessible backwater destinations.</li>
                    <li><strong>By Road:</strong> A short, straightforward drive from Kollam town.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book a local canoe tour operator or homestay directly for the most authentic experience — this isn't a big commercial circuit with many aggregators.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Munroe Island</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/andaman/havelock.jpg" alt="Narrow canal and village scenery around Munroe Island" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Narrow canoe canal tours:</strong> The core Munroe Island experience, gliding through tight village canals in a country canoe.</li>
                    <li><strong>Coir-making demonstrations:</strong> Genuine, ongoing local cottage industry visible right from the water.</li>
                    <li><strong>Village walks:</strong> A closer look at everyday backwater life away from the bigger tourist circuits.</li>
                    <li><strong>Birdwatching:</strong> Quieter channels here see less boat traffic, making for good birdlife spotting.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Munroe Island</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { tier: "Budget/Day Visit", icon: "🚣", range: "₹800–₹1,500 (canoe tour)", picks: ["Standard local canoe tour operators", "Day-trip packages from Kollam"] },
                      { tier: "Overnight Homestay", icon: "🏡", range: "₹1,500–₹3,000/night", picks: ["Local homestays for a slower, immersive pace"] },
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
                  <h2>What to Eat at Munroe Island</h2>
                  <ul>
                    <li><strong>Homestay-cooked meals:</strong> Simple, home-style Kerala food is the norm for overnight stays.</li>
                    <li><strong>Kollam town options:</strong> A wider range of eateries for anyone basing themselves in Kollam.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Munroe Island Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Canoe Tour", color: "bg-amber-700", activities: ["Travel from Kollam", "Board a narrow canoe for the canal tour", "See coir-making demonstrations along the way"] },
                      { day: "Afternoon", title: "Village Walk & Departure", color: "bg-forest-600", activities: ["Short village walk", "Lunch (homestay or Kollam)", "Return travel"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Approx. Cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Canoe tour (half-day, per person)", "₹800 – ₹1,500"],
                          ["Homestay (overnight)", "₹1,500 – ₹3,000"],
                          ["Meals (per day)", "₹300 – ₹700"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* A low-cost, small-scale alternative to a full Alleppey houseboat package. Excludes transport to Kollam.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Munroe Island</h2>
                  <ul>
                    <li><strong>Book a local operator or homestay directly:</strong> This is a small-scale destination without a large aggregator market.</li>
                    <li><strong>Go early morning:</strong> Calmest water and the best light for photography.</li>
                    <li><strong>Carry insect repellent:</strong> Canal-side canoeing brings a steady mosquito presence.</li>
                    <li><strong>Respect the village setting:</strong> This is lived-in local life, not a staged tourist attraction.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a local canoe operator or homestay directly", "Go early morning for calm water and best light", "Carry insect repellent", "Ask before photographing villagers at work", "Consider an overnight homestay for a slower pace"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a big commercial houseboat-style experience", "Skip insect repellent", "Treat the villages as a staged photo backdrop", "Arrive without a confirmed operator or guide", "Expect wide dining options outside Kollam"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Munroe Island", "Backwaters", "Off-beat", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MUNROE_ISLAND_GEAR} destination="Munroe Island" />
              <RelatedPostsGrid currentSlug="munroe-island-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="munroe-island-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
