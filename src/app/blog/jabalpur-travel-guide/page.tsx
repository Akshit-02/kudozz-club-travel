// src/app/blog/jabalpur-travel-guide/page.tsx
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
  title: "Jabalpur Travel Guide: Marble Rocks, Dhuandhar Falls & Bhedaghat",
  description:
    "The complete Jabalpur travel guide. Bhedaghat Marble Rocks, Dhuandhar Falls, moonlight boating, Chausath Yogini Temple, where to stay, what to eat, and a 2-day itinerary through this Narmada river town.",
  keywords:
    "Jabalpur travel guide, Bhedaghat Marble Rocks, Dhuandhar Falls, moonlight boating Jabalpur, Chausath Yogini Temple, Jabalpur itinerary, best time to visit Jabalpur, how to reach Jabalpur, Jabalpur Kanha, Jabalpur Bandhavgarh, Jabalpur Madhya Pradesh",
  openGraph: {
    title: "Jabalpur Travel Guide: Marble Rocks, Dhuandhar Falls & Bhedaghat",
    description:
      "Moonlit boat rides through white marble gorges and a waterfall known as the 'smoke cascade' — the complete guide to Jabalpur.",
    url: "https://club.kudozz.in/blog/jabalpur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/andaman/hero.jpg", width: 1200, height: 630, alt: "River gorge landscape representative of Bhedaghat, Jabalpur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabalpur Travel Guide: Marble Rocks, Dhuandhar Falls & Bhedaghat",
    description: "Bhedaghat's marble gorges and moonlight boating — the complete guide to Jabalpur.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/jabalpur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Jabalpur Travel Guide: Marble Rocks, Dhuandhar Falls & Bhedaghat",
          description: "The complete Jabalpur travel guide.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/jabalpur-travel-guide" },
          about: { "@type": "Place", name: "Jabalpur", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Jabalpur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Jabalpur?", a: "Two days is enough — one for the Bhedaghat Marble Rocks and Dhuandhar Falls, and a second for the Chausath Yogini Temple and Madan Mahal Fort. Many travelers also use Jabalpur as a base before heading to Kanha or Bandhavgarh." },
  { q: "What is the best time to visit Jabalpur?", a: "October to March offers the most comfortable weather. If you specifically want the moonlight boating experience at Bhedaghat, plan around a full-moon date year-round, checking the lunar calendar in advance." },
  { q: "How do I reach Jabalpur?", a: "Jabalpur Airport (JLR) has domestic flights, Jabalpur is a major railway junction with wide connectivity, and it's well connected by road via NH34 and NH45." },
  { q: "Is Bhedaghat worth visiting?", a: "Yes — the boat ride through the white marble gorge of the Narmada River is one of Madhya Pradesh's most distinctive experiences, especially the full-moon 'moonlight boating' when the cliffs glow silver." },
  { q: "Can I visit Kanha or Bandhavgarh from Jabalpur?", a: "Yes — Jabalpur is a common gateway to both parks, roughly 4-5 hours by road to each, making it a practical base for combining marble rocks sightseeing with a tiger safari." },
  { q: "What is Dhuandhar Falls?", a: "It's the point where the Narmada River is forced through a narrow channel in the marble rocks, creating a dramatic mist that gives the falls its name — 'smoke cascade'. A ropeway offers aerial views of the falls." },
  { q: "What is the budget for a trip to Jabalpur?", a: "A budget traveller can manage on roughly ₹1,300 a day, a mid-range trip runs closer to ₹3,500 a day, and upscale stays can run ₹8,500+ a day, excluding transport to the city." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Jabalpur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jabalpur", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const JABALPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for boat rides, the ropeway, and temple visits",
    emoji: "🚤",
    items: [
      { name: "Light Jacket / Windbreaker", description: "Evening and moonlight boat rides through the marble gorge get noticeably cool, especially in winter months.", price: "₹1,299", rating: 4.4, reviews: "4.6k", image: "🧥", affiliateUrl: amazonSearchUrl("light+jacket+windbreaker+travel"), tag: "Boat-ride essential", tagColor: "bg-sky-100 text-sky-700", why: "The Narmada gorge stays breezy after dark, and moonlight boat rides run well into the evening." },
      { name: "Waterproof Phone Pouch", description: "Handy for the Bhedaghat boat rides and the misty viewing points near Dhuandhar Falls.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Boat-ride essential", tagColor: "bg-purple-100 text-purple-700", why: "Spray from Dhuandhar Falls reaches the nearby viewpoints, and boats can splash a little in the gorge." },
      { name: "Comfortable Walking Shoes", description: "Chausath Yogini Temple sits atop a hill reached by a flight of stairs, and Madan Mahal Fort involves some uneven rocky terrain.", price: "₹1,699", rating: 4.5, reviews: "6.1k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-red-100 text-red-700", why: "Both hilltop sites in Jabalpur require a reasonable amount of stair-climbing on uneven surfaces." },
      { name: "Binoculars", description: "Useful for the Dhuandhar Falls ropeway and for taking in the marble cliffs from the boat at a distance.", price: "₹1,299", rating: 4.2, reviews: "2.4k", image: "🔭", affiliateUrl: amazonSearchUrl("compact+binoculars+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "The full scale of the marble gorge is best appreciated from a bit of distance, which binoculars help with." },
    ],
  },
];

export default function JabalpurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/andaman/hero.jpg" alt="River gorge landscape representative of Bhedaghat, Jabalpur" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" }, { label: "Jabalpur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Jabalpur", "Madhya Pradesh", "Marble Rocks", "Bhedaghat", "Destination Guide"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Jabalpur Travel Guide: Marble Rocks, Dhuandhar Falls & Bhedaghat
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Moonlit boat rides through white marble gorges and a waterfall known as the "smoke cascade" — the complete guide to Jabalpur.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Jabalpur, Madhya Pradesh" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" }].map((m) => (
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
                  <h2>Why Jabalpur?</h2>
                  <p>
                    <strong>Jabalpur</strong> sits on the banks of the Narmada
                    River at the point where the water has carved a dramatic
                    gorge through pale limestone cliffs — popularly called the
                    Marble Rocks of Bhedaghat. A slow boat ride through the
                    gorge, especially on a full-moon night when the cliffs
                    take on a silvery glow, is one of the more unusual and
                    memorable experiences in Central India.
                  </p>
                  <p>
                    Beyond Bhedaghat, Jabalpur works well as a practical base
                    — it sits within striking distance of both Kanha and
                    Bandhavgarh National Parks, making it a natural stop for
                    travelers combining a river-and-heritage day with a tiger
                    safari further into Madhya Pradesh's forests.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚤</span> Jabalpur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Madhya Pradesh, India" }, { icon: "🏞️", label: "Key Site", value: "Bhedaghat Marble Rocks" }, { icon: "🌡️", label: "Best Time", value: "Oct – Mar" }, { icon: "✈️", label: "Airport", value: "Jabalpur (JLR)" }, { icon: "🐅", label: "Nearby Parks", value: "Kanha, Bandhavgarh" }, { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹8,500" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Jabalpur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for boat rides and sightseeing, with clear skies that make full-moon boating nights especially good." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Daytime heat is intense, though early-morning or evening boat rides remain pleasant." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — dramatic falls, higher river", text: "Dhuandhar Falls is at its most powerful, but boating through the gorge may be suspended when the Narmada's water level rises too high — check locally before planning a monsoon visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> A clear full-moon night between October and February — check the lunar calendar and plan your Bhedaghat visit around it specifically for the moonlight boating experience.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Jabalpur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jabalpur Airport (JLR) has domestic flights connecting to major Indian cities.</li>
                    <li><strong>By Train:</strong> Jabalpur is a major railway junction with wide connectivity across Central India and beyond.</li>
                    <li><strong>By Road:</strong> Well connected via NH34 and NH45; Bhedaghat itself is about a 30-minute drive from the city center.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If your goal is specifically the moonlight boat ride, check the lunar calendar before booking travel — boating operates around the full moon and the exact schedule can vary, so confirm current timings locally.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions in Jabalpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/andaman/hero.jpg" alt="Marble gorge and river landscape near Jabalpur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bhedaghat Marble Rocks:</strong> Dramatic pale limestone cliffs rising up to around 100 feet on either side of the Narmada, best seen from a boat gliding through the narrow gorge.</li>
                    <li><strong>Dhuandhar Falls:</strong> Where the Narmada is forced through a narrow channel in the rocks, throwing up mist that resembles smoke — hence the name "smoke cascade." A ropeway offers aerial views.</li>
                    <li><strong>Moonlight Boating:</strong> A signature Bhedaghat experience — boat rides through the gorge under a full moon, when the marble cliffs take on a silvery glow.</li>
                    <li><strong>Chausath Yogini Temple:</strong> A 10th-century circular hilltop temple originally housing shrines to 64 yoginis, with sweeping views over the city.</li>
                    <li><strong>Madan Mahal Fort:</strong> A hilltop fort built by the Gond dynasty, offering a quieter historical stop away from the river attractions.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,800/night", picks: ["Hotels near Jabalpur railway station", "Budget lodges, city center"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,500/night", picks: ["Business hotels, city center", "Riverside guesthouses near Bhedaghat"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Premium business hotels", "Resort-style stays near Bhedaghat"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Jabalpur</h2>
                  <ul>
                    <li><strong>Local thalis:</strong> Vegetarian Madhya Pradesh-style thalis are widely available and a reliable choice across the city.</li>
                    <li><strong>Poha:</strong> A popular breakfast staple across Madhya Pradesh, found at street stalls throughout Jabalpur.</li>
                    <li><strong>Street food near Bhedaghat:</strong> Small stalls near the boating area serve snacks and chai — a good stop before or after the boat ride.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Jabalpur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Bhedaghat & Marble Rocks", color: "bg-amber-700", activities: ["Morning: Boat ride through the Marble Rocks gorge", "Afternoon: Dhuandhar Falls and ropeway", "Evening: Moonlight boating (if full moon)"] },
                      { day: "Day 2", title: "City Sights", color: "bg-forest-600", activities: ["Morning: Chausath Yogini Temple", "Afternoon: Madan Mahal Fort", "Evening: Depart or onward to Kanha/Bandhavgarh"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>)}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>)}</tr></thead>
                      <tbody>
                        {[["Accommodation/night", "₹800", "₹3,200", "₹11,000"], ["Food/day", "₹350", "₹800", "₹1,800"], ["Local transport per day", "₹200", "₹600", "₹1,500"], ["Boat rides / activities", "₹250", "₹500", "₹1,000"], ["Daily total", "₹1,600", "₹5,100", "₹15,300"], ["2-Day trip total", "₹3,200", "₹10,200", "₹30,600"]].map(([exp, b, m, l], i) => (
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
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Time your trip around a full moon:</strong> If moonlight boating is a priority, check the lunar calendar and current operating schedule before you travel.</li>
                    <li><strong>Go early for calmer boat rides:</strong> Morning boating is quieter and less crowded than midday.</li>
                    <li><strong>Check monsoon boating status locally:</strong> High water levels in the rainy season can suspend gorge boating for safety.</li>
                    <li><strong>Use Jabalpur as a safari base:</strong> It's a practical, well-connected stop before heading to Kanha or Bandhavgarh.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check the lunar calendar for moonlight boating dates", "Take the ropeway for aerial views of Dhuandhar Falls", "Visit Chausath Yogini Temple for panoramic city views", "Go early for a calmer, quieter boat ride", "Use Jabalpur as a gateway to Kanha or Bandhavgarh"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume moonlight boating runs every night — it's tied to the lunar cycle", "Skip checking monsoon boating status before a rainy-season visit", "Rush the boat ride — it rewards a slow, unhurried pace", "Forget a light jacket for evening boating", "Overlook Chausath Yogini Temple as just a minor stop"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Jabalpur", "Madhya Pradesh", "Bhedaghat", "Marble Rocks", "Dhuandhar Falls", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={JABALPUR_GEAR} destination="Jabalpur" />
              <RelatedPostsGrid currentSlug="jabalpur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="jabalpur-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
