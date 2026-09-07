// src/app/blog/ujjain-travel-guide/page.tsx
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
  title: "Ujjain Travel Guide: Mahakaleshwar Temple, Simhastha & Kumbh",
  description:
    "The complete Ujjain travel guide. Mahakaleshwar Jyotirlinga Temple and its Bhasma Aarti, Ram Ghat, Kal Bhairav Temple, the Simhastha Kumbh Mela, where to stay, and a 1-2 day itinerary for one of Hinduism's seven sacred cities.",
  keywords:
    "Ujjain travel guide, Mahakaleshwar Temple, Bhasma Aarti timing, Ram Ghat Ujjain, Kal Bhairav Temple, Simhastha Kumbh Mela, Ujjain itinerary, best time to visit Ujjain, how to reach Ujjain, Ujjain Madhya Pradesh",
  openGraph: {
    title: "Ujjain Travel Guide: Mahakaleshwar Temple, Simhastha & Kumbh",
    description:
      "One of Hinduism's seven sacred cities and home to a Jyotirlinga where the daily Bhasma Aarti draws pilgrims before dawn — the complete guide to Ujjain.",
    url: "https://club.kudozz.in/blog/ujjain-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      { url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "A golden-hued temple town representative of Ujjain's sacred old city" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjain Travel Guide: Mahakaleshwar Temple, Simhastha & Kumbh",
    description: "A Jyotirlinga where the daily Bhasma Aarti draws pilgrims before dawn — the complete guide to Ujjain.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/ujjain-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Ujjain Travel Guide: Mahakaleshwar Temple, Simhastha & Kumbh",
          description: "The complete Ujjain travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/ujjain-travel-guide" },
          about: { "@type": "Place", name: "Ujjain", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Ujjain Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Ujjain?",
    a: "A single focused day covers Mahakaleshwar Temple, Ram Ghat, and Kal Bhairav Temple, though many pilgrims stay overnight to attend the pre-dawn Bhasma Aarti — in which case plan for a relaxed one to two days.",
  },
  {
    q: "What time is the Bhasma Aarti at Mahakaleshwar Temple?",
    a: "It's traditionally held in the very early morning, before sunrise, and is one of the temple's most significant daily rituals. Timings and any booking or pass requirements can change, so verify the current schedule and process with the temple trust or your hotel before you go.",
  },
  {
    q: "What is the Simhastha Kumbh Mela?",
    a: "Ujjain is one of four sites (along with Nashik, Haridwar, and Prayagraj) that host a Kumbh Mela on a rotating roughly 12-year cycle, held on the banks of the Shipra River. It's a massive pilgrimage gathering — expect very heavy crowds and book accommodation far in advance if your visit coincides with a Kumbh year.",
  },
  {
    q: "What is Ujjain famous for?",
    a: "The Mahakaleshwar Jyotirlinga Temple, one of the 12 Jyotirlingas of Shiva; its status as one of Hinduism's seven sacred cities (sapta puri); the Simhastha Kumbh Mela; and the unusual Kal Bhairav Temple.",
  },
  {
    q: "What is the best time to visit Ujjain?",
    a: "October to March for comfortable temperatures. Outside a Kumbh year, weekdays are noticeably quieter than weekends and festival dates.",
  },
  {
    q: "How do I reach Ujjain?",
    a: "The nearest airport is Indore (IDR), about 55 km away and roughly an hour by road. Ujjain Junction is a well-connected railway station, and it's about 185 km from Bhopal by road.",
  },
  {
    q: "Can Ujjain be visited as a day trip from Indore?",
    a: "Yes — it's about an hour's drive each way, making a day trip from Indore very manageable, though staying overnight lets you attend the early-morning Bhasma Aarti without a pre-dawn drive.",
  },
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
  { id: "introduction", title: "Why Ujjain?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ujjain", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const UJJAIN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple queues, early mornings, and riverside ghats",
    emoji: "🕉️",
    items: [
      { name: "Modest Temple Wear", description: "Covered shoulders and knees are expected at Mahakaleshwar Temple, Kal Bhairav Temple, and around Ram Ghat.", price: "₹599", rating: 4.4, reviews: "3.4k", image: "🧣", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Ujjain's temples are among the most actively revered in India — dress expectations are strictly observed." },
      { name: "Light Shawl / Stole", description: "Useful both as a head covering inside temples and for warmth during the pre-dawn Bhasma Aarti, which can be cold outside summer.", price: "₹399", rating: 4.4, reviews: "3.9k", image: "🧕", affiliateUrl: amazonSearchUrl("cotton+shawl+stole+travel"), tag: "Aarti essential", tagColor: "bg-amber-100 text-amber-700", why: "Pre-dawn queues for the Bhasma Aarti can mean a long, chilly wait, especially in winter." },
      { name: "Small Bag for Shoes & Valuables", description: "Footwear must come off before entering most temples, and a dedicated small bag makes managing shoes and valuables in crowds much easier.", price: "₹299", rating: 4.3, reviews: "3.1k", image: "👝", affiliateUrl: amazonSearchUrl("travel+shoe+bag+pouch"), tag: "Temple essential", tagColor: "bg-forest-100 text-forest-700", why: "Shoe-drop counters at busy temples can have long queues of their own — carrying your own bag is often faster." },
      { name: "Comfortable Walking Shoes", description: "For the walk between Mahakaleshwar Temple, Ram Ghat, and Kal Bhairav Temple across the old city.", price: "₹1,199", rating: 4.4, reviews: "4.1k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+outdoor"), tag: "City-day essential", tagColor: "bg-sky-100 text-sky-700", why: "Ujjain's main sites are close together but best covered on foot through narrow old-city lanes." },
      { name: "Reusable Water Bottle", description: "Useful for a day of temple queues and ghat walking, particularly outside the cooler winter months.", price: "₹349", rating: 4.5, reviews: "6.0k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Travel essential", tagColor: "bg-red-100 text-red-700", why: "Temple queues can run long, especially around major festival dates." },
    ],
  },
];

