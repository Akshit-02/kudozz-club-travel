// src/app/blog/bomdila-travel-guide/page.tsx
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
  title: "Bomdila Travel Guide: Monastery Town & Gateway to Tawang",
  description:
    "The complete Bomdila travel guide. Bomdila Monastery, panoramic Himalayan views, Monpa craft centre, where to stay, best time to visit, and a full itinerary as your first stop toward Tawang.",
  keywords:
    "Bomdila travel guide, Bomdila Monastery, Bomdila viewpoint, best time to visit Bomdila, how to reach Bomdila, Guwahati to Tawang road, Bomdila Monpa craft centre, Arunachal Pradesh gateway town",
  openGraph: {
    title: "Bomdila Travel Guide: Monastery Town & Gateway to Tawang",
    description: "A ridge-top monastery town with panoramic Himalayan views, and the last comfortable stop before the long climb to Tawang — the complete guide to Bomdila.",
    url: "https://club.kudozz.in/blog/bomdila-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/hero.jpg", width: 1200, height: 630, alt: "Himalayan ridge-top town scenery representative of Bomdila, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Bomdila Travel Guide: Monastery Town & Gateway to Tawang", description: "A ridge-top monastery town on the road to Tawang — the complete guide to Bomdila.", images: ["/images/destinations/manali/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/bomdila-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Bomdila Travel Guide: Monastery Town & Gateway to Tawang",
      description: "The complete Bomdila travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bomdila-travel-guide" },
      about: { "@type": "Place", name: "Bomdila", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Bomdila Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Bomdila?", a: "One day is enough to see Bomdila Monastery, the craft centre, and the ridge-top viewpoints — most travelers use it as their first overnight stop en route to Tawang." },
  { q: "What is the best time to visit Bomdila?", a: "March–June and September–November, matching the wider Tawang circuit's seasonal pattern for clear views and reliable road conditions." },
  { q: "How do I reach Bomdila?", a: "By road from Guwahati or Tezpur (in Assam) — there's no direct airport or railway in Bomdila itself. It's typically the first overnight stop on the drive toward Tawang." },
  { q: "Do I need a permit to visit Bomdila?", a: "Yes — the standard Inner Line Permit (Indian citizens) or Protected Area Permit (foreign nationals) required for Arunachal Pradesh generally applies here. Sort this out before or upon reaching the region." },
  { q: "Is Bomdila just a transit stop?", a: "It has genuine attractions of its own — Bomdila Monastery, panoramic ridge-top views, and a Monpa craft centre — worth a proper visit rather than rushing straight through toward Dirang and Tawang." },
  { q: "What is the budget for a trip to Bomdila?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,500 a day, similar to nearby Dirang." },
  { q: "Can I combine Bomdila with Dirang and Tawang in one trip?", a: "Yes — this is the standard route. Most travelers overnight in Bomdila, then Dirang, before continuing over Sela Pass to Tawang (cross-reference all three guides)." },
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
  { id: "introduction", title: "Why Bomdila?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bomdila", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BOMDILA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the first leg of the Tawang circuit", emoji: "🏯",
  items: [
    { name: "Warm Layers", description: "Bomdila's ridge-top elevation makes for cool mornings and evenings even outside winter.", price: "₹1,999", rating: 4.4, reviews: "4.7k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+jacket+hill+travel"), tag: "Trip essential", tagColor: "bg-sky-100 text-sky-700", why: "This is your first stop at meaningful elevation on the route to Tawang." },
    { name: "Comfortable Walking Shoes", description: "For exploring the monastery grounds and ridge-top viewpoints.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Bomdila's viewpoints and monastery grounds involve some walking on uneven terrain." },
    { name: "Camera", description: "For the genuinely panoramic Himalayan foothill views from Bomdila's ridge.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Bomdila's ridge-top position gives some of the best early views on the Tawang route." },
    { name: "Modest Clothing", description: "For visiting Bomdila Monastery respectfully.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is an active monastery, not just a photo stop." },
  ],
}];

