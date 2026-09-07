// src/app/blog/kolhapur-travel-guide/page.tsx
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
  title: "Kolhapur Travel Guide: Mahalaxmi Temple, Palace & Kolhapuri Food",
  description:
    "The complete Kolhapur travel guide. Mahalaxmi (Ambabai) Temple, New Palace, Panhala Fort, Rankala Lake, Kolhapuri chappals shopping, tambda-pandhra rassa, where to stay, and a 2-day itinerary for Maharashtra's Shakti Peeth city.",
  keywords:
    "Kolhapur travel guide, Mahalaxmi Temple Kolhapur, Ambabai Temple, New Palace Kolhapur, Panhala Fort, Rankala Lake, Kolhapuri chappal shopping, tambda rassa pandhra rassa, Kolhapur itinerary, Kolhapur best time to visit, Kolhapur Maharashtra",
  openGraph: {
    title: "Kolhapur Travel Guide: Mahalaxmi Temple, Palace & Kolhapuri Food",
    description:
      "A Shakti Peeth temple city, a New Palace built by an English architect, and the fieriest thali in Maharashtra — the complete guide to Kolhapur.",
    url: "https://club.kudozz.in/blog/kolhapur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      { url: "/images/destinations/udaipur/hero.jpg", width: 1200, height: 630, alt: "Ornate temple and palace architecture representative of Kolhapur, Maharashtra" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolhapur Travel Guide: Mahalaxmi Temple, Palace & Kolhapuri Food",
    description: "Temple, palace, fort, and the fieriest thali in Maharashtra — the complete guide to Kolhapur.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kolhapur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kolhapur Travel Guide: Mahalaxmi Temple, Palace & Kolhapuri Food",
          description: "The complete Kolhapur travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kolhapur-travel-guide" },
          about: { "@type": "Place", name: "Kolhapur", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kolhapur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Kolhapur?",
    a: "Two days covers the Mahalaxmi Temple, New Palace, Rankala Lake, and a day trip to Panhala Fort at a comfortable pace, with time left over to actually enjoy the food.",
  },
  {
    q: "What is Kolhapur famous for?",
    a: "The Mahalaxmi (Ambabai) Temple, one of India's Shakti Peethas; the New Palace built by British architect Major Charles Mant; hand-stitched Kolhapuri chappals with a GI tag; and its distinctively fiery non-vegetarian cuisine, especially tambda rassa and pandhra rassa.",
  },
  {
    q: "Is Kolhapuri food very spicy?",
    a: "Yes — genuinely, not just by reputation. Tambda rassa (red curry) in particular is one of the spicier regional cuisines in India. If you have a low spice tolerance, ask for it mild or start with pandhra rassa (white curry), which is milder.",
  },
  {
    q: "Where should I buy Kolhapuri chappals?",
    a: "From established shops in the main market areas around Mahadwar Road and near the temple rather than street stalls aimed purely at tourists — genuine hand-stitched leather chappals with the GI tag are a specific craft, and quality varies a lot.",
  },
  {
    q: "What is the best time to visit Kolhapur?",
    a: "October to February, when temperatures are pleasant for temple visits and the Panhala Fort day trip. Summers (March-May) get quite hot.",
  },
  {
    q: "How do I reach Kolhapur?",
    a: "Kolhapur has its own airport (KLH) with limited domestic flights, plus a well-connected railway station on the Pune-Miraj-Bangalore line. By road it's about 230 km / 4.5 hours from Pune and 380 km from Mumbai via NH48.",
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
  { id: "introduction", title: "Why Kolhapur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kolhapur", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "Kolhapuri Food & Shopping", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KOLHAPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple visits, fort walks, and fiery food",
    emoji: "🛕",
    items: [
      { name: "Modest Temple Wear", description: "Covered shoulders and knees are expected at Mahalaxmi Temple and other shrines around Kolhapur.", price: "₹599", rating: 4.4, reviews: "3.4k", image: "🧣", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Mahalaxmi Temple is an active, revered shrine, not a monument — dress expectations are taken seriously." },
      { name: "Comfortable Walking Shoes", description: "Panhala Fort involves a fair bit of walking over uneven stone paths — proper shoes make the climb easier.", price: "₹1,199", rating: 4.4, reviews: "4.1k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+outdoor"), tag: "Fort-trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Panhala's ramparts and bastions are best explored on foot over old stone — flip-flops aren't ideal here." },
      { name: "Basic Antacid / Digestive Aid", description: "A light-hearted but genuinely useful item if you're not used to Kolhapuri spice levels, particularly tambda rassa.", price: "₹99", rating: 4.3, reviews: "5.2k", image: "💊", affiliateUrl: amazonSearchUrl("antacid+travel+pack"), tag: "Food-trip essential", tagColor: "bg-red-100 text-red-700", why: "Kolhapuri cuisine's reputation for heat is well earned — worth having something on hand if you're not used to it." },
      { name: "Daypack", description: "Useful for carrying water, chappal purchases, and camera gear between the temple, palace, and market areas.", price: "₹899", rating: 4.4, reviews: "3.6k", image: "🎒", affiliateUrl: amazonSearchUrl("daypack+travel+lightweight"), tag: "City-day essential", tagColor: "bg-sky-100 text-sky-700", why: "A day of temple-palace-market walking is easier with a light bag than juggling shopping bags by hand." },
      { name: "Reusable Water Bottle", description: "Kolhapur can get warm outside the winter months — useful for both the city sightseeing and the Panhala Fort day trip.", price: "₹349", rating: 4.5, reviews: "6.0k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Travel essential", tagColor: "bg-forest-100 text-forest-700", why: "Fort visits and temple queues both involve standing/walking in the sun for stretches at a time." },
    ],
  },
];

