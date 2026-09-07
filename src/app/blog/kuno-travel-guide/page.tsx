// src/app/blog/kuno-travel-guide/page.tsx
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
  title: "Kuno National Park Travel Guide: Cheetahs, Safaris & Best Time",
  description:
    "The complete Kuno National Park travel guide. India's cheetah reintroduction project, safari zones, wildlife beyond cheetahs, where to stay, best time to visit, and honest, up-to-date planning advice.",
  keywords:
    "Kuno National Park travel guide, Project Cheetah India, Kuno cheetah safari, best time to visit Kuno, how to reach Kuno National Park, Madhya Pradesh wildlife, cheetah reintroduction India",
  openGraph: {
    title: "Kuno National Park Travel Guide: Cheetahs, Safaris & Best Time",
    description: "The forest chosen to bring cheetahs back to India after seven decades of local extinction — the complete guide to Kuno National Park.",
    url: "https://club.kudozz.in/blog/kuno-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Forest landscape representative of Kuno National Park, Madhya Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuno National Park Travel Guide: Cheetahs, Safaris & Best Time",
    description: "India's cheetah reintroduction project, and honest planning advice for visiting Kuno National Park.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kuno-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kuno National Park Travel Guide: Cheetahs, Safaris & Best Time",
          description: "The complete Kuno National Park travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kuno-travel-guide" },
          about: { "@type": "Place", name: "Kuno National Park", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kuno National Park Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Can I reliably see a cheetah at Kuno?", a: "No — be realistic about this. Kuno is home to India's cheetah reintroduction program, but the population is still small and cheetahs range widely, so sightings are not guaranteed the way tiger sightings are at Kanha or Bandhavgarh. Visit for the conservation story and the landscape, not a guaranteed sighting." },
  { q: "Is the cheetah program going well?", a: "It's a genuinely still-developing, publicly monitored project — India's cheetah population had gone extinct roughly seven decades earlier, and this reintroduction (bringing cheetahs from Namibia and South Africa starting in 2022) has had both successes and reported setbacks along the way. Check current, credible news sources for the latest status before planning a trip focused specifically on cheetahs." },
  { q: "How do I reach Kuno National Park?", a: "The nearest airport is Gwalior (~170km), and the nearest railway station is Sheopur. Road access is primarily via Gwalior or Sheopur — this is a relatively remote, less-developed destination compared to MP's bigger tiger reserves." },
  { q: "What is the best time to visit Kuno?", a: "The safari season generally runs October to June, similar to other MP parks, though it's worth verifying current zone and park access status given the still-evolving cheetah program." },
  { q: "Can I see other wildlife at Kuno besides cheetahs?", a: "Yes — the park has leopards, sloth bears, and various deer and antelope species including chinkara and nilgai, plus dry deciduous forest and grassland scenery worth visiting for on its own terms." },
  { q: "Was Kuno originally meant for lions?", a: "Yes — Kuno was originally proposed as a site for Asiatic lion reintroduction from Gujarat's Gir Forest, before the cheetah program took priority. This history is part of what makes the park significant." },
  { q: "What is the budget for a trip to Kuno?", a: "A budget traveler can manage on roughly ₹1,800 a day including a basic safari, a mid-range trip closer to ₹4,500 a day. Facilities here are more basic than at Kanha or Bandhavgarh, so set expectations accordingly." },
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
  { id: "introduction", title: "Why Kuno?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kuno", level: 2 },
  { id: "safari-zones", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KUNO_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a still-developing, more basic safari destination",
    emoji: "🐆",
    items: [
      { name: "Neutral/Khaki Clothing", description: "Standard safari practice — neutral tones are less disruptive to wildlife and less visually jarring in open grassland.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Bright colors stand out sharply against Kuno's open dry-deciduous terrain." },
      { name: "Binoculars", description: "Given the still-developing sighting odds here, binoculars matter even more than at busier reserves — you'll want to make the most of distant views.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Kuno's cheetahs and other wildlife range across wide, open terrain — binoculars turn a distant blur into an actual sighting." },
      { name: "Telephoto Camera / Lens", description: "For photographing wildlife at a safe, respectful distance across Kuno's open grassland and forest edges.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A longer lens is the difference between a usable photo and a speck on the horizon here." },
      { name: "Sturdy Footwear", description: "Facilities at Kuno are more basic than at MP's bigger reserves — sturdy, comfortable shoes help for any walking around the gate/lodge area.", price: "₹1,999", rating: 4.4, reviews: "4.0k", image: "🥾", affiliateUrl: amazonSearchUrl("sturdy+outdoor+shoes+travel"), tag: "Comfort essential", tagColor: "bg-forest-100 text-forest-700", why: "This is a more remote, less-developed destination than Kanha or Bandhavgarh — comfortable footwear helps everywhere." },
    ],
  },
];

