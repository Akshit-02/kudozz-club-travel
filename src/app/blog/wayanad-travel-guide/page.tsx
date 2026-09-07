// src/app/blog/wayanad-travel-guide/page.tsx
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
  title: "Wayanad Travel Guide: Waterfalls, Wildlife & Western Ghats",
  description:
    "The complete Wayanad travel guide. Wayanad Wildlife Sanctuary, Edakkal Caves, Chembra Peak, Soochipara & Meenmutty Falls, Banasura Sagar Dam, where to stay, best time to visit, and a full itinerary through Kerala's misty Western Ghats district.",
  keywords:
    "Wayanad travel guide, Wayanad Wildlife Sanctuary, Edakkal Caves, Chembra Peak trek, Soochipara Falls, Meenmutty Falls, Banasura Sagar Dam, best time to visit Wayanad, how to reach Wayanad, Wayanad itinerary, Kerala hill station",
  openGraph: {
    title: "Wayanad Travel Guide: Waterfalls, Wildlife & Western Ghats",
    description:
      "Misty coffee and spice plantations, ancient caves with 6,000-year-old rock carvings, and a wildlife sanctuary linking three states — the complete guide to Wayanad.",
    url: "https://club.kudozz.in/blog/wayanad-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green hills representative of Wayanad, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayanad Travel Guide: Waterfalls, Wildlife & Western Ghats",
    description:
      "Coffee plantations, ancient rock carvings, and a wildlife sanctuary linking three states — the complete guide to Wayanad.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/wayanad-travel-guide",
  },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Wayanad Travel Guide: Waterfalls, Wildlife & Western Ghats",
          description: "The complete Wayanad travel guide.",
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
            "@id": "https://club.kudozz.in/blog/wayanad-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Wayanad",
            address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Wayanad Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Wayanad?",
    a: "Two to three days lets you cover the main waterfalls, Edakkal Caves, a wildlife safari, and either Chembra Peak or a plantation tour without rushing. Add a day if you want to do all of the above unhurried.",
  },
  {
    q: "What is the best time to visit Wayanad?",
    a: "October to May is the main season, with December to February the coolest and clearest. The monsoon (June–September) is lush and dramatic but brings landslide risk and closes some trails, including parts of Chembra Peak.",
  },
  {
    q: "How do I reach Wayanad?",
    a: "The nearest airport is Kozhikode/Calicut (CCJ), about 65km away, with Bangalore (~275km) a common option for those combining Wayanad with Karnataka. Kozhikode is also the nearest major railway station, with road access to Wayanad taking roughly 2–2.5 hours.",
  },
  {
    q: "Do I need a permit for the Chembra Peak trek?",
    a: "Yes, typically — the trek generally requires a forest department permit and guide, with a daily visitor cap in place. Requirements and booking processes do change, so verify the current process locally or through your accommodation before planning around it.",
  },
  {
    q: "Is Wayanad connected to other wildlife parks?",
    a: "Yes — Wayanad Wildlife Sanctuary is part of the Nilgiri Biosphere Reserve, contiguous with Bandipur and Nagarhole in Karnataka and Mudumalai in Tamil Nadu, together forming one of South India's largest connected forest tracts.",
  },
  {
    q: "How old are the Edakkal Caves rock carvings?",
    a: "The petroglyphs at Edakkal are estimated to be several thousand years old, among the oldest known rock art in South India, reached via a moderate climb up to the rock shelters.",
  },
  {
    q: "What is the budget for a trip to Wayanad?",
    a: "A budget traveler can manage on roughly ₹1,700 a day, a mid-range trip closer to ₹4,300 a day, and a plantation-resort stay can run ₹9,000+ a day. A 3-day trip totals roughly ₹5,100 on a budget and ₹12,900 mid-range, excluding transport to the region.",
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

const tableOfContents = [
  { id: "introduction", title: "Why Wayanad?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Wayanad", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const WAYANAD_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for waterfalls, cave climbs, and the Chembra Peak trek",
    emoji: "🌿",
    items: [
      {
        name: "Trekking Shoes",
        description:
          "Essential for the Chembra Peak climb and the steps up to Edakkal Caves — both involve uneven, sometimes slippery terrain.",
        price: "₹3,299",
        rating: 4.5,
        reviews: "6.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+men+women"),
        tag: "Trek essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Chembra Peak's trail and Edakkal's rock steps both punish flimsy footwear.",
      },
      {
        name: "Rain Jacket",
        description:
          "Wayanad's forested hills see sudden showers well outside peak monsoon — a packable rain layer keeps plans on track.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Weather here shifts quickly given the elevation and forest cover.",
      },
      {
        name: "Binoculars",
        description:
          "For wildlife safaris in Wayanad Wildlife Sanctuary and birdwatching around Pookode Lake and the plantation estates.",
        price: "₹1,999",
        rating: 4.5,
        reviews: "6.5k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"),
        tag: "Safari essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Wayanad's forest is dense — binoculars turn a distant rustle into an actual sighting.",
      },
      {
        name: "Insect Repellent",
        description:
          "Forest trails, waterfall spray zones, and plantation walks all bring you close to mosquito habitat, especially at dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Forest essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Wayanad's dense forest cover means insect activity is a real, year-round consideration.",
      },
      {
        name: "Light Warm Layer",
        description:
          "Evenings and early mornings can get genuinely cool at Wayanad's elevation, especially December through February.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.9k",
        image: "🧶",
        affiliateUrl: amazonSearchUrl("light+fleece+jacket+travel"),
        tag: "Comfort essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Many travelers underestimate how cool Wayanad's mornings get relative to coastal Kerala.",
      },
    ],
  },
];

