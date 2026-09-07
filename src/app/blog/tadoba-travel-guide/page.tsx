// src/app/blog/tadoba-travel-guide/page.tsx
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
  title: "Tadoba Andhari Tiger Reserve: Safari Guide, Zones & Best Time",
  description:
    "The complete Tadoba travel guide. Safari zones and gates (Moharli, Kolara, Zari, Kolsa, Navegaon, Pangdi), best time to visit, how to book core and buffer zone permits, where to stay, and a 2-day itinerary for Maharashtra's oldest tiger reserve.",
  keywords:
    "Tadoba travel guide, Tadoba Andhari Tiger Reserve, Tadoba safari booking, Tadoba zones, Moharli gate, Kolara gate, Tadoba best time to visit, Tadoba tiger sighting, Tadoba Nagpur, Tadoba Chandrapur, core zone vs buffer zone Tadoba, Tadoba safari price, Tadoba national park Maharashtra, Tadoba jungle safari",
  openGraph: {
    title: "Tadoba Andhari Tiger Reserve: Safari Guide, Zones & Best Time",
    description:
      "Maharashtra's oldest and largest national park, with among the best tiger-sighting odds in Central India — the complete safari guide to Tadoba.",
    url: "https://club.kudozz.in/blog/tadoba-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Dense forest and river at Tadoba Andhari Tiger Reserve, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadoba Andhari Tiger Reserve: Safari Guide, Zones & Best Time",
    description:
      "Zones, gates, permits, and a 2-day itinerary for Maharashtra's best tiger reserve.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tadoba-travel-guide",
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
          headline: "Tadoba Andhari Tiger Reserve: Safari Guide, Zones & Best Time",
          description: "The complete Tadoba safari travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/tadoba-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Tadoba Andhari Tiger Reserve",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Tadoba Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need for a Tadoba safari trip?",
    a: "Two days with two or three safaris gives you a realistic chance of a tiger sighting without over-planning. Serious wildlife photographers often stay 3-4 days and book multiple zones to hedge against any single safari coming up empty.",
  },
  {
    q: "What is the best time to visit Tadoba for tiger sightings?",
    a: "The safari season runs roughly November to June. April and May are widely considered the best months for sightings — the heat pushes tigers toward shrinking waterholes, which makes them far easier to spot, even though the temperature itself is uncomfortable for visitors.",
  },
  {
    q: "Is Tadoba open all year round?",
    a: "No. Like most Indian tiger reserves, Tadoba's core zone is typically closed to tourism during the monsoon months for breeding and forest regeneration, usually from around July to September. Some buffer zones may stay partially open — always verify current-year closure dates before booking travel.",
  },
  {
    q: "What's the difference between core and buffer zone safaris?",
    a: "Core zone gates (like Moharli, Kolara, and Tadoba) sit inside the original protected reserve and generally offer higher tiger density and sighting odds, but permits are limited, pricier, and sell out fastest. Buffer zones are more accessible, cheaper, and easier to book last-minute, with somewhat lower but still real sighting chances.",
  },
  {
    q: "How far in advance should I book a Tadoba safari permit?",
    a: "For core zone gates on weekends or during peak season (Feb-May), book 4-8 weeks ahead through the Maharashtra Forest Department's online booking system. Buffer zone permits are usually available with just a few days' notice, even in season.",
  },
  {
    q: "How do I reach Tadoba?",
    a: "Nagpur Airport (NAG) is the nearest major airport, about 140 km / 3 hours away by road. Chandrapur, roughly 45 km from the main gates, is the closest railway station with better connectivity to the reserve.",
  },
  {
    q: "What wildlife can I see at Tadoba besides tigers?",
    a: "Leopards, sloth bears, gaur (Indian bison), dhole (wild dogs), sambar and spotted deer, marsh crocodiles around Tadoba Lake, and over 200 recorded bird species. Tiger sightings get the headlines, but the overall wildlife density is what makes repeat safaris worthwhile even without a tiger.",
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
  { id: "introduction", title: "Why Tadoba?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tadoba", level: 2 },
  { id: "safari-zones", title: "Safari Zones & Gates", level: 2 },
  { id: "wildlife", title: "Wildlife Beyond Tigers", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TADOBA_GEAR: GearSection[] = [
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
          "Essential for spotting birds and distant wildlife across the reserve's open grasslands, and for confirming a sighting before the gypsy gets closer.",
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
          "Winter morning safaris (Dec-Feb) start before sunrise in an open vehicle — genuinely cold until the sun clears the tree line.",
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
          "Forest trails and waterhole stops bring mosquitoes, especially at dawn and dusk — a DEET-based repellent is worth applying before every safari.",
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

export default function TadobaGuidePage() {
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
              alt="Dense forest and river at Tadoba Andhari Tiger Reserve, Maharashtra"
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
                { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" },
                { label: "Tadoba", href: null },
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
              {["Tadoba", "Tiger Safari", "Wildlife", "Adventure", "Maharashtra"].map((tag) => (
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
              Tadoba Andhari Tiger Reserve: Safari Guide, Zones & Best Time
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Maharashtra's oldest and largest national park, with among the
              best tiger-sighting odds anywhere in Central India — zones,
              gates, permits, and everything else you need to plan the trip.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Chandrapur, Maharashtra",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Why Tadoba?</h2>
                  <p>
                    In the far east of Maharashtra, near the border with
                    Chhattisgarh, sits the state's oldest protected forest —
                    established in 1955 and later expanded and merged with
                    the Andhari Wildlife Sanctuary to form the{" "}
                    <strong>Tadoba Andhari Tiger Reserve</strong>. The name
                    comes from a local deity, Taru, worshipped by the Gond and
                    Madia communities who once inhabited these forests, and
                    the Andhari River that runs through the reserve.
                  </p>
                  <p>
                    What sets Tadoba apart from many of India's other tiger
                    reserves is sheer consistency. It's one of the country's
                    highest tiger-density reserves, and its network of open
                    grasslands, teak forest, and waterholes gives visitors an
                    unusually good chance of an actual sighting rather than
                    just fresh pugmarks. It's also close enough to Nagpur to
                    fit into a long weekend, which has made it one of Central
                    India's fastest-growing wildlife destinations.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🐅</span> Tadoba at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🌳", label: "Established", value: "1955 (oldest in MH)" },
                        { icon: "🌡️", label: "Safari Season", value: "Nov – Jun" },
                        { icon: "✈️", label: "Nearest Airport", value: "Nagpur (NAG)" },
                        { icon: "🚪", label: "Safari Gates", value: "6+ zones" },
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
                  <h2>Best Time to Visit Tadoba</h2>
                  <p>
                    Tadoba's core zone is typically closed to tourism during
                    the monsoon for breeding and forest regeneration, roughly
                    July to September — some buffer zones may stay partly
                    open, but always confirm current-year closure dates
                    before booking travel.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🔥",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best sightings — hottest weather",
                        text: "Water sources shrink and animals concentrate around the remaining waterholes, making this the most reliable window for tiger sightings — despite daytime temperatures regularly crossing 40°C.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Most comfortable — our pick for first-timers",
                        text: "Cool mornings, pleasant days, and lush post-monsoon greenery. Sightings are slightly less guaranteed than peak summer but conditions are far more comfortable for early starts.",
                      },
                      {
                        season: "Mar",
                        emoji: "🌤️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Transitional — heating up",
                        text: "Temperatures start climbing and sightings improve as water sources begin to shrink — a good middle ground before the peak summer heat sets in.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Core zone typically closed",
                        text: "Monsoon breeding season closure across most core zones. Verify current-year dates directly before planning a visit in this window.",
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
                    a tiger sighting, or December–February if you'd rather
                    trade a slightly lower probability for genuinely
                    comfortable safari mornings.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tadoba</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Nagpur Airport (NAG) is the
                      nearest major airport, roughly 140 km / 3 hours by road
                      from the main gates.
                    </li>
                    <li>
                      <strong>By Train:</strong> Chandrapur, about 45 km from
                      the reserve, is the closest well-connected railway
                      station.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well-connected via the
                      Nagpur–Chandrapur highway; most visitors self-drive or
                      hire a car from Nagpur.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in Moharli or
                    Kolara village rather than Chandrapur town — both sit
                    right at reserve gates and shave 30-45 minutes off your
                    pre-dawn safari commute.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safari Zones & Gates</h2>
                  <p>
                    Tadoba is split into core zone gates (inside the original
                    protected reserve, higher sighting density, pricier and
                    faster-selling permits) and buffer zone gates (surrounding
                    forest, more accessible, easier to book, still genuine
                    sighting chances).
                  </p>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Forest trail and waterhole inside Tadoba Andhari Tiger Reserve"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Moharli Gate (core):</strong> The most popular
                      and best-connected core zone gate, closest to Tadoba
                      Lake — often the first choice for first-time visitors.
                    </li>
                    <li>
                      <strong>Kolara Gate (core):</strong> Known for strong
                      recent sighting records and easy access from
                      Chandrapur-side accommodation.
                    </li>
                    <li>
                      <strong>Zari & Kolsa Gates (core):</strong> Quieter,
                      slightly less crowded core options with their own
                      resident tiger territories.
                    </li>
                    <li>
                      <strong>Navegaon/Khutwanda & Pangdi Gates (buffer):</strong>{" "}
                      More accessible buffer entries — good for last-minute
                      bookings or an additional safari after a core zone slot.
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
                    <li><strong>Leopards:</strong> Present throughout the reserve, though generally more elusive than tigers.</li>
                    <li><strong>Sloth bears:</strong> Regularly spotted, especially around fruiting trees in summer.</li>
                    <li><strong>Gaur (Indian bison):</strong> Massive herds are a common and impressive sighting even on a tiger-less safari.</li>
                    <li><strong>Dhole (wild dogs):</strong> Tadoba is one of the better reserves in India to spot these endangered pack hunters.</li>
                    <li><strong>Birdlife:</strong> Over 200 recorded species, with Tadoba Lake a reliable spot for waterbirds and marsh crocodiles.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Tadoba</h2>
                  <p>Most accommodation clusters around Moharli and Kolara villages, right at the main gates.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,500–₹3,500/night", picks: ["MTDC Tadoba resort rooms", "Moharli village lodges", "Basic gate-side guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹4,000–₹9,000/night", picks: ["Tiger Trail Jungle Resort", "Svasara-style boutique lodges", "Kolara gate resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹12,000–₹30,000+/night", picks: ["Svasara Jungle Lodge", "Waghoba Eco Lodge", "Premium safari resorts near Moharli"] },
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
                  <h2>What to Eat Near Tadoba</h2>
                  <ul>
                    <li><strong>Resort meal plans:</strong> Most jungle lodges near Tadoba operate on full-board plans — simple vegetarian and non-vegetarian home-style Maharashtrian and Central Indian thalis.</li>
                    <li><strong>Varhadi cuisine:</strong> The Vidarbha region's distinctively spicy, peanut-and-dry-coconut-based curries are worth seeking out if your stay offers local menus.</li>
                    <li><strong>Limited standalone restaurants:</strong> Moharli and Kolara are small villages — plan around your resort's meals rather than expecting a wider dining scene.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Tadoba Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & First Safaris",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Nagpur, check in near Moharli or Kolara gate",
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
                          "Optional second afternoon safari or Tadoba Lake visit",
                          "Depart for Nagpur",
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
                    * Excludes flights/trains to Nagpur. Core zone permits cost noticeably more than buffer and sell out faster in peak season.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Tadoba</h2>
                  <ul>
                    <li><strong>Book core zone permits early:</strong> 4-8 weeks ahead for weekends and the Feb-May peak season, via the Maharashtra Forest Department's official online booking system.</li>
                    <li><strong>Wear neutral colours:</strong> Khaki, olive, and brown are expected on safari; bright colours and white are discouraged.</li>
                    <li><strong>Carry binoculars:</strong> Most sightings, tiger or otherwise, happen at a distance.</li>
                    <li><strong>Safaris start pre-dawn:</strong> Be at the gate by the designated early-morning slot — latecomers can be turned away.</li>
                    <li><strong>Verify monsoon closure dates:</strong> Core zones typically shut July-September; confirm current-year dates before booking.</li>
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
                          "Respect the naturalist's instructions around wildlife distance",
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
                {["Tadoba", "Tiger Safari", "Wildlife", "Maharashtra", "Adventure", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TADOBA_GEAR} destination="Tadoba" />

              <RelatedPostsGrid currentSlug="tadoba-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tadoba-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
