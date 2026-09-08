// src/app/blog/charaideo-travel-guide/page.tsx
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
  title: "Charaideo Travel Guide: The Pyramids of Assam",
  description:
    "The complete Charaideo travel guide. The Ahom Maidams, UNESCO World Heritage inscription, the first Ahom capital, how to combine with Sivasagar, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Charaideo travel guide, Ahom Maidams, Pyramids of Assam, Charaideo UNESCO, Sukaphaa capital, best time to visit Charaideo, how to reach Charaideo, Ahom dynasty burial mounds",
  openGraph: {
    title: "Charaideo Travel Guide: The Pyramids of Assam",
    description: "Earthen burial mounds holding the remains of Ahom kings, recently added to UNESCO's World Heritage list as the 'Pyramids of Assam' — the complete guide to Charaideo.",
    url: "https://club.kudozz.in/blog/charaideo-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/virupaksha.jpg", width: 1200, height: 630, alt: "Ancient stone and earthen heritage site representative of Charaideo, Assam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charaideo Travel Guide: The Pyramids of Assam",
    description: "Earthen burial mounds of Ahom kings, newly inscribed as a UNESCO World Heritage Site — the complete guide to Charaideo.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/charaideo-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Charaideo Travel Guide: The Pyramids of Assam",
          description: "The complete Charaideo travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/charaideo-travel-guide" },
          about: { "@type": "Place", name: "Charaideo", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Charaideo Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "What are the Charaideo Maidams?", a: "Earthen burial mounds built by the Ahom dynasty to house the remains of their kings and royalty, following a distinctive Tai-Ahom royal burial tradition that predates the dynasty's arrival in Assam. They're popularly nicknamed the 'Pyramids of Assam' for their monumental funerary purpose, though the comparison is about scale of significance rather than architectural style." },
  { q: "Is Charaideo a UNESCO World Heritage Site?", a: "Yes — the Moidams were inscribed on the UNESCO World Heritage List in 2024, making it one of very few UNESCO sites in Northeast India. As with any recently designated site, it's worth confirming current visitor facilities and any access changes before you go." },
  { q: "Why was Charaideo important to the Ahom dynasty?", a: "It was the first capital established by Chaolung Sukaphaa, the founder of the Ahom dynasty, after his migration into the Brahmaputra valley in the 13th century. The Ahoms later moved their capital to Sivasagar, but continued using Charaideo as their royal burial ground for centuries." },
  { q: "How do I reach Charaideo?", a: "The nearest airports are Jorhat (~28km) and Dibrugarh. Most visitors combine Charaideo with Sivasagar, about 28km away, as a single day-trip loop." },
  { q: "How many days do I need for Charaideo?", a: "Charaideo itself is a half-day visit. Most travelers pair it with Sivasagar (~28km away) to make a full day of Ahom heritage sightseeing." },
  { q: "What is the best time to visit Charaideo?", a: "October to March offers the most comfortable weather for walking around the open mound sites." },
  { q: "What is the budget for visiting Charaideo?", a: "This is a low-cost day-trip destination — a budget traveler can manage on roughly ₹1,200 a day, mostly covering transport and food, since accommodation is typically based in nearby Sivasagar or Jorhat." },
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
  { id: "introduction", title: "Why Charaideo?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Charaideo", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const CHARAIDEO_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for walking the open Maidam grounds",
    emoji: "🏛️",
    items: [
      { name: "Comfortable Walking Shoes", description: "The Maidam site involves walking across open, grassy mound terrain with little shade.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Site essential", tagColor: "bg-amber-100 text-amber-700", why: "The mounds are spread across open ground, and comfortable footwear makes exploring them at a relaxed pace easier." },
      { name: "Sun Hat", description: "Little natural shade across the open Maidam grounds means direct sun exposure for most of the visit.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "The site has minimal shade cover, so sun protection matters even on a short half-day visit." },
      { name: "Reusable Water Bottle", description: "Facilities are minimal at this quiet, recently-recognized heritage site.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Site essential", tagColor: "bg-forest-100 text-forest-700", why: "Shops and stalls near the site are limited, so carrying your own water is sensible." },
      { name: "Camera", description: "For the mounds themselves and the surrounding rural Upper Assam landscape.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The mound site and its quiet rural setting make for genuinely good, uncrowded photography." },
    ],
  },
];

