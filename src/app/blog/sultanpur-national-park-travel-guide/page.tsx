// src/app/blog/sultanpur-national-park-travel-guide/page.tsx
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
  title: "Sultanpur National Park Travel Guide: Birdwatching Near Delhi",
  description:
    "The complete Sultanpur National Park travel guide. Migratory bird season, watchtowers, best time to visit, how to reach, and tips for a half-day birdwatching trip from Delhi-NCR.",
  keywords:
    "Sultanpur National Park travel guide, Sultanpur bird sanctuary, birdwatching near Delhi, migratory birds Haryana, best time to visit Sultanpur National Park, how to reach Sultanpur National Park",
  openGraph: {
    title: "Sultanpur National Park Travel Guide: Birdwatching Near Delhi",
    description: "A wetland sanctuary that turns into a migratory bird spectacle every winter, barely an hour from Delhi's traffic — the complete guide to Sultanpur National Park.",
    url: "https://club.kudozz.in/blog/sultanpur-national-park-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "Wetland habitat representative of Sultanpur National Park, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultanpur National Park Travel Guide: Birdwatching Near Delhi",
    description: "A migratory bird spectacle every winter, barely an hour from Delhi — the complete guide to Sultanpur National Park.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/sultanpur-national-park-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Sultanpur National Park Travel Guide: Birdwatching Near Delhi",
          description: "The complete Sultanpur National Park travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/sultanpur-national-park-travel-guide" },
          about: { "@type": "Place", name: "Sultanpur National Park", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Sultanpur National Park Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Sultanpur National Park worth visiting outside winter?",
    a: "Not really for birdwatching specifically — the migratory bird spectacle is genuinely seasonal, peaking November to February. Outside this window there's far less to see, so plan your visit around winter if birds are the goal." },
  {
    q: "How far is Sultanpur National Park from Delhi?",
    a: "Roughly 45-50km from central Delhi and about 15km from Gurugram, making it an easy half-day or day trip from Delhi-NCR." },
  {
    q: "How do I reach Sultanpur National Park?",
    a: "Road is the standard approach — it's a straightforward drive from Gurugram or Delhi, with no direct rail or air access to the park itself." },
  {
    q: "Do I need my own binoculars?",
    a: "It's strongly recommended. While the park has watchtowers for viewing, your own binoculars make a significant difference to the experience, especially for spotting species farther out on the wetland." },
  {
    q: "What birds can I expect to see?",
    a: "Commonly cited species include various migratory ducks, painted storks, and other waders, with flamingos reported in some years — sightings vary by season and year, so treat any specific species as a possibility rather than a guarantee." },
  {
    q: "How much time should I budget for a visit?",
    a: "A half-day is sufficient — this is a compact park suited to a focused few hours rather than a full-day itinerary." },
  {
    q: "What is the budget for a trip to Sultanpur National Park?",
    a: "This is a low-cost day trip — a modest entry fee plus transport from Delhi-NCR is the main cost, roughly ₹500-1,000 per person all-in depending on how you travel." },
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
  { id: "introduction", title: "Why Sultanpur National Park?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "top-attractions", title: "What to Do & See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SULTANPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a focused half-day of birdwatching",
    emoji: "🦩",
    items: [
      {
        name: "Binoculars",
        description: "Essential for spotting birds across the wetland, especially species further from the watchtowers.",
        price: "₹1,999",
        rating: 4.5,
        reviews: "6.5k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+birdwatching"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "This is a wetland/bird-focused destination — without binoculars, most of the appeal is lost." },
      {
        name: "Telephoto Camera Lens",
        description: "For photographing birds at a respectful distance without disturbing them.",
        price: "₹8,999+",
        rating: 4.4,
        reviews: "2.1k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("telephoto+lens+bird+photography"),
        tag: "Photography essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "A longer lens is the difference between a documentary shot and an unusable speck in the frame." },
      {
        name: "Neutral-Toned Clothing",
        description: "Muted colors are less disruptive to wildlife and improve your viewing experience near the watchtowers.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("neutral+outdoor+clothing"),
        tag: "Birding essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Bright colors are more likely to startle birds before you get a good look." },
      {
        name: "Sun Hat",
        description: "Watchtowers and open wetland viewpoints offer little shade during a winter-morning visit.",
        price: "₹499",
        rating: 4.4,
        reviews: "5.0k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+outdoor+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Even in winter, extended time in the open wetland means real sun exposure." },
    ],
  },
];

