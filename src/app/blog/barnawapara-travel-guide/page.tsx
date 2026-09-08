// src/app/blog/barnawapara-travel-guide/page.tsx
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
  title: "Barnawapara Wildlife Sanctuary Travel Guide: Safari Near Raipur",
  description:
    "The complete Barnawapara Wildlife Sanctuary travel guide. Leopard and sloth bear safaris, jeep permits, where to stay, best time to visit, and a full itinerary for this quiet Chhattisgarh sanctuary near Raipur.",
  keywords:
    "Barnawapara Wildlife Sanctuary travel guide, Barnawapara safari, leopard safari Chhattisgarh, wildlife sanctuary near Raipur, best time to visit Barnawapara, how to reach Barnawapara",
  openGraph: {
    title: "Barnawapara Wildlife Sanctuary Travel Guide: Safari Near Raipur",
    description: "A leopard and sloth-bear sanctuary close enough to Raipur for a weekend safari, without the crowds of India's bigger reserves — the complete guide to Barnawapara.",
    url: "https://club.kudozz.in/blog/barnawapara-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/hero.jpg", width: 1200, height: 630, alt: "Forest landscape representative of Barnawapara Wildlife Sanctuary, Chhattisgarh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barnawapara Wildlife Sanctuary Travel Guide: Safari Near Raipur",
    description: "A leopard and sloth-bear sanctuary near Raipur, without the crowds of bigger reserves — the complete guide to Barnawapara.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/barnawapara-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Barnawapara Wildlife Sanctuary Travel Guide: Safari Near Raipur",
          description: "The complete Barnawapara Wildlife Sanctuary travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/barnawapara-travel-guide" },
          about: { "@type": "Place", name: "Barnawapara Wildlife Sanctuary", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Barnawapara Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Are there tigers at Barnawapara?", a: "No — Barnawapara is a leopard and sloth-bear sanctuary, not a tiger reserve. If tiger sightings are your priority, Kanha or Bandhavgarh in neighbouring Madhya Pradesh are better suited to that goal." },
  { q: "How far is Barnawapara from Raipur?", a: "Roughly 90km, making it a genuinely manageable weekend safari trip for Raipur-based travelers without the longer distance to Central India's bigger reserves." },
  { q: "What is the best time to visit Barnawapara?", a: "November to June is the general safari season, with November to February most comfortable for the safari itself. The sanctuary is typically closed roughly July to October for monsoon — verify current closure dates." },
  { q: "How do I book a safari at Barnawapara?", a: "Permits and gypsy hire are arranged through the Chhattisgarh Forest Department — book in advance, especially for weekend visits, and verify the current booking process before you go." },
  { q: "What wildlife can I realistically expect to see?", a: "Leopards, sloth bears, chital and sambar deer, and diverse birdlife are all present, though sightings — especially of leopards and sloth bears — are never guaranteed on any single safari, as with any wildlife sanctuary." },
  { q: "How many days do I need?", a: "One to two days, covering one or two safaris, is typical for most visitors." },
  { q: "What is the budget for a trip to Barnawapara?", a: "A budget traveler can manage on roughly ₹1,500 a day including a shared safari, a mid-range trip closer to ₹3,500 a day." },
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
  { id: "introduction", title: "Why Barnawapara?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Barnawapara", level: 2 },
  { id: "safari-zones", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BARNAWAPARA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a quieter, lower-key safari destination",
    emoji: "🐆",
    items: [
      { name: "Binoculars", description: "For spotting leopards, deer, and birdlife across Barnawapara's forest terrain.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "A quieter sanctuary rewards patient, close observation more than a crowded reserve does." },
      { name: "Neutral/Khaki Clothing", description: "Standard safari practice — less disruptive to wildlife and appropriate for open-jeep safaris.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-forest-100 text-forest-700", why: "Bright colors are more disruptive to wildlife sightings and stand out in the forest." },
      { name: "Telephoto Camera / Lens", description: "For photographing wildlife at a safe, respectful distance across the sanctuary's forest terrain.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A longer lens makes a real difference on any wildlife safari, especially a quieter one like this." },
      { name: "Sun Protection & Insect Repellent", description: "Open-jeep safaris mean direct sun and insect exposure across the visit.", price: "₹599", rating: 4.4, reviews: "5.0k", image: "🧴", affiliateUrl: amazonSearchUrl("sunscreen+insect+repellent+combo"), tag: "Safari essential", tagColor: "bg-sky-100 text-sky-700", why: "Morning and afternoon safaris both involve extended time exposed to sun and insects." },
    ],
  },
];

export default function BarnawaparaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/hero.jpg" alt="Forest landscape representative of Barnawapara Wildlife Sanctuary, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Barnawapara", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Barnawapara", "Wildlife Sanctuary", "Adventure", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Barnawapara Wildlife Sanctuary Travel Guide: Safari Near Raipur
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A leopard and sloth-bear sanctuary close enough to Raipur for a weekend safari, without the crowds of India's bigger reserves.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Barnawapara, Chhattisgarh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Barnawapara?</h2>
                  <p>
                    <strong>Barnawapara Wildlife Sanctuary</strong> is Chhattisgarh's most convenient safari destination for Raipur-based travelers — a forested reserve roughly 90km from the state capital, home to leopards, sloth bears, chital, sambar, and rich birdlife. It's worth being upfront about what it isn't: this is not a tiger reserve, and travelers hoping for a Kanha- or Bandhavgarh-style tiger safari should look to those parks instead.
                  </p>
                  <p>
                    What Barnawapara offers instead is a genuinely lower-key, less crowded safari experience — good for a weekend trip without the longer travel time and higher costs of Central India's marquee reserves.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐆</span> Barnawapara at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🐆", label: "Known For", value: "Leopards & sloth bears" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Raipur (~90km)" },
                        { icon: "🚫", label: "Note", value: "Not a tiger reserve" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Barnawapara</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable conditions for safaris, generally the most popular window." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but active", text: "Wildlife tends to concentrate near remaining water sources as temperatures rise." },
                      { season: "Jul – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — typically closed", text: "Most Indian sanctuaries close or restrict access during monsoon for regeneration — verify current closure dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window for safaris, though verify current park opening/closure dates before booking.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Barnawapara</h2>
                  <ul>
                    <li><strong>By Air/Rail:</strong> Raipur is the nearest airport and railway hub, about 90km away.</li>
                    <li><strong>By Road:</strong> Straightforward road access from Raipur, the standard approach for a day trip or overnight stay.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book safari permits through the Chhattisgarh Forest Department in advance, especially for weekend visits.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/hero.jpg" alt="Forest safari terrain at Barnawapara" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Leopards:</strong> The sanctuary's headline predator species — sightings are possible but not guaranteed on any single safari.</li>
                    <li><strong>Sloth bears:</strong> Present alongside leopards, adding to the wildlife interest.</li>
                    <li><strong>Chital and sambar deer:</strong> Regularly spotted across the sanctuary's forest and grassland areas.</li>
                    <li><strong>Birdlife:</strong> Diverse resident and seasonal bird species throughout the reserve.</li>
                    <li><strong>Jeep safaris:</strong> The standard way to explore, run through the Chhattisgarh Forest Department with advance booking.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Barnawapara</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Forest Department rest houses (advance booking required)", "Basic guesthouses nearby"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed lodges near the sanctuary"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Most travelers stay in Raipur and day-trip instead, given limited luxury options nearby"] },
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
                  <h2>What to Eat Near Barnawapara</h2>
                  <ul>
                    <li><strong>Lodge-served meals:</strong> Simple vegetarian and non-vegetarian meals at most Forest Department rest houses and guesthouses.</li>
                    <li><strong>Chhattisgarhi thalis:</strong> Available in nearby towns for a more local flavor.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Barnawapara Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Raipur", "Check in near the sanctuary", "Afternoon safari"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari", "Late morning departure", "Return to Raipur"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹350", "₹800"],
                          ["Safari/gypsy hire", "₹1,200", "₹2,500"],
                          ["Daily total", "₹1,500", "₹3,500"],
                          ["2-Day trip total", "₹3,000", "₹7,000"],
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
                  <h2>Essential Travel Tips for Barnawapara</h2>
                  <ul>
                    <li><strong>Set realistic expectations:</strong> This is not a tiger reserve — go for leopards, sloth bears, and a quieter safari experience.</li>
                    <li><strong>Book permits in advance:</strong> Especially for weekend visits from Raipur.</li>
                    <li><strong>Verify current park opening dates:</strong> Monsoon closures typically apply, check current status.</li>
                    <li><strong>Dawn safaris tend to have better sighting odds:</strong> Plan your safari timing accordingly.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safari permits ahead through the Forest Department", "Set realistic expectations — leopards and sloth bears, not tigers", "Choose an early morning safari for better sighting odds", "Wear neutral clothing", "Verify current park opening/closure dates"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect tiger sightings — this is not a tiger reserve", "Show up without booking safari permits", "Wear bright colors on safari", "Visit during monsoon without checking closure dates", "Overlook Kanha/Bandhavgarh if tigers are your priority"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Barnawapara", "Wildlife Sanctuary", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BARNAWAPARA_GEAR} destination="Barnawapara" />
              <RelatedPostsGrid currentSlug="barnawapara-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="barnawapara-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