export default function KunoGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Forest landscape representative of Kuno National Park, Madhya Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kuno National Park", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kuno National Park", "Cheetah Safari", "Adventure", "Wildlife", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kuno National Park Travel Guide: Cheetahs, Safaris & Best Time
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The forest chosen to bring cheetahs back to India after seven decades of local extinction — an honest guide to visiting Kuno National Park.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kuno National Park, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Kuno?</h2>
                  <p>
                    <strong>Kuno National Park</strong> is the site chosen for India's cheetah reintroduction effort, known publicly as Project Cheetah, which began bringing cheetahs from Namibia and South Africa in 2022 with the goal of re-establishing a wild population roughly seven decades after cheetahs were declared extinct in India. It's a genuinely significant conservation project — and worth being upfront about: this is a newer, still-developing destination, not a guaranteed-sighting safari park like Kanha or Bandhavgarh.
                  </p>
                  <p>
                    The program's real history includes both progress and publicly reported setbacks, including mortality and relocation events among the reintroduced cheetahs. We'd rather you know that going in than promise something we can't deliver — visit Kuno for the landscape, the broader wildlife, and the conservation story, and treat any cheetah sighting as a bonus rather than the whole trip.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐆</span> Kuno at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🐆", label: "Known For", value: "India's cheetah reintroduction" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Jun (verify access)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Gwalior (~170km)" },
                        { icon: "🌾", label: "Terrain", value: "Dry deciduous forest, grassland" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kuno</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Cool season", text: "Comfortable temperatures for safaris and generally the most reliable period for park access — verify current zone status before booking." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but active", text: "Wildlife tends to concentrate near remaining water sources as temperatures rise, though the heat itself is significant." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — check closures", text: "Most Indian parks close or restrict access during monsoon for regeneration — verify Kuno's current status before planning around these months." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Given the still-evolving nature of the cheetah program and safari infrastructure, confirm current park and zone access directly before booking travel around Kuno specifically.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kuno</h2>
                  <ul>
                    <li><strong>By Air:</strong> Gwalior (GWL) is the nearest airport, about 170km away.</li>
                    <li><strong>By Train:</strong> Sheopur is the nearest railway station.</li>
                    <li><strong>By Road:</strong> Road access from Gwalior or Sheopur is the primary route — this is a relatively remote destination with more basic infrastructure than MP's established reserves.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book accommodation and safaris through an operator or lodge that can confirm current park access and zone status — this changes more often here than at MP's longer-established reserves.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safaris & Wildlife</h2>
                  <p>Kuno's safari infrastructure is still developing relative to Kanha or Bandhavgarh — expect a more basic, lower-key experience.</p>
                  <ul>
                    <li><strong>Cheetahs:</strong> The park's headline draw, part of India's ongoing cheetah reintroduction program — sightings are possible but genuinely not guaranteed given the still-small, wide-ranging population.</li>
                    <li><strong>Leopards and sloth bears:</strong> Present in the park alongside the cheetahs, adding to the wildlife interest beyond the headline species.</li>
                    <li><strong>Chinkara and nilgai:</strong> Notable antelope and deer populations across the park's grassland and forest-edge habitats.</li>
                    <li><strong>Landscape:</strong> Dry deciduous forest, open grassland, and the Kuno River — worth visiting for the scenery alone.</li>
                    <li><strong>History:</strong> Originally proposed as a site for Asiatic lion reintroduction from Gujarat's Gir Forest, before the cheetah program took priority — a notable piece of the park's conservation history.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Kuno</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,200/night", picks: ["Basic lodges near the park gate", "Simple guesthouses in Sheopur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Forest-adjacent mid-range resorts", "Better-appointed lodges near the buffer"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of premium safari lodges — options here remain limited compared to Kanha/Bandhavgarh"] },
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
                  <h2>What to Eat Near Kuno</h2>
                  <p>Dining options are basic — most travelers eat at their lodge.</p>
                  <ul>
                    <li><strong>Lodge-served thalis:</strong> Simple vegetarian and non-vegetarian set meals are the norm at most stays.</li>
                    <li><strong>Sheopur town eateries:</strong> A handful of simple local options for anyone staying closer to town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kuno Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Travel from Gwalior or Sheopur", "Check in near the park gate", "Afternoon safari (confirm current zone access)"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari", "Late morning: rest/departure prep", "Travel back to Gwalior or onward"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,500"],
                          ["Food/day", "₹400", "₹900"],
                          ["Safari/gypsy hire", "₹1,800", "₹3,000"],
                          ["Daily total", "₹1,800", "₹4,500"],
                          ["2-Day trip total", "₹3,600", "₹9,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Safari and lodge pricing here is less standardized than at MP's established reserves — confirm costs directly.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kuno</h2>
                  <ul>
                    <li><strong>Verify current park and zone access before booking:</strong> This is genuinely more variable here than at Kanha or Bandhavgarh — check with your lodge or a recognized operator.</li>
                    <li><strong>Set realistic sighting expectations:</strong> Treat a cheetah sighting as a bonus, not the guaranteed centrepiece of the trip.</li>
                    <li><strong>Book through a recognized local operator:</strong> Given the more basic infrastructure, a knowledgeable local contact matters more here than at bigger reserves.</li>
                    <li><strong>Carry cash:</strong> Card acceptance is limited in this remote area.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Confirm current park/zone status before travelling", "Go with realistic expectations about sightings", "Book through a knowledgeable local lodge/operator", "Carry sufficient cash", "Appreciate the broader wildlife and conservation story, not just cheetahs"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip around a guaranteed cheetah sighting", "Expect Kanha/Bandhavgarh-level infrastructure", "Skip verifying current park access before travelling", "Rely on cards for payment", "Overlook the park's broader wildlife and landscape value"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kuno National Park", "Cheetah Safari", "Adventure", "Wildlife", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KUNO_GEAR} destination="Kuno National Park" />
              <RelatedPostsGrid currentSlug="kuno-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kuno-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
