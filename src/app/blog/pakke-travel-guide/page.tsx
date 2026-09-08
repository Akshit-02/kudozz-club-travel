// src/app/blog/pakke-travel-guide/page.tsx
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
  title: "Pakke Tiger Reserve Travel Guide: Hornbills & Foothill Forest",
  description:
    "The complete Pakke Tiger Reserve travel guide. The Nyishi community's Hornbill Nest Adoption Program, foothill forest wildlife, permits, best time to visit, and a full itinerary.",
  keywords:
    "Pakke Tiger Reserve travel guide, Pakke Kessang, Hornbill Nest Adoption Program, Nyishi tribe conservation, Seijosa Arunachal Pradesh, best time to visit Pakke, how to reach Pakke",
  openGraph: {
    title: "Pakke Tiger Reserve Travel Guide: Hornbills & Foothill Forest",
    description: "A foothill tiger reserve known less for tigers than for a community-led hornbill conservation program that's become a genuine conservation model — the complete guide to Pakke.",
    url: "https://club.kudozz.in/blog/pakke-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Forest and waterfall landscape representative of Pakke Tiger Reserve, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Pakke Tiger Reserve Travel Guide: Hornbills & Foothill Forest", description: "A community-led hornbill conservation model in Arunachal's foothill forest — the complete guide to Pakke.", images: ["/images/destinations/coorg/abbey-falls.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/pakke-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Pakke Tiger Reserve Travel Guide: Hornbills & Foothill Forest",
      description: "The complete Pakke Tiger Reserve travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pakke-travel-guide" },
      about: { "@type": "Place", name: "Pakke Tiger Reserve", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Pakke Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "What is the Hornbill Nest Adoption Program?", a: "A genuine, widely-cited community conservation initiative in which local Nyishi tribal communities — who historically hunted hornbills for traditional headdress feathers — became active partners in protecting hornbill nesting sites. It's a real example of indigenous-led conservation, not a staged tourist activity." },
  { q: "Will I see a tiger at Pakke?", a: "Unlikely — tiger sightings here are genuinely uncommon, similar to most of Arunachal's reserves. Pakke is a stronger destination for birding, especially hornbills, than for guaranteed tiger encounters." },
  { q: "How do I reach Pakke?", a: "The nearest airports are Guwahati or Tezpur in Assam, with road access into the reserve via Seijosa. An Inner Line Permit is required." },
  { q: "What is the best time to visit Pakke?", a: "November to April is the safari/visiting season. The reserve is closed or restricted during monsoon, roughly May–October — verify current dates before planning." },
  { q: "Is Pakke easier to visit than Namdapha?", a: "Yes, comparatively — Pakke is more accessible than Arunachal's more remote parks like Namdapha or areas near Mechuka, making it a reasonable first entry point into the state's wildlife destinations." },
  { q: "How many days do I need at Pakke?", a: "1-2 days covers a meaningful visit, including time for birding and learning about the hornbill conservation program." },
  { q: "What is the budget for a trip to Pakke?", a: "A budget traveler can manage on roughly ₹1,800 a day including basic safari costs, a mid-range trip closer to ₹4,000 a day." },
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
  { id: "introduction", title: "Why Pakke?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pakke", level: 2 },
  { id: "top-attractions", title: "Wildlife & the Hornbill Program", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PAKKE_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear focused on birding and foothill forest safaris", emoji: "🦤",
  items: [
    { name: "Binoculars", description: "Pakke's real strength is its hornbill and general bird diversity — binoculars matter more here than at most tiger-focused reserves.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+birdwatching+wildlife"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Hornbill spotting is Pakke's headline activity — binoculars are essential, not optional." },
    { name: "Telephoto Camera / Lens", description: "For photographing hornbills and other birdlife at a respectful distance.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A longer lens makes a real difference for bird photography in dense forest." },
    { name: "Neutral/Khaki Clothing", description: "Standard safari practice, less disruptive to wildlife in the foothill forest terrain.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Bright colors are more noticeable to wildlife in dense forest cover." },
    { name: "Insect Repellent", description: "Pakke's foothill forest is genuinely humid and insect-heavy.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+forest"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Dense, humid forest terrain makes this genuinely necessary." },
  ],
}];

export default function PakkeGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Forest and waterfall landscape representative of Pakke Tiger Reserve, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Pakke", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pakke Tiger Reserve", "Hornbills", "Adventure", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Pakke Tiger Reserve Travel Guide: Hornbills & Foothill Forest
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A foothill tiger reserve known less for tigers than for a community-led hornbill conservation program that's become a genuine conservation model.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Pakke, Arunachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Pakke?</h2>
                  <p>
                    <strong>Pakke Tiger Reserve</strong>, in the Pakke-Kessang district, is a foothill forest reserve genuinely notable for one of India's most celebrated community-conservation stories: the <strong>Hornbill Nest Adoption Program</strong>. Local Nyishi communities, who historically hunted hornbills for traditional headdress feathers, became active partners in protecting hornbill nesting sites — a real, well-documented example of indigenous-led conservation that deserves genuine credit, not a footnote mention.
                  </p>
                  <p>
                    The reserve holds tigers and elephants too, but — much like elsewhere in Arunachal — actual tiger sightings are uncommon. Pakke is a stronger destination for birding, especially hornbills, and offers a comparatively more accessible entry point into the state's wildlife destinations than remote parks like Namdapha.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🦤</span> Pakke at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🦤", label: "Known For", value: "Hornbill Nest Adoption Program" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Guwahati / Tezpur (Assam)" },
                        { icon: "🌲", label: "Terrain", value: "Foothill forest" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Pakke</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Apr", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Safari season", text: "Cooler, drier conditions and reliable park access." },
                      { season: "May – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — closed/restricted", text: "The reserve is closed or restricted for much of this period — verify current dates before planning." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February for the coolest, most reliable conditions.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pakke</h2>
                  <ul>
                    <li><strong>By Air:</strong> Guwahati or Tezpur in Assam are the nearest airports.</li>
                    <li><strong>By Road:</strong> Access into the reserve is via Seijosa.</li>
                    <li><strong>Permits:</strong> An Inner Line Permit is required — verify current requirements.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Pakke is comparatively more accessible than Namdapha or Mechuka, making it a sensible first stop for travelers new to Arunachal's wildlife destinations.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Wildlife & the Hornbill Program</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Forest scenery within Pakke Tiger Reserve" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Hornbill Nest Adoption Program:</strong> A genuine, celebrated Nyishi-led conservation initiative protecting hornbill nesting sites — learn about it respectfully during your visit.</li>
                    <li><strong>Hornbill diversity:</strong> Multiple hornbill species present, the park's real draw for birders.</li>
                    <li><strong>Tigers and elephants:</strong> Present in the reserve, though sightings are genuinely uncommon.</li>
                    <li><strong>Pakke River:</strong> Runs through the reserve, with some boat-based exploration options in parts of the park.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Pakke</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses in Seijosa"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed forest-edge lodges"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of premium eco-lodges where available"] },
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
                  <h2>What to Eat Near Pakke</h2>
                  <ul>
                    <li><strong>Lodge-served meals:</strong> Simple Assamese/Arunachali home-style food is the norm at most stays.</li>
                    <li><strong>Nyishi cuisine:</strong> Local Nyishi dishes are worth seeking out where available for a genuine regional taste.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Pakke Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Guwahati/Tezpur to Seijosa", "Afternoon safari focused on hornbill spotting"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari for peak bird activity", "Learn about the Hornbill Nest Adoption Program", "Afternoon departure"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Safari + permit fees", "₹800", "₹1,500"],
                          ["Daily total", "₹2,200", "₹5,400"],
                          ["2-Day trip total", "₹4,400", "₹10,800"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Guwahati/Tezpur.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Pakke</h2>
                  <ul>
                    <li><strong>Focus on birding:</strong> Don't plan the trip around a tiger sighting — hornbills are the genuine highlight.</li>
                    <li><strong>Learn about the conservation program:</strong> Engage respectfully with the Nyishi community's role during your visit.</li>
                    <li><strong>Verify current park access status:</strong> Especially in shoulder months before/after monsoon.</li>
                    <li><strong>Book safaris in advance:</strong> Especially during peak Dec-Feb season.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Bring binoculars specifically for hornbill spotting", "Learn about the Nyishi-led conservation story", "Book safaris in advance during peak season", "Verify current Inner Line Permit requirements", "Treat this as a comparatively accessible Arunachal wildlife entry point"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan the trip around a guaranteed tiger sighting", "Skip verifying current permit requirements", "Visit during peak monsoon without checking access status", "Overlook the genuine conservation story here", "Forget insect repellent for the humid forest terrain"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Pakke Tiger Reserve", "Hornbills", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PAKKE_GEAR} destination="Pakke" />
              <RelatedPostsGrid currentSlug="pakke-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="pakke-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
