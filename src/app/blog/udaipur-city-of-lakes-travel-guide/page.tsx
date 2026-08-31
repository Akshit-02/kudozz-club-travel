// src/app/blog/udaipur-city-of-lakes-travel-guide/page.tsx
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
  title: "Udaipur Travel Guide: City Palace, Lake Pichola & Complete Itinerary",
  description:
    "The complete Udaipur travel guide. City Palace, a Lake Pichola boat ride, Jag Mandir, Saheliyon ki Bari, Bagore ki Haveli, the Monsoon Palace, where to stay, what to eat, and a full 3-day itinerary through Rajasthan's City of Lakes.",
  keywords:
    "Udaipur travel guide, City Palace Udaipur, Lake Pichola boat ride, Jag Mandir, Fateh Sagar Lake, Bagore ki Haveli, Monsoon Palace Udaipur, Saheliyon ki Bari, Udaipur itinerary, Rajasthan lake city, best time to visit Udaipur, how to reach Udaipur, Udaipur 3 day itinerary, is Udaipur worth visiting, Udaipur budget trip, top things to do in Udaipur, Taj Lake Palace Udaipur",
  openGraph: {
    title:
      "Udaipur Travel Guide: City Palace, Lake Pichola & Complete Itinerary",
    description:
      "Palaces floating on still water, whitewashed havelis, and the most romantic skyline in Rajasthan — the complete guide to Udaipur.",
    url: "https://club.kudozz.in/blog/udaipur-city-of-lakes-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Udaipur City Palace overlooking Lake Pichola at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Udaipur Travel Guide: City Palace, Lake Pichola & Complete Itinerary",
    description:
      "The City of Lakes — City Palace, Lake Pichola, and the most romantic skyline in Rajasthan.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/udaipur-city-of-lakes-travel-guide",
  },
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
          headline:
            "Udaipur Travel Guide: City Palace, Lake Pichola & Complete Itinerary",
          description: "The complete Udaipur travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-07-13",
          dateModified: "2026-07-13",
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
            "@id": "https://club.kudozz.in/blog/udaipur-city-of-lakes-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Udaipur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://club.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Udaipur Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "How many days do I need in Udaipur?",
    a: "Udaipur is compact enough to cover its essentials in three unhurried days — City Palace and a sunset boat ride, the gardens and Bagore ki Haveli's Dharohar dance show, and the Monsoon Palace plus old-city markets, with plenty of slack for wandering.",
  },
  {
    q: "What is the best time to visit Udaipur?",
    a: "October to February is the pick — lakes are fullest right after monsoon, evenings are cool enough for a jacket and a rooftop dinner, and the golden-hour light before sunset makes the palace-and-water views especially striking. Avoid April–June, when temperatures climb into the high 30s°C and midday walking through the old city gets genuinely tiring.",
  },
  {
    q: "How do I reach Udaipur?",
    a: "Udaipur has direct flights from Delhi, Mumbai, Bangalore, Ahmedabad, and Jaipur into Maharana Pratap Airport, about 22 km from the city centre. It's also connected by train (Udaipur City Railway Station, with overnight options from Delhi and Mumbai) and by road to Jaipur, Jodhpur, and Ahmedabad.",
  },
  {
    q: "Is Udaipur worth visiting?",
    a: "Yes — it's a compact, walkable city where marble palaces appear to float on artificial lakes ringed by hills, home to the largest palace complex in Rajasthan (City Palace), the iconic Lake Pichola boat ride past Jag Mandir, and an old city of havelis and rooftop cafés that make it one of the most photogenic cities in India.",
  },
  {
    q: "What is the budget for a trip to Udaipur?",
    a: "A 3-day trip runs roughly ₹7,050 at the budget level up to ₹93,000 at the luxury level (excluding flights or train fare), with luxury figures spiking mainly on accommodation — a night at the Taj Lake Palace alone can exceed the entire budget-tier trip total.",
  },
  {
    q: "What are the top things to do in Udaipur?",
    a: "City Palace (especially the Mor Chowk peacock courtyard and Crystal Gallery), a sunset boat ride on Lake Pichola past Jag Mandir, Saheliyon ki Bari's marble fountains, the Dharohar cultural dance show at Bagore ki Haveli, and the panoramic sunset views from the Monsoon Palace (Sajjangarh) are the essentials.",
  },
  {
    q: "Can I visit the Taj Lake Palace without staying there?",
    a: "Not for a casual visit — Jag Niwas (the Taj Lake Palace hotel) isn't open to non-guests, though its illuminated silhouette on the lake at night is one of Udaipur's defining views regardless. Jag Mandir, the neighbouring island palace, is open to visitors as a restaurant and event venue.",
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
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Udaipur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Udaipur", level: 2 },
  { id: "city-palace", title: "City Palace", level: 2 },
  { id: "lake-pichola", title: "Lake Pichola", level: 2 },
  { id: "jag-mandir", title: "→ Jag Mandir & Jag Niwas", level: 3 },
  { id: "boat-ride", title: "→ The Boat Ride", level: 3 },
  { id: "fateh-sagar", title: "Fateh Sagar Lake", level: 2 },
  { id: "saheliyon-ki-bari", title: "Saheliyon ki Bari", level: 2 },
  { id: "bagore-ki-haveli", title: "Bagore ki Haveli", level: 2 },
  { id: "monsoon-palace", title: "Monsoon Palace (Sajjangarh)", level: 2 },
  { id: "old-city", title: "The Old City & Markets", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Udaipur-specific gear ──────────────────────────────────────────────────────
const UDAIPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the palaces, the lake, and the old city lanes",
    emoji: "🏰",
    items: [
      {
        name: "Comfortable Walking Sandals / Shoes",
        description:
          "Udaipur is best explored on foot — cobblestone lanes in the old city, palace courtyards, and ghats all reward comfortable, grippy footwear over anything stiff or new.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "6.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+sandals+travel"),
        tag: "Old-city essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Between City Palace's courtyards, the ghats around Lake Pichola, and the narrow bazaars, you'll easily clock 10+ km a day on foot.",
      },
      {
        name: "Wide-Brim Hat or Cotton Cap",
        description:
          "Udaipur's sun is direct and largely shade-free around the lakes and palace terraces — a hat makes the boat ride and rooftop viewpoints far more comfortable.",
        price: "₹449",
        rating: 4.3,
        reviews: "3.8k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+travel+hat+cotton"),
        tag: "Lake glare",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Sun reflecting off the lake surface during the boat ride is more intense than it looks — a hat and sunglasses together make a real difference.",
      },
      {
        name: "Compact Rain Jacket / Umbrella",
        description:
          "If you're visiting in the monsoon shoulder season, Udaipur's lakes are at their fullest and most photogenic, but short, sudden showers are common.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.5k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("compact+rain+jacket+travel"),
        tag: "Monsoon shoulder season",
        tagColor: "bg-forest-100 text-forest-700",
        why: "July–September brings Udaipur's lakes to their most dramatic, but pack for sudden short bursts of rain rather than sustained downpours.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Between City Palace's sprawling galleries, the sunset boat ride, and evening rooftop dinners, phone batteries drain fast on camera use alone.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "All-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Udaipur is one of the most photogenic cities in India — you'll be shooting constantly, and outlets are scarce mid-sightseeing.",
      },
      {
        name: "Lightweight Scarf / Stole",
        description:
          "Useful as a light shoulder cover for temple visits (Jagdish Temple requires modest dress), sun protection on the boat, and a light layer for cooler winter evenings.",
        price: "₹399",
        rating: 4.5,
        reviews: "4.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+scarf+stole+travel"),
        tag: "Temple + sun cover",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Several temples and havelis expect shoulders and knees covered — a scarf solves this instantly without carrying a separate outfit.",
      },
      {
        name: "Reusable Insulated Water Bottle",
        description:
          "Udaipur's winter days are mild but summer (Apr–Jun) gets genuinely hot — an insulated bottle keeps water cool through long palace and market walks.",
        price: "₹699",
        rating: 4.5,
        reviews: "11.3k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+1L+travel"),
        tag: "Stay hydrated",
        tagColor: "bg-red-100 text-red-700",
        why: "Refill points are limited inside City Palace and around the ghats, so carrying your own is more reliable than buying bottled water all day.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UdaipurCityOfLakesPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/udaipur/hero.jpg"
              alt="Udaipur City Palace overlooking Lake Pichola at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10"
            aria-label="Breadcrumb"
          >
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Rajasthan", href: "/blog?category=rajasthan" },
                { label: "Udaipur", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Udaipur",
                "Rajasthan",
                "City Palace",
                "Lake Pichola",
                "Heritage",
                "Romantic",
              ].map((tag) => (
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
              Udaipur Travel Guide: City Palace, Lake Pichola & Complete
              Itinerary
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Palaces that appear to float on still water, whitewashed havelis
              climbing narrow lanes, and a skyline that turns gold at sunset —
              Udaipur is the most romantic city in Rajasthan, and one of the
              most photogenic in India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Udaipur, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-1.5 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Udaipur?</h2>
                  <p>
                    Rajasthan is a state built on desert forts and dry, dramatic
                    landscapes — which is exactly what makes{" "}
                    <strong>Udaipur</strong> such a surprise. Here the desert
                    gives way to a cluster of artificial lakes, ringed by hills
                    and dotted with marble palaces that seem to rise directly
                    out of the water. It's the reason Udaipur has been called
                    the <strong>City of Lakes</strong> and, somewhat more
                    cinematically, the <strong>Venice of the East</strong>.
                  </p>
                  <p>
                    At the centre of it all is the <strong>City Palace</strong>,
                    the largest palace complex in Rajasthan, built up over
                    nearly 400 years by successive Mewar rulers on the eastern
                    bank of Lake Pichola. Just offshore, Jag Mandir and Jag
                    Niwas (now the Taj Lake Palace hotel) sit on their own
                    islands, appearing to hover on the water — an image so
                    striking it's been the backdrop for everything from royal
                    weddings to a James Bond film.
                  </p>
                  <p>
                    But Udaipur isn't only postcards. The old city's narrow
                    lanes hold working havelis, silver and miniature-painting
                    workshops, and rooftop cafés that turn every meal into a
                    view. It's a compact, walkable city — most of what matters
                    fits inside a few kilometres — which makes it one of the
                    easiest Rajasthan destinations to see properly in two or
                    three unhurried days.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Udaipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Rajasthan, India",
                        },
                        {
                          icon: "🏰",
                          label: "City Palace built",
                          value: "From 1559 CE",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Sep – Mar" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Maharana Pratap (UDR)",
                        },
                        {
                          icon: "🌊",
                          label: "Lakes",
                          value: "Pichola, Fateh Sagar",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
                        },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Udaipur</h2>
                  <p>
                    Udaipur's lakes make it slightly milder than the rest of
                    desert Rajasthan, but the same broad seasonal pattern
                    applies — cool winters are the clear favourite, summers are
                    best avoided.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Sep – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Daytime temperatures 18–28°C, cool evenings perfect for rooftop dinners and the sunset boat ride. Lakes are typically full after the monsoon. December–January is peak season — book palace-view hotels and the Lake Palace boat ride well ahead.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🔥",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — manageable but tiring",
                        text: "Temperatures climb into the high 30s°C by May–June. Sightseeing is still doable if you front-load activity to early morning and evening, but midday walking through the old city is genuinely draining.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush and photogenic",
                        text: "Udaipur receives real monsoon rain, unlike the deep desert — the lakes fill dramatically, hillsides turn green, and the city looks at its lushest. Expect short, sudden downpours rather than continuous rain.",
                      },
                      {
                        season: "Winter nights",
                        emoji: "🌙",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Can get chilly",
                        text: "December–January nights can drop to 8–10°C, cooler than visitors expect from Rajasthan. A light jacket makes rooftop dinners and evening boat rides far more comfortable.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span
                            className="font-bold text-stone-800 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> October to February. Lakes are
                    fullest right after monsoon, evenings are cool enough for a
                    jacket and a rooftop dinner, and the light in the golden
                    hour before sunset is exactly what makes Udaipur's
                    palace-and-water views so famous.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Udaipur</h2>
                  <p>
                    Udaipur is one of the best-connected cities in Rajasthan,
                    with direct flights from most major Indian metros — the
                    easiest of the state's heritage cities to reach.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Maharana Pratap Airport (UDR) has
                      direct daily flights from Delhi, Mumbai, Bangalore,
                      Ahmedabad, and Jaipur, plus seasonal connections to other
                      cities. The airport is about 22 km from the city centre,
                      roughly 30–40 minutes by taxi.
                    </li>
                    <li>
                      <strong>By Train:</strong> Udaipur City Railway Station
                      connects to Delhi, Mumbai, Ahmedabad, and Jaipur with both
                      day and overnight options. The Mewar Express and
                      Udaipur–Delhi overnight trains are popular choices for
                      arriving rested.
                    </li>
                    <li>
                      <strong>By Road:</strong> Udaipur connects to Jaipur (405
                      km, 6–7 hrs), Jodhpur (265 km, 5 hrs), and Ahmedabad (260
                      km, 5 hrs) via good highways. RSRTC and private overnight
                      buses run regularly from all three.
                    </li>
                    <li>
                      <strong>Classic Rajasthan circuit:</strong> Udaipur pairs
                      naturally with Jodhpur and Jaisalmer for a south-to-west
                      Rajasthan loop, or with Mount Abu (185 km, ~4 hrs) as a
                      shorter hill-station add-on.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your dates are flexible,
                    flying in is genuinely the easiest option here — unlike
                    Jaisalmer, Udaipur's airport connectivity is excellent, so
                    there's little reason to take a long overland journey unless
                    you're already combining it with other Rajasthan stops.
                  </div>
                </section>

                {/* ── City Palace ───────────────────────────────────────── */}
                <section id="city-palace">
                  <h2>City Palace</h2>
                  <p>
                    Begun in 1559 CE by Maharana Udai Singh II (Udaipur's
                    founder) and expanded by successive Mewar rulers over the
                    next four centuries, the <strong>City Palace</strong> is the
                    largest palace complex in Rajasthan — a sprawling fusion of
                    courtyards, balconies, towers, and domes built directly on
                    the eastern shore of Lake Pichola.
                  </p>
                  <p>
                    Unlike Jaisalmer's austere desert fort, City Palace is all
                    ornamentation — coloured glass, mirror-work mosaics,
                    miniature paintings, and peacock motifs picked out in inlaid
                    tile. Large sections remain the private residence of the
                    Mewar royal family, while the rest is open as a museum
                    showing armour, royal portraits, and palanquins.
                  </p>
                  <ul>
                    <li>
                      <strong>Mor Chowk (Peacock Courtyard):</strong> The
                      palace's most photographed room, with three life-sized
                      mosaic peacocks in glass and tile representing the three
                      seasons — the single image most associated with City
                      Palace.
                    </li>
                    <li>
                      <strong>Manak Mahal (Ruby Palace):</strong> A mirrored and
                      glass-inlaid hall lined with royal portraits, one of the
                      most opulent interior spaces in the complex.
                    </li>
                    <li>
                      <strong>Crystal Gallery:</strong> A separate ticketed
                      section housing an extraordinary collection of crystal
                      furniture ordered from England in the 1870s by Maharana
                      Sajjan Singh — some pieces were never even unpacked before
                      the maharana's death.
                    </li>
                    <li>
                      <strong>Entry:</strong> ₹300 (Indian), ₹700 (Foreign) for
                      the museum; Crystal Gallery is a separate ticket (~₹500).
                    </li>
                    <li>
                      <strong>Timings:</strong> 9:30 AM – 5:30 PM daily
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive at opening time. City
                    Palace draws heavy tour-group traffic by mid-morning, and
                    the narrow passages between courtyards get genuinely crowded
                    — the first hour is the only time you'll get Mor Chowk close
                    to empty.
                  </div>
                </section>

                {/* ── Lake Pichola ──────────────────────────────────────── */}
                <section id="lake-pichola">
                  <h2>Lake Pichola</h2>
                  <p>
                    <strong>Lake Pichola</strong> is the reason Udaipur looks
                    the way it does — an artificial lake created in 1362 CE and
                    later expanded under Maharana Udai Singh II, ringed by the
                    City Palace, ghats, havelis, and hills, with two
                    palace-topped islands rising from its centre.
                  </p>

                  <section id="jag-mandir">
                    <h3>Jag Mandir & Jag Niwas</h3>
                    <p>
                      <strong>Jag Mandir</strong>, built across the 17th century
                      on a southern island, is open to visitors as a restaurant
                      and event venue, with a marble courtyard, garden, and
                      elephant-carved sandstone gateway. It once sheltered a
                      young Prince Khurram (the future Shah Jahan) during a
                      rebellion against his father — a stay some historians
                      believe influenced the design of the Taj Mahal decades
                      later.
                    </p>
                    <p>
                      <strong>Jag Niwas</strong>, on the second island, is now
                      the <strong>Taj Lake Palace</strong> hotel — not open to
                      non-guests for casual visits, but its illuminated
                      silhouette at night, appearing to float on the water, is
                      one of Udaipur's defining views regardless of whether you
                      stay there.
                    </p>
                  </section>

                  <section id="boat-ride">
                    <h3>The Boat Ride</h3>
                    <p>
                      A <strong>Lake Pichola boat ride</strong> is close to
                      mandatory in Udaipur — departing from the City Palace
                      jetty, most trips circle past Jag Mandir with a photo
                      stop, and the sunset departure (last slot of the day) is
                      by far the most popular, timed so the palace skyline turns
                      gold and pink as the sun drops behind the Aravalli hills.
                    </p>
                    <ul>
                      <li>
                        <strong>Duration:</strong> ~1 hour
                      </li>
                      <li>
                        <strong>Price:</strong> ₹400–₹700 per person (sunset
                        slots cost more and sell out first)
                      </li>
                      <li>
                        <strong>Book ahead in peak season:</strong> The sunset
                        slot fills up by early afternoon during December–January
                        — book at the jetty counter as soon as you arrive in the
                        city if sunset timing matters to you.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Fateh Sagar ───────────────────────────────────────── */}
                <section id="fateh-sagar">
                  <h2>Fateh Sagar Lake</h2>
                  <p>
                    North of Lake Pichola, <strong>Fateh Sagar Lake</strong>
                    is Udaipur's second major lake — larger, quieter, and
                    considerably less touristy, popular with locals for evening
                    walks along its promenade. It holds three islands, including{" "}
                    <strong>Nehru Garden</strong>, a small public park reachable
                    by boat, and offers some of the best unobstructed sunset
                    views in the city, with the Aravalli hills as backdrop.
                  </p>
                  <ul>
                    <li>
                      <strong>Boat rides:</strong> ₹200–₹400 per person, shorter
                      queues than Pichola
                    </li>
                    <li>
                      <strong>Best for:</strong> A calmer alternative to
                      Pichola's tourist crowds, and a good spot for an evening
                      walk or café stop
                    </li>
                  </ul>
                </section>

                {/* ── Saheliyon ki Bari ─────────────────────────────────── */}
                <section id="saheliyon-ki-bari">
                  <h2>Saheliyon ki Bari</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Ornate marble fountains and gardens in Udaipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Built in the early 18th century by Maharana Sangram Singh II
                    for the queen's attendants,{" "}
                    <strong>Saheliyon ki Bari</strong> ("Garden of the Maidens")
                    is a compact but beautifully maintained garden of marble
                    fountains, lotus pools, and a small museum, designed
                    originally so royal women could enjoy the monsoon without
                    leaving the palace grounds.
                  </p>
                  <ul>
                    <li>
                      <strong>Entry:</strong> ₹50 (Indian), ₹200 (Foreign)
                    </li>
                    <li>
                      <strong>Timings:</strong> 8 AM – 7 PM
                    </li>
                    <li>
                      <strong>Best for:</strong> A quick, relaxed stop — most
                      visitors spend 30–45 minutes here
                    </li>
                  </ul>
                </section>

                {/* ── Bagore ki Haveli ──────────────────────────────────── */}
                <section id="bagore-ki-haveli">
                  <h2>Bagore ki Haveli</h2>
                  <p>
                    Sitting directly on the Gangaur Ghat at Lake Pichola's edge,{" "}
                    <strong>Bagore ki Haveli</strong> is an 18th-century mansion
                    built by a Mewar prime minister, now restored as a museum of
                    Mewar royal life — turbans, glass and mirror work rooms, and
                    period furniture across more than a hundred rooms.
                  </p>
                  <p>
                    Its real draw, though, is the evening{" "}
                    <strong>Dharohar cultural show</strong> in the haveli's
                    courtyard — traditional Rajasthani dance including the
                    Kalbeliya (snake charmer) dance and a spectacular finale
                    where a dancer balances up to eleven brass pots on her head
                    while dancing on broken glass.
                  </p>
                  <ul>
                    <li>
                      <strong>Museum entry:</strong> ₹60
                    </li>
                    <li>
                      <strong>Dharohar show:</strong> ₹150–₹200, nightly at 7 PM
                      (arrive 20–30 min early for good seats)
                    </li>
                  </ul>
                </section>

                {/* ── Monsoon Palace ────────────────────────────────────── */}
                <section id="monsoon-palace">
                  <h2>Monsoon Palace (Sajjangarh)</h2>
                  <p>
                    Perched on a hilltop 944 metres above sea level, the{" "}
                    <strong>Monsoon Palace</strong> (Sajjangarh) was built in
                    the late 19th century by Maharana Sajjan Singh, originally
                    intended as an astronomical centre and monsoon-watching
                    retreat. Today it's Udaipur's best sunset viewpoint, with a
                    panoramic outlook over the entire city, Lake Pichola, and
                    the surrounding Aravalli range.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance from city centre:</strong> ~9 km, 20–30
                      minutes by taxi/auto
                    </li>
                    <li>
                      <strong>Entry:</strong> ₹300 (includes vehicle entry to
                      Sajjangarh Wildlife Sanctuary en route)
                    </li>
                    <li>
                      <strong>Timings:</strong> 9 AM – 6:30 PM (last entry ~5:30
                      PM for sunset)
                    </li>
                    <li>
                      <strong>Note:</strong> Book a taxi round trip rather than
                      relying on finding return transport at the top — options
                      thin out after dark.
                    </li>
                  </ul>
                </section>

                {/* ── Old City & Markets ────────────────────────────────── */}
                <section id="old-city">
                  <h2>The Old City & Markets</h2>
                  <p>
                    Udaipur's old city, wrapped around Lake Pichola's eastern
                    shore, rewards aimless wandering as much as any specific
                    sight — narrow lanes packed with miniature-painting studios,
                    silver jewellery shops, and rooftop cafés with palace or
                    lake views at every turn.
                  </p>
                  <ul>
                    <li>
                      <strong>Jagdish Temple:</strong> A large, active Indo-
                      Aryan temple just outside City Palace's main gate,
                      dedicated to Vishnu, with intricately carved pillars and a
                      constant flow of local worshippers.
                    </li>
                    <li>
                      <strong>Hathi Pol and Bada Bazaar:</strong> The main
                      shopping stretches for textiles, silver, and Rajasthani
                      handicrafts — expect to bargain.
                    </li>
                    <li>
                      <strong>Miniature painting studios:</strong> Udaipur is
                      known for a distinctive school of Mewar miniature painting
                      — several old-city workshops let you watch artists at work
                      before buying directly.
                    </li>
                    <li>
                      <strong>Rooftop cafés:</strong> Cafés overlooking Lake
                      Pichola near Jagdish Chowk and Lal Ghat are where most
                      travellers end up for sunset drinks — arrive 30–45 minutes
                      before sunset for a good table.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Udaipur</h2>
                  <p>
                    Staying near Lake Pichola — around Lal Ghat, Hanuman Ghat,
                    or the old city — puts you within walking distance of City
                    Palace, the boat jetty, and Bagore ki Haveli, and most
                    rooftop rooms come with a lake or palace view as standard.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,800/night",
                        picks: [
                          "Zostel Udaipur",
                          "Lake Ghat View Guesthouse",
                          "Backpacker hostels near Lal Ghat",
                          "Budget rooftop guesthouses, Hanuman Ghat",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹7,000/night",
                        picks: [
                          "Amet Haveli (lake-facing haveli hotel)",
                          "Jagat Niwas Palace Hotel",
                          "Kumbha Palace",
                          "Dream Heaven Hotel (rooftop views)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹15,000–₹80,000+/night",
                        picks: [
                          "Taj Lake Palace (on the lake itself)",
                          "The Leela Palace Udaipur",
                          "Trident Udaipur",
                          "Shiv Niwas Palace (part of City Palace complex)",
                        ],
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {t.tier}
                        </div>
                        <div
                          className="text-xs text-forest-600 font-medium mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li
                              key={p}
                              className="text-xs text-stone-600"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    For the best value-to-view ratio, book a mid-range haveli
                    hotel directly on Lake Pichola — Amet Haveli and Jagat Niwas
                    Palace both offer City Palace or Lake Palace views for a
                    fraction of the Taj Lake Palace's price.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Udaipur</h2>
                  <p>
                    Udaipur's food draws on the same Rajasthani tradition as the
                    rest of the state, with a few local specialities and an
                    unusually good rooftop-dining scene thanks to the city's
                    lake and palace views.
                  </p>
                  <ul>
                    <li>
                      <strong>Dal Baati Churma:</strong> Rajasthan's signature
                      dish, found across the old city — baked wheat dough balls
                      with spiced lentils and a sweet wheat-jaggery crumble.
                    </li>
                    <li>
                      <strong>Laal Maas:</strong> A fiery Rajputana mutton curry
                      cooked with dried red chillies — one of the state's most
                      iconic non-vegetarian dishes, worth seeking out at a
                      proper Rajasthani restaurant.
                    </li>
                    <li>
                      <strong>Mirchi Bada:</strong> A local Udaipur street- food
                      speciality — large green chillies stuffed with spiced
                      potato, dipped in gram-flour batter, and deep fried. Best
                      found near Jagdish Chowk in the evening.
                    </li>
                    <li>
                      <strong>Gatte ki Sabzi and Ker Sangri:</strong> The same
                      desert-adapted lentil and gram-flour dishes found across
                      Rajasthan, widely available at local thalis.
                    </li>
                    <li>
                      <strong>Best restaurants:</strong> Ambrai Restaurant (Amet
                      Haveli, unbeatable ground-level lake views), Upre by 1559
                      AD (rooftop, City Palace views), and Millets of Mewar
                      (rustic, traditional Rajasthani thalis).
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Udaipur Itinerary</h2>
                  <p>
                    Udaipur is compact enough to cover its essentials in three
                    unhurried days, with time for a sunset boat ride, the
                    Monsoon Palace, and enough slack to simply wander the old
                    city.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "City Palace & Lake Pichola",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: City Palace — Mor Chowk, Manak Mahal, Crystal Gallery (arrive at opening)",
                          "Lunch: Rooftop café near Jagdish Chowk",
                          "Afternoon: Jagdish Temple and old-city lanes",
                          "Evening: Sunset boat ride on Lake Pichola past Jag Mandir",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Gardens, Haveli & Culture",
                        color: "bg-amber-600",
                        activities: [
                          "Morning: Saheliyon ki Bari gardens",
                          "Afternoon: Fateh Sagar Lake — boat ride, Nehru Garden",
                          "Evening: Bagore ki Haveli museum + Dharohar dance show",
                          "Dinner: Ambrai Restaurant for ground-level lake views",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Monsoon Palace & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Local market shopping — silver, textiles, miniature paintings",
                          "Afternoon: Monsoon Palace (Sajjangarh) for panoramic city views",
                          "Late afternoon: Final rooftop lunch or coffee overlooking the lake",
                          "Departure by flight, train, or onward Rajasthan circuit",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                  ✓
                                </span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹3,500", "₹25,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          ["Palace + monument entries", "₹300", "₹800", "₹800"],
                          ["Lake Pichola boat ride", "₹500", "₹700", "₹700"],
                          ["Local transport/day", "₹250", "₹700", "₹2,000"],
                          ["Daily total", "₹2,350", "₹6,700", "₹31,000"],
                          ["3-Day trip total", "₹7,050", "₹20,100", "₹93,000"],
                        ].map(([exp, b, m, l], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Excludes flight/train to Udaipur. Luxury figures spike
                    mainly on accommodation — a night at the Taj Lake Palace
                    alone can exceed the entire budget-tier trip total.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Udaipur</h2>
                  <ul>
                    <li>
                      <strong>Book the sunset boat slot early:</strong>
                      It sells out by early afternoon in peak season (Dec–Jan) —
                      head to the City Palace jetty counter as soon as you
                      arrive in the city if you want that specific slot.
                    </li>
                    <li>
                      <strong>Arrive at City Palace at opening time:</strong>
                      Tour groups arrive by mid-morning and the narrow courtyard
                      passages get genuinely crowded — the first hour is the
                      only time Mor Chowk is close to empty.
                    </li>
                    <li>
                      <strong>
                        Pack a light jacket even in "warm" months:
                      </strong>
                      Winter nights around the lakes drop to 8–10°C, colder than
                      most visitors expect from a Rajasthan trip.
                    </li>
                    <li>
                      <strong>
                        Book a round-trip taxi for the Monsoon Palace:
                      </strong>
                      Return transport options thin out after dark at Sajjangarh
                      — arrange your ride both ways in advance.
                    </li>
                    <li>
                      <strong>Bargain respectfully in the markets:</strong>
                      Silver jewellery and miniature paintings in the old city
                      bazaars are priced expecting negotiation — bargain firmly
                      but politely.
                    </li>
                    <li>
                      <strong>Dress modestly for temples:</strong>
                      Jagdish Temple and other active temples expect shoulders
                      and knees covered — carry a light scarf as a quick
                      cover-up.
                    </li>
                    <li>
                      <strong>Walk instead of driving in the old city:</strong>
                      Lanes around Lake Pichola are narrow and best explored on
                      foot — most key sights (City Palace, Jagdish Temple,
                      Bagore ki Haveli) are within a 15-minute walk of each
                      other.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Book the sunset boat ride slot as early as possible",
                          "Arrive at City Palace right at opening time",
                          "Watch the Dharohar dance show at Bagore ki Haveli",
                          "Pack a light jacket for cool winter evenings",
                          "Try Ambrai Restaurant for ground-level lake views",
                          "Visit Fateh Sagar for a quieter lake alternative",
                          "Bargain at the old-city silver and textile markets",
                          "Book a round-trip taxi for the Monsoon Palace",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Visit City Palace mid-morning expecting empty courtyards",
                          "Assume winter evenings will be warm — they aren't",
                          "Skip booking the sunset boat slot until late in the day",
                          "Wear shorts or sleeveless tops into active temples",
                          "Rely on finding a taxi back from Sajjangarh after dark",
                          "Visit April–June expecting comfortable midday walking",
                          "Accept the first market price without bargaining",
                          "Miss Fateh Sagar just because Pichola is more famous",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div
                        key={f.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Udaipur",
                  "Rajasthan",
                  "City Palace",
                  "Lake Pichola",
                  "Heritage",
                  "Romantic",
                  "India",
                  "Havelis",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={UDAIPUR_GEAR}
                destination="Udaipur"
              />

              <RelatedPostsGrid currentSlug="udaipur-city-of-lakes-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="udaipur-city-of-lakes-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
