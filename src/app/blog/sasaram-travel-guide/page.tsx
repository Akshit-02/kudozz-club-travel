// src/app/blog/sasaram-travel-guide/page.tsx
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
  title: "Sasaram Travel Guide: Sher Shah Suri's Tomb & Grand Trunk Road History",
  description:
    "The complete Sasaram travel guide. Sher Shah Suri's monumental lake tomb, the Grand Trunk Road's history, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Sasaram travel guide, Sher Shah Suri Tomb, Grand Trunk Road history, Sasaram Bihar, best time to visit Sasaram, how to reach Sasaram, Sher Shah Suri Empire",
  openGraph: {
    title: "Sasaram Travel Guide: Sher Shah Suri's Tomb & Grand Trunk Road History",
    description:
      "A monumental tomb rising from an artificial lake, built for the emperor who gave India the Grand Trunk Road and the rupee — the complete guide to Sasaram.",
    url: "https://club.kudozz.in/blog/sasaram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "A monumental domed tomb rising from a lake, evoking Sher Shah Suri's Tomb in Sasaram, Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasaram Travel Guide: Sher Shah Suri's Tomb & Grand Trunk Road History",
    description: "A monumental lake tomb and the roots of the Grand Trunk Road — the complete guide to Sasaram.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sasaram-travel-guide",
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
          headline: "Sasaram Travel Guide: Sher Shah Suri's Tomb & Grand Trunk Road History",
          description: "The complete Sasaram travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/sasaram-travel-guide" },
          about: {
            "@type": "Place",
            name: "Sasaram",
            address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Sasaram Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Who was Sher Shah Suri?",
    a: "A 16th-century ruler who briefly interrupted Mughal rule by founding the Suri Empire. He's widely credited with establishing the early version of the Grand Trunk Road and introducing currency and administrative reforms that influenced the later rupee system — a substantial legacy beyond just his tomb.",
  },
  {
    q: "How many days do I need in Sasaram?",
    a: "A single day is enough to see the tomb and its surroundings properly.",
  },
  {
    q: "How do I reach Sasaram?",
    a: "Sasaram has its own railway station on the Delhi-Kolkata main line, making it genuinely well-connected by rail. The nearest airport is Gaya (~130km) or Varanasi, and road access is via NH19 — the historic Grand Trunk Road route.",
  },
  {
    q: "What is the best time to visit Sasaram?",
    a: "October to March offers the most comfortable weather for exploring the tomb grounds.",
  },
  {
    q: "Is Sher Shah Suri's Tomb connected to the Taj Mahal's design?",
    a: "Historians often cite the tomb's architecture as an important precursor influencing later Mughal tomb design, including aspects of the Taj Mahal's design lineage — a scholarly observation worth knowing rather than an overstated claim.",
  },
  {
    q: "What else is there to see in Sasaram?",
    a: "A smaller tomb of Sher Shah Suri's father sits nearby, and the town itself sits directly on NH19, the historic Grand Trunk Road route, which adds context to a visit.",
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
  { id: "introduction", title: "Why Sasaram?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sasaram", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SASARAM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for exploring the lakeside tomb grounds",
    emoji: "🏛️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "The tomb's causeway and surrounding grounds involve a fair amount of walking.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The lakeside path and causeway to the tomb reward comfortable footwear.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description: "Little shade around the open lake and tomb grounds.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The open lakeside setting offers minimal shade for extended sightseeing.",
      },
      {
        name: "Camera",
        description: "The tomb's scale and lake setting are genuinely photogenic, especially from across the water.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Sher Shah Suri's Tomb is one of the more visually striking monuments in the region.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Facilities are limited around the tomb grounds — carry your own water.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "This is a smaller heritage town with thinner amenities than Bihar's bigger hubs.",
      },
    ],
  },
];

