// src/app/blog/kanger-valley-travel-guide/page.tsx
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
  title: "Kanger Valley National Park Travel Guide: Caves, Falls & Wildlife",
  description:
    "The complete Kanger Valley National Park travel guide. Kutumsar Cave, Kailash Caves, Tirathgarh Falls, wild Asiatic buffalo habitat, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Kanger Valley National Park travel guide, Kutumsar Cave, Kailash Caves, wild Asiatic buffalo, Tirathgarh Falls, best time to visit Kanger Valley, how to reach Kanger Valley National Park, Bastar wildlife",
  openGraph: {
    title: "Kanger Valley National Park Travel Guide: Caves, Falls & Wildlife",
    description: "A national park with limestone caves, two major waterfalls, and one of India's few forests dense enough to still hide wild buffalo — the complete guide to Kanger Valley.",
    url: "https://club.kudozz.in/blog/kanger-valley-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Dense forest landscape representative of Kanger Valley National Park, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Kanger Valley National Park Travel Guide: Caves, Falls & Wildlife", description: "Limestone caves, waterfalls, and wild buffalo habitat — the complete guide to Kanger Valley.", images: ["/images/destinations/ziro/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/kanger-valley-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Kanger Valley National Park Travel Guide: Caves, Falls & Wildlife",
      description: "The complete Kanger Valley National Park travel guide.",
      image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kanger-valley-travel-guide" },
      about: { "@type": "Place", name: "Kanger Valley National Park", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Kanger Valley National Park Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "What is there to see inside Kanger Valley National Park?", a: "Tirathgarh Falls, limestone caves including Kutumsar and Kailash Caves, and dense sal forest that's home to leopards, various deer species, and the rare wild Asiatic buffalo." },
  { q: "Can I see wild buffalo at Kanger Valley?", a: "The park is one of the last strongholds of the endangered wild Asiatic buffalo, but sightings for casual visitors are genuinely very uncommon — don't plan a visit around a guaranteed encounter." },
  { q: "Is Kutumsar Cave open to the public?", a: "Yes, though access is typically regulated or guided — verify the current booking/access process before your visit, as this can change." },
  { q: "What is the best time to visit Kanger Valley National Park?", a: "November to June for cave and waterfall access. The park may close or restrict access during peak monsoon (roughly July-October) for safety — verify current closure dates." },
  { q: "How do I reach Kanger Valley National Park?", a: "The nearest airport and railway station are both in Jagdalpur, about 27km away, with road access via the park's entry gate." },
  { q: "Can I combine Kanger Valley with Chitrakote and Tirathgarh Falls?", a: "Yes — all three are close enough to combine into a single-day Bastar waterfall-and-cave circuit from Jagdalpur." },
  { q: "What is the blind cave fish found in Kutumsar Cave?", a: "A rare fish species adapted to complete darkness, found in the cave's underground pools — a genuine point of biological interest that makes Kutumsar scientifically significant beyond its geology." },
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
  { id: "introduction", title: "Why Kanger Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kanger Valley", level: 2 },
  { id: "top-attractions", title: "Caves, Falls & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KANGER_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for caves, forest trails, and waterfall visits", emoji: "🦇",
  items: [
    { name: "Headlamp / Torch", description: "Essential for Kutumsar and Kailash Cave interiors, which are genuinely dark beyond the entrance.", price: "₹599", rating: 4.5, reviews: "6.4k", image: "🔦", affiliateUrl: amazonSearchUrl("led+headlamp+caving"), tag: "Cave essential", tagColor: "bg-red-100 text-red-700", why: "Cave interiors have limited or no ambient lighting beyond the entrance area." },
    { name: "Sturdy Trekking Shoes", description: "For cave approach paths, forest trails, and Tirathgarh's wet rock sections.", price: "₹2,999", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+mountain"), tag: "All-terrain essential", tagColor: "bg-amber-100 text-amber-700", why: "The park mixes cave, forest, and wet waterfall terrain in a single visit." },
    { name: "Insect Repellent", description: "Dense sal forest throughout the park means a real, consistent mosquito presence.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "This is genuinely dense forest cover, not open grassland." },
    { name: "Binoculars", description: "For any wildlife spotting opportunities — leopards and deer species are present, though sightings aren't guaranteed.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+forest"), tag: "Wildlife essential", tagColor: "bg-sky-100 text-sky-700", why: "Given how rare direct sightings are, binoculars make the most of any distant glimpse." },
  ],
}];

export default function KangerValleyGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Dense forest landscape representative of Kanger Valley National Park, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kanger Valley National Park", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kanger Valley National Park", "Bastar", "Adventure", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kanger Valley National Park Travel Guide: Caves, Falls & Wildlife
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A national park with limestone caves, two major waterfalls, and one of India's few forests dense enough to still hide wild buffalo.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kanger Valley National Park, Chhattisgarh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Kanger Valley?</h2>
                  <p>
                    <strong>Kanger Valley National Park</strong> packs a genuinely unusual combination into one protected area: limestone caves with rare underground biology, a multi-tiered waterfall (Tirathgarh Falls, covered in its own detailed guide), and dense forest that remains one of the last strongholds of the endangered wild Asiatic buffalo.
                  </p>
                  <p>
                    The standout cave is <strong>Kutumsar Cave</strong>, home to stalactite and stalagmite formations and a rare blind cave fish species adapted to complete darkness — a real point of biological interest beyond the geology alone. Kailash Caves add a second, less-visited cave system worth exploring if time allows.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🦇</span> Kanger Valley at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🕳️", label: "Key Site", value: "Kutumsar Cave" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Jun" },
                        { icon: "🐃", label: "Rare Wildlife", value: "Wild Asiatic buffalo" },
                        { icon: "✈️", label: "Nearest Hub", value: "Jagdalpur (~27km)" },
                        { icon: "💰", label: "Budget", value: "₹500 – ₹1,200/day trip" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kanger Valley</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry conditions ideal for cave visits, forest walks, and the Tirathgarh Falls circuit." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but accessible", text: "Warmer, but the park remains open and caves offer a cooler respite from the heat." },
                      { season: "Jul – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — verify access", text: "The park may close or restrict access for safety during peak monsoon — check current dates before planning a visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most reliable window for both cave and waterfall access.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kanger Valley</h2>
                  <ul>
                    <li><strong>By Air/Train:</strong> Jagdalpur (~27km away) has the nearest airport and railway station.</li>
                    <li><strong>By Road:</strong> Access via the park's official entry gate.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book Kutumsar Cave access ahead if a guided/regulated process is currently in place — verify this before arriving.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Caves, Falls & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Dense forest scenery inside Kanger Valley National Park" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kutumsar Cave:</strong> A limestone cave with stalactite/stalagmite formations and a rare blind cave fish species in its underground pools.</li>
                    <li><strong>Kailash Caves:</strong> A second, less-visited cave system within the park.</li>
                    <li><strong>Tirathgarh Falls:</strong> The park's signature waterfall, in a multi-tiered cascade format (cross-reference that separate guide).</li>
                    <li><strong>Wild Asiatic buffalo:</strong> One of the last strongholds of this endangered subspecies — genuinely rare to spot, but part of what makes the park significant.</li>
                    <li><strong>Leopards and deer:</strong> Present in the park's forest, with realistically modest sighting odds for casual visitors.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Kanger Valley</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,500/night", picks: ["Guesthouses in Jagdalpur town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed Jagdalpur hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very limited — most visitors base in Jagdalpur"] },
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
                  <h2>What to Eat Near Kanger Valley</h2>
                  <ul>
                    <li><strong>Local snack stalls:</strong> Simple food near the park entry area.</li>
                    <li><strong>Jagdalpur dining:</strong> A fuller range of options back in town for lunch/dinner.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Kanger Valley Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Caves", color: "bg-amber-700", activities: ["Enter the park", "Visit Kutumsar Cave", "Kailash Caves if time allows"] },
                      { day: "Afternoon", title: "Tirathgarh Falls", color: "bg-forest-600", activities: ["Explore the multi-tiered falls", "General forest walk/wildlife watching", "Return to Jagdalpur"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Per Person"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Park entry fee", "₹50–150"],
                          ["Cave visit fee (Kutumsar)", "₹50–200"],
                          ["Guide fee (where applicable)", "₹200–400"],
                          ["Transport from Jagdalpur (shared)", "₹300–500"],
                          ["Day-trip total", "₹700–1,200"],
                        ].map(([exp, v], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Jagdalpur/the Bastar region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kanger Valley</h2>
                  <ul>
                    <li><strong>Book Kutumsar Cave access ahead:</strong> Verify the current booking/guided process before your visit.</li>
                    <li><strong>Combine with Tirathgarh and Chitrakote Falls:</strong> A natural single-day Bastar circuit.</li>
                    <li><strong>Set realistic wildlife expectations:</strong> Buffalo and leopard sightings are genuinely rare, not guaranteed.</li>
                    <li><strong>Carry a torch/headlamp:</strong> Cave interiors are dark beyond the entrance.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book Kutumsar Cave access ahead if required", "Carry a headlamp or torch for cave interiors", "Combine with Tirathgarh and Chitrakote Falls", "Set realistic wildlife-sighting expectations", "Verify current monsoon-season closure dates"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a guaranteed wild buffalo or leopard sighting", "Enter caves without a torch/headlamp", "Skip verifying current cave-access booking process", "Visit during monsoon without checking closure status", "Rush through without also seeing Tirathgarh Falls"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kanger Valley National Park", "Bastar", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KANGER_GEAR} destination="Kanger Valley National Park" />
              <RelatedPostsGrid currentSlug="kanger-valley-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="kanger-valley-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
