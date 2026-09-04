// src/app/blog/phawngpui-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Phawngpui Trek Guide: The Blue Mountain",
  description:
    "Complete Phawngpui guide — Mizoram's highest peak, the Blue Mountain's rare orchids and rhododendrons, trek difficulty, permits, and how to reach Lawngtlai district.",
  keywords:
    "Phawngpui, Blue Mountain Mizoram, Phawngpui National Park, Mizoram highest peak, Lawngtlai district, Phawngpui trek, Mizoram trekking, Myanmar border trek",
  openGraph: {
    title: "Phawngpui Trek Guide: The Blue Mountain",
    description:
      "Mizoram's highest peak, wreathed in a distinctive blue haze, with rare orchids and rhododendrons near the Myanmar border — the complete Phawngpui guide.",
    url: "https://club.kudozz.in/blog/phawngpui-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "High mountain terrain, evoking Phawngpui, Mizoram's highest peak",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Phawngpui Trek Guide: The Blue Mountain",
    description: "Mizoram's highest peak, rarely attempted and genuinely remote — the complete Phawngpui guide.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/phawngpui-travel-guide" },
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
          headline: "Phawngpui Trek Guide: The Blue Mountain",
          description:
            "Complete Phawngpui guide — Mizoram's highest peak, the Blue Mountain's rare orchids and rhododendrons, trek difficulty, permits, and how to reach Lawngtlai district.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/phawngpui-travel-guide" },
          keywords: "Phawngpui, Blue Mountain, Mizoram, highest peak, Lawngtlai district",
          about: {
            "@type": "Place",
            name: "Phawngpui",
            address: { "@type": "PostalAddress", addressRegion: "Mizoram", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mizoram", item: "https://club.kudozz.in/blog/mizoram-travel-guide" },
              { "@type": "ListItem", position: 4, name: "Phawngpui" },
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
    q: "How tall is Phawngpui and why is it called the Blue Mountain?",
    a: "Phawngpui rises to roughly 2,157 m, the highest point in Mizoram. Its name comes from the distinctive bluish haze that surrounds the peak when viewed from a distance — a genuinely striking visual effect, not just a poetic name.",
  },
  {
    q: "How difficult is the Phawngpui trek?",
    a: "This is a serious, multi-day trekking destination — considerably more demanding and remote than day-trip attractions elsewhere in Mizoram. It requires real physical preparation and is not suitable as a casual first trek.",
  },
  {
    q: "How far is Lawngtlai district from Aizawl?",
    a: "It's a long journey, involving a substantial drive to reach the district before the trek itself even begins. Budget significant travel time on both ends of the trip.",
  },
  {
    q: "Do I need permits to trek Phawngpui?",
    a: "Yes — as a national park and protected, remote border-adjacent area, forest department permits and a local guide are essential. Arrange these well in advance rather than expecting to organize on arrival.",
  },
  {
    q: "When is the best time to see the orchids and rhododendrons in bloom?",
    a: "Bloom timing varies by species within Phawngpui National Park; check locally with your guide or the forest department for the current season's specific flowering window before finalizing your trip dates.",
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
  { id: "introduction", title: "Mizoram's Highest, Bluest Peak", level: 2 },
  { id: "best-time", title: "Best Time to Trek", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lawngtlai District", level: 2 },
  { id: "things-to-do", title: "The Trek & the National Park", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food on the Trek", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PhawngpuiGuidePage() {
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
              alt="High mountain terrain, evoking Phawngpui, Mizoram's highest peak"
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
                { label: "Phawngpui", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (<Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>) : (<span className="text-white/35">{crumb.label}</span>)}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Phawngpui", "Blue Mountain", "Mizoram's Highest Peak", "Trekking"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Phawngpui Trek Guide: The Blue Mountain
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Mizoram's highest peak, wreathed in a distinctive blue haze near
              the Myanmar border — one of Northeast India's most demanding,
              least-attempted treks.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Lawngtlai District, Mizoram" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>
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
                  <h2>Mizoram's Highest, Bluest Peak</h2>
                  <p>
                    <strong>Phawngpui</strong>, popularly called the{" "}
                    <strong>Blue Mountain</strong>, is the highest peak in
                    Mizoram at roughly 2,157 m, in Lawngtlai district near the
                    Myanmar border. The name comes from a distinctive bluish
                    haze that wraps the mountain when seen from a distance —
                    a genuinely striking visual effect that gives the peak
                    its unmistakable character.
                  </p>
                  <p>
                    It sits within Phawngpui National Park, known for rare
                    flora including several orchid species and rhododendrons,
                    of real interest to botanically-minded travelers as much
                    as trekkers. This is a serious, remote destination —
                    considerably more demanding than Mizoram's easier day-trip
                    attractions, and best suited to experienced trekkers.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Phawngpui at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "District", value: "Lawngtlai" },
                        { icon: "⛰️", label: "Height", value: "~2,157 m" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "🌸", label: "Known For", value: "Orchids, rhododendrons" },
                        { icon: "🥾", label: "Difficulty", value: "Multi-day, demanding" },
                        { icon: "🗺️", label: "Border", value: "Near Myanmar" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Trek Phawngpui</h2>
                  <p>Given the trek's remoteness and difficulty, stable weather matters more here than for easier destinations.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Apr", emoji: "☀️", color: "bg-forest-50 border-forest-200", mood: "Best time — our pick", text: "The most stable weather window, essential given the remote terrain and the difficulty of any support in bad conditions." },
                      { season: "Specific bloom windows", emoji: "🌸", color: "bg-purple-50 border-purple-200", mood: "Orchids & rhododendrons", text: "Flowering periods vary by species — check locally with your guide for the current season's timing if this is a priority." },
                      { season: "May", emoji: "🌤️", color: "bg-amber-50 border-amber-200", mood: "Transitional, riskier", text: "Weather becomes less predictable as monsoon approaches — not recommended for a first attempt." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — avoid entirely", text: "Heavy rain and difficult terrain make this genuinely unsafe for the remote approach and trek." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to April, avoiding monsoon entirely given the remote, protected terrain.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Lawngtlai District</h2>
                  <ul>
                    <li><strong>By road from Aizawl:</strong> A long journey to reach Lawngtlai district itself, before the trek approach even begins — budget a full day or more of travel each way.</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Build the travel time honestly into your itinerary — this is not a quick weekend trip from Aizawl once approach and return are factored in.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Trek & the National Park</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/rohtang-pass.jpg" alt="Mountain terrain near Phawngpui, Mizoram" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <h3>The Summit Trek</h3>
                  <p>A genuinely demanding multi-day trek through forested, remote terrain — expect steep sections and limited infrastructure throughout.</p>
                  <h3>Rare Flora</h3>
                  <p>Phawngpui National Park's orchids and rhododendrons are a real draw for botanically-minded visitors, best seen in their respective bloom windows.</p>
                  <h3>The Blue Haze</h3>
                  <p>Best appreciated from a distance before or after the climb — the mountain's namesake blue tint is most visible on clear days from lower vantage points.</p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>Very limited infrastructure — expect basic forest department accommodation or camping, with guesthouses in Lawngtlai town before/after the trek.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "On the trek", icon: "⛺", range: "Camping / forest huts", picks: ["Forest department huts (basic)", "Trekking tents"] },
                      { tier: "Lawngtlai town", icon: "🏨", range: "₹800–₹1,800/night", picks: ["Basic guesthouses", "Simple lodges"] },
                      { tier: "Aizawl (before/after)", icon: "🏛️", range: "₹2,000+/night", picks: ["Standard city hotels"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Days 1-2", title: "Travel to Lawngtlai", color: "bg-amber-700", activities: ["Long drive from Aizawl", "Arrange guide, permits, and final logistics", "Rest before the trek begins"] },
                      { day: "Days 3-4", title: "The Trek", color: "bg-sky-600", activities: ["Multi-day ascent through forest terrain", "Camp overnight en route", "Summit and descent"] },
                      { day: "Day 5", title: "Return", color: "bg-forest-600", activities: ["Travel back to Lawngtlai and onward to Aizawl"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => (<li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>))}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>Food on the Trek</h2>
                  <ul>
                    <li><strong>Carry your own supplies:</strong> Facilities along the route are minimal to nonexistent — plan expedition-style provisions.</li>
                    <li><strong>Lawngtlai town:</strong> Basic local eateries before and after the trek.</li>
                  </ul>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Estimate"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Guide/porter (per day)", "₹1,500 – ₹2,500"],
                          ["Forest department permit", "₹500 – ₹1,000"],
                          ["Camping/trekking gear rental", "₹1,000 – ₹2,000"],
                          ["Food supplies for the trek", "₹1,500 – ₹3,000"],
                        ].map(([exp, v], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* A guide/porter team is not optional here — treat it as an essential cost, not an add-on.</p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Trekking Phawngpui</h2>
                  <ul>
                    <li><strong>Arrange a guide and permits well in advance:</strong> This is a protected, remote, border-adjacent area — do not expect to organize on arrival.</li>
                    <li><strong>Come physically prepared:</strong> This is not a casual first trek — multi-day, demanding terrain requires genuine fitness.</li>
                    <li><strong>Time your trip around bloom season if flora is a priority:</strong> Check current timing locally rather than assuming fixed dates.</li>
                    <li><strong>Register with local authorities/guides given the border proximity:</strong> A responsible, informed approach matters here.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Arrange guides and permits in advance", "Train physically before attempting this trek", "Carry expedition-level supplies", "Check current weather before departing", "Register with local authorities", "Respect the protected park status"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt this as a casual first trek", "Travel without a local guide", "Underestimate the travel time to Lawngtlai", "Trek during monsoon season", "Skip permit arrangements", "Expect any real infrastructure en route"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Recover with easier sightseeing in{" "}
                    <Link href="/blog/aizawl-travel-guide">Aizawl</Link>{" "}
                    before or after. See our full{" "}
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
                {["Phawngpui", "Blue Mountain", "Mizoram's Highest Peak", "Trekking", "Lawngtlai District", "Adventure"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="phawngpui-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="phawngpui-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
