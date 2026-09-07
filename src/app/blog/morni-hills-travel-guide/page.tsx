// src/app/blog/morni-hills-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, { GearSection } from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Morni Hills Travel Guide: Haryana's Only Hill Station",
  description:
    "The complete Morni Hills travel guide. Tikkar Taal, Morni Fort, where to stay, best time to visit, and a full itinerary through Haryana's sole hill station near Chandigarh.",
  keywords:
    "Morni Hills travel guide, Tikkar Taal, Morni Fort, best time to visit Morni Hills, how to reach Morni Hills, Haryana hill station, Chandigarh weekend trip",
  openGraph: {
    title: "Morni Hills Travel Guide: Haryana's Only Hill Station",
    description: "Two natural lakes and a Shivalik-range fort ruin make up Haryana's sole hill station, an easy escape from Chandigarh and Panchkula — the complete guide to Morni Hills.",
    url: "https://club.kudozz.in/blog/morni-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty forested hills representative of Morni Hills, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morni Hills Travel Guide: Haryana's Only Hill Station",
    description: "Tikkar Taal, Morni Fort, and Haryana's only hill station — the complete guide to Morni Hills.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/morni-hills-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Morni Hills Travel Guide: Haryana's Only Hill Station",
          description: "The complete Morni Hills travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/morni-hills-travel-guide" },
          about: { "@type": "Place", name: "Morni Hills", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Morni Hills Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Morni Hills?",
    a: "A single day is enough to see Tikkar Taal and Morni Fort. An overnight stay lets you enjoy a quieter evening and morning away from Chandigarh's crowds.",
  },
  {
    q: "What is the best time to visit Morni Hills?",
    a: "October to March offers the most pleasant weather. March to June gets hot, and while monsoon (July–September) turns the hills green, roads can be more landslide-prone.",
  },
  {
    q: "How do I reach Morni Hills?",
    a: "Chandigarh, roughly 45km away, is the nearest airport and railway hub. Road access is via Panchkula.",
  },
  {
    q: "Is Morni Hills like Himachal's hill stations?",
    a: "No — set honest expectations. Morni Hills is a modest escape, notable mainly for being Haryana's only hill station rather than for Himachal-scale scenery. It's still a genuinely pleasant quick trip from Chandigarh.",
  },
  {
    q: "Can I go boating at Morni Hills?",
    a: "Yes — Tikkar Taal's twin natural lakes offer boating, one of the area's main draws for visitors.",
  },
  {
    q: "Is Morni Hills good for a day trip from Chandigarh?",
    a: "Yes — it's one of the easiest and most popular quick escapes for Chandigarh and Panchkula residents, doable comfortably as a single day out.",
  },
  {
    q: "What is the budget for a trip to Morni Hills?",
    a: "A budget traveler can manage on roughly ₹1,000 a day, a mid-range trip closer to ₹2,500 a day. This is a low-cost, low-key destination overall.",
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
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Morni Hills?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Morni Hills", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MORNI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for lake boating and a short fort walk",
    emoji: "🏞️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "For the short walk up to Morni Fort's ruins and general exploring around Tikkar Taal.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The fort ruins involve some uneven ground and a modest climb." },
      {
        name: "Light Layers",
        description: "Mornings and evenings at this modest elevation are cooler than nearby Chandigarh.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "4.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("light+jacket+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Temperature dips more than expected once the sun sets over the hills."
      },
      {
        name: "Reusable Water Bottle",
        description: "For a day spent between Tikkar Taal and Morni Fort with limited facilities in between.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is a modest, low-infrastructure destination — carry your own water." },
      {
        name: "Camera",
        description: "For the lake views and valley panoramas from Morni Fort.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Tikkar Taal's twin lakes and the fort's valley views are genuinely photogenic." },
    ],
  },
];