export default function WayanadGuidePage() {
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
              alt="Misty green hills representative of Wayanad, Kerala"
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
                { label: "Wayanad", href: null },
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
              {["Wayanad", "Western Ghats", "Off-beat", "Wildlife", "Kerala"].map((tag) => (
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
              Wayanad Travel Guide: Waterfalls, Wildlife & Western Ghats
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Misty coffee and spice plantations, ancient caves with rock carvings thousands of years old, and a wildlife sanctuary linking three states — everything you need to plan a trip to Wayanad.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Wayanad, Kerala" },
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
                  <h2>Why Wayanad?</h2>
                  <p>
                    <strong>Wayanad</strong> is Kerala's plantation-district escape into the Western Ghats — misty hills covered in coffee, tea, and spice estates, dense forest linking three states' worth of protected wildlife land, and cave art that predates most of India's recorded history. It's cooler and quieter than the coast, with a distinctly different character from beach or backwater Kerala.
                  </p>
                  <p>
                    Unlike some of Kerala's more compact destinations, Wayanad rewards a bit of driving between sights — waterfalls, viewpoints, caves, and plantations are spread across the district, which also keeps it feeling less crowded than Munnar.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🌿</span> Wayanad at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🏞️", label: "Key Site", value: "Wayanad Wildlife Sanctuary" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kozhikode (CCJ), ~65km" },
                        { icon: "🏔️", label: "Highest Point", value: "Chembra Peak" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,300" },
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
                  <h2>Best Time to Visit Wayanad</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Dec – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear, and comfortable for trekking, safaris, and plantation walks, with all trails typically open." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warmer, still workable", text: "Temperatures rise but Wayanad's elevation keeps it noticeably cooler than the plains — good for wildlife sightings near water sources." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — scenic but restrictive", text: "Waterfalls are at their fullest and the hills turn intensely green, but landslide risk closes some trails and driving conditions get harder." },
                      { season: "Sep – Nov", emoji: "🌦️", color: "bg-purple-50 border-purple-200", mood: "Post-monsoon", text: "Lush greenery with rains tapering off — a good, less-crowded window before peak winter season." },
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
                    <strong>Our pick:</strong> December to February — the clearest, coolest window for trekking Chembra Peak and doing a wildlife safari without landslide risk.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Wayanad</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kozhikode/Calicut Airport (CCJ) is the nearest at roughly 65km; Bangalore (~275km) is a common option for those combining Wayanad with a Karnataka trip via Bandipur/Mysore.</li>
                    <li><strong>By Train:</strong> Kozhikode is the nearest major railway station, connected to Kerala's main rail network.</li>
                    <li><strong>By Road:</strong> Road access is primarily via Kozhikode, or from the Karnataka side through Bandipur and Mysore — both routes are scenic drives through forest.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If driving from Karnataka via Bandipur, check current forest-road night driving restrictions — some stretches close to vehicle traffic after dark for wildlife safety.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Wayanad</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forested hills and plantation scenery around Wayanad"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Wayanad Wildlife Sanctuary:</strong> Part of the Nilgiri Biosphere Reserve, contiguous with Bandipur and Nagarhole (Karnataka) and Mudumalai (Tamil Nadu) — jeep safaris available.</li>
                    <li><strong>Edakkal Caves:</strong> Rock shelters with petroglyphs estimated several thousand years old, reached via a moderate climb.</li>
                    <li><strong>Chembra Peak:</strong> Wayanad's highest peak, known for a heart-shaped lake near the summit — permits/guide typically required, verify current process.</li>
                    <li><strong>Soochipara & Meenmutty Falls:</strong> Multi-tiered waterfalls in forest settings, popular for swimming where conditions allow.</li>
                    <li><strong>Banasura Sagar Dam:</strong> India's largest earthen dam, with island viewpoints and boating.</li>
                    <li><strong>Coffee & spice plantation tours:</strong> Working estates offering tours and stays, a good way to understand the district's agricultural character.</li>
                    <li><strong>Pookode Lake:</strong> A small, scenic freshwater lake good for a quieter half-day stop.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Wayanad</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Homestays near Sultan Bathery", "Budget guesthouses in Kalpetta", "Basic plantation-edge stays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Plantation-view resorts", "Mid-range cottages near Chembra", "Family-run heritage homestays"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Premium plantation resorts", "Treehouse and forest-view luxury stays"] },
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
                  <h2>What to Eat in Wayanad</h2>
                  <ul>
                    <li><strong>Kappa & fish curry:</strong> A tapioca-and-fish curry combination popular across Wayanad's local eateries.</li>
                    <li><strong>Bamboo rice dishes:</strong> A tribal-heritage specialty found in a handful of local restaurants — worth seeking out.</li>
                    <li><strong>Plantation-estate meals:</strong> Many stays serve home-style Kerala meals using produce grown on-site.</li>
                    <li><strong>Fresh coffee and spices:</strong> Wayanad's plantations make this a good place to buy coffee, cardamom, and pepper directly from growers.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Wayanad Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Caves & Waterfalls", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Edakkal Caves climb", "Afternoon: Soochipara or Meenmutty Falls", "Evening: rest at your stay"] },
                      { day: "Day 2", title: "Wildlife & Chembra Peak", color: "bg-forest-600", activities: ["Early morning: Wayanad Wildlife Sanctuary safari", "Late morning: Chembra Peak trek (confirm permit)", "Afternoon: rest"] },
                      { day: "Day 3", title: "Plantations & Departure", color: "bg-orange-600", activities: ["Morning: Coffee/spice plantation tour", "Late morning: Banasura Sagar Dam or Pookode Lake", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹10,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/safari per day", "₹300", "₹800", "₹1,800"],
                          ["Entry fees / permits", "₹150", "₹400", "₹800"],
                          ["Daily total", "₹1,700", "₹4,300", "₹13,600"],
                          ["3-Day trip total", "₹5,100", "₹12,900", "₹40,800"],
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
                  <h2>Essential Travel Tips for Wayanad</h2>
                  <ul>
                    <li><strong>Verify Chembra Peak permits ahead of time:</strong> The daily visitor cap and booking process can change — confirm current requirements before planning your day around it.</li>
                    <li><strong>Book safaris in advance:</strong> Wayanad Wildlife Sanctuary slots can fill up, especially in peak winter season.</li>
                    <li><strong>Carry rain gear even outside monsoon:</strong> Weather shifts quickly at this elevation.</li>
                    <li><strong>Rent a vehicle or hire a driver:</strong> Sights are spread across the district, so private transport saves significant time.</li>
                    <li><strong>Check road conditions in monsoon:</strong> Landslide risk is real on some routes between June and September.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book Chembra Peak permits and safaris ahead", "Carry a rain layer year-round", "Hire a driver or rent a vehicle for spread-out sights", "Visit Edakkal Caves early to avoid crowds and heat", "Try a plantation stay for a fuller experience"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt Chembra Peak without checking permit requirements", "Drive forest roads at night where restricted", "Underestimate how cool mornings get", "Skip checking monsoon-season landslide advisories", "Expect all sights to be close together — plan for driving time"].map((item) => (
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
                {["Wayanad", "Western Ghats", "Off-beat", "Wildlife", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={WAYANAD_GEAR} destination="Wayanad" />

              <RelatedPostsGrid currentSlug="wayanad-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="wayanad-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
