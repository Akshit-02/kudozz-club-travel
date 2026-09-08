// src/app/blog/gandikota-travel-guide/page.tsx
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
  title: "Gandikota Travel Guide: India's Grand Canyon",
  description:
    "The complete Gandikota travel guide. The Pennar River gorge, Gandikota Fort, camping, where to stay, best time to visit, and a full itinerary through Andhra Pradesh's Grand Canyon.",
  keywords:
    "Gandikota travel guide, Grand Canyon of India, Gandikota Fort, Pennar River gorge, best time to visit Gandikota, how to reach Gandikota, Gandikota camping",
  openGraph: {
    title: "Gandikota Travel Guide: India's Grand Canyon",
    description: "A red sandstone gorge carved by the Pennar River, ringed by a 13th-century fort, that's earned the nickname 'Grand Canyon of India' — the complete guide to Gandikota.",
    url: "https://club.kudozz.in/blog/gandikota-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/spiti-valley/spiti-valley.jpg", width: 1200, height: 630, alt: "Red rock gorge scenery representative of Gandikota, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Gandikota Travel Guide: India's Grand Canyon", description: "A dramatic red sandstone gorge and a 13th-century fort — the complete guide to Gandikota.", images: ["/images/destinations/spiti-valley/spiti-valley.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/gandikota-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Gandikota Travel Guide: India's Grand Canyon",
      description: "The complete Gandikota travel guide.",
      image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/gandikota-travel-guide" },
      about: { "@type": "Place", name: "Gandikota", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Gandikota Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Why is Gandikota called India's Grand Canyon?", a: "It's a popular nickname highlighting the scale and red-rock color of the Pennar River gorge here — a genuine visual comparison, not a literal geological equivalence to Arizona's canyon." },
  { q: "How many days do I need in Gandikota?", a: "One full day covers the fort and gorge viewpoints comfortably. An overnight camping stay lets you catch both sunset and sunrise over the gorge." },
  { q: "What is the best time to visit Gandikota?", a: "October to February is coolest and most comfortable. This is a Rayalaseema region destination, and summer heat is genuinely intense." },
  { q: "How do I reach Gandikota?", a: "The nearest airport is Kadapa (limited connectivity) or Tirupati. Jammalamadugu (~15km) or Muddanuru are the nearest railway stations, with road access as the standard final approach." },
  { q: "Is camping available at Gandikota?", a: "Yes — camping is a popular option here given limited formal hotel accommodation, and several operators run organized camping stays near the gorge." },
  { q: "Is Gandikota safe to visit?", a: "Yes, with normal outdoor caution — the gorge edges are largely unfenced, so keep a safe distance, especially with children, and avoid the edge in low light or after rain." },
  { q: "What is the budget for a trip to Gandikota?", a: "A budget traveler can manage on roughly ₹1,400 a day (camping-inclusive), a mid-range trip closer to ₹3,500 a day." },
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
  { id: "introduction", title: "Why Gandikota?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gandikota", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GANDIKOTA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for gorge viewpoints and camping", emoji: "🏜️",
  items: [
    { name: "Sturdy Walking Shoes", description: "For navigating the fort ruins and uneven gorge-edge terrain safely.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("sturdy+trekking+shoes+outdoor"), tag: "Safety essential", tagColor: "bg-red-100 text-red-700", why: "Solid footing matters given the largely unfenced gorge edges." },
    { name: "Sun Hat & Sunscreen", description: "Gandikota's Rayalaseema location means genuinely intense sun with little shade at the fort/gorge.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"), tag: "Heat essential", tagColor: "bg-amber-100 text-amber-700", why: "Exposed rock terrain offers essentially no shade cover during the day." },
    { name: "Camping Gear (if staying overnight)", description: "A tent and sleeping bag if you're not booking through a full-service camping operator.", price: "₹3,999+", rating: 4.4, reviews: "2.1k", image: "⛺", affiliateUrl: amazonSearchUrl("camping+tent+sleeping+bag+set"), tag: "Overnight essential", tagColor: "bg-forest-100 text-forest-700", why: "Camping is genuinely the best way to catch both sunset and sunrise over the gorge." },
    { name: "Reusable Water Bottle (2L)", description: "Facilities are minimal at the site — carry more water than you think you'll need.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("2l+reusable+water+bottle"), tag: "Essential", tagColor: "bg-sky-100 text-sky-700", why: "This is a genuinely remote, low-facility site in a hot region." },
  ],
}];

export default function GandikotaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Red rock gorge scenery representative of Gandikota, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Gandikota", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Gandikota", "Pennar River", "Off-beat", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Gandikota Travel Guide: India's Grand Canyon
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A red sandstone gorge carved by the Pennar River, ringed by a 13th-century fort, that's earned the nickname "Grand Canyon of India."
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Gandikota, Andhra Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Gandikota?</h2>
                  <p>
                    <strong>Gandikota</strong> is a dramatic red sandstone gorge carved by the Pennar River over geological time, popularly nicknamed the "Grand Canyon of India" — a comparison that highlights the scale and color of the gorge rather than any literal geological equivalence to Arizona's canyon.
                  </p>
                  <p>
                    Running right along the gorge's edge is <strong>Gandikota Fort</strong>, a 13th-century fort built by the Kakatiya dynasty and later held by various regional powers, offering genuinely dramatic clifftop views. The site has grown in popularity as a photography and camping destination in recent years, while staying noticeably less crowded than most of Andhra Pradesh's headline sites.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏜️</span> Gandikota at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🏰", label: "Key Site", value: "Gandikota Fort" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "🚆", label: "Nearest Station", value: "Jammalamadugu (~15km)" },
                        { icon: "🏕️", label: "Popular Option", value: "Overnight camping" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Gandikota</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "The most comfortable window for exposed gorge and fort exploration in this Rayalaseema region." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Intense heat", text: "Summer heat here is genuinely severe — avoid midday exploration if visiting during this period." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February for the most comfortable temperatures on the exposed gorge and fort walls.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Gandikota</h2>
                  <ul>
                    <li><strong>By Air:</strong> Nearest airports are Kadapa (limited connectivity) or Tirupati.</li>
                    <li><strong>By Train:</strong> Jammalamadugu (~15km) or Muddanuru are the nearest railway stations.</li>
                    <li><strong>By Road:</strong> The standard final approach for most visitors — this is a genuinely off-the-main-circuit destination requiring some trip-planning effort.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Arrange a car/driver for the full trip given limited last-mile public transport options.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Gandikota</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Gorge and fort scenery around Gandikota" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Gandikota Fort:</strong> A 13th-century fort with walls running along the gorge edge, offering dramatic clifftop views.</li>
                    <li><strong>The Pennar Gorge viewpoints:</strong> The main draw — sunrise and sunset are the best times for photography.</li>
                    <li><strong>Fort mosque and granary ruins:</strong> Structures from later periods of the fort's use.</li>
                    <li><strong>Mylavaram Dam:</strong> Upstream, feeding the gorge, worth a visit for those with extra time.</li>
                    <li><strong>Belum Caves:</strong> Cross-reference that separate guide — sometimes combined in the same regional trip.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Gandikota</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Camping stays near the gorge", "Basic guesthouses in Jammalamadugu"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Organized camping packages with meals", "Small resort-style stays"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of premium camping/glamping packages — formal luxury hotels are essentially unavailable here"] },
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
                  <h2>What to Eat in Gandikota</h2>
                  <ul>
                    <li><strong>Camp-cooked meals:</strong> Most organized camping stays include meals as part of the package.</li>
                    <li><strong>Andhra thalis:</strong> Genuinely spicy regional fare at basic eateries in Jammalamadugu.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Gandikota Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fort & Sunset", color: "bg-amber-700", activities: ["Arrive, check in (camping or guesthouse)", "Afternoon: explore Gandikota Fort", "Evening: sunset over the gorge"] },
                      { day: "Day 2", title: "Sunrise & Departure", color: "bg-forest-600", activities: ["Early morning: sunrise over the gorge", "Late morning: Mylavaram Dam or Belum Caves detour", "Afternoon: departure"] },
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
                          ["Accommodation/night (camping/guesthouse)", "₹800", "₹2,500"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹300", "₹800"],
                          ["Daily total", "₹1,400", "₹4,000"],
                          ["2-Day trip total", "₹2,800", "₹8,000"],
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
                  <h2>Essential Travel Tips for Gandikota</h2>
                  <ul>
                    <li><strong>Visit at sunrise or sunset:</strong> The best light on the gorge and fort walls.</li>
                    <li><strong>Exercise real caution near the gorge edge:</strong> Much of it is unfenced.</li>
                    <li><strong>Arrange transport in advance:</strong> Public transport options for the last stretch are limited.</li>
                    <li><strong>Carry sufficient water:</strong> Facilities at the site itself are minimal.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit at sunrise or sunset for the best light", "Book camping if you want the fuller gorge experience", "Arrange transport for the full trip in advance", "Carry sufficient water and sun protection", "Combine with Belum Caves if time allows"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Get too close to unfenced gorge edges", "Visit at midday during summer heat", "Expect formal luxury accommodation on-site", "Rely on public transport for the last stretch", "Underestimate how remote this destination is"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Gandikota", "Pennar River", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GANDIKOTA_GEAR} destination="Gandikota" />
              <RelatedPostsGrid currentSlug="gandikota-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="gandikota-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
