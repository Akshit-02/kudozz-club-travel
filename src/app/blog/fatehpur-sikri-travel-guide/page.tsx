// src/app/blog/fatehpur-sikri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Fatehpur Sikri Travel Guide: Akbar's Ghost City",
  description:
    "Complete Fatehpur Sikri guide — Buland Darwaza, the dargah of Salim Chishti, Panch Mahal, Jodha Bai's Palace, why Akbar's capital was abandoned, and how to visit as a day trip from Agra.",
  keywords:
    "Fatehpur Sikri, Buland Darwaza, Salim Chishti dargah, Akbar capital, Panch Mahal, Jodha Bai Palace, Diwan-i-Khas, Fatehpur Sikri from Agra, Fatehpur Sikri history, UNESCO World Heritage Uttar Pradesh",
  openGraph: {
    title: "Fatehpur Sikri Travel Guide: Akbar's Ghost City",
    description:
      "Emperor Akbar's abandoned capital — the Buland Darwaza, Salim Chishti's dargah, and a red-sandstone city deserted within 15 years, a 40-minute drive from Agra.",
    url: "https://club.kudozz.in/blog/fatehpur-sikri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone Mughal gateway and courtyards of Fatehpur Sikri",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatehpur Sikri Travel Guide: Akbar's Ghost City",
    description:
      "The Buland Darwaza, Salim Chishti's dargah, and Akbar's abandoned red-sandstone capital — the complete Fatehpur Sikri guide.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/fatehpur-sikri-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Fatehpur Sikri Travel Guide: Akbar's Ghost City",
          description:
            "Complete Fatehpur Sikri guide — Buland Darwaza, the dargah of Salim Chishti, Panch Mahal, Jodha Bai's Palace, why Akbar's capital was abandoned, and how to visit as a day trip from Agra.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/fatehpur-sikri-travel-guide",
          },
          keywords:
            "Fatehpur Sikri, Buland Darwaza, Salim Chishti, Akbar, Panch Mahal, Jodha Bai's Palace",
          about: {
            "@type": "Place",
            name: "Fatehpur Sikri",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Fatehpur Sikri",
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
    q: "Why was Fatehpur Sikri abandoned?",
    a: "Emperor Akbar built Fatehpur Sikri as his capital in 1571 but abandoned it within about 15 years, largely because of severe water scarcity — the site's water supply, drawn from a nearby lake and wells, proved insufficient to sustain a full imperial capital and its population. Some accounts also point to shifting military and political priorities toward the northwest as a contributing factor.",
  },
  {
    q: "How far is Fatehpur Sikri from Agra?",
    a: "Fatehpur Sikri is about 40 km from Agra, roughly a 40-minute to one-hour drive depending on traffic. It's almost always visited as a half-day trip from Agra, or as a stop for travellers driving between Agra and Jaipur.",
  },
  {
    q: "What is the Buland Darwaza?",
    a: "The Buland Darwaza ('Gate of Magnificence') is a monumental red sandstone and marble gateway, among the tallest gateways in the world, built by Akbar to commemorate his military victory over Gujarat. It forms the main entrance to the Jama Masjid complex and is inscribed with a well-known Persian verse attributed to Jesus in Islamic tradition, reflecting Akbar's interest in religious pluralism.",
  },
  {
    q: "What is the significance of Salim Chishti's dargah?",
    a: "The dargah (tomb shrine) of the Sufi saint Salim Chishti sits within the Jama Masjid courtyard and is considered highly sacred. Akbar built Fatehpur Sikri partly in gratitude to the saint, who is credited with blessing him with a long-awaited son, Prince Salim (the future Emperor Jahangir). Visitors of many faiths still tie sacred threads to the marble latticework screens around the tomb as a wish-making ritual.",
  },
  {
    q: "Is Fatehpur Sikri worth visiting?",
    a: "Yes — it's one of the best-preserved Mughal-era complexes in India, offering a rare, intact look at how a 16th-century imperial capital was laid out, without the heavy crowds of the Taj Mahal. Its red sandstone architecture, largely untouched by later renovation, is considered by many historians and architects to be architecturally more original than Agra Fort.",
  },
  {
    q: "What should I wear to visit the dargah at Fatehpur Sikri?",
    a: "Modest clothing covering shoulders and knees is expected, and visitors are asked to remove footwear before entering the Jama Masjid courtyard and the dargah itself (shoe-minding stalls are available near the entrance for a small fee). A head covering is customary for women entering the tomb chamber, though scarves are often available to borrow or buy on site.",
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
  { id: "introduction", title: "Akbar's Abandoned Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Fatehpur Sikri", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FatehpurSikriGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Red sandstone Mughal gateway and courtyards of Fatehpur Sikri"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Fatehpur Sikri", href: null },
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
                "Fatehpur Sikri",
                "Buland Darwaza",
                "Akbar",
                "Mughal Architecture",
                "Agra Day Trip",
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
              Fatehpur Sikri: Akbar's Ghost City Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A red-sandstone imperial capital built by Emperor Akbar and
              deserted within 15 years — the towering Buland Darwaza, a
              revered Sufi shrine, and palace courtyards frozen exactly as
              the Mughals left them.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Near Agra, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Akbar's Abandoned Capital</h2>
                  <p>
                    Few sites in India tell a stranger story than{" "}
                    <strong>Fatehpur Sikri</strong>. In 1571, Emperor Akbar,
                    the third and greatest of the Mughal rulers, built an
                    entirely new capital city here in gratitude to the Sufi
                    saint Salim Chishti, who had blessed him with a
                    long-awaited male heir. Within roughly 15 years, the
                    city was deserted — abandoned largely due to an
                    inadequate water supply that couldn't sustain a full
                    imperial capital, though shifting military priorities to
                    the northwest are also often cited as a factor.
                  </p>
                  <p>
                    What Akbar left behind is remarkable precisely because
                    it was abandoned rather than continuously inhabited and
                    rebuilt: a near-complete red sandstone Mughal city,
                    its palaces, mosque, and courtyards largely untouched by
                    later renovation. A UNESCO World Heritage Site since
                    1986, Fatehpur Sikri sits about 40 km from{" "}
                    <Link href="/blog/agra-travel-guide">Agra</Link>, and is
                    almost always visited as a half-day trip from there.
                  </p>
                  <p>
                    The complex splits neatly into two parts: the largely
                    secular palace and administrative buildings (Panch
                    Mahal, Diwan-i-Khas, Jodha Bai's Palace), and the
                    still-active Jama Masjid complex, home to the towering{" "}
                    <strong>Buland Darwaza</strong> and the revered dargah
                    of Salim Chishti — still a working shrine that draws
                    pilgrims of multiple faiths today.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Fatehpur Sikri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~40 km west of Agra",
                        },
                        {
                          icon: "🚗",
                          label: "From Agra",
                          value: "~40 min - 1 hr by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Built By",
                          value: "Emperor Akbar, 1571-1585",
                        },
                        {
                          icon: "🚪",
                          label: "Known For",
                          value: "Buland Darwaza, Salim Chishti's dargah",
                        },
                        {
                          icon: "🏆",
                          label: "Status",
                          value: "UNESCO World Heritage Site",
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
                  <h2>Best Time to Visit Fatehpur Sikri</h2>
                  <p>
                    Since the complex is almost entirely open courtyards
                    and unshaded stone, timing your visit around the
                    weather matters as much here as it does in Agra itself.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather makes walking the exposed sandstone courtyards genuinely pleasant, especially in the morning before the day's coach tours arrive.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Avoid — extreme heat",
                        text: "The dark red sandstone absorbs heat fast, making the mostly shadeless complex punishing by mid-morning in peak summer.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Humid, occasional showers",
                        text: "Rain cools things down and adds dramatic monsoon light to photographs, but stone courtyards can get slippery underfoot.",
                      },
                      {
                        season: "Any time",
                        emoji: "🕌",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Combine with Agra",
                        text: "Since it's a half-day add-on to an Agra trip, most travellers simply visit whenever they're in Agra rather than planning around it separately.",
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
                    <strong>Our pick:</strong> October to March, ideally a
                    mid-morning visit after the Taj Mahal sunrise crowds
                    have thinned but before the afternoon heat sets in.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Fatehpur Sikri</h2>
                  <p>
                    Fatehpur Sikri has no independent transport hub of its
                    own — virtually everyone arrives by road, either as a
                    dedicated half-day trip from Agra or as a stop while
                    driving the Agra-Jaipur highway.
                  </p>
                  <ul>
                    <li>
                      <strong>From Agra:</strong> About 40 km, roughly
                      40 minutes to an hour by hired taxi, tour bus, or
                      self-drive car — the most common way to visit.
                    </li>
                    <li>
                      <strong>En route to Jaipur:</strong> Fatehpur Sikri
                      sits directly on the Agra-Jaipur road, making it a
                      convenient stopover for travellers driving between the
                      two cities rather than a dedicated round trip.
                    </li>
                    <li>
                      <strong>Getting around the complex:</strong> The site
                      is split across two ticketed areas — the palace
                      complex and the Jama Masjid/dargah complex, a short
                      walk apart. Licensed guides are available at the
                      entrance and are worth hiring given the site's layered
                      history.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Fatehpur Sikri with
                    Agra as a single day (visit the Taj and Fort one day,
                    Fatehpur Sikri the next morning) rather than trying to
                    squeeze everything into one exhausting day.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Top Attractions in Fatehpur Sikri</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Buland Darwaza gateway at Fatehpur Sikri, Uttar Pradesh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Buland Darwaza</h3>
                  <p>
                    Standing among the tallest gateways in the world, the
                    "Gate of Magnificence" was built by Akbar to commemorate
                    his military victory over Gujarat. Its inscription
                    includes a Persian verse attributed to Jesus in Islamic
                    tradition — a reflection of Akbar's genuine interest in
                    religious pluralism, which he pursued through his
                    short-lived syncretic faith, Din-i-Ilahi. Climbing the
                    long flight of steps up to the gateway is itself part of
                    the experience.
                  </p>
                  <h3>Dargah of Salim Chishti</h3>
                  <p>
                    Within the Jama Masjid courtyard sits the white marble
                    tomb of the Sufi saint Salim Chishti, whose blessing
                    Akbar credited for the birth of his son Prince Salim
                    (the future Emperor Jahangir). It remains an active
                    pilgrimage site — visitors of many faiths tie sacred
                    threads to its intricately carved marble lattice
                    (jaali) screens as a wish-making ritual, and the tomb's
                    delicate marble craftsmanship contrasts sharply with the
                    red sandstone that dominates the rest of the complex.
                    Modest dress and footwear removal are expected inside
                    the courtyard.
                  </p>
                  <h3>Panch Mahal</h3>
                  <p>
                    A five-storey pavilion with each level smaller than the
                    one below, tapering to a single kiosk at the top — built
                    without walls, its open sides originally likely fitted
                    with screens, believed to have been used by the women of
                    the court for leisure and to catch the breeze.
                  </p>
                  <h3>Diwan-i-Khas & Jodha Bai's Palace</h3>
                  <p>
                    The Diwan-i-Khas ("Hall of Private Audience") houses a
                    striking central carved stone pillar from which four
                    stone bridges radiate outward, believed to be where
                    Akbar sat while conducting discussions with scholars and
                    ministers. Nearby, Jodha Bai's Palace — the largest
                    residential structure in the complex — blends Hindu and
                    Islamic architectural elements, reflecting the mixed
                    Rajput-Mughal households of Akbar's court.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Fatehpur Sikri has very limited accommodation of its
                    own — almost every visitor stays in Agra and visits as a
                    day or half-day trip. A handful of small guesthouses
                    exist near the site for travellers who want to catch an
                    early-morning visit before the tour buses arrive.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Small local guesthouses near the site",
                          "Budget hotels in Agra (better choice)",
                          "Backpacker stays near Agra Cantt",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Business hotels in Agra, Fatehabad Road",
                          "Boutique stays near Taj East Gate",
                          "Chain hotels with easy highway access",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹10,000–₹35,000+/night",
                        picks: [
                          "Five-star Agra resorts near Taj East Gate",
                          "Heritage-style luxury properties in Agra",
                          "International chain hotels",
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
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Palace Complex",
                        color: "bg-amber-700",
                        activities: [
                          "Drive out from Agra, arrive by mid-morning",
                          "Explore Panch Mahal, Diwan-i-Khas, Jodha Bai's Palace",
                          "Hire a licensed guide at the entrance for context",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Jama Masjid & Dargah",
                        color: "bg-sky-600",
                        activities: [
                          "Walk to the Jama Masjid complex",
                          "Climb the steps to Buland Darwaza",
                          "Visit Salim Chishti's dargah, tie a wish-thread",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Most travellers pair this half-day with a full{" "}
                    <Link href="/blog/agra-travel-guide">Agra itinerary</Link>{" "}
                    covering the Taj Mahal and Agra Fort on a separate day.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Small local dhabas near the entrance:</strong>{" "}
                      Simple North Indian meals and snacks for visitors not
                      wanting to wait until they're back in Agra.
                    </li>
                    <li>
                      <strong>Agra restaurants:</strong> Since most visits
                      are day trips from Agra, the fuller range of dining —
                      from street food to hotel restaurants — is back in the
                      city itself.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> The complex
                      is large and largely unshaded, with limited food
                      options inside the ticketed areas themselves.
                    </li>
                  </ul>
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
                          [
                            "Entry ticket (Indian/foreign)",
                            "₹50 / ₹610",
                            "₹50 / ₹610",
                            "₹50 / ₹610",
                          ],
                          [
                            "Round-trip taxi from Agra",
                            "₹1,200",
                            "₹1,800",
                            "₹3,000",
                          ],
                          ["Guide fee", "₹300", "₹600", "₹1,000"],
                          ["Food/snacks", "₹200", "₹500", "₹1,200"],
                          [
                            "Shoe-minding / small offerings",
                            "₹50",
                            "₹100",
                            "₹200",
                          ],
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
                    * Figures are per person for a half-day trip, in INR.
                    Entry to the dargah itself is free; ticket prices apply
                    to the palace and Jama Masjid complexes. Always confirm
                    current rates before your trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Fatehpur Sikri</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly for the dargah:</strong>{" "}
                      Shoulders and knees covered, footwear removed before
                      entering the mosque courtyard.
                    </li>
                    <li>
                      <strong>Hire a licensed guide:</strong> The site's
                      layered history — palace, mosque, and shrine — is easy
                      to miss without context; guides at the entrance are
                      generally worth the fee.
                    </li>
                    <li>
                      <strong>Watch for unofficial "guides" at the
                      gate:</strong> Stick to guides from the official
                      booths rather than freelancers who approach you
                      outside the ticket counter.
                    </li>
                    <li>
                      <strong>Carry water:</strong> The complex is
                      expansive and largely shadeless, with limited shops
                      inside.
                    </li>
                    <li>
                      <strong>Combine with Agra:</strong> Pair this half-day
                      trip with a full{" "}
                      <Link href="/blog/agra-travel-guide">
                        Agra itinerary
                      </Link>{" "}
                      rather than visiting in isolation.
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
                          "Hire a guide from the official booth at the entrance",
                          "Dress modestly for the Jama Masjid and dargah",
                          "Visit in the cooler morning hours",
                          "Combine the trip with a full day in Agra",
                          "Carry water and a hat for the open courtyards",
                          "Respect the active pilgrimage rituals at the dargah",
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
                          "Follow unofficial guides who approach you outside",
                          "Wear shorts or sleeveless tops into the dargah",
                          "Visit during peak summer afternoons",
                          "Skip a guide — the history is easy to miss alone",
                          "Rush the visit into under an hour",
                          "Forget to remove footwear at the mosque entrance",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Combine Fatehpur
                    Sikri with a full{" "}
                    <Link href="/blog/agra-travel-guide">Agra guide</Link>{" "}
                    covering the Taj Mahal and Agra Fort, and consider
                    continuing your{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary onward toward the Braj pilgrimage circuit.
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
                  "Fatehpur Sikri",
                  "Uttar Pradesh",
                  "Buland Darwaza",
                  "Akbar",
                  "Mughal Architecture",
                  "UNESCO World Heritage",
                  "Agra Day Trip",
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

              <RelatedPostsGrid currentSlug="fatehpur-sikri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="fatehpur-sikri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
