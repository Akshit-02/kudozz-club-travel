// src/app/blog/bodh-gaya-travel-guide/page.tsx
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
  title: "Bodh Gaya Travel Guide: Mahabodhi Temple & Buddha's Enlightenment Site",
  description:
    "The complete Bodh Gaya travel guide. Mahabodhi Temple, the Bodhi Tree, the Vajrasana, international monasteries, where to stay, best time to visit, and a full itinerary through Buddhism's most sacred pilgrimage site.",
  keywords:
    "Bodh Gaya travel guide, Mahabodhi Temple, Bodhi Tree, Vajrasana, Great Buddha Statue, Bodh Gaya monasteries, best time to visit Bodh Gaya, how to reach Bodh Gaya, Bodh Gaya meditation retreat, Buddhist pilgrimage Bihar",
  openGraph: {
    title: "Bodh Gaya Travel Guide: Mahabodhi Temple & Buddha's Enlightenment Site",
    description: "The exact spot where Buddha is believed to have attained enlightenment under a descendant of the original Bodhi Tree — the complete guide to Bodh Gaya.",
    url: "https://club.kudozz.in/blog/bodh-gaya-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Ancient temple architecture representative of the Mahabodhi Temple, Bodh Gaya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodh Gaya Travel Guide: Mahabodhi Temple & Buddha's Enlightenment Site",
    description: "Buddhism's most sacred pilgrimage site — the complete guide to Bodh Gaya.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/bodh-gaya-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Bodh Gaya Travel Guide: Mahabodhi Temple & Buddha's Enlightenment Site",
      description: "The complete Bodh Gaya travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bodh-gaya-travel-guide" },
      about: { "@type": "Place", name: "Bodh Gaya", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Bodh Gaya Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Bodh Gaya?", a: "Two days is a comfortable amount of time — a full day at the Mahabodhi Temple complex itself, and a second day visiting the international monasteries and the Great Buddha Statue at a relaxed pace." },
  { q: "What is the best time to visit Bodh Gaya?", a: "October to March offers the most comfortable weather and coincides with the peak pilgrimage and meditation-retreat season, when the monasteries are most active." },
  { q: "How do I reach Bodh Gaya?", a: "Gaya Airport (GAY), about 13km away, has some international connections given Bodh Gaya's global Buddhist significance. Gaya Junction is a well-connected railway station, and road access is straightforward." },
  { q: "Is the Bodhi Tree the original tree Buddha sat under?", a: "It's a descendant — grown from a cutting of a cutting that was carried to Sri Lanka and later brought back, tracing an unbroken lineage back to the original tree rather than being the literal same plant." },
  { q: "Can I attend a meditation retreat in Bodh Gaya?", a: "Yes — many monasteries and dedicated meditation centres in Bodh Gaya offer courses, especially during the winter season. Availability and schedules vary, so verify current offerings and booking requirements directly with individual centres." },
  { q: "What is the budget for a trip to Bodh Gaya?", a: "A budget traveler can manage on roughly ₹1,200 a day, helped by very affordable monastery guesthouse stays; a mid-range trip runs closer to ₹3,500 a day. A 2-day trip totals roughly ₹2,400 on a budget and ₹7,000 mid-range." },
  { q: "Is Bodh Gaya only for Buddhists?", a: "No — while it's a deeply significant active pilgrimage site for Buddhist practitioners and should be treated with corresponding respect, it's open to all visitors interested in its history, architecture, and atmosphere." },
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
  { id: "introduction", title: "Why Bodh Gaya?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bodh Gaya", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BODHGAYA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for temple visits and walking between monasteries", emoji: "🙏",
  items: [
    { name: "Modest Cotton Clothing", description: "Covered shoulders and knees are expected throughout the Mahabodhi Temple complex and every monastery you'll visit.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+cotton+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is an active, deeply significant pilgrimage site — modest dress is a baseline expectation, not optional." },
    { name: "Comfortable Walking Shoes", description: "The international monastery ring spans a wide area — expect a full day of walking between them.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Seeing more than just the main temple means real walking distance across town." },
    { name: "Light Shawl", description: "Useful both for extra modesty coverage at religious sites and for cool winter mornings during peak season.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+shawl+travel"), tag: "Versatile essential", tagColor: "bg-sky-100 text-sky-700", why: "Doubles as modest covering and a layer against cool winter mornings, Bodh Gaya's peak season." },
    { name: "Reusable Water Bottle", description: "A full day moving between the temple complex and monasteries adds up — stay hydrated.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Extensive walking with limited shade between some sites makes hydration matter." },
  ],
}];

