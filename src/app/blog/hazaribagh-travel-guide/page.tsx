// src/app/blog/hazaribagh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Hazaribagh Travel Guide: Wildlife Sanctuary & Hazaribagh Lake",
  description:
    "The complete Hazaribagh travel guide. Hazaribagh Wildlife Sanctuary, Hazaribagh Lake, Canary Hill viewpoint, where to stay, best time to visit, and a full itinerary through this cool Chotanagpur plateau town.",
  keywords:
    "Hazaribagh travel guide, Hazaribagh Wildlife Sanctuary, Hazaribagh Lake, Canary Hill, best time to visit Hazaribagh, how to reach Hazaribagh, Jharkhand hill towns, Chotanagpur Plateau",
  openGraph: {
    title: "Hazaribagh Travel Guide: Wildlife Sanctuary & Hazaribagh Lake",
    description: "A plateau hill town named for its 'thousand gardens', with a wildlife sanctuary and canyon views over the Damodar valley — the complete guide to Hazaribagh.",
    url: "https://club.kudozz.in/blog/hazaribagh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty plateau hills representative of Hazaribagh, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazaribagh Travel Guide: Wildlife Sanctuary & Hazaribagh Lake",
    description: "A cool plateau hill town with a wildlife sanctuary and Damodar valley views — the complete guide to Hazaribagh.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/hazaribagh-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Hazaribagh Travel Guide: Wildlife Sanctuary & Hazaribagh Lake",
          description: "The complete Hazaribagh travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/hazaribagh-travel-guide" },
          about: { "@type": "Place", name: "Hazaribagh", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Hazaribagh Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Hazaribagh?", a: "One to two days covers Hazaribagh Lake, Canary Hill, and a safari drive through the wildlife sanctuary at a comfortable pace." },
  { q: "What is the best time to visit Hazaribagh?", a: "October to March, when the plateau's naturally cooler climate is at its most pleasant — noticeably cooler than much of the surrounding plains." },
  { q: "How do I reach Hazaribagh?", a: "The nearest airport is Ranchi, about 90km away. Hazaribagh Road railway station is the nearest rail link, and road access from Ranchi is straightforward." },
  { q: "Will I definitely see wildlife at Hazaribagh Wildlife Sanctuary?", a: "Not guaranteed — sighting odds here are modest compared to bigger Central Indian reserves like Kanha or Bandhavgarh. Go for a pleasant forest drive and a chance of leopard or deer sightings, not a guaranteed encounter." },
  { q: "Is Hazaribagh similar to Netarhat?", a: "In spirit, yes — both are cooler Chotanagpur plateau hill towns — though Netarhat is more developed for tourism and better known. Hazaribagh is the quieter, less-visited alternative." },
  { q: "What is the budget for a trip to Hazaribagh?", a: "A budget traveler can manage on roughly ₹1,200 a day, a mid-range trip closer to ₹3,000 a day including a sanctuary safari." },
  { q: "Can Hazaribagh be combined with other Jharkhand destinations?", a: "Yes — it's within reasonable day-trip distance of Ranchi and can be worked into a broader Chotanagpur Plateau itinerary alongside Netarhat or Ranchi's waterfalls." },
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
  { id: "introduction", title: "Why Hazaribagh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hazaribagh", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const HAZARIBAGH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a cool plateau town and a sanctuary safari drive",
    emoji: "🌲",
    items: [
      { name: "Light Warm Layer", description: "Hazaribagh's elevation keeps mornings and evenings noticeably cooler than much of Jharkhand.", price: "₹1,299", rating: 4.4, reviews: "4.5k", image: "🧥", affiliateUrl: amazonSearchUrl("light+fleece+jacket+travel"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Cool mornings are a genuine feature of this plateau town, especially in winter." },
      { name: "Binoculars", description: "Given the sanctuary's modest sighting odds, binoculars help make the most of any distant wildlife spotted on a safari drive.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Sightings at Hazaribagh Wildlife Sanctuary tend to be more distant than at bigger reserves." },
      { name: "Comfortable Walking Shoes", description: "For walking up to Canary Hill's viewpoint and around Hazaribagh Lake.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Trek essential", tagColor: "bg-forest-100 text-forest-700", why: "Canary Hill's watchtower involves a short but genuine climb." },
      { name: "Camera / Zoom Lens", description: "For the Damodar valley views from the plateau edge and any wildlife spotted on safari.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("travel+camera+zoom+lens"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "The plateau viewpoints are Hazaribagh's most rewarding photo spots." },
    ],
  },
];

export default function HazaribaghGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty plateau hills representative of Hazaribagh, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Hazaribagh", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Hazaribagh", "Wildlife Sanctuary", "Off-beat", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Hazaribagh Travel Guide: Wildlife Sanctuary & Hazaribagh Lake
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A plateau hill town named for its "thousand gardens", with a wildlife sanctuary and canyon views over the Damodar valley.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Hazaribagh, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Hazaribagh?</h2>
                  <p>
                    <strong>Hazaribagh</strong> — a name that translates roughly to "thousand gardens" — sits on the Chotanagpur Plateau at an elevation that keeps it noticeably cooler than much of Jharkhand. It's a quieter, less-touristed counterpart to Netarhat: a plateau hill town with a wildlife sanctuary, a town lake, and a plateau-edge viewpoint that together make for a relaxed one- or two-day trip.
                  </p>
                  <p>
                    We'll be upfront: this isn't a headline wildlife destination like Kanha or Bandhavgarh, and the sanctuary's sighting odds are modest. What Hazaribagh offers instead is a genuinely pleasant forest drive, cool plateau air, and a low-key alternative to Jharkhand's better-known stops.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌲</span> Hazaribagh at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🌳", label: "Key Site", value: "Hazaribagh Wildlife Sanctuary" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Hazaribagh Road" },
                        { icon: "🏞️", label: "Viewpoint", value: "Canary Hill" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Hazaribagh</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear plateau weather — noticeably more comfortable than the surrounding plains, especially in December-January." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warm but tempered", text: "Warmer than winter, but the plateau's elevation still takes the edge off compared to lower-lying Jharkhand towns." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Green and lush, but forest trails and safari conditions become less predictable." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — Hazaribagh's cool plateau climate is at its best in these months.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Hazaribagh</h2>
                  <ul>
                    <li><strong>By Air:</strong> Ranchi is the nearest airport, about 90km away.</li>
                    <li><strong>By Train:</strong> Hazaribagh Road railway station is the nearest rail link.</li>
                    <li><strong>By Road:</strong> Road access is primarily via Ranchi, a straightforward drive.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Hazaribagh with a broader Chotanagpur Plateau route — it pairs naturally with a Ranchi visit or a longer trip that also takes in Netarhat.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Hazaribagh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Plateau forest and hills near Hazaribagh" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Hazaribagh Wildlife Sanctuary:</strong> A forested sanctuary with leopards, sambar deer, and other wildlife — go for the drive through the forest as much as any guaranteed sighting.</li>
                    <li><strong>Hazaribagh Lake:</strong> A town lake popular for boating and evening walks.</li>
                    <li><strong>Canary Hill:</strong> A viewpoint with a watchtower overlooking the town and surrounding plateau, a reliable sunset spot.</li>
                    <li><strong>Damodar valley viewpoints:</strong> Several points around the plateau edge offer wide views into the valley below.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Hazaribagh</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic hotels in town", "Simple lodges near the bus stand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed town hotels", "Forest-adjacent guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of premium stays — options here remain limited"] },
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
                  <h2>What to Eat in Hazaribagh</h2>
                  <ul>
                    <li><strong>Local Jharkhand thalis:</strong> Simple, hearty vegetarian and non-vegetarian meals at town eateries.</li>
                    <li><strong>Litti chokha:</strong> A regional staple worth seeking out — roasted wheat dumplings served with mashed spiced vegetables.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Hazaribagh Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Lake & Canary Hill", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Hazaribagh Lake boating and walk", "Evening: sunset at Canary Hill"] },
                      { day: "Day 2", title: "Wildlife Sanctuary Drive", color: "bg-forest-600", activities: ["Morning safari drive through Hazaribagh Wildlife Sanctuary", "Afternoon: rest, local market visit", "Departure"] },
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
                          ["Accommodation/night", "₹900", "₹2,500"],
                          ["Food/day", "₹350", "₹700"],
                          ["Sanctuary safari + transport", "₹500", "₹1,200"],
                          ["Daily total", "₹1,200", "₹3,000"],
                          ["2-Day trip total", "₹2,400", "₹6,000"],
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
                  <h2>Essential Travel Tips for Hazaribagh</h2>
                  <ul>
                    <li><strong>Manage sanctuary expectations:</strong> Go for the forest drive and cool air, not a guaranteed wildlife sighting.</li>
                    <li><strong>Catch Canary Hill at sunset:</strong> A reliable, low-effort highlight most travelers rate as the best single stop.</li>
                    <li><strong>Combine with a broader plateau route:</strong> Pairs well with Ranchi or Netarhat if you have more time.</li>
                    <li><strong>Carry warm layers:</strong> Mornings and evenings are cooler here than most of Jharkhand.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Take a safari drive through the wildlife sanctuary", "Catch sunset at Canary Hill", "Walk or boat around Hazaribagh Lake", "Carry a light warm layer for cool mornings", "Combine with a wider Chotanagpur Plateau trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect Kanha/Bandhavgarh-level tiger sightings", "Underestimate how cool mornings can get", "Skip Canary Hill — it's the town's best viewpoint", "Plan a multi-day trip around Hazaribagh alone", "Expect extensive luxury accommodation options"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Hazaribagh", "Wildlife Sanctuary", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={HAZARIBAGH_GEAR} destination="Hazaribagh" />
              <RelatedPostsGrid currentSlug="hazaribagh-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="hazaribagh-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
