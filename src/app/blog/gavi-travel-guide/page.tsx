// src/app/blog/gavi-travel-guide/page.tsx
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
  title: "Gavi Travel Guide: Eco-Tourism, Forest Trails & Permits",
  description:
    "The complete Gavi travel guide. Kerala Forest Department eco-tourism programs, permit-only entry, forest walks, boating, birdwatching, where to stay, best time to visit, and how to book.",
  keywords:
    "Gavi travel guide, Gavi eco-tourism, Gavi permits, Periyar Tiger Reserve buffer zone, Kerala Forest Department eco-tourism, best time to visit Gavi, how to reach Gavi",
  openGraph: {
    title: "Gavi Travel Guide: Eco-Tourism, Forest Trails & Permits",
    description: "A permit-only eco-tourism forest inside the Periyar Tiger Reserve buffer zone, with almost no crowds and some of Kerala's densest wildlife — the complete guide to Gavi.",
    url: "https://club.kudozz.in/blog/gavi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/hero.jpg", width: 1200, height: 630, alt: "Dense forest landscape representative of Gavi, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavi Travel Guide: Eco-Tourism, Forest Trails & Permits",
    description: "A permit-only eco-tourism forest with almost no crowds — the complete guide to Gavi.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/gavi-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Gavi Travel Guide: Eco-Tourism, Forest Trails & Permits",
          description: "The complete Gavi travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/gavi-travel-guide" },
          about: { "@type": "Place", name: "Gavi", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Gavi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Do I need a permit to visit Gavi?", a: "Yes — Gavi is a strictly regulated Kerala Forest Department eco-tourism destination with a controlled daily entry system. Book through the official Forest Department channel or a recognized Thekkady-based operator, and verify the current process before you go, since it can change." },
  { q: "Can I drive my own vehicle into Gavi?", a: "Generally no — private vehicle access to the interior is limited, and transport is typically Forest-Department-managed beyond a certain point. Verify current rules before planning your own transport." },
  { q: "How do I reach Gavi?", a: "The nearest airports are Madurai in Tamil Nadu (~120km) and Kochi (~180km). Access is typically routed through Kumily/Thekkady." },
  { q: "What is the best time to visit Gavi?", a: "October to April is the dry season when most Forest Department programs are operational. Access may be restricted during peak monsoon (June–September) — verify current status before travelling." },
  { q: "Is there mobile network coverage in Gavi?", a: "Coverage can be unreliable or absent in parts of the reserve — a genuinely off-the-grid experience by design. Let someone know your plans before heading in." },
  { q: "Can I stay overnight in Gavi?", a: "Yes, through limited Forest-Department-run accommodation — book well ahead as options are scarce and in high demand." },
  { q: "What is the budget for a trip to Gavi?", a: "Gavi programs are typically sold as fixed day-packages including transport and a guide rather than open, DIY entry — expect roughly ₹2,000-4,000 per person for a standard day program, higher for overnight eco-stays." },
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
  { id: "introduction", title: "Why Gavi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gavi", level: 2 },
  { id: "top-attractions", title: "Activities & Programs", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GAVI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a remote, permit-only eco-tourism forest",
    emoji: "🌲",
    items: [
      { name: "Trekking Shoes", description: "Forest trails at Gavi are genuinely undeveloped compared to more commercial destinations.", price: "₹3,299", rating: 4.5, reviews: "6.8k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+outdoor"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Uneven forest terrain and minimal infrastructure make proper footwear more important here than at developed parks." },
      { name: "Insect Repellent", description: "Dense evergreen forest and a reservoir within the property make Gavi genuinely mosquito-heavy.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "This is dense, humid forest with standing water nearby." },
      { name: "Binoculars", description: "For the birdwatching program and general wildlife viewing across the reserve.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+birdwatching"), tag: "Wildlife essential", tagColor: "bg-sky-100 text-sky-700", why: "Gavi's bird diversity is a major draw, and binoculars make the difference for a genuine sighting." },
      { name: "Basic First-Aid Kit", description: "Given limited facilities and patchy network coverage, a small personal first-aid kit is sensible.", price: "₹399", rating: 4.4, reviews: "3.1k", image: "🩹", affiliateUrl: amazonSearchUrl("basic+first+aid+kit+travel"), tag: "Remote-area essential", tagColor: "bg-purple-100 text-purple-700", why: "Gavi's remote, low-infrastructure setting makes basic self-sufficiency worthwhile." },
    ],
  },
];

export default function GaviGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/hero.jpg" alt="Dense forest landscape representative of Gavi, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Gavi", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Gavi", "Eco-Tourism", "Off-beat", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Gavi Travel Guide: Eco-Tourism, Forest Trails & Permits
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A permit-only eco-tourism forest inside the Periyar Tiger Reserve buffer zone, with almost no crowds and some of Kerala's densest wildlife.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Gavi, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Gavi?</h2>
                  <p>
                    <strong>Gavi</strong> is a strictly regulated eco-tourism destination run by the Kerala Forest Department, sitting within the buffer zone of the Periyar Tiger Reserve, adjoining Thekkady. What sets it apart is a controlled daily entry system that genuinely limits visitor numbers — a deliberate conservation-first approach that keeps the forest markedly quieter than almost any other Indian wildlife destination.
                  </p>
                  <p>
                    Expect dense evergreen forest, open grasslands, and a scenic reservoir, explored through Forest Department programs rather than an open, do-it-yourself visit — this is a place built around low-impact access, not convenience.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌲</span> Gavi at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🌲", label: "Setting", value: "Periyar Tiger Reserve buffer zone" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Madurai (~120km)" },
                        { icon: "🎟️", label: "Access", value: "Permit-only, capped daily entry" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Gavi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Apr", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Dry season — our pick", text: "Most Forest Department programs are operational, and this is the most reliable window to visit." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — check access", text: "Access may be restricted for parts of the reserve during heavy monsoon — verify current status before travelling." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Book through the official Forest Department channel or a recognized Thekkady operator, and confirm current season access before finalizing travel dates.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Gavi</h2>
                  <ul>
                    <li><strong>By Air:</strong> Madurai (Tamil Nadu, ~120km) and Kochi (~180km) are the nearest airports.</li>
                    <li><strong>By Road:</strong> Access is typically routed through Kumily/Thekkady, with Forest Department transport required beyond a certain point.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book through the official Kerala Forest Department eco-tourism channel or a recognized Thekkady-based operator well in advance — slots are genuinely limited by design.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Activities & Programs</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/hero.jpg" alt="Forest and reservoir scenery around Gavi" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Guided nature walks:</strong> Forest Department-led walks through the reserve's evergreen forest and grasslands.</li>
                    <li><strong>Boating:</strong> A quiet boat ride on Gavi's scenic reservoir, part of the standard day program.</li>
                    <li><strong>Birdwatching:</strong> Gavi has a notable diversity of forest bird species — a highlight for serious birders.</li>
                    <li><strong>Jeep transfers along forest roads:</strong> Given restricted private vehicle access, Forest Department jeeps handle most interior movement.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay at Gavi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { tier: "Day Visit", icon: "🚶", range: "No overnight stay", picks: ["Standard day packages via Forest Department programs"] },
                      { tier: "Overnight Eco-Stay", icon: "🏕️", range: "₹3,000–₹6,000/night", picks: ["Limited Forest-Department-run accommodation — book well ahead"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most visitors do Gavi as a day trip from Thekkady rather than an overnight stay, given how limited accommodation is.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat at Gavi</h2>
                  <p>Facilities are minimal by design — bring your own basic supplies unless your day package explicitly includes meals.</p>
                  <ul>
                    <li><strong>Program-included meals:</strong> Some Forest Department day packages include a simple meal — confirm this when booking.</li>
                    <li><strong>Thekkady-based eating:</strong> Most travelers eat before or after their Gavi program in Kumily/Thekkady town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Gavi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Entry & Forest Walk", color: "bg-amber-700", activities: ["Travel from Thekkady with Forest Department transport", "Guided nature walk", "Birdwatching stop"] },
                      { day: "Afternoon", title: "Boating & Return", color: "bg-forest-600", activities: ["Boat ride on the reservoir", "Return transfer to Thekkady", "Rest/onward travel"] },
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

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Package", "Approx. Cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Standard day program (per person)", "₹2,000 – ₹3,000"],
                          ["Extended day program with more activities", "₹3,000 – ₹4,000"],
                          ["Overnight eco-stay (where available)", "₹3,000 – ₹6,000/night"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Prices vary by operator and season — confirm exact costs and inclusions when booking. Excludes transport to Thekkady.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Gavi</h2>
                  <ul>
                    <li><strong>Book well in advance:</strong> Daily entry is genuinely capped, and slots go fast in peak season.</li>
                    <li><strong>Verify current entry protocol:</strong> Rules around vehicle access and permits do change — confirm with your operator.</li>
                    <li><strong>Bring basic supplies:</strong> Facilities are intentionally minimal.</li>
                    <li><strong>Tell someone your plans:</strong> Mobile network can be unreliable or absent in parts of the reserve.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book through the official Forest Department channel or a recognized operator", "Confirm current entry rules and season access", "Bring basic personal supplies", "Inform someone of your plans given patchy network", "Appreciate the deliberately low-crowd experience"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up without a confirmed booking or permit", "Expect private vehicle access to the interior", "Rely on mobile network throughout the visit", "Expect resort-level facilities", "Book last-minute during peak season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Gavi", "Eco-Tourism", "Off-beat", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GAVI_GEAR} destination="Gavi" />
              <RelatedPostsGrid currentSlug="gavi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="gavi-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
