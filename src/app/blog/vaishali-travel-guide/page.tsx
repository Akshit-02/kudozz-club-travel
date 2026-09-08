// src/app/blog/vaishali-travel-guide/page.tsx
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
  title: "Vaishali Travel Guide: The World's First Republic & Buddha's Last Sermon",
  description:
    "The complete Vaishali travel guide. The Ashokan Pillar at Kolhua, the ancient Licchavi republic, Buddha's final sermon site, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Vaishali travel guide, Ashokan Pillar Kolhua, Licchavi republic, Buddha last sermon, Vaishali Bihar, best time to visit Vaishali, how to reach Vaishali, Vaishali day trip from Patna",
  openGraph: {
    title: "Vaishali Travel Guide: The World's First Republic & Buddha's Last Sermon",
    description:
      "A city often cited as the site of the world's earliest republic, where Buddha delivered his final sermon before his death — the complete guide to Vaishali.",
    url: "https://club.kudozz.in/blog/vaishali-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stupa and green plains landscape evoking Vaishali, Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishali Travel Guide: The World's First Republic & Buddha's Last Sermon",
    description:
      "The ancient Licchavi republic and the site of Buddha's final sermon — the complete guide to Vaishali.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/vaishali-travel-guide",
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
          headline:
            "Vaishali Travel Guide: The World's First Republic & Buddha's Last Sermon",
          description: "The complete Vaishali travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/vaishali-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Vaishali",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Vaishali Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Was Vaishali really the world's first republic?",
    a: "It's a widely-cited historical characterization rather than an uncontested fact. Vaishali was the capital of the ancient Licchavi confederacy, which historians often point to as an early example of republican governance — but ancient political systems are debated among scholars, so treat it as a notable claim rather than settled history.",
  },
  {
    q: "How many days do I need in Vaishali?",
    a: "A single day is enough — most travelers visit as a focused day trip from Patna, covering the Ashokan Pillar at Kolhua, the main stupa site, and the archaeological museum.",
  },
  {
    q: "What is the best time to visit Vaishali?",
    a: "October to March, when temperatures are cooler and more comfortable for walking the open excavation sites. Summer (April–June) gets extremely hot on the Gangetic plain.",
  },
  {
    q: "How do I reach Vaishali?",
    a: "The nearest airport is Patna, about 55km away. There's no major direct railway to Vaishali itself, so road transport from Patna is the standard approach — hiring a car for the day trip is the most practical option.",
  },
  {
    q: "What is Vaishali's connection to Buddha?",
    a: "Buddha is said to have visited Vaishali multiple times during his life and delivered his final sermon here, shortly before announcing his impending death (parinirvana). This makes it one of the significant sites in the Buddhist pilgrimage circuit alongside Bodh Gaya and Rajgir.",
  },
  {
    q: "Is Vaishali significant to Jainism too?",
    a: "Yes — Vaishali is traditionally cited as the birthplace of Mahavira, the 24th and last Jain Tirthankara, giving the site dual religious significance for both Buddhist and Jain travelers.",
  },
  {
    q: "Can I combine Vaishali with other Bihar heritage sites?",
    a: "Yes — it's commonly combined with a Patna day trip, and some travelers extend a broader Buddhist-Jain heritage circuit to include Rajgir, Nalanda, and Pawapuri, though those require additional travel days given the distances involved.",
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
  { id: "introduction", title: "Why Vaishali?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vaishali", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VAISHALI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a day of open-site heritage walking",
    emoji: "🏛️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "The Kolhua site and stupa grounds involve walking on gravel and open ground with little shade.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Vaishali's excavated sites are spread across open ground with uneven gravel paths.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Little shade across the archaeological grounds, and Bihar's Gangetic plain sun is intense outside winter.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The Kolhua pillar and stupa sites offer virtually no shade for extended periods.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Facilities are minimal around the excavation sites — carry your own water.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "This is a day-trip destination with thin local infrastructure.",
      },
      {
        name: "Sun Hat",
        description: "For extended time in the open at Kolhua and the museum grounds.",
        price: "₹449",
        rating: 4.4,
        reviews: "5.1k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Direct sun exposure adds up quickly on a full day of open-site sightseeing.",
      },
    ],
  },
];

