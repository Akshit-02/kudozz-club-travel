// src/app/blog/pinjore-travel-guide/page.tsx
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
  title: "Pinjore Gardens Travel Guide: Mughal Terraces Near Chandigarh",
  description:
    "The complete Pinjore travel guide. Yadavindra Gardens' seven Mughal terraces, fountains and pavilions, where to stay, best time to visit, and a full half-day itinerary combined with Chandigarh.",
  keywords:
    "Pinjore travel guide, Pinjore Gardens, Yadavindra Gardens, Mughal gardens Haryana, best time to visit Pinjore, how to reach Pinjore, Chandigarh Shimla road stop",
  openGraph: {
    title: "Pinjore Gardens Travel Guide: Mughal Terraces Near Chandigarh",
    description: "A seven-tiered Mughal garden complex with cascading fountains, built as a royal retreat on the road to Shimla — the complete guide to Pinjore.",
    url: "https://club.kudozz.in/blog/pinjore-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Mughal-era garden and pavilion architecture representative of Pinjore, Haryana" }],
  },
  twitter: { card: "summary_large_image", title: "Pinjore Gardens Travel Guide: Mughal Terraces Near Chandigarh", description: "A seven-tiered Mughal garden with fountains and pavilions — the complete guide to Pinjore.", images: ["/images/destinations/jaisalmer/fort.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/pinjore-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Pinjore Gardens Travel Guide: Mughal Terraces Near Chandigarh",
      description: "The complete Pinjore travel guide.",
      image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pinjore-travel-guide" },
      about: { "@type": "Place", name: "Pinjore", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Pinjore Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How much time do I need at Pinjore Gardens?", a: "Two to three hours covers the full seven-terrace layout at a relaxed pace. This is a half-day stop, not a full-day destination on its own." },
  { q: "What is the best time to visit Pinjore Gardens?", a: "October to March offers the most comfortable weather and the greenery at its best. Summer heat (Apr-Jun) makes an extended visit less pleasant, though the gardens remain open." },
  { q: "How do I reach Pinjore?", a: "Pinjore is about 20km from Chandigarh, an easy short drive on the Chandigarh-Shimla road. Chandigarh serves as the practical airport and railway hub." },
  { q: "Who built Pinjore Gardens?", a: "The gardens are traditionally attributed to the era of Fidai Khan, Aurangzeb's foster brother, built in the classic Mughal charbagh (terraced, four-quadrant) tradition." },
  { q: "Is there a zoo at Pinjore?", a: "A wildlife sanctuary/mini zoo has historically adjoined the gardens in some periods — verify current status and opening hours before planning a visit around it specifically." },
  { q: "Can I combine Pinjore with a Chandigarh trip?", a: "Yes — this is the most natural way to visit, given the short 20km distance. Most travelers treat Pinjore as a half-day add-on to a Chandigarh itinerary." },
  { q: "Is Pinjore worth visiting?", a: "Yes, for a relatively quick, low-cost stop — the seven-tiered Mughal layout with fountains and pavilions is genuinely attractive and photogenic, especially in the morning light." },
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
  { id: "introduction", title: "Why Pinjore?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pinjore", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PINJORE_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a garden walk and photography stop", emoji: "⛲",
  items: [
    { name: "Comfortable Walking Shoes", description: "The seven-terrace layout involves steady walking and shallow steps between levels.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "The terraced layout means continuous walking across the full visit." },
    { name: "Sun Hat", description: "Much of the garden is open with limited shade, especially in the middle terraces.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Summer visits especially benefit from sun protection." },
    { name: "Camera", description: "The fountains, pavilions, and terraced symmetry are genuinely photogenic, especially in morning light.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Photography essential", tagColor: "bg-forest-100 text-forest-700", why: "This is one of the more photogenic Mughal garden layouts in North India." },
    { name: "Reusable Water Bottle", description: "Useful for a comfortable walk through the full garden on a warm day.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Day-trip essential", tagColor: "bg-purple-100 text-purple-700", why: "There's limited shade across the open terraces." },
  ],
}];

export default function PinjoreGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Mughal-era garden and pavilion architecture representative of Pinjore, Haryana" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Pinjore", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pinjore", "Mughal Gardens", "Heritage", "Haryana"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Pinjore Gardens Travel Guide: Mughal Terraces Near Chandigarh
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A seven-tiered Mughal garden complex with cascading fountains, built as a royal retreat on the road to Shimla.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Pinjore, Haryana" },
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
                  <h2>Why Pinjore?</h2>
                  <p>
                    <strong>Pinjore Gardens</strong> (officially Yadavindra Gardens) is a Mughal-style terraced garden complex traditionally attributed to the era of Fidai Khan, Aurangzeb's foster brother — a seven-level layout of pavilions, fountains, and water channels in the classic Mughal <em>charbagh</em> tradition. It historically served as a stopover and retreat on the old route between the plains and Shimla, and its location right on the Chandigarh-Shimla highway keeps that role alive today as an easy, popular quick stop for travelers heading toward the hills.
                  </p>
                  <p>
                    It's a compact, low-cost destination — best treated as a half-day add-on to a Chandigarh visit rather than a standalone trip.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛲</span> Pinjore at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "⛲", label: "Key Site", value: "Yadavindra Gardens" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "From Chandigarh", value: "~20km" },
                        { icon: "🏛️", label: "Style", value: "Mughal charbagh, 7 terraces" },
                        { icon: "💰", label: "Budget/Visit", value: "Low-cost, half-day" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Pinjore</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures and the gardens at their greenest and most pleasant to walk." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Open terraces offer little shade — a visit is still possible but less comfortable." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Lush and green, though occasional heavy rain can interrupt a visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March for the most comfortable walk through all seven terraces.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pinjore</h2>
                  <ul>
                    <li><strong>By Air/Train:</strong> Chandigarh (airport and railway) is the practical hub, roughly 20km away.</li>
                    <li><strong>By Road:</strong> A short, easy drive on the Chandigarh-Shimla highway (NH5).</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Pinjore with Chandigarh sightseeing on the same day — the short distance makes this an easy half-day add-on.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Pinjore</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Mughal garden architecture at Pinjore" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Seven-terrace garden walk:</strong> Fountains, water channels, and pavilions laid out across the full charbagh terraces.</li>
                    <li><strong>Shish Mahal and Rang Mahal:</strong> Historic pavilions within the garden complex, worth pausing at for their architectural detail.</li>
                    <li><strong>Photography:</strong> The symmetrical terraced layout and fountains make this a popular photography stop.</li>
                    <li><strong>Adjoining wildlife area:</strong> A wildlife sanctuary/mini zoo has historically adjoined the gardens in some periods — verify current status before visiting specifically for it.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Pinjore</h2>
                  <p>Pinjore is best visited as a day trip; for overnight stays, Chandigarh (~20km) offers a far wider range of options.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,000/night", picks: ["Budget hotels in Chandigarh"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Mid-range hotels in Chandigarh/Panchkula"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000+/night", picks: ["Premium Chandigarh hotels"] },
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
                  <h2>What to Eat Near Pinjore</h2>
                  <ul>
                    <li><strong>Roadside dhabas:</strong> Simple North Indian fare along the Chandigarh-Shimla highway.</li>
                    <li><strong>Chandigarh restaurants:</strong> A far wider range of dining options a short drive away.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Pinjore Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Garden Visit", color: "bg-amber-700", activities: ["Arrive early for the best light", "Walk the full seven-terrace layout", "Photograph the fountains and pavilions"] },
                      { day: "Afternoon", title: "Onward to Chandigarh", color: "bg-forest-600", activities: ["Depart for Chandigarh sightseeing", "Or continue onward toward Shimla"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Entry fee", "₹20–₹50"],
                          ["Local transport (round trip from Chandigarh)", "₹500–₹1,500"],
                          ["Food", "₹200–₹500"],
                          ["Half-day total", "₹700–₹2,000"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes accommodation, which is typically booked in Chandigarh.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Pinjore</h2>
                  <ul>
                    <li><strong>Combine with Chandigarh:</strong> The short distance makes this a natural half-day add-on.</li>
                    <li><strong>Visit in the morning:</strong> Best light for photography and cooler walking conditions.</li>
                    <li><strong>Verify zoo/wildlife adjunct status:</strong> If interested in the wildlife area, check current opening status before planning around it.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Combine with a Chandigarh visit", "Go early for the best morning light", "Walk the full seven-terrace layout", "Bring a camera for the fountains and pavilions"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a full day around Pinjore alone", "Visit at peak midday heat in summer", "Assume the wildlife adjunct is open without checking", "Skip Chandigarh if you have the extra time"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Pinjore", "Mughal Gardens", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PINJORE_GEAR} destination="Pinjore" />
              <RelatedPostsGrid currentSlug="pinjore-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="pinjore-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
