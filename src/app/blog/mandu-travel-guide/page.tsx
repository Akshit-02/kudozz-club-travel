// src/app/blog/mandu-travel-guide/page.tsx
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
  title: "Mandu Travel Guide: Jahaz Mahal, Monsoon Palaces & Afghan Ruins",
  description:
    "The complete Mandu travel guide — Jahaz Mahal, Hoshang Shah's Tomb, Rani Roopmati's Pavilion, why Mandu is India's 'monsoon capital,' how to reach from Indore, a 2-day itinerary, and budget breakdown for this ridge-top Malwa Sultanate city.",
  keywords:
    "Mandu travel guide, Jahaz Mahal, Hoshang Shah tomb, Rani Roopmati pavilion, Baz Bahadur palace, Mandu monsoon capital, Mandu itinerary, how to reach Mandu from Indore, Mandu Madhya Pradesh, Malwa Sultanate ruins, Mandu Jami Masjid, best time to visit Mandu",
  openGraph: {
    title: "Mandu Travel Guide: Jahaz Mahal, Monsoon Palaces & Afghan Ruins",
    description:
      "A ridge-top fort city of Afghan-era palaces built for the monsoon, including a 'ship palace' that seems to float between two lakes — the complete guide to Mandu.",
    url: "https://club.kudozz.in/blog/mandu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Fortified sandstone architecture, representative of Mandu, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandu Travel Guide: Jahaz Mahal, Monsoon Palaces & Afghan Ruins",
    description:
      "A monsoon capital of ship-shaped palaces and romantic ruins on a Malwa Plateau ridge — the complete guide to Mandu.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/mandu-travel-guide" },
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
          headline: "Mandu Travel Guide: Jahaz Mahal, Monsoon Palaces & Afghan Ruins",
          description:
            "The complete guide to Mandu, the ridge-top Malwa Sultanate city of monsoon palaces in Madhya Pradesh.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mandu-travel-guide" },
          about: {
            "@type": "Place",
            name: "Mandu",
            address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mandu Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Mandu?",
    a: "One full day covers the highlights (Jahaz Mahal, Hoshang Shah's Tomb, Jami Masjid, Rani Roopmati's Pavilion, Baz Bahadur's Palace), but two days lets you explore at a relaxed pace and catch the ruins at both sunrise and sunset light.",
  },
  {
    q: "Why is Mandu called the 'monsoon capital'?",
    a: "Mandu's Afghan-influenced architects deliberately designed the city's palaces and pavilions to be at their most spectacular during the rains — reflecting pools fill, the plateau turns green, and structures like Jahaz Mahal were built specifically to be admired between two monsoon-fed tanks.",
  },
  {
    q: "How do I reach Mandu?",
    a: "Indore is the nearest city with an airport (Devi Ahilyabai Holkar Airport, IDR), about 100 km away — a roughly 2.5-hour drive to Mandu. The nearest railway station is Ratlam or Indore, with road transfer from either.",
  },
  {
    q: "What is the best time to visit Mandu?",
    a: "Mandu is unusual among Indian heritage sites in that the monsoon (June–September) is genuinely its most atmospheric season, when the ruins turn lush green — though roads and walking can be muddy. October to March is more comfortable for extensive walking if weather matters more to you than the greenery.",
  },
  {
    q: "Is Hoshang Shah's Tomb connected to the Taj Mahal?",
    a: "Local tradition holds that Shah Jahan's architects visited Hoshang Shah's Tomb — India's first marble mausoleum — while planning the Taj Mahal, drawing inspiration from its proportions and marble work. It's a widely repeated claim in Mandu's history, though not something that can be verified with documentary certainty.",
  },
  {
    q: "Is Mandu worth visiting as a day trip from Indore?",
    a: "It's possible but rushed — Mandu's ruins are spread across a wide plateau, and a same-day round trip from Indore leaves limited time on the ground. An overnight stay lets you see the sunset from Rani Roopmati's Pavilion and start the next morning early, before the heat builds.",
  },
  {
    q: "What is the budget for a trip to Mandu?",
    a: "A budget traveller can manage on roughly ₹1,400–₹1,800 a day (stay, food, local transport, entry fees), a mid-range trip runs closer to ₹4,000–₹5,000 a day, excluding transport to the region.",
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
  { id: "introduction", title: "Why Mandu?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MANDU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a spread-out ridge-top ruin city",
    emoji: "🏰",
    items: [
      {
        name: "Comfortable Walking/Trekking Shoes",
        description:
          "Mandu's monuments are spread across a wide plateau with uneven stone paths between them — proper footwear matters more here than at a single-complex site.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "6.8k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+trekking+walking+shoes"),
        tag: "Ruin-city essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The distances between Mandu's monument clusters are longer than a typical single-site temple visit — sore feet cut trips short.",
      },
      {
        name: "Rented Scooter / Bike Access",
        description:
          "Locally rented two-wheelers are the practical way to cover Mandu's spread-out ruins efficiently — most travellers rent one for the day rather than walking between every cluster.",
        price: "₹—",
        rating: 4.2,
        reviews: "1.9k",
        image: "🛵",
        affiliateUrl: amazonSearchUrl("compact+rain+poncho+travel"),
        tag: "Local essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Walking between every monument cluster at Mandu can eat up most of a day — a rented scooter turns it into an efficient half-day loop.",
      },
      {
        name: "Compact Rain Poncho",
        description:
          "If you're visiting in monsoon season for Mandu's famous green look, a packable poncho keeps you dry between palace stops without weighing down a daypack.",
        price: "₹299",
        rating: 4.2,
        reviews: "3.4k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("compact+rain+poncho+travel"),
        tag: "Monsoon essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Mandu's monsoon visit season means genuine rain risk — a poncho beats an umbrella for two-wheeler travel between ruins.",
      },
      {
        name: "2L Hydration Bottle",
        description:
          "Facilities are sparse between Mandu's monument clusters, especially outside the main Jahaz Mahal area.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "There are long stretches between clusters like Rani Roopmati's Pavilion with no shops in sight.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description: "Outside monsoon season, Mandu's open plateau offers minimal shade across a full day of ruin-hopping.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.9k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "Between Oct and May, Mandu's exposed ridge-top setting gets intense midday sun with few shaded rest points.",
      },
      {
        name: "Camera for Landscape Shots",
        description: "The Narmada valley views from Rani Roopmati's Pavilion and Baz Bahadur's Palace are Mandu's signature photo opportunities.",
        price: "₹—",
        rating: 4.4,
        reviews: "3.1k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("mirrorless+camera+travel"),
        tag: "Photography essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Mandu's ridge-top vantage points offer some of Madhya Pradesh's best sunset views over the Narmada valley.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ManduGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Fortified sandstone architecture, representative of Mandu, Madhya Pradesh"
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
                { label: "Mandu", href: null },
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
              {["Mandu", "Heritage", "Jahaz Mahal", "Malwa", "Madhya Pradesh"].map((tag) => (
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
              Mandu Travel Guide: Jahaz Mahal, Monsoon Palaces & Afghan Ruins
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A ridge-top fort city of Afghan-era palaces built for the
              monsoon, including a "ship palace" that seems to float between
              two lakes — everything you need to plan a trip.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mandu, Madhya Pradesh" },
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
                  <h2>Why Mandu?</h2>
                  <p>
                    High on a ridge of the Malwa Plateau, roughly 100 km
                    from Indore, sits one of India's more unusual heritage
                    sites — a fortified city built primarily during the 15th
                    century by the Malwa Sultanate, and deliberately designed
                    to be at its most beautiful in the rain. <strong>Mandu
                    </strong> (also spelled Mandav) earned itself the
                    nickname "monsoon capital" because its Afghan-influenced
                    architects built palaces, water tanks, and pavilions
                    meant to be experienced with the plateau green and the
                    reflecting pools full.
                  </p>
                  <p>
                    Its signature monument, <strong>Jahaz Mahal</strong> (Ship
                    Palace), sits on a narrow strip of land between two
                    artificial lakes and appears to float like a ship when
                    the water is high — a striking piece of design for a
                    5th-century pleasure palace. Beyond it, Mandu holds a
                    romantic legend (Sultan Baz Bahadur and queen
                    Roopmati), India's first marble mausoleum, and a grand
                    mosque modeled on Damascus's Great Mosque — all spread
                    across a wide, walkable plateau that gets a fraction of
                    the visitors Khajuraho or Orchha see.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏰</span> Mandu at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🏰", label: "Key Site", value: "Jahaz Mahal" },
                        { icon: "🌡️", label: "Best Time", value: "Jun–Sep (green) / Oct–Mar (comfort)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Indore (IDR), ~100 km" },
                        { icon: "🏛️", label: "Built By", value: "Malwa Sultanate (15th c.)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹5,000" },
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
                  <h2>Best Time to Visit Mandu</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Green Mandu — the classic look", text: "The plateau turns lush and the tanks around Jahaz Mahal fill up, matching what Mandu was actually designed for. Expect intermittent rain and muddier paths between clusters." },
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Most comfortable — good for walking", text: "Cool, dry weather makes covering the spread-out monument clusters far more comfortable than the rains, though the landscape is browner." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — early morning only", text: "Daytime heat on the exposed plateau makes extended walking tough — plan sightseeing for early morning if visiting this window." },
                      { season: "Late Sep", emoji: "🌤️", color: "bg-purple-50 border-purple-200", mood: "Transitional", text: "Rains taper off, greenery lingers a little longer, and paths start drying out — a reasonable middle ground." },
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
                    <strong>Our pick:</strong> Choose based on what you value
                    more — the monsoon (Jul–Aug) for the famous "green Mandu"
                    look the city was actually designed around, or
                    November–February if comfortable, dry walking matters
                    more to you.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mandu</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Devi Ahilyabai Holkar Airport
                      in Indore (IDR) is the nearest, roughly 100 km away —
                      about a 2.5-hour drive to Mandu.
                    </li>
                    <li>
                      <strong>By Train:</strong> Ratlam and Indore are the
                      nearest railway stations with meaningful long-distance
                      connectivity, both requiring a road transfer onward.
                    </li>
                    <li>
                      <strong>By Road:</strong> The Indore–Mandu drive is
                      the most common route, and a reasonably scenic one as
                      the road climbs onto the Malwa Plateau.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself overnight in
                    Mandu rather than day-tripping from Indore — the ruins
                    are spread wide enough that a same-day round trip leaves
                    very little time on the ground, and you'll miss the
                    sunset from Rani Roopmati's Pavilion.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Top Things to See in Mandu</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Sandstone fort ruins representative of Mandu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Jahaz Mahal (Ship Palace):</strong> Mandu's
                      signature monument, built between two artificial tanks
                      — Munj Talao and Kapur Talao — so that it appears to
                      float when the water is high. Widely considered the
                      city's most photogenic structure.
                    </li>
                    <li>
                      <strong>Hoshang Shah's Tomb:</strong> India's first
                      marble mausoleum, and by local tradition a structure
                      that reportedly influenced the architects who later
                      designed the Taj Mahal.
                    </li>
                    <li>
                      <strong>Rani Roopmati's Pavilion & Baz Bahadur's
                      Palace:</strong> Linked to the romantic legend of
                      Sultan Baz Bahadur and queen Roopmati, with sweeping
                      views over the Narmada valley — Mandu's best sunset
                      spot.
                    </li>
                    <li>
                      <strong>Jami Masjid:</strong> A grand mosque modeled
                      on the Great Mosque of Damascus, with a large open
                      courtyard and simple, monumental scale.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mandu</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹700–₹1,800/night", picks: ["MP Tourism guesthouses", "Simple lodges near the bus stand", "Basic homestays in Mandu village"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,000–₹5,000/night", picks: ["MPT Malwa Resort", "Heritage-style guesthouses", "Mid-range hotels near Jahaz Mahal"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Boutique heritage resorts", "Premium stays with plateau views", "Well-reviewed private villas"] },
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
                  <h2>What to Eat in Mandu</h2>
                  <ul>
                    <li><strong>Dal Bafla:</strong> A Malwa-region specialty — baked wheat rolls dunked in ghee, served with dal, a heartier cousin of Rajasthan's dal baati.</li>
                    <li><strong>Bhutte ki kees:</strong> A savoury grated-corn dish common across Madhya Pradesh, worth trying at local eateries.</li>
                    <li><strong>Local thalis:</strong> Simple vegetarian thalis at guesthouse restaurants and small local eateries are the most reliable option in Mandu's limited dining scene.</li>
                    <li><strong>Corn-based street snacks:</strong> The Malwa Plateau region is known for corn, and roadside stalls near Jahaz Mahal serve simple roasted-corn snacks.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Mandu Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Central Monuments", color: "bg-amber-700", activities: ["Morning: Jahaz Mahal and the surrounding tanks", "Continue to Hoshang Shah's Tomb and Jami Masjid", "Afternoon: rest or explore Mandu village", "Evening: sunset drinks/tea overlooking the tanks"] },
                      { day: "Day 2", title: "Roopmati's Pavilion & Ruins Loop", color: "bg-forest-600", activities: ["Morning: rent a scooter and ride out to Rani Roopmati's Pavilion", "Continue to Baz Bahadur's Palace nearby", "Explore any further outlying ruins on the loop back", "Evening: sunset at Roopmati's Pavilion before departure"] },
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
                          ["Accommodation/night", "₹800", "₹3,000", "₹10,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Scooter rental/day", "₹300", "₹300", "₹300"],
                          ["Entry fees", "₹300", "₹300", "₹300"],
                          ["Daily total", "₹1,400 – ₹1,800", "₹4,500", "₹12,600"],
                          ["2-Day trip total", "₹3,500", "₹11,300", "₹31,000"],
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
                    * Excludes transport to Indore. Entry fees are
                    approximate — confirm current rates locally before you
                    go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Mandu</h2>
                  <ul>
                    <li><strong>Rent a scooter or bike locally:</strong> Mandu's ruins are too spread out to comfortably cover entirely on foot in a day.</li>
                    <li><strong>Stay overnight rather than day-tripping:</strong> A same-day round trip from Indore leaves too little time on the ground.</li>
                    <li><strong>Carry water:</strong> Facilities thin out fast once you leave the Jahaz Mahal area.</li>
                    <li><strong>Visit in monsoon for the "green Mandu" look:</strong> If you don't mind occasional rain, June–September shows Mandu at its most atmospheric.</li>
                    <li><strong>Time Roopmati's Pavilion for sunset:</strong> The Narmada valley views are best in the late-afternoon light.</li>
                    <li><strong>Bring cash:</strong> Card acceptance is patchy outside the main hotels.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Rent a scooter to cover the spread-out ruins",
                          "Time Roopmati's Pavilion for sunset",
                          "Stay overnight rather than day-tripping",
                          "Carry your own water for the day",
                          "Visit in monsoon if you want Mandu's famous green look",
                          "Carry cash for local transactions",
                        ].map((item) => (
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
                        {[
                          "Try to walk between every monument cluster",
                          "Day-trip from Indore and expect to see everything",
                          "Rely on card payments outside main hotels",
                          "Visit at midday in peak summer without shade breaks",
                          "Skip Roopmati's Pavilion — it's the best sunset spot",
                          "Assume road conditions are dry-season quality in monsoon",
                        ].map((item) => (
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
                {["Mandu", "Heritage", "Jahaz Mahal", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MANDU_GEAR} destination="Mandu" />

              <RelatedPostsGrid currentSlug="mandu-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mandu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
