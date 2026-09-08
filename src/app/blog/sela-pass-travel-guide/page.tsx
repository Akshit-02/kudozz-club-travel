// src/app/blog/sela-pass-travel-guide/page.tsx
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
  title: "Sela Pass Travel Guide: One of India's Highest Motorable Passes",
  description:
    "The complete Sela Pass travel guide. Sela Lake, Jaswantgarh war memorial, seasonal road conditions, best time to visit, and practical tips for crossing this high-altitude Arunachal Pradesh pass.",
  keywords:
    "Sela Pass travel guide, Sela Lake, Jaswantgarh war memorial, Sela Pass altitude, Sela Pass road conditions, best time to visit Sela Pass, Dirang to Tawang road, Arunachal Pradesh mountain pass",
  openGraph: {
    title: "Sela Pass Travel Guide: One of India's Highest Motorable Passes",
    description: "A high-altitude pass ringed by a sacred lake and hundreds of smaller frozen ponds, on the only road connecting Tawang to the rest of India — the complete guide to Sela Pass.",
    url: "https://club.kudozz.in/blog/sela-pass-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/leh-ladakh/leh-ladakh.jpg", width: 1200, height: 630, alt: "High-altitude mountain pass and lake representative of Sela Pass, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Sela Pass Travel Guide: One of India's Highest Motorable Passes", description: "A sacred high-altitude pass on the road to Tawang — the complete guide to Sela Pass.", images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/sela-pass-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Sela Pass Travel Guide: One of India's Highest Motorable Passes",
      description: "The complete Sela Pass travel guide.",
      image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/sela-pass-travel-guide" },
      about: { "@type": "Place", name: "Sela Pass", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Sela Pass Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How high is Sela Pass?", a: "Sela Pass is commonly cited at roughly 4,170m, making it one of the highest motorable passes in India — treat this figure as an approximate, widely-reported elevation rather than an exact survey measurement." },
  { q: "Can I stay overnight at Sela Pass?", a: "Not really — this is a pass to cross and stop at briefly rather than a base with proper accommodation. Most travelers continue on to Tawang or back to Dirang the same day." },
  { q: "Is Sela Pass open year-round?", a: "No — heavy snow can close the pass in winter (roughly December–February), cutting off road access to Tawang. Verify current conditions before traveling, especially in shoulder months." },
  { q: "What is Jaswantgarh?", a: "A war memorial near Sela Pass honoring an Indian soldier from the 1962 Sino-Indian War, a short and genuinely worthwhile detour for travelers crossing the pass." },
  { q: "Is Sela Pass the only route to Tawang?", a: "Yes — it's the standard and essentially only road route connecting Tawang to the rest of Arunachal Pradesh, making it an unavoidable crossing for anyone visiting Tawang by road." },
  { q: "Do I need a permit to cross Sela Pass?", a: "You'll need the same Inner Line Permit (Indian citizens) or Protected Area Permit (foreign nationals) required for Arunachal Pradesh generally, since the pass sits within the state — verify current requirements before traveling." },
  { q: "What should I carry for the Sela Pass crossing?", a: "Heavy warm layers regardless of season, sturdy footwear, sunscreen for high-altitude sun, and motion sickness medication if you're prone to it on winding mountain roads." },
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
  { id: "introduction", title: "Why Sela Pass?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Crossing Sela Pass", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SELA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a high-altitude pass crossing", emoji: "⛰️",
  items: [
    { name: "Heavy Warm Layers", description: "Sela Pass is genuinely cold year-round, not just in winter — proper insulation is essential even for a brief stop.", price: "₹3,999", rating: 4.5, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("heavy+winter+jacket+high+altitude"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Even a short stop at the pass exposes you to genuinely harsh wind chill at this altitude." },
    { name: "Sturdy Footwear", description: "For walking around Sela Lake and the pass area, which can be icy or slushy depending on season.", price: "₹2,999", rating: 4.4, reviews: "4.6k", image: "🥾", affiliateUrl: amazonSearchUrl("sturdy+winter+boots+trekking"), tag: "Trip essential", tagColor: "bg-amber-100 text-amber-700", why: "The ground around the pass and lake is often uneven, icy, or wet." },
    { name: "High-SPF Sunscreen", description: "High-altitude sun at Sela Pass is deceptively intense even in cold, cloudy weather.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("high+spf+sunscreen+travel"), tag: "Altitude essential", tagColor: "bg-sky-100 text-sky-700", why: "Sunburn at this altitude happens fast, even when the air feels cold." },
    { name: "Motion Sickness Medication", description: "The winding mountain roads leading to and from the pass can be genuinely nausea-inducing for some travelers.", price: "₹99", rating: 4.3, reviews: "5.2k", image: "💊", affiliateUrl: amazonSearchUrl("motion+sickness+tablets+travel"), tag: "Road-trip essential", tagColor: "bg-purple-100 text-purple-700", why: "The approach roads have many tight switchbacks — worth being prepared if you're prone to motion sickness." },
  ],
}];

export default function SelaPassGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/leh-ladakh/leh-ladakh.jpg" alt="High-altitude mountain pass and lake representative of Sela Pass, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Sela Pass", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Sela Pass", "Mountain Pass", "Off-beat", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Sela Pass Travel Guide: One of India's Highest Motorable Passes
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A high-altitude pass ringed by a sacred lake and hundreds of smaller frozen ponds, on the only road connecting Tawang to the rest of India.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Sela Pass, Arunachal Pradesh" },
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
                  <h2>Why Sela Pass?</h2>
                  <p>
                    <strong>Sela Pass</strong>, at roughly 4,170m, is one of the highest motorable passes in India and the sole road route connecting Tawang (cross-reference that guide) to the rest of Arunachal Pradesh — anyone driving to Tawang crosses this pass, making it less a standalone destination and more an essential, genuinely spectacular waypoint.
                  </p>
                  <p>
                    <strong>Sela Lake</strong>, sacred locally and tied to legend involving a young woman named Sela, sits right at the pass, surrounded by dozens of smaller lakes scattered across the high-altitude terrain. A short distance away, the <strong>Jaswantgarh</strong> war memorial adds a somber, significant layer to the crossing.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛰️</span> Sela Pass at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "⛰️", label: "Elevation", value: "~4,170m" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Nov" },
                        { icon: "🛣️", label: "Route", value: "Dirang–Tawang road" },
                        { icon: "🏞️", label: "Highlight", value: "Sela Lake" },
                        { icon: "🪪", label: "Permit", value: "Inner Line Permit required" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Sela Pass</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Road opens up", text: "Snow clears and the pass becomes reliably passable, with clear high-altitude views." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "The most reliable road conditions and clearest mountain views of the year." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Landslide risk on the approach roads makes this a less predictable window for the crossing." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Winter — closures likely", text: "Heavy snow can close the pass entirely, cutting off road access to Tawang — verify current status." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Always check current pass conditions before traveling in shoulder months — closures are genuinely possible with little notice.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sela Pass</h2>
                  <ul>
                    <li><strong>On the Dirang–Tawang road:</strong> Sela Pass sits between Dirang (cross-reference that guide) and Tawang, an unavoidable crossing on this route.</li>
                    <li><strong>Not a standalone destination:</strong> Most travelers stop here briefly en route rather than basing themselves at the pass.</li>
                    <li><strong>Permits:</strong> The same ILP/PAP requirements for Arunachal Pradesh generally apply here — verify current process before traveling.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current road/weather conditions with your driver or a local source the morning of your crossing — conditions can change quickly at this altitude.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See at Sela Pass</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/leh-ladakh/leh-ladakh.jpg" alt="Mountain lake scenery near Sela Pass" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sela Lake:</strong> A sacred lake right at the pass, tied to local legend, and a genuinely photogenic centrepiece of the crossing.</li>
                    <li><strong>Smaller surrounding lakes:</strong> Dozens of smaller ponds dot the high-altitude landscape around the pass.</li>
                    <li><strong>Jaswantgarh War Memorial:</strong> A short, respectful detour honoring an Indian soldier from the 1962 war.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>There's no meaningful standalone accommodation at the pass itself — stay in Dirang before crossing or Tawang after, both covered in their own guides.</p>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Small roadside stalls:</strong> Basic hot tea, momos, and instant noodles are typically available near the pass, weather and season permitting.</li>
                    <li><strong>Pack your own snacks:</strong> Given the remote setting, it's wise to carry your own food and water for the crossing.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Crossing Sela Pass</h2>
                  <p>This is a stop, not a stay — most travelers cross it as part of the Dirang-to-Tawang leg of a longer trip.</p>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Depart Dirang", color: "bg-amber-700", activities: ["Early start from Dirang", "Drive toward Sela Pass, allowing for stops"] },
                      { day: "Midday", title: "Cross the Pass", color: "bg-forest-600", activities: ["Stop at Sela Lake for photos and a short walk", "Visit Jaswantgarh war memorial nearby", "Continue on toward Tawang"] },
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
                  <p className="text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>Sela Pass itself has minimal costs — it's a stop along a route, not a destination with its own accommodation or entry fees. See the Dirang and Tawang guides for the fuller trip budget.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Sela Pass</h2>
                  <ul>
                    <li><strong>Check road conditions the morning of your crossing:</strong> Weather can shift quickly at this altitude.</li>
                    <li><strong>Dress in serious warm layers:</strong> This is cold year-round, not just in winter.</li>
                    <li><strong>Don't linger too long in extreme cold or wind:</strong> A brief, well-timed stop is more comfortable than a prolonged one.</li>
                    <li><strong>Visit Jaswantgarh respectfully:</strong> This is a genuine war memorial, not just a scenic stop.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current pass conditions before departure", "Dress in heavy warm layers", "Stop at Jaswantgarh war memorial", "Carry your own snacks and water", "Photograph Sela Lake but keep the stop reasonably brief"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt the crossing without checking conditions in winter", "Underestimate the cold or wind at the pass", "Expect any real accommodation or dining options here", "Linger too long outdoors in poor weather", "Skip carrying warm layers assuming a quick stop won't need them"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Sela Pass", "Mountain Pass", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SELA_GEAR} destination="Sela Pass" />
              <RelatedPostsGrid currentSlug="sela-pass-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="sela-pass-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
