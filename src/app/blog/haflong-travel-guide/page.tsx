// src/app/blog/haflong-travel-guide/page.tsx
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
  title: "Haflong Travel Guide: Assam's Only Hill Station",
  description:
    "The complete Haflong travel guide. Haflong Lake, Dima Hasao's tribal communities, Jatinga's bird phenomenon, where to stay, best time to visit, and a full itinerary through Assam's only hill station.",
  keywords:
    "Haflong travel guide, Dima Hasao, North Cachar Hills, Haflong Lake, Jatinga bird phenomenon, best time to visit Haflong, how to reach Haflong, Assam hill station",
  openGraph: {
    title: "Haflong Travel Guide: Assam's Only Hill Station",
    description: "A lake-centred hill town in the North Cachar Hills, home to a genuinely diverse mix of hill tribes rarely visited by outside travelers — the complete guide to Haflong.",
    url: "https://club.kudozz.in/blog/haflong-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Hill and lake scenery representative of Haflong, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Haflong Travel Guide: Assam's Only Hill Station", description: "Assam's only hill station, in the diverse North Cachar Hills — the complete guide to Haflong.", images: ["/images/destinations/manali/solang-valley.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/haflong-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Haflong Travel Guide: Assam's Only Hill Station",
      description: "The complete Haflong travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/haflong-travel-guide" },
      about: { "@type": "Place", name: "Haflong", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Haflong Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Haflong?", a: "One to two days covers the town's lake and viewpoints. Add extra time if you're combining it with Jatinga village or trekking in the surrounding hills." },
  { q: "What is the best time to visit Haflong?", a: "October to March is coolest and clearest for general sightseeing. If the Jatinga phenomenon specifically interests you, that occurs on particular nights typically within a September–November window — verify current information before planning around it." },
  { q: "How do I reach Haflong?", a: "The nearest airport is Silchar, about 90km away. Guwahati's airport is a much longer drive at roughly 310km. Haflong has its own railway station, and road access is the standard route given the area's remoteness." },
  { q: "What is the Jatinga bird phenomenon?", a: "A genuinely documented and studied occurrence near Jatinga village where certain bird species appear disoriented and descend toward lights on specific nights, mostly during the monsoon-to-post-monsoon period. The exact cause remains debated among ornithologists. It happens on particular nights in a narrow window, not something you can reliably plan a trip around, and should be observed responsibly." },
  { q: "Who lives in the Dima Hasao district?", a: "The district is genuinely one of the most ethnically diverse in Northeast India, home to communities including the Dimasa, Zeme Naga, and Hmar, each with distinct languages and customs." },
  { q: "Is Haflong touristy?", a: "No — it's genuinely one of the least-visited corners of Assam's tourist circuit, with limited developed infrastructure. This suits travelers specifically looking for an off-the-radar destination." },
  { q: "What is the budget for a trip to Haflong?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,500 a day. Given limited accommodation options, book ahead." },
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
  { id: "introduction", title: "Why Haflong?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Haflong", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const HAFLONG_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a remote, forested hill-station trip", emoji: "🏔️",
  items: [
    { name: "Comfortable Walking Shoes", description: "For exploring the hilly terrain around Haflong Lake and any nearby trekking trails.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes"), tag: "Trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Haflong's terrain is genuinely hilly — proper footwear matters throughout a visit." },
    { name: "Light Warm Layers", description: "The hill climate here is noticeably cooler than the Assam plains, especially in the mornings and evenings.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Climate essential", tagColor: "bg-sky-100 text-sky-700", why: "Haflong's elevation gives it a genuinely cooler microclimate than surrounding lowland Assam." },
    { name: "Insect Repellent", description: "Essential for the forested hill terrain, especially around the lake and any evening outings.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Dense forest cover around Haflong makes insect protection a practical necessity." },
    { name: "Power Bank", description: "Given the area's remoteness, a fully charged backup power source is a sensible precaution.", price: "₹1,299", rating: 4.4, reviews: "6.8k", image: "🔋", affiliateUrl: amazonSearchUrl("power+bank+travel"), tag: "Remote-travel essential", tagColor: "bg-purple-100 text-purple-700", why: "Limited infrastructure means charging opportunities can be less reliable than in bigger towns." },
  ],
}];

