// src/app/blog/rann-of-kutch-travel-guide/page.tsx
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
  title: "Rann of Kutch Travel Guide: White Desert & Rann Utsav",
  description:
    "The complete Rann of Kutch travel guide. The White Rann salt desert, Rann Utsav tent city, Kalo Dungar, Kutchi craft villages, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Rann of Kutch travel guide, White Rann, Rann Utsav, Tent City Dhordo, Kalo Dungar, Kutch handicrafts, best time to visit Rann of Kutch, how to reach Rann of Kutch, Bhuj",
  openGraph: {
    title: "Rann of Kutch Travel Guide: White Desert & Rann Utsav",
    description: "A salt desert that turns silver-white under a full moon, and a month-long cultural festival that transforms it into a tent city every winter — the complete guide to the Rann of Kutch.",
    url: "https://club.kudozz.in/blog/rann-of-kutch-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "White salt desert representative of the Rann of Kutch, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rann of Kutch Travel Guide: White Desert & Rann Utsav",
    description: "The White Rann salt desert and Rann Utsav tent city — the complete guide to the Rann of Kutch.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/rann-of-kutch-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Rann of Kutch Travel Guide: White Desert & Rann Utsav",
          description: "The complete Rann of Kutch travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/rann-of-kutch-travel-guide" },
          about: { "@type": "Place", name: "Rann of Kutch", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Rann of Kutch Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need for the Rann of Kutch?", a: "Two to three days covers the White Rann, Kalo Dungar, and a couple of Kutchi craft villages comfortably. Add more time if attending Rann Utsav's full program of activities." },
  { q: "What is the best time to visit the Rann of Kutch?", a: "November to February, specifically. The Rann floods and becomes inaccessible outside the dry winter months, so this isn't a flexible-season destination — plan strictly within this window." },
  { q: "How do I reach the Rann of Kutch?", a: "Bhuj is the nearest major airport and railway station, roughly 80km from the main White Rann viewing areas near Dhordo. Road access from Bhuj is standard for all onward travel." },
  { q: "What is the Rann Utsav?", a: "A large government-organized cultural festival held roughly November through February, with a purpose-built tent city at Dhordo, cultural performances, Kutchi handicrafts, and desert safaris. Verify current-year dates and booking process before planning around it." },
  { q: "Is the White Rann worth visiting outside the Rann Utsav?", a: "Yes — the salt desert itself is accessible and worth visiting throughout the winter season independent of the festival, though the tent city and organized activities are specific to Rann Utsav dates." },
  { q: "What is the budget for a trip to the Rann of Kutch?", a: "Outside Rann Utsav, a budget traveler can manage on roughly ₹1,800 a day. Rann Utsav tent city accommodation is a distinct, pricier line item — verify current rates, as they vary significantly by tent category." },
  { q: "Is full-moon viewing worth planning around?", a: "Yes, if you can — the White Rann under a full moon is a genuinely striking sight and a specific highlight for many visitors, though it also means the busiest, most crowded viewing nights." },
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
  { id: "introduction", title: "Why the Rann of Kutch?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Rann of Kutch", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KUTCH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for salt-desert days and cold desert nights",
    emoji: "🏜️",
    items: [
      { name: "Warm Layers", description: "Desert nights drop sharply in temperature, even though days can be warm — essential for evening/night Rann visits.", price: "₹2,499", rating: 4.5, reviews: "4.7k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+jacket+desert+travel"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Full-moon night visits to the White Rann are genuinely cold once the sun sets." },
      { name: "Sun Protection (Hat + High-SPF Sunscreen)", description: "The salt flat's white surface reflects intense sunlight during the day.", price: "₹899", rating: 4.4, reviews: "5.2k", image: "🧴", affiliateUrl: amazonSearchUrl("high+spf+sunscreen+desert"), tag: "Daytime essential", tagColor: "bg-amber-100 text-amber-700", why: "Reflected sunlight off white salt is more intense than typical desert sun exposure." },
      { name: "Comfortable Walking Shoes", description: "For walking on the uneven salt-crust terrain at the Rann and craft village visits.", price: "₹1,999", rating: 4.4, reviews: "5.6k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Terrain essential", tagColor: "bg-sky-100 text-sky-700", why: "The salt surface can be uneven and occasionally sharp-edged in places." },
      { name: "Camera with Wide-Angle Lens", description: "For capturing the sheer scale and flatness of the White Rann.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("wide+angle+lens+camera+travel"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "The Rann's landscape is defined by scale — a wide-angle lens captures it far better than a standard one." },
    ],
  },
];

export default function RannOfKutchGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="White salt desert representative of the Rann of Kutch, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Rann of Kutch", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Rann of Kutch", "Rann Utsav", "Off-beat", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Rann of Kutch Travel Guide: White Desert & Rann Utsav
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A salt desert that turns silver-white under a full moon, and a month-long cultural festival that transforms it into a tent city every winter.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kutch, Gujarat" },
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
                  <h2>Why the Rann of Kutch?</h2>
                  <p>
                    The <strong>Great Rann of Kutch</strong> is one of the largest salt deserts in the world — a vast seasonal marsh that dries into a shimmering white salt flat during winter, creating a landscape genuinely unlike anywhere else in India. Under a full moon, the flat white surface takes on a silver glow that's become the region's signature image.
                  </p>
                  <p>
                    Every winter, the government-organized <strong>Rann Utsav</strong> transforms a stretch near Dhordo village into a purpose-built tent city, with Kutchi cultural performances, handicraft stalls, and desert safaris drawing visitors from across India and abroad.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏜️</span> Rann of Kutch at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🏜️", label: "Highlight", value: "White Rann salt desert" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb only" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhuj (~80km to Rann)" },
                        { icon: "🎪", label: "Signature Event", value: "Rann Utsav" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800+" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit the Rann of Kutch</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "🌕", color: "bg-amber-50 border-amber-200", mood: "Only accessible window", text: "The Rann floods seasonally and is inaccessible outside these months — this is not a flexible-season destination." },
                      { season: "Dec – Jan", emoji: "🎪", color: "bg-orange-50 border-orange-200", mood: "Rann Utsav peak", text: "The tent city and full festival program run through this stretch — verify current-year exact dates." },
                      { season: "Full-moon nights", emoji: "🌝", color: "bg-purple-50 border-purple-200", mood: "Signature viewing", text: "The most striking and most crowded nights to see the White Rann glow silver." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Important:</strong> This is strictly a winter destination — the Rann is genuinely flooded and inaccessible outside November–February.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach the Rann of Kutch</h2>
                  <ul>
                    <li><strong>By Air:</strong> Bhuj Airport is the nearest, roughly 80km from the main White Rann viewing areas near Dhordo.</li>
                    <li><strong>By Train:</strong> Bhuj is also the nearest major railway station.</li>
                    <li><strong>By Road:</strong> Road access from Bhuj is the standard route to the Rann and Rann Utsav tent city.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book Rann Utsav tent city stays well in advance — availability during peak dates (especially full-moon and holiday weekends) fills up fast.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at the Rann of Kutch</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Salt flat landscape near the Rann of Kutch" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The White Rann:</strong> The salt flat itself — best experienced at sunset or under a full moon.</li>
                    <li><strong>Rann Utsav tent city:</strong> Cultural performances, handicraft stalls, and desert safaris at the government-organized festival — verify current dates and booking process.</li>
                    <li><strong>Kalo Dungar (Black Hill):</strong> The highest point in Kutch, offering panoramic views over the Rann.</li>
                    <li><strong>Kutchi craft villages:</strong> Nearby settlements known for embroidery, block printing, and leatherwork — a genuinely significant artisan tradition.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near the Rann of Kutch</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,500/night", picks: ["Basic guesthouses in Bhuj", "Standard Rann Utsav tents (outside peak dates)"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,000–₹7,000/night", picks: ["Deluxe Rann Utsav tents", "Mid-range hotels in Bhuj"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Premium/AC Rann Utsav tents", "Higher-end Bhuj resorts"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Rann Utsav tent pricing varies significantly by category and season — confirm current rates directly before booking.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near the Rann of Kutch</h2>
                  <ul>
                    <li><strong>Kutchi thali:</strong> A regional variation on the Gujarati thali, with local specialties.</li>
                    <li><strong>Rann Utsav festival food stalls:</strong> A mix of Gujarati and pan-Indian street food during the festival.</li>
                    <li><strong>Bhuj local eateries:</strong> Simple, solid vegetarian dining in town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Rann of Kutch Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Bhuj & Craft Villages", color: "bg-amber-700", activities: ["Arrive Bhuj, check in", "Afternoon: visit nearby Kutchi craft villages", "Evening: rest before the Rann"] },
                      { day: "Day 2", title: "The White Rann", color: "bg-forest-600", activities: ["Morning: Kalo Dungar viewpoint", "Afternoon: transfer to the Rann Utsav area", "Evening: sunset/moonlit White Rann visit"] },
                      { day: "Day 3", title: "Festival & Departure", color: "bg-orange-600", activities: ["Morning: Rann Utsav cultural activities (if in season)", "Afternoon: departure back via Bhuj"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,200", "₹4,500", "₹12,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Rann entry + local transport", "₹500", "₹1,200", "₹2,500"],
                          ["Daily total", "₹2,100", "₹6,600", "₹16,500"],
                          ["3-Day trip total", "₹6,300", "₹19,800", "₹49,500"],
                        ].map(([exp, b, m, l], i) => (
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Costs are significantly higher during Rann Utsav's peak festival dates.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for the Rann of Kutch</h2>
                  <ul>
                    <li><strong>Visit only Nov–Feb:</strong> This is a hard seasonal constraint, not a preference.</li>
                    <li><strong>Book Rann Utsav accommodation early:</strong> Especially for full-moon and holiday weekends.</li>
                    <li><strong>Pack for both temperature extremes:</strong> Warm daytime, cold desert nights.</li>
                    <li><strong>Verify current Rann Utsav dates/booking process:</strong> These change year to year.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Time your visit strictly within Nov–Feb", "Book Rann Utsav tent stays well ahead", "Pack warm layers for cold desert nights", "Visit Kalo Dungar for panoramic Rann views", "Explore Kutchi craft villages for genuine local artistry"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip outside Nov–Feb", "Show up to Rann Utsav without booking ahead", "Underestimate how cold desert nights get", "Skip verifying current-year festival dates", "Walk far onto the salt flat without checking local guidance on safe areas"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Rann of Kutch", "Rann Utsav", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KUTCH_GEAR} destination="Rann of Kutch" />
              <RelatedPostsGrid currentSlug="rann-of-kutch-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="rann-of-kutch-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
