// src/app/blog/gurugram-travel-guide/page.tsx
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
  title: "Gurugram Travel Guide: Cyber City, Kingdom of Dreams & Malls",
  description:
    "The complete Gurugram travel guide. Cyber Hub, Kingdom of Dreams, Aravalli Biodiversity Park, where to stay, best time to visit, and a full itinerary through India's corporate capital.",
  keywords:
    "Gurugram travel guide, Cyber Hub Gurugram, Kingdom of Dreams, Gurugram malls, best time to visit Gurugram, how to reach Gurugram, Gurugram itinerary, Delhi NCR travel",
  openGraph: {
    title: "Gurugram Travel Guide: Cyber City, Kingdom of Dreams & Malls",
    description: "A farmland-turned-skyline transformed into India's corporate hub in a generation, with a Bollywood-themed live entertainment venue unlike anything else in North India — the complete guide to Gurugram.",
    url: "https://club.kudozz.in/blog/gurugram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/chandigarh/hero.jpg", width: 1200, height: 630, alt: "Modern skyline representative of Gurugram, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurugram Travel Guide: Cyber City, Kingdom of Dreams & Malls",
    description: "Cyber Hub, Kingdom of Dreams, and India's corporate capital — the complete guide to Gurugram.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/gurugram-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Gurugram Travel Guide: Cyber City, Kingdom of Dreams & Malls",
          description: "The complete Gurugram travel guide.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/gurugram-travel-guide" },
          about: { "@type": "Place", name: "Gurugram", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Gurugram Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Gurugram?",
    a: "One to two days covers Cyber Hub, a mall or two, and Kingdom of Dreams comfortably. Most visitors combine it with a Delhi trip given the short metro connection.",
  },
  {
    q: "What is the best time to visit Gurugram?",
    a: "October to March offers the most comfortable weather — Delhi-NCR summers get very hot and monsoon brings high humidity, making winter the clear pick for outdoor walking between venues.",
  },
  {
    q: "How do I reach Gurugram?",
    a: "Indira Gandhi International Airport in Delhi is the nearest airport, roughly 15-20km away depending on the sector. Delhi Metro's Rapid Metro and Yellow Line connect Gurugram directly, and NH48 links it to Delhi by road.",
  },
  {
    q: "Is Gurugram worth visiting as a tourist, or is it purely a business city?",
    a: "It's primarily a corporate and residential hub, but Kingdom of Dreams, Cyber Hub's dining scene, and its malls give it a genuine leisure dimension — worth a day or two, especially combined with Delhi sightseeing.",
  },
  {
    q: "What is Kingdom of Dreams?",
    a: "A large-scale Bollywood-themed live entertainment and cultural venue combining theatre performances, cultural shows, and a food-and-shopping zone called Culture Gully — genuinely distinctive and unlike typical mall entertainment.",
  },
  {
    q: "Is traffic a problem in Gurugram?",
    a: "Yes — Gurugram's traffic can be heavy, especially during peak commuting hours. Budget extra time between destinations and consider using the Metro where routes align.",
  },
  {
    q: "What is the budget for a trip to Gurugram?",
    a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day including a Kingdom of Dreams visit and Cyber Hub dining, and a luxury stay can run ₹10,000+ a day.",
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
  { id: "introduction", title: "Why Gurugram?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gurugram", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GURUGRAM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for mall-hopping and Cyber Hub's evening scene",
    emoji: "🏙️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "Malls and Cyber Hub involve a surprising amount of walking across large complexes — comfort matters over a full day.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "All-day essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Cyber Hub and the larger malls (Ambience, MGF Metropolitan) cover significant ground on foot.",
      },
      {
        name: "Smart-Casual Outfit",
        description: "Cyber Hub's restaurants and Kingdom of Dreams lean toward a smart-casual dress code in the evenings.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "👔",
        affiliateUrl: amazonSearchUrl("smart+casual+outfit+travel"),
        tag: "Evening essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Gurugram's dining and entertainment venues have a noticeably more upscale dress norm than a typical Indian tourist town.",
      },
      {
        name: "Portable Power Bank",
        description: "Useful for a full day of navigation, photos, and metro/cab app usage across a spread-out city.",
        price: "₹899",
        rating: 4.4,
        reviews: "6.8k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("portable+power+bank+travel"),
        tag: "City-travel essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "You'll likely rely heavily on maps and ride-hailing apps getting between Gurugram's spread-out sectors.",
      },
      {
        name: "Light Jacket",
        description: "Winter evenings (the best time to visit) get genuinely chilly, especially outdoors at Kingdom of Dreams or Cyber Hub.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "4.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("light+jacket+winter+travel"),
        tag: "Winter essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Delhi-NCR winter nights drop enough to need a proper layer, even indoors in some venues.",
      },
    ],
  },
];

