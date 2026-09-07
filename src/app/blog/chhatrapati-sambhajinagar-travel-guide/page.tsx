// src/app/blog/chhatrapati-sambhajinagar-travel-guide/page.tsx
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
  title: "Chhatrapati Sambhajinagar Travel Guide: Bibi Ka Maqbara & Forts",
  description:
    "The complete Chhatrapati Sambhajinagar (Aurangabad) travel guide. Bibi Ka Maqbara, Daulatabad Fort, Panchakki, where to stay, and how to use the city as your base for Ajanta and Ellora.",
  keywords:
    "Chhatrapati Sambhajinagar travel guide, Aurangabad travel guide, Bibi Ka Maqbara, Daulatabad Fort, Panchakki, Ajanta Ellora gateway, best time to visit Aurangabad, how to reach Chhatrapati Sambhajinagar, mini Taj Mahal",
  openGraph: {
    title: "Chhatrapati Sambhajinagar Travel Guide: Bibi Ka Maqbara & Forts",
    description: "A Mughal-era 'mini Taj Mahal', the hilltop Daulatabad Fort, and the gateway to Ajanta and Ellora — the complete guide to Chhatrapati Sambhajinagar (Aurangabad).",
    url: "https://club.kudozz.in/blog/chhatrapati-sambhajinagar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/virupaksha.jpg", width: 1200, height: 630, alt: "Heritage stone carving representative of Chhatrapati Sambhajinagar, Maharashtra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhatrapati Sambhajinagar Travel Guide: Bibi Ka Maqbara & Forts",
    description: "Bibi Ka Maqbara, Daulatabad Fort, and the gateway to Ajanta-Ellora — the complete guide.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/chhatrapati-sambhajinagar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Chhatrapati Sambhajinagar Travel Guide: Bibi Ka Maqbara & Forts",
          description: "The complete Chhatrapati Sambhajinagar (Aurangabad) travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/chhatrapati-sambhajinagar-travel-guide" },
          about: { "@type": "Place", name: "Chhatrapati Sambhajinagar", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Chhatrapati Sambhajinagar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Why was Aurangabad renamed Chhatrapati Sambhajinagar?", a: "The city was officially renamed Chhatrapati Sambhajinagar in 2023, after the Maratha ruler Chhatrapati Sambhaji Maharaj. Both names are still widely used and understood locally and in travel bookings." },
  { q: "Is Bibi Ka Maqbara worth visiting if I've seen the Taj Mahal?", a: "It's smaller and less ornate than the Taj Mahal, but genuinely worth seeing for its own history — built by Aurangzeb's son for his mother in the same architectural tradition — and for how it illustrates the decline in Mughal craftsmanship and budgets by the late 17th century." },
  { q: "Can I visit Ajanta and Ellora Caves from here in one day?", a: "Not comfortably both in a single day — Ellora is close (~30 km) and can be combined with Daulatabad Fort in a day, but Ajanta is roughly 100 km away and deserves its own full day. Most travellers base themselves here for 3–4 days total." },
  { q: "What is the best time to visit Chhatrapati Sambhajinagar?", a: "November to February is ideal, with cool, comfortable temperatures for a full day of walking and climbing at the forts. Summers (March–June) get extremely hot and are best avoided for outdoor sightseeing." },
  { q: "How do I reach Chhatrapati Sambhajinagar?", a: "Chhatrapati Sambhajinagar Airport (IXU) has direct flights from Mumbai, Delhi, Pune, and Hyderabad. The city also has a well-connected railway station and is roughly 340 km from Mumbai and 235 km from Pune by road." },
  { q: "What is the budget for a trip here?", a: "A budget traveller can manage roughly ₹1,800 a day (guesthouses, local food, autos), a mid-range trip runs closer to ₹4,200 a day, and a luxury stay can run ₹10,000+ a day. A 2-day city trip totals roughly ₹3,600 on a budget and ₹8,400 mid-range, excluding travel to the region." },
  { q: "Is Daulatabad Fort difficult to climb?", a: "It's a moderately strenuous climb involving several hundred steps and a dark, bat-filled defensive tunnel section — doable for most fit travellers in about 1.5–2 hours round trip, but not ideal for those with mobility concerns." },
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
  { id: "introduction", title: "Why Chhatrapati Sambhajinagar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SAMBHAJINAGAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for fort-climbing and long heritage days",
    emoji: "🏰",
    items: [
      { name: "Comfortable Walking/Trekking Shoes", description: "Daulatabad Fort's climb involves several hundred uneven steps and a dark tunnel section — proper footwear matters here.", price: "₹1,499", rating: 4.4, reviews: "6.2k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes+fort+climbing"), tag: "Fort-climb essential", tagColor: "bg-amber-100 text-amber-700", why: "Loose sandals are a real hazard on Daulatabad's steep, uneven fort steps and dark tunnel passage." },
      { name: "Small LED Torch/Flashlight", description: "Useful for the unlit defensive tunnel inside Daulatabad Fort, and for dim interior sections at Ellora's larger caves.", price: "₹399", rating: 4.3, reviews: "5.1k", image: "🔦", affiliateUrl: amazonSearchUrl("small+led+torch+flashlight"), tag: "Fort essential", tagColor: "bg-stone-100 text-stone-700", why: "Daulatabad Fort's tunnel section is genuinely dark — many visitors are caught off guard without their own light." },
      { name: "Wide-Brim Sun Hat", description: "Most sites here (Bibi Ka Maqbara grounds, Daulatabad's open climb) offer little shade — a hat makes a real difference.", price: "₹399", rating: 4.3, reviews: "3.4k", image: "👒", affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"), tag: "Heat essential", tagColor: "bg-red-100 text-red-700", why: "This region gets genuinely hot outside winter, and most heritage sites have limited shade." },
      { name: "2L Hydration Bottle", description: "A full day covering Bibi Ka Maqbara, Panchakki, and Daulatabad needs steady hydration, especially outside winter months.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"), tag: "Trip essential", tagColor: "bg-sky-100 text-sky-700", why: "Water availability is limited inside the fort complex itself — carrying enough avoids cutting the visit short." },
      { name: "Daypack (20L)", description: "For carrying water, snacks, and a torch across a day that moves between the city, Daulatabad, and (if timed together) Ellora Caves.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("20L+daypack+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "A combined Daulatabad-Ellora day is long enough that a proper daypack beats carrying loose items by hand." },
      { name: "Modest Cotton Layer", description: "Useful for visiting Panchakki (a working Sufi shrine) and other religious sites in the city respectfully.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+scarf+travel+modest"), tag: "Heritage-site essential", tagColor: "bg-purple-100 text-purple-700", why: "Panchakki and other shrine sites expect modest dress, unlike the more tourist-oriented fort and mausoleum stops." },
    ],
  },
];

