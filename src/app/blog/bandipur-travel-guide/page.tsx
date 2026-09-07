// src/app/blog/bandipur-travel-guide/page.tsx
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
  title: "Bandipur National Park: Tiger Safari Guide, Zones & Best Time",
  description:
    "The complete Bandipur travel guide. Jeep and canter safaris, the Mysuru-Ooty highway night-driving ban, wildlife, where to stay, best time to visit, and a full itinerary through one of India's original Project Tiger reserves.",
  keywords:
    "Bandipur National Park travel guide, Bandipur safari, Bandipur tiger reserve, Mysuru Ooty highway, Bandipur night driving ban, best time to visit Bandipur, how to reach Bandipur, Karnataka wildlife safari",
  openGraph: {
    title: "Bandipur National Park: Tiger Safari Guide, Zones & Best Time",
    description:
      "One of India's first Project Tiger reserves, straddling the highway between Karnataka and the Nilgiris — the complete safari guide to Bandipur.",
    url: "https://club.kudozz.in/blog/bandipur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dry deciduous forest landscape representative of Bandipur, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandipur National Park: Tiger Safari Guide, Zones & Best Time",
    description: "One of India's original Project Tiger reserves — the complete safari guide to Bandipur.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bandipur-travel-guide",
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
          headline: "Bandipur National Park: Tiger Safari Guide, Zones & Best Time",
          description: "The complete Bandipur travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/bandipur-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Bandipur National Park",
            address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bandipur Travel Guide" },
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
    q: "How many days do I need at Bandipur?",
    a: "One to two days is enough for two or three safaris, which gives a reasonable shot at good sightings. Bandipur also works well as a one-night stop on a longer Mysuru–Ooty road trip.",
  },
  {
    q: "Is there really a night-driving ban through Bandipur?",
    a: "Yes — the core zone of the park is bisected by NH766, the main highway between Mysuru and Ooty, and vehicle movement through this stretch is restricted after dark for wildlife safety. If you're driving this route, plan your timing around daylight hours and check current restrictions before you travel.",
  },
  {
    q: "What is the best time to visit Bandipur?",
    a: "October to May is the general safari season, with the park typically closed or restricted through the monsoon (roughly June–September). Dry months toward the end of the season often bring better sightings as wildlife concentrates near remaining water.",
  },
  {
    q: "How do I reach Bandipur?",
    a: "The nearest airport is Mysuru, about 80km away; Coimbatore is roughly 160km if approaching from the Tamil Nadu side. Mysuru is also the nearest railway station, and road access via NH766 is the standard route.",
  },
  {
    q: "What's the difference between Bandipur and Kabini?",
    a: "Both sit within the same contiguous Nilgiri Biosphere forest belt, but Bandipur is drier, classic tiger-reserve terrain with jeep and canter safaris, while neighbouring Kabini adds reservoir-based boat safaris and a strong reputation for leopard sightings. Many travelers combine both.",
  },
  {
    q: "What is the budget for a trip to Bandipur?",
    a: "A budget traveler can manage on roughly ₹2,000 a day including a basic safari, a mid-range trip closer to ₹5,000 a day, and a resort-level stay with premium safaris can run ₹10,000+ a day.",
  },
  {
    q: "Can I combine Bandipur with Ooty or Mysuru?",
    a: "Yes — Bandipur sits directly on the highway between the two, making it a natural stop on a Mysuru–Ooty road trip rather than requiring a dedicated detour.",
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
  { id: "introduction", title: "Why Bandipur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bandipur", level: 2 },
  { id: "safaris", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ──────────────────────────────────────────────────────────────────────
const BANDIPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for jeep and canter safaris through dry deciduous forest",
    emoji: "🐅",
    items: [
      {
        name: "Neutral/Khaki Clothing",
        description: "Standard safari etiquette for Bandipur's jeep and canter safaris through open, dry forest.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"),
        tag: "Safari essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Bright colors stand out sharply against Bandipur's dry deciduous terrain.",
      },
      {
        name: "Binoculars",
        description: "For spotting elephants, gaur, and deer across Bandipur's more open stretches of forest.",
        price: "₹1,999",
        rating: 4.5,
        reviews: "6.5k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "A good pair of binoculars often makes the difference between missing and confirming a sighting.",
      },
      {
        name: "Dust Mask / Bandana",
        description: "Bandipur's dry-season roads can get dusty on an open jeep or canter safari.",
        price: "₹199",
        rating: 4.2,
        reviews: "2.9k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("bandana+dust+mask+outdoor"),
        tag: "Dry-season essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Open-vehicle safaris on dry forest tracks kick up a fair amount of dust, especially Mar–May.",
      },
      {
        name: "Sun Protection (Hat & Sunscreen)",
        description: "Bandipur's open canopy sections offer little shade during daytime safaris.",
        price: "₹599",
        rating: 4.4,
        reviews: "5.0k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+SPF+50+outdoor"),
        tag: "Trek essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The dry, open terrain that makes Bandipur good for sightings also means more sun exposure than denser forests." ,
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BandipurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/ziro/hero.jpg"
              alt="Dry deciduous forest landscape representative of Bandipur, Karnataka"
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
                { label: "Bandipur National Park", href: null },
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
              {["Bandipur", "Tiger Safari", "Adventure", "Karnataka"].map((tag) => (
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
              Bandipur National Park: Tiger Safari Guide, Zones & Best Time
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of India's first Project Tiger reserves, straddling the highway between Karnataka and the Nilgiris — everything you need to plan a trip to Bandipur.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bandipur, Karnataka" },
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
                  <h2>Why Bandipur?</h2>
                  <p>
                    <strong>Bandipur National Park</strong> was designated in 1973 as one of India's original nine <strong>Project Tiger</strong> reserves, and it remains part of one of the country's most important connected wildlife corridors — linking to Mudumalai in Tamil Nadu, Wayanad in Kerala, and Nagarhole/Kabini in Karnataka to form one of South India's largest contiguous tiger habitats.
                  </p>
                  <p>
                    A distinctive practical detail: the park's core zone is bisected by NH766, the main highway between Mysuru and Ooty, with a night-driving restriction through the stretch — a genuinely useful thing to know if you're road-tripping this route rather than only planning a dedicated wildlife stop.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🐅</span> Bandipur at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🐅", label: "Est.", value: "1973, Project Tiger" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Mysuru (~80km)" },
                        { icon: "🛣️", label: "Notable", value: "NH766 runs through the park" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹10,000+" },
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
                  <h2>Best Time to Visit Bandipur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Most comfortable", text: "Cool, dry weather good for extended safaris, with solid general wildlife activity." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Best sightings", text: "Hot and dry, but water sources shrink and wildlife concentrates, often improving sighting odds." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — closed/restricted", text: "The park is typically closed or heavily restricted for regeneration — verify current dates before planning." },
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
                  <blockquote><strong>Our pick:</strong> Late in the dry season (Mar–May) for the strongest sighting odds, or October–February if you'd rather trade some sighting odds for cooler, more comfortable safaris.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bandipur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mysuru (~80km) is the nearest airport; Coimbatore (~160km) is an option from the Tamil Nadu side.</li>
                    <li><strong>By Train:</strong> Mysuru is the nearest railway station.</li>
                    <li><strong>By Road:</strong> NH766, the Mysuru-Ooty highway, runs directly through the park — the standard route for almost every visitor.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're driving between Mysuru and Ooty, plan to clear the Bandipur stretch of NH766 well before dark — the night-driving restriction through the core zone is strictly enforced.
                  </div>
                </section>

                <section id="safaris">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest safari terrain at Bandipur National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Jeep safaris:</strong> Standard open-gypsy safaris in morning and afternoon slots, run by the Karnataka Forest Department.</li>
                    <li><strong>Canter safaris:</strong> Larger shared-vehicle safaris, a budget-friendly alternative to a private jeep.</li>
                    <li><strong>Wildlife:</strong> Tigers, leopards, elephants, gaur (Indian bison), and dhole (wild dogs) across dry deciduous forest terrain.</li>
                    <li><strong>Connected habitat:</strong> Part of the same contiguous forest belt as Mudumalai, Wayanad, and Nagarhole/Kabini — one of South India's largest linked tiger habitats.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Bandipur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,500–₹3,000/night", picks: ["Forest Department guesthouses", "Basic lodges along NH766"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹4,000–₹8,000/night", picks: ["Wildlife resorts with jeep safari packages", "Nature-focused mid-range stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹10,000+/night", picks: ["Premium safari lodges with naturalists", "High-end forest-edge resorts"] },
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
                  <h2>What to Eat Near Bandipur</h2>
                  <ul>
                    <li><strong>Resort-served meals:</strong> Most stays offer full-board South Indian and multi-cuisine meals.</li>
                    <li><strong>Roadside dhabas on NH766:</strong> Simple, reliable stops if you're passing through en route to Mysuru or Ooty.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bandipur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Arrive via Mysuru, check in", "Afternoon jeep or canter safari", "Evening relaxation at the lodge"] },
                      { day: "Day 2", title: "Morning Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari (best sighting window)", "Late morning: rest or onward travel toward Ooty/Mysuru"] },
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
                          ["Accommodation/night", "₹1,500", "₹5,500", "₹12,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Safari (jeep/canter)", "₹800", "₹1,800", "₹3,000"],
                          ["Daily total", "₹2,000", "₹5,000", "₹11,000"],
                          ["2-Day trip total", "₹4,000", "₹10,000", "₹22,000"],
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
                  <h2>Essential Travel Tips for Bandipur</h2>
                  <ul>
                    <li><strong>Respect the night-driving restriction:</strong> Plan to cross the NH766 stretch through the core zone during daylight hours.</li>
                    <li><strong>Book safaris through the Forest Department or your resort in advance:</strong> Slots fill up, especially on weekends and in peak season.</li>
                    <li><strong>Morning safaris typically have better sighting odds:</strong> Wildlife activity tends to be higher earlier in the day.</li>
                    <li><strong>Combine with Ooty or Mysuru:</strong> Bandipur's location on the highway makes it a natural stop rather than a detour.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safaris in advance", "Cross NH766 through the core zone before dark", "Choose a morning slot for better sighting odds", "Wear neutral safari clothing", "Combine with a Mysuru or Ooty trip"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt to drive through the core zone after dark", "Show up expecting last-minute safari slots", "Wear bright colors on safari", "Skip checking monsoon-season closures", "Rush a road trip through without checking timing"].map((item) => (
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
                {["Bandipur", "Tiger Safari", "Karnataka", "Adventure", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BANDIPUR_GEAR} destination="Bandipur" />

              <RelatedPostsGrid currentSlug="bandipur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bandipur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