export default function UjjainGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="A golden-hued temple town representative of Ujjain's sacred old city" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" },
                { label: "Ujjain", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (<Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>) : (<span className="text-white/35">{crumb.label}</span>)}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ujjain", "Pilgrimage", "Heritage", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Ujjain Travel Guide: Mahakaleshwar Temple, Simhastha & Kumbh
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of Hinduism's seven sacred cities and home to a Jyotirlinga
              where the daily Bhasma Aarti draws pilgrims before dawn —
              everything you need to plan a trip to Ujjain.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Ujjain, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,950 words" },
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
                  <h2>Why Ujjain?</h2>
                  <p>
                    <strong>Ujjain</strong>, on the banks of the Shipra River
                    in western Madhya Pradesh, is one of Hinduism's{" "}
                    <em>sapta puri</em> — seven cities considered especially
                    sacred. Its spiritual centre is the{" "}
                    <strong>Mahakaleshwar Jyotirlinga Temple</strong>, one of
                    only twelve Jyotirlingas in India, famous for its{" "}
                    <strong>Bhasma Aarti</strong> — a pre-dawn ritual in which
                    the deity is offered sacred ash, drawing devotees from
                    across the country well before sunrise.
                  </p>
                  <p>
                    Ujjain's sacred geography extends along the Shipra at{" "}
                    <strong>Ram Ghat</strong>, and every twelve years or so the
                    city hosts the <strong>Simhastha Kumbh Mela</strong>, one
                    of the four rotating Kumbh sites alongside Nashik,
                    Haridwar, and Prayagraj — among the largest religious
                    gatherings on Earth. Outside those Kumbh years, Ujjain is
                    a manageable, deeply atmospheric day trip or overnight
                    stop, easily combined with Indore or Omkareshwar.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🕉️</span> Ujjain at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Mahakaleshwar Jyotirlinga" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Indore (IDR), ~55 km" },
                        { icon: "🕉️", label: "Sacred River", value: "Shipra" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹5,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Ujjain</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall", text: "Cool, comfortable weather for temple queues and ghat walks — the most pleasant window for a visit." },
                      { season: "Apr – Jun", emoji: "🔥", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Dry heat builds quickly; an early-morning Bhasma Aarti visit followed by an indoor afternoon works best." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-forest-50 border-forest-200", mood: "Monsoon", text: "The Shipra rises and Ram Ghat gets lush and atmospheric, though rain can disrupt ghat-side plans." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February for weather, though a Simhastha Kumbh year (roughly once every 12 years) will completely reshape crowd levels regardless of season — plan and book far ahead if your dates coincide.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Ujjain</h2>
                  <ul>
                    <li><strong>By Air:</strong> Indore (IDR) is the nearest airport, about 55 km / an hour's drive away.</li>
                    <li><strong>By Train:</strong> Ujjain Junction is a well-connected railway station with direct trains from major cities including Delhi, Mumbai, and Indore.</li>
                    <li><strong>By Road:</strong> About an hour from Indore and roughly 185 km / 3.5-4 hours from Bhopal.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you want to attend the Bhasma Aarti, staying overnight in Ujjain avoids a pre-dawn drive from Indore — check the current timing and any registration/pass process with the temple trust or your hotel well before your visit.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Golden-hued architecture representative of Ujjain's temple town" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Mahakaleshwar Jyotirlinga Temple:</strong> One of the 12 Jyotirlingas of Shiva and Ujjain's spiritual heart, famous for the pre-dawn Bhasma Aarti — verify current timings and any booking process before you go.</li>
                    <li><strong>Ram Ghat:</strong> The main bathing ghat on the Shipra River, atmospheric at dawn and during evening aarti.</li>
                    <li><strong>Kal Bhairav Temple:</strong> An unusual and historically significant temple where liquor is offered as prasad, a genuine and long-standing local custom.</li>
                    <li><strong>Vedh Shala (Jantar Mantar):</strong> A historic astronomical observatory, one of several such observatories built across India.</li>
                    <li><strong>Sandipani Ashram:</strong> A site mythologically linked to Lord Krishna's education, a quieter stop away from the main temple crowds.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹800–₹1,800/night", picks: ["Dharamshalas and pilgrim lodges near Mahakaleshwar Temple", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,000–₹4,500/night", picks: ["Hotels within walking distance of the temple", "Business hotels in the newer parts of town"] },
                      { tier: "Luxury", icon: "✨", range: "₹5,500–₹12,000+/night", picks: ["Well-appointed hotels near the temple area", "Premium chain hotels"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Staying within walking distance of Mahakaleshwar Temple makes the most sense if you plan to attend the pre-dawn Bhasma Aarti.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Ujjain</h2>
                  <ul>
                    <li><strong>Prasad and temple food:</strong> Simple, satisfying vegetarian offerings are widely available around Mahakaleshwar Temple.</li>
                    <li><strong>Poha:</strong> As across Madhya Pradesh, a common and well-loved breakfast option at local stalls.</li>
                    <li><strong>Malpua and other sweets:</strong> A common festive treat around temple areas and during pilgrimage seasons.</li>
                    <li><strong>Local vegetarian thalis:</strong> Simple, filling thalis are the norm at eateries near the temple and old city, in keeping with the city's largely pilgrim-oriented food scene.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-2 Day Ujjain Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Temple & Ghats", color: "bg-amber-700", activities: ["Morning: Mahakaleshwar Temple darshan", "Midday: Kal Bhairav Temple", "Afternoon: Vedh Shala and Sandipani Ashram", "Evening: Ram Ghat aarti"] },
                      { day: "Day 2 (optional)", title: "Bhasma Aarti & Departure", color: "bg-forest-600", activities: ["Pre-dawn: attend the Bhasma Aarti at Mahakaleshwar Temple", "Morning: relaxed breakfast and old-city walk", "Late morning: depart for Indore, Omkareshwar, or onward"] },
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
                          ["Accommodation/night", "₹800", "₹3,000", "₹8,000"],
                          ["Food/day", "₹300", "₹700", "₹1,800"],
                          ["Local transport/day", "₹200", "₹500", "₹1,500"],
                          ["Daily total", "₹1,300", "₹4,200", "₹11,300"],
                          ["1-Day trip total", "₹1,300", "₹4,200", "₹11,300"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights/trains to the region. Costs rise sharply during Simhastha Kumbh years.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Verify Bhasma Aarti timing and process before you go:</strong> Schedules and any registration requirements can change — check with the temple trust or your hotel.</li>
                    <li><strong>Dress modestly:</strong> Covered shoulders and knees are expected at all major temples.</li>
                    <li><strong>Carry a small bag for shoes:</strong> Footwear comes off before entering most temples.</li>
                    <li><strong>Book well ahead during Kumbh years:</strong> The Simhastha Kumbh Mela brings enormous crowds and accommodation fills up fast.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Confirm Bhasma Aarti timing/booking ahead of time", "Dress modestly at every temple", "Visit Ram Ghat at sunset for the evening aarti", "Combine Ujjain with a day trip from Indore", "Carry a small bag for shoes and valuables"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume Bhasma Aarti timing without checking current details", "Wear beachwear-style or revealing clothing near temples", "Travel during a Kumbh year without booking accommodation early", "Rush through Ram Ghat — it rewards unhurried time", "Skip Kal Bhairav Temple, a genuinely distinctive site"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Ujjain", "Mahakaleshwar Temple", "Heritage", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={UJJAIN_GEAR} destination="Ujjain" />
              <RelatedPostsGrid currentSlug="ujjain-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="ujjain-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
