// src/app/blog/alibaug-travel-guide/page.tsx
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
  title: "Alibaug Travel Guide: Beaches, Forts & Weekend Getaway",
  description:
    "The complete Alibaug travel guide. Kolaba Fort, Alibaug Beach, Murud-Janjira, the Mandwa ferry from Mumbai, where to stay, what to eat, and a 2-day weekend itinerary.",
  keywords:
    "Alibaug travel guide, Kolaba Fort, Alibaug Beach, Murud Janjira Fort, Mandwa ferry Mumbai, Alibaug itinerary, best time to visit Alibaug, how to reach Alibaug from Mumbai, Alibaug weekend trip, Kashid Beach, Nagaon Beach, Gateway of India ferry",
  openGraph: {
    title: "Alibaug Travel Guide: Beaches, Forts & Weekend Getaway",
    description:
      "A ferry ride from Mumbai's Gateway of India lands you on black-sand beaches and a 16th-century sea fort still standing in the tide — the complete guide to Alibaug.",
    url: "https://club.kudozz.in/blog/alibaug-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/beach.jpg", width: 1200, height: 630, alt: "Coastal beach scene representing Alibaug, Maharashtra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alibaug Travel Guide: Beaches, Forts & Weekend Getaway",
    description: "Kolaba Fort, Alibaug Beach, and the Mandwa ferry from Mumbai — the complete guide.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/alibaug-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Alibaug Travel Guide: Beaches, Forts & Weekend Getaway",
          description: "The complete Alibaug travel guide.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/alibaug-travel-guide" },
          about: { "@type": "Place", name: "Alibaug", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Alibaug Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Alibaug?", a: "Two days over a weekend is the typical trip — enough for Kolaba Fort, the main beaches, and a day trip to Murud-Janjira if you have extra time." },
  { q: "What is the best time to visit Alibaug?", a: "November to February offers the best beach weather. The monsoon (June–September) is scenic but the sea gets rough and many water activities pause; March–May is hot but manageable." },
  { q: "How do I reach Alibaug from Mumbai?", a: "The fastest way is the RoRo ferry or speed boat from the Gateway of India to Mandwa (about an hour), followed by a short drive to Alibaug. By road via the Mumbai-Goa highway/Sion-Panvel route, it's roughly 95 km but can take 3 hours or more due to traffic." },
  { q: "Can I walk to Kolaba Fort?", a: "Yes, but only at low tide — the fort sits just offshore and becomes accessible on foot across the exposed sea bed for a window of a few hours around low tide. Check tide timings before you go." },
  { q: "Is Murud-Janjira worth the day trip from Alibaug?", a: "Yes — it's one of the most impressive and historically significant sea forts on India's west coast, built on an island and famously never conquered. It's about 50 km from Alibaug and reached by a short boat ride from Rajapuri jetty." },
  { q: "What is the budget for a trip to Alibaug?", a: "A budget traveller can manage on roughly ₹1,800 a day, a mid-range trip runs closer to ₹4,500 a day, and a beach resort stay can run ₹10,000+ a day, plus the ferry or road transport cost from Mumbai." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Alibaug?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Alibaug", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ALIBAUG_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the ferry crossing, beaches, and the low-tide fort walk",
    emoji: "⛴️",
    items: [
      { name: "Waterproof Phone Pouch", description: "Useful on the Mandwa ferry crossing and at the beaches — sea spray and sudden waves are common on the RoRo and speed boat routes.", price: "₹299", rating: 4.3, reviews: "8.9k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch"), tag: "Ferry essential", tagColor: "bg-sky-100 text-sky-700", why: "Sea spray on the ferry crossing and waves at the beaches both put phones at risk." },
      { name: "Water Shoes / Flip-Flops", description: "The walk out to Kolaba Fort at low tide crosses wet sand and exposed rock — proper footwear helps more than bare feet or regular sandals.", price: "₹499", rating: 4.3, reviews: "3.6k", image: "🩴", affiliateUrl: amazonSearchUrl("water+shoes+beach"), tag: "Fort-walk essential", tagColor: "bg-forest-100 text-forest-700", why: "The Kolaba Fort sea-bed crossing has patches of rock and shell debris that are uncomfortable barefoot." },
      { name: "Reef-Safe Sunscreen", description: "The open beach stretches at Alibaug and Kashid offer little shade — reef-safe formulas protect skin without harming coastal ecosystems.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Alibaug's beaches offer little natural shade for a full day out." },
      { name: "Quick-Dry Beach Towel", description: "Compact and fast-drying — useful across the beach hopping, ferry ride, and day trip to Murud-Janjira.", price: "₹499", rating: 4.4, reviews: "4.0k", image: "🏖️", affiliateUrl: amazonSearchUrl("quick+dry+beach+towel"), tag: "Beach essential", tagColor: "bg-purple-100 text-purple-700", why: "A regular towel stays damp for the rest of a multi-stop beach day — a quick-dry one doesn't." },
    ],
  },
];

