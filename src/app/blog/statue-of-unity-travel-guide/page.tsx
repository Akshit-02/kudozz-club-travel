// src/app/blog/statue-of-unity-travel-guide/page.tsx
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
  title: "Statue of Unity Travel Guide: World's Tallest Statue, Timings & Tips",
  description:
    "The complete Statue of Unity travel guide. The viewing gallery, Sardar Sarovar Dam, the light show, valley of flowers, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Statue of Unity travel guide, Sardar Vallabhbhai Patel statue, viewing gallery timings, Sardar Sarovar Dam, Kevadia, best time to visit Statue of Unity, how to reach Statue of Unity",
  openGraph: {
    title: "Statue of Unity Travel Guide: World's Tallest Statue, Timings & Tips",
    description: "The world's tallest statue, twice the height of the Statue of Liberty, rising from an island in the Narmada River — the complete guide to the Statue of Unity.",
    url: "https://club.kudozz.in/blog/statue-of-unity-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Monumental heritage landmark representative of the Statue of Unity, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statue of Unity Travel Guide: World's Tallest Statue, Timings & Tips",
    description: "The viewing gallery, Sardar Sarovar Dam, and the light show — the complete guide to the Statue of Unity.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/statue-of-unity-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Statue of Unity Travel Guide: World's Tallest Statue, Timings & Tips",
          description: "The complete Statue of Unity travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/statue-of-unity-travel-guide" },
          about: { "@type": "Place", name: "Statue of Unity", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Statue of Unity Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How tall is the Statue of Unity?", a: "It stands at 182 metres, widely cited as the world's tallest statue — roughly double the height of the Statue of Liberty including its pedestal." },
  { q: "How many days do I need to visit the Statue of Unity?", a: "One full day covers the statue, viewing gallery, and surrounding complex (memorial garden, valley of flowers, light show) comfortably." },
  { q: "What is the best time to visit?", a: "October to March for comfortable weather. If a full-reservoir view of the Sardar Sarovar Dam matters to you, verify current water release schedules before your visit." },
  { q: "Do I need to book tickets in advance?", a: "Yes, it's advisable — especially viewing gallery tickets on weekends and holidays, which can sell out. Book ahead where possible." },
  { q: "How do I reach the Statue of Unity?", a: "Vadodara Airport, about 90km away, is the nearest. Kevadia has its own railway station built specifically to serve the site, with wider connections through Vadodara." },
  { q: "What is the budget for a trip to the Statue of Unity?", a: "A budget traveler can manage on roughly ₹1,800 a day including entry and viewing gallery tickets, a mid-range trip closer to ₹4,000 a day." },
  { q: "Is the Statue of Unity worth a full day trip from Vadodara?", a: "Yes — most visitors treat it as a day trip from Vadodara or Ahmedabad, though staying overnight near Kevadia lets you catch the evening light show without rushing back." },
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
  { id: "introduction", title: "Why the Statue of Unity?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Statue of Unity", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SOU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a full day at the statue complex",
    emoji: "🗽",
    items: [
      { name: "Comfortable Walking Shoes", description: "The complex spans a large area — the statue, viewing gallery, memorial garden, and valley of flowers all involve walking.", price: "₹1,999", rating: 4.4, reviews: "5.6k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "The Statue of Unity complex is genuinely large — expect a full day of walking between attractions." },
      { name: "Sun Hat & Sunscreen", description: "Much of the complex is outdoors with limited shade.", price: "₹599", rating: 4.4, reviews: "5.2k", image: "🧴", affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"), tag: "Sun essential", tagColor: "bg-sky-100 text-sky-700", why: "Gujarat's sun is intense outside the winter months, and the complex has few shaded rest points." },
      { name: "Reusable Water Bottle", description: "For a full day of walking around the site.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "A large, spread-out complex means real walking distance over the day." },
      { name: "Camera", description: "For the viewing gallery panorama and the statue itself.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The viewing gallery offers one of Gujarat's most striking panoramic views." },
    ],
  },
];

export default function StatueOfUnityGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/hero.jpg" alt="Monumental heritage landmark representative of the Statue of Unity, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Statue of Unity", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Statue of Unity", "Narmada River", "Heritage", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Statue of Unity Travel Guide: World's Tallest Statue, Timings & Tips
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The world's tallest statue, twice the height of the Statue of Liberty, rising from an island in the Narmada River.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kevadia, Gujarat" },
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
                  <h2>Why the Statue of Unity?</h2>
                  <p>
                    The <strong>Statue of Unity</strong> depicts Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and the leader credited with unifying India's princely states after independence. At 182 metres, it's widely cited as the world's tallest statue — roughly double the height of the Statue of Liberty including its pedestal — standing on an island facing the <strong>Sardar Sarovar Dam</strong> on the Narmada River.
                  </p>
                  <p>
                    A viewing gallery inside the statue, reached by high-speed elevators, offers a panoramic view over the dam and the surrounding Satpura and Vindhya hill ranges — the site's clear centrepiece experience.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🗽</span> Statue of Unity at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "📏", label: "Height", value: "182m — world's tallest statue" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Vadodara (~90km)" },
                        { icon: "🚆", label: "Nearest Station", value: "Kevadia (built for the site)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit the Statue of Unity</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for a full day exploring the largely outdoor complex." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat makes a full day at the site tiring — plan around the cooler morning/evening hours." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "The dam and reservoir are typically fuller during and after monsoon — good for dam views, less ideal for outdoor comfort." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for a full day of outdoor sightseeing across the complex.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach the Statue of Unity</h2>
                  <ul>
                    <li><strong>By Air:</strong> Vadodara Airport, about 90km away, is the nearest.</li>
                    <li><strong>By Train:</strong> Kevadia has its own railway station built specifically to serve the site, with wider connections through Vadodara.</li>
                    <li><strong>By Road:</strong> Well-developed road access given the site's status as a major national attraction.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book viewing gallery tickets online in advance, especially for weekends and holidays — queues at the counter can be significant otherwise.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at the Statue of Unity</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/hero.jpg" alt="Monumental landmark scenery near the Statue of Unity" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Viewing gallery:</strong> A panoramic viewpoint inside the statue, reached by high-speed elevators, overlooking the dam and hill ranges.</li>
                    <li><strong>Sardar Sarovar Dam:</strong> The dam the statue faces, worth a dedicated viewpoint stop.</li>
                    <li><strong>Laser/light-and-sound show:</strong> An evening show at the complex — check current timings.</li>
                    <li><strong>Valley of Flowers:</strong> A landscaped garden area within the complex.</li>
                    <li><strong>Sardar Sarovar Zoological Park:</strong> A nearby zoo/safari park, a good add-on for families.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near the Statue of Unity</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,200–₹2,500/night", picks: ["Budget hotels in Kevadia", "Guesthouses near the complex"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,000–₹6,500/night", picks: ["Mid-range hotels/resorts in Kevadia", "Riverside stays near the dam"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹15,000+/night", picks: ["Premium resort properties near Kevadia"] },
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
                  <h2>What to Eat Near the Statue of Unity</h2>
                  <ul>
                    <li><strong>On-site food court:</strong> The complex has dedicated dining facilities serving Gujarati and pan-Indian food.</li>
                    <li><strong>Kevadia local eateries:</strong> Simple vegetarian dining in the surrounding town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Statue of Unity Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Statue & Viewing Gallery", color: "bg-amber-700", activities: ["Arrive early, book/collect viewing gallery tickets", "Ascend to the viewing gallery", "Explore the statue base and memorial garden"] },
                      { day: "Afternoon", title: "Dam & Gardens", color: "bg-forest-600", activities: ["Sardar Sarovar Dam viewpoint", "Valley of Flowers", "Optional: Sardar Sarovar Zoological Park"] },
                      { day: "Evening", title: "Light Show & Departure", color: "bg-orange-600", activities: ["Laser/light-and-sound show (check current timings)", "Departure"] },
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
                          ["Accommodation/night", "₹1,500", "₹4,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Entry + viewing gallery ticket", "₹500", "₹1,200"],
                          ["Local transport per day", "₹300", "₹700"],
                          ["Daily total (1-day trip)", "₹2,700", "₹6,800"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Verify current viewing gallery ticket pricing before your visit.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for the Statue of Unity</h2>
                  <ul>
                    <li><strong>Book viewing gallery tickets in advance:</strong> Especially on weekends and holidays.</li>
                    <li><strong>Arrive early:</strong> Queues build quickly as the day progresses.</li>
                    <li><strong>Wear comfortable shoes:</strong> The complex is large and spread out.</li>
                    <li><strong>Check dam water levels:</strong> If a full-reservoir view matters to your photos.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book viewing gallery tickets online ahead of time", "Arrive early to beat the biggest queues", "Wear comfortable shoes for the large complex", "Stay for the evening light show if time allows", "Combine with a Sardar Sarovar Dam viewpoint stop"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up on a weekend without pre-booked tickets", "Underestimate how much walking the full complex involves", "Visit in peak summer heat without a plan", "Skip checking current ticket pricing before you go", "Rush the visit — a full day does the complex justice"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Statue of Unity", "Narmada River", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SOU_GEAR} destination="Statue of Unity" />
              <RelatedPostsGrid currentSlug="statue-of-unity-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="statue-of-unity-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
