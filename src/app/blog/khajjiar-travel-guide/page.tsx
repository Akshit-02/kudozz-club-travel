// src/app/blog/khajjiar-travel-guide/page.tsx
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
  title: "Khajjiar Travel Guide: Mini Switzerland of India",
  description:
    "The complete Khajjiar travel guide. The saucer-shaped meadow, Khajji Nag Temple, Kalatop Wildlife Sanctuary, where to stay, best time to visit, and a full day-trip itinerary from Dalhousie.",
  keywords:
    "Khajjiar travel guide, Mini Switzerland India, Khajji Nag Temple, Kalatop Wildlife Sanctuary, best time to visit Khajjiar, how to reach Khajjiar, Khajjiar Dalhousie",
  openGraph: {
    title: "Khajjiar Travel Guide: Mini Switzerland of India",
    description: "A saucer-shaped meadow ringed by deodar forest that earned the nickname 'Mini Switzerland of India' — the complete guide to Khajjiar.",
    url: "https://club.kudozz.in/blog/khajjiar-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Green meadow ringed by forest, representative of Khajjiar, Himachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Khajjiar Travel Guide: Mini Switzerland of India", description: "A saucer-shaped meadow ringed by deodar forest — the complete guide to Khajjiar.", images: ["/images/destinations/ziro/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/khajjiar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Khajjiar Travel Guide: Mini Switzerland of India",
      description: "The complete Khajjiar travel guide.",
      image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/khajjiar-travel-guide" },
      about: { "@type": "Place", name: "Khajjiar", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Khajjiar Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Khajjiar?", a: "Half a day is enough to see the meadow, the temple, and try one activity. Most travelers visit as a day trip from Dalhousie rather than staying overnight." },
  { q: "Why is Khajjiar called 'Mini Switzerland of India'?", a: "It's a popular tourism-marketing nickname for the meadow's saucer shape, deodar forest ring, and small central lake — a genuinely scenic combination, though the comparison is more evocative than literal." },
  { q: "What is the best time to visit Khajjiar?", a: "March–June and September–November offer the greenest meadow and clearest weather. December–February brings snow, popular with a different kind of visitor." },
  { q: "How do I reach Khajjiar?", a: "Via Dalhousie is the standard approach for virtually all visitors — Khajjiar sits about 22km from Dalhousie by road, itself best reached via Pathankot." },
  { q: "Is Khajjiar crowded?", a: "The meadow gets busy with day-trippers around midday, especially on weekends. An early morning visit is noticeably quieter." },
  { q: "What activities are available at Khajjiar?", a: "Horse riding, zorbing, and seasonal paragliding are commonly offered by local operators on the meadow — verify current operator availability, as this can vary." },
  { q: "Can I stay overnight in Khajjiar?", a: "Some accommodation exists, but most travelers base themselves in Dalhousie and treat Khajjiar as a half-day or day trip given the meadow's compact size." },
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
  { id: "introduction", title: "Why Khajjiar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Khajjiar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KHAJJIAR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a day on the meadow", emoji: "🌾",
  items: [
    { name: "Comfortable Walking Shoes", description: "For walking the meadow perimeter and the short Kalatop Wildlife Sanctuary nature trail.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Day-trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Grass can be damp underfoot, especially in the morning." },
    { name: "Light Warm Layer", description: "Khajjiar's elevation keeps mornings cool even in summer months.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Morning essential", tagColor: "bg-sky-100 text-sky-700", why: "An early visit for fewer crowds means cooler temperatures too." },
    { name: "Camera", description: "For the meadow's signature saucer-shaped landscape and deodar forest ring.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "This is Khajjiar's single most photographed view." },
    { name: "Sunscreen", description: "Open meadow exposure with little shade across most of the site.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("sunscreen+travel+outdoor"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "The open meadow offers little shade during midday hours." },
  ],
}];

export default function KhajjiarGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Green meadow ringed by forest, representative of Khajjiar, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Khajjiar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Khajjiar", "Mini Switzerland", "Off-beat", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Khajjiar Travel Guide: Mini Switzerland of India
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A saucer-shaped meadow ringed by deodar forest that earned the nickname "Mini Switzerland of India."
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Khajjiar, Himachal Pradesh" },
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
                  <h2>Why Khajjiar?</h2>
                  <p>
                    <strong>Khajjiar</strong> is a genuinely unusual landform for the Indian Himalayas — a saucer-shaped meadow ringed almost perfectly by deodar cedar forest, with a small lake at its centre. The comparison to Switzerland's alpine meadows is tourism marketing more than a literal claim, but the meadow's shape and setting are striking enough to have earned the nickname regardless.
                  </p>
                  <p>
                    It's small — genuinely a half-day stop rather than a place to base a multi-day trip — and almost every visitor sees it as a day trip from <strong>Dalhousie</strong>, about 22km away.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌾</span> Khajjiar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🌾", label: "Landmark", value: "Saucer-shaped meadow" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        { icon: "🚗", label: "Access", value: "Via Dalhousie (~22km)" },
                        { icon: "🛕", label: "Key Site", value: "Khajji Nag Temple" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹2,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Khajjiar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Green and pleasant", text: "Comfortable weather with a lush green meadow before monsoon arrives." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Post-monsoon clarity and crisp air, ideal for meadow photography." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Snow season", text: "A different, quieter kind of visit when the meadow is snow-covered." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November for the clearest weather and greenest meadow without monsoon mud.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Khajjiar</h2>
                  <ul>
                    <li><strong>Via Dalhousie:</strong> The standard and virtually only practical route — about 22km, 45 minutes to an hour by road.</li>
                    <li><strong>By Air/Train:</strong> Same as Dalhousie — Kangra/Gaggal Airport (~130km) or Pathankot (~95km) railway station, both requiring the onward drive through Dalhousie.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a taxi from Dalhousie for a half-day round trip rather than trying to combine it with an overnight stay in Khajjiar itself.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Khajjiar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Meadow and forest scenery at Khajjiar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The meadow and lake:</strong> Khajjiar's signature saucer-shaped grassland with a small central lake, ringed by deodar forest.</li>
                    <li><strong>Khajji Nag Temple:</strong> An old wooden temple by the meadow, dedicated to a local serpent deity.</li>
                    <li><strong>Meadow activities:</strong> Horse riding, zorbing, and seasonal paragliding through local operators — verify current availability.</li>
                    <li><strong>Kalatop Wildlife Sanctuary:</strong> A nearby forested sanctuary good for a short nature walk.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Khajjiar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,500/night", picks: ["Basic guesthouses in Khajjiar itself", "Wider budget options in Dalhousie"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Meadow-adjacent mid-range hotels", "Dalhousie-based mid-range stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night", picks: ["Limited premium options in Khajjiar — most luxury stays are based in Dalhousie"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most travelers base in Dalhousie and visit Khajjiar as a day trip rather than staying overnight here.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Khajjiar</h2>
                  <ul>
                    <li><strong>Local dhaba food:</strong> Simple North Indian meals at small eateries around the meadow.</li>
                    <li><strong>Maggi and snacks:</strong> A common quick option at meadow-side stalls, popular with day-trippers.</li>
                    <li><strong>Himachali dham:</strong> Available in Dalhousie for a fuller regional meal.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Khajjiar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Meadow & Temple", color: "bg-amber-700", activities: ["Depart Dalhousie early", "Explore the meadow and lake", "Visit Khajji Nag Temple"] },
                      { day: "Midday", title: "Activities & Sanctuary", color: "bg-forest-600", activities: ["Try horse riding or zorbing (seasonal)", "Short walk at Kalatop Wildlife Sanctuary", "Return to Dalhousie by afternoon"] },
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
                          ["Taxi from Dalhousie (round trip)", "₹1,000", "₹1,800"],
                          ["Food/snacks", "₹200", "₹500"],
                          ["Activities (horse riding, etc.)", "₹200", "₹600"],
                          ["Half-day total", "₹1,400", "₹2,900"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes accommodation, which is typically booked in Dalhousie rather than Khajjiar.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Khajjiar</h2>
                  <ul>
                    <li><strong>Go early:</strong> The meadow gets crowded with day-trippers by midday, especially on weekends.</li>
                    <li><strong>Combine with Dalhousie:</strong> This is the natural, practical pairing for both.</li>
                    <li><strong>Verify activity availability:</strong> Horse riding, zorbing, and paragliding operators aren't always active — check locally.</li>
                    <li><strong>Keep expectations proportionate:</strong> This is a small, single-attraction stop rather than a multi-day destination.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit early morning for the quietest meadow", "Combine directly with a Dalhousie stay", "Verify activity operator availability before planning around it", "Walk the short Kalatop Wildlife Sanctuary trail if time allows", "Keep this to a half-day/day-trip plan"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a multi-day trip around Khajjiar alone", "Arrive midday expecting a quiet meadow", "Assume every meadow activity operator is active year-round", "Skip Dalhousie thinking Khajjiar has equal infrastructure", "Overstate the 'Switzerland' comparison as literal"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Khajjiar", "Dalhousie", "Mini Switzerland", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KHAJJIAR_GEAR} destination="Khajjiar" />
              <RelatedPostsGrid currentSlug="khajjiar-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="khajjiar-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
