// src/app/blog/vikramshila-travel-guide/page.tsx
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
  title: "Vikramshila Travel Guide: The Other Great Ancient Buddhist University",
  description:
    "The complete Vikramshila travel guide. The Pala-era Buddhist university ruins, the cruciform stupa, Atisha Dipankara's legacy, best time to visit, and a full itinerary.",
  keywords:
    "Vikramshila travel guide, Vikramshila Mahavihara, ancient Buddhist university Bihar, Atisha Dipankara, Pala dynasty Buddhism, best time to visit Vikramshila, how to reach Vikramshila, Bhagalpur",
  openGraph: {
    title: "Vikramshila Travel Guide: The Other Great Ancient Buddhist University",
    description: "A lesser-known counterpart to Nalanda, founded by a Pala king specifically to train Tantric Buddhist scholars — the complete guide to Vikramshila.",
    url: "https://club.kudozz.in/blog/vikramshila-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Riverside ruins landscape representative of Vikramshila, Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikramshila Travel Guide: The Other Great Ancient Buddhist University",
    description: "Nalanda's lesser-known Tantric Buddhist counterpart — the complete guide to Vikramshila.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/vikramshila-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Vikramshila Travel Guide: The Other Great Ancient Buddhist University",
          description: "The complete Vikramshila travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/vikramshila-travel-guide" },
          about: { "@type": "Place", name: "Vikramshila", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Vikramshila Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How is Vikramshila different from Nalanda?", a: "Both were major ancient Buddhist monastic universities, but Vikramshila had a particular historical focus on Vajrayana (Tantric) Buddhist studies, distinguishing it academically from Nalanda's broader curriculum. Vikramshila also receives far fewer visitors, making it a quieter, more contemplative site." },
  { q: "Who was Atisha Dipankara?", a: "A renowned scholar-monk associated with Vikramshila who played a major role in transmitting Buddhism to Tibet — a genuinely significant figure in the history of Tibetan Buddhism." },
  { q: "How do I reach Vikramshila?", a: "Bhagalpur is the practical nearby city, with its own railway station and closer road access. Patna is the nearest major airport, about 250km away — a long drive, so Bhagalpur is the sensible base." },
  { q: "What is the main structure to see at Vikramshila?", a: "A large cruciform-shaped central stupa, surrounded by numerous smaller monastic cells — a distinctive architectural layout genuinely notable among ancient Indian Buddhist sites." },
  { q: "Who founded Vikramshila?", a: "King Dharmapala of the Pala dynasty, around the 8th century CE, establishing it as one of two great Buddhist learning centres in the region alongside Nalanda." },
  { q: "Is Vikramshila worth visiting if I've already seen Nalanda?", a: "Yes, if you have a specific, deeper interest in Buddhist history — Vikramshila's Tantric focus and Atisha Dipankara connection offer a different angle than Nalanda, though it requires more travel effort given its remoteness." },
  { q: "What is the budget for a trip to Vikramshila?", a: "A budget traveler can manage on roughly ₹1,200-1,800 for a day trip based in Bhagalpur, excluding the cost of getting to Bhagalpur itself." },
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
  { id: "introduction", title: "Why Vikramshila?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vikramshila", level: 2 },
  { id: "top-attractions", title: "The Ruins & Their History", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VIKRAMSHILA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for exploring the ruins and riverside site",
    emoji: "🏛️",
    items: [
      { name: "Comfortable Walking Shoes", description: "For exploring the spread-out excavated stupa and monastic cell complex.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Site essential", tagColor: "bg-amber-100 text-amber-700", why: "The ruins cover a fair amount of ground on uneven excavated terrain." },
      { name: "Sun Hat", description: "The excavated site is largely open with little shade.", price: "₹399", rating: 4.3, reviews: "3.5k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Sun-protection essential", tagColor: "bg-sky-100 text-sky-700", why: "Limited shade across the open excavated ruins." },
      { name: "Reusable Water Bottle", description: "Facilities are limited at this remote site — carry sufficient water.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Remote-site essential", tagColor: "bg-forest-100 text-forest-700", why: "Few shops or facilities exist directly at the ruins." },
      { name: "Camera", description: "For the cruciform stupa layout and the monastic cell ruins.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Heritage-visit essential", tagColor: "bg-purple-100 text-purple-700", why: "The site's distinctive architectural layout is worth documenting." },
    ],
  },
];

