// src/app/blog/namsai-travel-guide/page.tsx
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
  title: "Namsai Travel Guide: The Golden Pagoda of Arunachal",
  description:
    "The complete Namsai travel guide. The Golden Pagoda (Kongmu Kham), Tai Khamti culture, orange orchards, where to stay, best time to visit, and how to combine Namsai with an Assam trip.",
  keywords:
    "Namsai travel guide, Golden Pagoda Namsai, Kongmu Kham, Tai Khamti culture, best time to visit Namsai, how to reach Namsai, Arunachal Pradesh Buddhist sites",
  openGraph: {
    title: "Namsai Travel Guide: The Golden Pagoda of Arunachal",
    description: "A gleaming Buddhist pagoda modeled on Myanmar's temple architecture, at the heart of a district shaped by Tai Khamti culture — the complete guide to Namsai.",
    url: "https://club.kudozz.in/blog/namsai-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Golden pagoda architecture representative of Namsai, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Namsai Travel Guide: The Golden Pagoda of Arunachal", description: "The Golden Pagoda and Tai Khamti culture — the complete guide to Namsai.", images: ["/images/destinations/jaisalmer/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/namsai-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Namsai Travel Guide: The Golden Pagoda of Arunachal",
      description: "The complete Namsai travel guide.",
      image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/namsai-travel-guide" },
      about: { "@type": "Place", name: "Namsai", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Namsai Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Namsai?", a: "A single day covers the Golden Pagoda and a look around the Tai Khamti area comfortably. Most travelers treat Namsai as a day trip rather than an overnight base." },
  { q: "What is the best time to visit Namsai?", a: "October to March offers the most comfortable weather. Namsai's plains terrain makes it accessible for more of the year than Arunachal's higher-altitude destinations." },
  { q: "How do I reach Namsai?", a: "Dibrugarh in Assam is the nearest airport, and the drive from there is relatively short compared to most Arunachal destinations, since Namsai sits on flatter plains terrain near the Assam border." },
  { q: "Do I need a permit to visit Namsai?", a: "Yes — Arunachal Pradesh requires an Inner Line Permit for domestic Indian visitors (and additional permits for foreign nationals). Arrange this in advance or on arrival per current requirements." },
  { q: "What makes Namsai different from other parts of Arunachal?", a: "Namsai is home to the Tai Khamti community, whose culture, language, and Theravada Buddhist practice connect to Thailand and Myanmar's Tai-speaking traditions — genuinely distinct from the Tibetan Buddhist culture found in places like Tawang." },
  { q: "Can I combine Namsai with an Assam trip?", a: "Yes — this is one of the easiest Arunachal destinations to combine with a Upper Assam itinerary, given its proximity to Dibrugarh and the relatively flat, accessible terrain." },
  { q: "What is the budget for a trip to Namsai?", a: "A budget traveler can manage on roughly ₹1,200 a day, with mid-range options closer to ₹3,000 a day. This is a low-cost, easy day-trip destination overall." },
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
  { id: "introduction", title: "Why Namsai?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Namsai", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NAMSAI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a comfortable day trip", emoji: "🛕",
  items: [
    { name: "Comfortable Walking Shoes", description: "For exploring the pagoda grounds and the surrounding Tai Khamti villages.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "The pagoda complex and nearby village areas involve a fair amount of walking." },
    { name: "Modest Clothing", description: "Namsai's Golden Pagoda is an active place of worship — modest, respectful dress is expected.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is a working Buddhist pagoda, not a tourist backdrop — respectful dress matters." },
    { name: "Sun Hat", description: "Namsai's plains terrain means more direct sun exposure than Arunachal's shaded mountain destinations.", price: "₹399", rating: 4.3, reviews: "4.1k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "The open plains setting offers less natural shade than the state's hillier regions." },
    { name: "Camera", description: "The Golden Pagoda's architecture and the surrounding orange orchards are genuinely photogenic.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Namsai's Burmese-style architecture is visually distinct from anything else in the state." },
  ],
}];

export default function NamsaiGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Golden pagoda architecture representative of Namsai, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Namsai", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Namsai", "Golden Pagoda", "Off-beat", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Namsai Travel Guide: The Golden Pagoda of Arunachal
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A gleaming Buddhist pagoda modeled on Myanmar's temple architecture, at the heart of a district shaped by Tai Khamti culture.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Namsai, Arunachal Pradesh" },
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
                  <h2>Why Namsai?</h2>
                  <p>
                    <strong>Namsai</strong> is home to the <strong>Golden Pagoda (Kongmu Kham)</strong> — a gleaming Buddhist pagoda built in Burmese/Myanmar architectural style, reflecting real cultural and religious ties between this part of Arunachal and Southeast Asia's Theravada Buddhist traditions. That's a meaningful distinction from the Tibetan Buddhist culture found further west in places like Tawang: Namsai is the heart of Tai Khamti country, a community whose language, dress, and Buddhist practice trace back to Thailand and Myanmar's Tai-speaking peoples.
                  </p>
                  <p>
                    The district's flat plains terrain — a rarity in mountainous Arunachal — makes Namsai genuinely easy to reach, and a natural add-on for travelers already exploring Upper Assam.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Namsai at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Golden Pagoda (Kongmu Kham)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dibrugarh, Assam" },
                        { icon: "🧑‍🤝‍🧑", label: "Local Culture", value: "Tai Khamti" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Namsai</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable, dry weather, and Namsai's plains terrain keeps it accessible for more of the year than higher-altitude Arunachal destinations." },
                      { season: "Apr – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm but manageable", text: "Temperatures rise, but the plains setting is still more forgiving than the state's mountain regions." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain is common across the region — expect wetter roads and less comfortable sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — dry, comfortable weather for exploring the pagoda and surrounding countryside.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Namsai</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dibrugarh in Assam is the nearest airport, with a relatively short onward drive compared to most Arunachal destinations.</li>
                    <li><strong>By Road:</strong> The plains terrain makes road access straightforward, unlike the winding mountain routes typical elsewhere in the state.</li>
                    <li><strong>Permits:</strong> An Inner Line Permit is required for Arunachal Pradesh — arrange this in advance or on arrival per current requirements.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Namsai's easy accessibility makes it one of the simplest ways to add an Arunachal Pradesh stop to an otherwise Assam-focused trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Namsai</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Pagoda architecture around Namsai" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Golden Pagoda (Kongmu Kham):</strong> A striking Burmese-style Buddhist pagoda, the district's signature landmark and an active place of worship.</li>
                    <li><strong>Tai Khamti villages:</strong> A chance to see a genuinely distinct regional culture, with architecture and Buddhist practice tracing back to Thailand and Myanmar.</li>
                    <li><strong>Orange orchards:</strong> The surrounding countryside is known for its citrus cultivation, a pleasant backdrop for a countryside drive.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Namsai</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,200/night", picks: ["Basic guesthouses in town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Government/tourism board hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Few premium options — this is a modest, day-trip-oriented town"] },
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
                  <h2>What to Eat in Namsai</h2>
                  <ul>
                    <li><strong>Tai Khamti cuisine:</strong> Distinct from most other Arunachal food, reflecting Southeast Asian culinary influences.</li>
                    <li><strong>General Arunachali fare:</strong> Available at local eateries in town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Namsai Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Golden Pagoda & Countryside", color: "bg-amber-700", activities: ["Morning: visit the Golden Pagoda", "Midday: explore Tai Khamti village areas", "Afternoon: drive through the orange-orchard countryside", "Evening: departure or onward to Assam"] },
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
                          ["Accommodation/night", "₹700", "₹2,200"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹200", "₹500"],
                          ["Daily total", "₹1,200", "₹3,000"],
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
                  <h2>Essential Travel Tips for Namsai</h2>
                  <ul>
                    <li><strong>Arrange your Inner Line Permit in advance:</strong> Required for all of Arunachal Pradesh.</li>
                    <li><strong>Dress respectfully at the pagoda:</strong> This is an active place of worship, not a photo backdrop.</li>
                    <li><strong>Combine with Assam:</strong> Namsai's proximity to Dibrugarh makes it an easy add-on.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Arrange your Inner Line Permit ahead of time", "Visit the Golden Pagoda respectfully", "Learn about Tai Khamti culture as a distinct identity", "Combine with an Assam trip for efficiency"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Arrive without a permit", "Treat the pagoda as just a photo stop", "Expect extensive nightlife or shopping", "Confuse Tai Khamti Buddhist practice with Tawang's Tibetan traditions"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Namsai", "Golden Pagoda", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NAMSAI_GEAR} destination="Namsai" />
              <RelatedPostsGrid currentSlug="namsai-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="namsai-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