export default function SambhajinagarGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Heritage stone carving representative of Chhatrapati Sambhajinagar, Maharashtra" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Chhatrapati Sambhajinagar", href: "/blog?category=chhatrapati-sambhajinagar" }, { label: "City Guide", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Chhatrapati Sambhajinagar", "Aurangabad", "Heritage", "Forts", "Maharashtra", "UNESCO Gateway"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Chhatrapati Sambhajinagar Travel Guide: Bibi Ka Maqbara & Forts
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Mughal-era "mini Taj Mahal", the hilltop Daulatabad Fort, and
              the gateway to Ajanta and Ellora — everything you need to plan a
              trip to Chhatrapati Sambhajinagar (Aurangabad).
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Chhatrapati Sambhajinagar, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,400 words" },
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
                  <h2>Why Chhatrapati Sambhajinagar?</h2>
                  <p>
                    Formerly known as Aurangabad and officially renamed{" "}
                    <strong>Chhatrapati Sambhajinagar</strong> in 2023, this
                    city in central Maharashtra carries more layered history
                    per square kilometre than almost anywhere else in the
                    state — Mughal mausoleums, a Deccan hill fort built to be
                    nearly impregnable, and Sufi shrines, all within the city
                    limits.
                  </p>
                  <p>
                    But for most travellers, its real value is as a base: this
                    is the logical hub city for visiting both{" "}
                    <strong>Ajanta Caves</strong> and{" "}
                    <strong>Ellora Caves</strong>, India's two greatest
                    rock-cut heritage sites, both UNESCO World Heritage
                    listed. Spend a couple of days on the city itself, then
                    use it as your launch pad for the caves (see our separate{" "}
                    <Link href="/blog/ajanta-ellora-travel-guide">
                      Ajanta & Ellora guide
                    </Link>{" "}
                    for that leg of the trip).
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> At a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🕌", label: "Key Site", value: "Bibi Ka Maqbara" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "IXU (direct city flights)" },
                        { icon: "🗿", label: "Nearby UNESCO", value: "Ajanta & Ellora Caves" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable days ideal for climbing Daulatabad Fort and walking the extensive Ellora and Ajanta cave complexes." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — best avoided", text: "Temperatures regularly cross 38–40°C. Outdoor fort visits become genuinely uncomfortable; if visiting, go very early in the day." },
                      { season: "Jul – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but wet", text: "Rain cools things down and greens the surrounding countryside, though it can disrupt outdoor sightseeing on heavier rain days." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the comfortable window for both the fort climb and the cave-site walking, which adds up to significant time on your feet.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Chhatrapati Sambhajinagar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Chhatrapati Sambhajinagar Airport (IXU) has direct flights from Mumbai, Delhi, Pune, and Hyderabad.</li>
                    <li><strong>By Train:</strong> A well-connected railway station links the city to Mumbai, Pune, and other major routes across the Deccan.</li>
                    <li><strong>By Road:</strong> Roughly 340 km from Mumbai (~6–7 hrs) and 235 km from Pune (~4.5–5 hrs), both well-served by state and private buses.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're visiting both Ajanta and Ellora, plan for at least 3–4 days total in the region — trying to cram both cave complexes plus the city into 2 days makes every day feel rushed.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Heritage carved stonework near Chhatrapati Sambhajinagar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bibi Ka Maqbara:</strong> Built in the 1660s by Aurangzeb's son Azam Shah as a mausoleum for his mother, this structure closely echoes the Taj Mahal's design on a smaller scale — nicknamed the "Mini Taj" or "Deccan Taj".</li>
                    <li><strong>Daulatabad Fort (Devagiri Fort):</strong> A formidable 14th-century hill fort roughly 15 km from the city, famous for its defensive spiral tunnel designed to disorient attackers — a genuinely impressive feat of medieval military engineering.</li>
                    <li><strong>Panchakki:</strong> A centuries-old water mill powered by an ingenious underground channel system, built around the Sufi shrine of Baba Shah Muzaffar — a peaceful, shaded stop in the city.</li>
                    <li><strong>Aurangabad Caves:</strong> A smaller set of Buddhist rock-cut caves within the city itself, distinct from and easier to reach than Ajanta or Ellora — a good introduction if you're short on time.</li>
                    <li><strong>Day trip to Ellora Caves:</strong> Just ~30 km away, home to the extraordinary Kailasa Temple carved downward from a single rock — see our dedicated Ajanta & Ellora guide for the full details.</li>
                    <li><strong>Day trip to Ajanta Caves:</strong> Roughly 100 km away, with Buddhist murals dating back over 2,000 years — worth its own full day rather than a rushed add-on.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹2,000/night", picks: ["Budget hotels near the railway station", "Guesthouses in the city centre", "MTDC lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Business hotels near CIDCO", "Chain hotels close to Bibi Ka Maqbara", "Boutique heritage-style stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["5-star resorts on the city outskirts", "Premium business hotels near the airport"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Choose a hotel near the CIDCO/Airport road area — it puts you roughly equidistant from the city sights and the Ellora/Daulatabad road route.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Naan Qalia:</strong> A slow-cooked mutton curry paired with a distinctive thick, tandoor-baked naan — a genuine local specialty tied to the city's Mughal-era food heritage.</li>
                    <li><strong>Marathwada-style Thali:</strong> Hearty, home-style vegetarian and non-vegetarian thalis common across the wider Marathwada region.</li>
                    <li><strong>Kebabs and Mughlai fare:</strong> A legacy of the city's Mughal past, found across its old-city eateries.</li>
                    <li><strong>Himroo textiles as souvenirs:</strong> Not food, but worth noting — the city is known for Himroo weaving, a good stop between meals.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day City Itinerary</h2>
                  <p>This covers the city itself — plan separate dedicated days for Ajanta and Ellora if visiting both (see our Ajanta & Ellora guide).</p>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Bibi Ka Maqbara & City Heritage", color: "bg-amber-700", activities: ["Morning: Bibi Ka Maqbara", "Midday: Panchakki and the Sufi shrine", "Afternoon: Aurangabad Caves", "Evening: Old city market walk"] },
                      { day: "Day 2", title: "Daulatabad Fort", color: "bg-forest-600", activities: ["Morning: Drive to Daulatabad Fort", "Midday: Climb the fort, including the tunnel section", "Afternoon: Return to the city", "Evening: Local dinner, Himroo shopping"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>)}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>)}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹9,000"],
                          ["Food/day", "₹450", "₹900", "₹2,000"],
                          ["Local transport/entry fees per day", "₹350", "₹800", "₹2,000"],
                          ["Daily total", "₹1,800", "₹4,200", "₹10,000+"],
                          ["2-Day trip total", "₹3,600", "₹8,400", "₹20,000+"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Entry fees are typically split between Indian and foreign national rates at ASI-protected monuments — check current rates before visiting.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Base here for 3–4 days if covering both caves:</strong> Ajanta, Ellora, and the city sights together are too much for a rushed 2-day trip.</li>
                    <li><strong>Hire a car and guide for the Daulatabad-Ellora combined day:</strong> They're close enough to pair, and a knowledgeable guide adds real context to both.</li>
                    <li><strong>Start early in summer months:</strong> Fort climbs and open-air cave walking are much more bearable before 10 AM in the hotter months.</li>
                    <li><strong>Carry water and a torch:</strong> Both are genuinely useful inside Daulatabad Fort's tunnel section.</li>
                    <li><strong>Verify weekly closing days:</strong> ASI-protected monuments often close one day a week — check before building your itinerary around a specific site.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan 3-4 days total if covering the city plus both cave complexes", "Wear proper walking shoes for Daulatabad's climb", "Hire a guide for context at the fort and caves", "Start summer visits early to avoid the heat", "Verify monument closing days in advance"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Try to fit Ajanta, Ellora, and the city into a rushed 2-day trip", "Attempt Daulatabad's tunnel section without a light source", "Visit in peak summer without an early start", "Skip carrying water into the fort complex", "Assume every monument is open every day"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Chhatrapati Sambhajinagar", "Aurangabad", "Bibi Ka Maqbara", "Daulatabad Fort", "Maharashtra", "Heritage", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SAMBHAJINAGAR_GEAR} destination="Chhatrapati Sambhajinagar" />
              <RelatedPostsGrid currentSlug="chhatrapati-sambhajinagar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="chhatrapati-sambhajinagar-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