export default function CharaideoGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Ancient stone and earthen heritage site representative of Charaideo, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Charaideo", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Charaideo", "Ahom Maidams", "Heritage", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Charaideo Travel Guide: The Pyramids of Assam
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Earthen burial mounds holding the remains of Ahom kings, recently added to UNESCO's World Heritage list — everything you need to plan a trip to Charaideo.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Charaideo, Assam" },
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
                  <h2>Why Charaideo?</h2>
                  <p>
                    <strong>Charaideo</strong> holds a cluster of Maidams — earthen burial mounds built to house the remains of Ahom dynasty kings and royalty, following a distinctive Tai-Ahom royal burial tradition that the dynasty carried with them into Assam. The mounds have earned the popular nickname "Pyramids of Assam," a comparison about monumental funerary significance rather than architectural style.
                  </p>
                  <p>
                    In 2024, the Moidams of Charaideo were inscribed on the UNESCO World Heritage List — making this one of a very small number of UNESCO sites anywhere in Northeast India, and a genuinely significant recognition for Assam's pre-colonial royal history.
                  </p>
                  <p>
                    Charaideo was also the first capital established by Chaolung Sukaphaa, the founder of the Ahom dynasty, after his migration into the Brahmaputra valley in the 13th century. The Ahoms later moved their political capital to Sivasagar, but Charaideo remained their sacred royal burial ground for centuries afterward.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Charaideo at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🏛️", label: "Key Site", value: "Ahom Maidams" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Jorhat (~28km)" },
                        { icon: "🌍", label: "Status", value: "UNESCO World Heritage (2024)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Charaideo</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for walking across the open mound terrain with little natural shade." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warmer temperatures make the shadeless site less comfortable for a leisurely visit." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and muddy ground can make walking around the mounds difficult and less pleasant." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — cool, dry conditions for walking the open mound grounds comfortably.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Charaideo</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jorhat Airport, about 28km away, is the nearest. Dibrugarh is a slightly farther alternative.</li>
                    <li><strong>By Road:</strong> Most travelers reach Charaideo via Sivasagar, about 28km away, combining both in a single day trip.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in Sivasagar or Jorhat and treat Charaideo as a half-day add-on rather than a standalone overnight stop — accommodation directly at the site is very limited.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See in Charaideo</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Heritage mound site representative of Charaideo" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The Ahom Maidams:</strong> A cluster of earthen burial mounds built to house Ahom royalty, the site's UNESCO-recognized centerpiece.</li>
                    <li><strong>Charaideo's founding history:</strong> The site of Chaolung Sukaphaa's first Ahom capital, before the dynasty later moved its seat to Sivasagar.</li>
                    <li><strong>The surrounding rural landscape:</strong> Open, quiet Upper Assam countryside that makes the site feel genuinely uncrowded even as a UNESCO destination.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Charaideo</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Sivasagar", "Basic hotels in Jorhat"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Sivasagar mid-range hotels", "Jorhat business hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed Jorhat hotels — luxury options directly near Charaideo are limited"] },
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
                  <h2>What to Eat Near Charaideo</h2>
                  <ul>
                    <li><strong>Assamese thalis:</strong> Simple rice, dal, and fish-based meals at local eateries in Sivasagar or Jorhat.</li>
                    <li><strong>Local tea:</strong> Given the region's tea-growing heritage, a proper Assam tea stop is worth the detour.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Charaideo Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Sivasagar to Charaideo", color: "bg-amber-700", activities: ["Depart from Sivasagar or Jorhat", "Explore the Ahom Maidams", "Learn the site's founding history"] },
                      { day: "Afternoon", title: "Return & Combine", color: "bg-forest-600", activities: ["Return to Sivasagar for temple/tank sightseeing", "Or continue on to Jorhat for tea-estate visits"] },
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
                          ["Accommodation/night (Sivasagar/Jorhat)", "₹800", "₹3,000"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport (round trip)", "₹800", "₹1,500"],
                          ["Daily total", "₹1,200", "₹3,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Accommodation is typically based in Sivasagar or Jorhat rather than at the site itself.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Charaideo</h2>
                  <ul>
                    <li><strong>Combine with Sivasagar:</strong> The two sites naturally pair into a single day of Ahom heritage.</li>
                    <li><strong>Hire a guide for context:</strong> The site's history isn't always well signposted for casual visitors.</li>
                    <li><strong>Check current visitor facilities:</strong> Given the site's recent UNESCO inscription, facilities may still be evolving.</li>
                    <li><strong>Carry water and sun protection:</strong> The open mound grounds offer little shade.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Combine with Sivasagar for a fuller Ahom heritage day", "Hire a local guide for historical context", "Carry water and sun protection", "Base yourself in Sivasagar or Jorhat", "Visit with genuine interest in pre-colonial Assamese history"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect developed tourist infrastructure at the site itself", "Visit without water or sun protection", "Skip Sivasagar if you've come this far", "Rush the visit — the mounds reward context and unhurried time", "Assume standard tourist facilities given the recent UNESCO status"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Charaideo", "Ahom Maidams", "Heritage", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={CHARAIDEO_GEAR} destination="Charaideo" />
              <RelatedPostsGrid currentSlug="charaideo-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="charaideo-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
