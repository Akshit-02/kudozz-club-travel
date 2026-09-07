// src/app/blog/patratu-travel-guide/page.tsx
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
  title: "Patratu Valley Travel Guide: Dam, Ghati Road & Best Time to Visit",
  description:
    "The complete Patratu Valley travel guide. The Patratu Ghati hairpin road, Patratu Dam, viewpoints, best time to visit, and how to plan a half-day trip from Ranchi.",
  keywords:
    "Patratu Valley travel guide, Patratu Ghati, Patratu Dam, Ranchi day trip, best time to visit Patratu, how to reach Patratu Valley, Jharkhand valley road",
  openGraph: {
    title: "Patratu Valley Travel Guide: Dam, Ghati Road & Best Time to Visit",
    description:
      "A hairpin-bend valley road above a reservoir, close enough to Ranchi for a half-day escape — the complete guide to Patratu Valley.",
    url: "https://club.kudozz.in/blog/patratu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Winding mountain valley road representative of Patratu Valley, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patratu Valley Travel Guide: Dam, Ghati Road & Best Time to Visit",
    description: "A hairpin-bend valley road above a reservoir — the complete guide to Patratu Valley.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/patratu-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Patratu Valley Travel Guide: Dam, Ghati Road & Best Time to Visit",
          description: "The complete Patratu Valley travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/patratu-travel-guide" },
          about: {
            "@type": "Place",
            name: "Patratu Valley",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Patratu Valley Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How far is Patratu Valley from Ranchi?",
    a: "Roughly 35-40km, about an hour's drive — it's one of the easiest and most popular half-day escapes from the city.",
  },
  {
    q: "What is the best time to visit Patratu Valley?",
    a: "October to March offers the clearest visibility for the drive and viewpoints. It's a reasonable day trip year-round outside heavy monsoon downpours, when the winding road can be genuinely risky.",
  },
  {
    q: "How do I reach Patratu Valley?",
    a: "It's a road-only destination — hire a car or taxi from Ranchi, or drive yourself along the Patratu Ghati road. There's no direct train or air access to the valley itself.",
  },
  {
    q: "What makes Patratu Valley worth visiting?",
    a: "The winding hairpin road itself is the main attraction, offering sweeping views down toward the Patratu Dam reservoir — it's genuinely one of the more scenic short drives in the Ranchi area.",
  },
  {
    q: "Is Patratu Valley safe to drive at night or in the rain?",
    a: "Drive cautiously on the hairpin sections at any time, and especially avoid the road in heavy rain or after dark if unfamiliar with the route — visibility and road grip both suffer.",
  },
  {
    q: "Can I stay overnight at Patratu Valley?",
    a: "It's primarily a half-day or day-trip destination rather than a place to base an overnight stay — most visitors return to Ranchi the same day.",
  },
  {
    q: "What is the budget for a trip to Patratu Valley?",
    a: "A half-day trip from Ranchi costs mainly transport — expect roughly ₹800-1,500 for a return taxi/cab hire, plus a modest amount for food at local roadside stops.",
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
  { id: "introduction", title: "Why Patratu Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Patratu Valley", level: 2 },
  { id: "top-attractions", title: "What to See", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PATRATU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a scenic valley drive and viewpoint stops",
    emoji: "🛣️",
    items: [
      {
        name: "Motion Sickness Tablets",
        description: "The Patratu Ghati's continuous hairpin bends can be tough on passengers prone to car sickness.",
        price: "₹99",
        rating: 4.2,
        reviews: "2.8k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("motion+sickness+tablets+travel"),
        tag: "Road-trip essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The switchback road is the whole point of the trip, but it's genuinely nauseating for some passengers without preparation.",
      },
      {
        name: "Camera / Phone Mount",
        description: "Useful for capturing the valley's sweeping switchback views from designated viewpoint stops.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.5k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("phone+mount+car+travel"),
        tag: "Photography essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The ghati road is the main photographic draw of the whole trip.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Facilities are limited to a handful of small roadside stops along the route.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is a road-trip destination with sparse facilities beyond a few roadside stalls.",
      },
    ],
  },
];

