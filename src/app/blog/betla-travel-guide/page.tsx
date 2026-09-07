// src/app/blog/betla-travel-guide/page.tsx
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
  title: "Betla National Park Travel Guide: Tiger Safari & Palamu Forts",
  description:
    "The complete Betla National Park travel guide. Palamu Tiger Reserve, jeep safaris, the ruined Old and New Palamu Forts, where to stay, best time to visit, and honest planning advice for this Jharkhand reserve.",
  keywords:
    "Betla National Park travel guide, Palamu Tiger Reserve, Palamu Forts, Betla safari, best time to visit Betla, how to reach Betla National Park, Jharkhand wildlife, Daltonganj",
  openGraph: {
    title: "Betla National Park Travel Guide: Tiger Safari & Palamu Forts",
    description: "One of India's earliest Project Tiger reserves, with two ruined forts hidden inside dense sal forest — the complete guide to Betla National Park.",
    url: "https://club.kudozz.in/blog/betla-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Dense sal forest landscape representative of Betla National Park, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betla National Park Travel Guide: Tiger Safari & Palamu Forts",
    description: "One of India's earliest Project Tiger reserves, with two ruined forts hidden inside dense sal forest.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/betla-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Betla National Park Travel Guide: Tiger Safari & Palamu Forts",
          description: "The complete Betla National Park travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/betla-travel-guide" },
          about: { "@type": "Place", name: "Betla National Park", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Betla National Park Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Are tiger sightings guaranteed at Betla National Park?", a: "No. Betla, part of the Palamu Tiger Reserve, is home to tigers, leopards, wild elephants, sloth bears, and gaur, but sightings are far less guaranteed than at India's better-known reserves in Madhya Pradesh or Rajasthan — go in with realistic expectations rather than a guaranteed-sighting mindset." },
  { q: "What makes Betla different from other Indian tiger reserves?", a: "The genuinely unusual combination of wildlife safari and heritage ruins — the Old and New Palamu Forts, 16th-17th century Chero-dynasty ruins, sit within the park's forest itself, something few other Indian reserves offer." },
  { q: "How do I reach Betla National Park?", a: "The nearest airport is Ranchi (~170km), and the nearest railway station is Daltonganj (~25km). Road access is primarily via Daltonganj." },
  { q: "What is the best time to visit Betla?", a: "The safari season runs roughly October to June, with March–May often cited as best for sightings as water sources concentrate wildlife despite the heat. The park is typically closed around July–September for monsoon — verify current dates." },
  { q: "How many days do I need at Betla?", a: "One to two days with a couple of safaris is a reasonable amount of time, including a visit to the Palamu Forts." },
  { q: "What is the budget for a trip to Betla?", a: "A budget traveler can manage on roughly ₹1,800 a day including a basic safari, a mid-range trip closer to ₹4,200 a day." },
  { q: "Can Betla be combined with Netarhat?", a: "Yes — both sit within Jharkhand's western Chotanagpur Plateau region and are commonly combined into a single loop trip." },
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
  { id: "introduction", title: "Why Betla?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Betla", level: 2 },
  { id: "safari-zones", title: "Safaris & Palamu Forts", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BETLA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for jeep safaris and the fort ruins within the forest",
    emoji: "🐘",
    items: [
      { name: "Neutral/Khaki Clothing", description: "Standard safari practice — neutral tones are less disruptive to wildlife on the jeep safari.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Bright colors are more visible to wildlife and stand out against Betla's forest terrain." },
      { name: "Binoculars", description: "For spotting elephants, deer, and birdlife across the park's dense sal forest.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Sal forest terrain means wildlife is often glimpsed at a distance through gaps in the trees." },
      { name: "Comfortable Walking Shoes", description: "For exploring the Old and New Palamu Forts, which involve real walking on uneven ruined stonework.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes"), tag: "Fort essential", tagColor: "bg-sky-100 text-sky-700", why: "The fort ruins have uneven, sometimes overgrown stone paths." },
      { name: "Insect Repellent", description: "Dense sal forest brings a real mosquito presence, especially at dawn and dusk safari times.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Jharkhand's dense sal forests and the wooded fringes of the park make mosquito presence significant." },
    ],
  },
];

