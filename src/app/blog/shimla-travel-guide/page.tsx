// src/app/blog/shimla-travel-guide/page.tsx
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
  title: "Shimla Travel Guide: Mall Road, Toy Train & Best Time to Visit",
  description:
    "The complete Shimla travel guide. Mall Road, The Ridge, the UNESCO Kalka-Shimla toy train, Jakhoo Temple, Kufri, where to stay, what to eat, best time to visit, and a full 2-day itinerary through Himachal Pradesh's colonial capital.",
  keywords:
    "Shimla travel guide, Kalka Shimla toy train, Mall Road Shimla, Jakhoo Temple, Kufri, best time to visit Shimla, how to reach Shimla, Shimla itinerary, Shimla weekend trip, Christ Church Shimla, Shimla from Chandigarh, Shimla from Delhi",
  openGraph: {
    title: "Shimla Travel Guide: Mall Road, Toy Train & Best Time to Visit",
    description: "A colonial-era hill capital linked by a UNESCO toy train, with a pedestrian ridge that's been the centre of town since the British Raj — the complete guide to Shimla.",
    url: "https://club.kudozz.in/blog/shimla-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/hero.jpg", width: 1200, height: 630, alt: "Snow-capped Himalayan peaks above a green valley, representative of Shimla, Himachal Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shimla Travel Guide: Mall Road, Toy Train & Best Time to Visit",
    description: "Mall Road, the UNESCO toy train, and Jakhoo Temple — the complete guide to Shimla.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/shimla-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Shimla Travel Guide: Mall Road, Toy Train & Best Time to Visit",
          description: "The complete Shimla travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/shimla-travel-guide" },
          about: { "@type": "Place", name: "Shimla", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Shimla Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Shimla?", a: "Two days covers Mall Road, The Ridge, Christ Church, Jakhoo Temple, and a day trip to Kufri comfortably. Add a day if you want to ride the toy train one-way rather than just visit the station." },
  { q: "What is the best time to visit Shimla?", a: "March to June and September to December are most pleasant for sightseeing and clear views. December to February brings snow, which is exactly what draws a large share of visitors in winter, though roads can get icy." },
  { q: "How do I reach Shimla?", a: "Chandigarh Airport (~115km) is the practical air gateway. The UNESCO-listed Kalka-Shimla toy train climbs from Kalka, itself reachable by train from Delhi or Chandigarh. By road, it's roughly 3.5 hours from Chandigarh via NH5." },
  { q: "Is the Kalka-Shimla toy train worth doing?", a: "Yes, at least one-way if your schedule allows — it's a UNESCO World Heritage narrow-gauge line climbing nearly 1,500m through over a hundred tunnels, a genuinely scenic and unhurried way to arrive. Book well ahead in peak season, as window seats sell out." },
  { q: "Is Shimla good for a weekend trip from Delhi or Chandigarh?", a: "Yes — it's one of the most accessible hill stations from both cities, with overnight Volvo buses from Delhi and a straightforward ~3.5 hour drive from Chandigarh, making a 2-3 day weekend trip very manageable." },
  { q: "What is the budget for a trip to Shimla?", a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹5,000 a day, and a heritage-hotel luxury stay can run ₹12,000+ a day. A 2-day trip totals roughly ₹3,600 on a budget and ₹10,000 mid-range, excluding transport to the region." },
  { q: "Can I visit Kufri from Shimla in a day trip?", a: "Yes — Kufri is only about 16km from Shimla, making it an easy half-day add-on for snow activities in winter or short horse rides and viewpoint walks the rest of the year." },
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
  { id: "introduction", title: "Why Shimla?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shimla", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SHIMLA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for Mall Road walks, the toy train, and Kufri day trips",
    emoji: "🚂",
    items: [
      { name: "Warm Layer / Light Jacket", description: "Even summer evenings on The Ridge drop into single digits — a packable warm layer earns its place year-round.", price: "₹1,999", rating: 4.4, reviews: "6.4k", image: "🧥", affiliateUrl: amazonSearchUrl("light+jacket+travel+hill+station"), tag: "Evening essential", tagColor: "bg-sky-100 text-sky-700", why: "Shimla's evening chill surprises first-time visitors who packed only for a warm Indian summer." },
      { name: "Comfortable Walking Shoes", description: "Mall Road and The Ridge are pedestrian-only, and the town's sloped lanes add up over a full day of sightseeing.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Shimla's core is built on a steep ridge — flat, grippy shoes matter more here than in most Indian towns." },
      { name: "Rain Layer / Umbrella", description: "Monsoon showers and sudden mountain weather shifts are common, even outside the main monsoon months.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-purple-100 text-purple-700", why: "Weather on The Ridge can turn from clear to drizzly within the hour." },
      { name: "Power Bank", description: "Useful for the long toy train ride and a full day out at Kufri with limited charging points.", price: "₹1,299", rating: 4.5, reviews: "9.7k", image: "🔋", affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"), tag: "Day-trip essential", tagColor: "bg-amber-100 text-amber-700", why: "The Kalka-Shimla toy train ride alone runs around five hours — worth having backup charge for photos." },
    ],
  },
];

export default function ShimlaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/hero.jpg" alt="Snow-capped Himalayan peaks above a green valley, representative of Shimla, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Shimla", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Shimla", "Himachal Pradesh", "Toy Train", "Hill Station"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Shimla Travel Guide: Mall Road, Toy Train & Best Time to Visit
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A colonial-era hill capital linked by a UNESCO toy train, with a pedestrian ridge that's been the centre of town since the British Raj — everything you need to plan a trip to Shimla.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Shimla, Himachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,300 words" },
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
                  <h2>Why Shimla?</h2>
                  <p>
                    <strong>Shimla</strong> was the summer capital of British India, and that history still shapes how the town looks and feels — Tudor-style architecture, a pedestrian-only Mall Road, and a ridge-top layout that keeps the historic core walkable in a way few Indian hill stations manage. It's also the classic gateway into Himachal Pradesh, and for many travelers the first taste of the state's colonial-era hill-station character.
                  </p>
                  <p>
                    The <strong>Kalka-Shimla Railway</strong> — a UNESCO World Heritage narrow-gauge "toy train" opened in 1903 — remains one of the town's signature experiences, climbing through more than a hundred tunnels on its way up from the plains.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚂</span> Shimla at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🚂", label: "Key Experience", value: "Kalka-Shimla toy train (UNESCO)" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Dec" },
                        { icon: "✈️", label: "Nearest Airport", value: "Chandigarh (~115km)" },
                        { icon: "🏛️", label: "Landmark", value: "Mall Road & The Ridge" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹5,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Shimla</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-forest-50 border-forest-200", mood: "Pleasant — good for sightseeing", text: "Comfortable daytime temperatures and generally clear views, before peak summer crowds arrive." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Regular rain and occasional landslide risk on hill routes — pack a rain layer if traveling now." },
                      { season: "Sep – Dec", emoji: "🍂", color: "bg-amber-50 border-amber-200", mood: "Clear skies — our pick", text: "Post-monsoon clarity brings some of the best mountain views of the year with thinner crowds than spring." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Snow season", text: "Shimla turns white and draws a fresh wave of visitors chasing snow — roads can be icy, book ahead." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late September to early December — the clearest views and thinner crowds, without the icy-road caution winter demands.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Shimla</h2>
                  <ul>
                    <li><strong>By Air:</strong> Shimla Airport (Jubbarhatti) has very limited flights — Chandigarh Airport (~115km) is the practical gateway with strong domestic connectivity.</li>
                    <li><strong>By Rail:</strong> The Kalka-Shimla toy train, a UNESCO World Heritage narrow-gauge line, climbs from Kalka — itself reachable by train from Delhi or Chandigarh.</li>
                    <li><strong>By Road:</strong> Overnight Volvo buses run from Delhi, and it's roughly a 3.5-hour drive from Chandigarh via NH5.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book toy train tickets well ahead in peak season — scenic window seats sell out fast, and the smaller "Rail Motor" railcar offers even better views than the standard train.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Shimla</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/hero.jpg" alt="Himalayan hill-town scenery representative of Shimla" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Mall Road & The Ridge:</strong> Shimla's pedestrian-only social heart — colonial architecture, cafes, and shops opening onto The Ridge's open square with panoramic mountain views.</li>
                    <li><strong>Christ Church:</strong> India's second-oldest church, a neo-Gothic landmark right on The Ridge and one of the town's most photographed buildings.</li>
                    <li><strong>Jakhoo Temple:</strong> A hilltop Hanuman temple with a giant statue, reached by a short trek or ropeway, with sweeping views over the town.</li>
                    <li><strong>Kufri:</strong> A small hill station about 16km away, popular for short horse rides, snow activities in winter, and foothill views.</li>
                    <li><strong>Kalka-Shimla Toy Train:</strong> The signature ride — nearly 1,500m of altitude gain across roughly five hours through over a hundred tunnels.</li>
                    <li><strong>Viceregal Lodge:</strong> A grand colonial-era building (Rashtrapati Niwas), now an institute, open for guided tours of select areas.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Shimla</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in lower Shimla", "Budget hotels near the bus stand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Heritage-style hotels near Mall Road", "Mid-range hotels along The Ridge"] },
                      { tier: "Luxury", icon: "🏛️", range: "₹8,000–₹18,000+/night", picks: ["Colonial-era heritage hotels", "Premium mountain-view stays"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Prices spike heavily during peak snow season (Dec–Jan) and the May–June summer rush — book at least a few weeks ahead if traveling during either window.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Shimla</h2>
                  <ul>
                    <li><strong>Himachali Dham:</strong> A festive, ghee-rich vegetarian thali traditionally served at weddings and religious occasions, cooked by specialist chefs called "botis."</li>
                    <li><strong>Siddu:</strong> Steamed wheat bread stuffed with poppy seeds, walnuts, or dal, served with ghee — a staple at dhabas across the state.</li>
                    <li><strong>Mall Road cafes:</strong> A long-running mix of North Indian, continental, and Tibetan food catering to Shimla's steady tourist flow.</li>
                    <li><strong>Trout:</strong> Freshly caught from Himachal's mountain streams, pan-fried with garlic and butter at several restaurants around town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Shimla Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Mall Road & The Ridge", color: "bg-amber-700", activities: ["Arrive via toy train or road", "Explore Mall Road, The Ridge, Christ Church", "Evening: Jakhoo Temple sunset"] },
                      { day: "Day 2", title: "Kufri Day Trip", color: "bg-forest-600", activities: ["Half-day trip to Kufri", "Return to Shimla for lunch", "Afternoon: Viceregal Lodge tour, departure prep"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹10,000"],
                          ["Food/day", "₹450", "₹1,000", "₹2,200"],
                          ["Local transport per day", "₹350", "₹800", "₹2,000"],
                          ["Daily total", "₹1,800", "₹5,000", "₹12,000"],
                          ["2-Day trip total", "₹3,600", "₹10,000", "₹24,000"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Shimla</h2>
                  <ul>
                    <li><strong>Book toy train seats early in peak season:</strong> Window seats sell out quickly, especially around holidays and snow season.</li>
                    <li><strong>Mall Road and The Ridge are pedestrian-only:</strong> Plan parking outside the core and expect to walk.</li>
                    <li><strong>Pack warm layers regardless of season:</strong> Even summer evenings drop into single digits.</li>
                    <li><strong>Book accommodation ahead in Dec–Jan and May–June:</strong> Both snow season and summer rush fill up fast.</li>
                    <li><strong>Drive cautiously on winter roads:</strong> Icy conditions are common in Dec–Feb — hire experienced local drivers rather than self-driving.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Ride the toy train at least one-way", "Book accommodation ahead in peak/snow season", "Walk Mall Road and The Ridge at a relaxed pace", "Pack warm layers even in summer", "Day-trip to Kufri for snow or viewpoint walks"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Drive into the pedestrian-only Mall Road core", "Skip booking toy train tickets in advance", "Self-drive icy winter roads at night", "Underestimate how cold evenings get", "Visit in Dec–Jan without booking stays ahead"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Shimla", "Himachal Pradesh", "Toy Train", "Hill Station", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SHIMLA_GEAR} destination="Shimla" />
              <RelatedPostsGrid currentSlug="shimla-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="shimla-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