export default function MorniHillsGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/coorg.jpg"
              alt="Misty forested hills representative of Morni Hills, Haryana"
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
                { label: "Morni Hills", href: null },
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
              {["Morni Hills", "Tikkar Taal", "Off-beat", "Haryana"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Morni Hills Travel Guide: Haryana's Only Hill Station
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Two natural lakes and a Shivalik-range fort ruin make up Haryana's sole hill station, an easy escape
              from Chandigarh and Panchkula.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Morni Hills, Haryana" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Morni Hills?</h2>
                  <p>
                    <strong>Morni Hills</strong> holds a modest but genuine distinction: it's Haryana's only hill
                    station, part of the outer Shivalik range. It won't compete with Himachal's dramatic scenery —
                    Haryana is a largely flat state, and Morni Hills is notable simply for existing here at all —
                    but that context is exactly what makes it a pleasant, low-key escape for Chandigarh and
                    Panchkula residents.
                  </p>
                  <p>
                    The main draws are <strong>Tikkar Taal</strong>, a set of twin natural lakes good for boating,
                    and the ruins of <strong>Morni Fort</strong>, perched with valley views over the surrounding
                    forest.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏞️</span> Morni Hills at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🏞️", label: "Key Site", value: "Tikkar Taal" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Access", value: "Chandigarh (~45km)" },
                        { icon: "🏰", label: "Also See", value: "Morni Fort ruins" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹2,500" },
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
                  <h2>Best Time to Visit Morni Hills</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather, ideal for lake boating and the fort walk." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Summer heat makes extended outdoor time less pleasant, though still doable in early morning." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — green but risky roads", text: "The hills turn lush green, but roads can become landslide-prone during heavy rain." },
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
                    <strong>Our pick:</strong> October to March, and a weekday visit if you can manage it — Morni
                    Hills gets busy with day-trippers from Chandigarh on weekends.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Morni Hills</h2>
                  <ul>
                    <li><strong>By Air/Rail:</strong> Chandigarh, roughly 45km away, is the nearest airport and railway hub.</li>
                    <li><strong>By Road:</strong> Accessible via Panchkula, a straightforward drive from Chandigarh.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> This is a genuinely easy half-day drive from Chandigarh — no need for elaborate trip planning, just check road conditions if traveling during monsoon.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Morni Hills</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Forested hills near Morni, Haryana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Tikkar Taal:</strong> Twin natural lakes offering boating, the area's main highlight.</li>
                    <li><strong>Morni Fort:</strong> A ruined hilltop fort with panoramic valley views over the surrounding forest.</li>
                    <li><strong>Nature walks:</strong> The forested Shivalik terrain offers pleasant, quiet walking away from Chandigarh's traffic.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Morni Hills</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,600/night", picks: ["Government-run guesthouses", "Basic local lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Lake-view mid-range resorts", "Tourism board eco-huts"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very few premium options — this is a low-key, day-trip-oriented destination"] },
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
                  <h2>What to Eat in Morni Hills</h2>
                  <ul>
                    <li><strong>Simple local thalis:</strong> Basic vegetarian and non-vegetarian meals at small local eateries.</li>
                    <li><strong>Tea and roadside snacks:</strong> Available near Tikkar Taal for a quick break during a day trip.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Morni Hills Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Tikkar Taal", color: "bg-amber-700", activities: ["Drive from Chandigarh/Panchkula", "Boating at Tikkar Taal", "Lakeside walk"] },
                      { day: "Afternoon", title: "Morni Fort", color: "bg-forest-600", activities: ["Short climb to the fort ruins", "Valley views and photos", "Return drive to Chandigarh"] },
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹800", "₹2,200"],
                          ["Food/day", "₹250", "₹600"],
                          ["Boating + local transport", "₹300", "₹600"],
                          ["Daily total", "₹1,000", "₹2,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Most visitors do this as a day trip with no overnight cost.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Morni Hills</h2>
                  <ul>
                    <li><strong>Manage expectations:</strong> This is a modest hill escape, not a Himachal-scale destination — enjoy it on its own terms.</li>
                    <li><strong>Go on a weekday:</strong> Weekends bring noticeable day-tripper crowds from Chandigarh.</li>
                    <li><strong>Check road conditions in monsoon:</strong> Heavy rain can affect the hill roads.</li>
                    <li><strong>Bring cash:</strong> Facilities are basic and card acceptance is limited.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Go boating at Tikkar Taal", "Climb up to Morni Fort for the valley views", "Visit on a weekday for fewer crowds", "Carry cash for local purchases", "Treat it as a relaxed half-day escape from Chandigarh"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect Himachal-scale scenery or infrastructure", "Visit expecting extensive dining/nightlife options", "Drive the hill roads carelessly during monsoon", "Rely on cards for most local purchases", "Plan more than a day or two here"].map((item) => (
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
                {["Morni Hills", "Tikkar Taal", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MORNI_GEAR} destination="Morni Hills" />

              <RelatedPostsGrid currentSlug="morni-hills-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="morni-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