export default function PatratuGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Winding mountain valley road representative of Patratu Valley, Jharkhand"
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
                { label: "Patratu Valley", href: null },
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
              {["Patratu Valley", "Patratu Ghati", "Off-beat", "Jharkhand"].map((tag) => (
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
              Patratu Valley Travel Guide: Dam, Ghati Road & Best Time to Visit
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hairpin-bend valley road above a reservoir, close enough to Ranchi for a half-day escape —
              everything you need to plan a trip to Patratu Valley.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Patratu Valley, Jharkhand",
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
                  <h2>Why Patratu Valley?</h2>
                  <p>
                    <strong>Patratu Valley</strong> is best known for one thing done exceptionally well: a
                    winding, hairpin-bend road — the Patratu Ghati — that descends through the hills toward
                    the <strong>Patratu Dam</strong> reservoir. It's less a single-monument destination and
                    more a road-trip experience, drawing visitors specifically for the drive itself and the
                    sweeping viewpoints along the way.
                  </p>
                  <p>
                    Just 35-40km from Ranchi, it's become one of the city's most popular half-day escapes —
                    easy enough to fit into an afternoon, scenic enough to feel like a genuine getaway.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🛣️</span> Patratu Valley at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🛣️", label: "Key Draw", value: "Patratu Ghati hairpin road" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "From Ranchi", value: "~35-40km (~1hr)" },
                        { icon: "🏞️", label: "Landmark", value: "Patratu Dam reservoir" },
                        { icon: "💰", label: "Budget", value: "₹800 – ₹1,500 (half-day)" },
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
                  <h2>Best Time to Visit Patratu Valley</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Clear visibility for the drive and viewpoints, and comfortable temperatures for stopping along the road.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "Still driveable, but the heat makes lingering at viewpoints less pleasant.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — drive with caution",
                        text: "The valley turns lush and green, but heavy rain on the hairpin sections genuinely increases driving risk.",
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
                    <strong>Our pick:</strong> A clear winter afternoon between October and March — the
                    reservoir views are at their sharpest and the drive itself is at its safest.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Patratu Valley</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> The only practical way in — hire a car or taxi from Ranchi
                      (~35-40km, roughly an hour), or drive yourself along the Patratu Ghati.
                    </li>
                    <li>
                      <strong>By Air/Train:</strong> There's no direct air or rail access to the valley
                      itself — Ranchi is the gateway for all onward road travel.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Time the drive for late afternoon on a clear day — the light
                    on the reservoir is at its best in the couple of hours before sunset.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See at Patratu Valley</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Hairpin valley road and reservoir view at Patratu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The Patratu Ghati road:</strong> A series of winding hairpin bends descending
                      toward the reservoir — genuinely the main attraction and photo draw of the whole trip.
                    </li>
                    <li>
                      <strong>Patratu Dam:</strong> Built on the Nalkari River, feeding a thermal power
                      station, with several viewpoints over the water along the descent.
                    </li>
                    <li>
                      <strong>Roadside viewpoint stops:</strong> A handful of informal viewpoints and small
                      eateries along the ghati have become popular photo stops for travelers making the drive.
                    </li>
                  </ul>
                </section>

                <section id="food-guide">
                  <h2>What to Eat at Patratu Valley</h2>
                  <ul>
                    <li>
                      <strong>Roadside stalls:</strong> Simple snacks and chai at the small eateries dotted
                      along the ghati road — don't expect a full sit-down restaurant experience here.
                    </li>
                    <li>
                      <strong>Ranchi meals:</strong> Most visitors eat a proper meal before or after the trip
                      back in Ranchi, treating Patratu as a scenic drive rather than a dining destination.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Patratu Valley Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Half-Day",
                        title: "Ranchi to Patratu and Back",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Ranchi in the early afternoon",
                          "Drive the Patratu Ghati, stopping at viewpoints",
                          "Photo stops at the dam and reservoir",
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
                          ["Return taxi/cab hire from Ranchi", "₹800 – ₹1,500"],
                          ["Roadside snacks", "₹100 – ₹300"],
                          ["Half-day trip total", "₹900 – ₹1,800"],
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
                  <h2>Essential Travel Tips for Patratu Valley</h2>
                  <ul>
                    <li><strong>Drive carefully on the hairpin sections:</strong> Especially in the rain, and even more so after dark.</li>
                    <li><strong>Go in the late afternoon:</strong> The light on the reservoir is best in the couple of hours before sunset.</li>
                    <li><strong>Combine with other Ranchi-area waterfalls:</strong> If making a full day of it, pair Patratu with a nearby waterfall visit.</li>
                    <li><strong>Carry cash:</strong> Roadside stalls along the ghati are cash-only.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Time your drive for late afternoon light", "Drive carefully on the hairpin bends", "Carry cash for roadside stops", "Combine with a nearby waterfall for a full day", "Carry water for the drive"].map((item) => (
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
                        {["Drive the ghati in heavy rain if unfamiliar with the route", "Expect a sit-down restaurant scene", "Plan an overnight stay — this is a day-trip destination", "Rush the hairpin sections", "Forget cash for roadside stalls"].map((item) => (
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
                {["Patratu Valley", "Patratu Ghati", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PATRATU_GEAR} destination="Patratu Valley" />
              <RelatedPostsGrid currentSlug="patratu-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="patratu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