export default function BodhGayaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Ancient temple architecture representative of the Mahabodhi Temple, Bodh Gaya" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bodh Gaya", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bodh Gaya", "Mahabodhi Temple", "Buddhist Heritage", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bodh Gaya Travel Guide: Mahabodhi Temple & Buddha's Enlightenment Site
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The exact spot where Buddha is believed to have attained enlightenment under a descendant of the original Bodhi Tree.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bodh Gaya, Bihar" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Bodh Gaya?</h2>
                  <p>
                    <strong>Bodh Gaya</strong> marks the traditional site where Siddhartha Gautama attained enlightenment to become the Buddha, making it one of Buddhism's four most sacred pilgrimage places. At the centre of it all stands the <strong>Mahabodhi Temple</strong>, a UNESCO World Heritage Site whose soaring pyramidal spire has become one of the most recognizable religious silhouettes in Asia.
                  </p>
                  <p>
                    What makes Bodh Gaya genuinely distinctive beyond the main temple is the ring of international monasteries built around it — Thai, Japanese, Tibetan, Bhutanese, Vietnamese, and more — each constructed in its own national architectural style. Walking between them in a single day is one of the few places on earth where you can see Buddhism's global diversity laid out so plainly.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🙏</span> Bodh Gaya at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🛕", label: "Key Site", value: "Mahabodhi Temple (UNESCO)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Gaya (GAY), ~13km" },
                        { icon: "🌳", label: "Landmark", value: "The Bodhi Tree" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bodh Gaya</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather and the peak pilgrimage/retreat season, when monasteries and meditation centres are most active." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Temperatures climb significantly — manageable but not ideal for a full day of walking between monasteries." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain can disrupt sightseeing plans, though the temple complex remains fully functional." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — the coolest, most comfortable stretch, and when the international monasteries are at their most active.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bodh Gaya</h2>
                  <ul>
                    <li><strong>By Air:</strong> Gaya Airport (GAY), about 13km away, carries some international connections given Bodh Gaya's global Buddhist significance.</li>
                    <li><strong>By Train:</strong> Gaya Junction is a major, well-connected railway station.</li>
                    <li><strong>By Road:</strong> Straightforward road access from Gaya and the wider Bihar heritage circuit.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're combining Bodh Gaya with Nalanda and Rajgir, hire a car for the day — public transport between the three is workable but slow.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Bodh Gaya</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Temple architecture at the Mahabodhi Temple complex" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Mahabodhi Temple Complex:</strong> The UNESCO-listed centrepiece marking the traditional site of Buddha's enlightenment, with its distinctive pyramidal spire.</li>
                    <li><strong>The Bodhi Tree:</strong> A descendant of the original tree under which Buddha is said to have sat, traced through a lineage of cuttings via Sri Lanka.</li>
                    <li><strong>Vajrasana:</strong> The "Diamond Throne," a stone slab marking the precise traditional spot of enlightenment beside the tree.</li>
                    <li><strong>International monasteries:</strong> A ring of Thai, Japanese, Tibetan, Bhutanese, and Vietnamese monasteries, each in its own distinct national style.</li>
                    <li><strong>Great Buddha Statue:</strong> A large seated Buddha statue a short distance from the main temple.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Bodh Gaya</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹300–₹900/night", picks: ["Monastery guesthouses (often the best value)", "Basic pilgrim lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["Private mid-range hotels", "Comfortable guesthouses near the temple"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium hotels catering to international visitors"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Several monasteries offer very affordable guesthouse rooms to pilgrims and travelers alike — genuinely one of the best-value stays anywhere in this guide.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Bodh Gaya</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish — roasted wheat balls stuffed with sattu, served with mashed spiced vegetables.</li>
                    <li><strong>Monastery kitchens:</strong> Some monastery guesthouses serve simple vegetarian meals reflecting their home country's cuisine — Tibetan, Thai, or Japanese touches alongside local food.</li>
                    <li><strong>Sattu paratha and thekua:</strong> Common Bihari staples widely available at local eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bodh Gaya Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Mahabodhi Temple Complex", color: "bg-amber-700", activities: ["Arrive, check in", "Full day at the Mahabodhi Temple, Bodhi Tree, and Vajrasana", "Evening meditation/reflection at the temple grounds"] },
                      { day: "Day 2", title: "International Monasteries", color: "bg-forest-600", activities: ["Morning: walk between the Thai, Japanese, Tibetan, and Bhutanese monasteries", "Visit the Great Buddha Statue", "Afternoon: departure or onward to Rajgir/Nalanda"] },
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
                          ["Accommodation/night", "₹500", "₹2,200", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹200", "₹500", "₹1,200"],
                          ["Daily total", "₹1,200", "₹3,500", "₹11,000"],
                          ["2-Day trip total", "₹2,400", "₹7,000", "₹22,000"],
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
                  <h2>Essential Travel Tips for Bodh Gaya</h2>
                  <ul>
                    <li><strong>Dress and behave respectfully:</strong> This is an active pilgrimage site of deep significance — modest dress and quiet demeanor are expected throughout.</li>
                    <li><strong>Visit the monasteries, not just the main temple:</strong> The international ring is what makes Bodh Gaya genuinely distinctive.</li>
                    <li><strong>Verify meditation retreat schedules directly:</strong> Availability and course dates vary by centre and season.</li>
                    <li><strong>Consider a monastery guesthouse:</strong> Genuinely good value and a more immersive stay.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly throughout the temple complex", "Visit multiple international monasteries, not just the main temple", "Consider a monastery guesthouse stay", "Verify retreat schedules directly with centres", "Combine with Nalanda and Rajgir for a fuller trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear revealing clothing near the temple or monasteries", "Rush through in a couple of hours", "Behave loudly or disruptively at an active pilgrimage site", "Assume meditation retreats are always available without checking", "Skip the international monasteries to save time"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bodh Gaya", "Mahabodhi Temple", "Buddhist Heritage", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BODHGAYA_GEAR} destination="Bodh Gaya" />
              <RelatedPostsGrid currentSlug="bodh-gaya-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="bodh-gaya-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
