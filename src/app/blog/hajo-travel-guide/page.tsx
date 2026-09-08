// src/app/blog/hajo-travel-guide/page.tsx
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
  title: "Hajo Travel Guide: A Temple Town Sacred to Four Religions",
  description:
    "The complete Hajo travel guide. Hayagriva Madhava Temple, Poa Mecca, the town's bell-metal craft tradition, how to combine with Guwahati and Kamakhya, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Hajo travel guide, Hayagriva Madhava Temple, Poa Mecca, Hajo bell metal, best time to visit Hajo, how to reach Hajo, Guwahati day trip, multi faith pilgrimage Assam",
  openGraph: {
    title: "Hajo Travel Guide: A Temple Town Sacred to Four Religions",
    description: "A small town where Hindus, Buddhists, and Muslims each hold a shrine to be sacred, all within walking distance of each other — the complete guide to Hajo.",
    url: "https://club.kudozz.in/blog/hajo-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Hilltop shrine and temple complex representative of Hajo, Assam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajo Travel Guide: A Temple Town Sacred to Four Religions",
    description: "Hindus, Buddhists, and Muslims each hold a shrine sacred here, all within walking distance — the complete guide to Hajo.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/hajo-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Hajo Travel Guide: A Temple Town Sacred to Four Religions",
          description: "The complete Hajo travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/hajo-travel-guide" },
          about: { "@type": "Place", name: "Hajo", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Hajo Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Why is Hajo considered sacred to multiple religions?", a: "Hayagriva Madhava Temple is a major Hindu Vishnu temple that some Buddhist traditions also regard as associated with the Buddha's parinirvana, making it a point of shared reverence. Poa Mecca, a mosque on a nearby hill, holds a distinct place in local Muslim devotional tradition. The two sites sitting so close together gives Hajo a genuinely unusual multi-faith character." },
  { q: "What is Poa Mecca?", a: "A mosque on a hill near Hajo, traditionally believed by local Muslim tradition to hold a blessing equivalent to a quarter ('poa') of a pilgrimage to Mecca. It's a matter of local devotional tradition, not an official religious equivalence." },
  { q: "How far is Hajo from Guwahati?", a: "About 30km, a straightforward day-trip drive." },
  { q: "How many days do I need for Hajo?", a: "Half a day to a full day covers the main temple and mosque sites comfortably. Most travelers combine it with a Guwahati-based itinerary alongside Kamakhya Temple and/or Pobitora Wildlife Sanctuary." },
  { q: "What is Hajo known for besides its temples?", a: "A traditional bell-metal (kanh) craft industry — a historic local metalworking tradition worth a look for craft-interested travelers." },
  { q: "What is the best time to visit Hajo?", a: "October to March offers the most comfortable weather for visiting the hilltop and riverside sites." },
  { q: "Is there a dress code at Hajo's religious sites?", a: "Modest dress is expected at all the town's religious sites, regardless of which one you're visiting." },
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
  { id: "introduction", title: "Why Hajo?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hajo", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const HAJO_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a multi-site pilgrimage day trip",
    emoji: "🛕",
    items: [
      { name: "Modest Cotton Clothing", description: "Essential for visiting all of Hajo's religious sites respectfully, regardless of tradition.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Site essential", tagColor: "bg-purple-100 text-purple-700", why: "Modest dress is expected at every one of Hajo's sacred sites, Hindu, Buddhist-associated, or Muslim." },
      { name: "Comfortable Walking Shoes", description: "For the hilltop approach to Hayagriva Madhava Temple and Poa Mecca.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Both major temple/mosque sites involve some uphill walking." },
      { name: "Easy-to-Remove Sandals", description: "Most temple and mosque entries require removing footwear.", price: "₹399", rating: 4.3, reviews: "4.5k", image: "👡", affiliateUrl: amazonSearchUrl("slip+on+sandals+travel"), tag: "Temple essential", tagColor: "bg-sky-100 text-sky-700", why: "Slip-on footwear makes the multiple shoe removals across sites far more convenient." },
      { name: "Reusable Water Bottle", description: "For a day of walking between hilltop sites in Assam's warm, humid climate.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities can be limited around the smaller shrine complexes." },
    ],
  },
];

