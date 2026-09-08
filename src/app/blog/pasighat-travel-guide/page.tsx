// src/app/blog/pasighat-travel-guide/page.tsx
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
  title: "Pasighat Travel Guide: Arunachal's Oldest Town on the Siang River",
  description:
    "The complete Pasighat travel guide. The Siang River, Daying Ering Wildlife Sanctuary, river rafting, Adi tribal culture, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Pasighat travel guide, Siang River, Daying Ering Wildlife Sanctuary, Adi tribe Arunachal, best time to visit Pasighat, how to reach Pasighat, East Siang district",
  openGraph: {
    title: "Pasighat Travel Guide: Arunachal's Oldest Town on the Siang River",
    description: "The state's oldest permanent settlement, sitting on the banks of the Siang River as it rushes out of the Himalayas onto the Assam plains — the complete guide to Pasighat.",
    url: "https://club.kudozz.in/blog/pasighat-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "River landscape representative of Pasighat, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Pasighat Travel Guide: Arunachal's Oldest Town on the Siang River", description: "The Siang River and Adi tribal culture — the complete guide to Pasighat.", images: ["/images/destinations/kerala/alleppey.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/pasighat-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Pasighat Travel Guide: Arunachal's Oldest Town on the Siang River",
      description: "The complete Pasighat travel guide.",
      image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pasighat-travel-guide" },
      about: { "@type": "Place", name: "Pasighat", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Pasighat Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Pasighat?", a: "1-2 days covers the town, riverfront, and Daying Ering Wildlife Sanctuary comfortably. Add extra days if using Pasighat as a base for deeper Siang Valley exploration." },
  { q: "What is the best time to visit Pasighat?", a: "October to April, for comfortable weather and manageable river conditions. Monsoon (June–September) brings heavy rain and higher, more dangerous river flow." },
  { q: "How do I reach Pasighat?", a: "Pasighat Airport has limited flights — verify current connectivity. The more reliable option is flying into Dibrugarh in Assam and continuing by road. An Inner Line Permit is required." },
  { q: "Is Pasighat a good base for exploring further into Arunachal?", a: "Yes — it's a relatively comfortable, developed town by regional standards and functions as a practical gateway for onward travel into the Siang Valley and beyond." },
  { q: "Can I go river rafting near Pasighat?", a: "Yes, in sections of the Siang River, though operator availability varies — verify current options and safety conditions before planning a trip around this specifically." },
  { q: "What is Daying Ering Wildlife Sanctuary?", a: "A riverine wildlife sanctuary on a Siang River island near Pasighat, home to deer, wild buffalo, and birdlife — an easy, worthwhile add-on for nature-interested travelers." },
  { q: "What is the budget for a trip to Pasighat?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹3,800 a day." },
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
  { id: "introduction", title: "Why Pasighat?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pasighat", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PASIGHAT_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for riverside exploring and rafting", emoji: "🌊",
  items: [
    { name: "Quick-Dry Clothing", description: "Useful for river-based activities and Pasighat's generally humid climate.", price: "₹899", rating: 4.4, reviews: "3.8k", image: "👕", affiliateUrl: amazonSearchUrl("quick+dry+travel+clothing"), tag: "River-activity essential", tagColor: "bg-sky-100 text-sky-700", why: "If rafting or spending time near the Siang River, quick-dry fabric is far more comfortable." },
    { name: "Insect Repellent", description: "Riverside and forest areas around Pasighat are genuinely mosquito-prone.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Essential", tagColor: "bg-forest-100 text-forest-700", why: "Humid riverside terrain makes this a genuine necessity, not just a nice-to-have." },
    { name: "Comfortable Walking Shoes", description: "For exploring the town and Daying Ering Wildlife Sanctuary.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Useful for both town walks and the wildlife sanctuary's nature trails." },
    { name: "Waterproof Phone Pouch", description: "Sensible if planning any river rafting or boat activities on the Siang.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "River essential", tagColor: "bg-purple-100 text-purple-700", why: "Protects your phone during any water-based activity on the Siang River." },
  ],
}];

export default function PasighatGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="River landscape representative of Pasighat, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Pasighat", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pasighat", "Siang River", "Destination Guide", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Pasighat Travel Guide: Arunachal's Oldest Town on the Siang River
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The state's oldest permanent settlement, sitting on the banks of the Siang River as it rushes out of the Himalayas onto the Assam plains.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Pasighat, Arunachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Pasighat?</h2>
                  <p>
                    <strong>Pasighat</strong> is Arunachal Pradesh's oldest established town, founded during the British colonial administrative period, sitting where the <strong>Siang River</strong> — the Indian name for the upper Brahmaputra as it emerges from the Himalayas — transitions from mountain torrent to a wider plains river. It's a genuinely scenic riverside setting.
                  </p>
                  <p>
                    As the headquarters of East Siang district, Pasighat is relatively comfortable and developed by the standards of the wider region, making it a sensible base both for its own sights and for onward travel deeper into the Siang Valley.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌊</span> Pasighat at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🏞️", label: "Key Feature", value: "Siang River" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dibrugarh, Assam" },
                        { icon: "🏘️", label: "Status", value: "Arunachal's oldest town" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Pasighat</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Apr", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable weather and manageable river conditions for both sightseeing and any rafting activity." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain brings higher, more dangerous river flow — not the best window for river-based activities." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March for the most reliable weather and river conditions.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pasighat</h2>
                  <ul>
                    <li><strong>By Air:</strong> Pasighat Airport has limited flights — verify current connectivity. Dibrugarh in Assam is the more reliable larger airport.</li>
                    <li><strong>By Road:</strong> The standard route for most visitors, connecting from Dibrugarh or elsewhere in Assam.</li>
                    <li><strong>Permits:</strong> An Inner Line Permit is required — verify current requirements before travel.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current Pasighat Airport flight status before relying on it — road via Dibrugarh remains the more dependable option for most trips.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Pasighat</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Riverside scenery around Pasighat" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Siang River:</strong> A genuinely scenic riverfront where the Himalayan river transitions to plains — walks and views along the bank are a highlight in themselves.</li>
                    <li><strong>Daying Ering Wildlife Sanctuary:</strong> A riverine wildlife sanctuary on a Siang River island, home to deer, wild buffalo, and birdlife — an easy, worthwhile add-on.</li>
                    <li><strong>River rafting/kayaking:</strong> Available in sections of the Siang depending on operator availability and season — verify current options.</li>
                    <li><strong>Adi tribal culture:</strong> The Adi community has a strong cultural presence in and around Pasighat, worth engaging with respectfully.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Pasighat</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in town", "Basic hotels near the market"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed town hotels", "Riverside stays where available"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of premium stays — options remain limited given the region's remoteness"] },
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
                  <h2>What to Eat in Pasighat</h2>
                  <ul>
                    <li><strong>Adi cuisine:</strong> Local Adi tribal dishes, worth seeking out for a genuine regional taste.</li>
                    <li><strong>Assamese-influenced food:</strong> Common given Pasighat's proximity and connections to Assam.</li>
                    <li><strong>Bamboo shoot and forest-foraged dishes:</strong> A distinctive part of the regional culinary tradition.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Pasighat Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Town & Riverfront", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: explore the Siang riverfront and town", "Evening: local market and dinner"] },
                      { day: "Day 2", title: "Daying Ering & Departure", color: "bg-forest-600", activities: ["Morning: Daying Ering Wildlife Sanctuary", "Optional: river rafting/kayaking (season-dependent)", "Afternoon: departure or onward Siang Valley travel"] },
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
                          ["Accommodation/night", "₹900", "₹2,800"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport + sanctuary entry", "₹300", "₹600"],
                          ["Daily total", "₹1,600", "₹4,300"],
                          ["2-Day trip total", "₹3,200", "₹8,600"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Dibrugarh/onward from Assam.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Pasighat</h2>
                  <ul>
                    <li><strong>Verify current Inner Line Permit requirements:</strong> Confirm before you travel.</li>
                    <li><strong>Check river conditions before rafting:</strong> Especially in shoulder-monsoon months.</li>
                    <li><strong>Use Pasighat as a practical base:</strong> It's comparatively well-developed for onward Siang Valley exploration.</li>
                    <li><strong>Verify Pasighat Airport flight status:</strong> Road via Dibrugarh remains the more dependable option.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify current Inner Line Permit requirements", "Check river/weather conditions before any rafting", "Visit Daying Ering Wildlife Sanctuary", "Use Pasighat as a base for deeper Siang Valley travel", "Engage respectfully with local Adi culture"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rely solely on Pasighat Airport without checking current status", "Attempt river activities during high monsoon flow", "Travel without confirming Inner Line Permit status", "Skip Daying Ering if you have an extra half-day", "Underestimate travel time from Assam"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Pasighat", "Siang River", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PASIGHAT_GEAR} destination="Pasighat" />
              <RelatedPostsGrid currentSlug="pasighat-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="pasighat-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
