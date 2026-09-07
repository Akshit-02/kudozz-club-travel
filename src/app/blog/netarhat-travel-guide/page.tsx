// src/app/blog/netarhat-travel-guide/page.tsx
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
  title: "Netarhat Travel Guide: Sunrise Point & Chotanagpur's Hill Queen",
  description:
    "The complete Netarhat travel guide. Koel View Point, Magnolia Sunset Point, Upper and Lower Ghaghri Falls, where to stay, best time to visit, and a full 2-day itinerary through Jharkhand's favourite hill station.",
  keywords:
    "Netarhat travel guide, Netarhat sunrise point, Koel View Point, Magnolia Sunset Point, Ghaghri Falls, Chotanagpur plateau, best time to visit Netarhat, how to reach Netarhat, Jharkhand hill station",
  openGraph: {
    title: "Netarhat Travel Guide: Sunrise Point & Chotanagpur's Hill Queen",
    description: "A pine-forested plateau hill station nicknamed the 'Queen of Chotanagpur', famous for sunrise and sunset points over the Netarhat range — the complete guide to Netarhat.",
    url: "https://club.kudozz.in/blog/netarhat-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Forested plateau hill landscape representative of Netarhat, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netarhat Travel Guide: Sunrise Point & Chotanagpur's Hill Queen",
    description: "A pine-forested plateau hill station famous for sunrise and sunset points — the complete guide to Netarhat.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/netarhat-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Netarhat Travel Guide: Sunrise Point & Chotanagpur's Hill Queen",
          description: "The complete Netarhat travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/netarhat-travel-guide" },
          about: { "@type": "Place", name: "Netarhat", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Netarhat Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Can Netarhat be visited as a day trip from Ranchi?", a: "It's possible but not recommended. Netarhat sits roughly 150km and about a 5-hour drive from Ranchi, so a same-day round trip is rushed and tiring — plan it as an overnight stay instead, which also lets you catch Magnolia Sunset Point in the evening and Koel View Point at sunrise the next morning." },
  { q: "What is the best time to visit Netarhat?", a: "October to March, when skies are coolest and clearest for sunrise and sunset viewing. Monsoon (June–September) brings fog that can obscure the views, though it adds its own atmosphere to the plateau." },
  { q: "How do I reach Netarhat?", a: "The nearest airport is Ranchi (~155km), and the nearest railway station is Barwadih (~45km) or Ranchi itself. Road access from Ranchi is the primary route." },
  { q: "Is Netarhat cold?", a: "Yes, genuinely — mornings can be notably cold even though Jharkhand overall has a warm climate. Pack a warm layer, especially for pre-dawn viewpoint visits." },
  { q: "How many days do I need in Netarhat?", a: "Two days is a comfortable minimum: one evening for Magnolia Sunset Point and one early morning for Koel View Point sunrise, with time in between to see the Ghaghri Falls." },
  { q: "What is the budget for a trip to Netarhat?", a: "A budget traveler can manage on roughly ₹1,700 a day, a mid-range trip closer to ₹4,000 a day. Accommodation options are limited, so book ahead regardless of budget tier." },
  { q: "Can I combine Netarhat with Betla National Park?", a: "Yes — both sit within Jharkhand's western Chotanagpur Plateau region and are commonly combined into a single loop trip." },
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
  { id: "introduction", title: "Why Netarhat?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Netarhat", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NETARHAT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for pre-dawn viewpoints and Jharkhand's coolest plateau",
    emoji: "🌄",
    items: [
      { name: "Warm Layer / Light Jacket", description: "Mornings at Koel View Point are genuinely cold — a real contrast to Jharkhand's usual warm climate.", price: "₹1,499", rating: 4.4, reviews: "4.6k", image: "🧥", affiliateUrl: amazonSearchUrl("light+jacket+travel+warm"), tag: "Sunrise essential", tagColor: "bg-amber-100 text-amber-700", why: "Netarhat's elevation and forest cover make pre-dawn viewpoint visits noticeably colder than the rest of Jharkhand." },
      { name: "Flashlight / Headlamp", description: "Useful for the pre-dawn walk to Koel View Point before sunrise.", price: "₹499", rating: 4.4, reviews: "4.0k", image: "🔦", affiliateUrl: amazonSearchUrl("led+headlamp+travel"), tag: "Sunrise essential", tagColor: "bg-purple-100 text-purple-700", why: "Paths to the viewpoints are dark before sunrise with limited street lighting." },
      { name: "Comfortable Walking Shoes", description: "For the walk to the viewpoints and any exploring around Upper/Lower Ghaghri Falls.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-sky-100 text-sky-700", why: "Viewpoint paths and the falls involve genuine walking on uneven ground." },
      { name: "Camera / Phone Tripod", description: "For capturing the sunrise and sunset views without a shaky hand in low light.", price: "₹699", rating: 4.3, reviews: "3.5k", image: "📷", affiliateUrl: amazonSearchUrl("mini+tripod+phone+camera"), tag: "Photography essential", tagColor: "bg-forest-100 text-forest-700", why: "The whole point of a Netarhat trip is the sunrise/sunset views — a tripod makes a real difference in low light." },
    ],
  },
];