export default function HajoGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Hilltop shrine and temple complex representative of Hajo, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Hajo", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Hajo", "Multi-Faith Pilgrimage", "Heritage", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Hajo Travel Guide: A Temple Town Sacred to Four Religions
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A small town where Hindus, Buddhists, and Muslims each hold a shrine to be sacred, all within walking distance of each other.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Hajo, Assam" },
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
                  <h2>Why Hajo?</h2>
                  <p>
                    <strong>Hajo</strong> is a genuinely distinctive multi-faith pilgrimage town, where sites sacred to different religious traditions sit within a short distance of one another rather than being scattered across the state. <strong>Hayagriva Madhava Temple</strong> is a major Hindu Vishnu temple, and it's also regarded by some Buddhist traditions as a site associated with the Buddha's parinirvana — a genuinely documented cross-religious association, not an overstated claim.
                  </p>
                  <p>
                    A short distance away sits <strong>Poa Mecca</strong>, a mosque on a nearby hill that, per local Muslim tradition, is believed to hold a blessing equivalent to a quarter ("poa") of a pilgrimage to Mecca. The result is a town whose sacred geography itself reflects a rare, lived example of religious coexistence.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Hajo at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🛕", label: "Key Site", value: "Hayagriva Madhava Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "From Guwahati", value: "~30km" },
                        { icon: "🕌", label: "Also Notable For", value: "Poa Mecca" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Hajo</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather for walking between the hilltop temple and mosque sites." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Warmer conditions make the uphill walks to the sites less comfortable." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and humidity can make the hilltop approaches slippery and less pleasant." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — cool, dry conditions for a comfortable day of hilltop temple and mosque visits.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Hajo</h2>
                  <ul>
                    <li><strong>By Road:</strong> Roughly 30km from Guwahati, a straightforward day-trip drive on well-connected roads.</li>
                    <li><strong>No direct airport/rail:</strong> Hajo doesn't have its own airport or major railway station — Guwahati is the practical base for all visitors.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Hajo with Kamakhya Temple and/or Pobitora Wildlife Sanctuary for a full day out from Guwahati rather than a dedicated single-site trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See in Hajo</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Hilltop religious complex near Hajo" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Hayagriva Madhava Temple:</strong> A major Hindu Vishnu temple also regarded by some Buddhist traditions as linked to the Buddha's parinirvana.</li>
                    <li><strong>Poa Mecca:</strong> A hilltop mosque holding, per local Muslim tradition, a blessing equivalent to a quarter of a pilgrimage to Mecca.</li>
                    <li><strong>Hajo's bell-metal craft workshops:</strong> A historic local metalworking tradition, worth a stop for craft-interested travelers.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Hajo</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "Base in Guwahati: ₹800–₹1,800/night", picks: ["Guwahati budget guesthouses", "Simple hotels near Guwahati's transit hubs"] },
                      { tier: "Mid-Range", icon: "🏨", range: "Base in Guwahati: ₹2,000–₹4,500/night", picks: ["Guwahati mid-range hotels", "River-view stays along the Brahmaputra"] },
                      { tier: "Luxury", icon: "✨", range: "Base in Guwahati: ₹6,000+/night", picks: ["Premium Guwahati hotels — luxury options directly in Hajo are essentially non-existent"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Hajo is best visited as a day trip from Guwahati — there's essentially no reason to look for accommodation in the town itself.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Hajo</h2>
                  <ul>
                    <li><strong>Assamese thalis:</strong> Simple rice, dal, and fish-based meals at local eateries en route.</li>
                    <li><strong>Local snacks near the temple complexes:</strong> Small stalls sell simple prasad-style snacks and tea near the main sites.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Hajo Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Hayagriva Madhava Temple", color: "bg-amber-700", activities: ["Depart Guwahati early", "Visit Hayagriva Madhava Temple", "Learn its shared Hindu-Buddhist significance"] },
                      { day: "Midday", title: "Poa Mecca & Crafts", color: "bg-forest-600", activities: ["Visit Poa Mecca", "Browse local bell-metal craft workshops", "Return to Guwahati or continue to Kamakhya/Pobitora"] },
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
                          ["Accommodation/night (Guwahati)", "₹800", "₹2,500"],
                          ["Food/day", "₹300", "₹700"],
                          ["Round-trip transport from Guwahati", "₹700", "₹1,500"],
                          ["Daily total (Hajo day-trip day)", "₹1,000", "₹2,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Costs are shown as a Guwahati-based day trip.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Hajo</h2>
                  <ul>
                    <li><strong>Dress modestly at every site:</strong> This applies equally at the temple and the mosque.</li>
                    <li><strong>Approach each tradition with equal respect:</strong> Hajo's whole character rests on genuine, lived religious coexistence.</li>
                    <li><strong>Combine with Kamakhya and/or Pobitora:</strong> Makes for a fuller Guwahati-area day.</li>
                    <li><strong>Base in Guwahati:</strong> There's no real reason to look for accommodation in Hajo itself.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly at every religious site", "Visit both Hayagriva Madhava Temple and Poa Mecca", "Combine with Kamakhya Temple or Pobitora for a fuller day", "Look for genuine bell-metal craft workshops", "Approach every tradition here with equal respect"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit only one of the two major sites and skip the other", "Dress immodestly at either site", "Expect standalone accommodation options in Hajo itself", "Rush the visit — the town's character is best appreciated slowly", "Treat the sites as a photo-op rather than living places of worship"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Hajo", "Multi-Faith Pilgrimage", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={HAJO_GEAR} destination="Hajo" />
              <RelatedPostsGrid currentSlug="hajo-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="hajo-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
