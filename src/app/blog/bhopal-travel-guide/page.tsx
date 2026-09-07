// src/app/blog/bhopal-travel-guide/page.tsx
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
  title: "Bhopal Travel Guide: Lakes, Old City & Bhimbetka Gateway",
  description:
    "The complete Bhopal travel guide. Upper Lake, Taj-ul-Masajid, the old city bazaars, Van Vihar National Park, where to stay, and how to plan day trips to Bhimbetka and Sanchi from Madhya Pradesh's capital.",
  keywords:
    "Bhopal travel guide, Upper Lake Bhopal, Taj-ul-Masajid, Bhopal old city, Van Vihar National Park, Bhopal to Bhimbetka, Bhopal to Sanchi, Bhopal itinerary, best time to visit Bhopal, Bhopal Madhya Pradesh",
  openGraph: {
    title: "Bhopal Travel Guide: Lakes, Old City & Bhimbetka Gateway",
    description:
      "A city of lakes split between a mosque-studded old quarter and leafy new Bhopal, and the gateway to India's oldest rock art at Bhimbetka — the complete guide to Bhopal.",
    url: "https://club.kudozz.in/blog/bhopal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      { url: "/images/destinations/jammu-kashmir/dal.jpg", width: 1200, height: 630, alt: "A lake city landscape representative of Bhopal's Upper Lake" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhopal Travel Guide: Lakes, Old City & Bhimbetka Gateway",
    description: "A city of lakes, a mosque-studded old quarter, and the gateway to Bhimbetka's rock art — the complete guide to Bhopal.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/bhopal-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Bhopal Travel Guide: Lakes, Old City & Bhimbetka Gateway",
          description: "The complete Bhopal travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bhopal-travel-guide" },
          about: { "@type": "Place", name: "Bhopal", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bhopal Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Bhopal?",
    a: "Two days covers the city itself — Upper Lake, the old city, Van Vihar — comfortably. Add a third day if you want to fit in the Bhimbetka and Sanchi day trip without rushing.",
  },
  {
    q: "What is Bhopal famous for?",
    a: "Its lakes (Upper Lake / Bhoj Wetland is a Ramsar-listed wetland), Taj-ul-Masajid — one of India's largest mosques — its split character of old walled city and leafy new Bhopal, and as the gateway city for the Bhimbetka rock shelters and Sanchi Stupa.",
  },
  {
    q: "Can I visit Bhimbetka and Sanchi from Bhopal in one day?",
    a: "It's tight but doable if you start early — Bhimbetka is about 45 km away and Sanchi about 55 km, in roughly opposite directions, so most travellers do one as a half-day trip and the other separately, or hire a car for a longer full-day combined trip.",
  },
  {
    q: "What is the best time to visit Bhopal?",
    a: "October to March, for comfortable temperatures for walking the old city and lakeside promenade. Summers get quite hot and dry.",
  },
  {
    q: "How do I reach Bhopal?",
    a: "Raja Bhoj Airport (BHO) has good domestic connectivity, Bhopal Junction sits on the Delhi-Chennai and Delhi-Mumbai railway lines, and it's well connected by road via NH46 and NH12.",
  },
  {
    q: "Is Bhopal a good base for exploring Madhya Pradesh?",
    a: "Yes — it's centrally located with strong connections to Bhimbetka, Sanchi, Indore, and onward to Khajuraho or Pachmarhi, making it a practical hub for a wider central MP itinerary.",
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
  { id: "introduction", title: "Why Bhopal?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhopal", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BHOPAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for lakeside walks, the old city, and day trips out of town",
    emoji: "🏞️",
    items: [
      { name: "Comfortable Walking Shoes", description: "The old city's narrow bazaar lanes and the Upper Lake promenade both call for shoes you can walk in for hours.", price: "₹1,199", rating: 4.4, reviews: "4.1k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+outdoor"), tag: "City-day essential", tagColor: "bg-amber-100 text-amber-700", why: "A day covering the old city and the lakefront easily adds up to several kilometres of walking." },
      { name: "Modest Clothing", description: "Covered shoulders and knees are appropriate near Taj-ul-Masajid and other active places of worship in the old city.", price: "₹599", rating: 4.4, reviews: "3.4k", image: "🧣", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Old-city essential", tagColor: "bg-purple-100 text-purple-700", why: "Taj-ul-Masajid is an active mosque, not just a monument, and dress expectations are taken seriously." },
      { name: "Sun Hat / Cap", description: "Useful for the Bhimbetka and Sanchi day trip, both of which involve walking exposed hillside and monument paths.", price: "₹349", rating: 4.3, reviews: "4.7k", image: "🧢", affiliateUrl: amazonSearchUrl("travel+sun+hat+cap"), tag: "Day-trip essential", tagColor: "bg-orange-100 text-orange-700", why: "Both Bhimbetka's rock shelters and Sanchi's stupa complex offer little shade across a fair amount of walking." },
      { name: "Reusable Water Bottle", description: "Handy for both city sightseeing and the Bhimbetka/Sanchi day trip, especially outside the cooler months.", price: "₹349", rating: 4.5, reviews: "6.0k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Travel essential", tagColor: "bg-sky-100 text-sky-700", why: "Neither Bhimbetka nor Sanchi has extensive shopping for water once you're on site." },
      { name: "Compact Daypack", description: "For carrying water, a camera, and layers across a day that mixes city sightseeing with an out-of-town excursion.", price: "₹899", rating: 4.4, reviews: "3.6k", image: "🎒", affiliateUrl: amazonSearchUrl("daypack+travel+lightweight"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "A single day trip covering Bhimbetka or Sanchi plus city sights is easier with everything in one light bag." },
    ],
  },
];

export default function BhopalGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="A lake city landscape representative of Bhopal's Upper Lake" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" },
                { label: "Bhopal", href: null },
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
              {["Bhopal", "Lakes", "Heritage", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bhopal Travel Guide: Lakes, Old City & Bhimbetka Gateway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A city of lakes split between a mosque-studded old quarter and
              leafy new Bhopal, and the gateway to India's oldest rock art at
              Bhimbetka — everything you need to plan a trip to Bhopal.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bhopal, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Bhopal?</h2>
                  <p>
                    <strong>Bhopal</strong>, Madhya Pradesh's capital, is
                    built around water in a way few Indian cities are — the{" "}
                    <strong>Upper Lake</strong> (part of the Ramsar-listed
                    Bhoj Wetland) and Lower Lake dominate the city's geography
                    and give it the nickname "City of Lakes." Around that
                    watery core sits a genuinely split city: a dense, historic
                    old town of mosques and bazaars built by the Begums who
                    ruled Bhopal for over a century, and a leafier, more
                    planned "new Bhopal" further out.
                  </p>
                  <p>
                    Most travellers use Bhopal primarily as a base — it's the
                    natural gateway to two of India's most important
                    prehistoric and Buddhist heritage sites,{" "}
                    <strong>Bhimbetka's rock shelters</strong> and the{" "}
                    <strong>Sanchi Stupa</strong> — but the city itself, with
                    its lakes, mosques, and old-city bazaars, is worth at
                    least a full day on its own. It's also worth noting,
                    respectfully and briefly, that Bhopal was the site of the
                    1984 gas tragedy, a defining and still-significant chapter
                    in the city's modern history.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏞️</span> Bhopal at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🏞️", label: "Key Site", value: "Upper Lake (Bhoj Wetland)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Raja Bhoj Airport (BHO)" },
                        { icon: "🗿", label: "Nearby", value: "Bhimbetka (~45 km), Sanchi (~55 km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹6,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bhopal</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall", text: "Cool, dry, and comfortable — ideal for walking the old city and taking day trips to Bhimbetka and Sanchi." },
                      { season: "Apr – Jun", emoji: "🔥", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Dry heat builds through the day; plan outdoor sightseeing for early morning and reserve afternoons for museums or lakeside cafés." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-forest-50 border-forest-200", mood: "Monsoon", text: "The lakes fill up and the city turns green, but heavy rain can disrupt day trips to Bhimbetka and Sanchi." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February, for the most reliable weather across both the city sightseeing and the Bhimbetka/Sanchi day trip.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bhopal</h2>
                  <ul>
                    <li><strong>By Air:</strong> Raja Bhoj Airport (BHO) has good domestic connectivity to major Indian cities.</li>
                    <li><strong>By Train:</strong> Bhopal Junction is a major stop on both the Delhi-Chennai and Delhi-Mumbai railway lines, making it one of central India's best-connected rail hubs.</li>
                    <li><strong>By Road:</strong> Well connected via NH46 and NH12, with Indore about 190 km / 4 hours away.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Bhopal is the single best base for covering both Bhimbetka and Sanchi — they sit in roughly opposite directions from the city, so plan them as two separate half-day trips rather than trying to force both into one rushed day.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Lakeside scenery representative of Bhopal's Upper Lake" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Upper Lake (Bhoj Wetland):</strong> A Ramsar-listed wetland and Bhopal's largest lake, popular for boating and sunset views along the promenade.</li>
                    <li><strong>Taj-ul-Masajid:</strong> One of the largest mosques in India, with an enormous courtyard and pink façade — an active place of worship, not just a monument.</li>
                    <li><strong>Old Bhopal (Chowk area):</strong> Dense, historic bazaar lanes built up under the Begums who ruled Bhopal, including Moti Masjid.</li>
                    <li><strong>Van Vihar National Park:</strong> A zoo-cum-sanctuary within city limits along the Upper Lake, an easy half-day for wildlife without leaving town.</li>
                    <li><strong>Bharat Bhavan & State Museum:</strong> Bhopal's main arts, culture, and archaeology institutions, good options for a hot afternoon.</li>
                    <li><strong>Bhimbetka & Sanchi day trips:</strong> India's oldest painted rock shelters (~45 km) and one of Buddhism's most important surviving monument complexes (~55 km) — both realistic half-day excursions from Bhopal.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹1,000–₹2,200/night", picks: ["Guesthouses near the old city", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,500–₹5,500/night", picks: ["Hotels along the Upper Lake", "Business hotels in new Bhopal (Arera Colony/MP Nagar)"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,500–₹15,000+/night", picks: ["Lakefront luxury hotels", "Heritage-style boutique stays"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>A hotel near the Upper Lake gives you the best of both worlds — walkable to the old city and a good sunset view of the water.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Bhopal</h2>
                  <ul>
                    <li><strong>Bhopali gosht/biryani:</strong> The old city's Mughlai-influenced non-vegetarian cuisine, a legacy of Bhopal's Nawabi and Begum-era rulers.</li>
                    <li><strong>Poha:</strong> As across much of MP, a common, well-loved breakfast staple, sold at small stalls across the city.</li>
                    <li><strong>Old city eateries:</strong> The lanes around Chowk and Iqbal Maidan have some of the city's most reliable kebab and biryani spots.</li>
                    <li><strong>Lakeside cafés:</strong> A more relaxed, modern food scene has grown up around the Upper Lake promenade in recent years.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bhopal Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "City: Lakes & Old Bhopal", color: "bg-amber-700", activities: ["Morning: Taj-ul-Masajid and the old city bazaars", "Midday: Bharat Bhavan or State Museum", "Afternoon: Van Vihar National Park", "Evening: Upper Lake promenade and dinner"] },
                      { day: "Day 2", title: "Bhimbetka & Sanchi Day Trip", color: "bg-forest-600", activities: ["Early morning departure for Bhimbetka's rock shelters", "Midday: return toward Bhopal or continue on to Sanchi Stupa", "Afternoon: explore Sanchi's Buddhist monuments", "Evening: return to Bhopal"] },
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
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Bhimbetka + Sanchi day trip (car hire)", "₹1,800", "₹2,800", "₹4,500"],
                          ["Daily total (excl. day-trip day)", "₹1,700", "₹5,200", "₹14,200"],
                          ["2-Day trip total", "₹4,900", "₹11,800", "₹32,900"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights/trains to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Dress modestly near mosques:</strong> Taj-ul-Masajid and the old city bazaars call for covered shoulders and knees.</li>
                    <li><strong>Split Bhimbetka and Sanchi across two trips:</strong> They're in opposite directions from Bhopal — don't try to force both into one rushed day.</li>
                    <li><strong>Hire a car with a driver for day trips:</strong> Public transport to Bhimbetka and Sanchi is limited; a private car makes the logistics far easier.</li>
                    <li><strong>Sunset at the Upper Lake:</strong> The lakeside promenade is at its best in the last hour of daylight.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Walk the old city bazaars around Chowk", "Watch sunset from the Upper Lake promenade", "Hire a car for the Bhimbetka/Sanchi day trips", "Visit Van Vihar for an easy in-city nature break", "Dress modestly near Taj-ul-Masajid"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Try to cram both Bhimbetka and Sanchi into one short day", "Rely on public transport alone for the day trips", "Skip the old city in favour of only the new town", "Forget modest clothing near active mosques", "Underestimate summer daytime heat"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bhopal", "Lakes", "Heritage", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BHOPAL_GEAR} destination="Bhopal" />
              <RelatedPostsGrid currentSlug="bhopal-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="bhopal-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
