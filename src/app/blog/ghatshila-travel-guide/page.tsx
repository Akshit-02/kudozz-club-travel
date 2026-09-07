// src/app/blog/ghatshila-travel-guide/page.tsx
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
  title: "Ghatshila Travel Guide: Subarnarekha River & Dalma Hills",
  description:
    "The complete Ghatshila travel guide. Subarnarekha riverfront, Phuldungri Hill, Burudih Lake, Dalma Wildlife Sanctuary, where to stay, best time to visit, and a full itinerary through this quiet Jharkhand river town.",
  keywords:
    "Ghatshila travel guide, Subarnarekha River, Phuldungri Hill, Burudih Lake, Dalma Wildlife Sanctuary, best time to visit Ghatshila, how to reach Ghatshila, Jharkhand offbeat destinations, Ghatshila near Jamshedpur",
  openGraph: {
    title: "Ghatshila Travel Guide: Subarnarekha River & Dalma Hills",
    description: "A quiet riverside town on the Subarnarekha that inspired Bengali literature, with the Dalma Wildlife Sanctuary a short drive away — the complete guide to Ghatshila.",
    url: "https://club.kudozz.in/blog/ghatshila-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/hero.jpg", width: 1200, height: 630, alt: "Forested riverside hills representative of Ghatshila, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghatshila Travel Guide: Subarnarekha River & Dalma Hills",
    description: "A quiet riverside town on the Subarnarekha, with the Dalma Wildlife Sanctuary a short drive away — the complete guide to Ghatshila.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/ghatshila-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Ghatshila Travel Guide: Subarnarekha River & Dalma Hills",
          description: "The complete Ghatshila travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/ghatshila-travel-guide" },
          about: { "@type": "Place", name: "Ghatshila", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Ghatshila Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Ghatshila?", a: "A day trip covers the main spots comfortably, but an overnight stay lets you enjoy the riverfront at a slower pace and combine it with a Dalma Wildlife Sanctuary visit." },
  { q: "What is the best time to visit Ghatshila?", a: "October to March is most comfortable, with cooler temperatures for riverside walks and hill views from Phuldungri." },
  { q: "How do I reach Ghatshila?", a: "Ghatshila has its own railway station on the Kolkata-Tatanagar line. The nearest airports are Kolkata (~200km) and Ranchi. By road it's an easy ~40km drive from Jamshedpur." },
  { q: "Is Ghatshila really linked to Bengali literature?", a: "Yes — the town and its surrounding rural landscape are associated with the writings of Bengali author Bibhutibhushan Bandyopadhyay, whose work drew on this region's countryside. It's a genuine point of local literary interest rather than a major tourist claim." },
  { q: "Can I combine Ghatshila with Jamshedpur?", a: "Yes — the two are only about 40km apart, and most travelers treat Ghatshila as a day trip or one-night add-on to a Jamshedpur visit." },
  { q: "What is the budget for a trip to Ghatshila?", a: "This is a low-cost, small-town destination — a day trip can be done for roughly ₹800-1,500 per person including local transport and food, excluding transport to the region." },
  { q: "Is Ghatshila a major tourist destination?", a: "No — it's a quiet, small riverside town rather than a checklist attraction. It suits travelers who want a slow, unhurried stop rather than a packed sightseeing itinerary." },
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
  { id: "introduction", title: "Why Ghatshila?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ghatshila", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GHATSHILA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for riverside walks and a Dalma sanctuary side trip",
    emoji: "🏞️",
    items: [
      { name: "Comfortable Walking Shoes", description: "For walking Phuldungri Hill and the riverfront paths around town.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Phuldungri Hill and the riverbank paths are uneven in stretches." },
      { name: "Insect Repellent", description: "Riverside evenings and any Dalma sanctuary side trip bring a real mosquito presence.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "The Subarnarekha riverbank and Dalma forest edge are both mosquito-prone at dusk." },
      { name: "Reusable Water Bottle", description: "Facilities are minimal outside the main town area — carry water for riverside and hill walks.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-sky-100 text-sky-700", why: "This is a small town with limited shops away from the centre." },
      { name: "Camera / Zoom Lens", description: "For the riverfront views from Phuldungri Hill and any wildlife spotted near Dalma.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("travel+camera+zoom+lens"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "The river and hill views are Ghatshila's main visual draw." },
    ],
  },
];

export default function GhatshilaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/hero.jpg" alt="Forested riverside hills representative of Ghatshila, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Ghatshila", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ghatshila", "Subarnarekha River", "Off-beat", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Ghatshila Travel Guide: Subarnarekha River & Dalma Hills
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A quiet riverside town on the Subarnarekha that inspired Bengali literature, with the Dalma Wildlife Sanctuary a short drive away.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Ghatshila, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Ghatshila?</h2>
                  <p>
                    <strong>Ghatshila</strong> is a small, unhurried town on the banks of the Subarnarekha River, in southeastern Jharkhand close to the West Bengal border. It's not a major tourist draw, and that's part of its appeal — a place to slow down, walk along the river, and climb a low hill for a sunset view rather than tick off a checklist of sights.
                  </p>
                  <p>
                    The town and its surrounding countryside carry a genuine literary association: they're linked to the writings of Bengali author Bibhutibhushan Bandyopadhyay, whose fiction drew on this region's rural landscape — a detail that gives Ghatshila a quiet cultural resonance beyond its natural setting.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏞️</span> Ghatshila at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🌊", label: "River", value: "Subarnarekha" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Ghatshila station" },
                        { icon: "🐘", label: "Nearby", value: "Dalma Wildlife Sanctuary" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹1,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Ghatshila</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear, and comfortable for riverside walks and the climb up Phuldungri Hill." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warm and increasingly humid — still visitable but less comfortable for extended walking." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "The Subarnarekha runs full and the countryside turns green, but river conditions can be less predictable." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for riverside walking and hilltop views.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Ghatshila</h2>
                  <ul>
                    <li><strong>By Air:</strong> The nearest airports are Kolkata (~200km) and Ranchi, both requiring a further road or rail journey.</li>
                    <li><strong>By Train:</strong> Ghatshila has its own railway station on the Kolkata-Tatanagar line, making it one of the more conveniently rail-connected small towns in the region.</li>
                    <li><strong>By Road:</strong> An easy ~40km drive from Jamshedpur, the most common approach for most visitors.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Ghatshila with a Jamshedpur trip — the short distance between them makes a natural two-stop itinerary.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Ghatshila</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/hero.jpg" alt="River and forested hills near Ghatshila" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Subarnarekha riverfront:</strong> The heart of the town's appeal — quiet walks and river views, especially pleasant in the cooler months.</li>
                    <li><strong>Phuldungri Hill:</strong> A small hill with views over the town and river, a straightforward climb rewarded with a good sunset vantage point.</li>
                    <li><strong>Burudih Lake:</strong> A quiet lakeside spot nearby, good for a relaxed walk away from the main town.</li>
                    <li><strong>Dalma Wildlife Sanctuary:</strong> A nearby hill sanctuary known for its elephant population, shared in proximity with Jamshedpur — worth a half-day trip if you have the time.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Ghatshila</h2>
                  <p>Accommodation options are limited given the town's small scale — most travelers choose simple local stays or base themselves in nearby Jamshedpur.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Basic guesthouses in town", "Simple lodges near the railway station"] },
                      { tier: "Alternative", icon: "🏨", range: "Base in Jamshedpur (~40km)", picks: ["Wider hotel selection in Jamshedpur", "Day trip to Ghatshila from a Jamshedpur base"] },
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
                  <h2>What to Eat in Ghatshila</h2>
                  <ul>
                    <li><strong>Local Bengali-influenced meals:</strong> Given proximity to the West Bengal border, expect a mix of Jharkhand and Bengali home-style cooking at small local eateries.</li>
                    <li><strong>Simple riverside snacks:</strong> Basic tea stalls and snack vendors near the river and station.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Ghatshila Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Riverfront & Phuldungri Hill", color: "bg-amber-700", activities: ["Arrive from Jamshedpur", "Walk the Subarnarekha riverfront", "Climb Phuldungri Hill for the view"] },
                      { day: "Afternoon", title: "Burudih Lake & Departure", color: "bg-forest-600", activities: ["Visit Burudih Lake", "Optional: short detour toward Dalma Wildlife Sanctuary", "Return to Jamshedpur or onward travel"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Approx. cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Local transport (from Jamshedpur, return)", "₹400–₹800"],
                          ["Food for the day", "₹300–₹600"],
                          ["Entry/misc.", "₹100–₹200"],
                          ["Day trip total", "₹800–₹1,600"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the wider region and any overnight stay.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Ghatshila</h2>
                  <ul>
                    <li><strong>Combine with Jamshedpur:</strong> Ghatshila works best as a day trip or short add-on to a Jamshedpur visit rather than a standalone base.</li>
                    <li><strong>Set modest expectations:</strong> This is a quiet, small town — go for the slow pace and river views, not a packed sightseeing list.</li>
                    <li><strong>Check river conditions before swimming:</strong> The Subarnarekha's flow varies seasonally.</li>
                    <li><strong>Carry cash:</strong> Card acceptance is limited in this small town.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Walk the Subarnarekha riverfront at a slow pace", "Climb Phuldungri Hill for sunset", "Combine with a Jamshedpur trip", "Carry sufficient cash", "Consider a Dalma Wildlife Sanctuary detour"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect major tourist infrastructure", "Rely on cards for payment", "Swim without checking current river conditions", "Plan a multi-day trip around Ghatshila alone", "Skip Jamshedpur if you have the time to combine both"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Ghatshila", "Subarnarekha River", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GHATSHILA_GEAR} destination="Ghatshila" />
              <RelatedPostsGrid currentSlug="ghatshila-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="ghatshila-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
