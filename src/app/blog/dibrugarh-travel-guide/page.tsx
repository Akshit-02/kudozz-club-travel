// src/app/blog/dibrugarh-travel-guide/page.tsx
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
  title: "Dibrugarh Travel Guide: The Tea Capital of Assam",
  description:
    "The complete Dibrugarh travel guide. Tea garden tours, the Brahmaputra riverfront, gateway to Dibru-Saikhowa and Arunachal Pradesh, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Dibrugarh travel guide, Dibrugarh tea gardens, tea capital of Assam, Dibru-Saikhowa National Park, best time to visit Dibrugarh, how to reach Dibrugarh, Assam tea garden tour",
  openGraph: {
    title: "Dibrugarh Travel Guide: The Tea Capital of Assam",
    description: "A city surrounded by more tea gardens than anywhere else on Earth, and the practical gateway to Assam's easternmost wilderness — the complete guide to Dibrugarh.",
    url: "https://club.kudozz.in/blog/dibrugarh-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty tea garden landscape representative of Dibrugarh, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Dibrugarh Travel Guide: The Tea Capital of Assam", description: "Tea gardens and the gateway to Assam's easternmost wilderness — the complete guide to Dibrugarh.", images: ["/images/destinations/coorg/coorg.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/dibrugarh-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Dibrugarh Travel Guide: The Tea Capital of Assam",
      description: "The complete Dibrugarh travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dibrugarh-travel-guide" },
      about: { "@type": "Place", name: "Dibrugarh", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Dibrugarh Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Dibrugarh?", a: "One to two days covers the tea garden experience and riverfront comfortably. Most travelers use Dibrugarh as a base for a night or two before or after venturing further east." },
  { q: "What is the best time to visit Dibrugarh?", a: "October to March offers the most comfortable weather. This period also overlaps with tea harvest and processing activity of interest to visitors touring estates." },
  { q: "How do I reach Dibrugarh?", a: "Dibrugarh Airport (Mohanbari, DIB) has decent domestic connectivity, and Dibrugarh has a major railway station. Road access is via NH37." },
  { q: "Can I visit a working tea estate?", a: "Yes — several tea estates around Dibrugarh offer tours and some offer overnight stays, giving genuine hands-on insight into tea production from plucking to processing." },
  { q: "Why is Dibrugarh called the Tea Capital of Assam?", a: "The district around Dibrugarh has one of the highest densities of tea gardens anywhere in the world, part of the broader Assam tea belt known for its distinctive malty black tea." },
  { q: "Is Dibrugarh a good base for further travel?", a: "Yes — it's the practical eastern gateway to remote destinations like Dibru-Saikhowa National Park and, further afield, Namdapha National Park in Arunachal Pradesh." },
  { q: "What is the budget for a trip to Dibrugarh?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day. Tea-estate stays tend to sit at the higher end of the mid-range to luxury tiers." },
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
  { id: "introduction", title: "Why Dibrugarh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dibrugarh", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DIBRUGARH_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for tea garden tours and riverside walks", emoji: "🍃",
  items: [
    { name: "Comfortable Walking Shoes", description: "For walking through working tea gardens and along the Brahmaputra riverfront.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Tea garden paths and riverfront walks add up over a full day of exploring." },
    { name: "Light Rain Layer", description: "Upper Assam sees frequent showers even outside peak monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Tea country's humid climate means rain is a regular possibility." },
    { name: "Insect Repellent", description: "Tea gardens and riverside areas bring a real mosquito presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Comfort essential", tagColor: "bg-forest-100 text-forest-700", why: "Humid tea-garden terrain is prime mosquito habitat." },
    { name: "Camera", description: "For the tea garden landscapes and Brahmaputra riverfront views.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The rolling green tea estates are genuinely photogenic, especially at sunrise." },
  ],
}];

export default function DibrugarhGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty tea garden landscape representative of Dibrugarh, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dibrugarh", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dibrugarh", "Tea Gardens", "Destination Guide", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dibrugarh Travel Guide: The Tea Capital of Assam
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A city surrounded by more tea gardens than anywhere else on Earth, and the practical gateway to Assam's easternmost wilderness.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dibrugarh, Assam" },
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
                  <h2>Why Dibrugarh?</h2>
                  <p>
                    <strong>Dibrugarh</strong> is the commercial and cultural centre of Upper Assam, widely called the "Tea Capital of Assam" for the sheer density of tea gardens surrounding it — genuinely one of the world's most concentrated tea-growing regions, part of the Assam tea belt famous for its distinctive malty black tea.
                  </p>
                  <p>
                    Beyond tea, Dibrugarh functions as the practical eastern gateway to Assam's remoter wilderness — Dibru-Saikhowa National Park nearby, and further out, Namdapha National Park across the border in Arunachal Pradesh. The city briefly served as Assam's temporary capital during a WWII-era Japanese advance threat, a genuinely interesting historical footnote.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🍃</span> Dibrugarh at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🍃", label: "Known For", value: "Tea gardens" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Dibrugarh (DIB)" },
                        { icon: "🌊", label: "River", value: "Brahmaputra" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dibrugarh</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable, overlapping with tea harvest and processing season." },
                      { season: "Apr – Jun", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm, pre-monsoon", text: "Warmer but still workable, with tea gardens at their greenest as the growing season builds." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain is common — this is one of India's wetter regions during these months." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather that overlaps with the tea harvest and processing season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dibrugarh</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dibrugarh Airport (Mohanbari, DIB) has decent domestic connectivity.</li>
                    <li><strong>By Train:</strong> Dibrugarh has a major railway station.</li>
                    <li><strong>By Road:</strong> Well connected via NH37.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book a tea garden tour or stay in advance — the more established estates have limited daily visitor slots.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Dibrugarh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Tea garden landscape around Dibrugarh" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tea garden tours and stays:</strong> A hands-on way to see tea production from plucking to processing at working estates.</li>
                    <li><strong>Brahmaputra riverfront:</strong> Walks and ferry connections along the river.</li>
                    <li><strong>Dibru-Saikhowa National Park:</strong> A lesser-visited wildlife park nearby, worth the detour for adventurous travelers.</li>
                    <li><strong>Chowkidinghee area:</strong> The city's central commercial and cultural hub.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dibrugarh</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["City-centre guesthouses", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Mid-range city hotels", "Tea-estate bungalow stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Premium heritage tea-estate stays", "Upscale city hotels"] },
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
                  <h2>What to Eat in Dibrugarh</h2>
                  <ul>
                    <li><strong>Khar and tenga:</strong> Distinctive Assamese preparations widely available in the city.</li>
                    <li><strong>Assam tea:</strong> The obvious highlight given the region's tea heritage — try it fresh from an estate.</li>
                    <li><strong>Pitha:</strong> Traditional Assamese rice cakes, a good snack to try locally.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Dibrugarh Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Tea Gardens", color: "bg-amber-700", activities: ["Arrive, check in", "Full tea garden tour with tasting", "Evening: Brahmaputra riverfront walk"] },
                      { day: "Day 2", title: "City & Onward Travel", color: "bg-forest-600", activities: ["Morning: explore city centre", "Optional: half-day Dibru-Saikhowa trip", "Departure or onward travel"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹9,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Tea garden tour", "₹300", "₹800", "₹2,000"],
                          ["Daily total", "₹1,500", "₹4,000", "₹11,000"],
                          ["2-Day trip total", "₹3,000", "₹8,000", "₹22,000"],
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
                  <h2>Essential Travel Tips for Dibrugarh</h2>
                  <ul>
                    <li><strong>Book a tea garden tour ahead of arrival:</strong> The most established estates have limited slots.</li>
                    <li><strong>Use Dibrugarh as a practical eastern base:</strong> Good jumping-off point for Dibru-Saikhowa and beyond.</li>
                    <li><strong>Check current access to Dibru-Saikhowa:</strong> Verify current conditions if planning a dedicated visit.</li>
                    <li><strong>Carry rain gear:</strong> This is one of India's wetter regions.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a tea garden tour or stay in advance", "Walk the Brahmaputra riverfront at sunset", "Use Dibrugarh as your eastern-Assam base", "Try Assam tea fresh from an estate", "Carry rain gear year-round"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up at a tea estate without booking ahead", "Skip rain gear expecting dry weather", "Plan a Dibru-Saikhowa trip without checking current access", "Rush through — the tea estates reward unhurried time", "Forget insect repellent for humid garden walks"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dibrugarh", "Tea Gardens", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DIBRUGARH_GEAR} destination="Dibrugarh" />
              <RelatedPostsGrid currentSlug="dibrugarh-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="dibrugarh-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
