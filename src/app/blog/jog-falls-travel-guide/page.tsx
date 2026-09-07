// src/app/blog/jog-falls-travel-guide/page.tsx
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
  title: "Jog Falls Travel Guide: India's Tallest Plunge Waterfall",
  description:
    "The complete Jog Falls travel guide. Raja, Rani, Rocket and Roarer streams on the Sharavathi River, viewpoints, when the flow is strongest, where to stay, and a full itinerary.",
  keywords:
    "Jog Falls travel guide, Sharavathi River, tallest waterfall India, Jog Falls best time to visit, how to reach Jog Falls, Karnataka waterfalls, Talguppa",
  openGraph: {
    title: "Jog Falls Travel Guide: India's Tallest Plunge Waterfall",
    description: "A four-pronged waterfall dropping nearly 830 feet in a single, undivided plunge — the complete guide to Jog Falls.",
    url: "https://club.kudozz.in/blog/jog-falls-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Waterfall in forested gorge representative of Jog Falls, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jog Falls Travel Guide: India's Tallest Plunge Waterfall",
    description: "A four-pronged waterfall dropping nearly 830 feet on the Sharavathi River — the complete guide to Jog Falls.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/jog-falls-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Jog Falls Travel Guide: India's Tallest Plunge Waterfall",
          description: "The complete Jog Falls travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/jog-falls-travel-guide" },
          about: { "@type": "Place", name: "Jog Falls", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Jog Falls Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Is Jog Falls really India's tallest waterfall?", a: "It's widely cited as India's tallest plunge (single, undivided drop) waterfall at roughly 830 feet. A few other Indian waterfalls are taller in total multi-tiered height, but Jog's single sheer drop is what earns it the reputation." },
  { q: "What is the best time to visit Jog Falls?", a: "August to November, right after peak monsoon, offers the fullest and most dramatic flow. Because the falls are affected by an upstream dam, flow can be significantly reduced outside this window — verify current conditions before a special trip." },
  { q: "How do I reach Jog Falls?", a: "Talguppa, about 15km away, is the nearest and simplest railway arrival point. Road access is via Shivamogga or Karwar; the nearest airports with limited flights are Hubli and Shivamogga." },
  { q: "Can I walk down to the base of the falls?", a: "There's a steep flight of steps toward the base, but access is seasonal and can be closed for safety — verify current status locally before planning around it." },
  { q: "Why do the four streams have different names?", a: "The falls split into four distinct streams — Raja, Rani, Rocket, and Roarer — each with a different character and flow pattern, giving the falls its four-pronged look from the main viewpoints." },
  { q: "What is the budget for a trip to Jog Falls?", a: "This is largely a day-trip destination — expect roughly ₹1,000-1,500 for a budget day including transport and food, more if arranging a private car from a further base town." },
  { q: "Is Jog Falls worth visiting outside monsoon season?", a: "It depends on current dam release levels — flow can be much reduced. If your trip isn't flexible on timing, check recent conditions before making Jog Falls the centrepiece of your plans." },
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
  { id: "introduction", title: "Why Jog Falls?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jog Falls", level: 2 },
  { id: "top-attractions", title: "Viewpoints & Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const JOG_FALLS_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for viewpoint walks and any base-access steps",
    emoji: "💦",
    items: [
      { name: "Grip Trekking Sandals", description: "Viewpoint paths and any open base-access steps can get slick, especially in and after monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+sandals+grip+outdoor"), tag: "Trail essential", tagColor: "bg-amber-100 text-amber-700", why: "Wet rock and steep steps near the falls are where slips most commonly happen." },
      { name: "Rain Jacket / Poncho", description: "Essential if visiting during the peak Aug-Nov flow window, when rain is likely alongside the falls' best flow.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Monsoon essential", tagColor: "bg-sky-100 text-sky-700", why: "The best-flow season and the wettest weather overlap almost exactly here." },
      { name: "Reusable Water Bottle", description: "For the walk between viewpoints and any base-access trail.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities are limited around the falls themselves." },
      { name: "Camera / Phone Dry Bag", description: "Waterfall spray at close viewpoints can be significant, especially at peak flow.", price: "₹399", rating: 4.3, reviews: "4.5k", image: "📷", affiliateUrl: amazonSearchUrl("waterproof+camera+dry+bag"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "Close-up viewpoints at peak season get a genuine amount of mist and spray." },
    ],
  },
];

