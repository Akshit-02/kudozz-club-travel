// src/app/blog/old-goa-travel-guide/page.tsx
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
  title: "Old Goa Travel Guide: Basilica of Bom Jesus & UNESCO Churches",
  description:
    "The complete Old Goa travel guide. Basilica of Bom Jesus, Sé Cathedral, the UNESCO World Heritage church cluster, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Old Goa travel guide, Basilica of Bom Jesus, Se Cathedral Goa, Old Goa churches UNESCO, St Francis Xavier tomb, best time to visit Old Goa, how to reach Old Goa",
  openGraph: {
    title: "Old Goa Travel Guide: Basilica of Bom Jesus & UNESCO Churches",
    description: "A cluster of UNESCO World Heritage churches from Goa's days as the 'Rome of the East', including the tomb of St. Francis Xavier — the complete guide to Old Goa.",
    url: "https://club.kudozz.in/blog/old-goa-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Colonial-era church heritage representative of Old Goa" }],
  },
  twitter: { card: "summary_large_image", title: "Old Goa Travel Guide: Basilica of Bom Jesus & UNESCO Churches", description: "UNESCO churches from Goa's colonial past — the complete guide to Old Goa.", images: ["/images/destinations/hampi/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/old-goa-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Old Goa Travel Guide: Basilica of Bom Jesus & UNESCO Churches",
      description: "The complete Old Goa travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/old-goa-travel-guide" },
      about: { "@type": "Place", name: "Old Goa", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Old Goa Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Why is Old Goa a UNESCO World Heritage Site?", a: "A cluster of churches and convents here — including the Basilica of Bom Jesus and Sé Cathedral — represents a significant concentration of 16th-17th century Portuguese colonial religious architecture, collectively designated a UNESCO World Heritage Site." },
  { q: "Whose remains are kept at the Basilica of Bom Jesus?", a: "The Basilica houses the mortal remains of St. Francis Xavier, a major Catholic missionary figure, making it an important pilgrimage site. The remains are exposed for public veneration only during a decennial exposition — verify the current schedule before planning a trip around this specifically." },
  { q: "How many days do I need for Old Goa?", a: "Half a day covers the main churches comfortably. Most travelers combine it with a broader Panjim visit as part of the same day trip." },
  { q: "How far is Old Goa from Panjim?", a: "About 10km, a short and straightforward drive, making Panjim the natural base for an Old Goa visit." },
  { q: "What is the best time to visit Old Goa?", a: "October to March offers comfortable weather for walking between the churches. It's an outdoor-heavy visit, so the hotter months (April-June) can be uncomfortable." },
  { q: "Is there an entry fee for the churches?", a: "Some churches and the Archaeological Museum may charge a modest entry fee; the main churches are generally accessible for a small or no charge. Verify current rates locally." },
  { q: "What should I wear to visit Old Goa's churches?", a: "Modest dress is expected — covered shoulders and knees — as these remain active places of worship, not just tourist sites." },
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
  { id: "introduction", title: "Why Old Goa?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Old Goa", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const OLDGOA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a heritage church walk", emoji: "⛪",
  items: [
    { name: "Modest Cotton Clothing", description: "Covered shoulders and knees are expected across Old Goa's active churches.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Church essential", tagColor: "bg-purple-100 text-purple-700", why: "These are living places of worship, not museum pieces — dress accordingly." },
    { name: "Comfortable Walking Shoes", description: "For walking between the churches spread across the Old Goa complex.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "The site covers a fair walking distance between its main churches." },
    { name: "Sun Hat", description: "Old Goa is an outdoor, exposed heritage site with limited shade between buildings.", price: "₹399", rating: 4.3, reviews: "4.0k", image: "👒", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "There's real sun exposure walking the grounds between churches." },
    { name: "Camera", description: "For the churches' facades and interiors, and the surrounding historic grounds.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Heritage essential", tagColor: "bg-forest-100 text-forest-700", why: "The architecture here is genuinely significant and photogenic." },
  ],
}];

export default function OldGoaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Colonial-era church heritage representative of Old Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Old Goa", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Old Goa", "Heritage", "Basilica of Bom Jesus", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Old Goa Travel Guide: Basilica of Bom Jesus & UNESCO Churches
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A cluster of UNESCO World Heritage churches from Goa's days as the "Rome of the East," including the tomb of St. Francis Xavier.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Old Goa, Goa" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Old Goa?</h2>
                  <p>
                    <strong>Old Goa (Velha Goa)</strong> was the capital of Portuguese India, a wealthy colonial
                    city historically nicknamed the "Rome of the East" for its remarkable density of grand
                    churches. Today, a cluster of those churches and convents forms a UNESCO World Heritage
                    Site — one of the most significant concentrations of 16th-17th century Portuguese colonial
                    religious architecture anywhere in the world.
                  </p>
                  <p>
                    At its heart is the <strong>Basilica of Bom Jesus</strong>, which holds the remains of
                    St. Francis Xavier and remains an active pilgrimage site for Catholics from across the
                    world, alongside the equally significant Sé Cathedral.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛪</span> Old Goa at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "⛪", label: "Key Site", value: "Basilica of Bom Jesus" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🏛️", label: "Status", value: "UNESCO World Heritage Site" },
                        { icon: "📍", label: "From Panjim", value: "~10km" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Old Goa</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for walking the exposed grounds between churches." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat makes the outdoor walking less comfortable — visit early in the day if you go now." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Rain is frequent but the churches remain open — bring a rain layer if visiting this season." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for a full walking tour of the church complex.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Old Goa</h2>
                  <ul>
                    <li><strong>By Road:</strong> About 10km from Panjim (cross-reference that guide, the natural base for a visit), a short and straightforward drive.</li>
                    <li><strong>By Air:</strong> Dabolim (Goa International) or Manohar International (Mopa) are the nearest airports, both requiring an onward road journey to Panjim/Old Goa.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine an Old Goa morning with a Panjim afternoon exploring Fontainhas — the two pair naturally into a single satisfying day.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See in Old Goa</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Historic church architecture at Old Goa" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Basilica of Bom Jesus:</strong> Holds the remains of St. Francis Xavier, exposed for public veneration only during a decennial exposition.</li>
                    <li><strong>Sé Cathedral:</strong> One of Asia's largest churches, notable for its distinctive single-tower facade after lightning damaged the other tower.</li>
                    <li><strong>Church of St. Francis of Assisi:</strong> Houses the Archaeological Museum, with artifacts from Goa's colonial history.</li>
                    <li><strong>Church of Our Lady of the Rosary and Chapel of St. Catherine:</strong> Additional heritage churches within the complex, less crowded than the main two.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Old Goa</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in nearby Panjim"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Riverside mid-range hotels in Panjim"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Premium heritage-district stays in Panjim"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Old Goa has essentially no dedicated tourist accommodation — Panjim is the natural base.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Old Goa</h2>
                  <ul>
                    <li><strong>Panjim's cafes and restaurants:</strong> The nearby capital offers a full range of Goan and multi-cuisine options.</li>
                    <li><strong>Goan-Portuguese sweets:</strong> Bebinca and other traditional desserts, worth seeking out in Panjim.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Old Goa Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Church Complex Walk", color: "bg-amber-700", activities: ["Start at Basilica of Bom Jesus", "Visit Sé Cathedral", "Church of St. Francis of Assisi and Archaeological Museum", "Optional: Church of Our Lady of the Rosary"] },
                      { day: "Afternoon", title: "Panjim", color: "bg-forest-600", activities: ["Short drive to Panjim", "Explore Fontainhas Latin Quarter", "Lunch and riverfront walk"] },
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
                          ["Church/museum entry fees", "₹100", "₹300"],
                          ["Local transport", "₹300", "₹800"],
                          ["Food", "₹300", "₹800"],
                          ["Half-day total", "₹700", "₹1,900"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes accommodation (stay in Panjim) and flights/trains to Goa.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Old Goa</h2>
                  <ul>
                    <li><strong>Dress modestly:</strong> Covered shoulders and knees for all church visits.</li>
                    <li><strong>Combine with Panjim:</strong> The natural base and a short drive away.</li>
                    <li><strong>Verify the exposition schedule:</strong> If St. Francis Xavier's veneration specifically interests you, check current timing — it happens roughly once a decade.</li>
                    <li><strong>Visit in the morning:</strong> Cooler temperatures for the outdoor walking between churches.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly for all church visits", "Combine with Panjim as a single day trip", "Visit in the morning for cooler temperatures", "Hire a guide for historical context if interested", "Check current opening hours before visiting"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear beachwear into the church complex", "Visit expecting to see St. Francis Xavier's remains exposed on any given trip", "Skip Panjim if you have the afternoon free", "Visit at peak midday heat in summer months", "Treat it as a museum rather than an active place of worship"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Old Goa", "Heritage", "Basilica of Bom Jesus", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={OLDGOA_GEAR} destination="Old Goa" />
              <RelatedPostsGrid currentSlug="old-goa-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="old-goa-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
