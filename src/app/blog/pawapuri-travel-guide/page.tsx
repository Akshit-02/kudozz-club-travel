// src/app/blog/pawapuri-travel-guide/page.tsx
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
  title: "Pawapuri Travel Guide: Where Mahavira Attained Nirvana",
  description:
    "The complete Pawapuri travel guide. Jal Mandir's lotus-filled water tank, Mahavira's nirvana site, Samosharan Temple, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Pawapuri travel guide, Jal Mandir, Mahavira nirvana, Pawapuri Jain temple, Bihar Jain pilgrimage, best time to visit Pawapuri, how to reach Pawapuri, Pawapuri Rajgir Nalanda circuit",
  openGraph: {
    title: "Pawapuri Travel Guide: Where Mahavira Attained Nirvana",
    description:
      "A lotus-covered temple tank marking the spot where Lord Mahavira, the last Jain Tirthankara, is believed to have attained nirvana — the complete guide to Pawapuri.",
    url: "https://club.kudozz.in/blog/pawapuri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Lotus-filled water tank and temple, evoking Jal Mandir at Pawapuri, Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawapuri Travel Guide: Where Mahavira Attained Nirvana",
    description: "Jal Mandir's lotus-filled tank marking Mahavira's nirvana site — the complete guide to Pawapuri.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/pawapuri-travel-guide",
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
          headline: "Pawapuri Travel Guide: Where Mahavira Attained Nirvana",
          description: "The complete Pawapuri travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pawapuri-travel-guide" },
          about: {
            "@type": "Place",
            name: "Pawapuri",
            address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Pawapuri Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is Jal Mandir and why is it significant?",
    a: "Jal Mandir (Water Temple) is a white marble temple built in the middle of a lotus-filled water tank at Pawapuri, connected to the shore by a causeway. It marks the traditional site where Mahavira, the last Jain Tirthankara, attained nirvana, making it one of Jainism's most important pilgrimage sites.",
  },
  {
    q: "How many days do I need in Pawapuri?",
    a: "Half a day to a day is enough — most travelers visit as part of a broader Bihar Buddhist-Jain heritage circuit combined with Rajgir and Nalanda.",
  },
  {
    q: "How do I reach Pawapuri?",
    a: "The nearest airport is Patna (~90km) or Gaya. Bihar Sharif or Rajgir are the nearest railway stations. Road access is the standard approach, and Pawapuri is often combined with a Rajgir/Nalanda day trip.",
  },
  {
    q: "What is the best time to visit Pawapuri?",
    a: "October to March offers the most comfortable weather for temple visits and walking around the tank.",
  },
  {
    q: "Is Pawapuri only for Jain pilgrims?",
    a: "It's primarily a Jain pilgrimage site, but the Jal Mandir's setting — a marble temple in the middle of a lotus tank — is genuinely striking architecturally and worth visiting for any traveler interested in India's religious heritage sites, approached respectfully.",
  },
  {
    q: "Can Pawapuri be combined with Rajgir and Nalanda?",
    a: "Yes — this is the standard approach given their relative proximity, forming a single-day Bihar heritage circuit covering Buddhist and Jain sites together.",
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
  { id: "introduction", title: "Why Pawapuri?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pawapuri", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PAWAPURI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple-tank walking and respectful pilgrimage visits",
    emoji: "🪷",
    items: [
      {
        name: "Modest, Breathable Clothing",
        description: "Pawapuri is a deeply devotional Jain pilgrimage site — modest, covering clothing is expected.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.6k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"),
        tag: "Respectful travel",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Jainism's ascetic values are reflected in the site's atmosphere — dress respectfully.",
      },
      {
        name: "Comfortable Sandals",
        description: "Easy to remove for temple entry, and comfortable for walking the causeway to Jal Mandir.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.8k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"),
        tag: "Temple essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Shoes are removed before crossing to Jal Mandir — slip-on sandals make this easy.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Useful for the day given limited facilities directly around the tank.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "This is a small pilgrimage town with limited facilities beyond the temple complex itself.",
      },
      {
        name: "Camera",
        description: "The Jal Mandir's lotus-tank setting is genuinely photogenic, especially in morning light.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The marble temple reflected in the lotus tank is one of the more visually distinctive sights in the region.",
      },
    ],
  },
];

