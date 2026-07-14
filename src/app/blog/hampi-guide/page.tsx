// src/app/blog/hampi-guide/page.tsx
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

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hampi Travel Guide: Ruins, Boulders, Temples & Tips",
  description:
    "The complete Hampi travel guide. Explore the ruins of the Vijayanagara Empire — Virupaksha Temple, Vittala Temple, Hampi Bazaar, coracle rides, boulder-hopping, Anegundi, where to stay, what to eat, and a complete 3-day itinerary.",
  keywords:
    "Hampi travel guide, Hampi Karnataka, Vijayanagara Empire ruins, Virupaksha Temple, Vittala Temple stone chariot, Hampi boulders, Hampi Bazaar, Anegundi, Hampi itinerary, Hospet Hampi, UNESCO World Heritage Hampi",
  openGraph: {
    title: "Hampi Travel Guide: Ruins, Boulders, Temples & Tips",
    description:
      "The extraordinary ruins of the Vijayanagara Empire scattered across a surreal boulder landscape — the complete guide to Hampi.",
    url: "https://club.kudozz.in/blog/hampi-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi.jpg",
        width: 1200,
        height: 630,
        alt: "Hampi — Virupaksha Temple and boulder landscape at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampi Travel Guide",
    description:
      "Vijayanagara ruins, surreal boulder landscapes and the stone chariot of Vittala — the complete Hampi guide.",
    images: ["/images/destinations/hampi.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hampi-guide",
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
          headline: "Hampi Travel Guide: Ruins, Boulders, Temples & Tips",
          description: "The complete Hampi travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi.jpg",
          datePublished: "2026-06-29",
          dateModified: "2026-07-12",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/hampi-guide",
          },
          about: {
            "@type": "Place",
            name: "Hampi",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Karnataka",
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
              { "@type": "ListItem", position: 3, name: "Hampi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Hampi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hampi", level: 2 },
  { id: "history", title: "Hampi's History", level: 2 },
  { id: "sacred-centre", title: "The Sacred Centre", level: 2 },
  { id: "virupaksha", title: "→ Virupaksha Temple", level: 3 },
  { id: "hampi-bazaar", title: "→ Hampi Bazaar", level: 3 },
  { id: "hemakuta", title: "→ Hemakuta Hill", level: 3 },
  { id: "royal-centre", title: "The Royal Centre", level: 2 },
  { id: "vittala", title: "→ Vittala Temple & Stone Chariot", level: 3 },
  { id: "lotus-mahal", title: "→ Lotus Mahal & Elephant Stables", level: 3 },
  { id: "queens-bath", title: "→ Queen's Bath", level: 3 },
  { id: "matanga-hill", title: "→ Matanga Hill", level: 3 },
  { id: "anegundi", title: "Anegundi — Across the River", level: 2 },
  { id: "bouldering", title: "Bouldering in Hampi", level: 2 },
  { id: "coracle", title: "Coracle Rides", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Hampi-specific gear ───────────────────────────────────────────────────────
const HAMPI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear that makes exploring Hampi's ruins genuinely better",
    emoji: "🏛️",
    items: [
      {
        name: "Hydration Backpack (2L bladder)",
        description:
          "Hampi's boulder landscape offers zero shade and temperatures regularly hit 38–42°C from March to June. A hands-free hydration pack means you drink constantly without stopping — critical when climbing boulders.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "3.8k",
        image: "🎒",
        affiliateUrl:
          "https://www.amazon.in/s?k=hydration+backpack+2L+trekking&tag=mytech0d6-21",
        tag: "Heat essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Hampi's ruins have almost no shade between sites. Dehydration sets in fast at 40°C on exposed rock. A hydration pack means you drink every few minutes without breaking pace.",
      },
      {
        name: "Wide-Brim Sun Hat (UPF 50+)",
        description:
          "A full-brim hat — not a cap — protects your neck and ears while you're craning upward to photograph carvings. The Decathlon Trek 500 hat or similar is perfect for Hampi's exposed terrain.",
        price: "₹799",
        rating: 4.4,
        reviews: "5.2k",
        image: "👒",
        affiliateUrl:
          "https://www.amazon.in/s?k=wide+brim+sun+hat+UPF50+trekking&tag=mytech0d6-21",
        tag: "Shade for your neck",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Neck and ear sunburn is the most common Hampi injury. You spend hours looking up at temple carvings and boulder formations — a cap leaves your neck completely exposed.",
      },
      {
        name: "Lightweight Compact Camera or Phone Lens Kit",
        description:
          "Hampi's carvings demand a camera with decent zoom for architectural details and a wide angle for the boulder landscape panoramas. A clip-on wide-angle + macro lens kit transforms smartphone photography here.",
        price: "₹999",
        rating: 4.2,
        reviews: "2.1k",
        image: "📷",
        affiliateUrl:
          "https://www.amazon.in/s?k=smartphone+clip+on+lens+kit+wide+macro&tag=mytech0d6-21",
        tag: "Photography upgrade",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The carvings inside Vittala Temple and the scale of the boulder landscape both require lenses your phone doesn't have built-in. A ₹1,000 clip-on kit changes your photos completely.",
      },
      {
        name: "Electrolyte Powder Sachets (ORS / Glucon-D)",
        description:
          "Walking 15–20 km across sun-baked granite in 40°C heat depletes electrolytes faster than water alone replaces them. Carry ORS sachets or electrolyte powder — add to your water bottle every morning.",
        price: "₹299",
        rating: 4.6,
        reviews: "8.9k",
        image: "⚡",
        affiliateUrl:
          "https://www.amazon.in/s?k=ORS+electrolyte+powder+sachets+travel&tag=mytech0d6-21",
        tag: "Heat exhaustion prevention",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Heat exhaustion at Hampi is genuinely common — the combination of sun, granite heat, and distance between sites is relentless. ORS sachets cost ₹5 each and could save your trip.",
      },
      {
        name: "Grippy Minimalist Walking Shoes (not flip flops)",
        description:
          "Boulder hopping and climbing the smooth granite at Hampi requires shoes with actual grip. Rubber-soled trail runners or minimalist shoes are ideal — thin enough to feel the rock, grippy enough to trust.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "4.1k",
        image: "👟",
        affiliateUrl:
          "https://www.amazon.in/s?k=minimalist+trail+running+shoes+grip&tag=mytech0d6-21",
        tag: "For boulder hopping",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Flip flops on Hampi's boulders are how people sprain ankles. The granite is smooth, steep, and deceptively slippery. Grippy rubber soles are the single most practical gear choice here.",
      },
      {
        name: "Rechargeable Pocket Fan",
        description:
          "Small, USB-rechargeable, clips to a bag strap. When you're standing in line at Vittala Temple in October with 500 other tourists and zero breeze, this is the most appreciated item in your bag.",
        price: "₹499",
        rating: 4.1,
        reviews: "6.7k",
        image: "🌀",
        affiliateUrl:
          "https://www.amazon.in/s?k=rechargeable+pocket+fan+mini+USB&tag=mytech0d6-21",
        tag: "Queue survival",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Hampi's major temples have queues — sometimes 20–40 minutes in the open sun. A pocket fan costs ₹500 and makes every queue tolerable.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HampiPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/hero.jpg"
              alt="Hampi — Virupaksha Temple and the surreal boulder landscape of the Vijayanagara Empire"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent" />
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
                { label: "Karnataka", href: "/blog?category=karnataka" },
                { label: "Hampi", href: null },
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
                "Hampi",
                "Karnataka",
                "UNESCO Heritage",
                "Ruins",
                "History",
                "Bouldering",
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
              Hampi Travel Guide: Ruins, Boulders, Temples & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Once the second-largest city on earth, Vijayanagara now lies
              scattered across a surreal landscape of ancient temples and
              impossibly stacked boulders — one of the most extraordinary places
              in all of India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "16 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Vijayanagara, Karnataka",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,400 words",
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
                  <h2>Why Hampi?</h2>
                  <p>
                    There is no other place in India quite like Hampi. Possibly
                    no other place on earth. Imagine a landscape that looks like
                    a giant child emptied a bag of boulders across a flat red
                    plain — granite rocks the size of houses and apartment
                    blocks, balanced on each other in formations that seem to
                    defy both gravity and geological explanation. Now scatter
                    through this landscape the ruins of a medieval empire that,
                    at its peak in the 15th century, was one of the wealthiest
                    and most sophisticated civilisations on the planet. Add a
                    still-active temple, a river, rice paddies, banana
                    plantations, and a population of langurs who own the ruins
                    as fully as any archaeologist.
                  </p>
                  <p>
                    <strong>Hampi</strong> is the site of Vijayanagara — the
                    capital of the Vijayanagara Empire (1336–1646 CE), which at
                    its height covered most of peninsular India and traded with
                    Portugal, Arabia, and China. The city was home to half a
                    million people when London had 50,000. It was described by
                    Portuguese travellers as larger and more beautiful than
                    Rome. In 1565, the empire's army was decisively defeated at
                    the Battle of Talikota, and the five victorious sultanates
                    spent six months systematically destroying the city —
                    burning, looting, and demolishing until what remained was
                    the stone that couldn't be burned.
                  </p>
                  <p>
                    What remains is still extraordinary. Over 1,600 monuments
                    spread across 4,187 hectares of UNESCO-listed landscape —
                    temples, market streets, royal pavilions, water systems, and
                    the boulders that were there before all of it and will be
                    there long after. Hampi is a place where history, geology,
                    and landscape fuse into something genuinely singular.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Hampi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Vijayanagara, Karnataka",
                        },
                        {
                          icon: "🏛️",
                          label: "UNESCO Status",
                          value: "World Heritage Site (1986)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🚆",
                          label: "Nearest Railway",
                          value: "Hospet (13 km)",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Hubli (143 km)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹3,500",
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
                  <h2>Best Time to Visit Hampi</h2>
                  <p>
                    Hampi sits in a semi-arid zone that gets very hot in summer
                    and receives modest monsoon rainfall. The window for
                    comfortable visiting is longer than many Indian destinations
                    — but the heat at the wrong time of year is serious.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Temperatures 20–30°C, clear skies, the golden light that makes Hampi's sandstone glow at sunrise and sunset. October is lush from the monsoon. December–January is peak tourist season — book accommodation 2–3 weeks ahead. The Hampi Utsav cultural festival runs in November.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌡️",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — possible but demanding",
                        text: "Temperatures climb to 38–44°C by April–May. The boulders retain heat and radiate it back. If visiting, start every day at 5:30 AM, retreat to accommodation between 11 AM and 4 PM, and resume in the evening. October–February is dramatically more comfortable.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — surprisingly good",
                        text: "Unlike many destinations, Hampi in monsoon has its own appeal — the rocks turn darker, the landscape greens, and the Tungabhadra River fills dramatically. Fewer tourists, lower prices, and the late afternoon light through monsoon clouds is exceptional for photography. Some roads flood.",
                      },
                      {
                        season: "Nov — Hampi Utsav",
                        emoji: "🎭",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Festival season",
                        text: "The 3-day Hampi Utsav (usually first week of November) fills the ruins with classical dance performances, music, light shows on the monuments, and cultural exhibitions. The ruins at night under festival lighting are extraordinary. Book accommodation months ahead for this period.",
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
                    <strong>Our pick:</strong> Late October or November — the
                    landscape is still lush from the monsoon, the temperatures
                    are perfect, the light is golden, and the Hampi Utsav adds a
                    layer of cultural richness that most visitors never
                    experience. Avoid April and May unless you thrive in extreme
                    heat.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Hampi</h2>
                  <p>
                    Hampi itself has no railway station or airport — all routes
                    pass through the nearby town of <strong>Hospet</strong>
                    (13 km away) or the city of <strong>Hubli</strong>
                    (143 km). The approach through the Deccan plateau, with its
                    first views of the boulder landscape, is itself part of the
                    experience.
                  </p>
                  <ul>
                    <li>
                      <strong>By Train (best option):</strong> Hospet Junction
                      is the closest railway station to Hampi — connected to
                      Bangalore (Hampi Express, overnight, 9 hours, ₹250–₹900),
                      Hyderabad (9 hours), and Goa (via Hubli). From Hospet,
                      take an auto-rickshaw or bus to Hampi (13 km, ₹150–₹200 by
                      auto, ₹20 by local bus). The Hampi Express departs
                      Bangalore (Bangalore City Station) at 10 PM and arrives
                      Hospet at 7 AM — a perfect overnight option.
                    </li>
                    <li>
                      <strong>By Bus from Bangalore:</strong> KSRTC runs
                      overnight buses from Bangalore's Majestic bus stand to
                      Hospet (₹400–₹800, 8–9 hours). Several private operators
                      also run direct buses. Comfortable and frequently
                      available — book on redbus.in or KSRTC website.
                    </li>
                    <li>
                      <strong>By Air:</strong> Hubli Airport (HBX) is 143 km
                      from Hampi — IndiGo and Air India operate daily flights
                      from Bangalore (45 min) and Mumbai (1 hr 20 min). From
                      Hubli, take a taxi to Hospet (2.5 hours, ₹2,500–₹3,500) or
                      a combination of bus + auto.
                    </li>
                    <li>
                      <strong>By Road from Goa:</strong> Hampi is 340 km from
                      Panaji — a 6–7 hour drive that makes it an excellent
                      addition to a Goa holiday. Several operators run direct
                      overnight buses from Goa.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The Hampi Express (Train 16591)
                    from Bangalore is the classic approach — you arrive in
                    Hospet at dawn, take an auto to Hampi, and watch the first
                    light hit the boulders as you arrive. It's one of the great
                    travel arrivals in India.
                  </div>
                </section>

                {/* ── History ───────────────────────────────────────────── */}
                <section id="history">
                  <h2>Hampi's History — The Vijayanagara Empire</h2>
                  <p>
                    To visit Hampi without understanding what it was is to walk
                    through one of the world's great libraries reading only the
                    covers. The history transforms the stones.
                  </p>
                  <p>
                    The Vijayanagara Empire was founded in 1336 by brothers
                    Harihara I and Bukka Raya I on the banks of the Tungabhadra
                    River — a deliberate location chosen partly for the natural
                    fortress the boulder landscape provided and partly for the
                    site's Hindu sacred geography (the Tungabhadra is mentioned
                    in the Ramayana, and the boulders are believed to be the
                    hills where Sugriva's monkey army was based). At its peak
                    under Krishnadevaraya (1509–1529), the city was home to
                    500,000 people — larger than any European city of the time —
                    and its markets traded in spices, elephants, cotton, horses,
                    and diamonds.
                  </p>
                  <p>
                    The empire was brought down at the{" "}
                    <strong>Battle of Talikota</strong> in 1565, when a
                    coalition of five Deccan sultanates — the Bijapur,
                    Ahmadnagar, Bidar, Golconda, and Berar sultanates — defeated
                    the Vijayanagara army through a combination of treachery and
                    superior artillery. The sack of the city that followed
                    lasted six months. By the time it ended, Vijayanagara was a
                    ruin, and so it remained.
                  </p>
                  <p>
                    What the sultanates couldn't destroy — the stone temples,
                    the carved monoliths, the aqueduct systems, the stone market
                    stalls — remained, and it is these that survive today as one
                    of the most remarkable archaeological sites in the world,
                    designated a UNESCO World Heritage Site in 1986.
                  </p>

                  {/* Timeline */}
                  <div className="relative my-8">
                    <div className="absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-amber-400 via-amber-600 to-stone-400 hidden sm:block" />
                    <div className="space-y-6">
                      {[
                        {
                          year: "1336",
                          event:
                            "Harihara I and Bukka Raya I found the Vijayanagara Empire on the banks of the Tungabhadra",
                        },
                        {
                          year: "1406",
                          event:
                            "Deva Raya I constructs the great aqueduct bringing water from the Tungabhadra into the city",
                        },
                        {
                          year: "1509",
                          event:
                            "Krishnadevaraya ascends — the empire's golden age begins; population reaches 500,000",
                        },
                        {
                          year: "1520",
                          event:
                            "Portuguese traveller Domingo Paes describes Hampi as 'the best-provided city in the world'",
                        },
                        {
                          year: "1565",
                          event:
                            "Battle of Talikota — decisive defeat. Six-month sack of the city follows.",
                        },
                        {
                          year: "1800s",
                          event:
                            "British archaeologist Colin Mackenzie begins documenting the ruins",
                        },
                        {
                          year: "1986",
                          event:
                            "UNESCO designates Hampi a World Heritage Site — 'Group of Monuments at Hampi'",
                        },
                      ].map((item, i) => (
                        <div key={item.year} className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center font-bold text-xs transition-all ${i === 4 ? "bg-red-900 text-red-200 border border-red-700" : "bg-amber-100 border border-amber-300 text-amber-800"}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {item.year}
                            </div>
                          </div>
                          <div className="flex-1 pt-3">
                            <p
                              className="text-sm text-stone-600 leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {item.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Sacred Centre ─────────────────────────────────────── */}
                <section id="sacred-centre">
                  <h2>The Sacred Centre</h2>
                  <p>
                    Hampi's monuments are broadly divided into two zones: the{" "}
                    <strong>Sacred Centre</strong> (around Virupaksha Temple,
                    Hemakuta Hill, and the Tungabhadra riverside) and the{" "}
                    <strong>Royal Centre</strong> (the administrative and
                    residential zone to the south). Both are essential. The
                    Sacred Centre is where Hampi still lives — the Virupaksha
                    Temple is active, priests chant, and pilgrims bathe in the
                    river every morning.
                  </p>

                  <section id="virupaksha">
                    <h3>Virupaksha Temple</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/hampi/virupaksha.jpg"
                        alt="Virupaksha Temple gopuram against the boulder landscape of Hampi"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      The <strong>Virupaksha Temple</strong> is Hampi's
                      centrepiece and the only monument in the complex that has
                      been in continuous use since the 7th century — predating
                      the Vijayanagara Empire by 700 years. Its massive 50-metre
                      gopuram (tower) is the first thing you see arriving in
                      Hampi and the landmark that orients the entire site.
                    </p>
                    <p>
                      The temple is dedicated to Virupaksha (a form of Shiva)
                      and is still managed by hereditary priests. Inside the dim
                      inner sanctum, the main deity is worshipped twice daily
                      with elaborate rituals. The temple elephant,
                      <strong> Lakshmi</strong>, is a beloved resident who
                      blesses devotees at the entrance in the mornings (9–10 AM)
                      by touching their heads with her trunk in exchange for a
                      coin. The inner courtyard has extraordinary carved pillars
                      and mandapas dating from the 15th century.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> Free (donations welcome)
                      </li>
                      <li>
                        <strong>Timings:</strong> 6 AM – 12:30 PM, 5 PM – 9 PM
                      </li>
                      <li>
                        <strong>Dress code:</strong> Remove footwear. Cover
                        shoulders and knees. Dhoti available for rent at the
                        entrance if needed.
                      </li>
                      <li>
                        <strong>Elephant Lakshmi:</strong> Present most mornings
                        9–10 AM at the main entrance
                      </li>
                      <li>
                        <strong>Climb the gopuram:</strong> A small staircase
                        inside leads to the top level — the view across Hampi's
                        boulder landscape from the top of the tower is
                        extraordinary.
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Come for the evening aarti at
                      6 PM — the most atmospheric time. The temple fills with
                      incense, the bells ring, the priests chant, and the fading
                      light through the gopuram turns the stone gold. Arrive 20
                      minutes early to find space inside the mandapa.
                    </div>
                  </section>

                  <section id="hampi-bazaar">
                    <h3>Hampi Bazaar</h3>
                    <p>
                      Running east from Virupaksha Temple for 800 metres is the{" "}
                      <strong>Hampi Bazaar</strong> — once the largest market
                      street of the Vijayanagara capital, where merchants from
                      Arabia, China, and Portugal traded alongside local
                      artisans. The stone stalls that lined both sides of the
                      street survive largely intact — roofed granite platforms
                      with carved pillars where vendors would have displayed
                      their goods.
                    </p>
                    <p>
                      Today the bazaar is the social spine of tourist Hampi —
                      guesthouses, restaurants, bicycle rental shops, and
                      souvenir stalls occupy both sides of the road that
                      replaced the medieval merchant street. Walk the full
                      length and imagine it at peak, described by a Portuguese
                      traveller as so full of rubies that they were sold by
                      weight like common groceries.
                    </p>
                  </section>

                  <section id="hemakuta">
                    <h3>Hemakuta Hill — The Best Sunrise in Hampi</h3>
                    <p>
                      Directly behind (south of) Virupaksha Temple, the
                      <strong> Hemakuta Hill</strong> is covered in pre-
                      Vijayanagara temples — smaller, older, and less visited
                      than the main sites. The hill is an easy 15-minute climb
                      and offers the finest panoramic view in Hampi: the
                      Virupaksha gopuram below, the boulder landscape in every
                      direction, the Tungabhadra River glinting in the distance,
                      and the ruins of the royal centre visible on the southern
                      plain.
                    </p>
                    <p>
                      This is where every serious Hampi photographer comes for
                      sunrise. The light at 6 AM hits the boulders and the
                      temple towers at an angle that makes the entire landscape
                      look like a painting. Come 30 minutes before dawn, climb
                      the hill in the dark (the path is clear), and watch the
                      world turn from grey to gold.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> The northwest-facing rock
                      ledge at the top of Hemakuta Hill is also the best place
                      in Hampi to watch the sunset — the view across the boulder
                      landscape as the light turns amber and then red rivals
                      anything you'll see in Rajasthan.
                    </div>
                  </section>
                </section>

                {/* ── Royal Centre ──────────────────────────────────────── */}
                <section id="royal-centre">
                  <h2>The Royal Centre</h2>
                  <p>
                    About 2 km south of Virupaksha Temple, the Royal Centre is
                    the administrative and residential heart of Vijayanagara —
                    where the king held court, the army drilled, and the royal
                    family bathed. The monuments here are grander and more
                    intact than many in the Sacred Centre, and the site has an
                    enclosed, parklike atmosphere that makes it excellent for
                    slow exploration.
                  </p>

                  <section id="vittala">
                    <h3>Vittala Temple & The Stone Chariot</h3>
                    <p>
                      <strong>Vittala Temple</strong> is the architectural
                      masterpiece of the Vijayanagara Empire and arguably the
                      finest example of Dravidian temple architecture in
                      existence. Built primarily in the 15th–16th century, it
                      was never consecrated (the deity was considered too fine
                      to be housed there) and survives in extraordinary detail
                      as a result — the sculptors had free rein to create
                      without the practical constraints of active worship.
                    </p>
                    <p>
                      The temple complex contains three things that stop most
                      visitors in their tracks:
                    </p>
                    <ul>
                      <li>
                        <strong>The Musical Pillars:</strong> The 56 pillars of
                        the main mandapa are carved from single pieces of
                        granite and each produces a different musical note when
                        tapped. British colonials actually cut two pillars to
                        verify there was no internal mechanism — the pillars are
                        solid stone throughout. The musical quality comes from
                        the specific density and tuning of each pillar's
                        carving.
                      </li>
                      <li>
                        <strong>The Stone Chariot:</strong> In the courtyard
                        stands Hampi's most photographed monument — a stone
                        chariot (ratha) dedicated to Garuda, the vehicle of
                        Vishnu. Built entirely from granite, with stone wheels
                        that once actually rotated, it is the finest stone
                        chariot in India. The craftsmanship of the decorative
                        panels is jawdropping at close range.
                      </li>
                      <li>
                        <strong>The Kalyana Mandapa:</strong> A wedding hall
                        with 40 pillars so intricately carved that each pillar
                        face tells a different mythological story. The ceiling
                        of the central bay — a lotus carved from a single stone
                        — is one of the most extraordinary pieces of stone
                        carving in Asia.
                      </li>
                    </ul>
                    <div
                      className="bg-stone-900 text-white rounded-xl p-5 my-6"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <h4
                        className="font-bold text-white mb-3 text-sm"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        📋 Vittala Temple — Practical Info
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        {[
                          {
                            label: "Entry fee",
                            value: "₹40 (Indian), ₹600 (Foreign)",
                          },
                          {
                            label: "Timings",
                            value: "8:30 AM – 5:30 PM (closed Tuesdays)",
                          },
                          {
                            label: "Distance from Hampi Bazaar",
                            value: "2.5 km — cycle or auto",
                          },
                          {
                            label: "Combined ticket",
                            value:
                              "₹600 ticket covers multiple Royal Centre sites",
                          },
                          {
                            label: "Photography",
                            value: "Permitted without flash",
                          },
                          {
                            label: "Best time",
                            value:
                              "Morning (8:30–11 AM) before tour buses arrive",
                          },
                        ].map(({ label, value }) => (
                          <div
                            key={label}
                            className="bg-white/5 rounded-lg p-3"
                          >
                            <div className="text-stone-400 text-xs mb-0.5">
                              {label}
                            </div>
                            <div className="text-white font-medium text-sm">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section id="lotus-mahal">
                    <h3>Lotus Mahal & Elephant Stables</h3>
                    <p>
                      The <strong>Lotus Mahal</strong> is the most elegant
                      secular building in Hampi — a two-storey pavilion of
                      combined Hindu and Islamic architectural styles, its
                      facade a series of lotus-shaped arches that give the
                      building its name. The symmetry and delicacy of the
                      construction is striking after the muscular scale of the
                      temples — this was a pleasure pavilion, possibly used by
                      the royal women, and the lightness of touch is deliberate.
                    </p>
                    <p>
                      Adjacent stand the <strong>Elephant Stables</strong> —
                      eleven domed chambers in a perfect line where the royal
                      war elephants were housed. Each chamber has a different
                      style of dome (Indo-Islamic in design), creating a
                      rhythmic architectural sequence that is one of Hampi's
                      most photogenic monuments. The scale of each chamber
                      reflects the scale of the animals housed within.
                    </p>
                  </section>

                  <section id="queens-bath">
                    <h3>Queen's Bath</h3>
                    <p>
                      The <strong>Queen's Bath</strong> is one of Hampi's most
                      surprising monuments — an ornate bath chamber that appears
                      modest from outside and reveals an extraordinarily
                      sophisticated interior. A moat-like corridor surrounds a
                      central swimming tank fed by perfumed water through
                      decorated pipes. The interior walls have corbelled arches,
                      balconies, and stucco decorations that still show traces
                      of the original pigment.
                    </p>
                    <p>
                      The name is likely a later attribution — the bath was
                      probably used by the king and the royal inner court rather
                      than specifically the queens. Whatever its users, the
                      engineering sophistication — a fully enclosed,
                      temperature-controlled bathing complex with a water supply
                      system, drainage, and architectural decoration — is
                      remarkable for the 15th century.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> ₹25 (Indian), ₹300 (Foreign)
                      </li>
                      <li>
                        <strong>Timings:</strong> 8 AM – 6 PM
                      </li>
                      <li>
                        <strong>Distance from Vittala Temple:</strong> 2.5 km
                        south
                      </li>
                    </ul>
                  </section>

                  <section id="matanga-hill">
                    <h3>Matanga Hill — Sunrise Viewpoint</h3>
                    <p>
                      The highest point in the Hampi landscape,
                      <strong> Matanga Hill</strong> (1,673 m above sea level
                      but only 60 m above the plain) requires a 20-minute climb
                      up stone steps and provides the most comprehensive
                      panoramic view of the entire site — the Sacred Centre, the
                      Royal Centre, the Tungabhadra River, the boulder field,
                      and on a clear day the plains extending beyond. There is a
                      small Virupaksha temple at the summit.
                    </p>
                    <p>
                      This is the classic Hampi sunrise spot — arrive 30 minutes
                      before dawn, climb in the dark with a torch, and watch the
                      sun emerge over the boulder horizon as the entire
                      landscape turns from grey to gold below you. The descent
                      is easier in full light and the morning energy of the
                      scene — monkeys, priests, pilgrims beginning their day —
                      rewards the early start.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Note:</strong> The path up Matanga Hill has
                      loose rocks in sections. Wear shoes with grip — not
                      sandals. Carry a torch for the pre-dawn ascent. There have
                      been occasional reports of monkey aggression at the summit
                      — don't carry visible food.
                    </div>
                  </section>
                </section>

                {/* ── Anegundi ──────────────────────────────────────────── */}
                <section id="anegundi">
                  <h2>Anegundi — Across the River</h2>
                  <p>
                    Cross the Tungabhadra by coracle from Virupaksha Ghat and
                    you arrive in <strong>Anegundi</strong> — a village that
                    predates even Vijayanagara and is mentioned in the Ramayana
                    as <em>Kishkindha</em>, the monkey kingdom of Sugriva and
                    Hanuman. Anegundi is older than Hampi, quieter, less
                    visited, and in many ways more interesting for those who
                    want to understand what this landscape felt like before the
                    tourists arrived.
                  </p>
                  <p>
                    The village retains its traditional layout — narrow lanes,
                    old houses with carved wooden doors, active temples, and
                    women still making the Kishkindha Trust's handmade products
                    (excellent banana fibre bags and recycled fabric items). The
                    surrounding hills have several sites of Ramayana
                    significance: <strong>Anjanadri Hill</strong>
                    (believed to be Hanuman's birthplace — a 575-step climb with
                    extraordinary views), <strong>Pampa Sarovar</strong>
                    (a sacred lake), and a network of walking trails through
                    boulder formations that are less crowded than the Hampi
                    side.
                  </p>
                  <ul>
                    <li>
                      <strong>Getting there:</strong> Coracle from Virupaksha
                      Ghat (₹50–₹80 one way, 5 min) or road via Kamalapura (7
                      km, ₹150 by auto)
                    </li>
                    <li>
                      <strong>Anjanadri Hill climb:</strong> 575 steps, 45 min,
                      best at sunrise or sunset
                    </li>
                    <li>
                      <strong>Kishkindha Trust:</strong> Visit their outlet in
                      Anegundi for excellent craft products that directly
                      support village women
                    </li>
                    <li>
                      <strong>Stay:</strong> Several heritage homestays in
                      Anegundi offer the most atmospheric accommodation in the
                      Hampi area
                    </li>
                  </ul>
                </section>

                {/* ── Bouldering ────────────────────────────────────────── */}
                <section id="bouldering">
                  <h2>Bouldering in Hampi</h2>
                  <p>
                    Hampi is one of the world's premier bouldering destinations
                    — a fact that surprises many visitors who come for the
                    history and discover an entirely separate community of
                    international climbers who come for the granite. The
                    boulders that make Hampi visually extraordinary are also,
                    from a climber's perspective, some of the finest natural
                    bouldering terrain on earth — the granite is coarse and
                    grippy, the problems range from beginner to V10+, and the
                    setting is incomparable.
                  </p>
                  <p>
                    The bouldering season aligns with the best tourist season
                    (October–February) — the community is most active during
                    this period, with climbers from Europe, Japan, and the US
                    making pilgrimages to Hampi specifically for the bouldering.
                    The areas around <strong>Sanapur Lake</strong>,
                    <strong> Hippie Island</strong> (the area across the river
                    from Hampi Bazaar), and the boulders east of Vittala Temple
                    have the highest concentration of documented problems.
                  </p>
                  <ul>
                    <li>
                      <strong>Gear rental:</strong> Crashpads, shoes, and chalk
                      bags available from guesthouses on Hippie Island
                      (₹300–₹600/day for crashpad)
                    </li>
                    <li>
                      <strong>Guidebook:</strong> The Hampi Bouldering guidebook
                      by Shot Rock is the definitive resource — available from
                      guesthouses on Hippie Island
                    </li>
                    <li>
                      <strong>Community:</strong> The guesthouses on Hippie
                      Island (Mowgli Guesthouse, Goan Corner) are where the
                      climbing community congregates — the best source for
                      conditions, new problems, and partners
                    </li>
                    <li>
                      <strong>No experience needed:</strong> The lowest-grade
                      problems around Sanapur Lake are V0–V1 — completely
                      accessible to anyone with good shoes and no fear of
                      heights
                    </li>
                  </ul>
                </section>

                {/* ── Coracle Rides ─────────────────────────────────────── */}
                <section id="coracle">
                  <h2>Coracle Rides on the Tungabhadra</h2>
                  <p>
                    The <strong>coracle</strong> (putti) — a circular, basket-
                    woven boat coated in tar — is one of the most ancient
                    watercraft still in active daily use in India. On the
                    Tungabhadra at Hampi, coracles ferry people between the
                    Hampi bank and Anegundi (Hippie Island), and can be hired
                    for river rides through the boulder gorge sections upstream.
                  </p>
                  <p>
                    A sunset coracle ride through the boulder canyon upstream
                    from Hampi Bazaar is one of the finest experiences the site
                    offers — the granite walls rise 30–40 metres on either side,
                    the river turns amber in the fading light, and the silence
                    (broken only by the paddle and the occasional heron) is
                    extraordinary after a day among crowds and ruins.
                  </p>
                  <ul>
                    <li>
                      <strong>Ferry crossing (Hampi–Hippie Island):</strong>{" "}
                      ₹50–₹80 per person one way, 5 minutes
                    </li>
                    <li>
                      <strong>River ride (leisure):</strong> ₹400–₹600 per
                      coracle (holds 3–4 people) for a 30–45 minute boulder
                      canyon ride
                    </li>
                    <li>
                      <strong>Best time:</strong> 5–6 PM for sunset light in the
                      canyon
                    </li>
                    <li>
                      <strong>Note:</strong> Coracles are circular and spin —
                      some people find them mildly disorienting. Perfectly safe
                      on the calm river sections.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Hampi</h2>
                  <p>
                    Accommodation in Hampi falls into three distinct zones —
                    Hampi Bazaar (main tourist side), Virupapur Gaddi (Hippie
                    Island, across the river), and Anegundi (most atmospheric,
                    least visited). Each has a completely different character.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹400–₹1,500/night",
                        picks: [
                          "Mowgli Guesthouse (Hippie Island — bouldering hub)",
                          "Goan Corner (Hippie Island)",
                          "Shanthi Guest House (Hampi Bazaar)",
                          "Budget guesthouses near Virupaksha Temple",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏡",
                        range: "₹1,500–₹5,000/night",
                        picks: [
                          "Evolve Back (Hampi) — boutique heritage resort",
                          "The Hampi Heritage Resort",
                          "Kishkindha Heritage (Anegundi — best location)",
                          "Hotel Mayura Bhuvaneshwari (Kamalapura)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹25,000+/night",
                        picks: [
                          "Orange County Hampi (Evolve Back)",
                          "Waterfront Heritage Resort",
                          "Hampi's Boulders (unique boulder-side location)",
                          "Private heritage homestays in Anegundi",
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
                    Stay on Hippie Island (Virupapur Gaddi) for the most
                    immersive Hampi experience — the boulder landscape, coracle
                    crossings, and distance from the tourist bustle makes it
                    feel genuinely removed from ordinary travel. Budget
                    guesthouses here are basic but the setting is incomparable.
                    Note: the island floods in monsoon season and becomes
                    inaccessible.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Hampi</h2>
                  <p>
                    Hampi's food scene is a pleasant surprise — a mix of
                    excellent South Indian staples, surprisingly good
                    traveller-oriented international cafes, and the distinctive
                    local tradition of serving meals on banana leaves. Hampi is
                    in Karnataka's sugarcane and banana belt — the local produce
                    is exceptional.
                  </p>
                  <ul>
                    <li>
                      <strong>Hampi thali (banana leaf meal):</strong> The most
                      authentic eating experience — rice, sambar, rasam, kootu,
                      pickle, papad, and dessert served on a fresh banana leaf
                      at local restaurants near the Virupaksha Temple. Unlimited
                      refills. ₹100–₹150.
                      <em> Mango Tree Restaurant</em> does the best version.
                    </li>
                    <li>
                      <strong>Masala dosa:</strong> The Karnataka staple,
                      available everywhere and excellent here. The coconut
                      chutney in this part of Karnataka uses fresh grated
                      coconut rather than dried — noticeably better.
                    </li>
                    <li>
                      <strong>Bisi bele bath:</strong> A Karnataka-specific rice
                      and lentil dish cooked with tamarind, spices, and
                      vegetables — warming, complex, and found at every local
                      breakfast spot. Usually served with papad and pickle.
                    </li>
                    <li>
                      <strong>Fresh sugarcane juice:</strong> Hampi sits in one
                      of Karnataka's primary sugarcane growing regions. Roadside
                      vendors press fresh sugarcane with ginger and lemon — the
                      best version costs ₹20 and is the finest thing you'll
                      drink all day in the heat.
                    </li>
                    <li>
                      <strong>Mango Tree Restaurant:</strong> Set in a terraced
                      garden descending to the Tungabhadra River, this is
                      Hampi's most beloved restaurant — slow service, excellent
                      food (both South Indian and traveller-oriented
                      international), and a view across the boulder landscape
                      that makes every meal an event. The lassis are
                      outstanding.
                    </li>
                    <li>
                      <strong>Hippie Island cafes:</strong> The guesthouses on
                      Virupapur Gaddi serve rooftop meals with boulder panorama
                      views — basic menus (pasta, sandwiches, Indian staples)
                      but the setting makes everything taste better. The
                      Laughing Buddha Café is the most popular.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Hampi Itinerary</h2>
                  <p>
                    Three days is the ideal length for Hampi — enough to cover
                    both the Sacred and Royal Centres thoroughly, cross to
                    Anegundi, do a sunrise and a sunset from different
                    viewpoints, and have time to simply sit among the boulders
                    without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Sacred Centre — Sunrise to Sunset",
                        color: "bg-amber-700",
                        activities: [
                          "5:30 AM: Climb Hemakuta Hill for sunrise over the boulder landscape and Virupaksha gopuram",
                          "Morning: Explore Hemakuta Hill temples and the Tungabhadra riverside ghats",
                          "10 AM: Virupaksha Temple — see elephant Lakshmi, climb the gopuram, explore the mandapas",
                          "Afternoon: Walk the full length of Hampi Bazaar, visit Sasivekalu Ganesha and Kadalekalu Ganesha monoliths",
                          "5 PM: Coracle ride through the boulder canyon at sunset",
                          "6 PM: Evening aarti at Virupaksha Temple",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Royal Centre & Vittala Temple",
                        color: "bg-amber-600",
                        activities: [
                          "6 AM: Matanga Hill for sunrise panorama (carry torch for ascent)",
                          "8:30 AM sharp: Vittala Temple — arrive at opening before tour buses (musical pillars, stone chariot, Kalyana Mandapa)",
                          "Lunch: Mango Tree Restaurant on the Tungabhadra",
                          "Afternoon: Royal Centre — Lotus Mahal, Elephant Stables, Queen's Bath, Hazara Rama Temple",
                          "Evening: Rooftop dinner at Hippie Island guesthouse with boulder views",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Anegundi, Bouldering & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Early: Cross by coracle to Anegundi village",
                          "Climb Anjanadri Hill (575 steps, Hanuman's birthplace) for morning views",
                          "Visit Pampa Sarovar and the Kishkindha Trust craft centre",
                          "Afternoon: Boulder hopping near Sanapur Lake (hire local guide, ₹500)",
                          "Sunset: Hemakuta Hill or boulders near Hampi Bazaar",
                          "Evening train or bus back to Bangalore / Hospet",
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Accommodation/night", "₹500", "₹2,500", "₹9,000"],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          ["Monument entries/day", "₹65", "₹640", "₹640"],
                          [
                            "Local transport (cycle/auto)",
                            "₹150",
                            "₹400",
                            "₹800",
                          ],
                          ["Coracle rides", "₹100", "₹300", "₹300"],
                          [
                            "Activities (bouldering/guide)",
                            "₹0",
                            "₹500",
                            "₹1,000",
                          ],
                          ["Daily total", "₹1,115", "₹4,940", "₹11,940"],
                          ["3-Day trip total", "₹3,345", "₹14,820", "₹35,820"],
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
                    * Excludes train/bus from Bangalore to Hospet (₹250–₹800 one
                    way). Monument entry note: Indian nationals pay ₹40 at
                    Vittala Temple plus small fees at other sites; foreign
                    nationals pay ₹600 at Vittala. An ASI composite ticket
                    covers multiple sites.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Hampi</h2>
                  <ul>
                    <li>
                      <strong>Start every day before 7 AM:</strong> Hampi's
                      ruins get extremely hot by 10 AM and the major sites
                      (Vittala Temple, Hemakuta Hill) fill with tour groups by
                      9:30 AM. The light between 6 and 9 AM is also the best for
                      photography — golden, low-angle, and free of the harsh
                      overhead glare that bleaches the stone by midday.
                    </li>
                    <li>
                      <strong>Hire a bicycle:</strong> The single best way to
                      explore Hampi is by bicycle — the Royal Centre sites are
                      too spread out for comfortable walking, too close for an
                      auto to be worth it, and cycling allows you to stop
                      wherever the view demands it. Available from Hampi Bazaar
                      shops (₹100–₹150/day for a standard bike; ₹300–₹500 for a
                      good geared cycle).
                    </li>
                    <li>
                      <strong>Get an ASI guide for Vittala Temple:</strong>
                      The Archaeological Survey of India employs licensed guides
                      at Vittala Temple (₹500–₹800 for a 2-hour tour). The level
                      of detail in the carvings — narrative panels, astronomical
                      calendars, musical scales encoded in pillar arrangements —
                      is completely invisible without someone who knows what to
                      look for.
                    </li>
                    <li>
                      <strong>
                        The Hippie Island coracle stops at sundown:
                      </strong>
                      The coracle crossing between Hampi Bazaar and Virupapur
                      Gaddi (Hippie Island) stops operating after sunset. If
                      you're staying on Hippie Island, make sure you're on the
                      right side of the river before dark — or plan to take the
                      long road route via Kamalapura (7 km).
                    </li>
                    <li>
                      <strong>Respect the active temple:</strong> Virupaksha
                      Temple is a living place of worship — not a museum. Dress
                      modestly, remove footwear at the entrance, don't
                      photograph the inner sanctum, and follow the flow of
                      devotees rather than treating it as a sightseeing object.
                    </li>
                    <li>
                      <strong>
                        The boulders at sunset are as important as any monument:
                      </strong>
                      One of Hampi's most extraordinary experiences is simply
                      climbing any large boulder near Hampi Bazaar at 5:30 PM
                      and sitting with the landscape as the light changes. No
                      entry fee, no crowds — just you, the granite, and one of
                      the great natural-historical panoramas in India.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Hampi has limited ATMs (one
                      reliable one near Hampi Bazaar). Hippie Island and
                      Anegundi have none. Withdraw in Hospet or from the Hampi
                      Bazaar ATM before crossing the river.
                    </li>
                    <li>
                      <strong>Don't step on or damage the carvings:</strong>
                      Many of Hampi's most extraordinary carvings are at ground
                      level or reachable without effort. The temptation to touch
                      is understandable — resist it. The oils from skin, applied
                      thousands of times a day over years, accelerate
                      deterioration measurably. Look. Don't touch.
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
                          "Arrive at Vittala Temple at 8:30 AM opening — before the crowds",
                          "Climb Hemakuta Hill for sunrise and sunset",
                          "Hire a bicycle — the only sensible way to cover the Royal Centre",
                          "Cross by coracle to Anegundi and climb Anjanadri Hill",
                          "Attend the 6 PM aarti at Virupaksha Temple",
                          "Get an ASI guide at Vittala Temple",
                          "Sit on a boulder at sunset — anywhere",
                          "Eat at Mango Tree Restaurant at least once",
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
                          "Touch or sit on the carvings — the oils cause real damage",
                          "Go to Vittala Temple after 10 AM on weekends — it's overwhelmed",
                          "Visit in April or May without accepting the heat will dominate",
                          "Rely on the Hippie Island coracle after dark — it stops at sunset",
                          "Skip Anegundi — most visitors do and it's a genuine loss",
                          "Rush the Royal Centre — the detail rewards patience",
                          "Ignore the boulder landscape in favour of only monuments",
                          "Forget to carry enough cash before crossing to Hippie Island",
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
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Hampi",
                  "Karnataka",
                  "UNESCO Heritage",
                  "Vijayanagara",
                  "Ruins",
                  "History",
                  "Bouldering",
                  "South India",
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
                sections={HAMPI_GEAR}
                destination="Hampi"
              />

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
