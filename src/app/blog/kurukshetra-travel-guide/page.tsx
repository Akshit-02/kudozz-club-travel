// src/app/blog/kurukshetra-travel-guide/page.tsx
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
  title: "Kurukshetra Travel Guide: Bhagavad Gita's Battlefield & Brahma Sarovar",
  description:
    "The complete Kurukshetra travel guide. Jyotisar, Brahma Sarovar, the Kurukshetra Panorama Science Centre, where to stay, best time to visit, and a full itinerary through the legendary Mahabharata battlefield.",
  keywords:
    "Kurukshetra travel guide, Jyotisar, Brahma Sarovar, Bhagavad Gita site, Gita Jayanti, Kurukshetra Panorama Science Centre, best time to visit Kurukshetra, how to reach Kurukshetra",
  openGraph: {
    title: "Kurukshetra Travel Guide: Bhagavad Gita's Battlefield & Brahma Sarovar",
    description: "The ground where the Bhagavad Gita is said to have been spoken, and a sacred tank where millions gather for a solar-eclipse bathing ritual — the complete guide to Kurukshetra.",
    url: "https://club.kudozz.in/blog/kurukshetra-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Sacred water tank and temple architecture representative of Kurukshetra, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurukshetra Travel Guide: Bhagavad Gita's Battlefield & Brahma Sarovar",
    description: "Jyotisar, Brahma Sarovar, and the legendary Mahabharata battlefield — the complete guide to Kurukshetra.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kurukshetra-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kurukshetra Travel Guide: Bhagavad Gita's Battlefield & Brahma Sarovar",
          description: "The complete Kurukshetra travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kurukshetra-travel-guide" },
          about: { "@type": "Place", name: "Kurukshetra", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kurukshetra Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Kurukshetra?",
    a: "One to two days covers Jyotisar, Brahma Sarovar, and the Panorama Science Centre comfortably. A second day allows a relaxed pace and a stop at Sheikh Chilli's Tomb.",
  },
  {
    q: "What is the best time to visit Kurukshetra?",
    a: "October to March offers the most comfortable weather for temple and ghat visits. If you want to see a major gathering, check the Hindu calendar for solar eclipse dates or the Gita Jayanti/International Gita Mahotsav period, which typically falls around Kartik Purnima.",
  },
  {
    q: "How do I reach Kurukshetra?",
    a: "Kurukshetra Junction is a major railway station on the Delhi-Ambala line, the most practical way to arrive. The nearest airports are Chandigarh (~90km) and Delhi (~160km), and road access via NH44 is straightforward.",
  },
  {
    q: "What is Jyotisar?",
    a: "The site traditionally identified as where Krishna delivered the Bhagavad Gita to Arjuna before the Mahabharata war, marked today by a sacred banyan tree believed to be a descendant of the original.",
  },
  {
    q: "What is Brahma Sarovar?",
    a: "One of the largest and holiest water tanks in India, central to Kurukshetra's pilgrimage significance and the site of massive crowds during solar eclipses for ritual bathing.",
  },
  {
    q: "Can I combine Kurukshetra with other nearby destinations?",
    a: "Yes — Panipat, another historically significant NH44 town, is a natural stop on the same route, and Kurukshetra itself is a reasonable day trip from Chandigarh or a stop en route from Delhi.",
  },
  {
    q: "What is the budget for a trip to Kurukshetra?",
    a: "A budget traveler can manage on roughly ₹1,200 a day, a mid-range trip closer to ₹3,000 a day. Costs and crowds both rise significantly during major festival or eclipse dates.",
  },
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
  { id: "introduction", title: "Why Kurukshetra?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kurukshetra", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KURUKSHETRA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple visits and ghat-side pilgrimage sites",
    emoji: "🛕",
    items: [
      {
        name: "Modest Cotton Clothing",
        description: "Kurukshetra is an active pilgrimage town — modest dress is expected at Brahma Sarovar and the surrounding temples.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("modest+cotton+travel+clothing"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "This is a genuine pilgrimage site, not a leisure destination — respectful dress matters more here.",
      },
      {
        name: "Comfortable Walking Shoes",
        description: "For covering ground between Jyotisar, Brahma Sarovar, and the Panorama Science Centre, which are spread across the town.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The main sites are a short drive apart but each involves a fair amount of walking on-site.",
      },
      {
        name: "Small Bag for Shoes/Valuables",
        description: "Useful at Brahma Sarovar and other ghat-side temple areas where footwear needs to come off.",
        price: "₹299",
        rating: 4.3,
        reviews: "2.8k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("small+travel+pouch+bag"),
        tag: "Ghat essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Managing footwear and valuables at busy ghat areas is far easier with a dedicated small bag.",
      },
      {
        name: "Reusable Water Bottle",
        description: "For a full day of walking between the town's spread-out religious and historical sites.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Kurukshetra's sites are spread across the town, and summer/pre-monsoon heat can be significant.",
      },
    ],
  },
];

