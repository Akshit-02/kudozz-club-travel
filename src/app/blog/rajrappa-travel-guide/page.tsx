// src/app/blog/rajrappa-travel-guide/page.tsx
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
  title: "Rajrappa Travel Guide: Chhinnamasta Temple & River Confluence",
  description:
    "The complete Rajrappa travel guide. The Chhinnamasta Temple, the Damodar-Bhairavi river confluence, best time to visit, how to reach, and everything you need to plan a trip.",
  keywords:
    "Rajrappa travel guide, Chhinnamasta Temple, Rajrappa temple Jharkhand, Damodar Bhairavi confluence, best time to visit Rajrappa, how to reach Rajrappa, Shakti Peetha Jharkhand",
  openGraph: {
    title: "Rajrappa Travel Guide: Chhinnamasta Temple & River Confluence",
    description:
      "A Tantric Shakti Peeth temple to Goddess Chhinnamasta at the confluence of two rivers — the complete guide to Rajrappa.",
    url: "https://club.kudozz.in/blog/rajrappa-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "River confluence landscape representative of Rajrappa, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajrappa Travel Guide: Chhinnamasta Temple & River Confluence",
    description: "A Tantric Shakti Peeth temple at the confluence of two rivers — the complete guide to Rajrappa.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/rajrappa-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Rajrappa Travel Guide: Chhinnamasta Temple & River Confluence",
          description: "The complete Rajrappa travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/rajrappa-travel-guide" },
          about: {
            "@type": "Place",
            name: "Rajrappa",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Rajrappa Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is Rajrappa known for?",
    a: "Rajrappa is home to a significant temple dedicated to Goddess Chhinnamasta, set at the confluence of the Damodar and Bhairavi rivers — one of the more important Shakti-worship sites in eastern India.",
  },
  {
    q: "What is the best time to visit Rajrappa?",
    a: "October to March offers the most comfortable weather. The temple is an active pilgrimage site year-round, with particularly heavy crowds during Navratri and other Shakti-associated festival periods.",
  },
  {
    q: "How do I reach Rajrappa?",
    a: "The nearest airport is Ranchi, about 80km away. The nearest railway stations are Ramgarh Cantt. or Bokaro, with road access primarily via Ranchi or Ramgarh.",
  },
  {
    q: "Is Rajrappa a Tantric worship site?",
    a: "Yes — Rajrappa's Chhinnamasta Temple is associated with Tantric worship traditions, which are distinct from more mainstream Hindu temple practice. Visitors should approach the site with the same respect given to any active place of worship.",
  },
  {
    q: "Is it safe to bathe at the river confluence?",
    a: "Check river conditions before bathing — currents at the sangam (confluence) can vary depending on upstream dam releases, so it's worth asking locally about current conditions.",
  },
  {
    q: "How much time do I need at Rajrappa?",
    a: "Rajrappa is typically visited as a half-day or day trip, often combined with other sites around Ranchi rather than as a standalone overnight destination.",
  },
  {
    q: "What is the budget for a trip to Rajrappa?",
    a: "As a day trip from Ranchi, expect mainly transport costs — roughly ₹1,000-2,000 for a return taxi hire, plus a modest amount for food and offerings.",
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
  { id: "introduction", title: "Why Rajrappa?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rajrappa", level: 2 },
  { id: "top-attractions", title: "What to See", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const RAJRAPPA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a temple and riverside day trip",
    emoji: "🛕",
    items: [
      {
        name: "Modest Cotton Clothing",
        description: "Rajrappa is an active pilgrimage site — modest, covered clothing is expected at the temple.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("modest+cotton+travel+clothing"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "This is a functioning place of worship, not a tourist monument — dress accordingly.",
      },
      {
        name: "Comfortable Sandals",
        description: "For walking the riverside paths and temple grounds comfortably.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.8k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"),
        tag: "Riverside essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The rocky riverbed and temple grounds are best navigated in comfortable, secure footwear.",
      },
      {
        name: "Small Bag for Valuables",
        description: "Useful for keeping shoes and belongings secure while at the temple and confluence.",
        price: "₹399",
        rating: 4.3,
        reviews: "2.9k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("small+travel+bag+valuables"),
        tag: "Temple essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Footwear typically comes off before entering the temple area, so a bag for shoes and valuables helps." ,
      },
    ],
  },
];

