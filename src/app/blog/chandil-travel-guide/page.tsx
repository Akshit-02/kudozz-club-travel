// src/app/blog/chandil-travel-guide/page.tsx
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
  title: "Chandil Dam Travel Guide: Reservoir, Boating & Day Trip Guide",
  description:
    "The complete Chandil Dam travel guide. Reservoir boating, hill views, how to reach from Jamshedpur, best time to visit, and a practical half-day itinerary for this Subarnarekha River dam.",
  keywords:
    "Chandil Dam travel guide, Chandil reservoir, Chandil boating, best time to visit Chandil, how to reach Chandil, Jamshedpur day trips, Subarnarekha River dam Jharkhand",
  openGraph: {
    title: "Chandil Dam Travel Guide: Reservoir, Boating & Day Trip Guide",
    description: "A vast reservoir on the Subarnarekha River ringed by hills, one of the easiest day trips from Jamshedpur — the complete guide to Chandil.",
    url: "https://club.kudozz.in/blog/chandil-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "Reservoir and hills representative of Chandil Dam, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandil Dam Travel Guide: Reservoir, Boating & Day Trip Guide",
    description: "A vast hill-ringed reservoir, one of the easiest day trips from Jamshedpur — the complete guide to Chandil.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/chandil-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Chandil Dam Travel Guide: Reservoir, Boating & Day Trip Guide",
          description: "The complete Chandil Dam travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/chandil-travel-guide" },
          about: { "@type": "Place", name: "Chandil", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Chandil Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How much time do I need at Chandil Dam?", a: "A few hours is enough — this is a half-day or day-trip destination, not a place to base yourself for multiple days." },
  { q: "What is the best time to visit Chandil?", a: "October to March offers the coolest, most comfortable conditions for a relaxed few hours by the reservoir." },
  { q: "How do I reach Chandil?", a: "Chandil is roughly 35-40km from Jamshedpur, about an hour by road — the standard approach for nearly all visitors." },
  { q: "Are there facilities at Chandil Dam?", a: "Facilities are minimal — this is an undeveloped reservoir stop rather than a built-up tourist attraction. Bring your own food and water." },
  { q: "Can I go boating at Chandil?", a: "Yes, boating is available and is the main activity on the reservoir, though options and operating hours can be informal — check locally on arrival." },
  { q: "What is the budget for a visit to Chandil?", a: "This is a very low-cost outing — a day trip from Jamshedpur including transport and boating typically runs ₹500-1,000 per person." },
  { q: "Can Chandil be combined with other nearby spots?", a: "Yes — many travelers combine Chandil with Ghatshila for a fuller day out from Jamshedpur, since both are quiet, low-key stops in the same general direction." },
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
  { id: "introduction", title: "Why Chandil?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chandil", level: 2 },
  { id: "top-attractions", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const CHANDIL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a low-key reservoir day trip",
    emoji: "🚣",
    items: [
      { name: "Sun Hat & Sunglasses", description: "The reservoir offers little shade — sun protection matters for a few hours by the water.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Day-trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Open reservoir edges offer minimal shade for most of the day." },
      { name: "Reusable Water Bottle", description: "Facilities at Chandil are minimal by design — carry your own water.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-sky-100 text-sky-700", why: "This is an undeveloped reservoir stop with few shops nearby." },
      { name: "Comfortable Footwear", description: "For walking along the dam and reservoir edge.", price: "₹999", rating: 4.4, reviews: "3.8k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+outdoor+footwear"), tag: "Comfort essential", tagColor: "bg-forest-100 text-forest-700", why: "The dam and reservoir banks involve some uneven, sometimes muddy ground." },
      { name: "Waterproof Phone Pouch", description: "Useful if you plan to go boating on the reservoir.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Boating essential", tagColor: "bg-purple-100 text-purple-700", why: "A dropped phone is a real risk on informal boat rides." },
    ],
  },
];

