// src/app/blog/sirpur-travel-guide/page.tsx
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
  title: "Sirpur Travel Guide: Ancient Buddhist Ruins on the Mahanadi",
  description:
    "The complete Sirpur travel guide. The Buddha Vihara monastery complex, Lakshmana Temple's ancient brick architecture, Gandheshwar Temple, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Sirpur travel guide, Sirpur ruins, Lakshmana Temple Sirpur, Buddha Vihara Sirpur, Sirpur archaeological site, best time to visit Sirpur, how to reach Sirpur, Mahanadi river Chhattisgarh, Sirpur Buddhist monastery",
  openGraph: {
    title: "Sirpur Travel Guide: Ancient Buddhist Ruins on the Mahanadi",
    description: "A 1,500-year-old riverside city with excavated monasteries, temples, and one of India's most significant ongoing archaeological digs — the complete guide to Sirpur.",
    url: "https://club.kudozz.in/blog/sirpur-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Ancient stone ruins representative of Sirpur, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Sirpur Travel Guide: Ancient Buddhist Ruins on the Mahanadi", description: "1,500-year-old excavated monasteries and temples on the Mahanadi — the complete guide to Sirpur.", images: ["/images/destinations/hampi/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/sirpur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Sirpur Travel Guide: Ancient Buddhist Ruins on the Mahanadi",
      description: "The complete Sirpur travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/sirpur-travel-guide" },
      about: { "@type": "Place", name: "Sirpur", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Sirpur Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Sirpur?", a: "A single day is enough to see the main excavated sites — the Buddha Vihara complex, Lakshmana Temple, and Gandheshwar Temple — comfortably." },
  { q: "What is the best time to visit Sirpur?", a: "October to March, for comfortable weather across a day of walking between the excavated sites." },
  { q: "How do I reach Sirpur?", a: "The nearest airport is Raipur, about 85km away. Sirpur is more commonly reached by road from Raipur or Mahasamund than by direct rail." },
  { q: "Is Sirpur a UNESCO World Heritage Site?", a: "The Sirpur Group of Monuments has been proposed for and considered on India's UNESCO tentative list, but travelers should verify current inscription status rather than assume full UNESCO World Heritage status." },
  { q: "What makes Sirpur historically significant?", a: "It was a major city roughly from the 5th to 12th centuries CE under regional dynasties including the Sharabhapuriyas and Panduvamshis, and excavations here have revealed one of India's most substantial concentrations of ancient Buddhist monastic remains alongside Hindu and Jain structures." },
  { q: "Is a guide necessary at Sirpur?", a: "Not mandatory, but genuinely helpful — the site's history spans multiple dynasties and religious traditions, and a guide brings useful context to what would otherwise be a fairly quiet, unexplained ruins visit." },
  { q: "What is the budget for a trip to Sirpur?", a: "A budget traveler can manage this as a low-cost day trip from Raipur, roughly ₹1,500-2,000 for the day including transport and food." },
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
  { id: "introduction", title: "Why Sirpur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sirpur", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SIRPUR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a day walking an open archaeological site", emoji: "🏛️",
  items: [
    { name: "Comfortable Walking Shoes", description: "The excavated site spans several separate complexes with uneven, sun-exposed ground between them.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Site-visit essential", tagColor: "bg-amber-100 text-amber-700", why: "Ancient brick and stone remains sit on uneven excavated ground across a wide area." },
    { name: "Sun Hat & Sunscreen", description: "Sirpur's excavated ruins offer little shade across a multi-hour visit.", price: "₹599", rating: 4.4, reviews: "5.0k", image: "🧴", affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"), tag: "Sun essential", tagColor: "bg-orange-100 text-orange-700", why: "The open excavated grounds have minimal tree cover." },
    { name: "Reusable Water Bottle", description: "Facilities are limited around the archaeological site itself.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-sky-100 text-sky-700", why: "There's little in the way of shops or refreshment stands directly at the site." },
    { name: "Camera with Zoom Lens", description: "For capturing the brick temple detail and excavated monastery layouts.", price: "₹—", rating: 4.4, reviews: "3.1k", image: "📷", affiliateUrl: amazonSearchUrl("camera+zoom+lens+travel"), tag: "Photography essential", tagColor: "bg-forest-100 text-forest-700", why: "Lakshmana Temple's brickwork detail rewards a closer look than a phone camera usually captures." },
  ],
}];

export default function SirpurGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Ancient stone ruins representative of Sirpur, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Sirpur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Sirpur", "Chhattisgarh", "Heritage", "Buddhist Ruins"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Sirpur Travel Guide: Ancient Buddhist Ruins on the Mahanadi
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A 1,500-year-old riverside city with excavated monasteries, temples, and one of India's most significant ongoing archaeological digs.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Sirpur, Chhattisgarh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Sirpur?</h2>
                  <p>
                    <strong>Sirpur</strong> sits on the banks of the Mahanadi River, and for several centuries — roughly the 5th to 12th CE, under regional dynasties including the Sharabhapuriyas and Panduvamshis — it was a major city and a significant centre for Buddhism, Hinduism, and Jainism side by side. Ongoing archaeological excavations here have revealed one of India's most substantial concentrations of ancient Buddhist monastic remains, making Sirpur genuinely one of Central India's more important, if still under-visited, heritage sites.
                  </p>
                  <p>
                    Unlike a finished, fully-restored monument, Sirpur has an actively evolving character — excavation work continues to uncover more of the ancient city, and each visit can turn up something slightly different from the last.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Sirpur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🏛️", label: "Key Site", value: "Lakshmana Temple & Buddha Vihara" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Raipur (~85km)" },
                        { icon: "📜", label: "Era", value: "5th – 12th century CE" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹2,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Sirpur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather for a day spent walking between excavated sites in open ground." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "The exposed excavated grounds get uncomfortably hot for extended midday walking." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "The Mahanadi rises and the site turns lush, but rain can disrupt a full day of outdoor sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for a full day among the excavated ruins.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sirpur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Raipur, about 85km away, has the nearest airport.</li>
                    <li><strong>By Rail:</strong> Sirpur has limited local rail connections — most travelers reach it by road.</li>
                    <li><strong>By Road:</strong> Road access from Raipur or Mahasamund is the standard route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a car and driver from Raipur for a comfortable day trip — public transport connections to Sirpur are limited.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See in Sirpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Excavated ancient ruins at Sirpur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Lakshmana Temple:</strong> A well-preserved 7th-century brick temple, notable as one of India's finest surviving examples of ancient brick temple architecture.</li>
                    <li><strong>Buddha Vihara complex:</strong> Excavated monastery remains including a large Buddha statue, part of Sirpur's substantial Buddhist heritage.</li>
                    <li><strong>Gandheshwar Temple:</strong> A riverbank temple with a Shiva lingam, beside the Mahanadi.</li>
                    <li><strong>Ongoing excavation areas:</strong> The site continues to be actively excavated, so new finds and areas may be visible depending on when you visit.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Sirpur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "Very limited on-site", picks: ["Basic local guesthouses", "Better options in Mahasamund or Raipur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night (Raipur)", picks: ["Business hotels in Raipur", "Mahasamund town hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night (Raipur)", picks: ["Premium hotels in Raipur"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most visitors treat Sirpur as a day trip from Raipur rather than an overnight stop.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Sirpur</h2>
                  <ul>
                    <li><strong>Local thalis:</strong> Simple Chhattisgarhi vegetarian meals near the site or in Mahasamund.</li>
                    <li><strong>Raipur dining:</strong> A far wider range of options if you're basing there for the day trip.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Sirpur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Buddha Vihara & Lakshmana Temple", color: "bg-amber-700", activities: ["Depart Raipur early", "Explore the Buddha Vihara complex", "Visit Lakshmana Temple's brick architecture"] },
                      { day: "Afternoon", title: "Gandheshwar Temple & Return", color: "bg-forest-600", activities: ["Riverside visit to Gandheshwar Temple", "Explore any newer excavation areas", "Return drive to Raipur"] },
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
                          ["Car/driver for the day", "₹1,500", "₹2,500"],
                          ["Entry fees & guide", "₹300", "₹600"],
                          ["Food/day", "₹300", "₹700"],
                          ["Day total", "₹2,100", "₹3,800"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Raipur. Entry fees are approximate — confirm current ASI rates locally before you go.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Sirpur</h2>
                  <ul>
                    <li><strong>Hire a guide:</strong> The site's multi-dynasty, multi-religion history benefits from real context.</li>
                    <li><strong>Carry water and sun protection:</strong> Little shade across the excavated grounds.</li>
                    <li><strong>Check the on-site museum:</strong> If open, it displays excavated artifacts worth seeing alongside the ruins themselves.</li>
                    <li><strong>Treat it as a day trip from Raipur:</strong> Accommodation right at Sirpur is very limited.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a guide for historical context", "Carry water and sun protection", "Visit the on-site museum if open", "Treat this as a Raipur day trip", "Allow real time to explore all three main sites"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume full UNESCO World Heritage status without checking", "Visit at midday in peak summer without shade breaks", "Expect on-site accommodation", "Rush the visit past all three main complexes", "Skip a guide expecting on-site signage to explain everything"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Sirpur", "Chhattisgarh", "Heritage", "Buddhist Ruins", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SIRPUR_GEAR} destination="Sirpur" />
              <RelatedPostsGrid currentSlug="sirpur-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="sirpur-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