export default function BomdilaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/hero.jpg" alt="Himalayan ridge-top town scenery representative of Bomdila, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bomdila", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bomdila", "Bomdila Monastery", "Off-beat", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bomdila Travel Guide: Monastery Town & Gateway to Tawang
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A ridge-top monastery town with panoramic Himalayan views, and the last comfortable stop before the long climb to Tawang.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bomdila, Arunachal Pradesh" },
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
                  <h2>Why Bomdila?</h2>
                  <p>
                    <strong>Bomdila</strong> sits on a ridge offering genuinely panoramic views over the surrounding Himalayan foothills, and it's typically the first overnight stop for travelers driving toward <strong>Tawang</strong> (cross-reference that guide) from Guwahati or Tezpur.
                  </p>
                  <p>
                    <strong>Bomdila Monastery</strong>, built in a style modeled on Tibet's Tsona Gontse Monastery and established with the Dalai Lama's involvement, is a genuinely significant religious site — worth a proper visit rather than treating Bomdila purely as a transit stop before the more famous stops further up the road.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏯</span> Bomdila at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🏯", label: "Key Site", value: "Bomdila Monastery" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Nov" },
                        { icon: "🛣️", label: "Role", value: "First stop toward Tawang" },
                        { icon: "🎨", label: "Craft", value: "Monpa handicrafts" },
                        { icon: "🪪", label: "Permit", value: "Inner Line Permit required" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bomdila</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Pleasant and clear", text: "Good visibility for the ridge-top views and comfortable temperatures." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Post-monsoon clarity, matching the wider Tawang circuit's most reliable window." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Reduced visibility and landslide risk on the connecting roads further ahead." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, onward risk", text: "Bomdila itself remains accessible, but roads further toward Tawang can face closures — verify conditions." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November — the clearest views and most reliable onward conditions for continuing to Tawang.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bomdila</h2>
                  <ul>
                    <li><strong>By Road:</strong> The only access route, typically via Bhalukpong from Assam — nearest airport Tezpur (cross-reference that existing guide) or Guwahati.</li>
                    <li><strong>Role in the circuit:</strong> Bomdila is typically the first overnight stop on the drive toward Tawang, before continuing to Dirang and Sela Pass (cross-reference both).</li>
                    <li><strong>Permits:</strong> The standard ILP/PAP requirements for Arunachal Pradesh apply.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Arrange or confirm your Inner Line Permit before or upon reaching this region — don't wait until you're at higher-altitude checkpoints further ahead.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Bomdila</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/hero.jpg" alt="Ridge-top monastery and mountain views around Bomdila" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bomdila Monastery:</strong> A Tibetan Buddhist monastery modeled on Tibet's Tsona Gontse Monastery, established with the Dalai Lama's involvement.</li>
                    <li><strong>Ridge-top viewpoints:</strong> Panoramic views over the surrounding Himalayan foothills.</li>
                    <li><strong>Monpa craft centre:</strong> Showcasing local handicrafts from the region's Monpa community.</li>
                    <li><strong>Apple orchards:</strong> Similar to nearby Dirang, the hills around Bomdila support fruit cultivation.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Bomdila</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Bomdila town", "Basic hotels near the market"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Ridge-view mid-range hotels", "Government tourist lodges"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options remain limited here"] },
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
                  <h2>What to Eat in Bomdila</h2>
                  <ul>
                    <li><strong>Thukpa and momos:</strong> Widely available Tibetan-influenced staples.</li>
                    <li><strong>Local Monpa dishes:</strong> Simple regional fare available at guesthouses and small local eateries.</li>
                    <li><strong>Fresh apples:</strong> From the surrounding orchards, in season.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Bomdila Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Monastery & Craft Centre", color: "bg-amber-700", activities: ["Visit Bomdila Monastery", "Browse the Monpa craft centre"] },
                      { day: "Afternoon", title: "Viewpoints & Onward Prep", color: "bg-forest-600", activities: ["Ridge-top viewpoints for photos", "Rest before continuing to Dirang the next day"] },
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
                          ["Accommodation/night", "₹1,000", "₹2,800"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport", "₹100", "₹300"],
                          ["Daily total", "₹1,500", "₹4,000"],
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
                  <h2>Essential Travel Tips for Bomdila</h2>
                  <ul>
                    <li><strong>Sort your permits here if not already done:</strong> Confirm your ILP before heading further into higher-altitude sections.</li>
                    <li><strong>Give it real time:</strong> Bomdila Monastery and the craft centre deserve more than a quick stopover.</li>
                    <li><strong>Use it as your first acclimatization point:</strong> The route only gains altitude from here.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Bomdila Monastery properly", "Browse the Monpa craft centre", "Confirm your ILP/PAP before continuing", "Use this as your first acclimatization stop", "Enjoy the ridge-top views before continuing"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Treat Bomdila as a pure drive-through stop", "Skip confirming permits before continuing higher", "Expect Tawang-level infrastructure here", "Underestimate how cool ridge-top evenings can be", "Rush the monastery visit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bomdila", "Bomdila Monastery", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BOMDILA_GEAR} destination="Bomdila" />
              <RelatedPostsGrid currentSlug="bomdila-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="bomdila-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
