// src/app/blog/kanha-travel-guide/page.tsx
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
  title: "Kanha National Park: Tiger Safari Guide, Zones & Best Time",
  description:
    "The complete Kanha travel guide. Safari zones and gates (Kisli, Mukki, Sarhi, Khatia), the barasingha conservation story, best time to visit, how to book core and buffer zone permits, where to stay, and a 2-day itinerary for one of India's best-managed tiger reserves.",
  keywords:
    "Kanha travel guide, Kanha National Park, Kanha Tiger Reserve, Kanha safari booking, Kanha zones, Kisli gate, Mukki gate, Kanha best time to visit, Kanha tiger sighting, Jungle Book Kanha, barasingha Kanha, Kanha Jabalpur, core zone vs buffer zone Kanha, Kanha safari price, Kanha national park Madhya Pradesh",
  openGraph: {
    title: "Kanha National Park: Tiger Safari Guide, Zones & Best Time",
    description:
      "The forest that inspired The Jungle Book, and one of India's best-managed tiger reserves — the complete safari guide to Kanha.",
    url: "https://club.kudozz.in/blog/kanha-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Dense sal forest and grassy meadows at Kanha National Park, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanha National Park: Tiger Safari Guide, Zones & Best Time",
    description:
      "Zones, gates, permits, and a 2-day itinerary for one of India's best-managed tiger reserves.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kanha-travel-guide",
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
          headline: "Kanha National Park: Tiger Safari Guide, Zones & Best Time",
          description: "The complete Kanha safari travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/kanha-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Kanha National Park",
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
              { "@type": "ListItem", position: 3, name: "Kanha Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need for a Kanha safari trip?",
    a: "Two days with two or three safaris gives you a realistic shot at a tiger sighting and lets you cover more than one zone. Serious wildlife photographers often stay 3-4 days to hedge against any single safari coming up empty.",
  },
  {
    q: "What is the best time to visit Kanha for tiger sightings?",
    a: "The safari season runs roughly November to June. March to May are often cited as the strongest months for sightings, since shrinking water sources concentrate wildlife around the remaining waterholes and meadows, even though the heat itself is uncomfortable.",
  },
  {
    q: "Is Kanha open all year round?",
    a: "No. Like most Indian tiger reserves, Kanha's core zone is typically closed to tourism during the monsoon for breeding and forest regeneration, roughly July to September. Always verify current-year closure dates before booking travel.",
  },
  {
    q: "Did Kanha really inspire The Jungle Book?",
    a: "It's a widely repeated and popular claim locally and in tourism marketing — the terrain and wildlife do closely match Kipling's setting — but there's no definitive historical proof Kipling visited Kanha himself before writing the book. Treat it as part of the park's folklore rather than a confirmed fact.",
  },
  {
    q: "What's the difference between core and buffer zone safaris at Kanha?",
    a: "Core zone gates (like Kisli and Mukki) sit inside the original protected reserve and generally offer higher tiger density and sighting odds, but permits are limited, pricier, and sell out faster. Buffer zones are more accessible, cheaper, and easier to book last-minute, with somewhat lower but still real sighting chances.",
  },
  {
    q: "How do I reach Kanha?",
    a: "Jabalpur Airport (JLR) is the nearest major airport, about 160 km / 4-4.5 hours by road. Nagpur (NAG) is a second option at roughly 260 km. Jabalpur and Gondia are the closest railway stations with reasonable onward road connectivity.",
  },
  {
    q: "What wildlife can I see at Kanha besides tigers?",
    a: "Leopards, gaur (Indian bison), dhole (wild dogs), and the barasingha (swamp deer) — a genuine conservation success story, since the Kanha population was rebuilt from a small remnant group through dedicated breeding efforts and is now something of the park's mascot species. Over 300 recorded bird species round out the sightings.",
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
  { id: "introduction", title: "Why Kanha?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kanha", level: 2 },
  { id: "safari-zones", title: "Safari Zones & Gates", level: 2 },
  { id: "wildlife", title: "Wildlife Beyond Tigers", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KANHA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for open-gypsy safaris and pre-dawn starts",
    emoji: "🐅",
    items: [
      {
        name: "Neutral-Tone Safari Clothing",
        description:
          "Khaki, olive, or muted brown clothing blends into the forest and doesn't startle wildlife — bright colours and white are best avoided on safari.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.2k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("safari+clothing+khaki+set"),
        tag: "Safari essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Guides regularly ask visitors in bright colours to cover up — neutral tones from the start save you the scramble.",
      },
      {
        name: "8x42 Binoculars",
        description:
          "Essential for spotting the barasingha herds and distant wildlife across Kanha's open meadows, and for confirming a sighting before the gypsy gets closer.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "4.6k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("8x42+binoculars+wildlife"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "Most of what you see on safari is at a distance — binoculars turn a blur in the trees into an actual sighting.",
      },
      {
        name: "Telephoto Zoom Lens / Bridge Camera",
        description:
          "A 300mm+ reach makes the difference between a usable tiger photo and a green smudge — even a decent bridge camera outperforms a phone here.",
        price: "₹8,999+",
        rating: 4.3,
        reviews: "1.8k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("bridge+camera+superzoom"),
        tag: "Photography",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Gypsies can't always get close for safety and forest-rule reasons — zoom reach matters more than megapixels here.",
      },
      {
        name: "Warm Layer / Fleece",
        description:
          "Winter morning safaris (Dec-Feb) start before sunrise in an open vehicle — genuinely cold until the sun clears the sal canopy.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("fleece+jacket+travel"),
        tag: "Winter safari essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "An open gypsy at 6 AM in December is colder than most first-timers expect — layers you can shed later work best.",
      },
      {
        name: "Insect Repellent",
        description:
          "Forest trails and meadow stops bring mosquitoes, especially at dawn and dusk — a DEET-based repellent is worth applying before every safari.",
        price: "₹199",
        rating: 4.2,
        reviews: "8.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray"),
        tag: "Comfort essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Two safaris a day means two dawn-and-dusk mosquito windows — repellent is a small thing that saves a lot of discomfort.",
      },
      {
        name: "Power Bank",
        description:
          "No charging points on safari, and telephoto cameras and phones both drain fast shooting continuous bursts — carry backup power.",
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

export default function KanhaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Dense sal forest and grassy meadows at Kanha National Park, Madhya Pradesh"
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
                { label: "Kanha", href: null },
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
              {["Kanha", "Tiger Safari", "Wildlife", "Adventure", "Madhya Pradesh"].map((tag) => (
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
              Kanha National Park: Tiger Safari Guide, Zones & Best Time
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The forest said to have inspired The Jungle Book, and one of
              India's best-managed tiger reserves — zones, gates, permits,
              and everything else you need to plan the trip.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mandla/Balaghat, Madhya Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>Why Kanha?</h2>
                  <p>
                    Spread across the Maikal range of the Satpura hills in
                    central Madhya Pradesh, <strong>Kanha National Park</strong>{" "}
                    is one of India's largest and most consistently
                    well-managed tiger reserves — a mix of dense sal and
                    bamboo forest opening onto wide grassy meadows locally
                    called <em>maidans</em>. It's often said, informally and
                    without firm historical proof, that this landscape
                    inspired Rudyard Kipling's <em>The Jungle Book</em>; true
                    or not, the terrain genuinely does feel like it stepped
                    out of the story.
                  </p>
                  <p>
                    Kanha is also home to one of Indian conservation's
                    genuine good-news stories: the barasingha, or swamp deer,
                    was reduced to a tiny remnant population here decades ago
                    and rebuilt through sustained breeding efforts to the
                    point where it's now considered the park's mascot
                    species. Add strong tiger, leopard, and dhole populations
                    and it's easy to see why Kanha ranks among the country's
                    most respected reserves for both wildlife density and
                    park management.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🐅</span> Kanha at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🦌", label: "Mascot Species", value: "Barasingha (swamp deer)" },
                        { icon: "🌡️", label: "Safari Season", value: "Oct – Jun" },
                        { icon: "✈️", label: "Nearest Airport", value: "Jabalpur (JLR)" },
                        { icon: "🚪", label: "Safari Gates", value: "4 main zones" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,500 – ₹9,000" },
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
                  <h2>Best Time to Visit Kanha</h2>
                  <p>
                    Kanha's core zone is typically closed to tourism during
                    the monsoon for breeding and forest regeneration, roughly
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
                        text: "Water sources shrink and animals concentrate around the remaining waterholes and meadows, making this a strong window for tiger and barasingha sightings — despite daytime temperatures regularly crossing 38-40°C.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Most comfortable — our pick for first-timers",
                        text: "Cool mornings, pleasant days, and lush post-monsoon greenery. Sightings are slightly less guaranteed than peak summer but conditions are far more comfortable for early starts and long safaris.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Season opens — lush and green",
                        text: "The park reopens right after monsoon closure, still lush and green from the rains, with far fewer crowds than peak winter months.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Core zone typically closed",
                        text: "Monsoon breeding season closure across the core zone. Verify current-year dates directly before planning a visit in this window.",
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
                    <strong>Our pick:</strong> April–May for the best odds of
                    a tiger sighting, or November–February if you'd rather
                    trade a slightly lower probability for genuinely
                    comfortable safari mornings.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kanha</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jabalpur Airport (JLR) is the
                      nearest major airport, roughly 160 km / 4-4.5 hours by
                      road. Nagpur (NAG) is a second option at around 260 km.
                    </li>
                    <li>
                      <strong>By Train:</strong> Jabalpur and Gondia are the
                      closest railway stations with reasonable onward road
                      connectivity to the park's gates.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well-connected via Jabalpur or
                      Nagpur; most visitors hire a car for the final stretch
                      to Kisli or Mukki.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself near Kisli or
                    Mukki gate rather than in a distant town — both sit right
                    at the reserve boundary and shave significant time off
                    your pre-dawn safari commute.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safari Zones & Gates</h2>
                  <p>
                    Kanha is split into core zone gates (inside the original
                    protected reserve, higher sighting density, pricier and
                    faster-selling permits) and buffer zone gates
                    (surrounding forest, more accessible, easier to book,
                    still genuine sighting chances).
                  </p>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Forest trail and open meadow inside Kanha National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Kisli Gate (core):</strong> The most established
                      and best-connected core zone gate, close to the park's
                      interpretation centre — a common first choice for
                      visitors.
                    </li>
                    <li>
                      <strong>Mukki Gate (core):</strong> Known for strong
                      recent sighting records and a quieter feel than Kisli,
                      with its own cluster of nearby lodges.
                    </li>
                    <li>
                      <strong>Sarhi Gate (core):</strong> A less crowded core
                      option with its own resident tiger territories.
                    </li>
                    <li>
                      <strong>Khatia Gate (buffer):</strong> A more accessible
                      buffer entry — good for last-minute bookings or an
                      additional safari after a core zone slot.
                    </li>
                    <li>
                      <strong>Bamni Dadar ("Sunset Point"):</strong> A scenic
                      plateau viewpoint inside the park, often visited at the
                      end of an afternoon safari for the view over the
                      forest canopy.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Ask your resort or a local
                    guide which gate has had the most recent sightings before
                    booking — tiger territories shift, and yesterday's hot
                    zone can change within days.
                  </div>
                </section>

                <section id="wildlife">
                  <h2>Wildlife Beyond Tigers</h2>
                  <ul>
                    <li><strong>Barasingha (swamp deer):</strong> Kanha's signature conservation success — a small remnant population was rebuilt into a healthy herd through dedicated breeding efforts, and the species is now found almost nowhere else in the wild at this density.</li>
                    <li><strong>Leopards:</strong> Present throughout the reserve, though generally more elusive than tigers.</li>
                    <li><strong>Gaur (Indian bison):</strong> Large herds are a common and impressive sighting even on a tiger-less safari.</li>
                    <li><strong>Dhole (wild dogs):</strong> Kanha is one of the better reserves in India to spot these endangered pack hunters.</li>
                    <li><strong>Birdlife:</strong> Over 300 recorded species across forest, meadow, and wetland habitats within the park.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Kanha</h2>
                  <p>Most accommodation clusters around Kisli, Mukki, and Khatia gates, right at the park boundary.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,500–₹3,500/night", picks: ["MP Tourism (MPT) Baghira Log Huts", "Khatia gate guesthouses", "Basic gate-side lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹4,000–₹9,000/night", picks: ["Kanha Jungle Lodge", "Van Vihar-style resorts", "Mukki gate mid-range resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹12,000–₹30,000+/night", picks: ["Taj Banjaar Tola", "Singinawa Jungle Lodge", "Premium safari resorts near Mukki"] },
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
                  <h2>What to Eat Near Kanha</h2>
                  <ul>
                    <li><strong>Resort meal plans:</strong> Most jungle lodges near Kanha operate on full-board plans — simple vegetarian and non-vegetarian home-style Central Indian thalis built around dal, seasonal sabzi, and roti.</li>
                    <li><strong>Mahua and forest-produce dishes:</strong> Some lodges serve dishes built around local forest produce and the mahua flower, distinctive to this belt of Madhya Pradesh.</li>
                    <li><strong>Limited standalone restaurants:</strong> Kisli, Mukki, and Khatia are small settlements — plan around your resort's meals rather than expecting a wider dining scene.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kanha Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & First Safaris",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Jabalpur, check in near Kisli or Mukki gate",
                          "Afternoon safari (core or buffer zone)",
                          "Evening at the resort, review the day's sightings with your naturalist",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Prime Safari Day & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Pre-dawn morning safari in a different zone from Day 1",
                          "Rest through the midday heat",
                          "Optional second afternoon safari, ending at Bamni Dadar for sunset",
                          "Depart for Jabalpur",
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
                          ["Accommodation/night", "₹1,500", "₹6,000", "₹20,000"],
                          ["Safari permit + gypsy (per safari)", "₹2,500", "₹4,500", "₹7,000"],
                          ["Guide/naturalist fee", "₹300", "₹600", "Included"],
                          ["Meals/day", "₹500", "Included", "Included"],
                          ["Daily total (2 safaris)", "₹7,300", "₹15,600", "₹34,000"],
                          ["2-Day trip total", "₹14,600", "₹31,200", "₹68,000"],
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
                    * Excludes flights/trains to Jabalpur. Core zone permits cost noticeably more than buffer and sell out faster in peak season.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kanha</h2>
                  <ul>
                    <li><strong>Book core zone permits early:</strong> 4-8 weeks ahead for weekends and the Mar-May peak season, via the MP Forest Department's official online booking system.</li>
                    <li><strong>Wear neutral colours:</strong> Khaki, olive, and brown are expected on safari; bright colours and white are discouraged.</li>
                    <li><strong>Carry binoculars:</strong> Most sightings, tiger or otherwise, happen at a distance across open meadows.</li>
                    <li><strong>Safaris start pre-dawn:</strong> Be at the gate by the designated early-morning slot — latecomers can be turned away.</li>
                    <li><strong>Verify monsoon closure dates:</strong> The core zone typically shuts July-September; confirm current-year dates before booking.</li>
                    <li><strong>Book multiple safaris if possible:</strong> No single safari guarantees a tiger — 2-3 safaris across different zones meaningfully improves your odds.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Book core zone permits well in advance for peak season",
                          "Carry binoculars and a telephoto-capable camera",
                          "Ask locally which gate has had recent sightings",
                          "Dress in neutral tones and layer up for cold mornings",
                          "Book 2-3 safaris across different zones for better odds",
                          "Visit Bamni Dadar for sunset if your gate permits it",
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
                          "Wear bright colours or white on safari",
                          "Book only one safari and treat it as your only shot",
                          "Show up late to a gate — vehicles leave on schedule",
                          "Plan around exact monsoon dates without verifying current closures",
                          "Ask drivers to leave the marked safari track for a closer view",
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
                {["Kanha", "Tiger Safari", "Wildlife", "Madhya Pradesh", "Adventure", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KANHA_GEAR} destination="Kanha" />

              <RelatedPostsGrid currentSlug="kanha-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kanha-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
