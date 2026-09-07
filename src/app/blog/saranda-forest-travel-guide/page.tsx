// src/app/blog/saranda-forest-travel-guide/page.tsx
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
  title: "Saranda Forest Travel Guide: Asia's Largest Sal Forest",
  description:
    "The complete Saranda Forest travel guide. Asia's largest sal forest in Jharkhand's West Singhbhum district — wildlife, viewpoints, how to reach, honest access advice, and what to expect from one of India's most remote forest destinations.",
  keywords:
    "Saranda Forest travel guide, Asia's largest sal forest, West Singhbhum, Jharkhand forest, Saranda Jharkhand, how to reach Saranda Forest, Saranda wildlife, Chaibasa forest",
  openGraph: {
    title: "Saranda Forest Travel Guide: Asia's Largest Sal Forest",
    description:
      "A dense, largely untouched sal forest covering nearly a thousand square kilometres of Jharkhand's mineral-rich hills — the complete guide to Saranda Forest.",
    url: "https://club.kudozz.in/blog/saranda-forest-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Dense forest canopy representative of Saranda Forest, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saranda Forest Travel Guide: Asia's Largest Sal Forest",
    description:
      "Asia's largest sal forest, dense and largely untouched, in Jharkhand's mineral-rich West Singhbhum hills.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/saranda-forest-travel-guide",
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
          headline: "Saranda Forest Travel Guide: Asia's Largest Sal Forest",
          description: "The complete Saranda Forest travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/saranda-forest-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Saranda Forest",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Saranda Forest Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Saranda Forest a developed tourist destination?",
    a: "No, and it's worth being upfront about that. Saranda has very limited tourist infrastructure compared to Jharkhand's better-known spots — this is a genuinely remote, largely untouched forest suited to travelers who specifically want an off-the-grid experience, not a polished sightseeing circuit.",
  },
  {
    q: "How do I reach Saranda Forest?",
    a: "The nearest airports are Ranchi (250km+) or Jamshedpur, and the nearest railway stations are Chaibasa or Manoharpur. Road travel is the primary and often the only practical way into the interior, so plan for a longer, slower journey than most Jharkhand destinations.",
  },
  {
    q: "What is the best time to visit Saranda Forest?",
    a: "October to March offers cooler, drier conditions and easier road access. The monsoon (June–September) can make interior roads difficult to travel and some areas less accessible.",
  },
  {
    q: "Is it safe to visit Saranda Forest?",
    a: "This is a mineral-rich, historically sensitive region, and access conditions in parts of the interior can vary. Travel with a knowledgeable local guide or operator who can confirm current conditions rather than attempting independent deep-forest travel, and follow any local guidance you're given.",
  },
  {
    q: "What wildlife can I see in Saranda Forest?",
    a: "Saranda is home to elephant populations and a wide range of forest birdlife, alongside dense sal canopy that supports a genuinely rich, largely undisturbed forest ecosystem.",
  },
  {
    q: "Do I need a guide to visit Saranda Forest?",
    a: "Yes — given the limited infrastructure, minimal signage, and the size of the forest, a local guide or operator is strongly recommended rather than optional.",
  },
  {
    q: "Why is Saranda called Asia's largest sal forest?",
    a: "Saranda is widely cited as the largest contiguous stretch of sal (Shorea robusta) forest in Asia, covering a vast area of Jharkhand's West Singhbhum district with dense, largely unbroken tree cover.",
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
  { id: "introduction", title: "Why Saranda Forest?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Saranda Forest", level: 2 },
  { id: "top-attractions", title: "What to See & Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SARANDA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a genuinely remote, low-infrastructure forest trip",
    emoji: "🌲",
    items: [
      {
        name: "Sturdy Trekking Shoes",
        description:
          "Interior forest tracks are uneven and largely unmaintained — proper footwear matters more here than at any developed Jharkhand site.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "5.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("sturdy+trekking+shoes+forest"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "There is no polished path system here — trails are genuine forest tracks, and good footwear is the single most important item.",
      },
      {
        name: "Insect Repellent",
        description:
          "Dense sal canopy and minimal development mean a strong, sustained mosquito and insect presence throughout the forest.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+forest"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Saranda's undisturbed canopy is prime insect habitat, especially near any water sources.",
      },
      {
        name: "Extra Water & Basic Supplies",
        description:
          "Shops and facilities are minimal to nonexistent once you're inside the forest tract — carry more than you think you'll need.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "This is not a destination with roadside shops every few kilometres — self-sufficiency matters.",
      },
      {
        name: "Power Bank",
        description:
          "Mobile network is patchy to absent in much of the interior — a charged power bank helps if you need to reach your guide or driver.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.9k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+travel"),
        tag: "Remote-travel essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Charging options disappear fast once you leave the main road, and connectivity is unreliable throughout.",
      },
    ],
  },
];