export default function JogFallsGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Waterfall in forested gorge representative of Jog Falls, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Jog Falls", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Jog Falls", "Sharavathi River", "Waterfalls", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Jog Falls Travel Guide: India's Tallest Plunge Waterfall
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A four-pronged waterfall dropping nearly 830 feet in a single, undivided plunge on the Sharavathi River — everything you need to plan a visit.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Jog Falls, Karnataka" },
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
                  <h2>Why Jog Falls?</h2>
                  <p>
                    <strong>Jog Falls</strong>, on the Sharavathi River in Karnataka's Western Ghats, is widely cited as India's tallest plunge waterfall — a single, undivided drop of roughly 830 feet. The falls split into four distinct streams known locally as <strong>Raja, Rani, Rocket, and Roarer</strong>, each with its own character, giving the falls a dramatic, multi-pronged look from the main viewpoints.
                  </p>
                  <p>
                    Here's the practical detail most visitors miss: the falls are fed by a dam upstream, so water release and reservoir levels genuinely affect flow — the falls at peak monsoon look nothing like the falls in a dry March. Plan your timing accordingly.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>💦</span> Jog Falls at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "💦", label: "Height", value: "~830 ft plunge" },
                        { icon: "🌡️", label: "Best Time", value: "Aug – Nov" },
                        { icon: "🚆", label: "Nearest Rail", value: "Talguppa (~15km)" },
                        { icon: "🌊", label: "River", value: "Sharavathi" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹1,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Jog Falls</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Aug – Nov", emoji: "💦", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Right after peak monsoon, this is when flow is fullest and most dramatic." },
                      { season: "Dec – Feb", emoji: "☀️", color: "bg-orange-50 border-orange-200", mood: "Comfortable but drier", text: "Pleasant weather for viewing, but flow can already be noticeably reduced from the peak." },
                      { season: "Mar – Jul", emoji: "🥵", color: "bg-sky-50 border-sky-200", mood: "Weakest flow", text: "Water levels are typically at their lowest depending on dam release — verify current conditions if this is a make-or-break trip factor." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> If a dramatic flow is the whole point of your visit, check recent water-release conditions before travelling — this genuinely varies year to year and week to week.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Jog Falls</h2>
                  <ul>
                    <li><strong>By Air:</strong> Hubli and Shivamogga are the nearest airports, both with limited flight options.</li>
                    <li><strong>By Train:</strong> Talguppa, about 15km away, is the nearest and simplest railway arrival point.</li>
                    <li><strong>By Road:</strong> Accessible via Shivamogga or Karwar, both requiring a scenic drive through the Western Ghats.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> This is genuinely one of Karnataka's harder-to-reach major sights — build in extra travel time and confirm road conditions if visiting during monsoon.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Viewpoints & Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Waterfall gorge scenery near Jog Falls" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Main viewpoint:</strong> The primary viewing platform with the classic wide view of all four streams.</li>
                    <li><strong>Opposite-bank viewpoints:</strong> Alternate vantage points across the gorge offering a different angle on the falls.</li>
                    <li><strong>Base-access steps:</strong> A steep flight of steps toward the base, seasonally accessible — verify current status before planning around it.</li>
                    <li><strong>Linganamakki Dam:</strong> The upstream dam feeding the falls, worth a mention for understanding why flow varies so much by season.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Jog Falls</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses near the falls", "Shivamogga budget hotels (day-trip base)"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹4,500/night", picks: ["Government/tourism board resort near the falls", "Mid-range hotels in Sagar town"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of better-appointed resorts nearby — luxury choices here are genuinely limited"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Many visitors treat Jog Falls as a day trip from Shivamogga or Sagar rather than staying overnight right at the falls.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Jog Falls</h2>
                  <ul>
                    <li><strong>Local roadside eateries:</strong> Simple Karnataka-style meals and snacks near the falls entrance.</li>
                    <li><strong>Shivamogga/Sagar town restaurants:</strong> A wider range of options if basing yourself in either town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Arrival & Main Viewpoints", color: "bg-amber-700", activities: ["Travel from Shivamogga or Talguppa", "Arrive at the main viewpoint", "Photograph the four streams in good morning light"] },
                      { day: "Afternoon", title: "Alternate Views & Departure", color: "bg-forest-600", activities: ["Explore opposite-bank viewpoints", "Base-access steps if open and conditions allow", "Depart back to your base town"] },
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
                          ["Local transport (day)", "₹400", "₹1,200"],
                          ["Food", "₹300", "₹700"],
                          ["Entry fees", "₹100", "₹100"],
                          ["Daily total", "₹1,000", "₹2,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region — treated here as a day trip, not an extended stay.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Jog Falls</h2>
                  <ul>
                    <li><strong>Check current water flow before a special trip:</strong> Dam release levels can make or break the visual impact.</li>
                    <li><strong>Verify base-step access:</strong> Seasonal closures for safety are common.</li>
                    <li><strong>Visit on a weekday:</strong> Weekends bring notably larger day-tripper crowds.</li>
                    <li><strong>Carry cash:</strong> Options for card payment are limited around the falls.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check recent water flow conditions before travelling", "Visit Aug–Nov for peak flow", "Wear grippy footwear for wet viewpoint paths", "Visit on a weekday for fewer crowds", "Carry sufficient cash"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a special trip in dry months without checking flow first", "Assume base-access steps are open", "Underestimate travel time to reach the falls", "Rely on cards for payment", "Skip carrying rain protection in peak season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Jog Falls", "Sharavathi River", "Waterfalls", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={JOG_FALLS_GEAR} destination="Jog Falls" />
              <RelatedPostsGrid currentSlug="jog-falls-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="jog-falls-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
