// src/app/blog/aizawl-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Aizawl Travel Guide: Sightseeing & Tips",
  description:
    "Complete Aizawl guide — Solomon's Temple, Durtlang Hills, Bara Bazar, Chapchar Kut festival, how to reach Mizoram's ridge-top capital, and a full visit plan.",
  keywords:
    "Aizawl travel guide, Aizawl Mizoram, Solomon's Temple, Durtlang Hills, Bara Bazar, Chapchar Kut festival, how to reach Aizawl, Mizoram capital, Mizo culture",
  openGraph: {
    title: "Aizawl Travel Guide: Sightseeing & Tips",
    description:
      "A hill capital built across a ridge, a reputation for having no traffic jams, and the practical base for exploring central Mizoram — the complete Aizawl guide.",
    url: "https://club.kudozz.in/blog/aizawl-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green forested hills, evoking Aizawl's ridge-top setting in Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aizawl Travel Guide: Sightseeing & Tips",
    description:
      "A hill capital built across a ridge, and the practical base for exploring central Mizoram — the complete Aizawl guide.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/aizawl-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Aizawl Travel Guide: Sightseeing & Tips",
          description:
            "Complete Aizawl guide — Solomon's Temple, Durtlang Hills, Bara Bazar, Chapchar Kut festival, how to reach Mizoram's ridge-top capital, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/aizawl-travel-guide",
          },
          keywords: "Aizawl, Mizoram, hill capital, Northeast India",
          about: {
            "@type": "Place",
            name: "Aizawl",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Mizoram",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mizoram",
                item: "https://club.kudozz.in/blog/mizoram-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Aizawl" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How many days do I need for Aizawl?",
    a: "Two days is a comfortable amount for the city itself — Solomon's Temple, Durtlang Hills, the Mizoram State Museum, and Bara Bazar. Many visitors extend their stay to use Aizawl as a base for day trips to Reiek and Tamdil Lake.",
  },
  {
    q: "Is it true Aizawl has no traffic jams?",
    a: "It's a genuine point of local pride — despite the steep, winding ridge-top roads, Aizawl's traffic management is unusually well organised for a hill city of its size, and serious jams are rare compared to most Indian cities of comparable population.",
  },
  {
    q: "What is the best time to visit Aizawl?",
    a: "October to March is the most comfortable window weather-wise. If your timing allows, visiting in March for Chapchar Kut — Mizoram's biggest cultural festival, with traditional Cheraw bamboo dance and music — adds a genuinely memorable layer to the trip.",
  },
  {
    q: "How do I reach Aizawl from outside Mizoram?",
    a: "Aizawl has its own airport with flights from Kolkata, Guwahati, and Delhi. By road, the main overland route runs via Silchar in Assam, though it's a long, winding drive given the hill terrain.",
  },
  {
    q: "What day trips are possible from Aizawl?",
    a: "Reiek (heritage village and viewpoint, roughly 29 km) and Tamdil Lake are both comfortable day trips from Aizawl, making the city a practical base for exploring central Mizoram before heading further afield.",
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

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "A Capital Built on a Ridge", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Aizawl", level: 2 },
  { id: "things-to-do", title: "Sights & Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AizawlGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Green forested hills, evoking Aizawl's ridge-top setting in Mizoram"
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
                { label: "Mizoram", href: "/blog/mizoram-travel-guide" },
                { label: "Aizawl", href: null },
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
              {["Aizawl", "Mizoram", "Hill Capital", "Northeast India"].map((tag) => (
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
              Aizawl Travel Guide: Sightseeing & Tips
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hill capital built across a ridge with a reputation for having
              no traffic jams — and the practical base for exploring central
              Mizoram.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Aizawl, Mizoram" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,300 words" },
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

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
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
                  <h2>A Capital Built on a Ridge</h2>
                  <p>
                    <strong>Aizawl</strong>, capital of Mizoram, sits at
                    roughly 1,132 m, built dramatically across a ridge with
                    streets and neighbourhoods stacked up and down the steep
                    terrain. Despite the hilly, winding roads, Aizawl carries
                    a genuine local point of pride: a reputation for having no
                    traffic jams, an unusual claim for a city of its size and
                    topography.
                  </p>
                  <p>
                    Mizoram — and Aizawl in particular — is predominantly
                    Christian, and the city's rhythm, from Sunday quiet to the
                    prominence of churches on the skyline, reflects this. It's
                    also the natural first stop for most visitors to the
                    state, and a comfortable base for exploring the central
                    Mizoram hills beyond it.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏙️</span> Aizawl at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Mizoram" },
                        { icon: "⛰️", label: "Altitude", value: "~1,132 m" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🎉", label: "Big Festival", value: "Chapchar Kut" },
                        { icon: "🛍️", label: "Main Market", value: "Bara Bazar" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹5,000" },
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
                  <h2>Best Time to Visit Aizawl</h2>
                  <p>Aizawl's hill climate is generally mild, but timing still shapes how comfortable and rewarding a visit will be.</p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-forest-50 border-forest-200", mood: "Best time — our pick", text: "Cool, clear, and dry — the most comfortable window for sightseeing and day trips around the city." },
                      { season: "Mar", emoji: "🎉", color: "bg-purple-50 border-purple-200", mood: "Chapchar Kut season", text: "Mizoram's biggest cultural festival, with traditional Cheraw bamboo dance and music — a genuinely memorable time to visit if your dates allow." },
                      { season: "Apr – May", emoji: "🌤️", color: "bg-amber-50 border-amber-200", mood: "Warm, humidity building", text: "Still manageable for sightseeing with an early start, though noticeably warmer and more humid than winter." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — heavy rain", text: "Aizawl and the surrounding hills receive substantial rainfall; roads to outlying attractions can be affected." },
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
                    <strong>Our pick:</strong> October to March for the clearest, most comfortable conditions — or March specifically if you want to catch Chapchar Kut.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Aizawl</h2>
                  <ul>
                    <li><strong>By air:</strong> Aizawl's own airport (Lengpui) has flights from Kolkata, Guwahati, and Delhi — the fastest and most comfortable way in.</li>
                    <li><strong>By road:</strong> The main overland route runs via Silchar in Assam, a long but scenic drive through hill terrain.</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Flying in is by far the most practical option — the overland route from Assam, while scenic, takes a full day given the hill roads.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Sights & Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Green hills around Aizawl, Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Solomon's Temple</h3>
                  <p>A large, striking modern prayer hall and church structure, one of Aizawl's most notable contemporary landmarks.</p>
                  <h3>Durtlang Hills</h3>
                  <p>Panoramic viewpoints over the city and the surrounding ridge-and-valley landscape — a good spot for a sunset stop.</p>
                  <h3>Mizoram State Museum</h3>
                  <p>A compact but informative introduction to Mizo tribal history, traditional dress, and material culture.</p>
                  <h3>Bara Bazar</h3>
                  <p>The city's main market — a lively, layered hub of textiles, local produce, and street food, and one of the best places to see everyday Mizo life up close.</p>
                  <h3>Chapchar Kut Festival</h3>
                  <p>Held each March, this is Mizoram's largest cultural celebration, featuring the traditional Cheraw (bamboo dance) alongside music and community feasting — worth timing a visit around if your dates allow.</p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Aizawl</h2>
                  <p>Accommodation is concentrated in and around the city centre, with options across every budget tier.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near Bara Bazar", "Tourist lodges", "Church-run hostels"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Business hotels, central Aizawl", "Hillview properties", "Serviced apartments"] },
                      { tier: "Luxury", icon: "🏛️", range: "₹4,500–₹8,000+/night", picks: ["Premium hotels, city centre", "Ridge-view properties", "Full-board packages"] },
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

                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "City Sights", color: "bg-amber-700", activities: ["Solomon's Temple and Durtlang Hills", "Mizoram State Museum", "Evening at Bara Bazar"] },
                      { day: "Day 2", title: "Day Trip Options", color: "bg-sky-600", activities: ["Half-day trip to Reiek for the heritage village and viewpoint", "Or a trip to Tamdil Lake", "Return to Aizawl for the evening"] },
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * With more time, extend to{" "}
                    <Link href="/blog/champhai-travel-guide">Champhai</Link> in
                    the east or{" "}
                    <Link href="/blog/phawngpui-travel-guide">Phawngpui</Link>{" "}
                    for a serious trek.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Aizawl</h2>
                  <ul>
                    <li><strong>Bai:</strong> A traditional Mizo vegetable stew, often the everyday staple alongside rice.</li>
                    <li><strong>Sawhchiar:</strong> A rice porridge dish typically cooked with pork, popular as a hearty local meal.</li>
                    <li><strong>Smoked meats:</strong> Smoking is a common preservation and flavouring technique in Mizo cuisine, especially for pork.</li>
                    <li><strong>Bara Bazar snacks:</strong> The market is the best place to sample a range of local street food in one visit.</li>
                  </ul>
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
                          ["Day trip (Reiek/Tamdil)", "₹1,500", "₹2,500", "₹4,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Figures are per person, per day; excludes flights.</p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Aizawl</h2>
                  <ul>
                    <li><strong>Pace yourself on the hills:</strong> The ridge-top layout means a lot of up-and-down walking even within the city centre.</li>
                    <li><strong>Try Bara Bazar for food:</strong> It's the best single spot to sample a range of Mizo snacks and see daily life.</li>
                    <li><strong>Time a visit for Chapchar Kut if possible:</strong> The March festival is genuinely one of Northeast India's best cultural experiences.</li>
                    <li><strong>Use Aizawl as a base:</strong> Reiek and Tamdil Lake are both comfortable day trips from here.</li>
                    <li><strong>Book flights ahead in festival season:</strong> Seats fill quickly around Chapchar Kut.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Durtlang Hills for sunset", "Try local snacks at Bara Bazar", "Time your trip for Chapchar Kut if possible", "Use Aizawl as a base for day trips", "Book festival-season flights early", "Dress modestly at religious sites"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rush the ridge-top walking routes", "Skip Bara Bazar assuming it's just shopping", "Arrive without booking during Chapchar Kut", "Expect Sunday to be a normal business day", "Underestimate travel time by road from Assam", "Skip day trips assuming Aizawl alone is enough"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Aizawl pairs naturally with{" "}
                    <Link href="/blog/reiek-travel-guide">Reiek</Link> for a
                    quick viewpoint trip, or head further to{" "}
                    <Link href="/blog/champhai-travel-guide">Champhai</Link>{" "}
                    on the Myanmar border. See our full{" "}
                    <Link href="/blog/mizoram-travel-guide">Mizoram travel guide</Link>{" "}
                    for the wider state.
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
                {["Aizawl", "Mizoram", "Hill Capital", "Northeast India", "Chapchar Kut", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="aizawl-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="aizawl-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
