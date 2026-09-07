// src/app/blog/ahmedabad-travel-guide/page.tsx
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
  title: "Ahmedabad Travel Guide: Heritage Walk, Sabarmati Ashram & Food",
  description:
    "The complete Ahmedabad travel guide. Sabarmati Ashram, the old city heritage walk, Sidi Saiyyed Mosque, Manek Chowk street food, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Ahmedabad travel guide, Sabarmati Ashram, Ahmedabad heritage walk, Sidi Saiyyed Mosque, Manek Chowk, best time to visit Ahmedabad, how to reach Ahmedabad, Ahmedabad street food, Gujarat UNESCO heritage city",
  openGraph: {
    title: "Ahmedabad Travel Guide: Heritage Walk, Sabarmati Ashram & Food",
    description: "India's first UNESCO World Heritage City, home to Gandhi's ashram on the Sabarmati riverbank and a street-food scene that runs half the night — the complete guide to Ahmedabad.",
    url: "https://club.kudozz.in/blog/ahmedabad-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/hero.jpg", width: 1200, height: 630, alt: "Heritage city architecture representative of Ahmedabad, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmedabad Travel Guide: Heritage Walk, Sabarmati Ashram & Food",
    description: "Sabarmati Ashram, the old city heritage walk, and legendary street food — the complete guide to Ahmedabad.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/ahmedabad-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Ahmedabad Travel Guide: Heritage Walk, Sabarmati Ashram & Food",
          description: "The complete Ahmedabad travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/ahmedabad-travel-guide" },
          about: { "@type": "Place", name: "Ahmedabad", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Ahmedabad Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Ahmedabad?", a: "Two to three days covers Sabarmati Ashram, the old city heritage walk, and the main street-food circuit comfortably. Add a day if you want to visit the Calico Museum of Textiles or take a day trip to Modhera or Patan." },
  { q: "What is the best time to visit Ahmedabad?", a: "October to March offers the most comfortable weather. Summers (April–June) are extremely hot, and monsoon (July–September) brings humidity and occasional flooding in low-lying areas." },
  { q: "How do I reach Ahmedabad?", a: "Sardar Vallabhbhai Patel International Airport has strong domestic and growing international connectivity. Ahmedabad is also a major railway junction, well connected to all of Gujarat and beyond." },
  { q: "Is alcohol available in Ahmedabad?", a: "Gujarat has state-wide prohibition on alcohol. Visitors can apply for a temporary permit in some circumstances, but casual alcohol consumption isn't part of the local experience the way it is elsewhere in India — plan accordingly." },
  { q: "Do I need to book the heritage walk in advance?", a: "It's advisable, especially on weekends — the old-city heritage walk is popular and slots can fill up. Check current timings and booking process with the local tourism office." },
  { q: "What is the budget for a trip to Ahmedabad?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day. Street food keeps daily costs genuinely low even for a comfortable trip." },
  { q: "Is Ahmedabad good for a food-focused trip?", a: "Yes — it's one of India's best cities for vegetarian street food and thali culture, with Manek Chowk's night market and countless dhokla/khaman/fafda spots making it a genuine food destination in its own right." },
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
  { id: "introduction", title: "Why Ahmedabad?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ahmedabad", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AHMEDABAD_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the old city walk and Gujarati food trail",
    emoji: "🏛️",
    items: [
      { name: "Comfortable Walking Shoes", description: "The old city's pols are best explored on foot, with narrow lanes and uneven stone paths.", price: "₹1,999", rating: 4.4, reviews: "5.6k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Heritage-walk essential", tagColor: "bg-amber-100 text-amber-700", why: "Ahmedabad's old city is best experienced slowly, on foot, through its dense lanes." },
      { name: "Modest Clothing", description: "For visiting mosques, temples, and Sabarmati Ashram respectfully.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Religious-site essential", tagColor: "bg-purple-100 text-purple-700", why: "Several of Ahmedabad's key sights are active religious or memorial spaces." },
      { name: "Reusable Water Bottle", description: "Ahmedabad's dry heat, especially outside winter, makes hydration a real priority.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Heat essential", tagColor: "bg-sky-100 text-sky-700", why: "Long walking days in the old city add up fast in Gujarat's climate." },
      { name: "Sun Hat", description: "For daytime sightseeing, especially outside the cooler winter months.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel"), tag: "Sun essential", tagColor: "bg-forest-100 text-forest-700", why: "Ahmedabad's sun is intense for much of the year outside Oct-Mar." },
    ],
  },
];