export default function VaishaliGuidePage() {
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
              alt="Ancient stupa and green plains landscape evoking Vaishali, Bihar"
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
                { label: "Vaishali", href: null },
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
              {["Vaishali", "Bihar", "Ancient Republic", "Buddhist Heritage"].map((tag) => (
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
              Vaishali Travel Guide: The World's First Republic & Buddha's Last Sermon
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A city often cited as the site of the world's earliest republic, where Buddha delivered his final sermon before his death.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Vaishali, Bihar",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Why Vaishali?</h2>
                  <p>
                    <strong>Vaishali</strong> was the capital of the ancient Licchavi confederacy, and historians
                    often point to its system of governance as an early example of a republican model —
                    it's popularly described as "the world's first republic," a widely-cited characterization
                    rather than an uncontested historical fact, since ancient political systems remain a
                    subject of scholarly debate. What's clearer is Vaishali's deep religious significance:
                    Buddha is said to have visited the city multiple times and delivered his{" "}
                    <strong>final sermon here</strong>, shortly before announcing his impending death.
                  </p>
                  <p>
                    Vaishali also holds major significance for Jainism, traditionally cited as the{" "}
                    <strong>birthplace of Mahavira</strong>, the last Jain Tirthankara — giving the site a
                    genuine dual religious weight that few other places in Bihar carry.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Vaishali at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🏛️", label: "Key Site", value: "Ashokan Pillar, Kolhua" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Patna (~55km)" },
                        { icon: "🕉️", label: "Significance", value: "Buddhist & Jain heritage" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,500" },
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
                  <h2>Best Time to Visit Vaishali</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather ideal for walking the open excavation sites without the harsh Gangetic plain heat.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat",
                        text: "Temperatures regularly cross 40°C, making the open, shade-free sites genuinely difficult to visit by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavy rains and flooding risk across parts of the Gangetic plain can disrupt road access.",
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
                    <strong>Our pick:</strong> November to February — the most comfortable window for a full
                    day of open-site walking.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vaishali</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Patna, about 55km away, is the nearest airport with strong
                      domestic connectivity.
                    </li>
                    <li>
                      <strong>By Rail:</strong> No major direct railway serves Vaishali itself — Patna
                      Junction is the practical rail hub.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road transport from Patna is the standard approach, and most
                      travelers do this as a day trip.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a car with driver from Patna rather than relying on
                    local transport — it's the most reliable way to cover Vaishali's spread-out sites in a
                    single day.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Vaishali</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Ancient stupa and archaeological grounds at Vaishali"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Ashokan Pillar at Kolhua:</strong> A well-preserved lion-capital pillar
                      erected by Emperor Ashoka, one of the more intact surviving Ashokan pillars in India.
                    </li>
                    <li>
                      <strong>Relic Stupa:</strong> A large stupa believed to house a portion of the
                      Buddha's relics, part of the same Kolhua complex.
                    </li>
                    <li>
                      <strong>Vaishali Archaeological Museum:</strong> Displays excavated artifacts from
                      the site, offering useful context before or after visiting the ruins.
                    </li>
                    <li>
                      <strong>Mahavira's birthplace tradition:</strong> Vaishali's Jain significance as
                      Mahavira's traditional birthplace adds a second pilgrimage layer to the visit.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Vaishali</h2>
                  <p>
                    Vaishali has very limited standalone accommodation — nearly all visitors base themselves
                    in Patna and day-trip out.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: ["Budget lodges, central Patna", "Basic guesthouses near Vaishali"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹5,000/night",
                        picks: ["Business hotels, Patna"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000+/night",
                        picks: ["Premium chain hotels, Patna"],
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
                      <strong>Litti Chokha:</strong> Bihar's signature dish — roasted wheat balls stuffed
                      with spiced gram flour, served with mashed vegetable chokha.
                    </li>
                    <li>
                      <strong>Sattu-based snacks:</strong> Roasted gram flour drinks and parathas, cheap
                      and filling, widely available in Patna.
                    </li>
                    <li>
                      <strong>Patna's dining scene:</strong> Since most travelers base in Patna, the wider
                      range of restaurants there covers most tastes.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Vaishali Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Kolhua Complex",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Patna (~1.5–2hrs)",
                          "Ashokan Pillar and relic stupa at Kolhua",
                          "Archaeological Museum",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return & Rest",
                        color: "bg-forest-600",
                        activities: [
                          "Return drive to Patna",
                          "Evening at leisure or continue sightseeing in Patna",
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
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Day-trip car hire from Patna", "₹1,800", "₹2,500", "₹4,000"],
                          ["Guide fee", "₹500", "₹1,000", "₹2,000"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Day-trip total", "₹2,600", "₹4,200", "₹7,500"],
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
                    * Excludes Patna accommodation. Costed as a day trip from Patna.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Vaishali</h2>
                  <ul>
                    <li>
                      <strong>Hire a car with driver from Patna:</strong> The most reliable way to reach
                      and cover the site in a single day.
                    </li>
                    <li>
                      <strong>Hire a guide for context:</strong> The historical layers here — republic-era
                      politics, Buddhist and Jain significance — reward some background before you arrive.
                    </li>
                    <li>
                      <strong>Visit the museum first:</strong> It provides useful context for what you'll
                      see at the excavated sites.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Facilities are minimal at the open
                      excavation grounds.
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
                          "Hire a car with driver from Patna",
                          "Visit the museum before the excavation sites",
                          "Carry water and sun protection",
                          "Combine with Patna sightseeing in the same trip",
                          "Hire a guide for historical context",
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
                          "Expect standalone accommodation in Vaishali itself",
                          "Visit during peak summer heat (Apr–Jun)",
                          "Rely on local transport without a hired car",
                          "Skip the museum and go straight to the ruins",
                          "Expect a fast-paced, multi-stop day — the sites deserve unhurried time",
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
                {["Vaishali", "Bihar", "Ancient Republic", "Buddhist Heritage", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VAISHALI_GEAR} destination="Vaishali" />

              <RelatedPostsGrid currentSlug="vaishali-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="vaishali-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