export default function KolhapurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/hero.jpg" alt="Ornate temple and palace architecture representative of Kolhapur, Maharashtra" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" },
                { label: "Kolhapur", href: null },
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
              {["Kolhapur", "Heritage", "Temples", "Food", "Maharashtra"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kolhapur Travel Guide: Mahalaxmi Temple, Palace & Kolhapuri Food
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Shakti Peeth temple city, a New Palace built by an English
              architect, and the fieriest thali in Maharashtra — everything
              you need to plan a trip to Kolhapur.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kolhapur, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,200 words" },
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
                  <h2>Why Kolhapur?</h2>
                  <p>
                    In southern Maharashtra, close to the Karnataka border,{" "}
                    <strong>Kolhapur</strong> is a city built around devotion,
                    royal history, and food strong enough to have a regional
                    identity of its own. At its centre sits the{" "}
                    <strong>Mahalaxmi (Ambabai) Temple</strong>, one of the
                    Shakti Peethas of Hindu mythology and over a thousand
                    years old — the reason most pilgrims come, and the reason
                    the city has stayed a genuine living religious centre
                    rather than a heritage-only stop.
                  </p>
                  <p>
                    Around that core sits a former princely state's worth of
                    palaces, a hilltop fort with deep Maratha-era history, and
                    a food and craft culture — tambda-pandhra rassa curries
                    and hand-stitched Kolhapuri chappals — that has spread
                    Kolhapur's name across India far beyond its temple.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Kolhapur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🛕", label: "Key Site", value: "Mahalaxmi (Ambabai) Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kolhapur (KLH)" },
                        { icon: "👞", label: "Craft", value: "Kolhapuri Chappals (GI tag)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹6,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kolhapur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall", text: "Pleasant, dry weather — ideal for temple visits, walking the palace grounds, and the Panhala Fort day trip." },
                      { season: "Mar – May", emoji: "🔥", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Temperatures climb noticeably; still workable with an early start to sightseeing, but midday heat makes fort walks tougher." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-forest-50 border-forest-200", mood: "Monsoon — lush but wet", text: "Green surroundings, especially around Panhala Fort, but rain can disrupt outdoor plans." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February, for comfortable temperatures across both the temple/palace circuit and the Panhala Fort day trip.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kolhapur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kolhapur Airport (KLH) has limited domestic connectivity; Pune (~230 km) is a well-connected alternative.</li>
                    <li><strong>By Train:</strong> Kolhapur's railway station sits on the Pune-Miraj-Bangalore line with good connectivity from Mumbai and Pune.</li>
                    <li><strong>By Road:</strong> About 230 km / 4.5 hours from Pune and 380 km from Mumbai via NH48.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If flying, check Pune connectivity first — Kolhapur Airport's limited schedule often makes the Pune-plus-road-trip route faster overall.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/hero.jpg" alt="Palace architecture representative of Kolhapur's royal heritage" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Mahalaxmi (Ambabai) Temple:</strong> The city's spiritual centre, one of the Shakti Peethas of Hindu mythology, over a thousand years old and still very much a living, active shrine.</li>
                    <li><strong>New Palace:</strong> Built in the late 19th century in Indo-Saracenic style by British architect Major Charles Mant for the Chhatrapati royal family, now partly a museum housing royal artifacts, an armory, and hunting trophies.</li>
                    <li><strong>Old Rajwada / Bhavani Mandap:</strong> The older royal residence complex in the heart of the city, with its own temple and administrative history.</li>
                    <li><strong>Panhala Fort:</strong> About 20 km away, one of Maharashtra's largest hill forts, closely linked to Chhatrapati Shivaji Maharaj's history — a good half-day trip.</li>
                    <li><strong>Rankala Lake:</strong> A pleasant lakeside promenade in the city, good for an evening walk or boat ride.</li>
                    <li><strong>Jyotiba Temple:</strong> About 17 km away, another significant regional pilgrimage site, often combined with a Panhala visit.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹1,000–₹2,200/night", picks: ["Guesthouses near the temple", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,500–₹5,500/night", picks: ["Business hotels in the city centre", "Hotels near Rankala Lake"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,500–₹15,000+/night", picks: ["Heritage-style luxury hotels", "Premium resorts on the city outskirts"] },
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
                  <h2>Kolhapuri Food & Shopping</h2>
                  <ul>
                    <li><strong>Tambda rassa & pandhra rassa:</strong> Kolhapur's signature red and white mutton curries — the red version is genuinely one of the spiciest regional dishes in India; the white is milder and coconut-based.</li>
                    <li><strong>Kolhapuri misal:</strong> A spicy sprouted-lentil curry topped with farsan, a popular breakfast dish across the city.</li>
                    <li><strong>Kolhapuri chappals:</strong> Hand-stitched leather sandals with a GI (Geographical Indication) tag — buy from established shops around Mahadwar Road or the market near the temple rather than tourist-facing stalls.</li>
                    <li><strong>Where to eat:</strong> Small local eateries around the temple and market area tend to serve the most authentic tambda-pandhra rassa — ask locals for their current favourite, as reputations shift.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kolhapur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Temple, Palace & City Centre", color: "bg-amber-700", activities: ["Morning darshan at Mahalaxmi Temple", "Explore New Palace and its museum", "Afternoon at Bhavani Mandap and the old Rajwada", "Evening walk around Rankala Lake, dinner at a local rassa restaurant"] },
                      { day: "Day 2", title: "Panhala Fort & Shopping", color: "bg-forest-600", activities: ["Day trip to Panhala Fort (and Jyotiba Temple if time allows)", "Return to the city for lunch", "Afternoon shopping for Kolhapuri chappals", "Evening departure or relaxed stroll through the market"] },
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
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Panhala Fort trip", "₹500", "₹1,200", "₹2,500"],
                          ["Daily total", "₹2,200", "₹6,500", "₹17,000"],
                          ["2-Day trip total", "₹4,400", "₹13,000", "₹34,000"],
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
                    <li><strong>Dress modestly at temples:</strong> Covered shoulders and knees expected at Mahalaxmi Temple and Jyotiba Temple.</li>
                    <li><strong>Pace your spice intake:</strong> Start with pandhra rassa before committing to a full tambda rassa order if you're unsure of your tolerance.</li>
                    <li><strong>Buy chappals from established shops:</strong> Genuine hand-stitched Kolhapuri chappals with the GI tag vary a lot in quality — reputable shops are worth the extra effort.</li>
                    <li><strong>Combine Panhala with Jyotiba:</strong> Both sit in roughly the same direction, making a single efficient day trip.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Mahalaxmi Temple early morning for a calmer darshan", "Try both tambda and pandhra rassa", "Buy Kolhapuri chappals from a reputed local shop", "Take the half-day trip to Panhala Fort", "Walk the Rankala Lake promenade at sunset"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Order a full tambda rassa portion without knowing your spice tolerance", "Wear beachwear-style clothing into temple areas", "Buy chappals from the first roadside stall you see", "Rush the temple visit — it rewards a bit of unhurried time", "Skip Panhala Fort if you have a second day free"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kolhapur", "Heritage", "Maharashtra", "Temples", "Food", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KOLHAPUR_GEAR} destination="Kolhapur" />
              <RelatedPostsGrid currentSlug="kolhapur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kolhapur-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
