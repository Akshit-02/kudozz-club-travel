// src/app/blog/jamshedpur-travel-guide/page.tsx
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
  title: "Jamshedpur Travel Guide: Jubilee Park, Dimna Lake & Steel City",
  description:
    "The complete Jamshedpur travel guide. Jubilee Park, Dimna Lake, Tata Steel Zoological Park, Bistupur and Sakchi markets, where to stay, best time to visit, and a full 2-day itinerary through India's first planned industrial city.",
  keywords:
    "Jamshedpur travel guide, Jubilee Park, Dimna Lake, Tata Steel city, Bistupur, Sakchi, best time to visit Jamshedpur, how to reach Jamshedpur, Tatanagar, Jharkhand steel city, Jamshedpur itinerary",
  openGraph: {
    title: "Jamshedpur Travel Guide: Jubilee Park, Dimna Lake & Steel City",
    description:
      "India's first planned industrial city, built around the Tata Steel works, with a lakeside park modeled loosely on Vrindavan Gardens — the complete guide to Jamshedpur.",
    url: "https://club.kudozz.in/blog/jamshedpur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Planned green cityscape representative of Jamshedpur, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamshedpur Travel Guide: Jubilee Park, Dimna Lake & Steel City",
    description:
      "India's first planned industrial city, built around the Tata Steel works — the complete guide to Jamshedpur.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/jamshedpur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Jamshedpur Travel Guide: Jubilee Park, Dimna Lake & Steel City",
          description: "The complete Jamshedpur travel guide.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/jamshedpur-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Jamshedpur",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Jamshedpur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Jamshedpur?",
    a: "Two days is enough to cover Jubilee Park, Dimna Lake, and a walk through Bistupur and Sakchi. Add a half-day if you want a Dalma Hills side trip.",
  },
  {
    q: "What is the best time to visit Jamshedpur?",
    a: "October to March offers the most comfortable weather for walking Jubilee Park and visiting Dimna Lake. Summers (April–June) get hot, and the monsoon brings heavy rain that's best avoided for outdoor plans.",
  },
  {
    q: "How do I reach Jamshedpur?",
    a: "Sonari Airport has limited flights; Kolkata and Ranchi are larger airport alternatives with an onward drive or train. Tatanagar Junction is a major railway hub with strong connections across eastern India, and the city is well connected by road via NH33.",
  },
  {
    q: "Is Jamshedpur a clean, well-organized city?",
    a: "Yes — as a privately planned industrial township built around the Tata Steel works, Jamshedpur is notably orderly and well-maintained by Indian urban standards, with wide roads and organized neighborhoods.",
  },
  {
    q: "Can I visit the Tata Steel plant?",
    a: "Some plant tour options exist for visitors interested in industrial heritage, but availability and booking processes change — verify current tour access directly before planning around it.",
  },
  {
    q: "What is the budget for a trip to Jamshedpur?",
    a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,000 a day. A 2-day trip totals roughly ₹3,200 on a budget and ₹8,000 mid-range, excluding transport to the region.",
  },
  {
    q: "Is Jamshedpur good for families?",
    a: "Yes — Jubilee Park's zoo and boating lake, plus Dimna Lake's picnic spots, make it an easy, low-stress destination for a family weekend.",
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
  { id: "introduction", title: "Why Jamshedpur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jamshedpur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const JAMSHEDPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for park walks, lake picnics, and city exploring",
    emoji: "🏙️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Jubilee Park alone is large enough to cover several kilometres on foot — comfortable shoes make a real difference over a full day.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "City-walk essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Jamshedpur rewards walking more than most Indian cities given its planned, pedestrian-friendly layout.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Useful for both a full day at Jubilee Park and a picnic afternoon at Dimna Lake.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Both Jubilee Park and Dimna Lake involve extended time outdoors with limited shade in stretches.",
      },
      {
        name: "Picnic Mat / Light Blanket",
        description:
          "Dimna Lake's grassy banks are a popular picnic spot — a light mat makes the visit far more comfortable.",
        price: "₹599",
        rating: 4.3,
        reviews: "3.1k",
        image: "🧺",
        affiliateUrl: amazonSearchUrl("picnic+mat+outdoor"),
        tag: "Lake-day essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "A picnic at Dimna Lake is one of the more popular half-day plans among visitors and locals alike.",
      },
      {
        name: "Sun Hat & Sunscreen",
        description: "For extended time outdoors at both the park and the lake, especially outside winter months.",
        price: "₹499",
        rating: 4.4,
        reviews: "5.0k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"),
        tag: "Comfort essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Jubilee Park and Dimna Lake both offer significant open, sun-exposed areas.",
      },
    ],
  },
];

