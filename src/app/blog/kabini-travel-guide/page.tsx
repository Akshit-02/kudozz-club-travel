// src/app/blog/kabini-travel-guide/page.tsx
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
  title: "Kabini Travel Guide: Wildlife Safari & Backwater Boat Rides",
  description:
    "The complete Kabini travel guide. Leopard sightings, elephant herds at the reservoir, jeep and boat safaris, where to stay, best time to visit, and a full 2-day itinerary through Karnataka's Nagarhole wildlife country.",
  keywords:
    "Kabini travel guide, Kabini safari, Nagarhole National Park, Kabini leopard sighting, Kabini boat safari, best time to visit Kabini, how to reach Kabini, Kabini resorts, Karnataka wildlife safari",
  openGraph: {
    title: "Kabini Travel Guide: Wildlife Safari & Backwater Boat Rides",
    description:
      "One of India's best spots for leopard sightings, plus boat safaris across a reservoir instead of the usual jeep-only format — the complete guide to Kabini.",
    url: "https://club.kudozz.in/blog/kabini-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forest and reservoir landscape representative of Kabini, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabini Travel Guide: Wildlife Safari & Backwater Boat Rides",
    description:
      "Leopard country and reservoir boat safaris — the complete guide to Kabini, Karnataka.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kabini-travel-guide",
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
          headline: "Kabini Travel Guide: Wildlife Safari & Backwater Boat Rides",
          description: "The complete Kabini travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/kabini-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Kabini",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kabini Travel Guide" },
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
    q: "How many days do I need in Kabini?",
    a: "Two days gives you four safaris — a mix of jeep and boat — which is enough to get a real feel for the reservoir edge and the surrounding forest. Serious wildlife photographers often stay three or more nights to improve their odds.",
  },
  {
    q: "Is Kabini better than Bandipur or Nagarhole for sightings?",
    a: "Kabini sits within the Nagarhole/Rajiv Gandhi National Park landscape and is widely regarded as one of India's most reliable spots for leopard sightings, thanks to relatively open terrain along the reservoir. Bandipur, its neighbour across the same contiguous forest belt, is more classically tiger-country. Many serious wildlife travelers do both on the same trip.",
  },
  {
    q: "What is the best time to visit Kabini?",
    a: "March to May, the dry months, are often considered the best window — water levels drop and wildlife, especially elephants, concentrates visibly around the reservoir. The wider season runs October to May, with the park typically closed or restricted through the monsoon.",
  },
  {
    q: "How do I reach Kabini?",
    a: "The nearest airport is Mysuru, about 80km away; Bengaluru's airport is roughly 205km. Mysuru is also the nearest railway station. Road travel from either city is the standard way in.",
  },
  {
    q: "Are boat safaris available year-round?",
    a: "Boat safaris depend on the reservoir's water level, which fluctuates seasonally — they're generally most reliable outside the driest weeks of peak summer and during/after a good monsoon fill. Confirm current availability with your resort when booking.",
  },
  {
    q: "What is the budget for a trip to Kabini?",
    a: "Most Kabini stays are resort packages that bundle accommodation, meals, and safaris rather than being priced separately — a budget package can run roughly ₹6,000–9,000 per person per night, mid-range ₹10,000–18,000, and luxury resorts considerably more.",
  },
  {
    q: "Do I need to book safaris in advance?",
    a: "Yes — Kabini's resorts are popular and safari slots (both jeep and boat) are limited, so book your stay and safaris well ahead, especially for weekends and the peak Mar–May window.",
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
  { id: "introduction", title: "Why Kabini?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kabini", level: 2 },
  { id: "safaris", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ──────────────────────────────────────────────────────────────────────
const KABINI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for jeep and boat safaris on the Kabini reservoir",
    emoji: "🐆",
    items: [
      {
        name: "Binoculars",
        description:
          "Leopard and elephant sightings at Kabini often happen across open reservoir-edge terrain — binoculars turn a distant shape into an actual sighting.",
        price: "₹1,999",
        rating: 4.5,
        reviews: "6.5k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "Kabini's open water-edge terrain rewards binoculars more than denser forest reserves do.",
      },
      {
        name: "Telephoto Camera / Lens",
        description:
          "Kabini's reputation for leopard photography draws serious wildlife photographers — a longer lens makes the difference on both jeep and boat safaris.",
        price: "₹8,999+",
        rating: 4.4,
        reviews: "2.1k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"),
        tag: "Photography essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "This is one of India's most photographed wildlife destinations for exactly this reason.",
      },
      {
        name: "Neutral/Khaki Clothing",
        description:
          "Standard safari practice on both jeep and boat safaris — neutral tones are less disruptive to wildlife.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"),
        tag: "Safari essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Bright colors carry across open water and grassland more than they do in dense forest.",
      },
      {
        name: "Insect Repellent",
        description:
          "The reservoir edge and surrounding forest are prime mosquito habitat, especially at dawn and dusk safari times.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Safari essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Both the boat and jeep safaris run at the buggiest hours of the day.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Boat safaris in particular offer no shade for the length of the cruise.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.5k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+outdoor"),
        tag: "Boat-safari essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "There's no cover on an open safari boat crossing the reservoir.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KabiniGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Forest and reservoir landscape representative of Kabini, Karnataka"
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
                { label: "Kabini", href: null },
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
              {["Kabini", "Wildlife Safari", "Adventure", "Nagarhole", "Karnataka"].map((tag) => (
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
              Kabini Travel Guide: Wildlife Safari & Backwater Boat Rides
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's best spots for leopard sightings, plus boat safaris across a reservoir instead of the usual jeep-only format — everything you need to plan a trip to Kabini.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kabini, Karnataka" },
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
                  <h2>Why Kabini?</h2>
                  <p>
                    <strong>Kabini</strong> sits within the wider Nagarhole (Rajiv Gandhi) National Park landscape, on the banks of the Kabini River and the reservoir formed behind its dam. What sets it apart from most Indian wildlife destinations is the terrain: relatively open ground along the reservoir edge, which has made it one of the country's most consistently good spots for <strong>leopard</strong> sightings, and during the dry months, a stage for elephant herds gathering visibly at the water.
                  </p>
                  <p>
                    Kabini also offers something few Indian reserves do — a genuine <strong>boat safari</strong> option that runs alongside, or instead of, the standard jeep drive, giving a different vantage point on the same forest.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐆</span> Kabini at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🐆", label: "Known For", value: "Leopard sightings" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Mysuru (~80km)" },
                        { icon: "🚤", label: "Signature Activity", value: "Boat safari" },
                        { icon: "💰", label: "Budget/Night", value: "₹6,000 – ₹18,000+" },
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
                  <h2>Best Time to Visit Kabini</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – May", emoji: "🥵", color: "bg-amber-50 border-amber-200", mood: "Best sightings — our pick", text: "Water levels drop, and wildlife — especially elephants — concentrates visibly around the reservoir despite the heat." },
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-orange-50 border-orange-200", mood: "Most comfortable", text: "Cooler and pleasant for safaris, with good general wildlife activity though less concentrated than peak dry season." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — largely closed", text: "The park is typically closed or heavily restricted for regeneration during this period — verify current dates before planning." },
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
                    <strong>Our pick:</strong> March to May, if you can handle the heat — this is when Kabini's reputation for elephant and predator sightings is at its strongest.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kabini</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mysuru is the nearest airport, about 80km away; Bengaluru's airport is roughly 205km, a longer but common option for international travelers.</li>
                    <li><strong>By Train:</strong> Mysuru is also the nearest railway station, well connected to Bengaluru and beyond.</li>
                    <li><strong>By Road:</strong> Road access from Mysuru (~1.5–2 hours) is the standard route almost every visitor takes.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Most Kabini stays are all-inclusive resort packages bundling stay, meals, and safaris — confirm exactly what's included, including how many jeep vs. boat safaris, before booking.
                  </div>
                </section>

                <section id="safaris">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Reservoir and forest edge at Kabini"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Jeep safaris:</strong> Standard open-gypsy safaris through Nagarhole's forest, run in morning and afternoon slots.</li>
                    <li><strong>Boat safaris:</strong> A slower cruise along the Kabini reservoir, where leopards, elephant herds, and birdlife are often visible from the water — a genuinely different experience from a jeep drive.</li>
                    <li><strong>Leopard sightings:</strong> Kabini's relatively open reservoir-edge terrain is widely cited as giving it some of the best leopard-sighting odds in India.</li>
                    <li><strong>Elephant herds:</strong> Especially in the dry months (Mar–May), herds gather visibly at the water's edge as other sources dry up.</li>
                    <li><strong>Connected forest:</strong> Kabini sits within the same contiguous forest belt as Bandipur and Mudumalai, one of South India's largest linked tiger habitats.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Kabini</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹6,000–₹9,000/night (all-inclusive)", picks: ["Smaller lodges near the buffer zone", "Basic wildlife camps"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹10,000–₹18,000/night (all-inclusive)", picks: ["Established Kabini wildlife resorts", "Reservoir-view mid-range properties"] },
                      { tier: "Luxury", icon: "✨", range: "₹22,000+/night (all-inclusive)", picks: ["Premium safari lodges with dedicated naturalists", "High-end reservoir-front resorts"] },
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
                  <blockquote>Choose a resort that offers both jeep and boat safaris in its package — the combination is what makes a Kabini trip distinctive.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat at Kabini</h2>
                  <p>Most Kabini stays are full-board resort packages, so dining is largely built into your stay.</p>
                  <ul>
                    <li><strong>Resort-served meals:</strong> Nearly all Kabini resorts include full-board Karnataka and multi-cuisine meals as part of the package.</li>
                    <li><strong>Local Mysuru-style food:</strong> If passing through Mysuru en route, it's worth sampling Mysuru pak and a proper South Indian thali.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kabini Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safaris", color: "bg-amber-700", activities: ["Arrive via Mysuru, check in by late morning", "Afternoon: jeep safari", "Evening: boat safari at sunset"] },
                      { day: "Day 2", title: "Second Round & Departure", color: "bg-forest-600", activities: ["Early morning: jeep or boat safari", "Late morning: relax at the resort", "Afternoon: departure via Mysuru"] },
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
                          {["Package", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Per night, per person (all-inclusive)", "₹6,000", "₹13,000", "₹24,000"],
                          ["2-Day trip total (approx.)", "₹12,000", "₹26,000", "₹48,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport to the region. Kabini pricing is typically per-person, all-inclusive of stay, meals, and safaris.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kabini</h2>
                  <ul>
                    <li><strong>Book well in advance:</strong> Kabini's popularity means resorts and safari slots fill up quickly, especially on weekends and in the peak Mar–May window.</li>
                    <li><strong>Choose a resort offering both safari types:</strong> The jeep-and-boat combination is what makes Kabini distinctive.</li>
                    <li><strong>Time your trip for dry season if sightings are the priority:</strong> Mar–May offers the strongest wildlife concentration near the water.</li>
                    <li><strong>Dress in neutral tones:</strong> Standard safari etiquette applies on both jeep and boat.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a resort offering both jeep and boat safaris", "Visit Mar–May for the strongest wildlife concentration", "Carry binoculars and a telephoto lens", "Book well ahead, especially for weekends", "Confirm exactly what's included in your package"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up expecting last-minute safari availability", "Wear bright colors on safari", "Assume boat safaris run year-round regardless of water levels", "Skip confirming package inclusions before paying", "Plan a trip during the monsoon closure window"].map((item) => (
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
                {["Kabini", "Wildlife Safari", "Nagarhole", "Karnataka", "Adventure", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KABINI_GEAR} destination="Kabini" />

              <RelatedPostsGrid currentSlug="kabini-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kabini-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