export default function BetlaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Dense sal forest landscape representative of Betla National Park, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Betla National Park", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Betla National Park", "Tiger Safari", "Adventure", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Betla National Park Travel Guide: Tiger Safari & Palamu Forts
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of India's earliest Project Tiger reserves, with two ruined forts hidden inside dense sal forest — an honest guide to visiting Betla.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Betla National Park, Jharkhand" },
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
                  <h2>Why Betla?</h2>
                  <p>
                    <strong>Betla National Park</strong> is part of the Palamu Tiger Reserve, one of India's original nine Project Tiger reserves designated in 1973. Its dense sal forest terrain hides something genuinely unusual for an Indian wildlife reserve: the ruined <strong>Old and New Palamu Forts</strong>, 16th-17th century Chero-dynasty structures sitting within the park itself, combining a wildlife safari with heritage ruins in one trip.
                  </p>
                  <p>
                    We'd rather be upfront than oversell this: tiger numbers here have historically been very low compared to reserves like Kanha or Bandhavgarh, so if a tiger sighting is your top priority, those reserves are a better bet. Betla rewards visitors who come for the broader wildlife, the forest, and the fort ruins rather than a guaranteed tiger encounter.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐘</span> Betla at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🏰", label: "Unique Feature", value: "Palamu Forts within the park" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Jun (verify closures)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Ranchi (~170km)" },
                        { icon: "🐆", label: "Wildlife", value: "Elephants, leopards, sloth bears" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Betla</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Comfortable safari weather", text: "Cool, dry conditions for safaris and fort visits alike." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot, better sightings", text: "As water sources shrink, wildlife concentrates near remaining waterholes despite the heat." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — typically closed", text: "The park is typically closed to safaris around this window for monsoon — verify current dates before planning a visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Verify current park and safari-season dates directly with the Forest Department before planning your trip.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Betla</h2>
                  <ul>
                    <li><strong>By Air:</strong> Ranchi (~170km) is the nearest airport.</li>
                    <li><strong>By Train:</strong> Daltonganj (~25km) is the nearest railway station.</li>
                    <li><strong>By Road:</strong> Road access from Daltonganj is the primary route into the park.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book safaris through the Forest Department in advance, and combine your visit with Netarhat for a fuller Chotanagpur Plateau loop.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safaris & Palamu Forts</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Forest terrain within Betla National Park" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jeep safaris:</strong> Cover the park's core and buffer zones, run by the Forest Department.</li>
                    <li><strong>Old Palamu Fort and New Palamu Fort:</strong> Ruined 16th-17th century Chero-dynasty forts hidden within the forest — a genuinely distinctive combination of safari and heritage ruins.</li>
                    <li><strong>Wildlife:</strong> Elephants, leopards, sloth bears, and (with realistic expectations) occasional tiger presence, alongside deer species and rich birdlife.</li>
                    <li><strong>Kamaldah Lake and Mirchaiya Falls:</strong> Additional quieter spots within and near the park.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Betla</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Forest Department rest houses", "Basic lodges near the park gate"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Better-appointed lodges in Daltonganj"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Luxury options here are genuinely limited compared to Central India's bigger reserves"] },
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
                  <h2>What to Eat Near Betla</h2>
                  <ul>
                    <li><strong>Forest rest house meals:</strong> Simple vegetarian and non-vegetarian meals at most stays.</li>
                    <li><strong>Litti Chokha and local thalis:</strong> Available in Daltonganj town for anyone based there.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Betla Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Ranchi or Daltonganj", "Check in near the park gate", "Afternoon jeep safari"] },
                      { day: "Day 2", title: "Palamu Forts & Second Safari", color: "bg-forest-600", activities: ["Early morning safari", "Late morning: Old and New Palamu Forts", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹900", "₹2,500"],
                          ["Food/day", "₹400", "₹900"],
                          ["Safari/gypsy hire", "₹1,500", "₹2,500"],
                          ["Daily total", "₹1,800", "₹4,200"],
                          ["2-Day trip total", "₹3,600", "₹8,400"],
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
                  <h2>Essential Travel Tips for Betla</h2>
                  <ul>
                    <li><strong>Set realistic tiger-sighting expectations:</strong> Come for the broader wildlife and the fort ruins, not a guaranteed tiger encounter.</li>
                    <li><strong>Book safaris through the Forest Department in advance.</strong></li>
                    <li><strong>Verify current park closure dates:</strong> Monsoon closures vary year to year.</li>
                    <li><strong>Combine with Netarhat:</strong> Both sit within reasonable driving distance in the western Chotanagpur Plateau.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safaris through the Forest Department ahead", "Visit the Palamu Forts alongside a safari", "Go with realistic tiger-sighting expectations", "Verify current park/safari-season dates", "Combine with Netarhat for a longer trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip around a guaranteed tiger sighting", "Expect Kanha/Bandhavgarh-level luxury lodges", "Skip verifying current monsoon closure dates", "Overlook the Palamu Forts — they're the park's most distinctive feature", "Wear bright colors on the jeep safari"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Betla National Park", "Tiger Safari", "Jharkhand", "Adventure", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BETLA_GEAR} destination="Betla National Park" />
              <RelatedPostsGrid currentSlug="betla-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="betla-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
