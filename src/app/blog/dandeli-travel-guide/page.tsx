// src/app/blog/dandeli-travel-guide/page.tsx
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
  title: "Dandeli Travel Guide: White-Water Rafting & Wildlife Sanctuary",
  description:
    "The complete Dandeli travel guide. White-water rafting on the Kali River, Dandeli Wildlife Sanctuary, kayaking and zip-lining, where to stay, best time to visit, and a full 2-day itinerary through Karnataka's adventure hub.",
  keywords:
    "Dandeli travel guide, Dandeli rafting, Kali River rafting, Dandeli Wildlife Sanctuary, Syntheri Rocks, Kavala Caves, best time to visit Dandeli, how to reach Dandeli, Dandeli adventure sports",
  openGraph: {
    title: "Dandeli Travel Guide: White-Water Rafting & Wildlife Sanctuary",
    description: "River rapids fed by a dam release, a wildlife sanctuary with black panthers and hornbills, and Karnataka's best-known adventure sports hub — the complete guide to Dandeli.",
    url: "https://club.kudozz.in/blog/dandeli-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "River and forest landscape representative of Dandeli, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dandeli Travel Guide: White-Water Rafting & Wildlife Sanctuary",
    description: "Karnataka's best-known adventure sports hub — the complete guide to Dandeli.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/dandeli-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Dandeli Travel Guide: White-Water Rafting & Wildlife Sanctuary",
          description: "The complete Dandeli travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dandeli-travel-guide" },
          about: { "@type": "Place", name: "Dandeli", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Dandeli Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Dandeli?", a: "Two days covers a rafting session, one or two other adventure activities, and a wildlife/nature walk comfortably." },
  { q: "What is the best time to visit Dandeli?", a: "Roughly June to February works for most adventure activities, though exact rafting availability depends on the Kali River's water-release schedule — verify current timing with your operator." },
  { q: "How do I reach Dandeli?", a: "The nearest airports are Hubli (~75km) and Goa's Dabolim (~110km). The nearest railway stations are Alnavar or Londa, and road access works from either Karnataka or Goa." },
  { q: "Is rafting available year-round in Dandeli?", a: "Not exactly — rafting depends on scheduled water releases from the upstream dam, and operators adjust availability accordingly. Confirm current schedules before planning your trip around it." },
  { q: "Is Dandeli safe for beginners at white-water rafting?", a: "Yes — established operators run trips suited to beginners with proper safety briefings and life jackets. Choose a reputable, well-reviewed operator rather than the cheapest option." },
  { q: "What is the budget for a trip to Dandeli?", a: "A budget traveler can manage on roughly ₹2,000 a day including a rafting session, a mid-range trip closer to ₹4,500 a day with multiple activities. A 2-day trip totals roughly ₹4,000 on a budget and ₹9,000 mid-range, excluding transport to the region." },
  { q: "Can I combine Dandeli with Goa?", a: "Yes — Dandeli is roughly 110km from Goa's Dabolim airport, making it a feasible add-on for travelers looking to pair a beach trip with an adventure-sports detour." },
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
  { id: "introduction", title: "Why Dandeli?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dandeli", level: 2 },
  { id: "top-attractions", title: "Adventure Activities & Sights", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DANDELI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for rafting, kayaking, and forest wildlife walks",
    emoji: "🚣",
    items: [
      { name: "Quick-Dry Clothing", description: "Rafting and kayaking mean you'll be wet for extended stretches — quick-dry fabrics are far more comfortable than cotton.", price: "₹799", rating: 4.4, reviews: "4.5k", image: "👕", affiliateUrl: amazonSearchUrl("quick+dry+clothing+outdoor"), tag: "Rafting essential", tagColor: "bg-sky-100 text-sky-700", why: "Staying in wet cotton for hours is a common, avoidable discomfort on rafting trips." },
      { name: "Water Shoes / Grip Sandals", description: "For getting in and out of rafts and kayaks over slippery riverbank rocks.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("water+shoes+grip+outdoor"), tag: "Rafting essential", tagColor: "bg-amber-100 text-amber-700", why: "Riverbank entry and exit points are often rocky and slick." },
      { name: "Waterproof Dry Bag", description: "For keeping phones, wallets, and dry clothes safe during rafting and kayaking sessions.", price: "₹599", rating: 4.4, reviews: "3.8k", image: "🎒", affiliateUrl: amazonSearchUrl("waterproof+dry+bag+rafting"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "A soaked phone or wallet is the most common regret from a rafting day without one." },
      { name: "Reef-Safe Sunscreen", description: "Extended time on the open river brings real sun exposure, especially reflected off the water.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "River essential", tagColor: "bg-forest-100 text-forest-700", why: "Sun reflected off moving water burns faster than most travelers expect." },
    ],
  },
];

export default function DandeliGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="River and forest landscape representative of Dandeli, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dandeli", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dandeli", "White-Water Rafting", "Adventure", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dandeli Travel Guide: White-Water Rafting & Wildlife Sanctuary
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              River rapids fed by a dam release, a wildlife sanctuary with black panthers and hornbills, and Karnataka's best-known adventure sports hub.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dandeli, Karnataka" },
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
                  <h2>Why Dandeli?</h2>
                  <p>
                    <strong>Dandeli</strong> is Karnataka's best-known hub for adventure sports, built around white-water rafting on the <strong>Kali River</strong> — rapids created by scheduled water releases from an upstream dam, which makes timing genuinely important when planning a visit. Beyond rafting, the town sits beside <strong>Dandeli Wildlife Sanctuary</strong>, a dense forest home to black panthers, a wide range of hornbill species, and a strong reputation among birders.
                  </p>
                  <p>
                    It's a compact, activity-dense destination rather than a slow scenic escape — most visitors come specifically to raft, kayak, or explore the forest, and the town's infrastructure is built around that.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚣</span> Dandeli at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🚣", label: "Key Activity", value: "White-water rafting, Kali River" },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Feb (verify schedule)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Hubli (~75km)" },
                        { icon: "🐆", label: "Wildlife", value: "Black panthers, hornbills" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dandeli</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jun – Sep", emoji: "🌊", color: "bg-sky-50 border-sky-200", mood: "Intense rapids, higher risk", text: "Monsoon flow can bring the most intense rapids, but operators may scale back activities for safety — confirm current conditions." },
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable weather with generally reliable rafting and forest activity conditions." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot, lower water", text: "River levels can be lower depending on release schedules — verify rafting availability before planning around this window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Book through an established local operator who can confirm current water-release timing before you travel — this matters more here than at most Indian adventure destinations.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dandeli</h2>
                  <ul>
                    <li><strong>By Air:</strong> Hubli (~75km) or Goa's Dabolim (~110km) are the nearest airports.</li>
                    <li><strong>By Train:</strong> Alnavar or Londa are the nearest railway stations.</li>
                    <li><strong>By Road:</strong> Reachable from both Karnataka's interior and from Goa, making it a feasible add-on to a Goa trip.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're combining Dandeli with a Goa trip, it's a genuinely feasible detour given the roughly 110km distance from Dabolim airport.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Adventure Activities & Sights in Dandeli</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="River rapids and forest around Dandeli" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>White-water rafting on the Kali River:</strong> Dandeli's signature activity, with rapids timed to scheduled dam water releases.</li>
                    <li><strong>Dandeli Wildlife Sanctuary:</strong> Dense forest home to black panthers, hornbills, and a strong reputation among birders.</li>
                    <li><strong>Kayaking and coracle rides:</strong> Calmer water-based alternatives or additions to rafting.</li>
                    <li><strong>Zip-lining and jungle camping:</strong> Common add-on activities offered by local adventure operators.</li>
                    <li><strong>Syntheri Rocks:</strong> Dramatic natural rock formations along the river, worth a stop.</li>
                    <li><strong>Kavala Caves:</strong> Limestone caves a short distance from town.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dandeli</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,200/night", picks: ["Basic riverside camps", "Budget lodges in town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Adventure resort packages (activities included)", "Forest-edge cottage stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹14,000+/night", picks: ["Premium riverside resorts", "All-inclusive adventure resort packages"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most mid-range and luxury Dandeli resorts sell packages bundling stay with rafting and other activities — often better value than booking separately.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Dandeli</h2>
                  <ul>
                    <li><strong>Resort-served meals:</strong> Most adventure resorts serve set thalis and buffet-style meals as part of activity packages.</li>
                    <li><strong>Local Karnataka fare:</strong> Simple regional cooking available at small eateries in the town centre.</li>
                    <li><strong>North Karnataka specialties:</strong> Given the region, some spots serve jolada rotti and other North Karnataka staples alongside standard fare.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Dandeli Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Rafting & River Sights", color: "bg-amber-700", activities: ["Arrive, check in at an adventure resort", "Afternoon: white-water rafting session", "Evening: relax by the river"] },
                      { day: "Day 2", title: "Wildlife & More Adventure", color: "bg-forest-600", activities: ["Morning: Dandeli Wildlife Sanctuary walk/birding", "Afternoon: kayaking, zip-lining, or Syntheri Rocks visit", "Evening: departure"] },
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹8,500"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Rafting + activities", "₹1,500", "₹2,500", "₹4,000"],
                          ["Daily total", "₹2,000", "₹4,500", "₹11,000"],
                          ["2-Day trip total", "₹4,000", "₹9,000", "₹22,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Most resort packages bundle activities with the stay.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Dandeli</h2>
                  <ul>
                    <li><strong>Book through an established operator:</strong> Confirm current water-release timing before finalizing your rafting date.</li>
                    <li><strong>Wear a life jacket at all times on the water:</strong> Non-negotiable, standard safety practice.</li>
                    <li><strong>Combine rafting with a wildlife walk:</strong> Makes for a well-rounded trip beyond just the adrenaline activity.</li>
                    <li><strong>Pack quick-dry clothing:</strong> You'll be wet for significant stretches of the trip.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book with a reputable, well-reviewed rafting operator", "Confirm current water-release schedules before travelling", "Wear a life jacket at all times on the water", "Pack quick-dry clothing and a dry bag", "Add a wildlife sanctuary walk to your itinerary"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book the cheapest unverified rafting operator you find", "Skip the safety briefing before rafting", "Assume rafting is available on any given day without checking", "Leave valuables unsecured during water activities", "Underestimate how quickly sun exposure adds up on the river"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dandeli", "White-Water Rafting", "Adventure", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DANDELI_GEAR} destination="Dandeli" />
              <RelatedPostsGrid currentSlug="dandeli-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="dandeli-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
