// src/app/blog/gurugram-travel-guide/page.tsx
import GuideBreadcrumb, { guideBreadcrumbSchema } from "@/components/ui/GuideBreadcrumb";
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import GuideTripCTA from "@/components/ui/GuideTripCTA";
import { GuidePhotoRow } from "@/components/ui/GuideImages";

export const metadata: Metadata = {
  title: { absolute: "Gurugram Travel Guide: Cyber Hub, Malls, Food & Aravallis" },
  description:
    "Gurugram (Gurgaon) guide: Cyber Hub's food scene, the Aravalli Biodiversity Park, big malls, Sultanpur bird sanctuary nearby, where to stay and a 2-day plan.",
  keywords:
    "Gurugram travel guide, Cyber Hub Gurugram, Aravalli Biodiversity Park, Gurugram malls, best time to visit Gurugram, how to reach Gurugram, Gurugram itinerary, Delhi NCR travel",
  openGraph: {
    title: "Gurugram Travel Guide: Cyber Hub, Malls, Food & Aravallis",
    description: "A farmland-turned-skyline transformed into India's corporate hub in a generation, with a lively dining scene, big malls and the Aravalli hills on its edge: the complete guide to Gurugram.",
    url: "https://club.kudozz.in/blog/gurugram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/blogs/haryana/gurugram/cyber-hub-gurugram.webp", alt: "Cyber Hub, Gurugram" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurugram Travel Guide: Cyber Hub, Malls, Food & Aravallis",
    description: "Cyber Hub, the Aravallis and India's corporate capital: the complete guide to Gurugram.",
    images: ["/images/blogs/haryana/gurugram/cyber-hub-gurugram.webp"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/gurugram-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
          {
          "@type": "BlogPosting",
          headline: "Gurugram Travel Guide: Cyber Hub, Malls, Food & Aravallis",
          description: "Gurugram (Gurgaon) guide: Cyber Hub, the Aravalli Biodiversity Park, malls, food, where to stay and a 2-day plan.",
          image: "https://club.kudozz.in/images/blogs/haryana/gurugram/cyber-hub-gurugram.webp",
          datePublished: "2026-09-07",
          dateModified: "2026-09-30",
          publisher: {
            "@type": "Organization",
            "@id": "https://club.kudozz.in/#organization",
            name: "Kudozz Club",
            url: "https://club.kudozz.in",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            "@id": "https://club.kudozz.in/#organization",
            name: "Kudozz Club",
            url: "https://club.kudozz.in",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/gurugram-travel-guide" },
          about: { "@type": "Place", name: "Gurugram", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
        },
          guideBreadcrumbSchema("gurugram-travel-guide", "Gurugram"),
          ],
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Gurugram?",
    a: "One to two days covers Cyber Hub, a mall or two, and a morning in the Aravalli Biodiversity Park comfortably. Most visitors combine it with a Delhi trip given the short metro connection.",
  },
  {
    q: "What is the best time to visit Gurugram?",
    a: "October to March offers the most comfortable weather — Delhi-NCR summers get very hot and monsoon brings high humidity, making winter the clear pick for outdoor walking between venues.",
  },
  {
    q: "How do I reach Gurugram?",
    a: "Indira Gandhi International Airport in Delhi is the nearest airport, roughly 15-20km away depending on the sector. Delhi Metro's Rapid Metro and Yellow Line connect Gurugram directly, and NH48 links it to Delhi by road.",
  },
  {
    q: "Is Gurugram worth visiting as a tourist, or is it purely a business city?",
    a: "It's primarily a corporate and residential hub, but Cyber Hub's dining scene, its malls, the Aravalli Biodiversity Park and nearby Sultanpur bird sanctuary give it a genuine leisure dimension — worth a day or two, especially combined with Delhi sightseeing.",
  },
  {
    q: "Is Kingdom of Dreams open?",
    a: "No. Kingdom of Dreams, the Bollywood-style theatre and food complex near IFFCO Chowk, was sealed by the Haryana Shehri Vikas Pradhikaran (HSVP) in 2022 over unpaid dues, and its shows no longer run. For an evening out, Cyber Hub is the main alternative.",
  },
  {
    q: "Is traffic a problem in Gurugram?",
    a: "Yes — Gurugram's traffic can be heavy, especially during peak commuting hours. Budget extra time between destinations and consider using the Metro where routes align.",
  },
  {
    q: "What is the budget for a trip to Gurugram?",
    a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,000 a day including Cyber Hub dining, and a luxury stay can run ₹10,000+ a day.",
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
  { id: "introduction", title: "Why Gurugram?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gurugram", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

export default function GurugramGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/blogs/haryana/gurugram/cyber-hub-gurugram.webp"
              alt="Cyber Hub, Gurugram"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <GuideBreadcrumb slug="gurugram-travel-guide" label="Gurugram" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Gurugram", "Cyber City", "Destination Guide", "Haryana"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Gurugram Travel Guide: Cyber Hub, Malls, Food & Aravallis
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A farmland-turned-skyline transformed into India's corporate hub in a generation, with a Bollywood-themed
              live entertainment venue unlike anything else in North India.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Gurugram, Haryana" },
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
                  <h2>Why Gurugram?</h2>
                  <p>
                    <strong>Gurugram</strong> (still widely known by its former name, Gurgaon) was farmland just a
                    few decades ago. Today it's one of India's major corporate and tech hubs, home to global
                    company headquarters, a skyline of glass towers, and a genuinely distinct urban character
                    within the Delhi-NCR sprawl — planned, private-sector-built, and unlike almost anywhere else
                    in North India.
                  </p>
                  <p>
                    For visitors, the appeal isn't heritage monuments — it's Cyber Hub's dining scene, a handful of
                    India's biggest malls, and green escapes on the city's edge: the{" "}
                    <strong>Aravalli Biodiversity Park</strong> and the{" "}
                    <Link href="/blog/sultanpur-national-park-travel-guide">Sultanpur bird sanctuary</Link>.
                    (Kingdom of Dreams, once the city's best-known show venue, has been closed since 2022.)
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h3 data-box className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏙️</span> Gurugram at a Glance
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🍽️", label: "Key Site", value: "Cyber Hub" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Delhi (IGI)" },
                        { icon: "🚇", label: "Getting Around", value: "Metro, cabs, ride-hailing" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <GuideTripCTA slug="gurugram-travel-guide" />

                <section id="best-time">
                  <h2>Best Time to Visit Gurugram</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for walking between Cyber Hub, malls, and outdoor venues." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Very hot", text: "Delhi-NCR summer heat makes extended outdoor time genuinely uncomfortable — stick to indoor venues." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — humid", text: "High humidity and occasional heavy rain can disrupt road travel between sectors." },
                      { season: "Dec – Jan", emoji: "🌫️", color: "bg-purple-50 border-purple-200", mood: "Cold, occasional smog", text: "The coolest weather, though Delhi-NCR's winter air quality can dip — check current conditions if this concerns you." },
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
                    <strong>Our pick:</strong> October to March — comfortable temperatures for a mix of indoor and
                    outdoor sightseeing across the city.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Gurugram</h2>
                  <ul>
                    <li><strong>By Air:</strong> Indira Gandhi International Airport (Delhi) is the nearest, roughly 15-20km from most Gurugram sectors depending on traffic.</li>
                    <li><strong>By Metro:</strong> The Rapid Metro and Delhi Metro's Yellow Line connect Gurugram directly to Delhi.</li>
                    <li><strong>By Road:</strong> NH48 links Gurugram to Delhi and onward toward Jaipur — well connected, though traffic can be heavy during peak hours.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Use the Metro where your route aligns with it — road traffic between Gurugram sectors during rush hour can add significant, unpredictable time to any trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Gurugram</h2>
                  <ul>
                    <li><strong>Aravalli Biodiversity Park:</strong> A former mining area restored with native Aravalli scrub and trees, with walking trails that are best early in the morning. (Kingdom of Dreams is closed: it was sealed in 2022.)</li>
                    <li><strong>Cyber Hub:</strong> Gurugram's major open-air dining and nightlife cluster, popular with the corporate crowd for evenings out.</li>
                    <li><strong>Gurugram's malls:</strong> Ambience Mall and MGF Metropolitan among the city's biggest shopping destinations.</li>
                    <li><strong>Aravalli Biodiversity Park:</strong> An urban green space and a rare pocket of nature within the built-up city.</li>
                    <li><strong>Sheetla Mata Mandir:</strong> An older temple that predates Gurugram's corporate skyline, offering a contrast to the modern city around it.</li>
                  </ul>
                  <GuidePhotoRow
                    images={[
                                            { src: "/images/blogs/haryana/gurugram/cyber-hub-gurugram.webp", alt: "Cyber Hub, Gurugram", caption: "Cyber Hub, Gurugram" },
                    ]}
                  />
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Gurugram</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Budget business hotels", "Chain economy hotels near sector roads"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹3,500–₹7,000/night", picks: ["Business hotels near Cyber Hub", "Mid-range chains near the malls"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹20,000+/night", picks: ["International 5-star chains", "Premium business hotels"] },
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
                  <h2>What to Eat in Gurugram</h2>
                  <p>
                    Gurugram's food scene is genuinely cosmopolitan — international chains and independent
                    restaurants concentrated around Cyber Hub and the mall food courts.
                  </p>
                  <ul>
                    <li><strong>Cyber Hub dining:</strong> A wide mix of Indian and international cuisines across dozens of restaurants and bars.</li>
                    <li><strong>Sector 29 and Galleria Market:</strong> Long-running clusters of restaurants and cafés beyond Cyber Hub.</li>
                    <li><strong>Murthal-style dhaba food:</strong> A short drive away on NH44, worth the detour if you want an authentic Haryanvi highway-dhaba experience.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Gurugram Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Malls & Cyber Hub", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: mall visit (Ambience/MGF Metropolitan)", "Evening: dinner at Cyber Hub"] },
                      { day: "Day 2", title: "Cyber Hub & Green Spaces", color: "bg-forest-600", activities: ["Morning: Aravalli Biodiversity Park", "Afternoon: Sheetla Mata Mandir", "Evening: dinner at Cyber Hub"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h3 data-box className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h3>
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
                          ["Accommodation/night", "₹1,800", "₹4,500", "₹12,000"],
                          ["Food/day", "₹700", "₹1,800", "₹4,000"],
                          ["Local transport per day", "₹300", "₹800", "₹2,000"],
                                                    ["Daily total", "₹1,800", "₹4,500", "₹10,500"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹21,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights to Delhi.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Gurugram</h2>
                  <ul>
                    <li><strong>Plan around traffic:</strong> Peak-hour road congestion is a genuine factor — budget buffer time between destinations.</li>
                    <li><strong>Go to the Aravalli Biodiversity Park early:</strong> Mornings are cooler and quieter, and the park has little shade by midday.</li>
                    <li><strong>Use the Metro where possible:</strong> More predictable than road traffic for cross-city trips.</li>
                    <li><strong>Combine with Delhi:</strong> The short metro connection makes a combined Delhi-Gurugram trip easy to plan.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h3 data-box className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h3>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Walk the Aravalli Biodiversity Park in the early morning", "Use the Metro for predictable cross-city travel", "Combine your trip with Delhi sightseeing", "Try Cyber Hub's varied dining scene", "Budget extra time for peak-hour traffic"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h3 data-box className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h3>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect heritage monuments — Gurugram is a modern corporate city", "Underestimate rush-hour road traffic", "Plan around Kingdom of Dreams: it has been closed since 2022", "Plan a trip focused purely on outdoor sightseeing in summer", "Ignore current air-quality advisories in peak winter"].map((item) => (
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
                        <h3 data-box className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h3>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Gurugram", "Cyber City", "Haryana", "Delhi NCR", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="gurugram-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gurugram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
