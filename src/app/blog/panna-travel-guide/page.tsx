// src/app/blog/panna-travel-guide/page.tsx
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
  title: "Panna National Park Travel Guide: Tiger Safari & Ken River Gorge",
  description:
    "The complete Panna travel guide. The park's poaching-crisis-to-recovery story, jeep and Ken River boat safaris, Pandav Falls, best time to visit, where to stay, and a 1-2 day itinerary easily combined with Khajuraho.",
  keywords:
    "Panna travel guide, Panna National Park, Panna Tiger Reserve, Panna safari booking, Ken River boat safari, Ken Gharial Sanctuary, Panna tiger reintroduction, Panna Khajuraho, Pandav Falls, Panna best time to visit, Panna national park Madhya Pradesh",
  openGraph: {
    title: "Panna National Park Travel Guide: Tiger Safari & Ken River Gorge",
    description:
      "A tiger reserve rebuilt from zero after a poaching crisis, cut through by the dramatic Ken River gorge — the complete guide to Panna.",
    url: "https://club.kudozz.in/blog/panna-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "River gorge and forest at Panna National Park, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panna National Park Travel Guide: Tiger Safari & Ken River Gorge",
    description:
      "Jeep and boat safaris, a poaching-to-recovery story, and an easy add-on to a Khajuraho trip.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/panna-travel-guide",
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
          headline: "Panna National Park Travel Guide: Tiger Safari & Ken River Gorge",
          description: "The complete Panna safari travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/panna-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Panna National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Madhya Pradesh",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Panna Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is it true Panna lost all its tigers?",
    a: "Yes — by the mid-2000s, Panna's tiger population had been wiped out by poaching, a widely reported conservation crisis at the time. The reserve was subsequently repopulated through a tiger reintroduction program using animals relocated from other reserves including Bandhavgarh and Kanha, and the population has since recovered — it's now cited as one of India's genuine conservation turnaround stories.",
  },
  {
    q: "How many days do I need at Panna?",
    a: "One to two days is enough, especially since most visitors combine it with a Khajuraho trip (roughly 25 km away). A single day gets you a jeep safari and a Ken River boat ride; two days lets you add a second jeep safari in a different zone.",
  },
  {
    q: "What is the best time to visit Panna?",
    a: "The safari season runs roughly October to June, with the core zone typically closed during the monsoon (roughly July-September) for breeding and forest regeneration — always verify current-year closure dates before booking.",
  },
  {
    q: "Can I combine Panna with a Khajuraho trip?",
    a: "Yes, easily — Panna is only about 25 km from Khajuraho, making it one of the most accessible tiger reserves in India to add onto a heritage-focused trip. Many visitors do Khajuraho's temples one day and a Panna safari the next.",
  },
  {
    q: "What makes the Ken River boat safari different from a jeep safari?",
    a: "The Ken River cuts a dramatic gorge through part of the reserve, and a boat safari there focuses on gharials, mugger crocodiles, and waterbirds rather than tiger tracking — a genuinely different experience from the standard jeep game drive, and a nice complement to it rather than a replacement.",
  },
  {
    q: "How do I reach Panna?",
    a: "Khajuraho Airport (HJR) is the nearest airport at roughly 25 km, making Panna one of the most accessible reserves in Madhya Pradesh. Satna, about 75 km away, is the nearest major railway station, though Khajuraho also has rail connectivity.",
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
  { id: "introduction", title: "Why Panna?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Panna", level: 2 },
  { id: "safari-zones", title: "Jeep & Boat Safaris", level: 2 },
  { id: "attractions", title: "Ken Gharial Sanctuary & Pandav Falls", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PANNA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for jeep safaris and Ken River boat rides",
    emoji: "🐅",
    items: [
      {
        name: "Neutral-Tone Safari Clothing",
        description:
          "Khaki, olive, or muted brown clothing blends into the forest and doesn't startle wildlife on jeep safaris.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.2k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("safari+clothing+khaki+set"),
        tag: "Safari essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Neutral tones from the start save the awkward mid-safari cover-up guides sometimes ask visitors for.",
      },
      {
        name: "8x42 Binoculars",
        description:
          "Useful for both jeep safaris and the Ken River boat ride, where gharials and waterbirds are often spotted well before the boat gets close.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "4.6k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("8x42+binoculars+wildlife"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "The Ken River's gharials and crocodiles often sit motionless on distant banks — binoculars turn them from a shape into a sighting.",
      },
      {
        name: "Telephoto Zoom Lens / Bridge Camera",
        description:
          "A 300mm+ reach helps with both tiger photography on jeep safaris and river wildlife on the boat safari.",
        price: "₹8,999+",
        rating: 4.3,
        reviews: "1.8k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("bridge+camera+superzoom"),
        tag: "Photography",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Zoom reach matters more than megapixels for both game drives and the river safari here.",
      },
      {
        name: "Sun Hat & Sunscreen",
        description:
          "Little shade on the Ken River boat safari and during midday jeep stretches — sun protection matters more here than on forest-canopy-heavy reserves.",
        price: "₹499",
        rating: 4.3,
        reviews: "5.9k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The open gorge stretches of the Ken River safari offer almost no shade for the duration of the ride.",
      },
      {
        name: "Insect Repellent",
        description:
          "Riverside and forest-edge stops bring mosquitoes, especially at dawn and dusk.",
        price: "₹199",
        rating: 4.2,
        reviews: "8.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray"),
        tag: "Comfort essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Both the jeep safari and the riverside boat ride have their own dawn-and-dusk mosquito windows.",
      },
      {
        name: "Power Bank",
        description:
          "No charging points on safari or the boat ride, and cameras drain fast shooting continuous bursts.",
        price: "₹1,099",
        rating: 4.4,
        reviews: "6.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+20000mah"),
        tag: "Travel essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A dead camera battery mid-sighting is the one regret every wildlife photographer eventually has — carry spares.",
      },
    ],
  },
];