export default function VikramshilaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Riverside ruins landscape representative of Vikramshila, Bihar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Vikramshila", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Vikramshila", "Buddhist Heritage", "Heritage", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Vikramshila Travel Guide: The Other Great Ancient Buddhist University
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A lesser-known counterpart to Nalanda, founded by a Pala king specifically to train Tantric Buddhist scholars.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Vikramshila, Bihar" },
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
                  <h2>Why Vikramshila?</h2>
                  <p>
                    <strong>Vikramshila Mahavihara</strong> was an ancient Buddhist monastic university founded by King Dharmapala of the Pala dynasty around the 8th century CE — established as one of two great Buddhist learning centres in the region alongside the far more famous <strong>Nalanda</strong>. Where Nalanda offered a broad curriculum, Vikramshila had a particular historical focus on Vajrayana (Tantric) Buddhist studies, giving it a distinct academic identity.
                  </p>
                  <p>
                    The site's most significant historical figure is <strong>Atisha Dipankara</strong>, a scholar-monk associated with Vikramshila who played a major role in transmitting Buddhism to Tibet — a genuinely important figure in the history of Tibetan Buddhism. Vikramshila sees far fewer visitors than Nalanda, making it a quieter, more contemplative stop for travelers with a deeper interest in Bihar's Buddhist heritage.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Vikramshila at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🏛️", label: "Founded", value: "~8th century CE, Pala dynasty" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Practical Base", value: "Bhagalpur" },
                        { icon: "🧘", label: "Known For", value: "Tantric Buddhist studies" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹1,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Vikramshila</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for exploring the open excavated site." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "The site's limited shade makes a summer visit genuinely uncomfortable." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Regional road access can be affected by heavy rain near the Ganges." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for exploring the open ruins.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vikramshila</h2>
                  <ul>
                    <li><strong>By Air:</strong> Patna is the nearest major airport, about 250km away — a long drive.</li>
                    <li><strong>By Train/Road:</strong> Bhagalpur is the practical nearby city, with its own railway station and closer road access — use it as your base.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in Bhagalpur rather than attempting a same-day trip from Patna — it's the far more practical logistics hub for this site.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>The Ruins & Their History</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Excavated ruins landscape around Vikramshila" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Cruciform central stupa:</strong> A large, distinctively-shaped stupa at the heart of the site — a notable architectural layout among ancient Indian Buddhist sites.</li>
                    <li><strong>Monastic cells:</strong> Numerous smaller excavated cells surrounding the central stupa, once housing resident monks and scholars.</li>
                    <li><strong>Atisha Dipankara's legacy:</strong> The site's connection to this influential scholar-monk who helped transmit Buddhism to Tibet.</li>
                    <li><strong>Riverside setting:</strong> The site's location near the Ganges in the Bhagalpur area adds to its historical and scenic character.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Vikramshila</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Bhagalpur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Mid-range hotels in Bhagalpur"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very few premium options — Bhagalpur is a practical, not a resort, base"] },
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
                  <h2>What to Eat Near Vikramshila</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish, widely available in Bhagalpur.</li>
                    <li><strong>Local river-region cuisine:</strong> Simple regional meals reflecting the Bhagalpur area's Ganges-side character.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Vikramshila Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Travel & Ruins", color: "bg-amber-700", activities: ["Travel from Bhagalpur", "Explore the cruciform stupa and monastic cells with a guide", "Learn about the Atisha Dipankara connection"] },
                      { day: "Afternoon", title: "Return", color: "bg-forest-600", activities: ["Return to Bhagalpur", "Optional: explore Bhagalpur town before departure"] },
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
                          ["Local transport (round trip from Bhagalpur)", "₹600", "₹1,400"],
                          ["Guide fee", "₹300", "₹600"],
                          ["Food", "₹250", "₹600"],
                          ["1-Day total", "₹1,150", "₹2,600"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes accommodation, based in Bhagalpur rather than at the ruins.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Vikramshila</h2>
                  <ul>
                    <li><strong>Base in Bhagalpur:</strong> The far more practical logistics hub for this remote site than attempting a Patna day trip.</li>
                    <li><strong>Hire a guide:</strong> Context on the Tantric Buddhist history and Atisha Dipankara connection significantly enriches the visit.</li>
                    <li><strong>Carry water and sun protection:</strong> The excavated site offers little shade.</li>
                    <li><strong>Set aside a full day:</strong> Given the distance from major hubs, this is a dedicated day trip rather than a quick stop.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Base yourself in Bhagalpur", "Hire a guide for historical context", "Carry water and sun protection", "Set aside a full day for the trip", "Learn about Atisha Dipankara's role in Tibetan Buddhism beforehand"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt a same-day trip from Patna", "Expect Nalanda-level crowds, facilities, or interpretation signage", "Visit without a guide and miss the historical context", "Skip sun protection on the exposed site", "Underestimate the travel distance from major Bihar hubs"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Vikramshila", "Buddhist Heritage", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VIKRAMSHILA_GEAR} destination="Vikramshila" />
              <RelatedPostsGrid currentSlug="vikramshila-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="vikramshila-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