export default function SarandaForestGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Dense forest canopy representative of Saranda Forest, Jharkhand"
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
                { label: "Saranda Forest", href: null },
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
              {["Saranda Forest", "Off-beat", "Sal Forest", "Jharkhand"].map((tag) => (
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
              Saranda Forest Travel Guide: Asia's Largest Sal Forest
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A dense, largely untouched sal forest covering nearly a thousand square kilometres of
              Jharkhand's mineral-rich hills — an honest guide to visiting Saranda.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "West Singhbhum, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Saranda Forest?</h2>
                  <p>
                    <strong>Saranda Forest</strong>, in Jharkhand's West Singhbhum district, is widely
                    cited as Asia's largest contiguous stretch of sal (<em>Shorea robusta</em>) forest —
                    a vast, dense tree canopy spread across mineral-rich hill country. Unlike most entries
                    on a Jharkhand travel list, Saranda is not a developed sightseeing stop. It's a
                    genuinely remote forest tract with minimal tourist infrastructure, sitting in a region
                    that has long balanced conservation against iron-ore mining pressure.
                  </p>
                  <p>
                    That combination — scale, density, and remoteness — is exactly what makes Saranda
                    worth the effort for the right traveler: someone who wants a real off-the-grid forest
                    experience rather than a polished itinerary with cafes and viewpoints every few
                    kilometres.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Saranda Forest at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🌳", label: "Known For", value: "Asia's largest sal forest" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Chaibasa / Manoharpur" },
                        { icon: "🐘", label: "Wildlife", value: "Elephants, forest birdlife" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Saranda Forest</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cooler, drier weather with far more manageable road access into the forest interior.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "Significant heat makes extended forest time genuinely uncomfortable — not the ideal window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — access can be difficult",
                        text: "Roads into the interior can become genuinely hard to travel, and some areas become less accessible.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to March — the only realistic window for
                    comfortable, manageable road access into the interior.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Saranda Forest</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airports are Ranchi (250km+) and Jamshedpur —
                      both require a long onward drive.
                    </li>
                    <li>
                      <strong>By Train:</strong> Chaibasa or Manoharpur are the nearest railway stations,
                      with road travel required from either into the forest tract.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road access is the primary — and often the only practical
                      — way into the interior. This is genuinely one of Jharkhand's more remote
                      destinations and needs more planning time than anywhere else on this list.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Arrange a local guide or operator familiar with current
                    conditions before you travel — this is not a route to attempt independently, and
                    some interior areas may have periodic access considerations worth checking on locally.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See & Do in Saranda Forest</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Dense sal forest canopy in Saranda, Jharkhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The sal forest itself:</strong> The main draw — an unbroken, dense canopy
                      spread across a vast area, genuinely different in character from any developed
                      Jharkhand destination.
                    </li>
                    <li>
                      <strong>Thalkobad and other viewpoints:</strong> Elevated spots within the forest
                      tract offering sweeping views across the canopy.
                    </li>
                    <li>
                      <strong>Wildlife:</strong> Elephant populations move through the forest, alongside a
                      genuinely rich diversity of forest birdlife.
                    </li>
                    <li>
                      <strong>Forest-edge villages:</strong> Small settlements at the forest margins offer
                      a glimpse of local life shaped closely by the surrounding sal cover.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Saranda Forest</h2>
                  <p>
                    Accommodation options here are genuinely limited — set expectations accordingly. Most
                    travelers base themselves in Chaibasa and arrange day trips or short excursions into
                    the accessible forest-edge areas with a local guide.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Basic guesthouses in Chaibasa", "Simple lodges near forest access points"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Better-appointed Chaibasa hotels", "Forest department rest houses where available"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    Luxury-tier accommodation is not realistically available here — this is a genuinely
                    basic-infrastructure destination, and that's part of what keeps it untouched.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Saranda Forest</h2>
                  <ul>
                    <li>
                      <strong>Local Jharkhandi meals:</strong> Simple rice-based thalis, dal, and seasonal
                      vegetables at small eateries in Chaibasa.
                    </li>
                    <li>
                      <strong>Carry your own supplies for deeper excursions:</strong> Facilities inside the
                      forest tract itself are minimal to nonexistent — pack food and water for any longer
                      day out.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Saranda Forest Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Forest-Edge Exploration",
                        color: "bg-amber-700",
                        activities: [
                          "Travel to Chaibasa, meet your local guide/operator",
                          "Afternoon: accessible forest-edge areas and a viewpoint",
                          "Evening: rest in Chaibasa",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Deeper Forest Excursion & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: guided excursion further into accessible forest tract",
                          "Afternoon: return to Chaibasa, departure",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹600", "₹2,000"],
                          ["Food/day", "₹300", "₹600"],
                          ["Local guide/transport per day", "₹500", "₹1,000"],
                          ["Daily total", "₹1,200", "₹3,000"],
                          ["2-Day trip total", "₹2,400", "₹6,000"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport to the region. A knowledgeable local guide is a necessary cost
                    here, not an optional extra.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Saranda Forest</h2>
                  <ul>
                    <li>
                      <strong>Go with a local guide or operator:</strong> This is not a route to attempt
                      independently — arrange this in advance.
                    </li>
                    <li>
                      <strong>Verify current access conditions:</strong> Some interior areas may have
                      periodic considerations given the region's history — check locally before you travel.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> This is an adventure-travel destination,
                      not a polished sightseeing circuit.
                    </li>
                    <li>
                      <strong>Carry sufficient supplies:</strong> Facilities inside the forest are minimal
                      to nonexistent.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Arrange a knowledgeable local guide before you travel",
                          "Verify current access conditions locally",
                          "Carry sufficient water, food, and supplies",
                          "Base yourself in Chaibasa for practical access",
                          "Go with realistic, adventure-travel expectations",
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
                          "Attempt independent deep-forest travel without a guide",
                          "Expect developed tourist infrastructure",
                          "Travel without confirming current local conditions",
                          "Visit during peak monsoon given access difficulty",
                          "Rely on finding supplies once inside the forest",
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Saranda Forest", "Sal Forest", "Off-beat", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SARANDA_GEAR} destination="Saranda Forest" />

              <RelatedPostsGrid currentSlug="saranda-forest-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="saranda-forest-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