export default function HaflongGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Hill and lake scenery representative of Haflong, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Haflong", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Haflong", "North Cachar Hills", "Off-beat", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Haflong Travel Guide: Assam's Only Hill Station
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A lake-centred hill town in the North Cachar Hills, home to a genuinely diverse mix of hill tribes rarely visited by outside travelers.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Haflong, Assam" },
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
                  <h2>Why Haflong?</h2>
                  <p>
                    <strong>Haflong</strong> is Assam's only hill station, set in the Dima Hasao (North Cachar Hills) district — genuinely one of the least-visited corners of the state's tourist circuit. The town centres on a natural lake, and the surrounding district is home to a remarkably diverse mix of hill communities, including the Dimasa, Zeme Naga, and Hmar, each with distinct languages and customs.
                  </p>
                  <p>
                    Nearby Jatinga village is internationally known for a genuinely documented, still-debated phenomenon where certain bird species appear disoriented and descend toward lights on specific nights — a real occurrence worth understanding responsibly rather than treating as a guaranteed spectacle.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Haflong at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🏞️", label: "Key Site", value: "Haflong Lake" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Access", value: "Silchar (~90km)" },
                        { icon: "🪶", label: "Nearby", value: "Jatinga village" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Haflong</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear weather, most comfortable for general sightseeing and exploring the hills." },
                      { season: "Sept – Nov", emoji: "🪶", color: "bg-purple-50 border-purple-200", mood: "Jatinga phenomenon window", text: "The bird phenomenon at Jatinga occurs on specific nights within roughly this period — verify current, responsible information before planning around it." },
                      { season: "Apr – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Warmer, wetter", text: "Monsoon brings heavy rain to the hills — less ideal for general sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March for a comfortable general visit; research current details separately if the Jatinga phenomenon specifically interests you.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Haflong</h2>
                  <ul>
                    <li><strong>By Air:</strong> Silchar Airport, about 90km away, is the nearest.</li>
                    <li><strong>Alternative:</strong> Guwahati's airport is a much longer drive at roughly 310km.</li>
                    <li><strong>By Train:</strong> Haflong has its own railway station.</li>
                    <li><strong>By Road:</strong> The standard route given the area's remoteness — build in extra travel time.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> This is genuinely one of the harder-to-reach entries in Assam's tourist circuit — confirm transport arrangements for both directions before you go.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Haflong</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Hill scenery around Haflong" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Haflong Lake:</strong> A natural lake at the centre of town, the area's main scenic focal point, with boating available.</li>
                    <li><strong>Jatinga village:</strong> Site of the internationally documented bird phenomenon — visit with current, responsible information rather than treating it as a guaranteed show.</li>
                    <li><strong>Dima Hasao's tribal communities:</strong> One of the most ethnically diverse districts in the Northeast — engage respectfully with local culture and craft.</li>
                    <li><strong>Trekking in the surrounding hills:</strong> The forested terrain offers genuine trekking potential for adventurous travelers with local guidance.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Haflong</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,500/night", picks: ["Basic guesthouses in Haflong town", "Government circuit-house style stays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Lake-view mid-range hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Very limited", picks: ["Luxury options are genuinely scarce given the area's remoteness"] },
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
                  <h2>What to Eat in Haflong</h2>
                  <ul>
                    <li><strong>Local tribal cuisine:</strong> Dima Hasao's diverse communities each bring distinct dishes, worth seeking out at local eateries.</li>
                    <li><strong>Assamese staples:</strong> Khar, tenga, and pitha are commonly available.</li>
                    <li><strong>Simple guesthouse meals:</strong> Most accommodation options serve straightforward home-style food given limited restaurant infrastructure.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Haflong Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Haflong Town", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Haflong Lake and town walk", "Evening: rest, local dinner"] },
                      { day: "Day 2", title: "Jatinga & Departure", color: "bg-forest-600", activities: ["Morning: visit Jatinga village respectfully", "Late morning: explore surrounding hills", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹800", "₹2,200"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport per day", "₹300", "₹500"],
                          ["Daily total", "₹1,500", "₹3,500"],
                          ["2-Day trip total", "₹3,000", "₹7,000"],
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
                  <h2>Essential Travel Tips for Haflong</h2>
                  <ul>
                    <li><strong>Build in extra travel time:</strong> This is a genuinely remote destination — don't underestimate the journey.</li>
                    <li><strong>Engage respectfully with local communities:</strong> Dima Hasao's diversity is real and worth genuine interest, not a photo-op approach.</li>
                    <li><strong>Research the Jatinga phenomenon responsibly:</strong> Verify current, factual information rather than sensationalized accounts.</li>
                    <li><strong>Book accommodation ahead:</strong> Options are limited given the area's remoteness.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Build in generous travel time", "Book accommodation ahead", "Engage respectfully with local tribal communities", "Research the Jatinga phenomenon responsibly", "Carry insect repellent and warm layers"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect developed tourist infrastructure", "Treat the Jatinga phenomenon as a guaranteed spectacle", "Arrive without confirming accommodation", "Underestimate travel time to reach the area", "Approach local communities without genuine respect"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Haflong", "North Cachar Hills", "Off-beat", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={HAFLONG_GEAR} destination="Haflong" />
              <RelatedPostsGrid currentSlug="haflong-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="haflong-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