export default function NetarhatGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Forested plateau hill landscape representative of Netarhat, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Netarhat", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Netarhat", "Chotanagpur Plateau", "Off-beat", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Netarhat Travel Guide: Sunrise Point & Chotanagpur's Hill Queen
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A pine-forested plateau hill station nicknamed the "Queen of Chotanagpur," famous for sunrise and sunset points over the Netarhat range.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Netarhat, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Netarhat?</h2>
                  <p>
                    <strong>Netarhat</strong> is a plateau hill station at roughly 1,100m in the Chotanagpur Plateau, nicknamed "Queen of Chotanagpur" for its pine and sal forest and a genuinely cooler climate than the surrounding plains. The town's daily rhythm centres on two viewpoints — <strong>Koel View Point</strong> for sunrise and <strong>Magnolia Sunset Point</strong> for evenings — that draw travelers from across Jharkhand.
                  </p>
                  <p>
                    Netarhat's relative remoteness has kept it much quieter than better-known Indian hill stations, and it's also home to the well-regarded Netarhat Residential School, a point of local pride.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌄</span> Netarhat at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🌄", label: "Known For", value: "Sunrise & sunset viewpoints" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Ranchi (~155km)" },
                        { icon: "🏔️", label: "Elevation", value: "~1,100m" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Netarhat</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear skies, ideal for both sunrise and sunset viewing at the two main points." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warmer, still workable", text: "Warmer days but the plateau's elevation still keeps mornings cool." },
                      { season: "Jun – Sep", emoji: "🌫️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — fog and mist", text: "Fog can obscure the viewpoint vistas, though it lends its own atmosphere to the pine forest." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — clear skies at both Koel View Point and Magnolia Sunset Point.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Netarhat</h2>
                  <ul>
                    <li><strong>By Air:</strong> Ranchi (~155km) is the nearest airport.</li>
                    <li><strong>By Train:</strong> Barwadih (~45km) is the nearest railway station, or arrive via Ranchi.</li>
                    <li><strong>By Road:</strong> The primary route is a roughly 5-hour drive from Ranchi.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Don't attempt Netarhat as a Ranchi day trip — the 5-hour drive each way makes it too rushed. Plan an overnight stay so you can catch both the sunset and sunrise viewpoints.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Netarhat</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Plateau viewpoint scenery around Netarhat" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Koel View Point:</strong> Netarhat's sunrise viewpoint, the reason most visitors set an early alarm here.</li>
                    <li><strong>Magnolia Sunset Point:</strong> The evening counterpart, best visited the day you arrive.</li>
                    <li><strong>Upper and Lower Ghaghri Falls:</strong> A pair of waterfalls a short drive from town.</li>
                    <li><strong>Netarhat Dam:</strong> A quieter reservoir spot, good for an unhurried walk.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Netarhat</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Government/tourism guesthouses", "Basic local hotels"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed local hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Accommodation options here are genuinely limited — book ahead regardless of budget"] },
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
                  <h2>What to Eat in Netarhat</h2>
                  <ul>
                    <li><strong>Hotel-served thalis:</strong> Most stays serve simple vegetarian and non-vegetarian set meals — dining options are limited outside your hotel.</li>
                    <li><strong>Local market snacks:</strong> A handful of small eateries around the town centre for tea and quick bites.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Netarhat Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Sunset", color: "bg-amber-700", activities: ["Travel from Ranchi, check in", "Afternoon: Upper and Lower Ghaghri Falls", "Evening: Magnolia Sunset Point"] },
                      { day: "Day 2", title: "Sunrise & Departure", color: "bg-forest-600", activities: ["Early morning: Koel View Point sunrise", "Late morning: Netarhat Dam", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹1,000", "₹2,800"],
                          ["Food/day", "₹400", "₹800"],
                          ["Local transport per day", "₹300", "₹400"],
                          ["Daily total", "₹1,700", "₹4,000"],
                          ["2-Day trip total", "₹3,400", "₹8,000"],
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
                  <h2>Essential Travel Tips for Netarhat</h2>
                  <ul>
                    <li><strong>Plan an overnight stay, not a day trip:</strong> The distance from Ranchi is too far for a rushed same-day round trip.</li>
                    <li><strong>Pack warm layers:</strong> Mornings here are genuinely cold, unusual for Jharkhand.</li>
                    <li><strong>Book accommodation ahead:</strong> Options are limited and fill up on weekends.</li>
                    <li><strong>Bring a flashlight for the pre-dawn walk to Koel View Point.</strong></li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan an overnight stay to catch both sunrise and sunset", "Pack a warm layer for pre-dawn viewpoints", "Book accommodation ahead given limited options", "Visit Ghaghri Falls between the two viewpoint sessions", "Combine with Betla National Park for a longer trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt Netarhat as a rushed Ranchi day trip", "Underestimate how cold mornings can get", "Show up without booking accommodation", "Expect extensive dining or nightlife options", "Skip the walk to Koel View Point for sunrise — it's the main draw"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Netarhat", "Chotanagpur Plateau", "Jharkhand", "Off-beat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NETARHAT_GEAR} destination="Netarhat" />
              <RelatedPostsGrid currentSlug="netarhat-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="netarhat-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
