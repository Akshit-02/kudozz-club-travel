// src/app/blog/tawang-travel-guide/page.tsx
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
  title: "Tawang Travel Guide: Monastery, War Memorial & Best Time to Visit",
  description:
    "The complete Tawang travel guide. Tawang Monastery, the 1962 War Memorial, Sela Pass, Bum La Pass, Inner Line Permits, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Tawang travel guide, Tawang Monastery, Tawang War Memorial, Bum La Pass, Inner Line Permit Tawang, best time to visit Tawang, how to reach Tawang, Sela Pass Tawang, Nuranang Falls, Arunachal Pradesh Tawang itinerary",
  openGraph: {
    title: "Tawang Travel Guide: Monastery, War Memorial & Best Time to Visit",
    description: "India's largest Buddhist monastery, a war memorial honoring the 1962 conflict, and some of the most dramatic high-altitude scenery in the Eastern Himalayas — the complete guide to Tawang.",
    url: "https://club.kudozz.in/blog/tawang-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/rohtang-pass.jpg", width: 1200, height: 630, alt: "High-altitude Himalayan mountain pass representative of Tawang, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Tawang Travel Guide: Monastery, War Memorial & Best Time to Visit", description: "India's largest Buddhist monastery and dramatic Eastern Himalayan scenery — the complete guide to Tawang.", images: ["/images/destinations/manali/rohtang-pass.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/tawang-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Tawang Travel Guide: Monastery, War Memorial & Best Time to Visit",
      description: "The complete Tawang travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tawang-travel-guide" },
      about: { "@type": "Place", name: "Tawang", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Tawang Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Do I need a permit to visit Tawang?", a: "Yes — Indian citizens need an Inner Line Permit (ILP) for Arunachal Pradesh, applied for online in advance or in some cases on arrival at entry checkpoints. Foreign nationals need a Protected Area Permit (PAP), typically arranged through a registered travel agent. Verify the current application process before you go." },
  { q: "How many days do I need for Tawang?", a: "3-4 days minimum, given the multi-day road journey required to reach it via Bomdila, Dirang, and Sela Pass. Rushing the approach undercuts the experience and is genuinely tiring at altitude." },
  { q: "What is the best time to visit Tawang?", a: "March–June and September–November offer the most reliable road access and clearest weather. Winter (December–February) brings heavy snow that can close Sela Pass and cut off road access entirely — verify current conditions before traveling in shoulder months." },
  { q: "Can I visit Bum La Pass from Tawang?", a: "Bum La Pass, near the actual India-China border, is accessible with special permits arranged locally, subject to military clearance and weather. This is a sensitive border area — verify current access status and permit process before planning around it." },
  { q: "Is there an airport in Tawang?", a: "Tenzing Airport near Tawang exists but operational status and flight frequency can vary — verify current status before relying on it. Most travelers reach Tawang by road via Guwahati, Bomdila, and Dirang." },
  { q: "Is altitude sickness a concern in Tawang?", a: "Tawang sits at roughly 3,000m, and the approach road crosses even higher passes. Acclimatize gradually via the multi-day road route rather than flying in directly if possible, stay hydrated, and know basic altitude sickness symptoms." },
  { q: "What is the budget for a trip to Tawang?", a: "A budget traveler can manage on roughly ₹2,000 a day, a mid-range trip closer to ₹5,000 a day, factoring in the remote region's higher transport and accommodation costs relative to more accessible destinations." },
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
  { id: "introduction", title: "Why Tawang?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach & Permits", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TAWANG_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for high-altitude cold and the multi-day approach road", emoji: "🏔️",
  items: [
    { name: "Heavy Down Jacket", description: "Tawang and the passes on the way there are genuinely cold year-round, not just in winter — a proper down jacket is non-negotiable.", price: "₹4,999", rating: 4.6, reviews: "3.4k", image: "🧥", affiliateUrl: amazonSearchUrl("heavy+down+jacket+high+altitude"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Temperatures near Sela Pass and Bum La drop sharply even outside peak winter — underdressing here is a real risk, not just discomfort." },
    { name: "Sturdy Trekking Shoes", description: "For monastery courtyards, uneven mountain-town streets, and any short walks near the passes.", price: "₹3,499", rating: 4.5, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+high+altitude"), tag: "Trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Terrain here is uneven and often wet or icy in shoulder season." },
    { name: "High-SPF Sunscreen", description: "High-altitude sun exposure during the drive and at the passes is significantly more intense than it feels.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("high+spf+sunscreen+travel"), tag: "Altitude essential", tagColor: "bg-sky-100 text-sky-700", why: "Sunburn at 4,000m+ altitude happens faster than most travelers expect, even in cold weather." },
    { name: "Basic First-Aid & Altitude Kit", description: "Given the genuine altitude gain on this route, carrying basic medication and knowing symptoms of altitude sickness is sensible.", price: "₹499", rating: 4.4, reviews: "3.9k", image: "🩹", affiliateUrl: amazonSearchUrl("travel+first+aid+kit"), tag: "Remote-travel essential", tagColor: "bg-purple-100 text-purple-700", why: "Medical facilities are sparse along this route — basic preparedness matters." },
  ],
}];

export default function TawangGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/rohtang-pass.jpg" alt="High-altitude Himalayan mountain pass representative of Tawang, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tawang", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tawang", "Tawang Monastery", "Heritage", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tawang Travel Guide: Monastery, War Memorial & Best Time to Visit
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              India's largest Buddhist monastery, a war memorial honoring the 1962 conflict, and some of the most dramatic high-altitude scenery in the Eastern Himalayas.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tawang, Arunachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,300 words" },
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
                  <h2>Why Tawang?</h2>
                  <p>
                    <strong>Tawang</strong> sits at roughly 3,000m in the far northwest of Arunachal Pradesh, near the borders with Bhutan and Tibet, and is home to <strong>Tawang Monastery</strong> (Galden Namgey Lhatse) — founded in the 17th century and widely cited as India's largest Buddhist monastery, among the largest in the world outside Tibet itself. The 6th Dalai Lama is traditionally said to have been born in this region, a genuinely significant historical thread running through the monastery's identity.
                  </p>
                  <p>
                    Tawang also carries a somber, important layer of modern history: it sits close to the site of fierce fighting during the 1962 Sino-Indian War, commemorated today at the Tawang War Memorial. Between the monastery, the memorial, and some of the most dramatic high-altitude scenery in the Eastern Himalayas, Tawang rewards travelers willing to commit to the genuinely demanding multi-day road journey to reach it.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Tawang at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Tawang Monastery" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Nov" },
                        { icon: "🪪", label: "Permit", value: "Inner Line Permit (ILP) required" },
                        { icon: "⛰️", label: "Elevation", value: "~3,000m" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹5,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tawang</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Reliable road access", text: "Snow clears from Sela Pass and the roads open up fully, offering clear high-altitude views before summer rains arrive." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Post-monsoon clarity with the most reliable road conditions and crisp mountain air." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain brings landslide risk on the approach roads — genuinely the least reliable window for this route." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Winter — road closures likely", text: "Heavy snow at Sela Pass can close the road entirely, cutting off Tawang — verify current conditions before attempting this window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November — the most reliable combination of open roads and clear high-altitude views.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tawang & Permits</h2>
                  <ul>
                    <li><strong>Permits:</strong> Indian citizens need an Inner Line Permit (ILP) for Arunachal Pradesh, applied for online in advance or in some cases at entry checkpoints. Foreign nationals need a Protected Area Permit (PAP), typically arranged through a registered travel agent. Verify the current application process before you go.</li>
                    <li><strong>By Air:</strong> Tenzing Airport near Tawang exists but operational status varies — verify current flight availability. Guwahati is the more reliable air gateway for the region.</li>
                    <li><strong>By Road:</strong> The standard route runs via Bhalukpong, Bomdila, Dirang, and Sela Pass (cross-reference those guides) — a multi-day journey that's genuinely part of the Tawang experience, not just a means to an end.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Apply for your ILP well before departure, and build genuine buffer days into your itinerary — this route is not one to rush, both for altitude acclimatization and for road-condition unpredictability.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Tawang</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/rohtang-pass.jpg" alt="Mountain scenery around Tawang" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tawang Monastery:</strong> India's largest Buddhist monastery, housing a significant collection of scriptures, thangkas, and a substantial library — the region's spiritual and cultural centrepiece.</li>
                    <li><strong>Tawang War Memorial:</strong> A moving tribute to Indian soldiers who fought in the 1962 Sino-Indian War, right in the region where the fighting took place.</li>
                    <li><strong>Bum La Pass:</strong> Near the actual India-China border, accessible with special local permits subject to military clearance — verify current access status before planning around it.</li>
                    <li><strong>Nuranang Falls:</strong> A scenic waterfall along the approach road, a worthwhile stop en route.</li>
                    <li><strong>PT Tso and nearby high-altitude lakes:</strong> Striking mountain lakes reflecting the surrounding peaks.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Tawang</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Tawang town", "Basic monastery-adjacent lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Mid-range hotels with mountain views", "Boutique-style local stays"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of better-appointed hotels — luxury options remain genuinely limited this far into the mountains"] },
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
                  <h2>What to Eat in Tawang</h2>
                  <ul>
                    <li><strong>Thukpa and momos:</strong> Tibetan-influenced staples widely available and genuinely warming at this altitude.</li>
                    <li><strong>Zan:</strong> A traditional Monpa fermented millet/buckwheat porridge-style dish, worth trying for a genuine local flavor.</li>
                    <li><strong>Butter tea:</strong> A traditional Tibetan-Buddhist beverage, commonly served and a good way to warm up in the cold.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>4-Day Tawang Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Guwahati to Bomdila", color: "bg-amber-700", activities: ["Long drive from Guwahati toward Bomdila", "Overnight acclimatization stop", "Visit Bomdila Monastery in the evening"] },
                      { day: "Day 2", title: "Bomdila to Dirang", color: "bg-forest-600", activities: ["Shorter drive to Dirang", "Visit Dirang Dzong and hot springs", "Overnight in Dirang for further acclimatization"] },
                      { day: "Day 3", title: "Dirang to Tawang via Sela Pass", color: "bg-orange-600", activities: ["Cross Sela Pass, stop at Jaswantgarh war memorial", "Continue to Tawang, check in", "Evening at Tawang Monastery"] },
                      { day: "Day 4", title: "Tawang Sightseeing", color: "bg-purple-600", activities: ["Morning: Tawang War Memorial", "Bum La Pass if permits/conditions allow", "Departure or begin return journey"] },
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
                          ["Food/day", "₹500", "₹1,100"],
                          ["Vehicle hire per day", "₹3,500", "₹5,500"],
                          ["Daily total (per person, shared vehicle)", "₹2,000", "₹5,000"],
                          ["4-Day trip total", "₹8,000", "₹20,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Guwahati. Shared vehicle hire is the standard way to cover this route.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Tawang</h2>
                  <ul>
                    <li><strong>Sort your permits early:</strong> Apply for the ILP well before departure — don't leave this to the last minute.</li>
                    <li><strong>Verify seasonal road status:</strong> Sela Pass can close in heavy snow — check current conditions before traveling in shoulder months.</li>
                    <li><strong>Take the multi-day route seriously:</strong> The Bomdila-Dirang-Sela Pass approach genuinely helps with altitude acclimatization — don't try to compress it.</li>
                    <li><strong>Dress for serious cold:</strong> This isn't optional layering — Tawang and the passes are cold year-round.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Apply for your Inner Line Permit well in advance", "Verify current road/pass conditions before traveling", "Take the multi-day approach route for acclimatization", "Pack serious warm layers", "Visit the War Memorial respectfully"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt this route without a confirmed permit", "Rush the approach road, especially at altitude", "Assume Bum La Pass access is guaranteed without verifying", "Underestimate the cold, even in shoulder season", "Travel in Dec–Feb without checking road closure status"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Tawang", "Tawang Monastery", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TAWANG_GEAR} destination="Tawang" />
              <RelatedPostsGrid currentSlug="tawang-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="tawang-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
