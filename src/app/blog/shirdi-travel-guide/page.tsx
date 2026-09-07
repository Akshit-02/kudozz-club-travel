// src/app/blog/shirdi-travel-guide/page.tsx
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
  title: "Shirdi Travel Guide: Sai Baba Temple, Timings & How to Reach",
  description:
    "The complete Shirdi travel guide — Sai Baba Samadhi Mandir, Dwarkamai, Chavadi, darshan tips, how to reach by air, rail and road, where to stay, and a budget breakdown for pilgrims.",
  keywords:
    "Shirdi travel guide, Sai Baba Temple Shirdi, Shirdi darshan timings, Shirdi Sansthan Trust, how to reach Shirdi, Shirdi Airport, Sainagar Shirdi railway station, Dwarkamai, Chavadi Shirdi, Shani Shingnapur, Shirdi from Mumbai, Shirdi from Nashik, Shirdi itinerary, Shirdi budget trip",
  openGraph: {
    title: "Shirdi Travel Guide: Sai Baba Temple, Timings & How to Reach",
    description:
      "One of India's most-visited pilgrimage towns, built around the shrine of Sai Baba — the complete guide to darshan timings, stays, and getting to Shirdi.",
    url: "https://club.kudozz.in/blog/shirdi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Golden-hour temple town atmosphere representative of Shirdi, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirdi Travel Guide: Sai Baba Temple, Timings & How to Reach",
    description:
      "Darshan timings, how to reach, and where to stay — the complete pilgrim's guide to Shirdi.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shirdi-travel-guide",
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
          headline: "Shirdi Travel Guide: Sai Baba Temple, Timings & How to Reach",
          description: "The complete Shirdi travel guide for pilgrims.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/shirdi-travel-guide" },
          about: {
            "@type": "Place",
            name: "Shirdi",
            address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Shirdi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How long is the darshan queue at Shirdi?",
    a: "It varies enormously by day and season — a quiet weekday morning can mean a wait of under an hour, while weekends and festival days like Ram Navami, Guru Purnima, and Dussehra can mean several hours in line. The Sai Baba Sansthan Trust also offers paid VIP/Sheghar darshan passes that reduce wait time — check current details at the Trust's counters or website before you go.",
  },
  {
    q: "How many days do I need for a Shirdi trip?",
    a: "One full day is enough for darshan and the core sites (Dwarkamai, Chavadi, Lendi Baug) if you arrive early. Many pilgrims extend to two days to combine it with a visit to Shani Shingnapur, about 70 km away.",
  },
  {
    q: "How do I reach Shirdi?",
    a: "Shirdi Airport (SAG) has direct flights from Mumbai, Hyderabad, and Delhi. Sainagar Shirdi railway station is well connected across Maharashtra. By road it's roughly 180 km (about 4 hours) from Mumbai and 90 km from Nashik, with an extensive MSRTC and private bus network serving the town from across the state.",
  },
  {
    q: "What is the best time to visit Shirdi?",
    a: "October to March offers the most comfortable weather for standing in queues and walking between sites. The temple itself draws pilgrims year-round, so weekday visits — regardless of season — are the more reliable way to avoid the biggest crowds.",
  },
  {
    q: "Is there affordable accommodation in Shirdi?",
    a: "Yes — the Sai Baba Sansthan Trust runs its own dharamshala-style accommodation at multiple price points alongside a wide range of private hotels, from budget lodges to more upscale properties. Trust accommodation books out fast on weekends and festival dates, so reserve well in advance.",
  },
  {
    q: "What should I know about Shirdi's dress code?",
    a: "Modest clothing covering shoulders and knees is expected. Local custom in some temple areas also discourages carrying leather items inside — check current guidance at the entrance and use the cloakroom/locker facilities provided.",
  },
  {
    q: "What is the budget for a trip to Shirdi?",
    a: "A budget pilgrim using Trust accommodation and local food can manage on roughly ₹800–₹1,200 a day, while a mid-range private-hotel stay runs closer to ₹2,500–₹3,500 a day, excluding travel to Shirdi.",
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
  { id: "introduction", title: "Why Shirdi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shirdi", level: 2 },
  { id: "top-attractions", title: "Key Sites & Darshan", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SHIRDI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for long darshan queues and temple-town travel",
    emoji: "🙏",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "Standing and shuffling forward in the darshan queue can run into hours on busy days — supportive footwear matters more here than almost anywhere.",
        price: "₹1,499", rating: 4.4, reviews: "6.8k", image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Queue essential", tagColor: "bg-amber-100 text-amber-700",
        why: "Long queue waits on foot are the single most physically demanding part of a Shirdi visit.",
      },
      {
        name: "Modest Cotton Clothing Set",
        description: "Covered shoulders and knees are expected inside the temple complex.",
        price: "₹899", rating: 4.3, reviews: "3.5k", image: "👕",
        affiliateUrl: amazonSearchUrl("modest+cotton+travel+clothing"),
        tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700",
        why: "Shirdi is an active, conservative pilgrimage town — appropriate dress avoids any issue at the entrance.",
      },
      {
        name: "Small Cross-Body Bag",
        description: "For valuables, shoes tokens, and documents — large bags are often restricted near the shrine and need to be deposited at lockers.",
        price: "₹649", rating: 4.3, reviews: "2.9k", image: "👝",
        affiliateUrl: amazonSearchUrl("small+cross+body+travel+bag"),
        tag: "Darshan essential", tagColor: "bg-stone-100 text-stone-700",
        why: "Keeping essentials compact avoids the hassle of a large bag being turned away at the temple's security checkpoint.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Long queue waits, especially in warmer months, mean hydration matters as much as footwear.",
        price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Queue essential", tagColor: "bg-sky-100 text-sky-700",
        why: "Water isn't always readily available once you're inside the queue lines.",
      },
      {
        name: "Light Shawl / Stole",
        description: "Doubles as a modesty cover-up and useful in cooler winter evenings walking between Dwarkamai, Chavadi, and Lendi Baug.",
        price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+shawl+stole+travel"),
        tag: "Versatile pick", tagColor: "bg-forest-100 text-forest-700",
        why: "One item that solves both the dress-code requirement and cool-evening comfort.",
      },
    ],
  },
];