export default function AlibaugGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/beach.jpg" alt="Coastal beach scene representing Alibaug, Maharashtra" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" }, { label: "Alibaug", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Alibaug", "Maharashtra", "Beaches", "Konkan Coast", "Weekend Trip"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Alibaug Travel Guide: Beaches, Forts & Weekend Getaway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A ferry ride from Mumbai's Gateway of India lands you on black-sand beaches and a 16th-century sea fort still standing in the tide — the complete guide to Alibaug.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Alibaug, Maharashtra" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" }].map((m) => (
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
                  <h2>Why Alibaug?</h2>
                  <p>
                    <strong>Alibaug</strong> is the Konkan coast's answer to a
                    fast weekend escape — a short ferry ride across Mumbai
                    harbour lands you on black-sand beaches, a centuries-old
                    sea fort, and a much slower pace than the city you just
                    left. It's become Mumbai's go-to weekend destination,
                    dotted with private villas and beach resorts that cater
                    almost entirely to city dwellers looking for a quick
                    break.
                  </p>
                  <p>
                    The town's centrepiece is Kolaba Fort, a roughly
                    300-year-old sea fort built by the Maratha admiral
                    Kanhoji Angre, reachable on foot only when the tide goes
                    out. Beyond the beaches, the region's real showstopper is
                    Murud-Janjira, an island fort about 50 km south that was
                    famously never successfully conquered by any of the
                    colonial powers that tried.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏖️</span> Alibaug at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Maharashtra, India" }, { icon: "🏰", label: "Key Site", value: "Kolaba Fort" }, { icon: "🌡️", label: "Best Time", value: "Nov – Feb" }, { icon: "⛴️", label: "From Mumbai", value: "Mandwa ferry (~1 hr)" }, { icon: "🏝️", label: "Day Trip", value: "Murud-Janjira Fort" }, { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹10,000" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Alibaug</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Pleasant, dry beach weather and calm seas make this the most comfortable window for swimming and boat trips." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Hot but doable", text: "Warmer days, still manageable for beach time, especially mornings and evenings." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — scenic but rough seas", text: "The coast turns lush and dramatic, but rough seas suspend most water activities and boat access to Murud-Janjira." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December and January, for calm seas and comfortable beach weather.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Alibaug</h2>
                  <ul>
                    <li><strong>By Ferry (fastest from Mumbai):</strong> RoRo ferries and speed boats run from the Gateway of India to Mandwa Jetty in about an hour, followed by a short drive or shared taxi to Alibaug town.</li>
                    <li><strong>By Road:</strong> Via the Mumbai-Goa highway and Sion-Panvel route, Alibaug is roughly 95 km from Mumbai, but traffic can stretch the drive to 3 hours or more.</li>
                    <li><strong>By Air:</strong> Mumbai (BOM) is the nearest airport, followed by the ferry or road route into Alibaug.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book ferry tickets in advance for weekend trips — the Gateway of India to Mandwa route fills up quickly on Saturdays and Sundays.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions in Alibaug</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/beach.jpg" alt="Coastal beach and fishing boats near Alibaug" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kolaba Fort:</strong> A roughly 300-year-old sea fort built by Maratha admiral Kanhoji Angre, walkable across the exposed sea bed only at low tide.</li>
                    <li><strong>Alibaug Beach:</strong> The main town beach, popular for evening walks, horse rides, and beachside food stalls rather than swimming.</li>
                    <li><strong>Nagaon & Akshi Beaches:</strong> Quieter, cleaner alternatives to the main town beach, good for a more relaxed swim.</li>
                    <li><strong>Kashid Beach:</strong> A white-sand beach roughly 40 km south, often considered the region's most scenic stretch of coast.</li>
                    <li><strong>Murud-Janjira Fort:</strong> An imposing island sea fort about 50 km away, famously never successfully conquered — reached by a short boat ride from Rajapuri jetty.</li>
                    <li><strong>Varsoli Beach:</strong> A quieter fishing-village beach near town, good for an early morning walk away from the crowds.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,500/night", picks: ["Guesthouses in town", "Homestays near Nagaon"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,000–₹7,000/night", picks: ["Beach resorts, Nagaon/Akshi", "Boutique cottages near Kihim"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹25,000+/night", picks: ["Private beachfront villas", "Premium resorts, Alibaug-Awas belt"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Bombil Fry (Bombay Duck):</strong> A Konkan coast classic — crisp-fried local fish, widely available at beachside restaurants.</li>
                    <li><strong>Surmai (Kingfish) Curry:</strong> A coconut-based Malvani-style fish curry, common on Alibaug's seafood menus.</li>
                    <li><strong>Solkadhi:</strong> A tangy kokum-and-coconut drink served as a digestive alongside seafood meals.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Alibaug Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Ferry In & Kolaba Fort", color: "bg-amber-700", activities: ["Morning ferry from Gateway of India to Mandwa", "Check in, relax at your beach resort", "Afternoon: Kolaba Fort (check tide timing)", "Evening: sunset at Alibaug Beach"] },
                      { day: "Day 2", title: "Murud-Janjira Day Trip", color: "bg-forest-600", activities: ["Morning: drive to Rajapuri jetty", "Boat ride and tour of Murud-Janjira Fort", "Afternoon: Kashid Beach on the way back", "Evening: ferry/road back to Mumbai"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>)}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>)}</tr></thead>
                      <tbody>
                        {[["Ferry (round trip)", "₹600", "₹1,200", "₹2,500"], ["Accommodation/night", "₹1,200", "₹4,000", "₹15,000"], ["Food/day", "₹500", "₹1,000", "₹2,500"], ["Local transport per day", "₹300", "₹800", "₹2,000"], ["Daily total (excl. ferry)", "₹2,000", "₹5,800", "₹19,500"], ["2-Day trip total", "₹4,600", "₹12,800", "₹41,500"]].map(([exp, b, m, l], i) => (
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Weekend ferry and resort prices run noticeably higher than weekdays.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Book the ferry ahead for weekends:</strong> The Gateway-to-Mandwa route sells out fast on Saturday mornings.</li>
                    <li><strong>Check tide timings for Kolaba Fort:</strong> The walk out is only possible during a low-tide window — plan around it.</li>
                    <li><strong>Rent a scooter or bike locally:</strong> Alibaug's beaches and sights are spread out enough that your own transport helps.</li>
                    <li><strong>Avoid peak monsoon for boat trips:</strong> Rough seas often suspend the Murud-Janjira boat crossing.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Time your Kolaba Fort visit around low tide", "Take the ferry rather than the road when possible", "Add Murud-Janjira if you have a second day", "Rent a scooter to cover the spread-out beaches", "Try the local Malvani seafood"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt the Kolaba Fort walk at high tide", "Book a same-day weekend ferry ticket and expect availability", "Plan a boat trip to Murud-Janjira in rough monsoon seas", "Expect Goa-level nightlife infrastructure here", "Skip checking road traffic before an Mumbai-Goa highway drive"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Alibaug", "Maharashtra", "Beaches", "Konkan Coast", "Murud-Janjira", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={ALIBAUG_GEAR} destination="Alibaug" />
              <RelatedPostsGrid currentSlug="alibaug-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="alibaug-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
