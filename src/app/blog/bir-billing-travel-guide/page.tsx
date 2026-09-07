// src/app/blog/bir-billing-travel-guide/page.tsx
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
  title: "Bir Billing Travel Guide: Paragliding Capital of India",
  description:
    "The complete Bir Billing travel guide. Tandem paragliding, Billing takeoff site, Bir's Tibetan colony, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Bir Billing travel guide, Bir paragliding, Billing takeoff site, Bir Tibetan colony, best time for paragliding Bir Billing, how to reach Bir Billing, Himachal Pradesh paragliding",
  openGraph: {
    title: "Bir Billing Travel Guide: Paragliding Capital of India",
    description: "The takeoff and landing sites that make this Himachal village the paragliding capital of India, plus a quiet Tibetan monastery settlement below — the complete guide to Bir Billing.",
    url: "https://club.kudozz.in/blog/bir-billing-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/spiti-valley/spiti-valley.jpg", width: 1200, height: 630, alt: "Mountain valley representative of Bir Billing, Himachal Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bir Billing Travel Guide: Paragliding Capital of India",
    description: "Tandem paragliding and Tibetan culture — the complete guide to Bir Billing.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/bir-billing-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Bir Billing Travel Guide: Paragliding Capital of India",
      description: "The complete Bir Billing travel guide.",
      image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bir-billing-travel-guide" },
      about: { "@type": "Place", name: "Bir Billing", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Bir Billing Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Bir Billing?", a: "One day is enough for a tandem paragliding flight; two days lets you also spend time in Bir's Tibetan colony and try a monastery visit or cafe-hopping at a relaxed pace." },
  { q: "What is the best time for paragliding at Bir Billing?", a: "October–November and March–May are generally cited as the best wind-condition windows, though flying happens across a wider season depending on daily weather — verify current-day flying conditions with your operator." },
  { q: "How do I reach Bir Billing?", a: "The nearest airport is Kangra/Gaggal (~65km). Baijnath Paprola is the nearest railway station (~15km, narrow-gauge line). Road access is via Mandi or Palampur." },
  { q: "Is paragliding at Bir Billing safe?", a: "Book only certified, licensed operators — safety standards vary between operators. Flights are weather-dependent and can be cancelled or postponed day-of for safety, which is normal and expected." },
  { q: "Do I need prior experience to paraglide?", a: "No — tandem flights are flown with a certified pilot and require no prior experience, just closed-toe shoes and a reasonable comfort with heights." },
  { q: "What is the budget for a trip to Bir Billing?", a: "A budget traveler can manage on roughly ₹1,800 a day excluding the paragliding flight itself, which is typically a separate cost varying by flight duration and package." },
  { q: "Is Bir Billing only about paragliding?", a: "No — Bir's Tibetan colony, its monasteries, and its growing cafe and yoga/meditation retreat scene give the town a genuinely calm, spiritually-oriented character distinct from the adventure-sports activity up at Billing." },
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
  { id: "introduction", title: "Why Bir Billing?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bir Billing", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BIR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for paragliding and Bir's cafe-and-monastery pace", emoji: "🪂",
  items: [
    { name: "Closed-Toe Sports Shoes", description: "Required for paragliding — most operators won't fly you in sandals or flip-flops.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("closed+toe+sports+shoes"), tag: "Paragliding essential", tagColor: "bg-red-100 text-red-700", why: "This is a hard requirement at every certified paragliding operator, not just a suggestion." },
    { name: "Light Warm Layer", description: "Billing's takeoff altitude (~2,400m) is genuinely cold even when Bir village below feels mild.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Altitude essential", tagColor: "bg-sky-100 text-sky-700", why: "Many first-timers are surprised by the temperature difference between Bir and Billing." },
    { name: "Action Camera / GoPro Mount", description: "If you want your own flight footage rather than relying on the operator's paid photo package.", price: "₹4,999+", rating: 4.5, reviews: "2.4k", image: "📷", affiliateUrl: amazonSearchUrl("action+camera+mount"), tag: "Optional", tagColor: "bg-purple-100 text-purple-700", why: "Operator photo/video packages add up — bringing your own can be cheaper over a full trip." },
    { name: "Sunglasses", description: "Direct sun exposure at altitude during the flight and on the takeoff site.", price: "₹599", rating: 4.4, reviews: "6.1k", image: "🕶️", affiliateUrl: amazonSearchUrl("sunglasses+travel+outdoor"), tag: "Flight essential", tagColor: "bg-amber-100 text-amber-700", why: "Wind and sun exposure during the flight is more intense than it looks from the ground." },
  ],
}];

export default function BirBillingGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Mountain valley representative of Bir Billing, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bir Billing", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bir Billing", "Paragliding", "Adventure", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bir Billing Travel Guide: Paragliding Capital of India
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The takeoff and landing sites that make this Himachal village the paragliding capital of India, plus a quiet Tibetan monastery settlement below.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bir Billing, Himachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Bir Billing?</h2>
                  <p>
                    <strong>Bir Billing</strong> is India's most recognized paragliding destination and a globally rated one — <strong>Billing</strong> is the high-altitude takeoff site at roughly 2,400m, and <strong>Bir</strong> is the landing village below, with numerous certified tandem operators running flights daily when conditions allow. The site has hosted the Paragliding World Cup, a genuine marker of how seriously it's regarded internationally.
                  </p>
                  <p>
                    But Bir has a quieter second identity too: it's home to a settled Tibetan colony with working monasteries, and a cafe and meditation-retreat scene that's grown up around it — the adventure-sports crowd up at Billing and the calmer spiritual pace down in Bir village coexist just a short drive apart.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🪂</span> Bir Billing at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🪂", label: "Known For", value: "Tandem paragliding" },
                        { icon: "🌡️", label: "Best Time", value: "Oct–Nov, Mar–May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kangra (~65km)" },
                        { icon: "⛰️", label: "Takeoff Altitude", value: "Billing, ~2,400m" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800+ (excl. flight)" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bir Billing</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Nov", emoji: "🍂", color: "bg-amber-50 border-amber-200", mood: "Prime paragliding window", text: "Generally cited as one of the best periods for stable wind conditions — verify current-day status with operators." },
                      { season: "Mar – May", emoji: "🌸", color: "bg-orange-50 border-orange-200", mood: "Also strong", text: "A second good window before summer heat and monsoon set in." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — limited flying", text: "Rain and cloud cover regularly ground flights during this stretch." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, variable", text: "Flying is possible but weather is less predictable and Billing's takeoff can be genuinely cold." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Book paragliding flexibly around your dates — even in the best months, day-of flying is genuinely weather-dependent.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bir Billing</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kangra/Gaggal Airport, about 65km away.</li>
                    <li><strong>By Train:</strong> Baijnath Paprola, roughly 15km away, on a narrow-gauge line.</li>
                    <li><strong>By Road:</strong> Accessible via Mandi or Palampur, both well-connected to broader Himachal road networks.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book your paragliding operator ahead of arrival, but confirm the actual flight time only once you're there and can check real-time weather.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Bir Billing</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Mountain scenery around Bir Billing" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tandem paragliding:</strong> The headline activity — flights depart from Billing and land in Bir, with certified pilots handling the flying.</li>
                    <li><strong>Bir's Tibetan colony:</strong> Working monasteries and a genuine Tibetan refugee community, distinct from the adrenaline scene up at Billing.</li>
                    <li><strong>Deer Park Institute:</strong> A centre for the study of classical Indian wisdom traditions, an unusual and notable local institution.</li>
                    <li><strong>Chougan:</strong> A large open ground in Bir village used for cultural and religious events.</li>
                    <li><strong>Cafe and yoga scene:</strong> A growing cluster of cafes and meditation retreats reflecting Bir's dual adventure-and-spiritual identity.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Bir Billing</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Guesthouses in Bir village", "Backpacker hostels near the Tibetan colony"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Boutique cafes-with-rooms", "Mid-range hotels near Chougan"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium mountain-view resorts", "Retreat-style luxury stays"] },
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
                  <h2>What to Eat in Bir Billing</h2>
                  <ul>
                    <li><strong>Tibetan momos and thukpa:</strong> Widely available given Bir's Tibetan colony.</li>
                    <li><strong>Cafe menus:</strong> An international mix reflecting Bir's paragliding and retreat-tourist crowd.</li>
                    <li><strong>Himachali thalis:</strong> Simple local vegetarian meals at guesthouses.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bir Billing Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Paragliding Day", color: "bg-amber-700", activities: ["Arrive, check in", "Morning/afternoon: tandem paragliding flight (weather permitting)", "Evening: explore Bir village and cafes"] },
                      { day: "Day 2", title: "Tibetan Colony & Departure", color: "bg-forest-600", activities: ["Morning: visit monasteries in the Tibetan colony", "Late morning: Deer Park Institute", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹800", "₹3,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Tandem paragliding flight", "₹2,500", "₹4,500"],
                          ["2-Day trip total (incl. 1 flight)", "₹6,900", "₹15,300"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Paragliding cost varies significantly by flight duration and operator.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bir Billing</h2>
                  <ul>
                    <li><strong>Book only certified operators:</strong> Verify licensing — safety standards genuinely vary.</li>
                    <li><strong>Stay flexible on flight timing:</strong> Weather can delay or cancel flights day-of, which is normal.</li>
                    <li><strong>Pack for cold at altitude:</strong> Billing's takeoff site is colder than Bir village.</li>
                    <li><strong>Spend time beyond the flight:</strong> Bir's Tibetan colony is worth a proper visit, not just a drive-through.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a certified, licensed paragliding operator", "Wear closed-toe shoes for the flight", "Pack warm layers for Billing's altitude", "Visit Bir's Tibetan colony beyond just flying", "Stay flexible on exact flight timing"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book an unlicensed or unverified paragliding operator", "Wear open-toe footwear expecting to still fly", "Assume flights are guaranteed regardless of weather", "Skip visiting Bir village beyond the flight", "Underestimate the cold at Billing's takeoff altitude"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bir Billing", "Paragliding", "Adventure", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BIR_GEAR} destination="Bir Billing" />
              <RelatedPostsGrid currentSlug="bir-billing-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="bir-billing-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
