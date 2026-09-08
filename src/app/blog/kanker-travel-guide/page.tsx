// src/app/blog/kanker-travel-guide/page.tsx
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
  title: "Kanker Travel Guide: Palace Stays & Gateway to Interior Bastar",
  description:
    "The complete Kanker travel guide. Kanker Palace heritage stay, tribal villages, the quieter northern route into Bastar, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Kanker travel guide, Kanker Palace, Bastar tribal villages, how to reach Kanker, best time to visit Kanker Chhattisgarh, interior Bastar",
  openGraph: {
    title: "Kanker Travel Guide: Palace Stays & Gateway to Interior Bastar",
    description: "A former princely palace turned heritage hotel, and one of the quieter entry points into Chhattisgarh's tribal heartland — the complete guide to Kanker.",
    url: "https://club.kudozz.in/blog/kanker-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/saheliyon.jpg", width: 1200, height: 630, alt: "Heritage palace grounds representative of Kanker, Chhattisgarh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanker Travel Guide: Palace Stays & Gateway to Interior Bastar",
    description: "A former princely palace and a quieter entry point into Chhattisgarh's tribal heartland — the complete guide to Kanker.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kanker-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kanker Travel Guide: Palace Stays & Gateway to Interior Bastar",
          description: "The complete Kanker travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kanker-travel-guide" },
          about: { "@type": "Place", name: "Kanker", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kanker Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "What is Kanker Palace?", a: "A former residence of the Kanker princely state's royal family, which has operated as a heritage hotel in some periods, offering visitors the chance to stay in a converted royal residence. Verify current operational status and booking process before planning a stay around it." },
  { q: "How many days do I need in Kanker?", a: "One to two days for the town and palace itself, or longer if using Kanker as a base to explore surrounding tribal villages and forest areas." },
  { q: "How do I reach Kanker?", a: "The nearest airport is Raipur, about 140km away. Kanker has road connectivity via NH30, but limited direct rail access." },
  { q: "What is the best time to visit Kanker?", a: "October to March for the most comfortable weather, both in town and for any excursions into surrounding tribal areas." },
  { q: "Is Kanker touristy?", a: "No — it's genuinely quieter and less developed for tourism than Jagdalpur further south, which is part of its appeal for travelers wanting a lower-key entry into Bastar's tribal region." },
  { q: "What is the budget for a trip to Kanker?", a: "A budget traveler can manage on roughly ₹1,200 a day; a palace stay (if operational) sits at a distinctly higher tier — verify current rates." },
  { q: "Can I visit tribal villages near Kanker?", a: "Yes, this is one of the district's draws — but approach village visits respectfully and ideally with a local guide rather than uninvited independent wandering." },
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
  { id: "introduction", title: "Why Kanker?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kanker", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KANKER_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for palace stays and tribal-village visits",
    emoji: "🏰",
    items: [
      { name: "Comfortable Walking Shoes", description: "For palace grounds and any village or forest walking around Kanker.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Useful across both palace grounds and any rural excursions." },
      { name: "Modest, Respectful Clothing", description: "For visiting tribal villages respectfully as a guest.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Cultural-visit essential", tagColor: "bg-purple-100 text-purple-700", why: "Village visits are a genuine cultural exchange, not a photo stop — dress and behave accordingly." },
      { name: "Insect Repellent", description: "For forested areas and rural surroundings around Kanker.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Kanker's forested terrain brings a real insect presence, especially at dusk." },
      { name: "Camera", description: "For the palace architecture and rural landscapes, used respectfully and with permission in villages.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-sky-100 text-sky-700", why: "Always ask before photographing people in tribal villages." },
    ],
  },
];