export default function KurukshetraGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Sacred water tank and temple architecture representative of Kurukshetra, Haryana"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Kurukshetra", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kurukshetra", "Brahma Sarovar", "Heritage", "Haryana"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kurukshetra Travel Guide: Bhagavad Gita's Battlefield & Brahma Sarovar
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The ground where the Bhagavad Gita is said to have been spoken, and a sacred tank where millions
              gather for a solar-eclipse bathing ritual.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kurukshetra, Haryana" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Kurukshetra?</h2>
                  <p>
                    <strong>Kurukshetra</strong> is the legendary site of the Mahabharata war, and — for Hindus
                    worldwide — the ground where Krishna is said to have delivered the <strong>Bhagavad Gita</strong>{" "}
                    to Arjuna at Jyotisar, one of Hindu philosophy's most foundational texts. That single association
                    makes this modest Haryana town a genuinely significant pilgrimage and cultural destination, far
                    beyond its physical size.
                  </p>
                  <p>
                    At its heart is <strong>Brahma Sarovar</strong>, one of the largest and holiest water tanks in
                    India, which draws enormous crowds for ritual bathing especially around solar eclipses — a
                    genuine spectacle if your visit happens to align with one.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🛕</span> Kurukshetra at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🛕", label: "Key Site", value: "Jyotisar & Brahma Sarovar" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Kurukshetra Junction" },
                        { icon: "📖", label: "Significance", value: "Bhagavad Gita site" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kurukshetra</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for temple and ghat visits without summer heat." },
                      { season: "Kartik Purnima", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Gita Jayanti season", text: "The International Gita Mahotsav is typically held around this period — verify current-year dates, expect large crowds." },
                      { season: "Solar eclipse dates", emoji: "🌘", color: "bg-purple-50 border-purple-200", mood: "Massive gathering", text: "Brahma Sarovar sees enormous crowds for ritual bathing during solar eclipses — check the eclipse calendar if timing your trip around this." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-sky-50 border-sky-200", mood: "Hot", text: "North Indian plains heat makes extended outdoor walking uncomfortable." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to March for a calm visit, or time it around Gita Jayanti or
                    a solar eclipse if you want to witness Kurukshetra at its most crowded and spiritually charged
                    — just verify current-year dates first.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kurukshetra</h2>
                  <ul>
                    <li><strong>By Train:</strong> Kurukshetra Junction, on the Delhi-Ambala line, is the most practical way to arrive.</li>
                    <li><strong>By Air:</strong> Chandigarh Airport (~90km) or Delhi (~160km) are the nearest airports.</li>
                    <li><strong>By Road:</strong> Well connected via NH44, the main Delhi-Chandigarh-Amritsar highway.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine with Panipat, another historically significant town on the
                    same NH44 route — a natural addition if you're driving through.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kurukshetra</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Temple and water-tank architecture in Kurukshetra"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Jyotisar:</strong> The site traditionally identified as where Krishna spoke the Bhagavad Gita, marked by a sacred banyan tree.</li>
                    <li><strong>Brahma Sarovar:</strong> One of India's largest and holiest water tanks, the spiritual centre of Kurukshetra.</li>
                    <li><strong>Sannihit Sarovar:</strong> Another significant sacred tank near Brahma Sarovar.</li>
                    <li><strong>Kurukshetra Panorama and Science Centre:</strong> A museum interpreting the Mahabharata war and the site's history.</li>
                    <li><strong>Sheikh Chilli's Tomb:</strong> A Mughal-era tomb complex, a notable contrast to the town's Hindu pilgrimage sites.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kurukshetra</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Dharamshala-style pilgrim stays", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Mid-range hotels near Brahma Sarovar", "Business hotels along NH44"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options remain limited in this pilgrimage town"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Kurukshetra</h2>
                  <ul>
                    <li><strong>Vegetarian pilgrim-town fare:</strong> Simple, wholesome thalis are the norm here given the town's religious character.</li>
                    <li><strong>Haryanvi staples:</strong> Bajra khichdi and other regional dishes at local eateries.</li>
                    <li><strong>North Indian standards:</strong> Widely available at hotels and roadside restaurants.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kurukshetra Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Jyotisar & Brahma Sarovar", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Jyotisar and the sacred banyan tree", "Afternoon: Brahma Sarovar and Sannihit Sarovar"] },
                      { day: "Day 2", title: "History & Departure", color: "bg-forest-600", activities: ["Morning: Kurukshetra Panorama and Science Centre", "Late morning: Sheikh Chilli's Tomb", "Afternoon: departure"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹800", "₹2,500"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹200", "₹500"],
                          ["Daily total", "₹1,200", "₹3,000"],
                          ["2-Day trip total", "₹2,400", "₹6,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Costs and crowds rise notably during major festival/eclipse dates.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kurukshetra</h2>
                  <ul>
                    <li><strong>Check the Hindu calendar:</strong> Verify current-year dates for solar eclipses or Gita Jayanti if timing your trip around either.</li>
                    <li><strong>Dress modestly:</strong> This is an active pilgrimage town, not a leisure destination.</li>
                    <li><strong>Combine with Panipat:</strong> A short drive away on the same NH44 route.</li>
                    <li><strong>Visit early morning:</strong> Brahma Sarovar and Jyotisar are most peaceful before the day's crowds build.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify current festival/eclipse dates before planning around them", "Dress modestly throughout the town", "Visit Brahma Sarovar early morning for a calmer experience", "Combine with a Panipat stop on the same route", "Try local Haryanvi vegetarian fare"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume major festivals follow fixed Gregorian dates every year", "Wear beachwear-style clothing near the temples/ghats", "Visit expecting Himachal-scale luxury stays", "Skip advance planning if traveling during Gita Jayanti", "Ignore crowd-management guidance during eclipse dates"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
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
                {["Kurukshetra", "Brahma Sarovar", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KURUKSHETRA_GEAR} destination="Kurukshetra" />

              <RelatedPostsGrid currentSlug="kurukshetra-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kurukshetra-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
