// src/app/blog/kamakhya-travel-guide/page.tsx
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
  title: "Kamakhya Temple Travel Guide: Shakti Peetha & Ambubachi Mela",
  description:
    "The complete Kamakhya Temple travel guide. History, the Ambubachi Mela festival, darshan timings, Nilachal Hill, where to stay, best time to visit, and practical tips.",
  keywords:
    "Kamakhya Temple travel guide, Kamakhya Guwahati, Shakti Peetha, Ambubachi Mela, Nilachal Hill temple, best time to visit Kamakhya, how to reach Kamakhya, Tantric temple Assam",
  openGraph: {
    title: "Kamakhya Temple Travel Guide: Shakti Peetha & Ambubachi Mela",
    description: "One of the most powerful Shakti Peethas in Hindu tradition, hosting an annual fertility festival unlike any other temple gathering in India — the complete guide to Kamakhya Temple.",
    url: "https://club.kudozz.in/blog/kamakhya-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Hilltop temple architecture representative of Kamakhya Temple, Guwahati" }],
  },
  twitter: { card: "summary_large_image", title: "Kamakhya Temple Travel Guide: Shakti Peetha & Ambubachi Mela", description: "A major Shakti Peetha and centre of Tantric worship on Nilachal Hill — the complete guide to Kamakhya Temple.", images: ["/images/destinations/jaisalmer/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/kamakhya-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Kamakhya Temple Travel Guide: Shakti Peetha & Ambubachi Mela",
      description: "The complete Kamakhya Temple travel guide.",
      image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kamakhya-travel-guide" },
      about: { "@type": "Place", name: "Kamakhya Temple", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Kamakhya Temple Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How much time do I need for Kamakhya Temple?", a: "A half-day is enough for darshan and a walk around Nilachal Hill's subsidiary shrines. Expect longer queues on weekends and considerably longer during the Ambubachi Mela." },
  { q: "What is the best time to visit Kamakhya?", a: "October to March is most comfortable for a general visit. The Ambubachi Mela, typically around June, is the temple's biggest festival — but also brings by far the heaviest crowds. Verify current-year dates before planning around either." },
  { q: "How do I reach Kamakhya Temple?", a: "The temple sits on Nilachal Hill within Guwahati city, easily reached by road or taxi from anywhere in town — no separate airport or railway journey is needed beyond reaching Guwahati itself." },
  { q: "What is the Ambubachi Mela?", a: "An annual festival, typically held around June, centred on the belief that the goddess undergoes a menstrual cycle during this period. The temple closes for several days before reopening with significant ritual and festivity, drawing enormous numbers of pilgrims and Tantric practitioners — genuinely one of India's most distinctive religious festivals." },
  { q: "Why is Kamakhya considered a centre of Tantric worship?", a: "The temple's inner sanctum centres on a natural rock formation rather than a conventional idol, associated in Hindu Shakta and Tantric tradition with the goddess's creative power. This distinctive worship practice has made Kamakhya one of India's most significant Tantric pilgrimage sites for centuries." },
  { q: "Is there a dress code at Kamakhya Temple?", a: "Modest dress is expected, as at most active Hindu temples. There's no unusually strict requirement beyond standard temple etiquette." },
  { q: "What is the budget for a visit to Kamakhya?", a: "The temple visit itself is low-cost — most of your budget will go toward standard Guwahati accommodation and transport, since this is typically a half-day add-on to a broader Guwahati stay." },
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
  { id: "introduction", title: "Why Kamakhya Temple?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kamakhya", level: 2 },
  { id: "top-attractions", title: "What to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KAMAKHYA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a temple visit on Nilachal Hill", emoji: "🛕",
  items: [
    { name: "Modest Cotton Clothing", description: "Standard, respectful attire for visiting an active, deeply significant Hindu temple.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Kamakhya is a major active pilgrimage site — modest dress is expected of every visitor." },
    { name: "Comfortable Walking Shoes", description: "For the hill climb/steps and walking between Kamakhya and its subsidiary shrines.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Hill-climb essential", tagColor: "bg-amber-100 text-amber-700", why: "Nilachal Hill involves genuine elevation gain between the temple complex's various shrines." },
    { name: "Small Bag for Shoes/Valuables", description: "Shoes are removed before entering the temple — a small bag keeps them secure while you're inside.", price: "₹299", rating: 4.3, reviews: "2.8k", image: "🎒", affiliateUrl: amazonSearchUrl("small+travel+pouch+bag"), tag: "Temple essential", tagColor: "bg-sky-100 text-sky-700", why: "Shoe storage at busy temples can be inconsistent — carrying your own bag is a simple, reliable workaround." },
    { name: "Reusable Water Bottle", description: "Useful for the queue and hill walk, especially in warmer months.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Queue essential", tagColor: "bg-forest-100 text-forest-700", why: "Weekend and festival queues can run long — staying hydrated matters." },
  ],
}];

export default function KamakhyaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Hilltop temple architecture representative of Kamakhya Temple, Guwahati" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kamakhya Temple", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kamakhya Temple", "Shakti Peetha", "Heritage", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kamakhya Temple Travel Guide: Shakti Peetha & Ambubachi Mela
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of the most powerful Shakti Peethas in Hindu tradition, hosting an annual festival unlike any other temple gathering in India.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Nilachal Hill, Guwahati" },
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
                  <h2>Why Kamakhya Temple?</h2>
                  <p>
                    <strong>Kamakhya Temple</strong> sits on Nilachal Hill overlooking Guwahati, and is one of the most significant Shakti Peethas — sites associated with the Sati legend — in Hindu tradition, as well as a major centre of Tantric worship in India. The temple's inner sanctum is genuinely distinctive: rather than a conventional idol, worship centres on a natural rock formation associated with the goddess's creative power, a theology worth understanding respectfully before your visit.
                  </p>
                  <p>
                    The temple's biggest event, the Ambubachi Mela, is one of the most distinctive religious festivals in India — drawing enormous crowds of pilgrims and Tantric practitioners each year.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Kamakhya at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Nilachal Hill, Guwahati, Assam" },
                        { icon: "🛕", label: "Significance", value: "Shakti Peetha, Tantric centre" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar (general visit)" },
                        { icon: "🎉", label: "Major Festival", value: "Ambubachi Mela (~June)" },
                        { icon: "🚗", label: "Access", value: "Within Guwahati city" },
                        { icon: "💰", label: "Budget", value: "Low-cost temple visit" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kamakhya</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best for general visits", text: "Cool, comfortable weather and manageable crowds outside major festival dates." },
                      { season: "~June", emoji: "🎉", color: "bg-purple-50 border-purple-200", mood: "Ambubachi Mela", text: "The temple's biggest annual festival, but also by far its heaviest crowds — verify current-year dates and plan logistics carefully." },
                      { season: "Weekends year-round", emoji: "🚶", color: "bg-sky-50 border-sky-200", mood: "Busier", text: "Expect longer queues on weekends compared to weekdays, regardless of season." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> A weekday visit between October and March for the calmest darshan experience.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kamakhya</h2>
                  <ul>
                    <li><strong>Within Guwahati:</strong> The temple is on Nilachal Hill, easily reached by taxi or auto-rickshaw from anywhere in the city.</li>
                    <li><strong>By Air/Rail:</strong> Guwahati's airport and railway station connect the city to the rest of India — no separate journey to Kamakhya itself is needed.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Go early morning on a weekday to avoid the longest queues — Kamakhya draws steady crowds throughout the week.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See at Kamakhya</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Temple architecture representative of Kamakhya Temple" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The main temple complex:</strong> Notable for its beehive-shaped shikhara, a style associated with Assamese/Nilachal temple architecture.</li>
                    <li><strong>The inner sanctum:</strong> Centres on a natural rock formation rather than a conventional idol — a genuinely distinctive worship tradition.</li>
                    <li><strong>Subsidiary shrines on Nilachal Hill:</strong> Several other temples share the hill complex, worth exploring beyond just the main shrine.</li>
                    <li><strong>Ambubachi Mela (seasonal):</strong> If your dates align, the festival brings significant ritual activity and a genuinely unique atmosphere.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Kamakhya</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Pilgrim-oriented guesthouses in Guwahati", "Budget hotels across the city"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Central Guwahati mid-range hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Premium Guwahati hotels"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most visitors stay in Guwahati and treat Kamakhya as a half-day temple visit rather than an overnight destination.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Kamakhya</h2>
                  <ul>
                    <li><strong>Prasad and temple offerings:</strong> Available from vendors around the temple complex.</li>
                    <li><strong>Guwahati dining:</strong> The city's full range of Assamese and North Indian food is a short drive away.</li>
                    <li><strong>Assamese staples:</strong> Khar, tenga, and pitha are worth seeking out during your Guwahati stay.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Kamakhya Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Darshan & Hill Exploration", color: "bg-amber-700", activities: ["Early arrival at Nilachal Hill", "Darshan at the main temple", "Visit subsidiary shrines on the hill"] },
                      { day: "Afternoon", title: "Guwahati Sightseeing", color: "bg-forest-600", activities: ["Return to the city", "Continue with other Guwahati sights", "Evening: Brahmaputra riverfront"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Typical Range"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Local transport (round trip)", "₹300 – ₹800"],
                          ["Prasad / offerings", "₹50 – ₹300"],
                          ["Special darshan (if opted, verify current process)", "₹100 – ₹500"],
                          ["Total half-day cost (per person)", "₹450 – ₹1,600"],
                        ].map(([exp, r], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{r}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes Guwahati accommodation. Costs rise significantly during the Ambubachi Mela.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kamakhya</h2>
                  <ul>
                    <li><strong>Dress modestly:</strong> Standard, respectful temple attire throughout.</li>
                    <li><strong>Expect queues:</strong> Especially on weekends and significantly more during the Ambubachi Mela.</li>
                    <li><strong>Verify Ambubachi Mela logistics carefully:</strong> If attending specifically for the festival, research current-year dates and any special access arrangements well ahead.</li>
                    <li><strong>Approach the temple's Tantric tradition with genuine respect:</strong> This is a significant, living religious practice, not a curiosity.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly and respectfully", "Go early on a weekday for shorter queues", "Research Ambubachi Mela dates carefully if attending", "Explore the subsidiary shrines on Nilachal Hill", "Carry a small bag for shoes and valuables"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear casual/revealing clothing", "Visit expecting short queues on weekends", "Attend the Ambubachi Mela without planning logistics ahead", "Treat the temple's Tantric tradition as a curiosity", "Rush the visit — allow proper time for darshan"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kamakhya Temple", "Shakti Peetha", "Guwahati", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KAMAKHYA_GEAR} destination="Kamakhya Temple" />
              <RelatedPostsGrid currentSlug="kamakhya-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="kamakhya-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
