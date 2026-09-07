// src/app/blog/ajanta-ellora-travel-guide/page.tsx
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
  title: "Ajanta & Ellora Caves Travel Guide: History, Timings & Tips",
  description:
    "The complete guide to Ajanta and Ellora Caves — 2,000-year-old Buddhist frescoes, the monolithic Kailasa Temple, how to reach both UNESCO sites from Chhatrapati Sambhajinagar, timings, entry rules, a 2-day itinerary, and budget breakdown.",
  keywords:
    "Ajanta Caves, Ellora Caves, Ajanta Ellora travel guide, Kailasa Temple, Cave 16 Ellora, Ajanta cave paintings, UNESCO World Heritage Maharashtra, Ajanta Ellora timings, Ajanta Ellora closed days, how to reach Ajanta caves, how to reach Ellora caves, Chhatrapati Sambhajinagar caves, Aurangabad caves day trip, Ajanta Ellora itinerary, Ajanta Ellora entry fee, best time to visit Ajanta Ellora",
  openGraph: {
    title: "Ajanta & Ellora Caves Travel Guide: History, Timings & Tips",
    description:
      "Buddhist cave paintings 2,000 years old and a temple carved downward out of a single basalt cliff — the complete guide to India's two greatest rock-cut wonders.",
    url: "https://club.kudozz.in/blog/ajanta-ellora-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rock-cut cave temple architecture at Ajanta-Ellora, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajanta & Ellora Caves Travel Guide: History, Timings & Tips",
    description:
      "The Kailasa Temple carved from a single rock, and 2,000-year-old Buddhist frescoes — the complete guide to Ajanta and Ellora.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ajanta-ellora-travel-guide",
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
          headline: "Ajanta & Ellora Caves Travel Guide: History, Timings & Tips",
          description:
            "The complete guide to Ajanta and Ellora Caves, Maharashtra's two UNESCO World Heritage rock-cut cave complexes.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/ajanta-ellora-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Ajanta & Ellora Caves",
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
              { "@type": "ListItem", position: 3, name: "Ajanta & Ellora Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Can I visit both Ajanta and Ellora Caves in one day?",
    a: "Not comfortably. The two sites are roughly 100 km apart and each needs the better part of a day to see properly — Ajanta alone can take 3–4 hours once you add the shuttle bus ride in, and Ellora's spread-out cave complex is easily another half-day. Plan on two separate days, ideally with Chhatrapati Sambhajinagar (Aurangabad) as your base.",
  },
  {
    q: "Which day are Ajanta and Ellora Caves closed?",
    a: "Ajanta Caves are traditionally closed on Mondays, and Ellora Caves are traditionally closed on Tuesdays — but ASI schedules do change from time to time, so verify the current closure day before you finalise your itinerary.",
  },
  {
    q: "How do I get from Chhatrapati Sambhajinagar to Ajanta and Ellora?",
    a: "Ellora is about a 30-minute drive from the city, easily done by taxi or rented car. Ajanta is roughly 2 hours away by road; private vehicles are stopped at Fardapur (or the designated T-junction) and visitors switch to a mandatory shuttle bus for the final stretch to the caves, a rule meant to reduce pollution damage to the paintings.",
  },
  {
    q: "What is the best time to visit Ajanta and Ellora?",
    a: "November to March is ideal — cool mornings and comfortable daytime temperatures make the hours of walking, climbing, and standing in queues far more bearable. April to June gets punishingly hot for a full day outdoors at either site.",
  },
  {
    q: "Is Ellora's Kailasa Temple really carved from a single rock?",
    a: "Yes. Cave 16 at Ellora, the Kailasa Temple, was excavated top-down out of one continuous basalt rock face rather than built up from a foundation — an estimated 200,000 tonnes of rock were removed by hand over several decades. It remains one of the largest monolithic rock-cut structures on Earth.",
  },
  {
    q: "Do I need a guide at Ajanta and Ellora?",
    a: "It isn't mandatory, but it's genuinely worth it. Both sites reward context — the Jataka tale narratives painted on Ajanta's cave walls and the layered Buddhist-Hindu-Jain history at Ellora are far more meaningful with an ASI-approved guide than a solo walk-through with a phone camera.",
  },
  {
    q: "What is the budget for a trip to Ajanta and Ellora?",
    a: "A budget traveller basing out of Chhatrapati Sambhajinagar can expect to spend roughly ₹1,600–₹2,000 a day (stay, food, local transport, entry fees), a mid-range trip runs closer to ₹4,500–₹5,500 a day, excluding flights or trains into the region.",
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
  { id: "introduction", title: "Why Ajanta & Ellora?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "ajanta-caves", title: "Ajanta Caves", level: 2 },
  { id: "ellora-caves", title: "Ellora Caves", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AJANTA_ELLORA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for hours of walking, stairs, and dim cave interiors",
    emoji: "🛕",
    items: [
      {
        name: "Comfortable Walking/Hiking Shoes",
        description:
          "Both sites involve long stretches of uneven stone paths and stairs cut straight into rock — flip-flops and sandals get uncomfortable fast over a 3-4 hour visit.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "6.8k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+hiking+shoes"),
        tag: "Cave-visit essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Sore feet from the stone stairways is the most common complaint from travellers who visit in sandals.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Much of the walk between caves and the shuttle bus queue at Ajanta is in open sun — a hat matters more than sunscreen alone in the Deccan heat.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.9k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "There's very little shade on the approach paths and viewpoint above the Ajanta gorge.",
      },
      {
        name: "2L Hydration Bottle",
        description:
          "A full day covering either site, especially in the warmer months, means several hours outdoors with limited shaded rest points.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"),
        tag: "Trek essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Water is sold near the entrances but not deep inside the cave complexes — carry your own.",
      },
      {
        name: "Compact LED Torch",
        description:
          "Several of the smaller caves and interior chambers at both sites are dimly lit — a small torch (phone flash aside) helps pick out carving detail flash photography isn't allowed to capture.",
        price: "₹349",
        rating: 4.2,
        reviews: "2.4k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("compact+led+torch+travel"),
        tag: "Cave essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Flash photography is prohibited near the Ajanta paintings to prevent damage, so a torch helps you actually see the detail rather than just photograph it.",
      },
      {
        name: "Lightweight Daypack",
        description:
          "For water, sunscreen, a snack, and the ASI ticket/ID you'll need to keep handy across both a long walking day and the Ajanta shuttle bus ride.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.6k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("lightweight+daypack+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Large bags are often restricted near the cave entrances for conservation reasons — a small daypack avoids any issue at security checks.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Exposed stone courtyards and the open plateau above the Ajanta caves offer little shade during the hottest hours of the day.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+SPF+50+travel"),
        tag: "Sun essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Even in the cooler Nov–Mar window, midday sun at both sites is intense enough to burn exposed skin over a multi-hour visit.",
      },
    ],
  },
];

export default function AjantaElloraGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Rock-cut cave temple architecture at Ajanta-Ellora, Maharashtra"
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
                { label: "Ajanta & Ellora", href: null },
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
              {["Ajanta Caves", "Ellora Caves", "UNESCO", "Heritage", "Maharashtra"].map((tag) => (
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
              Ajanta & Ellora Caves Travel Guide: History, Timings & Tips
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Buddhist cave paintings 2,000 years old, and a temple carved
              downward out of a single basalt cliff — the complete guide to
              India's two greatest rock-cut wonders.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "14 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Aurangabad, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,700 words" },
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
                  <h2>Why Ajanta & Ellora?</h2>
                  <p>
                    Roughly 100 km apart in the Deccan plateau near what is
                    now <strong>Chhatrapati Sambhajinagar</strong> (formerly
                    Aurangabad), two cave complexes together form one of the
                    most complete records of ancient Indian religious art and
                    engineering anywhere in the world. Both are UNESCO World
                    Heritage Sites, both were carved directly out of volcanic
                    basalt rock over centuries, and both were, for long
                    stretches of history, essentially forgotten — Ajanta was
                    only rediscovered in 1819 by a British officer out tiger
                    hunting, who stumbled on the horseshoe-shaped gorge and
                    the cave mouths cut into its cliff face.
                  </p>
                  <p>
                    <strong>Ajanta Caves</strong> are older and almost
                    entirely Buddhist — 30 caves cut between the 2nd century
                    BCE and 6th century CE, famous above all for their
                    fresco paintings, among the finest surviving examples of
                    ancient Indian painting anywhere. <strong>Ellora
                    Caves</strong> are younger (6th–10th century CE) and
                    deliberately mixed — Buddhist, Hindu, and Jain
                    monastic complexes carved side by side, a rare physical
                    record of religious coexistence. Ellora's showpiece is
                    the Kailasa Temple, Cave 16, excavated top-down out of a
                    single rock face and still one of the largest
                    monolithic structures on Earth.
                  </p>
                  <p>
                    Together they're not a quick stop — expect to give each
                    site the better part of a day, ideally on separate days,
                    with the city formerly known as Aurangabad as your base.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🛕</span> Ajanta & Ellora at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🛕", label: "Caves", value: "30 (Ajanta) + 34 (Ellora)" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Chhatrapati Sambhajinagar (IXU)" },
                        { icon: "🚫", label: "Weekly Closure", value: "Ajanta: Mon · Ellora: Tue*" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹5,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-amber-800 mt-4">
                      * Verify current closure days with the ASI before
                      planning — these schedules do occasionally change.
                    </p>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit</h2>
                  <p>
                    Both sites involve hours of walking, climbing stairs cut
                    into rock, and standing in open courtyards, so weather
                    matters more than it might for an indoor museum.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool mornings and comfortable daytime highs make the long walking days at both sites genuinely enjoyable. This is also peak season, so expect more visitors, especially on weekends." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — visit early morning only", text: "Temperatures regularly cross 38°C by midday. If you must visit in this window, start at opening time and plan to be done well before noon." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — green but humid", text: "The Deccan plateau turns lush green and the Waghur gorge above Ajanta looks its most dramatic, but expect rain delays and humidity during the walk between caves." },
                      { season: "Oct", emoji: "🌤️", color: "bg-purple-50 border-purple-200", mood: "Transitional — good balance", text: "Post-monsoon greenery lingers, temperatures start easing, and crowds haven't yet hit their winter peak." },
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
                    <strong>Our pick:</strong> December to February. Cool
                    mornings mean you can start early at Ajanta before the
                    shuttle bus queues build up, and comfortably spend a
                    full afternoon walking the length of Ellora's cave line.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Ajanta & Ellora</h2>
                  <p>
                    Almost every visitor bases themselves in Chhatrapati
                    Sambhajinagar (formerly Aurangabad), the nearest city
                    with real airport and rail connectivity to both sites.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Chhatrapati Sambhajinagar
                      Airport (IXU) has direct flights from Mumbai, Delhi,
                      Pune, and Hyderabad — by far the easiest way in.
                    </li>
                    <li>
                      <strong>By Train:</strong> Chhatrapati Sambhajinagar
                      railway station is well connected to Mumbai, Pune, and
                      other major cities.
                    </li>
                    <li>
                      <strong>To Ellora:</strong> About a 30-minute drive
                      from the city — easily reached by taxi, rented car, or
                      a shared tour.
                    </li>
                    <li>
                      <strong>To Ajanta:</strong> Roughly a 2-hour drive.
                      Private vehicles are stopped at Fardapur (or the
                      designated T-junction) and visitors switch to a
                      mandatory shuttle bus for the final stretch — a rule
                      put in place to limit vehicle pollution near the
                      paintings.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Do Ellora and Ajanta on
                    separate days rather than trying to combine them — the
                    round trip to Ajanta alone, including the shuttle bus
                    ride, easily takes up most of a day.
                  </div>
                </section>

                <section id="ajanta-caves">
                  <h2>Ajanta Caves</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Rock-cut cave facade at Ajanta Caves"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The frescoes:</strong> Ajanta's real claim to
                      fame — painted narrative scenes from the Jataka tales
                      (stories of the Buddha's past lives), remarkably
                      preserved across some caves given their age, and
                      considered among the finest surviving examples of
                      ancient Indian painting.
                    </li>
                    <li>
                      <strong>The setting:</strong> All 30 caves are cut into
                      the inner face of a horseshoe-shaped gorge above the
                      Waghur river — the viewpoint across the gorge from the
                      entrance path is worth the walk on its own.
                    </li>
                    <li>
                      <strong>Chaitya halls & viharas:</strong> A mix of
                      prayer halls (chaityas) with carved stupas and
                      monastic living quarters (viharas), showing how the
                      site functioned as a working Buddhist monastic
                      community, not just a shrine.
                    </li>
                    <li>
                      <strong>Photography rules:</strong> Flash photography
                      is prohibited near the paintings to prevent further
                      fading — bring a torch if you want to actually see
                      detail in the dimmer caves.
                    </li>
                  </ul>
                </section>

                <section id="ellora-caves">
                  <h2>Ellora Caves</h2>
                  <ul>
                    <li>
                      <strong>Kailasa Temple (Cave 16):</strong> The
                      centerpiece — a full temple complex excavated
                      top-down out of a single continuous basalt rock face
                      to resemble Mount Kailash, an estimated 200,000
                      tonnes of stone removed by hand over decades. It's one
                      of the largest monolithic rock-cut structures in the
                      world.
                    </li>
                    <li>
                      <strong>Buddhist caves (1–12):</strong> The oldest
                      group, mostly monasteries and prayer halls, generally
                      simpler than the Hindu caves that follow.
                    </li>
                    <li>
                      <strong>Hindu caves (13–29):</strong> Including
                      Kailasa Temple, dedicated primarily to Shiva, with
                      elaborate carved narrative panels from Hindu
                      mythology.
                    </li>
                    <li>
                      <strong>Jain caves (30–34):</strong> The last group
                      chronologically, smaller in scale but intricately
                      carved, at the northern end of the site — placed
                      side-by-side with the Buddhist and Hindu caves as a
                      striking record of religious coexistence.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Ellora's caves are spread
                    across a roughly 2 km stretch — unlike Ajanta, there's
                    no shuttle system, so budget real walking time (and
                    water) between the Buddhist, Hindu, and Jain clusters.
                  </div>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Nearly everyone stays in Chhatrapati Sambhajinagar,
                    which has the widest range of options and is a
                    manageable drive from both sites.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹800–₹2,000/night", picks: ["MTDC Holiday Resort, Aurangabad", "Budget hotels near the railway station", "Guesthouses close to the airport road"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,500–₹6,000/night", picks: ["Business hotels in Cidco/Osmanpura", "Heritage-style boutique stays", "Chain hotels near the airport"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Vivanta Aurangabad", "Taj/premium chain properties", "Resort-style stays on the city outskirts"] },
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
                  <h2>What to Eat</h2>
                  <p>
                    Chhatrapati Sambhajinagar's food reflects its Nizami and
                    Marathwada influences — expect a heavier, spicier hand
                    than coastal Maharashtra.
                  </p>
                  <ul>
                    <li><strong>Naan Qalia:</strong> A local mutton curry served with tandoor-baked naan — the city's signature dish.</li>
                    <li><strong>Aurangabadi Biryani:</strong> A Nizami-influenced biryani style distinct from Hyderabadi biryani, worth seeking out at long-running local joints.</li>
                    <li><strong>Thalis:</strong> Simple Marathwada vegetarian thalis are widely available and a reliable, filling option between cave visits.</li>
                    <li><strong>Roadside stalls near Ellora:</strong> Basic but decent chai and snack stalls cluster near the Ellora entrance for a quick break between caves.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Ajanta & Ellora Itinerary</h2>
                  <p>
                    Two full days, one site each, based out of Chhatrapati
                    Sambhajinagar.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Ellora Caves", color: "bg-amber-700", activities: ["Early start, 30-min drive to Ellora", "Walk the Buddhist caves (1–12) first", "Spend the most time at Kailasa Temple (Cave 16)", "Finish with the Jain caves (30–34)", "Evening: return to the city, try Naan Qalia for dinner"] },
                      { day: "Day 2", title: "Ajanta Caves", color: "bg-forest-600", activities: ["Early departure — roughly 2 hours by road", "Park at Fardapur/T-junction and take the mandatory shuttle bus", "Walk the cave line, prioritising the best-preserved fresco caves", "Take in the horseshoe-gorge viewpoint before leaving", "Return drive to the city by evening"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹12,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          ["Local transport/day (car hire)", "₹1,500", "₹2,500", "₹4,500"],
                          ["Entry fees (both sites)", "₹800", "₹800", "₹800"],
                          ["Daily total", "₹1,900 – ₹2,300", "₹5,800", "₹18,500"],
                          ["2-Day trip total", "₹4,700", "₹13,300", "₹38,300"],
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
                    * Excludes flights/trains to Chhatrapati Sambhajinagar.
                    Entry fees are approximate — confirm current ASI rates
                    locally before you go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Verify closure days before you go:</strong> Ajanta is traditionally closed Mondays and Ellora Tuesdays, but confirm current ASI schedules ahead of your trip.</li>
                    <li><strong>Hire an ASI-approved guide:</strong> The Jataka tale paintings at Ajanta and the layered history at Ellora are much richer with context than a solo walk-through.</li>
                    <li><strong>No flash photography near the paintings:</strong> Carry a small torch instead to actually see fresco detail in dimmer caves.</li>
                    <li><strong>Wear real walking shoes:</strong> Both sites involve significant stairs and uneven stone paths.</li>
                    <li><strong>Start early in warmer months:</strong> Outside Nov–Mar, aim to be at either site by opening time and finish before the worst midday heat.</li>
                    <li><strong>Budget a full day per site:</strong> Don't try to combine both in one day — the Ajanta shuttle bus alone eats up significant time.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Visit Ajanta and Ellora on separate days",
                          "Hire an ASI-approved guide at both sites",
                          "Start early to beat both heat and crowds",
                          "Carry your own water and a torch",
                          "Check current closure days before finalising dates",
                          "Base yourself in Chhatrapati Sambhajinagar",
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
                          "Try to cover both sites in a single day",
                          "Use flash photography near the paintings",
                          "Visit at midday in the Mar–Jun heat without shade breaks",
                          "Skip the guide and miss the historical context",
                          "Wear sandals for the extensive stone stairways",
                          "Assume the closure days without checking first",
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
                {["Ajanta Caves", "Ellora Caves", "UNESCO", "Heritage", "Maharashtra", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AJANTA_ELLORA_GEAR} destination="Ajanta & Ellora" />

              <RelatedPostsGrid currentSlug="ajanta-ellora-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ajanta-ellora-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
