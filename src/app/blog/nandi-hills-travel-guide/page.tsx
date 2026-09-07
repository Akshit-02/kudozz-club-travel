// src/app/blog/nandi-hills-travel-guide/page.tsx
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
  title: "Nandi Hills Travel Guide: Sunrise Point Near Bengaluru",
  description:
    "The complete Nandi Hills travel guide. Sunrise views, Tipu's Drop, Bhoga Nandeeshwara Temple, how to reach, best time to visit, and a half-day itinerary for Bengaluru's favourite early-morning escape.",
  keywords:
    "Nandi Hills travel guide, Nandi Hills sunrise, Tipu's Drop, Bhoga Nandeeshwara Temple, best time to visit Nandi Hills, how to reach Nandi Hills from Bengaluru, Bengaluru weekend trip",
  openGraph: {
    title: "Nandi Hills Travel Guide: Sunrise Point Near Bengaluru",
    description:
      "A fortified hilltop just outside Bengaluru, famous for sunrise views above a sea of clouds — the complete guide to Nandi Hills.",
    url: "https://club.kudozz.in/blog/nandi-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Hilltop viewpoint scenery representative of Nandi Hills, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandi Hills Travel Guide: Sunrise Point Near Bengaluru",
    description: "Bengaluru's favourite early-morning escape — the complete guide to Nandi Hills.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nandi-hills-travel-guide",
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
          headline: "Nandi Hills Travel Guide: Sunrise Point Near Bengaluru",
          description: "The complete Nandi Hills travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
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
            "@id": "https://club.kudozz.in/blog/nandi-hills-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Nandi Hills",
            address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Nandi Hills Travel Guide" },
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
    q: "How early do I need to leave Bengaluru for sunrise at Nandi Hills?",
    a: "Leave by around 4–4:30 AM to comfortably reach the summit before sunrise, accounting for the roughly 1.5-hour drive plus a short walk up from the parking area. Roads can have some traffic even at that hour, so build in a buffer.",
  },
  {
    q: "Is Nandi Hills a day trip or an overnight destination?",
    a: "It's overwhelmingly a day-trip (often a half-day, pre-dawn) destination from Bengaluru. Overnight stays right at the hilltop are limited, so most visitors return to Bengaluru the same day.",
  },
  {
    q: "What is the best time to see the 'sea of clouds' effect at Nandi Hills?",
    a: "The cloud/mist effect below the summit is most reliable in the cooler months (October–February) and just after the monsoon, though it's weather-dependent on any given day and never fully guaranteed.",
  },
  {
    q: "How do I reach Nandi Hills?",
    a: "It's about 60km from Bengaluru, roughly 1.5 hours by road — the standard and only practical way most travelers reach it, as there's no direct rail or air option.",
  },
  {
    q: "Is Nandi Hills crowded?",
    a: "Weekends, especially for sunrise, get busy with both organized groups and independent travelers from Bengaluru. A weekday visit is noticeably quieter.",
  },
  {
    q: "What is the budget for a Nandi Hills trip?",
    a: "This is a low-cost outing given its day-trip nature — budget roughly ₹500–1,500 per person for transport, entry, and food, excluding any private cab hire.",
  },
  {
    q: "What else can I combine with Nandi Hills?",
    a: "Bhoga Nandeeshwara Temple at the base of the hill is a natural and worthwhile add-on, easily visited on the same trip.",
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
  { id: "introduction", title: "Why Nandi Hills?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nandi Hills", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ──────────────────────────────────────────────────────────────────────
const NANDI_HILLS_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a pre-dawn drive and a cool hilltop sunrise",
    emoji: "🌄",
    items: [
      {
        name: "Light Warm Layer / Jacket",
        description: "The summit is noticeably cool before sunrise, even though Bengaluru itself rarely feels cold.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "4.6k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("light+jacket+travel+outdoor"),
        tag: "Pre-dawn essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The elevation and pre-dawn timing make Nandi Hills genuinely chilly compared to the city below.",
      },
      {
        name: "Comfortable Walking Shoes",
        description: "For the short walk from the parking area to the summit viewpoints, including some uneven fort terrain.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Comfort essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The fort area has some uneven stone paths and steps worth having proper footwear for." ,
      },
      {
        name: "Insulated Flask",
        description: "For carrying hot coffee or tea on the pre-dawn drive and while waiting for sunrise at the top.",
        price: "₹699",
        rating: 4.5,
        reviews: "3.9k",
        image: "☕",
        affiliateUrl: amazonSearchUrl("insulated+flask+travel"),
        tag: "Pre-dawn essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Few food/drink options are open at the summit before sunrise — a flask solves this easily." ,
      },
      {
        name: "Power Bank",
        description: "For the drive and for photography at the summit — a dead phone battery is a common pre-dawn regret.",
        price: "₹899",
        rating: 4.4,
        reviews: "6.1k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+travel"),
        tag: "Travel essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Navigation and photos both drain battery fast on an early pre-dawn trip." ,
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NandiHillsGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Hilltop viewpoint scenery representative of Nandi Hills, Karnataka"
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
                { label: "Nandi Hills", href: null },
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
              {["Nandi Hills", "Sunrise Point", "Bengaluru", "Karnataka"].map((tag) => (
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
              Nandi Hills Travel Guide: Sunrise Point Near Bengaluru
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A fortified hilltop just outside Bengaluru, famous for sunrise views above a sea of clouds — everything you need to plan the trip.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Nandi Hills, Karnataka" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Nandi Hills?</h2>
                  <p>
                    <strong>Nandi Hills</strong> is Bengaluru's go-to early-morning escape — a fortified hilltop about 60km from the city, built up over an earlier fortification by Tipu Sultan, best known today for sunrise views that, under the right conditions, show clouds settled in the valleys below while the summit itself sits in clear light.
                  </p>
                  <p>
                    It's a quick, low-effort trip by Karnataka standards: no permits, no long drive, and a summit reachable by road right up to a parking area a short walk from the main viewpoints.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🌄</span> Nandi Hills at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🏰", label: "Key Site", value: "Hilltop fort & Tipu's Drop" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "🚗", label: "Distance", value: "~60km from Bengaluru" },
                        { icon: "🛕", label: "Nearby", value: "Bhoga Nandeeshwara Temple" },
                        { icon: "💰", label: "Budget/Trip", value: "₹500 – ₹1,500" },
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
                  <h2>Best Time to Visit Nandi Hills</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☁️", color: "bg-amber-50 border-amber-200", mood: "Best for the 'sea of clouds' — our pick", text: "Cooler months when the mist/cloud effect below the summit is most reliably visible at sunrise." },
                      { season: "Mar – May", emoji: "☀️", color: "bg-orange-50 border-orange-200", mood: "Clear but drier", text: "Warmer and generally clear, though the dramatic cloud effect is less common." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — atmospheric but variable", text: "Fresh green landscape and dramatic skies, but sunrise views are less predictable due to rain and low visibility." },
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
                  <blockquote><strong>Our pick:</strong> October to February — the most reliable window for the classic "clouds below the summit" sunrise photo.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Nandi Hills</h2>
                  <ul>
                    <li><strong>By Road:</strong> About 60km from Bengaluru, roughly 1.5 hours by car — the only practical way in, whether self-driven, by cab, or on an organized sunrise tour.</li>
                    <li><strong>From the airport:</strong> Kempegowda International Airport is actually closer to Nandi Hills than central Bengaluru is, making it a feasible stop for travelers with an early or late flight.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Leave Bengaluru by 4–4:30 AM for a sunrise visit — the drive takes about 1.5 hours and roads can still see some traffic even that early.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Nandi Hills</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Hilltop viewpoint at sunrise, representative of Nandi Hills"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Sunrise viewpoints:</strong> The main reason most people make the trip — arrive before dawn for the best light and the cloud-below-summit effect on the right morning.</li>
                    <li><strong>Tipu's Drop:</strong> A sheer cliff point linked to local legend, one of the more dramatic vantage spots on the hilltop.</li>
                    <li><strong>Hilltop fort structures:</strong> Fortifications built up by Tipu Sultan, plus colonial-era buildings including Nehru Nilaya.</li>
                    <li><strong>Bhoga Nandeeshwara Temple:</strong> An ancient, historically significant temple at the base of the hill, worth visiting on the same trip.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Nandi Hills</h2>
                  <p>
                    Nandi Hills is overwhelmingly a day-trip destination — most visitors return to Bengaluru the same day rather than staying overnight. Options right at the hilltop are limited.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { tier: "Day Trip (most common)", icon: "🚗", range: "No stay needed", picks: ["Drive up before dawn, return to Bengaluru by mid-morning"] },
                      { tier: "If staying nearby", icon: "🏨", range: "₹2,000–₹5,000/night", picks: ["A handful of resorts near the base", "Bengaluru city hotels as a base, with an early drive up"] },
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
                  <h2>What to Eat at Nandi Hills</h2>
                  <ul>
                    <li><strong>Small tea/coffee stalls:</strong> A handful of basic stalls near the summit open up around sunrise time for hot drinks and light snacks.</li>
                    <li><strong>Carry your own flask:</strong> Given limited early-morning options, many visitors bring their own coffee or tea for the pre-dawn wait.</li>
                    <li><strong>Bengaluru breakfast on the way back:</strong> Most travelers grab a proper breakfast once back in the city rather than at the hilltop.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Nandi Hills Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Pre-Dawn", title: "Drive Up", color: "bg-amber-700", activities: ["Leave Bengaluru by 4–4:30 AM", "Drive roughly 1.5 hours to the hilltop parking area", "Short walk up to the main viewpoints"] },
                      { day: "Sunrise", title: "Summit & Fort", color: "bg-forest-600", activities: ["Watch sunrise from the main viewpoint", "Explore Tipu's Drop and the fort structures", "Descend and stop at Bhoga Nandeeshwara Temple"] },
                      { day: "Morning", title: "Return", color: "bg-orange-600", activities: ["Drive back to Bengaluru, arriving by mid-morning", "Breakfast in the city"] },
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
                          {["Expense", "Self-Drive", "Cab/Tour"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Transport (round trip)", "₹300–500 (fuel)", "₹1,000–1,800 (cab/tour)"],
                          ["Entry fee", "₹50–100", "₹50–100"],
                          ["Food/snacks", "₹200–400", "₹200–400"],
                          ["Total (approx.)", "₹500–1,000", "₹1,300–2,300"],
                        ].map(([exp, a, b], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{a}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Per group for self-drive, per person typical for shared cab/tour options.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Nandi Hills</h2>
                  <ul>
                    <li><strong>Leave early:</strong> A 4–4:30 AM departure from Bengaluru is standard for a sunrise visit.</li>
                    <li><strong>Visit on a weekday if possible:</strong> Weekends, especially sunrise, draw big crowds from Bengaluru.</li>
                    <li><strong>Carry a flask of coffee or tea:</strong> Options at the summit before sunrise are limited.</li>
                    <li><strong>Combine with Bhoga Nandeeshwara Temple:</strong> It's right at the base of the hill and easy to add to the same trip.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Leave Bengaluru well before dawn", "Visit on a weekday for a quieter experience", "Carry a warm layer and a hot drink", "Combine with Bhoga Nandeeshwara Temple", "Check weather conditions the night before for cloud-effect odds"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Leave Bengaluru too late for sunrise timing", "Expect the cloud effect on every visit — it's weather-dependent", "Plan an overnight stay expecting extensive hilltop accommodation", "Skip a warm layer thinking Bengaluru weather applies at the summit", "Visit expecting quiet on a weekend sunrise"].map((item) => (
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
                {["Nandi Hills", "Sunrise Point", "Bengaluru", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NANDI_HILLS_GEAR} destination="Nandi Hills" />

              <RelatedPostsGrid currentSlug="nandi-hills-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nandi-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
