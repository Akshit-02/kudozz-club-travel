// src/app/blog/candolim-travel-guide/page.tsx
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
  title: "Candolim Beach Travel Guide: Quiet Sands Near the Nightlife",
  description:
    "The complete Candolim travel guide. Fort Aguada, a calmer North Goa beach, where to stay, best time to visit, and a full itinerary near Calangute and Baga's nightlife.",
  keywords:
    "Candolim travel guide, Candolim Beach, Fort Aguada, best time to visit Candolim, how to reach Candolim, North Goa beaches, River Princess wreck Goa",
  openGraph: {
    title: "Candolim Beach Travel Guide: Quiet Sands Near the Nightlife",
    description: "A calmer, more upscale stretch of North Goa beach next door to Calangute and Baga's crowds — the complete guide to Candolim.",
    url: "https://club.kudozz.in/blog/candolim-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/andaman/havelock.jpg", width: 1200, height: 630, alt: "Calm beach scenery representative of Candolim, Goa" }],
  },
  twitter: { card: "summary_large_image", title: "Candolim Beach Travel Guide: Quiet Sands Near the Nightlife", description: "A calmer North Goa beach next to Fort Aguada — the complete guide to Candolim.", images: ["/images/destinations/andaman/havelock.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/candolim-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Candolim Beach Travel Guide: Quiet Sands Near the Nightlife",
      description: "The complete Candolim travel guide.",
      image: "https://club.kudozz.in/images/destinations/andaman/havelock.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/candolim-travel-guide" },
      about: { "@type": "Place", name: "Candolim", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Candolim Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Is Candolim quieter than Calangute and Baga?", a: "Yes — Candolim has a calmer, somewhat more upscale atmosphere than neighboring Calangute and Baga, while still being close enough to walk or scooter over to their nightlife." },
  { q: "What is the best time to visit Candolim?", a: "November to February is peak season — dry weather and full shack/activity availability. October to March is generally comfortable." },
  { q: "How do I reach Candolim?", a: "Goa's Dabolim (GOI) or Manohar International (GOX) airports serve the region, with straightforward road access to Candolim." },
  { q: "Is Fort Aguada worth visiting?", a: "Yes — it's a well-preserved 17th-century Portuguese fort with a lighthouse and sweeping coastal views, one of North Goa's better heritage stops and easily combined with a Candolim beach day." },
  { q: "What is the River Princess wreck?", a: "A long-grounded cargo ship that was visible offshore near Candolim for years — a notable local landmark, though its current visibility/status has changed over time. Verify current status before planning a visit around it specifically." },
  { q: "What is the budget for a trip to Candolim?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,300 a day. A 2-day trip totals roughly ₹3,200 on a budget and ₹8,600 mid-range." },
  { q: "Can I walk from Candolim to Calangute or Baga?", a: "Yes — all three are connected along the same stretch of North Goa coastline, walkable or a short scooter ride apart." },
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
  { id: "introduction", title: "Why Candolim?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Candolim", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const CANDOLIM_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the beach and a Fort Aguada visit", emoji: "🏰",
  items: [
    { name: "Reef-Safe Sunscreen (SPF 50)", description: "For beach days and the exposed climb around Fort Aguada.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Fort Aguada's ramparts offer little shade during the day." },
    { name: "Comfortable Walking Shoes", description: "For exploring Fort Aguada's ramparts and lighthouse grounds.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Fort-visit essential", tagColor: "bg-forest-100 text-forest-700", why: "The fort grounds involve uneven stone surfaces and some walking." },
    { name: "Camera", description: "Fort Aguada's coastal views and the calmer beach are genuinely photogenic.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "Sunset from Fort Aguada is one of North Goa's best viewpoints." },
    { name: "Swimwear & Sandals", description: "For Candolim's calmer, wider beach.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "👙", affiliateUrl: amazonSearchUrl("swimwear+beach+travel"), tag: "Beach essential", tagColor: "bg-sky-100 text-sky-700", why: "Standard beach essentials for a relaxed Candolim day." },
  ],
}];

export default function CandolimGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/andaman/havelock.jpg" alt="Calm beach scenery representative of Candolim, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Candolim", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Candolim", "Fort Aguada", "Beaches", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Candolim Beach Travel Guide: Quiet Sands Near the Nightlife
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A calmer, more upscale stretch of North Goa beach next door to Calangute and Baga's crowds.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Candolim, Goa" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,400 words" },
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
                  <h2>Why Candolim?</h2>
                  <p>
                    <strong>Candolim</strong> offers a calmer, somewhat more upscale alternative to neighboring Calangute and Baga — a wide sandy beach with a lower-key shack scene, while still being close enough to walk or scooter over to the nightlife when you want it.
                  </p>
                  <p>
                    Its other big draw is <strong>Fort Aguada</strong>, a well-preserved 17th-century Portuguese fort with a lighthouse just south of the beach, offering some of North Goa's best sunset views.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Candolim at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🏰", label: "Key Site", value: "Fort Aguada" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim (GOI) / Manohar Intl (GOX)" },
                        { icon: "🏖️", label: "Character", value: "Calmer than Calangute/Baga" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,300" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Candolim</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, comfortable weather, full shack availability, and calm seas." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hotter, quieter", text: "Fewer crowds, still workable with midday breaks." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Most beach shacks close for the season." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most reliable window for beach time and a sunset visit to Fort Aguada.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Candolim</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim (GOI) or Manohar International (GOX) airports, with straightforward road access.</li>
                    <li><strong>By Road:</strong> A short drive from Calangute, Baga, and Panjim.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Time your Fort Aguada visit for late afternoon to catch sunset over the Arabian Sea from the ramparts.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Candolim</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/andaman/havelock.jpg" alt="Beach and coastal scenery at Candolim" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Fort Aguada:</strong> A well-preserved 17th-century Portuguese fort with a lighthouse, offering sweeping coastal views.</li>
                    <li><strong>Candolim Beach:</strong> A wide, relatively calm stretch of sand with a lower-key shack scene than neighboring beaches.</li>
                    <li><strong>River Princess wreck:</strong> A long-grounded cargo ship visible offshore for years — verify current visibility/status before planning around it.</li>
                    <li><strong>Easy access to nightlife:</strong> Walk or scooter to Calangute/Baga when you want more activity.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Candolim</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Guesthouses set back from the beach", "Budget hotels near Fort Aguada road"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,800–₹6,500/night", picks: ["Beachfront mid-range hotels", "Boutique stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹10,000–₹20,000+/night", picks: ["Premium beachfront resorts"] },
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
                  <h2>What to Eat in Candolim</h2>
                  <ul>
                    <li><strong>Beach shack seafood:</strong> A lower-key but still solid shack scene along the sand.</li>
                    <li><strong>Upscale dining options:</strong> Candolim has a growing cluster of higher-end restaurants compared to Calangute/Baga.</li>
                    <li><strong>Fish curry rice and vindaloo:</strong> Standard Goan staples widely available.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Candolim Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beach & Fort Aguada", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: relaxed beach time", "Evening: Fort Aguada sunset"] },
                      { day: "Day 2", title: "Nightlife Day Trip & Departure", color: "bg-forest-600", activities: ["Morning: relaxed beach time", "Afternoon: walk/scooter to Calangute or Baga", "Evening: return to Candolim, departure prep"] },
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
                          ["Accommodation/night", "₹1,300", "₹4,200", "₹14,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,300"],
                          ["Local transport per day", "₹250", "₹600", "₹1,500"],
                          ["Daily total", "₹1,600", "₹4,300", "₹12,500"],
                          ["2-Day trip total", "₹3,200", "₹8,600", "₹25,000"],
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
                  <h2>Essential Travel Tips for Candolim</h2>
                  <ul>
                    <li><strong>Use it as a calmer base:</strong> Close enough to Calangute/Baga nightlife without being in the middle of it.</li>
                    <li><strong>Visit Fort Aguada for sunset:</strong> One of North Goa's best evening viewpoints.</li>
                    <li><strong>Verify the River Princess wreck's status:</strong> Its visibility has changed over time.</li>
                    <li><strong>Rent a scooter:</strong> For easy access to neighboring beach towns.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Fort Aguada for sunset views", "Use Candolim as a calmer home base", "Rent a scooter for nearby beach access", "Verify current status of the River Princess wreck", "Enjoy the lower-key shack scene"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip around the wreck without verifying its current status", "Expect Baga-level nightlife directly on Candolim's beach", "Skip Fort Aguada if you have a spare evening", "Visit expecting open shacks during monsoon", "Overlook the sunset window at the fort"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Candolim", "Fort Aguada", "Beaches", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={CANDOLIM_GEAR} destination="Candolim" />
              <RelatedPostsGrid currentSlug="candolim-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="candolim-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
