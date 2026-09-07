// src/app/blog/khajuraho-travel-guide/page.tsx
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
  title: "Khajuraho Temples Travel Guide: History, Timings & Best Time to Visit",
  description:
    "The complete Khajuraho travel guide — the Western, Eastern, and Southern temple groups, the Chandela dynasty's carved sandstone architecture, the Khajuraho Dance Festival, how to reach, a 2-day itinerary, and budget breakdown for this UNESCO World Heritage Site.",
  keywords:
    "Khajuraho travel guide, Khajuraho temples, Kandariya Mahadeva Temple, Khajuraho UNESCO, Chandela dynasty temples, Khajuraho Dance Festival, Khajuraho Light and Sound show, Khajuraho itinerary, best time to visit Khajuraho, how to reach Khajuraho, Khajuraho airport, Western Group Khajuraho, Khajuraho erotic sculptures history",
  openGraph: {
    title: "Khajuraho Temples Travel Guide: History, Timings & Best Time to Visit",
    description:
      "UNESCO-listed temples covered in some of the most intricate stone carving in India, built by the Chandela dynasty over a thousand years ago — the complete guide to Khajuraho.",
    url: "https://club.kudozz.in/blog/khajuraho-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Intricately carved sandstone temple architecture, representative of Khajuraho, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khajuraho Temples Travel Guide: History, Timings & Best Time to Visit",
    description:
      "A thousand years of Chandela-era stone carving, split across three temple groups — the complete guide to Khajuraho.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/khajuraho-travel-guide" },
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
          headline: "Khajuraho Temples Travel Guide: History, Timings & Best Time to Visit",
          description:
            "The complete guide to the Khajuraho Group of Monuments, a UNESCO World Heritage Site of Chandela-era carved temples in Madhya Pradesh.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/khajuraho-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Khajuraho",
            address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Khajuraho Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Khajuraho?",
    a: "Two days is comfortable — one for the Western Group (the largest, most ornate temples plus the evening Light & Sound show), and one for the quieter Eastern and Southern groups. A rushed visit can technically cover the highlights in a single long day.",
  },
  {
    q: "Are the erotic sculptures the main thing at Khajuraho?",
    a: "No — they're a famous but relatively small part of the overall carving. The vast majority of Khajuraho's sculpture depicts deities, celestial figures, everyday life, animals, and mythological narratives. The erotic panels appear on specific temples and are generally read as one theme among many in a broader celebration of life carved into the stone.",
  },
  {
    q: "What is the best time to visit Khajuraho?",
    a: "November to February is ideal — cool, dry weather for walking between temple groups, plus the Khajuraho Dance Festival typically held in winter. March through May gets hot for extended outdoor sightseeing.",
  },
  {
    q: "How do I reach Khajuraho?",
    a: "Khajuraho Airport (HJR) has direct flights from Delhi, Varanasi, and other cities, and is by far the easiest way in. Khajuraho also has its own railway station with reasonable connectivity. Road connections from major cities are long, so flying or taking the train is the common approach.",
  },
  {
    q: "Do I need a guide at Khajuraho?",
    a: "It isn't mandatory, but it genuinely helps — the temples' carving depicts specific mythological narratives and architectural symbolism that are easy to miss walking through alone. ASI-approved guides are available at the Western Group entrance.",
  },
  {
    q: "Which temple group should I prioritise if I only have one day?",
    a: "The Western Group — it holds the largest and best-preserved temples, including Kandariya Mahadeva, the site's largest and most ornate, plus the Light & Sound show in the evening.",
  },
  {
    q: "What is the budget for a trip to Khajuraho?",
    a: "A budget traveller can manage on roughly ₹1,500–₹1,900 a day (stay, food, local transport, entry), a mid-range trip runs closer to ₹4,500–₹5,500 a day, excluding flights or trains into the region.",
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
  { id: "introduction", title: "Why Khajuraho?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "temple-groups", title: "The Three Temple Groups", level: 2 },
  { id: "festival", title: "Khajuraho Dance Festival & Light Show", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KHAJURAHO_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a full day moving between temple complexes",
    emoji: "🛕",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "The Western Group alone covers a wide, paved but sun-exposed complex — comfortable closed shoes make a multi-hour visit far easier than sandals.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "6.8k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Temple-visit essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Temple grounds involve stone platforms and stepped plinths that get uncomfortable fast in flip-flops.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Khajuraho's temple complexes have minimal shade, and a full circuit of the Western Group easily runs past two hours in open sun.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.9k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "Even in the cooler Nov–Feb window, midday sun across the open temple courtyards is intense.",
      },
      {
        name: "Compact Binoculars",
        description:
          "Much of Khajuraho's finest detail carving sits high on the temple shikharas (spires) — binoculars bring the upper panels into view.",
        price: "₹899",
        rating: 4.3,
        reviews: "2.7k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("compact+binoculars+travel"),
        tag: "Detail essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The most intricate carving bands are often several metres up the temple exterior — hard to appreciate with the naked eye alone.",
      },
      {
        name: "2L Hydration Bottle",
        description:
          "A day covering all three temple groups means several hours outdoors with limited shaded rest points between sites.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Facilities thin out fast once you leave the Western Group for the quieter Eastern and Southern clusters.",
      },
      {
        name: "Camera with Zoom Lens",
        description:
          "For capturing the temple carving detail from ground level without needing to climb onto restricted platforms.",
        price: "₹—",
        rating: 4.4,
        reviews: "3.1k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("mirrorless+camera+zoom+lens+travel"),
        tag: "Photography essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A zoom captures upper-tier carving detail that a phone camera generally can't resolve from ground level.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description: "Open stone courtyards at all three temple groups offer little shade during peak daylight hours.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+SPF+50+travel"),
        tag: "Sun essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Multi-hour temple visits in direct sun are the top cause of sunburn regret among Khajuraho travellers.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KhajurahoGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Intricately carved sandstone temple architecture, representative of Khajuraho, Madhya Pradesh"
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
                { label: "Khajuraho", href: null },
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
              {["Khajuraho", "UNESCO", "Heritage", "Temples", "Madhya Pradesh"].map((tag) => (
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
              Khajuraho Temples Travel Guide: History, Timings & Best Time to Visit
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              UNESCO-listed temples covered in some of the most intricate
              stone carving in India, built by the Chandela dynasty over a
              thousand years ago — everything you need to plan a trip.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Khajuraho, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Khajuraho?</h2>
                  <p>
                    In a quiet corner of Madhya Pradesh's Chhatarpur district
                    sits one of India's greatest concentrations of temple
                    architecture — the <strong>Khajuraho Group of
                    Monuments</strong>, built by the Chandela dynasty between
                    the 9th and 12th centuries CE. Of the roughly 85 temples
                    thought to have originally stood here, around 20-25
                    survive, spread across three groups on the edge of a
                    small town that has grown up entirely around them.
                  </p>
                  <p>
                    Khajuraho's fame rests on its carving — sandstone worked
                    into astonishingly detailed friezes of deities, celestial
                    dancers (apsaras), animals, and scenes of daily life,
                    wrapped around temple exteriors from base to spire. A
                    portion of that carving is explicitly erotic, which is
                    the detail most people have heard about before they
                    arrive — but it's one theme among many on a handful of
                    temples, set within a far broader visual language
                    celebrating life, devotion, and craftsmanship. Walking
                    the Western Group in full is really a walk through a
                    thousand years of stone-carving skill.
                  </p>
                  <p>
                    A UNESCO World Heritage Site since 1986, Khajuraho
                    rewards travellers who give it a proper two days rather
                    than a rushed afternoon between flights.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🛕</span> Khajuraho at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🛕", label: "Built By", value: "Chandela Dynasty (9th–12th c.)" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Khajuraho (HJR)" },
                        { icon: "🏛️", label: "Groups", value: "Western · Eastern · Southern" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹5,500" },
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
                  <h2>Best Time to Visit Khajuraho</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather ideal for hours of outdoor temple walking, plus the Khajuraho Dance Festival typically falls in this window." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — mornings only", text: "Temperatures climb sharply by midday. Plan temple visits for early morning and keep afternoons for indoor breaks." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — humid, fewer crowds", text: "Rain is intermittent rather than constant, and the surrounding countryside turns green, but humidity makes long temple circuits tiring." },
                      { season: "Oct", emoji: "🌤️", color: "bg-purple-50 border-purple-200", mood: "Transitional", text: "Temperatures start easing and crowds are lighter than the winter peak, though the dance festival hasn't started yet." },
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
                    <strong>Our pick:</strong> Late November to February —
                    comfortable temperatures for walking all three temple
                    groups, and a good chance of catching the Khajuraho
                    Dance Festival if the dates line up.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Khajuraho</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Khajuraho Airport (HJR) has
                      direct flights from Delhi, Varanasi, and several other
                      cities — by far the easiest way in.
                    </li>
                    <li>
                      <strong>By Train:</strong> Khajuraho has its own
                      railway station with reasonable long-distance
                      connectivity, including to Delhi and Varanasi.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road connections from major
                      cities are long (Khajuraho sits somewhat off the main
                      highway grid) — flying or the train are the practical
                      options for most travellers.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book Khajuraho Airport flights early during the winter dance-festival season — seat availability tightens noticeably in December and January.
                  </div>
                </section>

                <section id="temple-groups">
                  <h2>The Three Temple Groups</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Carved sandstone temple architecture at Khajuraho"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Western Group:</strong> The most famous and
                      best-preserved cluster, and the one most visitors mean
                      when they picture Khajuraho. Includes{" "}
                      <strong>Kandariya Mahadeva Temple</strong> — the
                      largest and most ornately carved temple at the site —
                      alongside Lakshmana Temple and Vishvanatha Temple.
                      Ticketed and maintained as a landscaped archaeological
                      park.
                    </li>
                    <li>
                      <strong>Eastern Group:</strong> A mix of Jain and Hindu
                      temples in the old village area, including{" "}
                      <strong>Parshvanath Temple</strong> — the largest of
                      the Jain temples here, with carving of similarly high
                      quality to the Western Group but far fewer visitors.
                    </li>
                    <li>
                      <strong>Southern Group:</strong> The smallest and
                      quietest cluster, centred on{" "}
                      <strong>Duladeo Temple</strong> and{" "}
                      <strong>Chaturbhuj Temple</strong> — worth the short
                      trip out for travellers who want Khajuraho without the
                      crowds.
                    </li>
                  </ul>
                </section>

                <section id="festival">
                  <h2>Khajuraho Dance Festival & Light Show</h2>
                  <ul>
                    <li>
                      <strong>Khajuraho Dance Festival:</strong> An annual
                      classical Indian dance festival typically held in
                      winter, staged against the floodlit backdrop of the
                      Western Group temples — a genuinely striking setting
                      for Bharatanatyam, Kathak, Odissi, and other classical
                      forms.
                    </li>
                    <li>
                      <strong>Light & Sound Show:</strong> A nightly show at
                      the Western Group narrating Khajuraho's history against
                      the illuminated temples — a good way to close out a day
                      of temple-hopping, generally in both Hindi and English
                      sessions.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Khajuraho</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹800–₹2,000/night", picks: ["MP Tourism guesthouses", "Budget hotels near the Western Group", "Simple stays along the main market road"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,500–₹6,000/night", picks: ["Boutique heritage-style hotels", "Chain hotels near the airport road", "Resort-style properties on the town outskirts"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹20,000+/night", picks: ["Taj/premium heritage resorts", "Luxury pool villas near the Western Group", "High-end wellness resort stays"] },
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
                  <h2>What to Eat in Khajuraho</h2>
                  <ul>
                    <li><strong>Poha & jalebi:</strong> The classic Madhya Pradesh breakfast combination, widely available at local eateries in the market area.</li>
                    <li><strong>Bhutte ki kees:</strong> A savoury grated-corn dish popular across the region — worth trying at least once.</li>
                    <li><strong>Multi-cuisine hotel restaurants:</strong> Given the international tourist traffic, most mid-range and luxury hotels run reliable multi-cuisine menus alongside local Madhya Pradesh dishes.</li>
                    <li><strong>Thalis:</strong> Simple vegetarian thalis at local restaurants near the temple groups are an easy, filling option between sightseeing stops.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Khajuraho Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Western Group & Light Show", color: "bg-amber-700", activities: ["Early morning: Western Group, starting with Kandariya Mahadeva Temple", "Continue through Lakshmana and Vishvanatha temples", "Afternoon: rest or explore the local market", "Evening: Light & Sound show at the Western Group"] },
                      { day: "Day 2", title: "Eastern & Southern Groups", color: "bg-forest-600", activities: ["Morning: Eastern Group, including Parshvanath Temple", "Continue to the Southern Group — Duladeo and Chaturbhuj temples", "Afternoon: local museum or archaeological museum visit", "Evening: departure or festival performance if dates align"] },
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
                          ["Accommodation/night", "₹900", "₹3,500", "₹13,000"],
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Entry fees & guide", "₹700", "₹1,200", "₹1,200"],
                          ["Daily total", "₹1,500 – ₹1,900", "₹5,500", "₹18,400"],
                          ["2-Day trip total", "₹3,700", "₹12,400", "₹37,600"],
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
                    * Excludes flights/trains to Khajuraho. Entry fees are
                    approximate — confirm current ASI rates locally before
                    you go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Khajuraho</h2>
                  <ul>
                    <li><strong>Hire an ASI-approved guide:</strong> Available at the Western Group entrance — worth it for context on the carving and temple architecture.</li>
                    <li><strong>Visit the Western Group early morning:</strong> Best light for photography and noticeably fewer tour groups than mid-morning onward.</li>
                    <li><strong>Don't skip the Eastern and Southern groups:</strong> They hold carving of comparable quality to the Western Group with a fraction of the crowds.</li>
                    <li><strong>Check festival dates ahead:</strong> The Khajuraho Dance Festival dates shift year to year — worth timing a trip around if classical dance interests you.</li>
                    <li><strong>Carry water and sun protection:</strong> Temple courtyards offer little shade across a multi-hour visit.</li>
                    <li><strong>Book flights early in winter:</strong> Khajuraho Airport has limited capacity and fills up around the festival season.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Visit all three temple groups, not just the Western Group",
                          "Hire a guide for historical and architectural context",
                          "Go early morning for the best light and fewer crowds",
                          "Catch the evening Light & Sound show",
                          "Time your trip for the Dance Festival if it interests you",
                          "Carry water and sun protection for the open courtyards",
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
                          "Assume Khajuraho is only about the erotic carvings",
                          "Skip the Eastern and Southern groups",
                          "Visit at midday in peak summer without shade breaks",
                          "Rely on road travel from distant cities — fly or take the train instead",
                          "Forget to book flights early during festival season",
                          "Rush the visit into a single half-day",
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
                {["Khajuraho", "UNESCO", "Heritage", "Temples", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KHAJURAHO_GEAR} destination="Khajuraho" />

              <RelatedPostsGrid currentSlug="khajuraho-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="khajuraho-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
