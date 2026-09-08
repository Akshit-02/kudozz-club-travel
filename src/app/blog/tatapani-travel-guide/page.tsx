// src/app/blog/tatapani-travel-guide/page.tsx
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
  title: "Tatapani Travel Guide: Chhattisgarh's Natural Hot Springs",
  description:
    "The complete Tatapani travel guide. Sulphur hot springs on the Rihand River, the local temple, where to stay, best time to visit, and honest tips for this off-the-radar Chhattisgarh site.",
  keywords:
    "Tatapani travel guide, Tatapani hot springs Chhattisgarh, Balrampur hot springs, best time to visit Tatapani, how to reach Tatapani, Chhattisgarh off-beat destinations",
  openGraph: {
    title: "Tatapani Travel Guide: Chhattisgarh's Natural Hot Springs",
    description: "Sulphur-rich natural hot springs on the Rihand River, believed to have therapeutic properties and revered locally as sacred — the complete guide to Tatapani.",
    url: "https://club.kudozz.in/blog/tatapani-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jammu-kashmir/dal.jpg", width: 1200, height: 630, alt: "Natural water and forest landscape representative of Tatapani, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Tatapani Travel Guide: Chhattisgarh's Natural Hot Springs", description: "Sulphur hot springs on the Rihand River — the complete guide to Tatapani.", images: ["/images/destinations/jammu-kashmir/dal.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/tatapani-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Tatapani Travel Guide: Chhattisgarh's Natural Hot Springs",
      description: "The complete Tatapani travel guide.",
      image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tatapani-travel-guide" },
      about: { "@type": "Place", name: "Tatapani", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Tatapani Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need at Tatapani?", a: "Half a day is enough to visit the springs and the small local temple — this is a quick stop rather than a multi-day destination." },
  { q: "Are Tatapani's hot springs medically therapeutic?", a: "Locals believe the sulphur-rich water helps with skin conditions and joint ailments, a tradition worth respecting — but this is local belief, not a verified medical claim, and shouldn't replace proper medical care." },
  { q: "How do I reach Tatapani?", a: "Ambikapur, roughly 55-60km away, is the nearest airport and railway access point. Road access from Ambikapur is the standard route." },
  { q: "What is the best time to visit Tatapani?", a: "October to March is most comfortable overall, though the springs themselves are a year-round feature." },
  { q: "Is Tatapani developed for tourists?", a: "No — this is a genuinely off-the-radar site with minimal tourist infrastructure. Bring your own supplies and go with quiet, low-key expectations." },
  { q: "Can I combine Tatapani with other Chhattisgarh destinations?", a: "It's fairly remote relative to Chhattisgarh's other sites — most travelers combine it with other Balrampur/Ambikapur-area stops rather than a broader state circuit." },
  { q: "What is the budget for a trip to Tatapani?", a: "A budget traveler can manage on roughly ₹1,000 a day given the minimal facilities and low-cost nature of the site itself." },
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
  { id: "introduction", title: "Why Tatapani?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tatapani", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TATAPANI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a quiet, minimal-facility hot springs visit", emoji: "♨️",
  items: [
    { name: "Swimwear", description: "For entering the springs, if you plan to bathe.", price: "₹499", rating: 4.3, reviews: "3.1k", image: "🩱", affiliateUrl: amazonSearchUrl("swimwear+travel"), tag: "Springs essential", tagColor: "bg-sky-100 text-sky-700", why: "There are no changing facilities to speak of — plan accordingly." },
    { name: "Quick-Dry Towel", description: "Compact and practical for a site with minimal facilities.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧻", affiliateUrl: amazonSearchUrl("quick+dry+travel+towel"), tag: "Practical essential", tagColor: "bg-amber-100 text-amber-700", why: "A regular towel takes too long to dry and pack again at an undeveloped site." },
    { name: "Sandals", description: "Comfortable, easy-to-remove footwear for the springs and surrounding area.", price: "₹499", rating: 4.3, reviews: "5.2k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Easy on and off matters at a site built around bathing." },
    { name: "Reusable Water Bottle", description: "Facilities near the springs are minimal — carry your own water.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Remote-site essential", tagColor: "bg-purple-100 text-purple-700", why: "This is a genuinely undeveloped site — don't count on nearby shops." },
  ],
}];

export default function TatapaniGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Natural water and forest landscape representative of Tatapani, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tatapani", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tatapani", "Hot Springs", "Off-beat", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tatapani Travel Guide: Chhattisgarh's Natural Hot Springs
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Sulphur-rich natural hot springs on the Rihand River, believed to have therapeutic properties and revered locally as sacred.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tatapani, Chhattisgarh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,300 words" },
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
                  <h2>Why Tatapani?</h2>
                  <p>
                    <strong>Tatapani</strong> ("hot water" in Hindi — a name shared by several hot spring sites across India) sits in Chhattisgarh's Balrampur district, on the banks of the Rihand River. Sulphur-rich natural hot springs bubble up here, locally believed to help with skin conditions and joint ailments, and a small temple at the site reflects its status as a locally sacred spot.
                  </p>
                  <p>
                    This is a genuinely off-the-radar destination with minimal tourist development — the appeal here is precisely that it's quiet, unpolished, and unlikely to be crowded.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>♨️</span> Tatapani at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "♨️", label: "Key Feature", value: "Sulphur hot springs" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Ambikapur (~55-60km)" },
                        { icon: "🌊", label: "River", value: "Rihand River" },
                        { icon: "💰", label: "Budget/Day", value: "~₹1,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tatapani</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather makes the overall visit more pleasant, though the springs themselves are a year-round feature." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warmer conditions make the trip out here less comfortable, though still feasible." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain can affect road access to this remote site — verify conditions before travelling." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for the drive and the visit itself.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tatapani</h2>
                  <ul>
                    <li><strong>By Air/Rail:</strong> Ambikapur, roughly 55-60km away, is the nearest airport and railway access point.</li>
                    <li><strong>By Road:</strong> Road access from Ambikapur is the standard and only practical route — this is a genuinely remote destination.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Confirm road conditions from Ambikapur before setting out, especially outside the dry season.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Tatapani</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Water and forest scenery around Tatapani" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The hot springs:</strong> Sulphur-rich natural springs on the Rihand River, locally believed to have therapeutic properties.</li>
                    <li><strong>The local temple:</strong> A small shrine at the site reflecting its sacred local status.</li>
                    <li><strong>Balrampur district scenery:</strong> Forested surroundings worth a short walk if extending your stay.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Tatapani</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹400–₹1,000/night", picks: ["Basic guesthouses in Ambikapur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,200–₹2,500/night", picks: ["Simple hotels in Ambikapur town"] },
                      { tier: "Luxury", icon: "✨", range: "Not available", picks: ["No genuine luxury options near the site itself"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most visitors base themselves in Ambikapur and treat Tatapani as a day trip.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Tatapani</h2>
                  <p>Bring your own snacks and water — facilities at the site itself are minimal.</p>
                  <ul>
                    <li><strong>Ambikapur town eateries:</strong> Simple Chhattisgarhi meals available before or after the trip out to the springs.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Tatapani Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Drive & Springs", color: "bg-amber-700", activities: ["Drive from Ambikapur", "Visit the hot springs and temple", "Relaxed time by the river"] },
                      { day: "Afternoon", title: "Return", color: "bg-forest-600", activities: ["Drive back to Ambikapur", "Onward travel or overnight stay"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Budget"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night (Ambikapur)", "₹600"],
                          ["Food/day", "₹250"],
                          ["Local transport (round trip)", "₹500"],
                          ["Daily total", "~₹1,000"],
                        ].map(([exp, b], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. This is a low-cost, minimal-facility destination.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Tatapani</h2>
                  <ul>
                    <li><strong>Bring your own supplies:</strong> Facilities near the springs are minimal.</li>
                    <li><strong>Respect the site's local sacred status:</strong> This is a locally revered spot, not just a tourist attraction.</li>
                    <li><strong>Treat therapeutic claims as tradition, not medicine:</strong> Enjoy the springs, but don't substitute them for proper medical care.</li>
                    <li><strong>Confirm road conditions before travelling:</strong> Especially outside the dry season.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Bring your own water and snacks", "Respect the site's local sacred status", "Confirm road conditions before setting out", "Base yourself in Ambikapur", "Go with quiet, low-key expectations"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect developed tourist facilities", "Treat the springs as a medical treatment", "Travel here without confirming road access first", "Arrive without cash or supplies", "Expect luxury accommodation nearby"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Tatapani", "Hot Springs", "Off-beat", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TATAPANI_GEAR} destination="Tatapani" />
              <RelatedPostsGrid currentSlug="tatapani-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="tatapani-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