export default function PannaGuidePage() {
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
              alt="River gorge and forest at Panna National Park, Madhya Pradesh"
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
                { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" },
                { label: "Panna", href: null },
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
              {["Panna", "Tiger Safari", "Ken River", "Adventure", "Madhya Pradesh"].map((tag) => (
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
              Panna National Park Travel Guide: Tiger Safari & Ken River Gorge
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A tiger reserve rebuilt from zero after a poaching crisis, cut
              through by the dramatic Ken River gorge — jeep safaris, boat
              rides, and how to combine it with Khajuraho.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Panna, Madhya Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Why Panna?</h2>
                  <p>
                    <strong>Panna National Park</strong>, in northern Madhya
                    Pradesh, carries one of Indian conservation's most
                    sobering — and ultimately hopeful — stories. By the
                    mid-2000s, unchecked poaching had wiped out the
                    reserve's entire tiger population, a crisis that made
                    national headlines at the time. What followed was a
                    deliberate, closely watched reintroduction program that
                    relocated tigers here from reserves including
                    Bandhavgarh and Kanha, rebuilding the population from
                    literally zero. Panna's tigers today are the result of
                    that recovery, and the reserve is now widely cited as
                    one of the country's genuine conservation turnaround
                    stories.
                  </p>
                  <p>
                    What sets Panna apart physically is the Ken River, which
                    cuts a dramatic gorge through part of the reserve —
                    giving Panna something most other Central Indian tiger
                    reserves don't have: a genuine boat safari option
                    alongside the standard jeep game drive, focused on
                    gharials, crocodiles, and waterbirds. Its proximity to
                    Khajuraho, roughly 25 km away, also makes it one of the
                    easiest tiger reserves in India to fold into an existing
                    heritage trip.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🐅</span> Panna at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🌊", label: "Landmark", value: "Ken River Gorge" },
                        { icon: "🌡️", label: "Safari Season", value: "Oct – Jun" },
                        { icon: "✈️", label: "Nearest Airport", value: "Khajuraho (HJR), ~25 km" },
                        { icon: "🐊", label: "Boat Safari", value: "Ken Gharial Sanctuary" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹7,500" },
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
                  <h2>Best Time to Visit Panna</h2>
                  <p>
                    The core zone is typically closed to tourism during the
                    monsoon for breeding and forest regeneration, roughly
                    July to September — always confirm current-year closure
                    dates before booking travel.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – May",
                        emoji: "🔥",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best sightings — hottest weather",
                        text: "Water sources shrink and animals concentrate near remaining pools, improving tiger-sighting odds despite the intense heat.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Most comfortable — our pick",
                        text: "Cool, pleasant conditions ideal for both jeep safaris and the Ken River boat ride, and the natural season to pair with a Khajuraho visit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Core zone typically closed",
                        text: "Monsoon breeding season closure. Verify current-year dates directly before planning a visit in this window.",
                      },
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
                    <strong>Our pick:</strong> November–February, especially
                    if you're combining Panna with Khajuraho — comfortable
                    weather for both the temples and the safari.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Panna</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Khajuraho Airport (HJR) is
                      roughly 25 km away, making Panna one of the most
                      accessible tiger reserves in Madhya Pradesh.
                    </li>
                    <li>
                      <strong>By Train:</strong> Satna, about 75 km away, is
                      the nearest major railway junction; Khajuraho also has
                      its own rail connectivity.
                    </li>
                    <li>
                      <strong>By Road:</strong> A straightforward, short
                      drive from Khajuraho — the easiest reserve-to-heritage
                      pairing in the state.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're visiting Khajuraho
                    for the temples, add a day for Panna — the short drive
                    makes it one of the easiest wildlife add-ons to any MP
                    heritage itinerary.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Jeep & Boat Safaris</h2>
                  <p>
                    Panna offers two genuinely different safari experiences
                    — a standard jeep game drive through forest and
                    grassland zones, and a Ken River boat safari focused on
                    the gorge's aquatic wildlife.
                  </p>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Forest and river gorge landscape at Panna National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Jeep safari (core/buffer zones):</strong> The
                      standard safari for tiger, leopard, and general
                      wildlife sightings, bookable through the MP Forest
                      Department's system like other reserves.
                    </li>
                    <li>
                      <strong>Ken River boat safari:</strong> A slower-paced,
                      river-based safari focused on gharials, mugger
                      crocodiles, and waterbirds — a strong complement to,
                      not a replacement for, the jeep safari.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Do the jeep safari and the
                    boat safari on separate outings if your schedule allows
                    — they cover different terrain and different wildlife,
                    and rushing both into one slot means you'll miss
                    something.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Ken Gharial Sanctuary & Pandav Falls</h2>
                  <ul>
                    <li><strong>Ken Gharial Sanctuary:</strong> A protected stretch of the Ken River specifically for gharials (a critically endangered narrow-snouted crocodilian) and mugger crocodiles — the focus of the boat safari.</li>
                    <li><strong>Pandav Falls:</strong> A scenic waterfall within/near the park, a pleasant short stop if your safari route passes near it.</li>
                    <li><strong>Ken River Gorge viewpoints:</strong> Several points along the reserve offer sweeping views down into the gorge, worth a stop even outside a formal safari.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Panna</h2>
                  <p>Most visitors stay either right at the park gate or in Khajuraho, given the short 25 km drive between the two.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,200–₹3,000/night", picks: ["MPT Ken River Lodge budget rooms", "Panna town guesthouses", "Khajuraho budget hotels"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,500–₹8,000/night", picks: ["Ken River Lodge", "Khajuraho mid-range hotels", "Panna gate resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹20,000+/night", picks: ["Sarai at Toria (near Ken River)", "Khajuraho heritage-style hotels", "Premium safari lodges"] },
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
                  <h2>What to Eat Near Panna</h2>
                  <ul>
                    <li><strong>Resort/lodge meal plans:</strong> Most stays near the park operate on full-board plans with simple vegetarian and non-vegetarian Central Indian thalis.</li>
                    <li><strong>Khajuraho restaurants:</strong> If you're basing yourself in Khajuraho, its wider range of restaurants (including tourist-oriented multi-cuisine spots) gives more variety than Panna town itself.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-2 Day Panna Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Jeep Safari & Ken River",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Khajuraho (~25 km) or arrive directly",
                          "Morning or afternoon jeep safari",
                          "Ken River boat safari for gharials, crocodiles, and waterbirds",
                          "Return to Khajuraho or overnight near the park",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Second Safari & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Second jeep safari in a different zone for better odds",
                          "Stop at Pandav Falls or a gorge viewpoint if time allows",
                          "Depart for Khajuraho or onward travel",
                        ],
                      },
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
                          ["Accommodation/night", "₹1,200", "₹5,000", "₹15,000"],
                          ["Jeep safari (permit + gypsy)", "₹2,200", "₹4,000", "₹6,500"],
                          ["Ken River boat safari", "₹500", "₹900", "₹1,500"],
                          ["Meals/day", "₹500", "Included", "Included"],
                          ["Daily total (1 jeep + 1 boat safari)", "₹4,400", "₹9,900", "₹23,000"],
                          ["2-Day trip total", "₹8,800", "₹19,800", "₹46,000"],
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
                    * Excludes flights/trains to Khajuraho. Combining Panna with a Khajuraho stay is usually cheaper overall than lodging separately near the park gate.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Panna</h2>
                  <ul>
                    <li><strong>Combine with Khajuraho:</strong> The short 25 km drive makes this one of the easiest wildlife-plus-heritage combinations in India.</li>
                    <li><strong>Do both safari types:</strong> The jeep safari and Ken River boat safari cover genuinely different wildlife — don't skip one for the other if time allows.</li>
                    <li><strong>Book ahead in peak winter season:</strong> Permits are generally easier to get here than at Bandhavgarh or Kanha, but weekends in Dec-Feb still fill up.</li>
                    <li><strong>Wear neutral colours on the jeep safari:</strong> Khaki, olive, and brown are expected; bright colours and white are discouraged.</li>
                    <li><strong>Verify monsoon closure dates:</strong> The core zone typically shuts July-September; confirm current-year dates before booking.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Pair Panna with a Khajuraho temple visit",
                          "Try both the jeep and Ken River boat safaris",
                          "Carry binoculars and a telephoto-capable camera",
                          "Dress in neutral tones for jeep safaris",
                          "Book ahead for peak winter weekends",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect a guaranteed tiger sighting on any single safari",
                          "Skip the boat safari — it's a genuinely different experience",
                          "Wear bright colours or white on a jeep safari",
                          "Show up late to a gate — vehicles leave on schedule",
                          "Plan around exact monsoon dates without verifying current closures",
                        ].map((item) => (
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
                {["Panna", "Tiger Safari", "Ken River", "Madhya Pradesh", "Adventure", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PANNA_GEAR} destination="Panna" />

              <RelatedPostsGrid currentSlug="panna-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="panna-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
