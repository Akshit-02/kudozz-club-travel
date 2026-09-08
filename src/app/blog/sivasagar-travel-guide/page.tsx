// src/app/blog/sivasagar-travel-guide/page.tsx
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
  title: "Sivasagar Travel Guide: Ahom Dynasty Capital & Ancient Tanks",
  description:
    "The complete Sivasagar travel guide. Sivasagar Tank, Shiva Dol, Rang Ghar amphitheatre, Talatal Ghar, where to stay, best time to visit, and a full itinerary through Assam's Ahom dynasty capital.",
  keywords:
    "Sivasagar travel guide, Sibsagar Tank, Shiva Dol, Rang Ghar, Talatal Ghar, Ahom dynasty Assam, best time to visit Sivasagar, how to reach Sivasagar",
  openGraph: {
    title: "Sivasagar Travel Guide: Ahom Dynasty Capital & Ancient Tanks",
    description: "The former capital of the 600-year Ahom dynasty, ringed by a massive man-made tank and three of Assam's grandest surviving temples — the complete guide to Sivasagar.",
    url: "https://club.kudozz.in/blog/sivasagar-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Heritage architecture representative of Sivasagar, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Sivasagar Travel Guide: Ahom Dynasty Capital & Ancient Tanks", description: "The former capital of the 600-year Ahom dynasty — the complete guide to Sivasagar.", images: ["/images/destinations/hampi/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/sivasagar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Sivasagar Travel Guide: Ahom Dynasty Capital & Ancient Tanks",
      description: "The complete Sivasagar travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/sivasagar-travel-guide" },
      about: { "@type": "Place", name: "Sivasagar", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Sivasagar Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Sivasagar?", a: "One day covers the Sivasagar Tank temples, Rang Ghar, and Talatal Ghar comfortably. Add a half-day if combining with a Charaideo day trip." },
  { q: "What is the best time to visit Sivasagar?", a: "October to March offers the most comfortable weather for walking between the various historical sites." },
  { q: "How do I reach Sivasagar?", a: "The nearest airport is Jorhat (~60km) or Dibrugarh, and Sivasagar has its own well-connected railway station." },
  { q: "Who were the Ahoms?", a: "A dynasty that ruled Assam for roughly 600 years, one of the longest-reigning regional dynasties in Indian history, notably resisting repeated Mughal invasion attempts. Sivasagar was one of their capitals." },
  { q: "What is Rang Ghar?", a: "A distinctive oval-shaped Ahom-era amphitheatre/pavilion, believed to be one of the oldest surviving structures of its kind in Asia, historically used for royal entertainment." },
  { q: "Can I combine Sivasagar with Charaideo?", a: "Yes — Charaideo, the Ahom royal burial site, pairs naturally with Sivasagar for a fuller day exploring Ahom dynasty heritage. See our dedicated Charaideo guide." },
  { q: "What is the budget for a trip to Sivasagar?", a: "A budget traveler can manage on roughly ₹1,300 a day, a mid-range trip closer to ₹3,000 a day for a 1-day visit." },
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
  { id: "introduction", title: "Why Sivasagar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sivasagar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SIVASAGAR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a day of Ahom-heritage exploring", emoji: "🏛️",
  items: [
    { name: "Comfortable Walking Shoes", description: "For covering the Sivasagar Tank temples, Rang Ghar, and Talatal Ghar across a single day.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "The main sites are spread across town, adding up to real distance over a day." },
    { name: "Sun Hat", description: "Many of the historical sites are outdoors with limited shade.", price: "₹399", rating: 4.3, reviews: "4.1k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "The tank and amphitheatre sites offer little shade during midday visits." },
    { name: "Camera", description: "For the tank's temple reflections and Rang Ghar's genuinely unique architecture.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Sivasagar's Ahom-era architecture is genuinely photogenic and distinctive." },
    { name: "Reusable Water Bottle", description: "For a full day of walking between spread-out heritage sites.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Facilities thin out between the main sites." },
  ],
}];

export default function SivasagarGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Heritage architecture representative of Sivasagar, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Sivasagar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Sivasagar", "Ahom Dynasty", "Heritage", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Sivasagar Travel Guide: Ahom Dynasty Capital & Ancient Tanks
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The former capital of the 600-year Ahom dynasty, ringed by a massive man-made tank and three of Assam's grandest surviving temples.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Sivasagar, Assam" },
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
                  <h2>Why Sivasagar?</h2>
                  <p>
                    <strong>Sivasagar</strong> was a capital of the Ahom dynasty, which ruled Assam for roughly 600 years — one of the longest-reigning regional dynasties in Indian history, genuinely notable for successfully resisting repeated Mughal invasion attempts. The town today offers a window into this pre-colonial Assamese royal history that's comparatively little-known outside the region.
                  </p>
                  <p>
                    The centrepiece is <strong>Sivasagar Tank</strong>, a massive man-made water tank built by the Ahom rulers, ringed by three major temples — Shiva Dol, Vishnu Dol, and Devi Dol — plus Rang Ghar, a distinctive oval amphitheatre believed to be one of the oldest surviving structures of its kind in Asia.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Sivasagar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🏛️", label: "Key Site", value: "Sivasagar Tank & Shiva Dol" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Jorhat (~60km)" },
                        { icon: "👑", label: "History", value: "Ahom dynasty capital" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Sivasagar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable, dry weather for walking between the various heritage sites." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain, less comfortable for extensive outdoor sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March for comfortable outdoor walking between the tank, temples, and Rang Ghar.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sivasagar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jorhat Airport (~60km) or Dibrugarh are the nearest options.</li>
                    <li><strong>By Train:</strong> Sivasagar has its own railway station.</li>
                    <li><strong>By Road:</strong> Straightforward road access from Jorhat or Dibrugarh.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a local guide for the day — the Ahom dynasty's history is genuinely rich but not always well-signposted on-site.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Sivasagar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Ahom-era heritage architecture in Sivasagar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sivasagar Tank:</strong> A large Ahom-era man-made tank ringed by three major temples.</li>
                    <li><strong>Shiva Dol:</strong> One of the tallest Shiva temples in India, on the tank's edge.</li>
                    <li><strong>Vishnu Dol and Devi Dol:</strong> The tank's two companion temples, together forming a significant Ahom-period religious complex.</li>
                    <li><strong>Rang Ghar:</strong> A distinctive oval amphitheatre/pavilion, believed among the oldest surviving structures of its kind in Asia, once used for royal entertainment.</li>
                    <li><strong>Talatal Ghar:</strong> An Ahom-era structure with reported underground levels, worth a stop for its architectural history.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Sivasagar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses near the town centre", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,800/night", picks: ["Mid-range hotels in central Sivasagar"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options here are genuinely limited"] },
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
                  <h2>What to Eat in Sivasagar</h2>
                  <ul>
                    <li><strong>Khar and tenga:</strong> Classic Assamese preparations available at local restaurants.</li>
                    <li><strong>Pitha:</strong> Traditional rice cakes, worth trying at local sweet shops.</li>
                    <li><strong>Assam tea:</strong> Widely available, given the region's tea-growing heritage.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Sivasagar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Sivasagar Tank & Temples", color: "bg-amber-700", activities: ["Visit Shiva Dol, Vishnu Dol, and Devi Dol", "Walk around Sivasagar Tank"] },
                      { day: "Afternoon", title: "Ahom Landmarks", color: "bg-forest-600", activities: ["Rang Ghar amphitheatre", "Talatal Ghar", "Optional: continue to Charaideo (see dedicated guide)"] },
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
                          ["Accommodation/night", "₹800", "₹2,000"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport + guide", "₹200", "₹300"],
                          ["Daily total", "₹1,300", "₹3,000"],
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
                  <h2>Essential Travel Tips for Sivasagar</h2>
                  <ul>
                    <li><strong>Hire a local guide:</strong> Ahom-era history is genuinely rich but not always well-signposted on-site.</li>
                    <li><strong>Combine with Charaideo:</strong> The Ahom royal burial mounds pair naturally with a Sivasagar day.</li>
                    <li><strong>Visit Rang Ghar for the architecture alone:</strong> A genuinely unique, historically significant structure.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a local guide for Ahom dynasty context", "Combine with Charaideo for a fuller heritage day", "Visit Rang Ghar for its unique architecture", "Walk the full Sivasagar Tank temple circuit", "Try local Assamese food at a town eatery"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Skip Rang Ghar assuming it's a minor stop", "Expect extensive tourist infrastructure", "Visit without any background on Ahom history", "Rush through the tank temples", "Underestimate walking distances between sites"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Sivasagar", "Ahom Dynasty", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SIVASAGAR_GEAR} destination="Sivasagar" />
              <RelatedPostsGrid currentSlug="sivasagar-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="sivasagar-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