export default function SultanpurGuidePage() {
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
              alt="Wetland habitat representative of Sultanpur National Park, Haryana"
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
                { label: "Sultanpur National Park", href: null },
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
              {["Sultanpur National Park", "Birdwatching", "Adventure", "Haryana"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Sultanpur National Park Travel Guide: Birdwatching Near Delhi
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A wetland sanctuary that turns into a migratory bird spectacle every winter, barely an hour from
              Delhi's traffic.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Gurugram, Haryana" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Sultanpur National Park?</h2>
                  <p>
                    <strong>Sultanpur National Park</strong> is a wetland sanctuary near Gurugram, and one of the
                    most accessible serious birdwatching destinations in the Delhi-NCR region. Every winter, it
                    draws large numbers of migratory waterbirds to its shallow wetland — a genuine natural
                    spectacle that requires no more than an hour's drive from a city better known for traffic
                    than wildlife.
                  </p>
                  <p>
                    It's important to be upfront: this is a genuinely seasonal destination. The park is far less
                    rewarding outside the winter migration window, so plan accordingly.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🦩</span> Sultanpur National Park at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🦩", label: "Known For", value: "Migratory waterbirds" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "🚗", label: "From Delhi", value: "~45-50km" },
                        { icon: "🚗", label: "From Gurugram", value: "~15km" },
                        { icon: "💰", label: "Budget/Trip", value: "₹500 – ₹1,000" },
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
                  <h2>Best Time to Visit Sultanpur National Park</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "🦩", color: "bg-amber-50 border-amber-200", mood: "Best overall — the only real window", text: "Peak migratory bird activity — this is genuinely when the park delivers on its reputation." },
                      { season: "Mar – Oct", emoji: "🌤️", color: "bg-sky-50 border-sky-200", mood: "Off-season — limited appeal", text: "Migratory birds have left, and the wetland has far less to offer for a dedicated visit." },
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
                    <strong>Our advice:</strong> Don't plan a dedicated trip outside November-February — this is
                    genuinely a winter-specific destination, and the experience outside that window is a fraction
                    of what it is at peak season.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Sultanpur National Park</h2>
                  <ul>
                    <li><strong>By Road:</strong> The standard and only practical approach — roughly 15km from Gurugram and 45-50km from central Delhi.</li>
                    <li><strong>From Delhi:</strong> A straightforward drive of under an hour under normal traffic conditions.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Leave early — bird activity is highest in the first few hours after sunrise, and an early start also beats Delhi-NCR's daytime road traffic.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to Do & See</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Wetland scenery representative of Sultanpur National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Watchtowers:</strong> Positioned around the wetland for unobtrusive bird viewing without disturbing the habitat.</li>
                    <li><strong>Migratory waterbirds:</strong> Commonly cited species include various ducks, painted storks, and other waders, with flamingos reported in some years — treat sightings as variable rather than guaranteed.</li>
                    <li><strong>Wetland walking trails:</strong> Short, manageable paths around the park suited to a focused few hours.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Sultanpur National Park is best treated as a half-day or day trip from Delhi-NCR rather than
                    an overnight destination — there's little standalone accommodation near the park itself. Base
                    yourself in Gurugram or Delhi instead.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹1,500–₹3,000/night (Gurugram)", picks: ["Budget business hotels in Gurugram"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹3,500–₹7,000/night (Gurugram)", picks: ["Business hotels near Cyber Hub"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000+/night (Gurugram/Delhi)", picks: ["International 5-star chains"] },
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
                  <h2>What to Eat</h2>
                  <p>
                    Facilities inside the park are minimal — plan to eat in Gurugram before or after your visit.
                  </p>
                  <ul>
                    <li><strong>Cyber Hub dining:</strong> A wide range of options a short drive back toward Gurugram.</li>
                    <li><strong>Murthal-style dhaba food:</strong> If you're coming from further along NH44, worth a detour before or after.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Sultanpur National Park Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Early Morning", title: "Peak Bird Activity", color: "bg-amber-700", activities: ["Arrive shortly after sunrise", "Watchtower birdwatching", "Wetland walking trail"] },
                      { day: "Late Morning", title: "Wrap Up & Return", color: "bg-forest-600", activities: ["Final viewing and photography", "Return drive to Gurugram/Delhi"] },
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
                          {["Expense", "Cost"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry fee", "₹100–₹300"],
                          ["Local transport (round trip from Delhi/Gurugram)", "₹300–₹700"],
                          ["Food/snacks", "₹200–₹400"],
                          ["Total per visit", "₹500–₹1,000"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* This is a low-cost, single-day destination — no overnight accommodation needed.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Visit Nov–Feb only:</strong> This is genuinely when the park delivers its signature experience.</li>
                    <li><strong>Bring your own binoculars:</strong> Significantly improves the visit.</li>
                    <li><strong>Arrive early:</strong> Bird activity peaks in the first hours after sunrise.</li>
                    <li><strong>Wear neutral colors:</strong> Standard wildlife-viewing etiquette applies.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan your trip for November–February", "Bring your own binoculars", "Arrive early for peak bird activity", "Wear neutral-toned clothing", "Base yourself in Gurugram/Delhi rather than seeking on-site stays"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a dedicated summer trip expecting the same bird spectacle", "Skip binoculars expecting a satisfying visit without them", "Wear bright colors near the watchtowers", "Expect on-site overnight accommodation", "Rush the visit — arrive with a full morning to spare"].map((item) => (
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
                {["Sultanpur National Park", "Birdwatching", "Haryana", "Delhi NCR", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SULTANPUR_GEAR} destination="Sultanpur National Park" />

              <RelatedPostsGrid currentSlug="sultanpur-national-park-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sultanpur-national-park-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