export default function SasaramGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="A monumental domed tomb rising from a lake, evoking Sher Shah Suri's Tomb in Sasaram, Bihar"
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
                { label: "Sasaram", href: null },
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
              {["Sasaram", "Bihar", "Sher Shah Suri Tomb", "Heritage"].map((tag) => (
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
              Sasaram Travel Guide: Sher Shah Suri's Tomb & Grand Trunk Road History
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A monumental tomb rising from an artificial lake, built for the emperor who gave India the Grand Trunk Road and the rupee.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sasaram, Bihar",
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
                  <h2>Why Sasaram?</h2>
                  <p>
                    <strong>Sher Shah Suri's Tomb</strong> in Sasaram is a monumental mausoleum built for
                    the 16th-century emperor who briefly interrupted Mughal rule to found the Suri Empire.
                    It's genuinely significant for its architectural scale — a large domed structure rising
                    from the centre of an artificial lake, reached by a causeway — and for Sher Shah Suri's
                    substantial administrative legacy. He's widely credited with establishing the early
                    version of the <strong>Grand Trunk Road</strong>, one of South Asia's oldest and longest
                    major roads still in use today, and with currency and administrative reforms that
                    influenced the later rupee system.
                  </p>
                  <p>
                    Historians often cite the tomb's design as an important precursor influencing later
                    Mughal tomb architecture, including aspects of the Taj Mahal's design lineage — a
                    scholarly observation worth knowing before you visit, not an overclaim.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Sasaram at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🏛️", label: "Key Site", value: "Sher Shah Suri's Tomb" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Sasaram Junction" },
                        { icon: "🛣️", label: "Legacy", value: "Grand Trunk Road founder" },
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
                  <h2>Best Time to Visit Sasaram</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather ideal for exploring the tomb grounds and lakeside causeway.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat",
                        text: "Temperatures cross 40°C, making the open, shade-free grounds genuinely uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavy rains and flood risk across parts of the Gangetic plain can disrupt travel.",
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
                    <strong>Our pick:</strong> November to February for the most comfortable exploration of
                    the tomb and its lakeside grounds.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sasaram</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Sasaram has its own railway station on the Delhi-Kolkata
                      main line — genuinely well-connected by rail compared to many Bihar heritage sites.
                    </li>
                    <li>
                      <strong>By Air:</strong> Gaya (~130km) or Varanasi are the nearest airports.
                    </li>
                    <li>
                      <strong>By Road:</strong> Sasaram sits directly on NH19 — the historic Grand Trunk
                      Road route itself, adding a fitting layer of context to the drive in.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The train is genuinely the easiest way in — Sasaram's rail
                    connectivity is notably better than most of Bihar's smaller heritage towns.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Sasaram</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Lakeside tomb architecture evoking Sher Shah Suri's Tomb"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Sher Shah Suri's Tomb:</strong> A large domed mausoleum rising from an
                      artificial lake, reached by a causeway — the town's centrepiece monument.
                    </li>
                    <li>
                      <strong>Tomb of Sher Shah's father:</strong> A smaller, more modest tomb nearby,
                      worth a brief visit for context.
                    </li>
                    <li>
                      <strong>Grand Trunk Road (NH19):</strong> The historic road route Sher Shah Suri
                      helped establish, running right through Sasaram.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Sasaram</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: ["Basic lodges near the railway station"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: ["Business hotels, central Sasaram"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "Limited options",
                        picks: ["Very limited — most travelers day-trip in from Gaya/Varanasi"],
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
                  <h2>What to Eat in Sasaram</h2>
                  <ul>
                    <li>
                      <strong>Litti Chokha:</strong> Bihar's signature dish, widely available at local
                      eateries.
                    </li>
                    <li>
                      <strong>Sattu-based snacks:</strong> Cheap, filling roasted gram flour dishes common
                      across the state.
                    </li>
                    <li>
                      <strong>Highway dhaba food:</strong> Given Sasaram's position on NH19, several
                      roadside eateries serve solid North Indian fare for travelers passing through.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Sasaram Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Sher Shah Suri's Tomb",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive at Sasaram, check bags if traveling onward",
                          "Explore the tomb complex and lakeside causeway",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Secondary Sites & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Visit the smaller tomb of Sher Shah's father",
                          "Depart via rail (Delhi-Kolkata line) or continue along NH19",
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
                          ["Accommodation/night", "₹700", "₹2,200"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport/day", "₹250", "₹600"],
                          ["Daily total", "₹1,250", "₹3,500"],
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
                    * Excludes travel to the region. Many travelers do this as a rail day-trip stop rather
                    than an overnight base.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Sasaram</h2>
                  <ul>
                    <li>
                      <strong>Take the train if possible:</strong> Sasaram's rail connectivity is genuinely
                      better than most Bihar heritage sites.
                    </li>
                    <li>
                      <strong>Allow time to appreciate the tomb's scale:</strong> This is a substantial
                      monument, not a quick photo stop.
                    </li>
                    <li>
                      <strong>Combine with a Grand Trunk Road route trip:</strong> If you're already
                      traveling this historic corridor, Sasaram is a natural stop.
                    </li>
                    <li>
                      <strong>Carry sun protection:</strong> The open lakeside grounds offer little shade.
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
                          "Take the train given Sasaram's strong rail connectivity",
                          "Allow real time to appreciate the tomb's scale",
                          "Visit the smaller secondary tomb nearby",
                          "Carry sun protection for the open grounds",
                          "Combine with a broader Grand Trunk Road route trip",
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
                          "Rush the visit — the tomb's scale deserves proper time",
                          "Visit during peak summer heat (Apr–Jun)",
                          "Skip sun protection at the open lakeside grounds",
                          "Expect much developed tourist infrastructure beyond the tomb itself",
                          "Overlook the smaller secondary tomb nearby",
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
                {["Sasaram", "Bihar", "Sher Shah Suri Tomb", "Heritage", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SASARAM_GEAR} destination="Sasaram" />

              <RelatedPostsGrid currentSlug="sasaram-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sasaram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
