// src/app/blog/sakleshpur-travel-guide/page.tsx
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

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sakleshpur Travel Guide: Coffee Trails, Railway Trek & Waterfalls",
  description:
    "The complete Sakleshpur travel guide. The Green Route railway trek, Manjarabad Fort, Bisle Ghat, coffee estate homestays, where to stay, best time to visit, and a full 2-day itinerary through Karnataka's coffee country.",
  keywords:
    "Sakleshpur travel guide, Green Route railway trek, Manjarabad Fort, Bisle Ghat, Sakleshpur coffee estate, best time to visit Sakleshpur, how to reach Sakleshpur, Karnataka weekend trip",
  openGraph: {
    title: "Sakleshpur Travel Guide: Coffee Trails, Railway Trek & Waterfalls",
    description:
      "A misty Western Ghats coffee town famous for an abandoned railway trek through tunnels and bridges — the complete guide to Sakleshpur.",
    url: "https://club.kudozz.in/blog/sakleshpur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Misty hill and forest scenery representative of Sakleshpur, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakleshpur Travel Guide: Coffee Trails, Railway Trek & Waterfalls",
    description: "Coffee country, a star-shaped fort, and an old railway trek — the complete guide to Sakleshpur.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sakleshpur-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Sakleshpur Travel Guide: Coffee Trails, Railway Trek & Waterfalls",
          description: "The complete Sakleshpur travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/sakleshpur-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Sakleshpur",
            address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Sakleshpur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is the Sakleshpur railway trek still open?",
    a: "Access to the old Green Route railway alignment has varied over time and can depend on current permissions — verify its current status with a local operator or the railway authorities before planning a trip specifically around it.",
  },
  {
    q: "How many days do I need in Sakleshpur?",
    a: "Two days covers Manjarabad Fort, a coffee estate visit, and either the railway trek or the Bisle Ghat viewpoint comfortably. It works well as a weekend trip from Bengaluru.",
  },
  {
    q: "What is the best time to visit Sakleshpur?",
    a: "October to March is best for trekking and clear viewpoint conditions. The monsoon (June–September) is lush and atmospheric but trails get slippery and some access may be restricted.",
  },
  {
    q: "How do I reach Sakleshpur?",
    a: "The nearest airport is Mangaluru (~110km); Bengaluru's airport is roughly 220km. Sakleshpur has its own railway station, and it's a popular weekend road trip from Bengaluru.",
  },
  {
    q: "What is Manjarabad Fort known for?",
    a: "It's a distinctive star-shaped (octagonal) fort built by Tipu Sultan, notable for its unusual layout compared to the more common rectangular forts of the era.",
  },
  {
    q: "What is the budget for a trip to Sakleshpur?",
    a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range coffee-estate homestay trip closer to ₹4,000 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹8,000 mid-range, excluding transport to the region.",
  },
  {
    q: "Is Sakleshpur good for a family trip?",
    a: "Manjarabad Fort, coffee estate tours, and the Bisle Ghat viewpoint are all manageable for most ages. The railway trek, where accessible, is more suited to fitter travelers given the walking distance and tunnel sections.",
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
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Sakleshpur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sakleshpur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ──────────────────────────────────────────────────────────────────────
const SAKLESHPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for coffee-country trails, tunnels, and viewpoints",
    emoji: "☕",
    items: [
      {
        name: "Sturdy Trekking Shoes",
        description: "Essential for the railway trek's uneven ballast track and any coffee-estate trail walking.",
        price: "₹3,299",
        rating: 4.5,
        reviews: "6.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+men+women"),
        tag: "Trek essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The old railway alignment's gravel and ballast surface is hard on regular sneakers over any distance.",
      },
      {
        name: "Headlamp / Torch",
        description: "For the tunnel sections of the railway trek, where accessible — some stretches run genuinely dark inside.",
        price: "₹599",
        rating: 4.4,
        reviews: "4.1k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("headlamp+torch+trekking"),
        tag: "Tunnel essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Phone flashlights aren't a reliable substitute for a proper headlamp inside the longer tunnel stretches.",
      },
      {
        name: "Rain Jacket / Poncho",
        description: "Sakleshpur's Western Ghats location means sudden showers are common even outside peak monsoon.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Weather can shift quickly across the misty coffee-estate hills." ,
      },
      {
        name: "Light Warm Layer",
        description: "Mornings and evenings in the estate country get noticeably cool, even though this is South India.",
        price: "₹1,299",
        rating: 4.3,
        reviews: "3.2k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("light+fleece+jacket+travel"),
        tag: "Comfort essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Coffee-estate elevation keeps early mornings genuinely chilly for a South Indian destination." ,
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SakleshpurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Misty hill and forest scenery representative of Sakleshpur, Karnataka"
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
                { label: "Sakleshpur", href: null },
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
              {["Sakleshpur", "Coffee Trails", "Off-beat", "Trekking", "Karnataka"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sakleshpur Travel Guide: Coffee Trails, Railway Trek & Waterfalls
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A misty Western Ghats coffee town famous for an old railway alignment cutting through tunnels and bridges — everything you need to plan a trip to Sakleshpur.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Sakleshpur, Karnataka" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Sakleshpur?</h2>
                  <p>
                    <strong>Sakleshpur</strong> sits in Karnataka's Western Ghats coffee belt, a misty, plantation-covered hill town that's become a popular weekend escape from Bengaluru. Its best-known draw is the <strong>Green Route</strong>, a British-era railway alignment cutting through a series of tunnels and bridges across forested terrain — one of South India's most distinctive trekking experiences where it's accessible.
                  </p>
                  <p>
                    Beyond the trek, Sakleshpur offers a genuinely photogenic star-shaped fort, coffee and spice estate homestays, and viewpoints where three districts meet on a clear day.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>☕</span> Sakleshpur at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🏰", label: "Key Site", value: "Manjarabad Fort" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Mangaluru (~110km)" },
                        { icon: "🚂", label: "Signature Trail", value: "Green Route railway trek" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
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
                  <h2>Best Time to Visit Sakleshpur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Clear skies and comfortable temperatures, ideal for trekking and viewpoint visits." },
                      { season: "Apr – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warm", text: "Warmer, but still workable, with fewer crowds than peak winter weekends." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but slippery", text: "The plantation hills turn vivid green, but trails get muddy and some access may be restricted." },
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
                  <blockquote><strong>Our pick:</strong> October to March — the most reliable window for both trekking conditions and clear viewpoint visibility.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sakleshpur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mangaluru is the nearest airport, about 110km away; Bengaluru's airport is roughly 220km.</li>
                    <li><strong>By Train:</strong> Sakleshpur has its own railway station with reasonable connections.</li>
                    <li><strong>By Road:</strong> A straightforward drive from Bengaluru or Mangaluru — a popular weekend road trip from Bengaluru in particular.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Verify the current access/permit status of the Green Route railway trek with a local operator before planning your trip specifically around it — its official openness has varied over time.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Sakleshpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Coffee estate hills around Sakleshpur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Green Route railway trek:</strong> A trek along a decommissioned/reduced-use British-era railway alignment through numerous tunnels and bridges — verify current access before planning around it.</li>
                    <li><strong>Manjarabad Fort:</strong> A distinctive star-shaped fort built by Tipu Sultan, notable for its unusual octagonal layout.</li>
                    <li><strong>Bisle Ghat viewpoint:</strong> A scenic spot where three districts meet, popular for sunrise and sunset.</li>
                    <li><strong>Coffee estate homestays and tours:</strong> Guided walks through working coffee and spice plantations.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Sakleshpur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic lodges in town", "Budget homestays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Coffee estate homestays", "Mid-range resort stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night", picks: ["Premium plantation resorts", "Boutique estate stays"] },
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
                  <blockquote>A coffee estate homestay is the most authentic way to experience Sakleshpur — many include plantation walks and home-cooked meals.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Sakleshpur</h2>
                  <ul>
                    <li><strong>Estate-grown filter coffee:</strong> Freshly brewed coffee sourced directly from the plantations you're touring.</li>
                    <li><strong>Homestay-cooked meals:</strong> Most coffee estate homestays serve home-style Karnataka food as part of the stay.</li>
                    <li><strong>Local Malnad-style dishes:</strong> Regional specialties reflecting the Western Ghats hill-country cuisine.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Sakleshpur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fort & Estate", color: "bg-amber-700", activities: ["Arrive, check in at a coffee estate homestay", "Afternoon: Manjarabad Fort", "Evening: plantation walk and coffee tasting"] },
                      { day: "Day 2", title: "Trek or Viewpoint", color: "bg-forest-600", activities: ["Morning: Green Route trek (if accessible) or Bisle Ghat viewpoint", "Afternoon: departure"] },
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
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}
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
                          ["Accommodation/night", "₹800", "₹3,000", "₹6,500"],
                          ["Food/day", "₹350", "₹800", "₹1,600"],
                          ["Local transport per day", "₹350", "₹700", "₹1,200"],
                          ["Daily total", "₹1,500", "₹4,000", "₹8,500"],
                          ["2-Day trip total", "₹3,000", "₹8,000", "₹17,000"],
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
                  <h2>Essential Travel Tips for Sakleshpur</h2>
                  <ul>
                    <li><strong>Verify railway trek access before you go:</strong> Its openness has varied over time — check with a local operator or the railway authorities.</li>
                    <li><strong>Book a coffee estate homestay:</strong> The most authentic and comfortable way to experience the region.</li>
                    <li><strong>Carry a torch for any tunnel sections:</strong> Some stretches of the old railway line run genuinely dark.</li>
                    <li><strong>Pack a light warm layer:</strong> Mornings and evenings get cool even though this is South India.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify railway trek access before planning around it", "Book a coffee estate homestay", "Carry a proper torch for tunnel sections", "Visit Manjarabad Fort for the unusual star-shaped layout", "Pack a light warm layer for mornings"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume the railway trek is open without checking first", "Attempt tunnel sections without a proper light source", "Underestimate the terrain on the old ballast track", "Skip a coffee estate visit — it's the region's signature experience", "Visit expecting Munnar-level tourist infrastructure"].map((item) => (
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
                {["Sakleshpur", "Coffee Trails", "Railway Trek", "Karnataka", "Off-beat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SAKLESHPUR_GEAR} destination="Sakleshpur" />

              <RelatedPostsGrid currentSlug="sakleshpur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sakleshpur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