export default function ChandilGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="Reservoir and hills representative of Chandil Dam, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Chandil", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Chandil", "Chandil Dam", "Off-beat", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Chandil Dam Travel Guide: Reservoir, Boating & Day Trip Guide
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A vast reservoir on the Subarnarekha River ringed by hills, one of the easiest day trips from Jamshedpur.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Chandil, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,400 words" },
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
                  <h2>Why Chandil?</h2>
                  <p>
                    <strong>Chandil Dam</strong> sits on the Subarnarekha River in eastern Jharkhand, creating a large reservoir ringed by low hills. It's a genuinely simple destination — no major infrastructure, no ticketed attractions, just open water, quiet hills, and an easy boat ride, which is exactly why it works so well as a short escape from nearby Jamshedpur.
                  </p>
                  <p>
                    Don't expect a developed tourist site here. Chandil rewards travelers looking for a relaxed few hours outdoors rather than a full day of sightseeing.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚣</span> Chandil at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🌊", label: "River", value: "Subarnarekha" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "From Jamshedpur", value: "~35-40km, ~1hr" },
                        { icon: "🛶", label: "Main Activity", value: "Boating" },
                        { icon: "💰", label: "Budget/Trip", value: "₹500 – ₹1,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Chandil</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable conditions for a relaxed afternoon by the water." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warmer and with little shade around the reservoir — visit early morning or late afternoon if going in this window." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Water levels rise and the reservoir looks its fullest, but conditions can be less predictable for boating." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for a relaxed afternoon by the reservoir.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Chandil</h2>
                  <ul>
                    <li><strong>By Road:</strong> Roughly 35-40km from Jamshedpur, about an hour's drive — the way essentially everyone gets here.</li>
                    <li><strong>By Air/Train:</strong> Fly or take the train into Jamshedpur first, then continue by road to Chandil.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Pair Chandil with a Ghatshila visit for a fuller day trip from Jamshedpur — both are in a similar direction and share a similarly relaxed, undeveloped character.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Things to Do at Chandil</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Chandil reservoir and surrounding hills" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Boating:</strong> The main activity on the reservoir — a simple, relaxed way to see the dam and surrounding hills from the water.</li>
                    <li><strong>Picnicking by the reservoir:</strong> A popular local activity, especially on weekends — bring your own food as facilities are minimal.</li>
                    <li><strong>Birdwatching:</strong> Decent birdlife around the water's edge, particularly in cooler months.</li>
                    <li><strong>Photography:</strong> The open water and hill backdrop make for good sunrise/sunset shots.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Chandil</h2>
                  <p>Chandil is best visited as a day trip — accommodation options here are minimal, so most travelers base themselves in Jamshedpur.</p>
                  <ul>
                    <li><strong>Jamshedpur (~40km):</strong> The practical base with a full range of budget to luxury hotels — see the separate Jamshedpur guide.</li>
                  </ul>
                </section>

                <section id="food-guide">
                  <h2>What to Eat at Chandil</h2>
                  <p>Facilities are minimal — bring your own food and water, or eat before/after in Jamshedpur.</p>
                  <ul>
                    <li><strong>Local snack stalls:</strong> A handful of basic vendors near the dam on busier days, not a reliable full-meal option.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Chandil Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Reservoir & Boating", color: "bg-amber-700", activities: ["Drive from Jamshedpur (~1hr)", "Boating on the reservoir", "Walk along the dam"] },
                      { day: "Afternoon", title: "Picnic & Return", color: "bg-forest-600", activities: ["Relaxed picnic lunch by the water", "Photography around the reservoir edge", "Return to Jamshedpur"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Approx. cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Transport from Jamshedpur (return)", "₹300–₹600"],
                          ["Boating", "₹100–₹300"],
                          ["Food (self-carried or local snacks)", "₹100–₹200"],
                          ["Day trip total", "₹500–₹1,100"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Jamshedpur itself.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Chandil</h2>
                  <ul>
                    <li><strong>Bring your own food and water:</strong> Facilities at the reservoir are minimal.</li>
                    <li><strong>Treat this as a half-day trip:</strong> There isn't enough here to fill a full day on its own.</li>
                    <li><strong>Combine with Ghatshila:</strong> Both are quiet, low-key stops in a similar direction from Jamshedpur.</li>
                    <li><strong>Wear sun protection:</strong> Open reservoir edges offer little shade.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Bring your own food and water", "Go boating on the reservoir", "Combine with a Ghatshila visit", "Visit in the cooler months for comfort", "Carry sun protection"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect built-up tourist facilities", "Plan a full day around Chandil alone", "Rely on finding food/water on site", "Visit expecting a formal boating operator with fixed hours", "Skip sun protection during midday visits"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Chandil", "Chandil Dam", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={CHANDIL_GEAR} destination="Chandil" />
              <RelatedPostsGrid currentSlug="chandil-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="chandil-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
