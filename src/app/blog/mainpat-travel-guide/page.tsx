// src/app/blog/mainpat-travel-guide/page.tsx
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
  title: "Mainpat Travel Guide: Chhattisgarh's Tibetan Plateau Retreat",
  description:
    "The complete Mainpat travel guide. The Tibetan settlement and monastery, Tiger Point, Machali Point, the Bermuda Triangle sinking-sand patches, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Mainpat travel guide, Mainpat Tibetan settlement, Tiger Point Mainpat, Machali Point, Bermuda Triangle Mainpat, best time to visit Mainpat, how to reach Mainpat, Ambikapur, Chhattisgarh hill station",
  openGraph: {
    title: "Mainpat Travel Guide: Chhattisgarh's Tibetan Plateau Retreat",
    description: "A cool plateau nicknamed the 'Shimla of Chhattisgarh', home to a Tibetan refugee settlement and monastery since the 1960s — the complete guide to Mainpat.",
    url: "https://club.kudozz.in/blog/mainpat-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Cool plateau landscape representative of Mainpat, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Mainpat Travel Guide: Chhattisgarh's Tibetan Plateau Retreat", description: "A cool plateau retreat with a Tibetan settlement — the complete guide to Mainpat.", images: ["/images/destinations/manali/solang-valley.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/mainpat-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Mainpat Travel Guide: Chhattisgarh's Tibetan Plateau Retreat",
      description: "The complete Mainpat travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mainpat-travel-guide" },
      about: { "@type": "Place", name: "Mainpat", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Mainpat Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Mainpat?", a: "One to two days covers the main viewpoints, the Tibetan settlement, and the sinking-sand patches comfortably. It works well as a short, unhurried stop rather than a multi-day base." },
  { q: "What is the best time to visit Mainpat?", a: "October to March, when the plateau's cooler climate is at its most comfortable. This is one of Chhattisgarh's cooler destinations, a genuine point of difference from the hot plains below." },
  { q: "How do I reach Mainpat?", a: "Ambikapur, about 55km away, is the practical regional hub with the nearest airport and railway connections. Road access from Ambikapur is the standard route to Mainpat." },
  { q: "What is the Tibetan settlement at Mainpat?", a: "A community established here since the 1960s as part of the broader wave of Tibetan resettlement in India following 1959, complete with a monastery. It's a real, living settlement — visit respectfully rather than treating it purely as a photo stop." },
  { q: "Is the 'Bermuda Triangle' at Mainpat really dangerous?", a: "It refers to local patches of marshy or sinking ground where objects are said to slowly sink — a well-known local curiosity and talking point rather than a scientifically verified phenomenon. Treat it as local lore worth seeing, not a literal danger zone." },
  { q: "What is the budget for a trip to Mainpat?", a: "A budget traveler can manage on roughly ₹1,500 a day, though accommodation options are limited given the area's off-the-radar status — book ahead where possible." },
  { q: "Is Mainpat good for a family trip?", a: "Yes — the viewpoints and settlement visit are gentle and suit most ages, though facilities are basic, so it suits families comfortable with a low-infrastructure destination." },
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
  { id: "introduction", title: "Why Mainpat?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mainpat", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MAINPAT_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a cool plateau with basic infrastructure", emoji: "🏔️",
  items: [
    { name: "Light Warm Layers", description: "Mainpat's elevated plateau setting keeps it noticeably cooler than the Chhattisgarh plains, especially mornings and evenings.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Climate essential", tagColor: "bg-sky-100 text-sky-700", why: "First-time visitors often underestimate how much cooler Mainpat feels than the rest of the state." },
    { name: "Comfortable Walking Shoes", description: "For exploring Tiger Point, Machali Point, and the settlement's village paths.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Plateau viewpoints and village paths involve real walking on uneven ground." },
    { name: "Modest Respectful Clothing", description: "For visiting the Tibetan monastery and settlement respectfully as a real community.", price: "₹599", rating: 4.4, reviews: "3.2k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Monastery essential", tagColor: "bg-purple-100 text-purple-700", why: "This is a living settlement, not a staged attraction — respectful dress matters." },
    { name: "Camera", description: "For the plateau viewpoints and the settlement's distinctive character.", price: "₹—", rating: 4.4, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Mainpat's plateau views and cultural sites are genuinely photogenic." },
  ],
}];

export default function MainpatGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Cool plateau landscape representative of Mainpat, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Mainpat", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mainpat", "Chhattisgarh", "Off-beat", "Tibetan Settlement"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Mainpat Travel Guide: Chhattisgarh's Tibetan Plateau Retreat
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A cool plateau nicknamed the "Shimla of Chhattisgarh", home to a Tibetan refugee settlement and monastery since the 1960s.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mainpat, Chhattisgarh" },
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
                  <h2>Why Mainpat?</h2>
                  <p>
                    <strong>Mainpat</strong> sits on an elevated plateau in Chhattisgarh's Surguja region, at a height that keeps it noticeably cooler than the plains below — enough that locals have long nicknamed it the "Shimla of Chhattisgarh." What makes it genuinely distinctive, though, is a Tibetan refugee settlement established here since the 1960s, part of the broader wave of Tibetan resettlement across India following 1959. A monastery and a real, living community give Mainpat a cultural character unlike anywhere else in the state.
                  </p>
                  <p>
                    Beyond the settlement, the plateau holds a handful of viewpoints and a local curiosity — patches of marshy ground nicknamed the "Bermuda Triangle" for their tendency to slowly draw down objects placed on them. It's a quiet, off-the-radar destination best suited to travelers who want to see something genuinely different from Chhattisgarh's better-known waterfalls and temples.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Mainpat at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🏔️", label: "Known For", value: "Tibetan settlement & plateau climate" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "Nearest Hub", value: "Ambikapur (~55km)" },
                        { icon: "🏔️", label: "Nickname", value: "Shimla of Chhattisgarh" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500+" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Mainpat</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather that makes the most of Mainpat's plateau climate — genuinely pleasant relative to the rest of Chhattisgarh." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warmer", text: "Still cooler than the plains but noticeably warmer than winter — workable but less ideal." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Lush and green, but roads and the sinking-sand patches can be more difficult to navigate safely in heavy rain." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — Mainpat's cool climate is at its most comfortable, and roads are in their best condition.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mainpat</h2>
                  <ul>
                    <li><strong>By Air/Rail:</strong> Ambikapur, about 55km away, is the practical regional hub for both air and rail connections.</li>
                    <li><strong>By Road:</strong> Road access from Ambikapur is the standard, and effectively only, practical route to Mainpat.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Arrange a car or driver from Ambikapur ahead of time — local transport options thin out fast once you're on the plateau.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Mainpat</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Plateau scenery around Mainpat" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tibetan Settlement & Monastery:</strong> A genuine, living Tibetan refugee community established here since the 1960s — visit respectfully as you would any real settlement.</li>
                    <li><strong>Tiger Point:</strong> A local viewpoint/waterfall area (the name is local rather than indicating actual tigers in the area).</li>
                    <li><strong>Machali Point:</strong> Another notable plateau viewpoint.</li>
                    <li><strong>"Bermuda Triangle" sinking-sand patches:</strong> Marshy ground where objects are said to slowly sink — a well-known local curiosity worth seeing, presented here as local lore rather than a verified phenomenon.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mainpat</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Basic guesthouses on the plateau", "Simple stays in Ambikapur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Better-appointed guesthouses", "Ambikapur mid-range hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Very limited", picks: ["Options are genuinely limited given Mainpat's off-the-radar status — Ambikapur has more choice"] },
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
                  <h2>What to Eat in Mainpat</h2>
                  <ul>
                    <li><strong>Simple local thalis:</strong> Basic Chhattisgarhi vegetarian meals at guesthouses.</li>
                    <li><strong>Tibetan-influenced dishes:</strong> Given the settlement's presence, some simple momos or noodle dishes may be available locally.</li>
                    <li><strong>Ambikapur dining:</strong> A wider range of food options in the regional hub town if you're basing there.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Mainpat Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Settlement Visit", color: "bg-amber-700", activities: ["Travel from Ambikapur", "Afternoon: visit the Tibetan settlement and monastery respectfully", "Evening: rest at plateau accommodation"] },
                      { day: "Day 2", title: "Viewpoints & Departure", color: "bg-forest-600", activities: ["Morning: Tiger Point and Machali Point", "Late morning: the sinking-sand patches", "Afternoon: return to Ambikapur"] },
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
                          ["Local transport per day", "₹500", "₹1,000"],
                          ["Daily total", "₹1,500", "₹3,900"],
                          ["2-Day trip total", "₹3,000", "₹7,800"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Accommodation is limited — book ahead where possible.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Mainpat</h2>
                  <ul>
                    <li><strong>Visit the Tibetan settlement respectfully:</strong> This is a genuine, living community, not a staged attraction.</li>
                    <li><strong>Pack for cooler weather:</strong> Mainpat is noticeably cooler than the rest of Chhattisgarh.</li>
                    <li><strong>Arrange transport in advance:</strong> Local transport options are limited once on the plateau.</li>
                    <li><strong>Set modest infrastructure expectations:</strong> This is an off-the-radar destination with limited facilities.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the Tibetan settlement with genuine respect", "Pack light warm layers", "Arrange transport from Ambikapur in advance", "See the sinking-sand patches as a curious local phenomenon", "Set modest infrastructure expectations"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Treat the Tibetan settlement as a mere photo-op", "Expect developed tourist infrastructure", "Underestimate how much cooler the plateau feels", "Arrive without arranging transport ahead", "Overclaim the sinking-sand patches as scientifically verified"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Mainpat", "Chhattisgarh", "Off-beat", "Tibetan Settlement", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MAINPAT_GEAR} destination="Mainpat" />
              <RelatedPostsGrid currentSlug="mainpat-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="mainpat-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
