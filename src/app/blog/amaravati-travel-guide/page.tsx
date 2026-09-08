// src/app/blog/amaravati-travel-guide/page.tsx
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
  title: "Amaravati Travel Guide: Ancient Buddhist Stupa & New Capital",
  description:
    "The complete Amaravati travel guide. The Amaravati Stupa, the Amaravati school of sculpture, the Archaeological Museum, the state's new capital development, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Amaravati travel guide, Amaravati Stupa, Amaravati school of sculpture, Amaravati Archaeological Museum, Andhra Pradesh new capital, best time to visit Amaravati, how to reach Amaravati",
  openGraph: {
    title: "Amaravati Travel Guide: Ancient Buddhist Stupa & New Capital",
    description: "A 2,000-year-old Buddhist stupa site that gave its name to a distinct school of sculpture, now also the site of Andhra Pradesh's planned new capital — the complete guide to Amaravati.",
    url: "https://club.kudozz.in/blog/amaravati-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Ancient stupa ruins representative of Amaravati, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Amaravati Travel Guide: Ancient Buddhist Stupa & New Capital", description: "An ancient Buddhist stupa site and Andhra Pradesh's planned new capital — the complete guide to Amaravati.", images: ["/images/destinations/hampi/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/amaravati-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Amaravati Travel Guide: Ancient Buddhist Stupa & New Capital",
      description: "The complete Amaravati travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/amaravati-travel-guide" },
      about: { "@type": "Place", name: "Amaravati", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Amaravati Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Amaravati?", a: "Half a day is enough to cover the stupa site and the Archaeological Museum — most travelers visit as a day trip from Vijayawada rather than staying overnight." },
  { q: "What is the best time to visit Amaravati?", a: "October to March offers the most comfortable weather for walking the open stupa site under the sun." },
  { q: "How do I reach Amaravati?", a: "The nearest airport is Vijayawada (~35km), which is also the practical base for most visitors. Road access from Vijayawada is straightforward." },
  { q: "What is the Amaravati school of sculpture?", a: "A distinctive style of Buddhist art that developed at this site roughly 2,000 years ago, genuinely influential across South and Southeast Asian Buddhist art. Much of the original carved limestone is now dispersed to museums, including the British Museum and the Government Museum in Chennai." },
  { q: "Is Amaravati India's new capital city now?", a: "Amaravati is the site chosen for Andhra Pradesh's planned new state capital, a large-scale government development that has been ongoing and evolving over recent years — verify current status before expecting a finished showcase city." },
  { q: "What is the budget for a trip to Amaravati?", a: "This is a low-cost day-trip destination — a half-day visit including museum entry and transport from Vijayawada typically runs well under ₹1,000 per person." },
  { q: "Can I combine Amaravati with other Andhra Pradesh destinations?", a: "Yes — it's most commonly combined with Vijayawada (cross-reference that guide) as a half-day or full-day add-on given the short distance." },
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
  { id: "introduction", title: "Why Amaravati?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Amaravati", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AMARAVATI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the open stupa site and museum visit", emoji: "🏛️",
  items: [
    { name: "Sun Hat & Sunscreen", description: "The stupa grounds are open and exposed with little shade.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"), tag: "Site essential", tagColor: "bg-amber-100 text-amber-700", why: "There's genuinely little shade across the open excavation site." },
    { name: "Comfortable Walking Shoes", description: "For walking the stupa grounds and the Archaeological Museum galleries.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-sky-100 text-sky-700", why: "Covers a fair amount of ground between the stupa and the museum." },
    { name: "Reusable Water Bottle", description: "Facilities are limited across the open archaeological site.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "This is a low-infrastructure day-trip stop — bring your own water." },
    { name: "Camera", description: "For the surviving carvings at the museum and the stupa site itself.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Heritage essential", tagColor: "bg-purple-100 text-purple-700", why: "The Archaeological Museum's surviving Amaravati-school carvings are genuinely worth documenting." },
  ],
}];

export default function AmaravatiGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Ancient stupa ruins representative of Amaravati, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Amaravati", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Amaravati", "Buddhist Heritage", "Heritage", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Amaravati Travel Guide: Ancient Buddhist Stupa & New Capital
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A 2,000-year-old Buddhist stupa site that gave its name to a distinct school of sculpture, now also the site of Andhra Pradesh's planned new capital.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Amaravati, Andhra Pradesh" },
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
                  <h2>Why Amaravati?</h2>
                  <p>
                    <strong>Amaravati</strong> holds two entirely separate claims to significance, layered on the same ground. The first is ancient: the <strong>Amaravati Stupa</strong> (Mahachaitya), a major Buddhist site dating back roughly 2,000 years to the Satavahana period, genuinely important enough in Buddhist art history to have given its name to the "Amaravati school" of sculpture — a distinctive style that influenced Buddhist art across South and Southeast Asia.
                  </p>
                  <p>
                    The second is contemporary: Amaravati is the site chosen for Andhra Pradesh's planned new state capital, a large-scale, still-developing government project. The two sit side by side — 2,000-year-old ruins and a 21st-century capital under construction — a genuinely unusual juxtaposition worth seeing for what it actually is right now, rather than an imagined finished version.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Amaravati at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Amaravati Stupa" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Vijayawada (~35km)" },
                        { icon: "🏗️", label: "Also Known For", value: "AP's planned new capital" },
                        { icon: "💰", label: "Budget", value: "Low-cost day trip" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Amaravati</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for walking the open stupa grounds." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Very hot with little shade at the site — plan an early morning visit if traveling in this window." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Humid with periodic rain, though the museum stays accessible." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Early morning between November and February — cool enough for a proper look around the open site.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Amaravati</h2>
                  <ul>
                    <li><strong>By Air:</strong> Vijayawada (~35km) is the nearest airport and the practical base for most visitors.</li>
                    <li><strong>By Road:</strong> A short, straightforward drive from Vijayawada.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Verify current status of the wider capital-city development before visiting — parts of it are still ongoing construction, not a finished city to tour.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Amaravati</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Ancient ruins around Amaravati" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Amaravati Stupa (Mahachaitya):</strong> The core ancient Buddhist stupa site, roughly 2,000 years old.</li>
                    <li><strong>Amaravati Archaeological Museum:</strong> Houses a genuine and worthwhile collection of surviving Amaravati-school carvings.</li>
                    <li><strong>New capital area:</strong> The site of Andhra Pradesh's planned new capital, an ongoing development worth seeing for what it currently is.</li>
                  </ul>
                  <blockquote>Much of the stupa's original artistic legacy is dispersed elsewhere — a substantial portion sits in the British Museum and the Government Museum in Chennai. Set expectations for what remains on-site versus what's in those collections.</blockquote>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Amaravati</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "Limited on-site", picks: ["Basic guesthouses in the area", "Most travelers base in Vijayawada instead"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Mid-range hotels in Vijayawada (~35km)"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night", picks: ["Premium hotels in Vijayawada"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Amaravati has limited standalone accommodation — Vijayawada is genuinely the practical base for most visitors.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Amaravati</h2>
                  <ul>
                    <li><strong>Andhra thali:</strong> Widely available in and around Vijayawada, the practical base.</li>
                    <li><strong>Local snack stalls:</strong> Simple options near the stupa site for a quick bite.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Amaravati Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Stupa & Museum", color: "bg-amber-700", activities: ["Drive from Vijayawada", "Visit the Amaravati Stupa site", "Explore the Archaeological Museum", "Return to Vijayawada or continue onward"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Approx. Cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Museum entry", "₹50–₹100"],
                          ["Local transport from Vijayawada (round trip)", "₹500–₹1,200"],
                          ["Food", "₹200–₹400"],
                          ["Half-day total (per person)", "₹750–₹1,700"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Vijayawada itself.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Amaravati</h2>
                  <ul>
                    <li><strong>Base yourself in Vijayawada:</strong> Amaravati has limited standalone accommodation.</li>
                    <li><strong>Visit the museum properly:</strong> It's where most of the remaining Amaravati-school art actually is.</li>
                    <li><strong>Set realistic expectations for the new capital:</strong> This is an ongoing development, not a finished showcase.</li>
                    <li><strong>Go early to beat the heat:</strong> The open stupa site has little shade.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the Archaeological Museum for the surviving carvings", "Combine with Vijayawada as a half-day trip", "Go early to avoid the midday heat", "Check current new-capital development status", "Carry water given limited on-site facilities"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a finished showcase capital city", "Skip the museum and only see the outdoor site", "Visit at midday in summer without sun protection", "Plan an overnight stay without checking Vijayawada options first", "Expect all original artwork to still be on-site"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Amaravati", "Buddhist Heritage", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AMARAVATI_GEAR} destination="Amaravati" />
              <RelatedPostsGrid currentSlug="amaravati-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="amaravati-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