export default function PawapuriGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Lotus-filled water tank and temple, evoking Jal Mandir at Pawapuri, Bihar"
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
                { label: "Pawapuri", href: null },
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
              {["Pawapuri", "Bihar", "Jain Pilgrimage", "Jal Mandir"].map((tag) => (
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
              Pawapuri Travel Guide: Where Mahavira Attained Nirvana
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A lotus-covered temple tank marking the spot where Lord Mahavira, the last Jain Tirthankara, is believed to have attained nirvana.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Pawapuri, Bihar",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>Why Pawapuri?</h2>
                  <p>
                    <strong>Pawapuri</strong> holds central significance in Jainism as the traditional site
                    where <strong>Mahavira</strong>, the 24th and last Jain Tirthankara, attained nirvana
                    (final liberation) after his death. The town's centrepiece is{" "}
                    <strong>Jal Mandir</strong> (Water Temple) — a striking white marble temple built in
                    the middle of a lotus-filled water tank, connected to the shore by a causeway, widely
                    regarded as one of the most visually distinctive Jain pilgrimage sites in India.
                  </p>
                  <p>
                    Devotional tradition holds that the tank's water formed from the crowds of devotees
                    who came to pay their respects after Mahavira's nirvana. Whatever the origin, Pawapuri's
                    quiet, deeply contemplative atmosphere reflects Jainism's ascetic values well.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪷</span> Pawapuri at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🪷", label: "Key Site", value: "Jal Mandir" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Patna (~90km)" },
                        { icon: "🕉️", label: "Significance", value: "Mahavira's nirvana site" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹3,000" },
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
                  <h2>Best Time to Visit Pawapuri</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for walking around the tank and temple complex.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat",
                        text: "Temperatures cross 40°C on the open causeway and tank surroundings.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Lush green surroundings but heavier rain and flood risk in parts of the plain.",
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
                    <strong>Our pick:</strong> November to February for the most comfortable visit.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pawapuri</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Patna (~90km) or Gaya are the nearest airports.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Bihar Sharif or Rajgir are the nearest railway stations.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road access is the standard approach, typically combined
                      with Rajgir and Nalanda.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Pawapuri with Rajgir and Nalanda for a single-day
                    Bihar Buddhist-Jain heritage circuit — hire a car with driver given thin local transport.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Pawapuri</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Temple tank landscape evoking Pawapuri's Jal Mandir"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Jal Mandir:</strong> The white marble water temple marking Mahavira's nirvana
                      site, reached by a causeway across the lotus-filled tank.
                    </li>
                    <li>
                      <strong>Samosharan Temple:</strong> Another significant Jain temple complex nearby.
                    </li>
                    <li>
                      <strong>The lotus tank itself:</strong> Best photographed in morning light, when the
                      water is calmest.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Pawapuri</h2>
                  <p>
                    Pawapuri has very limited standalone accommodation — most travelers base in Patna,
                    Rajgir, or Bodh Gaya and visit as a day trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: ["Dharamshala-style pilgrim stays near the temple", "Basic lodges in Bihar Sharif"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: ["Resort-style stays, Rajgir (nearby)"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "Limited options",
                        picks: ["Nearest luxury options are in Bodh Gaya or Patna"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li>
                      <strong>Jain vegetarian thalis:</strong> Given Pawapuri's Jain pilgrim traffic,
                      several eateries serve strict Jain-style vegetarian food (no root vegetables).
                    </li>
                    <li>
                      <strong>Litti Chokha:</strong> Bihar's signature dish, widely available across the
                      region.
                    </li>
                    <li>
                      <strong>Sattu-based snacks:</strong> Simple, filling roasted gram flour dishes common
                      throughout Bihar.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Pawapuri Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Jal Mandir & Samosharan Temple",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early for the calmest views of the tank",
                          "Visit Jal Mandir and Samosharan Temple",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Onward to Rajgir/Nalanda",
                        color: "bg-forest-600",
                        activities: [
                          "Continue to Rajgir and Nalanda for a fuller heritage circuit day",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
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
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Day-trip car hire (with Rajgir/Nalanda)", "₹1,800", "₹2,500"],
                          ["Food/day", "₹250", "₹600"],
                          ["Day-trip total", "₹2,050", "₹3,100"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes accommodation, typically based elsewhere given limited local options.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Pawapuri</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly and respectfully:</strong> This is a genuinely sacred,
                      contemplative Jain site.
                    </li>
                    <li>
                      <strong>Combine with Rajgir and Nalanda:</strong> Makes for a fuller, more efficient
                      heritage circuit day.
                    </li>
                    <li>
                      <strong>Visit unhurried:</strong> This is a peaceful site that rewards slow,
                      contemplative time rather than a rushed stop.
                    </li>
                    <li>
                      <strong>Remove shoes for temple entry:</strong> As with most Indian temples, footwear
                      comes off before crossing to Jal Mandir.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Dress modestly and respectfully",
                          "Combine with Rajgir and Nalanda",
                          "Visit in morning light for the best photos",
                          "Take time to appreciate the site's quiet atmosphere",
                          "Remove shoes before crossing to Jal Mandir",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect standalone accommodation in Pawapuri itself",
                          "Rush the visit — the site rewards unhurried time",
                          "Wear revealing clothing",
                          "Skip combining with nearby Rajgir/Nalanda",
                          "Visit during peak summer heat (Apr–Jun)",
                        ].map((item) => (
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Pawapuri", "Bihar", "Jain Pilgrimage", "Jal Mandir", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PAWAPURI_GEAR} destination="Pawapuri" />

              <RelatedPostsGrid currentSlug="pawapuri-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="pawapuri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