export default function AhmedabadGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/hero.jpg" alt="Heritage city architecture representative of Ahmedabad, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Ahmedabad", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ahmedabad", "Sabarmati Ashram", "Heritage", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Ahmedabad Travel Guide: Heritage Walk, Sabarmati Ashram & Food
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              India's first UNESCO World Heritage City, home to Gandhi's ashram on the Sabarmati riverbank and a street-food scene that runs half the night.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Ahmedabad, Gujarat" },
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
                  <h2>Why Ahmedabad?</h2>
                  <p>
                    <strong>Ahmedabad</strong> was India's first city to be inscribed as a UNESCO World Heritage City, recognized for its walled old city — a dense weave of <em>pols</em>, traditional Gujarati residential clusters, where centuries of Hindu, Jain, and Islamic architecture sit side by side. It's also the city where Mahatma Gandhi built <strong>Sabarmati Ashram</strong>, his home for over a decade and the launch point of the 1930 Salt March.
                  </p>
                  <p>
                    Beyond the heritage, Ahmedabad is one of India's great food cities — a place where an evening at Manek Chowk's night market can genuinely rival any sit-down meal for pure enjoyment.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Ahmedabad at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🏛️", label: "Key Site", value: "Sabarmati Ashram" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Sardar Vallabhbhai Patel (AMD)" },
                        { icon: "🍽️", label: "Known For", value: "Street food & thalis" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Ahmedabad</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for extended walking in the old city." },
                      { season: "Oct & Mar", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Shoulder season", text: "Warmer but still workable, with fewer crowds than peak winter." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-red-50 border-red-200", mood: "Extreme heat", text: "Temperatures regularly exceed 40°C — a genuinely difficult season for extensive sightseeing." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Humid with heavy rain spells; some low-lying old-city areas can see localized flooding." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — the most comfortable window for walking the old city and enjoying evening street food without the heat working against you.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Ahmedabad</h2>
                  <ul>
                    <li><strong>By Air:</strong> Sardar Vallabhbhai Patel International Airport (AMD) has strong domestic connectivity and a growing set of international routes.</li>
                    <li><strong>By Train:</strong> A major railway junction with direct connections across Gujarat and to most major Indian cities.</li>
                    <li><strong>By Road:</strong> Well connected via NH48 and NH147, and a practical hub for onward travel across Gujarat.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Ahmedabad makes an efficient base for day trips to Modhera Sun Temple and Patan's Rani ki Vav (cross-reference the Patan guide) if you have an extra day.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Ahmedabad</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/hero.jpg" alt="Heritage architecture around Ahmedabad's old city" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sabarmati Ashram:</strong> Gandhi's residence for over a decade, now a museum documenting the independence movement and the 1930 Salt March.</li>
                    <li><strong>Old city heritage walk:</strong> A guided walk through the pols — traditional residential clusters with havelis, temples, and mosques layered over centuries.</li>
                    <li><strong>Sidi Saiyyed Mosque:</strong> Famous for its intricately carved stone lattice (jali) windows, a genuine architectural icon.</li>
                    <li><strong>Jama Masjid:</strong> A grand 15th-century mosque in the heart of the old city.</li>
                    <li><strong>Kankaria Lake:</strong> A redeveloped lakefront with a promenade, zoo, and evening activities.</li>
                    <li><strong>Calico Museum of Textiles:</strong> A significant textile heritage museum — verify current booking requirements before visiting.</li>
                    <li><strong>Manek Chowk night market:</strong> Ahmedabad's most famous street-food destination, active well into the night.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Ahmedabad</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹2,000/night", picks: ["Budget hotels near the old city", "Guesthouses close to the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Business hotels near SG Highway", "Boutique heritage-style stays in the old city"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Premium business hotels", "High-end heritage properties"] },
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
                  <h2>What to Eat in Ahmedabad</h2>
                  <p>Ahmedabad is one of India's great vegetarian food cities — this alone is worth a dedicated trip for food-focused travelers.</p>
                  <ul>
                    <li><strong>Manek Chowk night market:</strong> A sprawling street-food circuit active well past midnight, covering everything from pizza-dosa mashups to classic chaat.</li>
                    <li><strong>Dhokla and khaman:</strong> Steamed, fermented Gujarati snacks, best had fresh from a local stall.</li>
                    <li><strong>Fafda-jalebi:</strong> A classic sweet-and-savory breakfast combination.</li>
                    <li><strong>Gujarati thali:</strong> An elaborate, all-you-can-eat vegetarian spread, a genuine cultural institution here.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Ahmedabad Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Sabarmati Ashram & Riverfront", color: "bg-amber-700", activities: ["Morning: Sabarmati Ashram", "Afternoon: Sabarmati Riverfront walk", "Evening: Manek Chowk night market"] },
                      { day: "Day 2", title: "Old City Heritage Walk", color: "bg-forest-600", activities: ["Morning: guided pol heritage walk", "Afternoon: Sidi Saiyyed Mosque and Jama Masjid", "Evening: Kankaria Lake"] },
                      { day: "Day 3", title: "Museums & Departure", color: "bg-orange-600", activities: ["Morning: Calico Museum of Textiles (if booked)", "Late morning: final street-food rounds", "Afternoon: departure or day trip to Patan/Modhera"] },
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
                          ["Accommodation/night", "₹1,200", "₹4,000", "₹12,000"],
                          ["Food/day", "₹300", "₹800", "₹2,000"],
                          ["Local transport per day", "₹200", "₹600", "₹1,500"],
                          ["Daily total", "₹1,500", "₹4,000", "₹12,500"],
                          ["3-Day trip total", "₹4,500", "₹12,000", "₹37,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Ahmedabad</h2>
                  <ul>
                    <li><strong>Gujarat is a dry state:</strong> Alcohol is prohibited state-wide, with only limited exceptions — plan accordingly.</li>
                    <li><strong>Book the heritage walk ahead:</strong> Especially on weekends, given its popularity.</li>
                    <li><strong>Dress modestly at religious sites:</strong> Applies at mosques, temples, and Sabarmati Ashram.</li>
                    <li><strong>Verify Calico Museum booking requirements:</strong> Advance registration may be needed.</li>
                    <li><strong>Avoid peak summer:</strong> April–June heat is genuinely severe.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a guided old-city heritage walk", "Visit Sabarmati Ashram early in your trip", "Try Manek Chowk's night market", "Verify Calico Museum booking process ahead", "Plan around the winter cool season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect alcohol to be casually available", "Visit in peak summer without a heat plan", "Skip modest dress at religious sites", "Show up at the Calico Museum without checking booking rules", "Rush the old city — it rewards a slow walk"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Ahmedabad", "Sabarmati Ashram", "Heritage", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AHMEDABAD_GEAR} destination="Ahmedabad" />
              <RelatedPostsGrid currentSlug="ahmedabad-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="ahmedabad-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