export default function ShirdiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Golden-hour temple town atmosphere representative of Shirdi, Maharashtra"
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
                { label: "Shirdi", href: null },
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
              {["Shirdi", "Sai Baba Temple", "Pilgrimage", "Heritage", "Maharashtra"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Shirdi Travel Guide: Sai Baba Temple, Timings & How to Reach
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of India's most-visited pilgrimage towns, built around
              the shrine of Sai Baba — the complete guide to darshan
              timings, stays, and getting to Shirdi.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Shirdi, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Shirdi?</h2>
                  <p>
                    A small Maharashtra town became one of India's most
                    visited pilgrimage destinations because of one man:
                    <strong> Sai Baba</strong>, a saint who lived and taught
                    in Shirdi for decades until his passing in 1918, and
                    whose teachings drew — and continue to draw — devotees
                    across Hindu and Muslim traditions alike. The
                    <strong> Sai Baba Samadhi Mandir</strong>, built over his
                    resting place, now receives an extraordinary number of
                    pilgrims every single day of the year, not just on
                    festival dates.
                  </p>
                  <p>
                    What makes Shirdi distinct from many other Indian
                    pilgrimage towns is how tightly organised the entire
                    visitor experience is — the Sai Baba Sansthan Trust runs
                    the temple complex, accommodation, and much of the
                    town's infrastructure, which means darshan, even at its
                    busiest, generally moves in an orderly, well-managed
                    system rather than an unstructured crowd.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🙏</span> Shirdi at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🛕", label: "Key Site", value: "Sai Baba Samadhi Mandir" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Shirdi (SAG)" },
                        { icon: "🚉", label: "Railway", value: "Sainagar Shirdi" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹3,500" },
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
                  <h2>Best Time to Visit Shirdi</h2>
                  <p>
                    The temple operates and draws pilgrims year-round, so
                    "best time" here is more about weather comfort and
                    crowd avoidance than seasonal closures.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best weather", text: "Cool, comfortable temperatures make standing in the darshan queue far more bearable than the summer months." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — queues feel longer", text: "High heat makes long outdoor queue waits genuinely tough. Early morning visits are strongly recommended in this window." },
                      { season: "Weekdays", emoji: "🕊️", color: "bg-sky-50 border-sky-200", mood: "Always the quieter choice", text: "Regardless of season, visiting on a weekday — outside major festival dates — is the most reliable way to shorten your wait." },
                      { season: "Festival Dates", emoji: "🎉", color: "bg-purple-50 border-purple-200", mood: "Extremely crowded", text: "Ram Navami, Guru Purnima, and Dussehra bring dramatically larger crowds and much longer darshan waits — plan accordingly." },
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
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Shirdi</h2>
                  <ul>
                    <li><strong>By Air:</strong> Shirdi Airport (SAG) has direct flights from Mumbai, Hyderabad, and Delhi — the fastest way in.</li>
                    <li><strong>By Train:</strong> Sainagar Shirdi railway station is well connected across Maharashtra and beyond.</li>
                    <li><strong>By Road:</strong> About 180 km (roughly 4 hours) from Mumbai and 90 km from Nashik, with an extensive MSRTC and private bus network from across the state.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book Trust accommodation and, if you plan to use it, a VIP/Sheghar darshan pass well in advance — both fill up quickly on weekends and festival dates.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Key Sites & Darshan</h2>
                  <ul>
                    <li><strong>Sai Baba Samadhi Mandir:</strong> The central shrine and the reason nearly everyone visits — built over Sai Baba's resting place, drawing devotees across religious lines.</li>
                    <li><strong>Dwarkamai:</strong> The mosque where Sai Baba lived for years and maintained a sacred fire (dhuni) that is still tended today — one of the most spiritually significant spots in town.</li>
                    <li><strong>Chavadi:</strong> An alternate resting place used by Sai Baba on alternate nights during his life, now a small shrine in its own right.</li>
                    <li><strong>Lendi Baug:</strong> A garden Sai Baba himself tended, offering a quieter, more contemplative stop after the main queue.</li>
                    <li><strong>Sai Heritage Village:</strong> A museum-style attraction recreating the era and setting of Sai Baba's life, useful for context before or after darshan.</li>
                    <li><strong>Shani Shingnapur:</strong> About 70 km away, famous for a temple in a village where homes traditionally have no doors — a popular combined day trip from Shirdi.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Shirdi</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🛏️", range: "₹400–₹1,200/night", picks: ["Sai Baba Sansthan Trust dharamshala rooms", "Budget lodges near the temple complex", "Basic private hotels on the temple road"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["Trust's premium accommodation blocks", "Private mid-range hotels near the bus stand", "Family-run guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "₹5,000–₹10,000+/night", picks: ["Upscale hotel chains on the outskirts", "Resort-style properties toward Kopargaon"] },
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
                  <blockquote>
                    Book Sai Baba Sansthan Trust accommodation directly
                    through official channels well ahead of your trip —
                    it's the most affordable option and the closest to the
                    temple complex.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Shirdi</h2>
                  <ul>
                    <li><strong>Prasadalaya meals:</strong> The Trust runs a large dining hall (Prasadalaya) serving simple, affordable vegetarian meals to pilgrims — a genuinely worthwhile experience beyond just the food.</li>
                    <li><strong>Local Maharashtrian thalis:</strong> Simple vegetarian thalis are widely available at eateries around the temple road.</li>
                    <li><strong>Street snacks:</strong> Vada pav and basic chaat stalls cluster near the bus stand and main pilgrim routes.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-2 Day Shirdi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Darshan & Core Sites", color: "bg-amber-700", activities: ["Early morning: Sai Baba Samadhi Mandir darshan", "Visit Dwarkamai and Chavadi", "Afternoon: Lendi Baug and Sai Heritage Village", "Evening aarti (timing varies — check locally)"] },
                      { day: "Day 2 (optional)", title: "Shani Shingnapur Day Trip", color: "bg-forest-600", activities: ["Morning drive to Shani Shingnapur (~70 km)", "Visit the temple and the famous doorless village", "Return to Shirdi by afternoon", "Departure"] },
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
                          ["Accommodation/night", "₹500", "₹2,200", "₹7,500"],
                          ["Food/day", "₹200", "₹700", "₹1,800"],
                          ["Local transport/day", "₹200", "₹600", "₹1,500"],
                          ["Darshan/donations", "₹0 – 300", "₹500 – 1,000", "₹1,000+"],
                          ["Daily total", "₹900 – ₹1,200", "₹4,000", "₹11,800"],
                          ["1-Day trip total", "₹1,200", "₹4,000", "₹11,800"],
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
                    * Excludes travel to Shirdi. VIP/Sheghar darshan pass
                    fees vary — confirm current rates with the Trust before you go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Shirdi</h2>
                  <ul>
                    <li><strong>Visit on a weekday if possible:</strong> The single biggest factor in a shorter queue wait, regardless of season.</li>
                    <li><strong>Dress modestly:</strong> Covered shoulders and knees, and check current guidance on leather items in temple areas.</li>
                    <li><strong>Book Trust accommodation early:</strong> It's the most affordable option and fills up fast, especially on weekends and festival dates.</li>
                    <li><strong>Use the cloakroom/locker facilities:</strong> For shoes and any restricted items before entering the temple complex.</li>
                    <li><strong>Carry small bags only:</strong> Large bags are typically not allowed near the shrine.</li>
                    <li><strong>Combine with Shani Shingnapur:</strong> A natural add-on for a two-day trip if you have the time.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit on a weekday for shorter queues", "Dress modestly throughout the temple complex", "Book Trust accommodation well in advance", "Try a meal at the Prasadalaya", "Carry only small bags into the shrine area", "Check current darshan timings before you travel"].map((item) => (
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
                        {["Plan a first-time visit on a major festival date without expecting long waits", "Wear casual beachwear-style clothing", "Carry large bags into the shrine area", "Assume walk-in accommodation on a weekend", "Skip checking current darshan pass details beforehand"].map((item) => (
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
                {["Shirdi", "Sai Baba Temple", "Pilgrimage", "Maharashtra", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SHIRDI_GEAR} destination="Shirdi" />

              <RelatedPostsGrid currentSlug="shirdi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shirdi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
