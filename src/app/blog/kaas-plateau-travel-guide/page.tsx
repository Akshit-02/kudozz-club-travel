// src/app/blog/kaas-plateau-travel-guide/page.tsx
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
  title: "Kaas Plateau Travel Guide: The Valley of Flowers of Maharashtra",
  description:
    "The complete Kaas Plateau travel guide. Bloom season timing, online ticket booking, walkway rules, Kaas Lake, Thoseghar Waterfalls, Bamnoli boating, where to stay in Satara, and a day-trip itinerary to Maharashtra's UNESCO wildflower plateau.",
  keywords:
    "Kaas Plateau travel guide, Kaas Pathar, Kaas flower season, Valley of Flowers Maharashtra, Kaas Plateau ticket booking, Kaas Plateau Satara, Kaas Plateau best time, Kaas Lake, Thoseghar Waterfalls, Bamnoli boating, Kaas UNESCO Western Ghats",
  openGraph: {
    title: "Kaas Plateau Travel Guide: The Valley of Flowers of Maharashtra",
    description:
      "A UNESCO World Heritage volcanic plateau that turns into a carpet of wildflowers for a few weeks every monsoon — the complete guide to Kaas Plateau.",
    url: "https://club.kudozz.in/blog/kaas-plateau-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green volcanic plateau landscape resembling Kaas Plateau, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaas Plateau Travel Guide: The Valley of Flowers of Maharashtra",
    description:
      "Bloom timing, tickets, and the complete guide to Maharashtra's UNESCO wildflower plateau.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kaas-plateau-travel-guide",
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
          headline: "Kaas Plateau Travel Guide: The Valley of Flowers of Maharashtra",
          description: "The complete Kaas Plateau travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kaas-plateau-travel-guide" },
          about: {
            "@type": "Place",
            name: "Kaas Plateau",
            address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kaas Plateau Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "When exactly does Kaas Plateau bloom?",
    a: "Roughly early September to early October, but the exact peak weeks shift every year depending on when the monsoon retreats and how much rainfall the plateau got that season. Always check the current year's official bloom updates before finalising travel dates — going a week too early or late can mean a very different experience.",
  },
  {
    q: "Do I need to book tickets in advance for Kaas Plateau?",
    a: "Yes, especially on weekends during peak bloom. Entry is capped daily to protect the ecosystem, and tickets are typically booked online through the official Kaas Plateau portal. Walk-in entry isn't guaranteed once the daily quota fills.",
  },
  {
    q: "Can I walk freely among the flowers at Kaas?",
    a: "No. Visitors are required to stay on marked wooden walkways at all times. This isn't a photo-op restriction — the flower beds are genuinely fragile, and off-path walking damages species that take a full year to regrow.",
  },
  {
    q: "How long does a Kaas Plateau visit take?",
    a: "The plateau itself takes 1.5-2 hours to walk. Most visitors combine it with Thoseghar Waterfalls and/or a Bamnoli boat ride on the same day, making it a comfortable full-day trip from Satara or Pune.",
  },
  {
    q: "What is the best time of day to visit Kaas Plateau?",
    a: "Early morning, ideally right at opening. Light is softer for photography, temperatures are cooler for walking, and you'll beat the weekend crowds that build steadily through the late morning and afternoon.",
  },
  {
    q: "How do I reach Kaas Plateau?",
    a: "Satara is the base town, about 25 km from the plateau, well connected by road and rail from Pune and Mumbai. Pune Airport (PNQ) is the nearest airport, roughly 140 km away. There's no direct railway station at Kaas itself — you'll need a taxi or self-drive from Satara.",
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
  { id: "introduction", title: "Why Kaas Plateau?", level: 2 },
  { id: "best-time", title: "Best Time to Visit (Bloom Season)", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kaas Plateau", level: 2 },
  { id: "attractions", title: "Kaas Plateau & Nearby Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KAAS_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a plateau walk and macro flower photography",
    emoji: "🌸",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "The plateau's wooden walkways and surrounding paths are best covered in closed, comfortable shoes rather than sandals.",
        price: "₹1,199", rating: 4.4, reviews: "4.8k", image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+outdoor"),
        tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700",
        why: "You'll be on your feet for 1.5-2 hours on uneven walkway boards — proper shoes make the whole visit more comfortable.",
      },
      {
        name: "Macro Lens / Phone Clip-On Macro",
        description: "Kaas's flowers are often tiny — a macro attachment turns ordinary phone photos into genuinely striking close-ups.",
        price: "₹599", rating: 4.2, reviews: "3.1k", image: "🔍",
        affiliateUrl: amazonSearchUrl("phone+macro+lens+clip"),
        tag: "Photography", tagColor: "bg-purple-100 text-purple-700",
        why: "Standard phone cameras flatten small wildflowers into a blur — a clip-on macro lens is a cheap fix that changes your photos completely.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description: "The plateau has almost no shade — direct exposure for the full walk, even under overcast late-monsoon skies.",
        price: "₹399", rating: 4.3, reviews: "2.6k", image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700",
        why: "There's no tree cover on the open plateau — a hat matters even on a cloudy day.",
      },
      {
        name: "Light Rain Jacket",
        description: "Late-monsoon weather at Kaas is unpredictable — a sudden shower is common during peak bloom season.",
        price: "₹799", rating: 4.4, reviews: "3.9k", image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket"),
        tag: "Season essential", tagColor: "bg-forest-100 text-forest-700",
        why: "Bloom season overlaps with the monsoon's tail end — a packable rain layer avoids cutting your visit short.",
      },
      {
        name: "Reusable Water Bottle",
        description: "No shade and a fair bit of walking between the plateau, Kaas Lake, and Thoseghar make hydration worth planning for.",
        price: "₹349", rating: 4.5, reviews: "6.2k", image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Day-trip essential", tagColor: "bg-stone-100 text-stone-700",
        why: "There are limited shops right at the plateau entrance — carrying your own water avoids a mid-visit scramble.",
      },
    ],
  },
];

