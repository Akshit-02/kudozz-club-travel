// src/app/blog/pobitora-travel-guide/page.tsx
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
  title: "Pobitora Wildlife Sanctuary Travel Guide: Highest Rhino Density on Earth",
  description:
    "The complete Pobitora Wildlife Sanctuary travel guide. Jeep and elephant safaris, one-horned rhinos, day-trip logistics from Guwahati, best time to visit, and a full itinerary.",
  keywords:
    "Pobitora Wildlife Sanctuary travel guide, Pobitora rhino safari, one horned rhino Assam, best time to visit Pobitora, how to reach Pobitora, Guwahati day trip safari",
  openGraph: {
    title: "Pobitora Wildlife Sanctuary Travel Guide: Highest Rhino Density on Earth",
    description: "A small sanctuary packing the highest density of one-horned rhinos found anywhere in the world, close enough to Guwahati for a day safari — the complete guide to Pobitora.",
    url: "https://club.kudozz.in/blog/pobitora-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/hero.jpg", width: 1200, height: 630, alt: "Grassland and marsh landscape representative of Pobitora Wildlife Sanctuary, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Pobitora Wildlife Sanctuary Travel Guide: Highest Rhino Density on Earth", description: "The world's highest one-horned rhino density, a short drive from Guwahati — the complete guide to Pobitora.", images: ["/images/destinations/kerala/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/pobitora-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Pobitora Wildlife Sanctuary Travel Guide: Highest Rhino Density on Earth",
      description: "The complete Pobitora Wildlife Sanctuary travel guide.",
      image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pobitora-travel-guide" },
      about: { "@type": "Place", name: "Pobitora Wildlife Sanctuary", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Pobitora Wildlife Sanctuary Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need for Pobitora?", a: "A single half-day or full-day safari is enough — Pobitora is small and compact, and most travelers visit as a day trip from Guwahati rather than staying overnight." },
  { q: "What is the best time to visit Pobitora?", a: "November to April is safari season. The sanctuary is typically closed during monsoon, roughly May to October — verify current exact dates before planning your trip." },
  { q: "How do I reach Pobitora?", a: "It's about 45km from Guwahati, roughly a 1 to 1.5 hour drive, making it the most convenient rhino-safari option for Guwahati-based travelers without time for a full Kaziranga trip." },
  { q: "Is Pobitora better than Kaziranga for rhino sightings?", a: "Pobitora is widely cited as having the highest density of one-horned rhinos of any protected area in the world, despite being far smaller than Kaziranga — meaning sighting odds per visit can be excellent, though Kaziranga offers a broader wildlife and landscape experience overall." },
  { q: "Can I do an elephant safari at Pobitora?", a: "Yes — both jeep and elephant-back safaris are typically available, offering different vantage points on the marshy grassland terrain." },
  { q: "Is Pobitora suitable for a day trip from Guwahati?", a: "Yes — its short distance and compact size make it genuinely well-suited to a half-day or full-day trip without needing an overnight stay." },
  { q: "What is the budget for a trip to Pobitora?", a: "A day safari including permit and jeep hire typically runs roughly ₹1,500–₹3,000 per group, on top of standard Guwahati-based travel costs." },
];

function FAQSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    })}} />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Pobitora?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pobitora", level: 2 },
  { id: "top-attractions", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const POBITORA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a quick rhino safari from Guwahati", emoji: "🦏",
  items: [
    { name: "Neutral/Khaki Clothing", description: "Standard safari practice — neutral tones are less disruptive to wildlife on the open grassland.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Bright colors stand out sharply against Pobitora's open marsh-grassland terrain." },
    { name: "Binoculars", description: "For a closer look at rhinos and birdlife across the sanctuary's marshy grassland (beel) terrain.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Safari essential", tagColor: "bg-forest-100 text-forest-700", why: "Even with high rhino density, a closer look rewards proper optics." },
    { name: "Telephoto Camera / Lens", description: "For photographing rhinos and birdlife at a safe, respectful distance.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "A longer lens gets you usable rhino shots without disturbing the animals." },
    { name: "Sun Hat & Sunscreen", description: "Jeep and elephant safaris both mean extended sun exposure across open grassland.", price: "₹599", rating: 4.4, reviews: "5.0k", image: "🧴", affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"), tag: "Safari essential", tagColor: "bg-sky-100 text-sky-700", why: "There's minimal shade across most of the sanctuary's open terrain." },
  ],
}];

export default function PobitoraGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/hero.jpg" alt="Grassland and marsh landscape representative of Pobitora Wildlife Sanctuary, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Pobitora", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pobitora Wildlife Sanctuary", "Rhino Safari", "Adventure", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Pobitora Wildlife Sanctuary Travel Guide: Highest Rhino Density on Earth
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A small sanctuary packing the highest density of one-horned rhinos found anywhere in the world, close enough to Guwahati for a day safari.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Pobitora, Assam" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
              ].map((m) => (
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
                  <h2>Why Pobitora?</h2>
                  <p>
                    <strong>Pobitora Wildlife Sanctuary</strong> is small, but it packs a genuinely remarkable statistic: it's widely cited as having the highest density of one-horned rhinoceros of any protected area in the world — a notable distinction even compared to the much larger Kaziranga. Its compact size and short distance from Guwahati make it the practical, convenient choice for travelers who want a rhino safari without the time commitment of a full Kaziranga trip.
                  </p>
                  <p>
                    The sanctuary's marshy grassland (beel) ecosystem is similar in character to Kaziranga's, just concentrated into a much smaller area.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🦏</span> Pobitora at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🦏", label: "Known For", value: "Highest rhino density on Earth" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        { icon: "📏", label: "Distance", value: "~45km from Guwahati" },
                        { icon: "🚗", label: "Safari Types", value: "Jeep & elephant-back" },
                        { icon: "💰", label: "Budget/Trip", value: "₹1,500 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Pobitora</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and the most comfortable window for safaris with excellent visibility." },
                      { season: "Mar – Apr", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Also good", text: "Warmer but still within the open safari season." },
                      { season: "May – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — closed", text: "The sanctuary is typically closed for monsoon safety and regeneration — verify current exact dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most reliable window for both comfort and wildlife visibility.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pobitora</h2>
                  <ul>
                    <li><strong>From Guwahati:</strong> Roughly 45km, about a 1 to 1.5 hour drive — the standard approach for virtually all visitors.</li>
                    <li><strong>By Air/Rail:</strong> Guwahati is the nearest airport and railway hub.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book your safari slot in advance, especially on weekends, since Pobitora's proximity to Guwahati makes it a popular quick-trip option.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/hero.jpg" alt="Marsh grassland scenery at Pobitora Wildlife Sanctuary" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>One-horned rhinos:</strong> The sanctuary's headline draw, with genuinely excellent sighting odds given the high density.</li>
                    <li><strong>Jeep safaris:</strong> The standard way to explore the sanctuary's marshy grassland terrain.</li>
                    <li><strong>Elephant-back safaris:</strong> A different vantage point, often available alongside jeep options.</li>
                    <li><strong>Other wildlife:</strong> Wild boar, various deer species, and good birdlife round out the sanctuary's ecosystem.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Pobitora</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "Guwahati day trip", picks: ["Most visitors stay in Guwahati and day-trip out", "Basic guesthouses near the sanctuary"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Guwahati mid-range hotels as a base"] },
                      { tier: "Luxury", icon: "✨", range: "Guwahati-based", picks: ["Premium Guwahati hotels for those preferring city comforts"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most travelers base themselves in Guwahati and treat Pobitora as a half-day or full-day trip rather than an overnight destination.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Pobitora</h2>
                  <ul>
                    <li><strong>Guwahati dining:</strong> Since most visitors base in Guwahati, the city's full range of Assamese and North Indian restaurants applies.</li>
                    <li><strong>Simple local eateries:</strong> A handful of basic options near the sanctuary for a quick meal.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Pobitora Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Drive & Safari", color: "bg-amber-700", activities: ["Early departure from Guwahati", "Morning jeep or elephant safari", "Rhino and birdlife spotting"] },
                      { day: "Afternoon", title: "Return", color: "bg-forest-600", activities: ["Wrap up safari by late morning", "Drive back to Guwahati", "Afternoon free for other Guwahati sightseeing"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Typical Range"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Round-trip transport from Guwahati", "₹1,500 – ₹3,000"],
                          ["Safari permit + jeep hire", "₹1,500 – ₹2,500"],
                          ["Elephant safari (optional add-on)", "₹800 – ₹1,500"],
                          ["Total day-trip cost (per group)", "₹3,000 – ₹6,000"],
                        ].map(([exp, r], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{r}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Costs typically split across a group sharing a jeep. Excludes Guwahati accommodation.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Pobitora</h2>
                  <ul>
                    <li><strong>Book ahead on weekends:</strong> Its convenience from Guwahati makes Pobitora a popular quick trip.</li>
                    <li><strong>Try both safari types if time allows:</strong> Jeep and elephant-back safaris offer different vantage points.</li>
                    <li><strong>Go early morning:</strong> Wildlife activity is typically highest shortly after sunrise.</li>
                    <li><strong>Verify current monsoon closure dates:</strong> The sanctuary shuts seasonally.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book your safari slot ahead, especially on weekends", "Go early morning for the best wildlife activity", "Try both jeep and elephant safaris if time allows", "Bring binoculars and a telephoto lens", "Verify current monsoon closure dates before planning"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up without a booked safari slot", "Wear bright colors on safari", "Expect Kaziranga's scale of landscape and wildlife variety", "Visit during monsoon closure without checking status", "Skip sun protection given the open terrain"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Pobitora Wildlife Sanctuary", "Rhino Safari", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={POBITORA_GEAR} destination="Pobitora" />
              <RelatedPostsGrid currentSlug="pobitora-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="pobitora-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