export default function RajrappaGuidePage() {
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
              alt="River confluence landscape representative of Rajrappa, Jharkhand"
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
                { label: "Rajrappa", href: null },
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
              {["Rajrappa", "Chhinnamasta Temple", "Heritage", "Jharkhand"].map((tag) => (
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
              Rajrappa Travel Guide: Chhinnamasta Temple & River Confluence
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Tantric Shakti Peeth temple to Goddess Chhinnamasta at the confluence of two rivers —
              everything you need to plan a visit to Rajrappa.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Rajrappa, Jharkhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,400 words",
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
                  <h2>Why Rajrappa?</h2>
                  <p>
                    <strong>Rajrappa</strong> is home to a significant temple dedicated to{" "}
                    <strong>Goddess Chhinnamasta</strong>, set at a genuinely striking location: the{" "}
                    <strong>confluence of the Damodar and Bhairavi rivers</strong>. The riverside setting is
                    as much a part of the site's character as the temple itself, with pilgrims often bathing
                    at the sangam before darshan.
                  </p>
                  <p>
                    The temple is associated with Tantric worship traditions, distinct from more mainstream
                    Hindu temple practice — a genuinely interesting stop for travelers curious about India's
                    diverse Shakti-worship heritage, and a significant pilgrimage site in its own right for
                    devotees.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🛕</span> Rajrappa at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🛕", label: "Key Site", value: "Chhinnamasta Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🌊", label: "Setting", value: "Damodar-Bhairavi confluence" },
                        { icon: "✈️", label: "Nearest Airport", value: "Ranchi (~80km)" },
                        { icon: "💰", label: "Budget", value: "₹1,000 – ₹2,000 (day trip)" },
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
                  <h2>Best Time to Visit Rajrappa</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Comfortable weather for the temple visit and any time spent at the riverside confluence.",
                      },
                      {
                        season: "Navratri period",
                        emoji: "🪔",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak pilgrimage crowds",
                        text: "The temple sees particularly heavy crowds during Navratri and other Shakti-associated festivals — a powerful atmosphere, but expect a much busier visit.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — check river conditions",
                        text: "River flow and currents at the confluence can change significantly — check conditions before bathing.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> A weekday between October and March for the calmest, most
                    comfortable visit.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Rajrappa</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Ranchi, about 80km away.
                    </li>
                    <li>
                      <strong>By Train:</strong> Ramgarh Cantt. or Bokaro are the nearest railway stations.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road access primarily via Ranchi or Ramgarh — most visitors
                      arrive by hired car or taxi.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Rajrappa with other Ranchi-area day trips to make
                    the most of the drive out.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See at Rajrappa</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="River confluence and temple setting at Rajrappa"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Chhinnamasta Temple:</strong> A significant Tantric Shakti temple dedicated to
                      Goddess Chhinnamasta — the primary reason most visitors make the trip.
                    </li>
                    <li>
                      <strong>Damodar-Bhairavi confluence:</strong> The sangam where the two rivers meet,
                      where pilgrims often bathe before darshan — a striking natural setting in its own right.
                    </li>
                    <li>
                      <strong>Rocky riverbed landscape:</strong> The area around the confluence offers a
                      quiet, scenic stretch worth a slow walk beyond the temple itself.
                    </li>
                  </ul>
                </section>

                <section id="food-guide">
                  <h2>What to Eat at Rajrappa</h2>
                  <ul>
                    <li><strong>Prasad and temple offerings:</strong> Simple sweets and offerings available near the temple.</li>
                    <li><strong>Local stalls:</strong> A handful of small food stalls near the temple complex for basic snacks and chai.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Rajrappa Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day Trip",
                        title: "Ranchi to Rajrappa and Back",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Ranchi in the morning",
                          "Visit the confluence and Chhinnamasta Temple",
                          "Explore the riverside area",
                          "Return to Ranchi by evening",
                        ],
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
                          {["Expense", "Cost"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Return taxi/cab hire from Ranchi", "₹1,000 – ₹2,000"],
                          ["Food and offerings", "₹150 – ₹400"],
                          ["Day-trip total", "₹1,150 – ₹2,400"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * A low-cost day-trip destination — the main cost is transport from Ranchi.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Rajrappa</h2>
                  <ul>
                    <li><strong>Dress modestly:</strong> This is an active place of worship, not a tourist monument.</li>
                    <li><strong>Check river conditions before bathing:</strong> Currents can vary with upstream dam releases.</li>
                    <li><strong>Visit on a weekday if you want a quieter experience:</strong> Festival periods bring heavy crowds.</li>
                    <li><strong>Combine with other Ranchi-area sites:</strong> Rajrappa makes a natural addition to a broader Ranchi day-trip circuit.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly for the temple", "Check river conditions before bathing at the confluence", "Combine with other Ranchi-area day trips", "Carry cash for offerings and local stalls", "Respect the site's Tantric worship traditions"].map((item) => (
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
                        {["Bathe at the confluence without checking current conditions", "Wear beachwear-style clothing near the temple", "Expect extensive tourist facilities on-site", "Visit during major festival crowds if you want a calm trip", "Treat the site as a curiosity rather than an active place of worship"].map((item) => (
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
                {["Rajrappa", "Chhinnamasta Temple", "Heritage", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={RAJRAPPA_GEAR} destination="Rajrappa" />
              <RelatedPostsGrid currentSlug="rajrappa-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rajrappa-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