export default function KankerGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Heritage palace grounds representative of Kanker, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kanker", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kanker", "Bastar", "Off-beat", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kanker Travel Guide: Palace Stays & Gateway to Interior Bastar
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A former princely palace turned heritage hotel, and one of the quieter entry points into Chhattisgarh's tribal heartland.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kanker, Chhattisgarh" },
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
                  <h2>Why Kanker?</h2>
                  <p>
                    <strong>Kanker</strong> sits at the northern edge of Chhattisgarh's Bastar tribal region, and its main landmark is a genuine curiosity: <strong>Kanker Palace</strong>, a former residence of the district's princely-state royal family that has, in some periods, operated as a heritage hotel — a rare chance to stay in a converted royal residence in a part of India that sees very few travelers at all.
                  </p>
                  <p>
                    Beyond the palace, Kanker functions as a quieter, less-developed alternative to Jagdalpur for exploring Bastar's tribal villages and forested terrain — genuinely off the beaten track, with modest tourist infrastructure and a slower, more rural pace.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Kanker at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🏰", label: "Key Site", value: "Kanker Palace" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Raipur (~140km)" },
                        { icon: "🌲", label: "Region", value: "Northern Bastar" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kanker</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable conditions for exploring the palace grounds and any surrounding village excursions." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Manageable but less comfortable for extended outdoor exploring." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Lush and green, but rural roads can be affected by rain — factor in extra travel time." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for both the palace and any village excursions.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kanker</h2>
                  <ul>
                    <li><strong>By Air:</strong> Raipur, the nearest airport, is about 140km away.</li>
                    <li><strong>By Road:</strong> Kanker has road connectivity via NH30 — the standard approach given limited direct rail access.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Verify current status and booking process for a Kanker Palace stay well ahead if that's the centerpiece of your trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kanker</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Palace and rural surroundings near Kanker" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kanker Palace:</strong> The district's main landmark — a former royal residence with genuine heritage character.</li>
                    <li><strong>Tribal village visits:</strong> Kanker's rural surroundings offer a lower-key, less-touristed way to experience Bastar's indigenous communities.</li>
                    <li><strong>Forested countryside:</strong> Kanker district's terrain offers quiet, undeveloped nature exploration.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kanker</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Basic local guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Simple hotels in town"] },
                      { tier: "Heritage", icon: "🏰", range: "Varies — verify current status", picks: ["Kanker Palace, if operational as a heritage stay"] },
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
                  <h2>What to Eat in Kanker</h2>
                  <ul>
                    <li><strong>Chhattisgarhi meals:</strong> Simple regional cooking at local eateries.</li>
                    <li><strong>Palace dining:</strong> If staying at Kanker Palace, meals are typically served as part of the stay.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kanker Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Kanker Palace & Town", color: "bg-amber-700", activities: ["Arrive, check in", "Explore Kanker Palace grounds", "Evening: town walk"] },
                      { day: "Day 2", title: "Village & Countryside", color: "bg-forest-600", activities: ["Morning: visit a nearby tribal village with a local guide", "Afternoon: countryside exploration", "Departure"] },
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
                          ["Accommodation/night", "₹900", "₹3,000"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹300", "₹600"],
                          ["Daily total", "₹1,200", "₹3,500"],
                          ["2-Day trip total", "₹2,400", "₹7,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. A Kanker Palace stay, if available, sits well above these mid-range figures.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kanker</h2>
                  <ul>
                    <li><strong>Verify Kanker Palace's current status:</strong> Booking process and availability may vary — confirm before planning around it.</li>
                    <li><strong>Approach village visits respectfully:</strong> Go with a local guide rather than uninvited exploration.</li>
                    <li><strong>Set modest infrastructure expectations:</strong> This is a genuinely quiet, under-developed part of the tourist map.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify Kanker Palace's current operational status", "Visit tribal villages with a local guide", "Set realistic infrastructure expectations", "Carry cash for local transactions", "Ask permission before photographing people"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume Kanker Palace is always available without checking", "Wander into tribal villages uninvited", "Expect Jagdalpur-level tourist infrastructure", "Rely on cards for payments", "Photograph people without asking first"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kanker", "Bastar", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KANKER_GEAR} destination="Kanker" />
              <RelatedPostsGrid currentSlug="kanker-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kanker-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
