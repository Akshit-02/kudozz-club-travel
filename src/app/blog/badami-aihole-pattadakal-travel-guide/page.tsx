// src/app/blog/badami-aihole-pattadakal-travel-guide/page.tsx
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
  title: "Badami, Aihole & Pattadakal Travel Guide: Chalukya Cave Temples",
  description:
    "The complete Badami-Aihole-Pattadakal travel guide. Rock-cut cave temples, the cradle of Indian temple architecture, the UNESCO-listed Virupaksha Temple, where to stay, best time to visit, and a full 2-day itinerary.",
  keywords:
    "Badami travel guide, Aihole, Pattadakal, Chalukya temples, Badami cave temples, Virupaksha Temple Pattadakal, UNESCO Karnataka, best time to visit Badami, how to reach Badami",
  openGraph: {
    title: "Badami, Aihole & Pattadakal Travel Guide: Chalukya Cave Temples",
    description: "Rock-cut cave temples carved into a red sandstone cliff, and a UNESCO-listed cluster of Chalukyan temple experiments that shaped Indian architecture — the complete guide to the Badami-Aihole-Pattadakal circuit.",
    url: "https://club.kudozz.in/blog/badami-aihole-pattadakal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Rock-cut heritage architecture representative of Badami, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Badami, Aihole & Pattadakal Travel Guide: Chalukya Cave Temples",
    description: "The Chalukyan heart of early Indian temple architecture — the complete guide to Badami, Aihole & Pattadakal.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/badami-aihole-pattadakal-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Badami, Aihole & Pattadakal Travel Guide: Chalukya Cave Temples",
          description: "The complete Badami-Aihole-Pattadakal travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/badami-aihole-pattadakal-travel-guide" },
          about: { "@type": "Place", name: "Badami", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Badami, Aihole & Pattadakal Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need for the Badami-Aihole-Pattadakal circuit?", a: "Two days works well — one full day for Badami's cave temples, fort, and lake, and a second day combining Aihole and Pattadakal, which sit close enough together to cover comfortably." },
  { q: "What is the best time to visit?", a: "October to February is most comfortable for extensive outdoor walking between temples. March to June gets very hot for a day spent largely outdoors." },
  { q: "How do I get between the three sites?", a: "Aihole and Pattadakal are roughly 35-45km from Badami and from each other. Hiring a car and driver for the full circuit is by far the most practical approach — public transport between the three is limited and slow." },
  { q: "How do I reach Badami?", a: "The nearest airports are Hubli (~110km) and Belagavi. Badami has its own railway station well connected to Bengaluru and Hubli, and it's the natural base town for the whole circuit." },
  { q: "Why is Pattadakal a UNESCO World Heritage Site but Badami and Aihole aren't (as a whole)?", a: "Pattadakal's Virupaksha Temple and its cluster of temples are recognized specifically for showing a deliberate blend of North Indian nagara and South Indian dravida architectural styles side by side — a unique demonstration that earned it UNESCO status. Badami and Aihole remain nationally protected but significant heritage sites in their own right." },
  { q: "Do I need a guide?", a: "A guide isn't mandatory but is genuinely useful — the architectural details and historical context across all three sites are dense, and a knowledgeable guide makes the visit far more rewarding." },
  { q: "What is the budget for this trip?", a: "A budget traveler can manage on roughly ₹1,800 a day including a shared car for the circuit, a mid-range trip closer to ₹4,200 a day with a private car and guide." },
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
  { id: "introduction", title: "Why This Circuit?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Badami", level: 2 },
  { id: "top-attractions", title: "Badami, Aihole & Pattadakal", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BADAMI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a full day of temple-hopping and cave steps",
    emoji: "🛕",
    items: [
      { name: "Comfortable Walking/Climbing Shoes", description: "Extensive stairs at the Badami cave temples and fort, plus uneven ground across Aihole and Pattadakal's temple clusters.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "This circuit involves more stairs and uneven stone ground than most single-site heritage visits." },
      { name: "Sun Hat & Sunglasses", description: "All three sites are largely open-air with minimal shade between temple clusters.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Sun essential", tagColor: "bg-orange-100 text-orange-700", why: "A full day moving between exposed temple sites means real cumulative sun exposure." },
      { name: "Reusable Water Bottle (1L)", description: "Facilities are limited at Aihole and Pattadakal in particular — carry enough water for a full circuit day.", price: "₹449", rating: 4.5, reviews: "7.9k", image: "💧", affiliateUrl: amazonSearchUrl("1l+reusable+water+bottle+steel"), tag: "Non-negotiable", tagColor: "bg-forest-100 text-forest-700", why: "Between sites, shops and water points thin out fast." },
      { name: "Small Torch / Flashlight", description: "Useful for the darker interiors of the Badami cave temples.", price: "₹399", rating: 4.3, reviews: "3.1k", image: "🔦", affiliateUrl: amazonSearchUrl("small+led+flashlight+travel"), tag: "Cave essential", tagColor: "bg-purple-100 text-purple-700", why: "Cave interiors are naturally dim, and a light helps pick out carved detail." },
    ],
  },
];

export default function BadamiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Rock-cut heritage architecture representative of Badami, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Badami · Aihole · Pattadakal", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Badami", "Aihole", "Pattadakal", "UNESCO", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Badami, Aihole & Pattadakal Travel Guide: Chalukya Cave Temples
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Rock-cut cave temples carved into a red sandstone cliff, and a UNESCO-listed cluster of Chalukyan temple experiments that shaped Indian architecture.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Badami, Karnataka" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,300 words" },
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
                  <h2>Why This Circuit?</h2>
                  <p>
                    <strong>Badami, Aihole, and Pattadakal</strong> together form one of India's most historically significant early temple-architecture clusters, built during the 6th to 8th centuries CE under the <strong>Chalukya dynasty</strong>. If Hampi shows the height of South Indian temple-city ambition centuries later, this trio shows where the architectural language that made it possible was first worked out.
                  </p>
                  <p>
                    <strong>Badami</strong> has rock-cut cave temples carved directly into a dramatic red sandstone cliff. <strong>Aihole</strong>, often called the "cradle of Indian temple architecture," has well over a hundred temples showing the Chalukyas' early experiments across wildly different styles. <strong>Pattadakal</strong>, a UNESCO World Heritage Site and the Chalukyas' coronation site, shows North Indian and South Indian temple styles built deliberately side by side.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Circuit at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🏛️", label: "Era", value: "Chalukya dynasty, 6th–8th c. CE" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Hubli (~110km)" },
                        { icon: "🌍", label: "UNESCO Site", value: "Pattadakal" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for extensive outdoor walking between temples across all three sites." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Very hot", text: "This region gets genuinely hot — a full day outdoors is far more taxing." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Green surroundings but rain can disrupt a full day of moving between three separate sites." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — comfortable temperatures for a genuinely demanding two days of outdoor walking.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Badami</h2>
                  <ul>
                    <li><strong>By Air:</strong> Hubli (~110km) and Belagavi are the nearest airports, both requiring an onward drive.</li>
                    <li><strong>By Train:</strong> Badami has its own railway station, well connected to Bengaluru and Hubli — the natural base for the circuit.</li>
                    <li><strong>By Road:</strong> Once in Badami, Aihole and Pattadakal (roughly 35-45km away) are best reached by hired car.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a car and driver for the full circuit in one go — public transport between the three sites is limited and would eat up most of your available time.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Badami, Aihole & Pattadakal</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Rock-cut cave temple architecture representative of the region" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Badami Cave Temples:</strong> Four rock-cut cave temples carved into a red sandstone cliff overlooking Agastya Lake, with Hindu and Jain dedications and finely detailed relief carvings.</li>
                    <li><strong>Badami Fort:</strong> Hilltop fortifications above the caves offering panoramic views.</li>
                    <li><strong>Bhutanatha Temple group:</strong> Temples at Badami that reflect directly in Agastya Lake — a signature photo spot.</li>
                    <li><strong>Aihole's Durga Temple:</strong> The centrepiece of Aihole's cluster of well over a hundred temples, notable for its unusual curved apsidal shape.</li>
                    <li><strong>Pattadakal's Virupaksha Temple:</strong> The UNESCO site's centrepiece, built to commemorate a Chalukya military victory and blending North Indian nagara and South Indian dravida styles.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses in Badami town", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹4,500/night", picks: ["Heritage-adjacent mid-range hotels", "Tourism board resorts in Badami"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of better-appointed properties — luxury choices here are genuinely limited"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Base yourself in Badami — it has the most stay options and sits roughly central to Aihole and Pattadakal.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>North Karnataka thalis:</strong> This region's food leans toward jowar/bajra rotis and distinct North Karnataka-style curries, different from the rice-heavy cuisine of coastal Karnataka.</li>
                    <li><strong>Local eateries in Badami town:</strong> Simple, reliable options near the main market and railway station area.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Badami", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Badami cave temples", "Afternoon: Badami Fort, Bhutanatha Temple group and lake", "Evening: sunset over Agastya Lake"] },
                      { day: "Day 2", title: "Aihole & Pattadakal", color: "bg-forest-600", activities: ["Morning: drive to Aihole, explore the Durga Temple and temple cluster", "Afternoon: continue to Pattadakal, Virupaksha Temple", "Evening: return to Badami, departure"] },
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
                          ["Food/day", "₹350", "₹800"],
                          ["Car hire for the circuit (day)", "₹1,800", "₹3,000"],
                          ["Entry fees / guide", "₹200", "₹600"],
                          ["Daily total", "₹1,800", "₹4,200"],
                          ["2-Day trip total", "₹3,600", "₹8,400"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Badami. Car hire is the biggest line item since public transport between the three sites is impractical.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Hire a car for the full circuit:</strong> By far the most practical way to see all three sites without wasting a day.</li>
                    <li><strong>Hire a guide at each site:</strong> The architectural and historical context here is dense and genuinely enhances the visit.</li>
                    <li><strong>Carry water and sun protection:</strong> Long stretches of outdoor walking with limited shade.</li>
                    <li><strong>Start early:</strong> Two full sites (Aihole + Pattadakal) in one day needs an early start to avoid rushing.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a car and driver for the full circuit", "Bring a knowledgeable guide for context", "Start early on the Aihole + Pattadakal day", "Carry ample water and sun protection", "Base yourself in Badami town"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rely on public transport between the three sites", "Attempt this circuit in peak summer heat without precautions", "Rush Aihole and Pattadakal into a half-day", "Skip hiring a guide — the architectural context matters here", "Underestimate the walking involved across all three sites"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Badami", "Aihole", "Pattadakal", "UNESCO", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BADAMI_GEAR} destination="Badami" />
              <RelatedPostsGrid currentSlug="badami-aihole-pattadakal-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="badami-aihole-pattadakal-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