export default function JamshedpurGuidePage() {
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
              alt="Planned green cityscape representative of Jamshedpur, Jharkhand"
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
                { label: "Jamshedpur", href: null },
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
              {["Jamshedpur", "Jubilee Park", "Steel City", "Jharkhand"].map((tag) => (
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
              Jamshedpur Travel Guide: Jubilee Park, Dimna Lake & Steel City
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's first planned industrial city, built around the Tata Steel works, with a lakeside
              park modeled loosely on Vrindavan Gardens — everything you need to plan a trip to Jamshedpur.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Jamshedpur, Jharkhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
                },
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
                  <h2>Why Jamshedpur?</h2>
                  <p>
                    <strong>Jamshedpur</strong> holds a genuinely unusual place in Indian urban history — it
                    was one of the country's first major planned industrial cities, founded in the early 20th
                    century around the Tata Steel works and named for its founder, Jamsetji Tata. Built and
                    largely maintained by a private company rather than a municipal government, it's a
                    notably orderly, clean, and well-organized city by Indian standards, with wide roads and
                    genuinely walkable neighborhoods.
                  </p>
                  <p>
                    Beyond its industrial identity, Jamshedpur is a green city — anchored by the sprawling
                    Jubilee Park and the scenic Dimna Lake at the foot of the Dalma Hills — making it a
                    pleasant, low-key destination in its own right, not just a stopover for business travel.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> Jamshedpur at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🌳", label: "Key Site", value: "Jubilee Park" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Rail Hub", value: "Tatanagar Junction" },
                        { icon: "🏭", label: "Known For", value: "India's first planned steel city" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Jamshedpur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, dry, and comfortable for both park walks and a Dimna Lake picnic.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "Temperatures climb steadily — plan outdoor time for early morning or evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavy rain makes outdoor plans unpredictable, though the parks turn notably green.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> December to February — the most comfortable stretch for
                    walking Jubilee Park and spending an afternoon at Dimna Lake.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Jamshedpur</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Sonari Airport has limited flight connections; Kolkata and
                      Ranchi are larger airports with an onward drive or train.
                    </li>
                    <li>
                      <strong>By Train:</strong> Tatanagar Junction is a major railway hub with strong
                      connections across eastern India.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via NH33, linking Jamshedpur to Ranchi and
                      Kolkata.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Tatanagar Junction is genuinely the most reliable way in —
                    book train tickets ahead during festival season when demand across eastern India spikes.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Jamshedpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Green landscaped park scenery representative of Jamshedpur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Jubilee Park:</strong> A large landscaped park built by Tata Steel, with
                      fountains, a rose garden, a small zoo, and a boating lake — often described as inspired
                      in spirit by Mysuru's Brindavan Gardens.
                    </li>
                    <li>
                      <strong>Dimna Lake:</strong> A reservoir at the base of the Dalma Hills, popular for
                      boating and picnics, and a favourite half-day escape from the city.
                    </li>
                    <li>
                      <strong>Tata Steel Zoological Park:</strong> A city zoo with a range of native and
                      exotic species, a popular family stop.
                    </li>
                    <li>
                      <strong>Bistupur and Sakchi:</strong> The city's main commercial areas — good for
                      shopping, local food, and getting a feel for everyday Jamshedpur life.
                    </li>
                    <li>
                      <strong>Tata Steel plant tour (where available):</strong> Some tour options exist for
                      visitors interested in the city's industrial heritage — verify current availability
                      before planning around it.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Jamshedpur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹900–₹2,000/night", picks: ["Budget hotels in Sakchi", "Guesthouses near Bistupur"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹2,500–₹5,500/night", picks: ["Mid-range business hotels in Bistupur", "Well-rated hotels near Jubilee Park"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹12,000+/night", picks: ["Premium business hotels in the city centre"] },
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
                  <h2>What to Eat in Jamshedpur</h2>
                  <ul>
                    <li><strong>Litti Chokha:</strong> Roasted wheat-flour balls stuffed with spiced sattu, served with mashed spiced vegetables — a Jharkhand and Bihar staple.</li>
                    <li><strong>Dhuska:</strong> Deep-fried rice-and-lentil pancakes, a popular local snack often paired with chutney.</li>
                    <li><strong>Bistupur/Sakchi eateries:</strong> A wide range of North Indian, Bengali, and multi-cuisine restaurants reflecting the city's diverse workforce.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Jamshedpur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Jubilee Park & City Centre",
                        color: "bg-amber-700",
                        activities: ["Arrive, check in", "Morning: Jubilee Park and zoo", "Afternoon: Bistupur and Sakchi markets", "Evening: fountains lit up at Jubilee Park"],
                      },
                      {
                        day: "Day 2",
                        title: "Dimna Lake & Departure",
                        color: "bg-forest-600",
                        activities: ["Morning: Dimna Lake boating and picnic", "Afternoon: optional Dalma Hills viewpoint", "Evening: departure"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
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
                          ["Accommodation/night", "₹900", "₹3,500", "₹9,000"],
                          ["Food/day", "₹350", "₹900", "₹2,000"],
                          ["Local transport per day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹1,600", "₹4,000", "₹9,500"],
                          ["2-Day trip total", "₹3,200", "₹8,000", "₹19,000"],
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
                  <h2>Essential Travel Tips for Jamshedpur</h2>
                  <ul>
                    <li><strong>Visit Jubilee Park in the evening:</strong> The fountains are lit and the park is at its most atmospheric after dark.</li>
                    <li><strong>Combine with a Dimna Lake half-day trip:</strong> A natural pairing with the park, especially for a family visit.</li>
                    <li><strong>Book Tatanagar train tickets ahead:</strong> Demand can spike during festival season across eastern India.</li>
                    <li><strong>Confirm plant tour access in advance:</strong> If interested in the Tata Steel industrial heritage angle, verify current tour availability directly.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Jubilee Park in the evening for the lit fountains", "Pack a picnic for Dimna Lake", "Explore Bistupur and Sakchi on foot", "Book train tickets ahead in festival season", "Confirm any plant tour access beforehand"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a lively nightlife scene — this is a quieter industrial city", "Skip Dimna Lake if you have a second day free", "Assume plant tours are always available without checking", "Visit outdoor spots during the heaviest monsoon downpours", "Rush Bistupur/Sakchi — they reward a slower walk"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
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
                {["Jamshedpur", "Jubilee Park", "Steel City", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={JAMSHEDPUR_GEAR} destination="Jamshedpur" />
              <RelatedPostsGrid currentSlug="jamshedpur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jamshedpur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
