// src/app/blog/nalanda-travel-guide/page.tsx
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
  title: "Nalanda Travel Guide: Ruins of the World's Oldest University",
  description:
    "The complete Nalanda travel guide. The Nalanda Mahavihara ruins, the Archaeological Museum, Xuanzang Memorial Hall, where to stay, best time to visit, and a full itinerary through one of the world's earliest universities.",
  keywords:
    "Nalanda travel guide, Nalanda ruins, Nalanda Mahavihara, Nalanda University history, Xuanzang Memorial Hall, Nalanda Archaeological Museum, best time to visit Nalanda, how to reach Nalanda, Nalanda Rajgir day trip",
  openGraph: {
    title: "Nalanda Travel Guide: Ruins of the World's Oldest University",
    description: "The excavated remains of a residential university that once housed thousands of monks and scholars from across Asia, over a thousand years before Oxford existed — the complete guide to Nalanda.",
    url: "https://club.kudozz.in/blog/nalanda-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/virupaksha.jpg", width: 1200, height: 630, alt: "Ancient carved stone ruins representative of Nalanda Mahavihara, Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nalanda Travel Guide: Ruins of the World's Oldest University",
    description: "The ruins of one of the world's earliest universities — the complete guide to Nalanda.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/nalanda-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Nalanda Travel Guide: Ruins of the World's Oldest University",
      description: "The complete Nalanda travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/nalanda-travel-guide" },
      about: { "@type": "Place", name: "Nalanda", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Nalanda Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Nalanda?", a: "Nalanda is well covered in a single day, often combined with nearby Rajgir (~12km away) for a full-day Buddhist heritage circuit." },
  { q: "What is the best time to visit Nalanda?", a: "October to March offers cool, comfortable weather well suited to walking the extensive open-air ruins." },
  { q: "How do I reach Nalanda?", a: "The nearest airports are Patna (~90km) and Gaya (~95km). The nearest railway stations are Rajgir or Bihar Sharif, with straightforward road access from either." },
  { q: "Is Nalanda really the world's oldest university?", a: "It's widely cited among the oldest formal residential universities in the world, flourishing from roughly the 5th to 12th centuries CE — a genuinely early and significant institution of higher learning, though claims of being the single 'oldest' vary by definition." },
  { q: "What happened to Nalanda University?", a: "It was destroyed following invasions in the late 12th–13th century, a documented and significant turning point in its history. What remains today is the excavated archaeological site, not a functioning institution." },
  { q: "Should I hire a guide at Nalanda?", a: "Yes, it's genuinely worthwhile — the ruins span a large excavated area and a guide's context on the monastery and lecture-hall layout adds a lot to the visit." },
  { q: "What is the budget for a trip to Nalanda?", a: "As a day-trip destination, costs are modest — entry fees, a guide, and transport typically total well under ₹1,500 per person for the day, excluding transport to the region." },
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
  { id: "introduction", title: "Why Nalanda?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nalanda", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NALANDA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a day walking the excavated ruins", emoji: "📜",
  items: [
    { name: "Comfortable Walking Shoes", description: "The excavated site spans a large open area with uneven ancient brick paths.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Ruins essential", tagColor: "bg-amber-100 text-amber-700", why: "Ancient brick walkways and open ground make sturdy, comfortable footwear worthwhile." },
    { name: "Sun Hat", description: "Little shade across the open excavated grounds, especially in the middle of the day.", price: "₹399", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Sun essential", tagColor: "bg-sky-100 text-sky-700", why: "The ruins offer minimal shade across most of the site." },
    { name: "Reusable Water Bottle", description: "A full circuit of the ruins plus the museum takes a few hours with limited shops nearby.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities are limited right at the site itself." },
    { name: "Camera", description: "For the excavated monastery cells, stupas, and lecture halls — genuinely photogenic ancient architecture.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The scale and detail of the ruins reward good photography." },
  ],
}];

export default function NalandaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Ancient carved stone ruins representative of Nalanda Mahavihara, Bihar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Nalanda", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Nalanda", "UNESCO", "Buddhist Heritage", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Nalanda Travel Guide: Ruins of the World's Oldest University
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The excavated remains of a residential university that once housed thousands of monks and scholars from across Asia, over a thousand years before Oxford existed.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Nalanda, Bihar" },
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
                  <h2>Why Nalanda?</h2>
                  <p>
                    <strong>Nalanda Mahavihara</strong> was a residential Buddhist university that flourished from roughly the 5th to 12th centuries CE, widely cited among the world's oldest formal institutions of higher learning. At its peak, it reportedly drew thousands of monks and scholars from across Asia — China, Korea, Tibet, Central Asia — for study in Buddhist philosophy, logic, medicine, and more.
                  </p>
                  <p>
                    Today, extensive excavations have revealed a sprawling complex of monasteries, temples, and lecture halls, giving a genuinely detailed picture of how a residential academic community operated over a thousand years ago. It's a UNESCO World Heritage Site and, for history-minded travelers, one of Bihar's most rewarding stops.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>📜</span> Nalanda at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🏛️", label: "Key Site", value: "Nalanda Mahavihara (UNESCO)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Patna (~90km)" },
                        { icon: "📅", label: "Era", value: "5th – 12th century CE" },
                        { icon: "💰", label: "Budget/Day", value: "Under ₹1,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Nalanda</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather ideal for walking the extensive open-air ruins without shade." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat with little shade across the site — manageable with an early start, not ideal." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Rain can disrupt outdoor sightseeing at an open archaeological site." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — comfortable temperatures for the extensive walking a full visit involves.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Nalanda</h2>
                  <ul>
                    <li><strong>By Air:</strong> Patna (~90km) or Gaya (~95km) are the nearest airports.</li>
                    <li><strong>By Train:</strong> Rajgir or Bihar Sharif are the nearest railway stations.</li>
                    <li><strong>By Road:</strong> Straightforward access, commonly combined with Rajgir and Bodh Gaya on a Bihar Buddhist-heritage circuit.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Nalanda with Rajgir (just 12km away) for an easy, efficient one-day pairing.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Nalanda</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Excavated monastery ruins at Nalanda" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Nalanda Mahavihara ruins:</strong> The extensively excavated monastery and lecture-hall complex forming the core of the site.</li>
                    <li><strong>Nalanda Archaeological Museum:</strong> Excavated sculptures, seals, and artifacts from the site, on-site.</li>
                    <li><strong>Xuanzang Memorial Hall:</strong> Commemorating the 7th-century Chinese monk-traveler whose detailed records of Nalanda are a key historical source.</li>
                    <li><strong>Combine with Rajgir:</strong> Just 12km away, easily paired in a single day trip.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Nalanda</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,500/night", picks: ["Basic guesthouses in Rajgir", "Simple hotels in Bihar Sharif"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Mid-range hotels in Rajgir", "Comfortable stays in Bihar Sharif"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Better-appointed hotels in Rajgir — luxury options here are genuinely limited"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most visitors base in Rajgir given its stronger accommodation options and short distance to Nalanda.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Nalanda</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish, widely available at local eateries in Rajgir and Bihar Sharif.</li>
                    <li><strong>Sattu paratha:</strong> A protein-rich local staple, good for a quick meal between sites.</li>
                    <li><strong>Simple thalis:</strong> Standard vegetarian and non-vegetarian thalis at local restaurants.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Nalanda Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Nalanda Ruins", color: "bg-amber-700", activities: ["Arrive early to beat the heat and crowds", "Explore the Mahavihara ruins with a guide", "Visit the Archaeological Museum"] },
                      { day: "Afternoon", title: "Xuanzang Hall & Onward", color: "bg-forest-600", activities: ["Visit Xuanzang Memorial Hall", "Lunch in Rajgir", "Continue to Rajgir sightseeing or depart"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Estimate"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Entry fee", "₹100–₹300"],
                          ["Guide fee", "₹300–₹600"],
                          ["Local transport (day)", "₹500–₹1,000"],
                          ["Food (day)", "₹300–₹700"],
                        ].map(([exp, r], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{r}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Nalanda is a low-cost day trip, typically combined with Rajgir.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Nalanda</h2>
                  <ul>
                    <li><strong>Hire a guide:</strong> The layout of monastery cells, stupas, and lecture halls is much easier to appreciate with context.</li>
                    <li><strong>Start early:</strong> Beats both the heat and the biggest crowds.</li>
                    <li><strong>Combine with Rajgir:</strong> The short distance makes a single-day pairing efficient.</li>
                    <li><strong>Visit the museum:</strong> It rounds out the site visit with excavated artifacts.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a guide for context on the ruins", "Start early to avoid heat and crowds", "Visit the on-site Archaeological Museum", "Combine with Rajgir in the same day", "Carry water and sun protection"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Skip the guide and miss the historical context", "Visit at midday in peak summer without sun protection", "Expect shaded walkways across the site", "Rush through without visiting the museum", "Overlook Xuanzang Memorial Hall"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Nalanda", "UNESCO", "Buddhist Heritage", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NALANDA_GEAR} destination="Nalanda" />
              <RelatedPostsGrid currentSlug="nalanda-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="nalanda-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
