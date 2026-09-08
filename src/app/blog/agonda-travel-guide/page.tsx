// src/app/blog/agonda-travel-guide/page.tsx
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
  title: "Agonda Beach Travel Guide: Turtle Nesting & South Goa's Quiet Side",
  description:
    "The complete Agonda travel guide. Turtle nesting season, the beach's no-loud-music local code, yoga stays, where to stay, best time to visit, and a full itinerary through South Goa's calmest beach.",
  keywords:
    "Agonda travel guide, Agonda beach Goa, Agonda turtle nesting, South Goa quiet beaches, best time to visit Agonda, how to reach Agonda, Agonda vs Palolem, Goa yoga retreats",
  openGraph: {
    title: "Agonda Beach Travel Guide: Turtle Nesting & South Goa's Quiet Side",
    description: "A long, quiet South Goa beach where olive ridley turtles still nest, with a strict no-nightlife, no-loud-music local code — the complete guide to Agonda.",
    url: "https://club.kudozz.in/blog/agonda-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/hero.jpg", width: 1200, height: 630, alt: "Palm-backed beach scenery representative of Agonda, Goa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agonda Beach Travel Guide: Turtle Nesting & South Goa's Quiet Side",
    description: "A quiet South Goa beach with a no-loud-music local code and nesting turtles — the complete guide to Agonda.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/agonda-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Agonda Beach Travel Guide: Turtle Nesting & South Goa's Quiet Side",
          description: "The complete Agonda travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/agonda-travel-guide" },
          about: { "@type": "Place", name: "Agonda", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Agonda Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Agonda?", a: "Two days is enough to properly settle into Agonda's slow pace — one for the beach and village, one to add a Palolem evening or a spice-plantation day trip if you want more activity." },
  { q: "What is the best time to visit Agonda?", a: "November to February is the best window — dry, sunny weather with every shack open. Turtle nesting season typically overlaps with this period, roughly November through March, so it's also the best time if that interests you." },
  { q: "How do I reach Agonda?", a: "The nearest airport is Dabolim, about 35km away. Canacona is the nearest railway station, and road access from there is short and straightforward." },
  { q: "Is Agonda good for solo travellers?", a: "Yes — Agonda has a well-established calm, wellness-oriented traveller scene, including long-stay yoga guests, and is generally considered comfortable and safe for solo travellers of all genders." },
  { q: "Can I see turtles nesting at Agonda?", a: "Agonda is one of a handful of Goa beaches where olive ridley turtles nest, typically monitored and protected during nesting season by forest department efforts. Verify current-year protocols and any marked no-access zones before visiting during nesting season." },
  { q: "Is Agonda quieter than Palolem?", a: "Yes, generally — Agonda has actively discouraged loud music and late-night parties as a matter of local policy, while Palolem, though still calm by North Goa standards, has more shacks, restaurants, and evening activity." },
  { q: "What is the budget for a trip to Agonda?", a: "A budget traveller can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day, and a beachfront cottage stay can run ₹8,000+ a day. A 2-day trip totals roughly ₹3,600 on a budget and ₹9,000 mid-range, excluding flights or trains to Goa." },
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
  { id: "introduction", title: "Why Agonda?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Agonda", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AGONDA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a slow, quiet South Goa beach stay",
    emoji: "🐢",
    items: [
      { name: "Reef-Safe Sunscreen (SPF 50)", description: "Agonda's long, shade-light stretch of sand calls for strong sun protection over a full beach day.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Sunburn is the most common regret among travellers who underestimate a full day on Agonda's exposed sand." },
      { name: "Yoga Mat", description: "Useful if you plan to join one of Agonda's many yoga sessions or practice independently on the beach at sunrise.", price: "₹999", rating: 4.4, reviews: "3.1k", image: "🧘", affiliateUrl: amazonSearchUrl("travel+yoga+mat+lightweight"), tag: "Wellness essential", tagColor: "bg-purple-100 text-purple-700", why: "Agonda's calm reputation has drawn a strong yoga and wellness scene — a personal mat beats renting one." },
      { name: "Comfortable Sandals", description: "For the walk between the beach, village, and any spice-plantation or Palolem day trip.", price: "₹899", rating: 4.4, reviews: "4.8k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "All-day essential", tagColor: "bg-sky-100 text-sky-700", why: "Agonda's village and beach paths are sandy and uneven — proper sandals hold up better than flip-flops." },
      { name: "Insect Repellent", description: "Evenings near the palm groves behind the beach bring a real mosquito presence.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Evening essential", tagColor: "bg-forest-100 text-forest-700", why: "The palm-backed setting that makes Agonda beautiful also makes it mosquito-friendly after dark." },
    ],
  },
];

export default function AgondaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/hero.jpg" alt="Palm-backed beach scenery representative of Agonda, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Agonda", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Agonda", "South Goa", "Beaches", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Agonda Beach Travel Guide: Turtle Nesting & South Goa's Quiet Side
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A long, quiet South Goa beach where olive ridley turtles still nest, with a strict no-nightlife, no-loud-music local code.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Agonda, Goa" },
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
                  <h2>Why Agonda?</h2>
                  <p>
                    <strong>Agonda</strong> is one of South Goa's quietest beaches, and that's genuinely by design — the local village has long discouraged loud music and late-night parties, keeping the beach calm even by South Goa standards. A long, relatively uncrowded stretch of sand backed by palm groves stretches out with none of the beach-club noise of the North Goa strip.
                  </p>
                  <p>
                    Agonda is also one of a handful of Goa beaches where <strong>olive ridley turtles</strong> nest, typically monitored during the season by forest department efforts. Add a strong yoga and wellness-stay scene, and Agonda has become a genuine draw for travellers who want beach time without the party.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🐢</span> Agonda at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🐢", label: "Known For", value: "Olive ridley turtle nesting" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim (~35km)" },
                        { icon: "🧘", label: "Character", value: "Quiet, yoga-friendly" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Agonda</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, sunny weather, every shack open, and the turtle nesting season typically overlaps with this window." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot but quiet", text: "Fewer crowds and lower prices, but noticeably hotter and more humid for extended beach time." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — shacks shut", text: "Most beach shacks close and swimming is unsafe due to rough seas — not a beach trip window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — dry weather, open shacks, and the best odds of overlapping with turtle nesting season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Agonda</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim Airport is the nearest, about 35km away.</li>
                    <li><strong>By Train:</strong> Canacona is the nearest railway station, a short drive from Agonda.</li>
                    <li><strong>By Road:</strong> Well connected via South Goa's coastal roads from Margao or Canacona.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Rent a scooter for the short hop to Palolem if you want an evening with more restaurants and activity than Agonda itself offers.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Agonda</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/hero.jpg" alt="Beach and palm grove scenery around Agonda" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Agonda Beach:</strong> A long, uncrowded stretch of sand, genuinely quiet even in peak season by Goa standards.</li>
                    <li><strong>Turtle nesting spots:</strong> Marked, monitored areas where olive ridley turtles nest during the season — respect posted access limits.</li>
                    <li><strong>Yoga and wellness sessions:</strong> A well-established scene of drop-in classes and retreat-style stays.</li>
                    <li><strong>Palolem day/evening trip:</strong> A short drive for more shacks, restaurants, and nightlife than Agonda offers.</li>
                    <li><strong>Cotigao Wildlife Sanctuary:</strong> A forested sanctuary a short drive inland, worth a stop for nature-focused travellers.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Agonda</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Beach huts along the sand", "Guesthouses in the village"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Beachfront cottages", "Yoga-retreat combo stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium beachfront villas", "Boutique wellness resorts"] },
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
                  <h2>What to Eat in Agonda</h2>
                  <ul>
                    <li><strong>Fresh seafood:</strong> Kingfish, prawns, and calamari at beachfront shacks.</li>
                    <li><strong>Goan curries:</strong> Fish curry-rice and vindaloo at local restaurants.</li>
                    <li><strong>Wellness-cafe menus:</strong> A strong healthy-eating scene reflecting Agonda's yoga-retreat crowd — smoothie bowls, fresh juices, and vegetarian plates alongside standard Goan fare.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Agonda Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beach & Village", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: beach time and a sunset walk", "Evening: dinner at a beachfront shack"] },
                      { day: "Day 2", title: "Yoga & Day Trip", color: "bg-forest-600", activities: ["Morning: yoga session or beach time", "Afternoon: day trip to Palolem or Cotigao Wildlife Sanctuary", "Evening: return, relax"] },
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹8,000"],
                          ["Food/day", "₹500", "₹1,100", "₹2,200"],
                          ["Local transport per day", "₹300", "₹600", "₹1,500"],
                          ["Daily total", "₹1,800", "₹4,500", "₹11,700"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹23,400"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights or trains to Goa.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Agonda</h2>
                  <ul>
                    <li><strong>Respect the no-loud-music norm:</strong> This is genuinely part of what keeps Agonda quiet — locals and repeat visitors take it seriously.</li>
                    <li><strong>Check turtle-nesting protocols before visiting nesting areas:</strong> Rules and marked zones can change season to season.</li>
                    <li><strong>Combine with Palolem for a livelier evening:</strong> A short drive gets you more restaurant and nightlife options.</li>
                    <li><strong>Most shacks close outside Nov–Mar:</strong> Plan around this if visiting in the off-season.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Respect local no-loud-music norms", "Check current turtle-nesting protocols", "Try a yoga session while you're here", "Combine with Palolem for more evening options", "Book beachfront stays ahead in peak season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect North Goa-style nightlife here", "Play loud music on the beach or at your stay", "Enter marked turtle nesting zones", "Visit expecting open shacks outside Nov-Mar", "Skip sun protection during long beach days"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Agonda", "South Goa", "Beaches", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AGONDA_GEAR} destination="Agonda" />
              <RelatedPostsGrid currentSlug="agonda-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="agonda-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
