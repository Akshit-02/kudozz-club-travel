// src/app/blog/kannur-travel-guide/page.tsx
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
  title: "Kannur Travel Guide: Theyyam, Beaches & Handloom Heritage",
  description:
    "The complete Kannur travel guide. Theyyam ritual performances, Muzhappilangad Drive-in Beach, St. Angelo Fort, handloom weaving villages, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Kannur travel guide, Theyyam Kerala, Muzhappilangad Drive-in Beach, St. Angelo Fort, Kannur handloom, best time to visit Kannur, how to reach Kannur, North Kerala",
  openGraph: {
    title: "Kannur Travel Guide: Theyyam, Beaches & Handloom Heritage",
    description: "A ritual dance-form where performers are worshipped as living deities, near-empty beaches, and centuries-old handloom weaving villages — the complete guide to Kannur.",
    url: "https://club.kudozz.in/blog/kannur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/hero.jpg", width: 1200, height: 630, alt: "Coastal scenery representative of Kannur, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannur Travel Guide: Theyyam, Beaches & Handloom Heritage",
    description: "Ritual Theyyam performances, quiet beaches, and handloom heritage — the complete guide to Kannur.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kannur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kannur Travel Guide: Theyyam, Beaches & Handloom Heritage",
          description: "The complete Kannur travel guide.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kannur-travel-guide" },
          about: { "@type": "Place", name: "Kannur", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kannur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Kannur?", a: "Two days covers the beaches, St. Angelo Fort, and (if your dates and a bit of research align) a Theyyam performance. Add a day to combine with nearby Bekal for a fuller North Kerala trip." },
  { q: "What is Theyyam and can tourists watch it?", a: "Theyyam is a centuries-old ritual dance-worship art form unique to North Kerala, in which performers undergo elaborate transformation and are, during the ritual, regarded by devotees as manifestations of deities. Tourists can generally watch respectfully at temple/shrine (kavu) locations, but these are active religious rituals, not staged shows — dress and behave accordingly, and check current schedules locally rather than assuming a fixed calendar." },
  { q: "When is Theyyam season?", a: "Peak Theyyam season generally runs roughly December to April at most kavus, though the exact ritual calendar varies by temple and shrine — verify current schedules through local sources or your accommodation before planning a trip around it." },
  { q: "How do I reach Kannur?", a: "Kannur International Airport (CNN) serves the town directly, and Kannur is also a major railway station on the Konkan coastal line, well connected by road via NH66." },
  { q: "What is Muzhappilangad Drive-in Beach?", a: "One of Asia's longest drive-on beaches, where vehicles are permitted to drive directly on the sand within designated areas — a distinctive Kannur experience, though it should be done only where and how local rules permit." },
  { q: "What is the budget for a trip to Kannur?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,000 a day. Infrastructure here is more modest than South Kerala's tourist hubs." },
  { q: "Is Kannur good for a quieter Kerala experience?", a: "Yes — Kannur offers a genuinely quieter, more authentic slice of Kerala compared to the heavily-touristed Kochi-Munnar-Alleppey circuit, with fewer crowds and a stronger sense of local, everyday life." },
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
  { id: "introduction", title: "Why Kannur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kannur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KANNUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for Theyyam viewing, forts, and drive-in beaches",
    emoji: "🥁",
    items: [
      { name: "Modest, Respectful Clothing", description: "Theyyam performances are active religious rituals — modest dress shows appropriate respect as a visiting observer.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Cultural essential", tagColor: "bg-purple-100 text-purple-700", why: "Theyyam is a living devotional tradition, not a tourist performance — dress accordingly." },
      { name: "Comfortable Walking Shoes", description: "For exploring St. Angelo Fort and Kannur's handloom weaving villages.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "Fort grounds and village walks both reward sturdy, comfortable footwear." },
      { name: "Swimwear & Beach Sandals", description: "For Payyambalam Beach and Muzhappilangad Drive-in Beach.", price: "₹699", rating: 4.4, reviews: "4.0k", image: "🏖️", affiliateUrl: amazonSearchUrl("beach+sandals+travel"), tag: "Beach essential", tagColor: "bg-sky-100 text-sky-700", why: "Kannur's beaches are genuinely swimmable and quiet outside monsoon season." },
      { name: "Camera", description: "For Theyyam's striking costumes and makeup (where photography is permitted) and the fort's coastal views.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("travel+camera+photography"), tag: "Cultural essential", tagColor: "bg-forest-100 text-forest-700", why: "Theyyam's visual intensity is genuinely one-of-a-kind, worth capturing respectfully." },
    ],
  },
];

export default function KannurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/hero.jpg" alt="Coastal scenery representative of Kannur, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kannur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kannur", "Theyyam", "Off-beat", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kannur Travel Guide: Theyyam, Beaches & Handloom Heritage
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A ritual dance-form where performers are worshipped as living deities, near-empty beaches, and centuries-old handloom weaving villages — everything you need to plan a trip to Kannur.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kannur, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Kannur?</h2>
                  <p>
                    <strong>Kannur</strong> is home to <strong>Theyyam</strong>, a centuries-old ritual art form found nowhere else in India in quite this way — performers undergo elaborate costume and makeup transformation and are, during the ritual itself, regarded by devotees as manifestations of deities. It's a genuinely distinctive cultural experience, performed on a seasonal calendar at specific temple and shrine (kavu) locations across North Kerala.
                  </p>
                  <p>
                    Beyond Theyyam, Kannur offers some of Kerala's quieter beaches (including Muzhappilangad, one of Asia's longest drive-on beaches), a Portuguese-built coastal fort, and a long-standing handloom weaving tradition — altogether a more authentic, less-touristed slice of Kerala than the well-worn Kochi-Munnar-Alleppey circuit.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🥁</span> Kannur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🥁", label: "Known For", value: "Theyyam ritual art form" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kannur (CNN)" },
                        { icon: "🏖️", label: "Signature Beach", value: "Muzhappilangad Drive-in Beach" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kannur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable weather that overlaps with peak Theyyam season at most kavus (verify current schedules locally)." },
                      { season: "Dec – Apr", emoji: "🥁", color: "bg-purple-50 border-purple-200", mood: "Theyyam season (general)", text: "The broadest window for Theyyam performances, though the exact ritual calendar varies by temple." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain limits beach time and outdoor sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> If Theyyam is a priority, verify current performance schedules through local sources or your accommodation before finalizing dates — the ritual calendar is temple-specific, not a fixed tourist schedule.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kannur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kannur International Airport (CNN) serves the town directly.</li>
                    <li><strong>By Train:</strong> Kannur is a major railway station on the Konkan coastal line.</li>
                    <li><strong>By Road:</strong> Well connected via NH66.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Research current Theyyam performance schedules and locations in advance — your accommodation can often help identify a genuine, currently-scheduled performance to attend respectfully.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kannur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/hero.jpg" alt="Coastline and beach scenery near Kannur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Theyyam performances:</strong> Kannur's defining cultural experience — check current schedules and attend respectfully as an observer of an active religious ritual.</li>
                    <li><strong>Muzhappilangad Drive-in Beach:</strong> One of Asia's longest drive-on beaches, a distinctive Kannur experience within designated, permitted areas.</li>
                    <li><strong>Payyambalam Beach:</strong> A calmer town beach, good for an evening walk.</li>
                    <li><strong>St. Angelo Fort:</strong> A Portuguese-built coastal fort with sea views.</li>
                    <li><strong>Handloom weaving villages:</strong> Traditional textile cooperative villages that can be visited to see the craft firsthand.</li>
                    <li><strong>Parassinikadavu Snake Park:</strong> A nearby park worth a visit for those interested in reptiles and local wildlife.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kannur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Guesthouses in Kannur town", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Beachfront mid-range hotels", "Homestays near Muzhappilangad"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["A handful of premium coastal resorts"] },
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
                  <h2>What to Eat in Kannur</h2>
                  <ul>
                    <li><strong>Malabar cuisine:</strong> Kannur sits in the heart of the Malabar region, known for biryani, meat curries, and distinctive spicing.</li>
                    <li><strong>Fresh seafood:</strong> Widely available given the town's coastal location.</li>
                    <li><strong>Local tea shops and bakeries:</strong> A staple of everyday Kannur life, good for a casual snack between sightseeing stops.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kannur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fort & Beaches", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: St. Angelo Fort", "Evening: Payyambalam Beach or Muzhappilangad Drive-in Beach"] },
                      { day: "Day 2", title: "Theyyam & Heritage", color: "bg-forest-600", activities: ["Morning: handloom weaving village visit", "Evening: attend a Theyyam performance if current schedules align", "Departure"] },
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
                          ["Accommodation/night", "₹1,100", "₹3,500", "₹8,500"],
                          ["Food/day", "₹350", "₹900", "₹2,000"],
                          ["Local transport per day", "₹150", "₹500", "₹1,200"],
                          ["Daily total", "₹1,600", "₹4,000", "₹10,000"],
                          ["2-Day trip total", "₹3,200", "₹8,000", "₹20,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Theyyam viewing itself typically involves no direct cost, though donations at the shrine are customary.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kannur</h2>
                  <ul>
                    <li><strong>Verify Theyyam schedules locally:</strong> The ritual calendar is temple-specific and not a fixed tourist timetable.</li>
                    <li><strong>Dress and behave respectfully at performances:</strong> These are active religious rituals, not staged shows for tourists.</li>
                    <li><strong>Drive Muzhappilangad Beach only where permitted:</strong> Follow posted rules and designated driving zones.</li>
                    <li><strong>Set modest expectations:</strong> Kannur's infrastructure is more low-key than South Kerala's tourist hubs — that's part of its appeal.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Research current Theyyam schedules before you go", "Dress and behave respectfully at any performance", "Drive Muzhappilangad Beach only in permitted zones", "Visit a handloom weaving village for genuine craft heritage", "Combine with Bekal for a fuller North Kerala trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Treat a Theyyam performance as a staged tourist show", "Assume a fixed, year-round performance schedule", "Drive on undesignated stretches of the beach", "Expect South Kerala-level nightlife or crowds", "Skip verifying current details before planning a Theyyam-focused trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kannur", "Theyyam", "Off-beat", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KANNUR_GEAR} destination="Kannur" />
              <RelatedPostsGrid currentSlug="kannur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kannur-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