export default function GurugramGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/chandigarh/hero.jpg"
              alt="Modern skyline representative of Gurugram, Haryana"
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
                { label: "Gurugram", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
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
              {["Gurugram", "Cyber City", "Destination Guide", "Haryana"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Gurugram Travel Guide: Cyber City, Kingdom of Dreams & Malls
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A farmland-turned-skyline transformed into India's corporate hub in a generation, with a Bollywood-themed
              live entertainment venue unlike anything else in North India.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Gurugram, Haryana" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Gurugram?</h2>
                  <p>
                    <strong>Gurugram</strong> (still widely known by its former name, Gurgaon) was farmland just a
                    few decades ago. Today it's one of India's major corporate and tech hubs, home to global
                    company headquarters, a skyline of glass towers, and a genuinely distinct urban character
                    within the Delhi-NCR sprawl — planned, private-sector-built, and unlike almost anywhere else
                    in North India.
                  </p>
                  <p>
                    For visitors, the appeal isn't heritage monuments — it's Cyber Hub's dining scene, a handful of
                    India's biggest malls, and <strong>Kingdom of Dreams</strong>, a large-scale Bollywood-themed
                    entertainment venue that's genuinely one of a kind.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏙️</span> Gurugram at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🎭", label: "Key Site", value: "Kingdom of Dreams" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Delhi (IGI)" },
                        { icon: "🚇", label: "Getting Around", value: "Metro, cabs, ride-hailing" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
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
                  <h2>Best Time to Visit Gurugram</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for walking between Cyber Hub, malls, and outdoor venues." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Very hot", text: "Delhi-NCR summer heat makes extended outdoor time genuinely uncomfortable — stick to indoor venues." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — humid", text: "High humidity and occasional heavy rain can disrupt road travel between sectors." },
                      { season: "Dec – Jan", emoji: "🌫️", color: "bg-purple-50 border-purple-200", mood: "Cold, occasional smog", text: "The coolest weather, though Delhi-NCR's winter air quality can dip — check current conditions if this concerns you." },
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
                    <strong>Our pick:</strong> October to March — comfortable temperatures for a mix of indoor and
                    outdoor sightseeing across the city.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Gurugram</h2>
                  <ul>
                    <li><strong>By Air:</strong> Indira Gandhi International Airport (Delhi) is the nearest, roughly 15-20km from most Gurugram sectors depending on traffic.</li>
                    <li><strong>By Metro:</strong> The Rapid Metro and Delhi Metro's Yellow Line connect Gurugram directly to Delhi.</li>
                    <li><strong>By Road:</strong> NH48 links Gurugram to Delhi and onward toward Jaipur — well connected, though traffic can be heavy during peak hours.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Use the Metro where your route aligns with it — road traffic between Gurugram sectors during rush hour can add significant, unpredictable time to any trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Gurugram</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Modern architecture in Gurugram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Kingdom of Dreams:</strong> A Bollywood-themed live entertainment venue combining theatre performances, cultural shows, and a food-and-shopping zone called Culture Gully — genuinely distinctive, not a typical mall attraction.</li>
                    <li><strong>Cyber Hub:</strong> Gurugram's major open-air dining and nightlife cluster, popular with the corporate crowd for evenings out.</li>
                    <li><strong>Gurugram's malls:</strong> Ambience Mall and MGF Metropolitan among the city's biggest shopping destinations.</li>
                    <li><strong>Aravalli Biodiversity Park:</strong> An urban green space and a rare pocket of nature within the built-up city.</li>
                    <li><strong>Sheetla Mata Mandir:</strong> An older temple that predates Gurugram's corporate skyline, offering a contrast to the modern city around it.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Gurugram</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Budget business hotels", "Chain economy hotels near sector roads"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹3,500–₹7,000/night", picks: ["Business hotels near Cyber Hub", "Mid-range chains near the malls"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹20,000+/night", picks: ["International 5-star chains", "Premium business hotels"] },
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
                  <h2>What to Eat in Gurugram</h2>
                  <p>
                    Gurugram's food scene is genuinely cosmopolitan — international chains and independent
                    restaurants concentrated around Cyber Hub and the mall food courts.
                  </p>
                  <ul>
                    <li><strong>Cyber Hub dining:</strong> A wide mix of Indian and international cuisines across dozens of restaurants and bars.</li>
                    <li><strong>Kingdom of Dreams' Culture Gully:</strong> A food street inside the venue offering regional Indian dishes.</li>
                    <li><strong>Murthal-style dhaba food:</strong> A short drive away on NH44, worth the detour if you want an authentic Haryanvi highway-dhaba experience.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Gurugram Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Malls & Kingdom of Dreams", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: mall visit (Ambience/MGF Metropolitan)", "Evening: Kingdom of Dreams show"] },
                      { day: "Day 2", title: "Cyber Hub & Green Spaces", color: "bg-forest-600", activities: ["Morning: Aravalli Biodiversity Park", "Afternoon: Sheetla Mata Mandir", "Evening: dinner at Cyber Hub"] },
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
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,800", "₹4,500", "₹12,000"],
                          ["Food/day", "₹700", "₹1,800", "₹4,000"],
                          ["Local transport per day", "₹300", "₹800", "₹2,000"],
                          ["Kingdom of Dreams entry", "₹700+", "₹1,200+", "₹2,500+"],
                          ["Daily total", "₹1,800", "₹4,500", "₹10,500"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹21,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights to Delhi.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Gurugram</h2>
                  <ul>
                    <li><strong>Plan around traffic:</strong> Peak-hour road congestion is a genuine factor — budget buffer time between destinations.</li>
                    <li><strong>Book Kingdom of Dreams tickets ahead:</strong> Popular shows can sell out, especially on weekends.</li>
                    <li><strong>Use the Metro where possible:</strong> More predictable than road traffic for cross-city trips.</li>
                    <li><strong>Combine with Delhi:</strong> The short metro connection makes a combined Delhi-Gurugram trip easy to plan.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book Kingdom of Dreams tickets in advance", "Use the Metro for predictable cross-city travel", "Combine your trip with Delhi sightseeing", "Try Cyber Hub's varied dining scene", "Budget extra time for peak-hour traffic"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect heritage monuments — Gurugram is a modern corporate city", "Underestimate rush-hour road traffic", "Skip booking Kingdom of Dreams tickets on weekends", "Plan a trip focused purely on outdoor sightseeing in summer", "Ignore current air-quality advisories in peak winter"].map((item) => (
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
                {["Gurugram", "Cyber City", "Haryana", "Delhi NCR", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GURUGRAM_GEAR} destination="Gurugram" />

              <RelatedPostsGrid currentSlug="gurugram-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gurugram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