export default function KaasPlateauGuidePage() {
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
              alt="Green volcanic plateau landscape resembling Kaas Plateau, Maharashtra"
              fill priority sizes="100vw" className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" },
                { label: "Kaas Plateau", href: null },
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
              {["Kaas Plateau", "UNESCO", "Off-beat", "Wildflowers", "Maharashtra"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kaas Plateau Travel Guide: The Valley of Flowers of Maharashtra
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A UNESCO World Heritage volcanic plateau that turns into a
              carpet of wildflowers for a few short weeks every year —
              bloom timing, tickets, and everything else you need to know.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Satara, Maharashtra" },
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
              <div className="sticky top-24"><TableOfContents items={tableOfContents} /></div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Kaas Plateau?</h2>
                  <p>
                    Near the hill town of Satara, a stretch of black basalt
                    rock sits mostly bare and unremarkable for eleven months
                    of the year. Then, for a few short weeks after the
                    monsoon retreats, the <strong>Kaas Plateau</strong>{" "}
                    (locally called Kaas Pathar) transforms into a rolling
                    carpet of wildflowers — hundreds of species, many found
                    nowhere else, blooming and fading in overlapping waves of
                    colour across the volcanic terrain.
                  </p>
                  <p>
                    The plateau is part of the Western Ghats UNESCO World
                    Heritage Site, recognised for its exceptional biodiversity
                    and the sheer density of endemic flowering species packed
                    into a small area. It's often called Maharashtra's answer
                    to Uttarakhand's Valley of Flowers — smaller in scale, but
                    just as fleeting, and far more accessible for a weekend
                    trip from Pune or Mumbai.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🌸</span> Kaas Plateau at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🏔️", label: "Status", value: "UNESCO World Heritage (Western Ghats)" },
                        { icon: "🌡️", label: "Bloom Window", value: "Early Sep – Early Oct (varies)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Pune (PNQ)" },
                        { icon: "🎫", label: "Entry", value: "Capped, book online" },
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
                  <h2>Best Time to Visit (Bloom Season)</h2>
                  <p>
                    This is the single most important thing to get right at
                    Kaas — the flowering window is short, and it shifts every
                    year with the monsoon's retreat.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Early Sep – Early Oct", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Peak bloom — the whole point of visiting", text: "The plateau's main flowering window, though the exact peak weeks vary year to year with rainfall patterns. Always check current-year bloom updates before booking." },
                      { season: "Oct – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Late bloom — thinner but still worthwhile", text: "Some later-flowering species persist into November, though the dense carpet effect of peak bloom has usually faded by this point." },
                      { season: "Dec – Feb", emoji: "☀️", color: "bg-sky-50 border-sky-200", mood: "No bloom — plateau is bare", text: "Pleasant weather for a visit to nearby Thoseghar or Sajjangad, but the plateau itself is largely bare grassland outside bloom season." },
                      { season: "Jun – Aug", emoji: "🌧️", color: "bg-forest-50 border-forest-200", mood: "Monsoon — before the bloom", text: "Heavy rain across the region; the flowering hasn't started yet and access can be affected by weather." },
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
                    <strong>Important:</strong> The peak bloom window shifts
                    every year and typically lasts just a few weeks. Check
                    official current-year announcements before finalising
                    your dates — this is not a destination where "roughly
                    September" is precise enough.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kaas Plateau</h2>
                  <ul>
                    <li><strong>By Air:</strong> Pune Airport (PNQ) is the nearest, roughly 140 km / 3 hours by road.</li>
                    <li><strong>By Train:</strong> Satara is the nearest well-connected station on the Pune-Mumbai rail corridor; there's no direct rail link to the plateau itself.</li>
                    <li><strong>By Road:</strong> Kaas is about 25 km from Satara town by taxi or self-drive — the base most visitors use.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book your online entry ticket before you leave Satara — daily visitor numbers are capped, and arriving without a confirmed slot on a peak-season weekend can mean being turned away.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Kaas Plateau & Nearby Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/hero.jpg" alt="Rolling green plateau and hills near Kaas, Maharashtra" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kaas Plateau:</strong> The main attraction — marked wooden walkways loop through the flowering fields; entry is ticketed and capped daily.</li>
                    <li><strong>Kaas Lake:</strong> A scenic lake just before the plateau entrance that supplies water to Satara town — a quiet stop for photos.</li>
                    <li><strong>Thoseghar Waterfalls:</strong> About 20 km away, a dramatic multi-tiered waterfall at its fullest during and just after the monsoon.</li>
                    <li><strong>Bamnoli:</strong> A short drive from Kaas, offering boat rides on the Shivsagar (Koyna) backwaters.</li>
                    <li><strong>Sajjangad Fort:</strong> About 30 km away, home to the samadhi of the saint Samarth Ramdas — a good half-day add-on with fort views.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>There's little accommodation right at the plateau — most visitors base themselves in Satara town.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Satara town guesthouses", "Budget lodges near the bus stand", "MTDC-style basic rooms"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Satara business hotels", "Resorts on the Kaas road", "Boutique stays near Sajjangad"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium resorts around Mahabaleshwar (1.5-2hrs)", "Select hillside luxury properties"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Local Satara thalis:</strong> Simple Maharashtrian home-style meals at small eateries in Satara town.</li>
                    <li><strong>Roadside stalls near Kaas:</strong> Basic snacks, tea, and light bites near the entrance — don't expect a full meal on the plateau itself.</li>
                    <li><strong>Kandi pedha:</strong> Satara's famous milk sweet, worth picking up as a souvenir on your way through town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Kaas Plateau at Opening", color: "bg-amber-700", activities: ["Leave Satara early to reach Kaas at opening time", "Walk the flowering fields on the marked walkways (1.5-2 hrs)", "Photography before the midday light and crowds build"] },
                      { day: "Afternoon", title: "Thoseghar & Bamnoli", color: "bg-forest-600", activities: ["Drive to Thoseghar Waterfalls (~20 km)", "Optional boat ride at Bamnoli on the Koyna backwaters", "Return to Satara by evening"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (<li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>))}
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
                        <tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night (Satara)", "₹800", "₹3,000", "₹9,000"],
                          ["Kaas entry ticket", "₹100", "₹100", "₹100"],
                          ["Local transport/taxi (day)", "₹800", "₹1,800", "₹3,500"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Daily total", "₹2,050", "₹5,700", "₹14,400"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Entry ticket price is indicative — confirm current rates on the official booking portal before you go.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Book online tickets ahead:</strong> Especially for peak-bloom weekends, when daily visitor caps fill fast.</li>
                    <li><strong>Stay on the walkways:</strong> Off-path walking damages fragile, slow-regrowing flower beds — this is strictly enforced.</li>
                    <li><strong>Go early:</strong> Best light for photography and noticeably thinner crowds before mid-morning.</li>
                    <li><strong>Check current-year bloom dates:</strong> The window shifts annually — don't rely on last year's dates.</li>
                    <li><strong>Combine with Thoseghar or Sajjangad:</strong> Makes the most of the drive out from Satara.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book your entry ticket online in advance", "Visit early morning for light and lower crowds", "Stay strictly on the marked walkways", "Check current-year bloom updates before travelling", "Combine with Thoseghar Waterfalls the same day"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Step off the walkways for a photo", "Assume last year's bloom dates apply this year", "Arrive on a peak weekend without a booked ticket", "Pluck or disturb any flowers", "Expect food options right at the plateau"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kaas Plateau", "UNESCO", "Off-beat", "Maharashtra", "Wildflowers", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KAAS_GEAR} destination="Kaas Plateau" />
              <RelatedPostsGrid currentSlug="kaas-plateau-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kaas-plateau-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
