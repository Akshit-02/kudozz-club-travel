// /heritage-cultural-tourism: the hub of the Heritage & Cultural Tourism cluster. It carries the
// "heritage tourism in India" pillar copy (heritage, cultural and historical tourism are one intent;
// see docs/heritage-cultural-cannibalization.md) and links to every heritage article, the existing
// destination guides that own each place, the itineraries and the heritage packages.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { heritageIndex, heritageEntry } from "@/lib/heritage-links";
import type { AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/heritage-cultural-tourism`;
const TITLE = "Heritage & Cultural Tourism in India: Sites & Culture | Kudozz Club";
const DESCRIPTION =
  "Heritage and cultural tourism in India: UNESCO sites, forts, palaces, caves, historic cities, museums, crafts, textiles, dance, festivals, food and itineraries.";
const HERO = { src: "/images/heritage/heritage-cultural-tourism-india-hampi.webp", alt: "The stone chariot of the Vittala temple at Hampi, with boulder hills behind" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["heritage tourism in India", "cultural tourism India", "historical places in India", "UNESCO World Heritage Sites India", "heritage tours India"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const pick = (slugs: string[]) => slugs.map((s) => heritageEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));

const OVERVIEW = ["historical-places-in-india", "how-to-plan-a-heritage-trip-in-india", "unesco-world-heritage-sites-in-india"];
const UNESCO = ["taj-mahal", "red-fort", "qutub-minar", "humayuns-tomb", "elephanta-caves", "champaner-pavagadh", "belur-halebidu-hoysala-temples", "lothal"];
const FORTS = ["famous-forts-in-india", "forts-of-rajasthan", "forts-in-maharashtra", "amber-fort", "mehrangarh-fort", "palaces-in-india"];
const ANCIENT = ["archaeological-sites-in-india", "rock-cut-caves-in-india", "best-museums-in-india"];
const ARCHITECTURE = ["temple-architecture-of-india", "mughal-monuments-in-india", "deccan-sultanate-heritage", "colonial-heritage-in-india"];
const CITIES = ["heritage-cities-in-india", "heritage-walks-in-india", "mountain-railways-of-india"];
const CRAFTS = ["handicrafts-of-india", "textile-heritage-of-india", "classical-dance-and-music-in-india", "food-heritage-of-india"];
const FESTIVALS = ["cultural-festivals-in-india", "hornbill-festival", "rann-utsav", "tribal-tourism-in-india"];
const ITINERARY_PAGES = ["golden-triangle-itinerary", "rajasthan-heritage-itinerary", "south-india-heritage-itinerary", "gujarat-heritage-itinerary", "madhya-pradesh-heritage-itinerary"];
const STATES = [
  "heritage-tourism-in-rajasthan",
  "heritage-tourism-in-delhi",
  "heritage-tourism-in-uttar-pradesh",
  "heritage-tourism-in-gujarat",
  "heritage-tourism-in-madhya-pradesh",
  "heritage-tourism-in-maharashtra",
  "heritage-tourism-in-karnataka",
  "heritage-tourism-in-tamil-nadu",
  "heritage-tourism-in-kerala",
  "heritage-tourism-in-telangana",
  "heritage-tourism-in-odisha",
  "heritage-tourism-in-west-bengal",
];

// Existing destination guides own each heritage place's own intent.
const DESTINATIONS: [string, string][] = [
  ["Agra", "/blog/agra-travel-guide"],
  ["Fatehpur Sikri", "/blog/fatehpur-sikri-travel-guide"],
  ["Old Delhi", "/blog/old-delhi-travel-guide"],
  ["Jaipur", "/blog/jaipur-travel-guide"],
  ["Udaipur", "/blog/udaipur-city-of-lakes-travel-guide"],
  ["Jodhpur", "/blog/jodhpur-travel-guide"],
  ["Chittorgarh", "/blog/chittorgarh-travel-guide"],
  ["Hampi", "/blog/hampi-travel-guide"],
  ["Badami, Aihole and Pattadakal", "/blog/badami-aihole-pattadakal-travel-guide"],
  ["Khajuraho", "/blog/khajuraho-travel-guide"],
  ["Orchha", "/blog/orchha-travel-guide"],
  ["Mandu", "/blog/mandu-travel-guide"],
  ["Sanchi", "/blog/sanchi-travel-guide"],
  ["Konark", "/blog/konark-travel-guide"],
  ["Ajanta and Ellora", "/blog/ajanta-ellora-travel-guide"],
  ["Mahabalipuram", "/blog/mahabalipuram-travel-guide"],
  ["Thanjavur", "/blog/thanjavur-travel-guide"],
  ["Madurai", "/blog/madurai-travel-guide"],
  ["Ahmedabad", "/blog/ahmedabad-travel-guide"],
  ["Patan (Rani ki Vav)", "/blog/patan-travel-guide"],
  ["Dholavira", "/blog/dholavira-travel-guide"],
  ["Golconda", "/blog/golconda-fort-travel-guide"],
  ["Lucknow", "/blog/lucknow-travel-guide"],
  ["Kolkata", "/blog/kolkata-travel-guide"],
  ["Kochi", "/blog/kochi-travel-guide"],
  ["Old Goa", "/blog/old-goa-travel-guide"],
];

const PACKAGES = ["rajasthan", "delhi", "uttar-pradesh", "gujarat", "madhya-pradesh", "karnataka", "tamil-nadu", "odisha"];

const THEMES: { title: string; text: string; href: string; cta: string }[] = [
  { title: "UNESCO World Heritage", text: "India's 45 World Heritage Sites, from the Taj Mahal to the Maratha forts and Sarnath.", href: "/blog/unesco-world-heritage-sites-in-india", cta: "All 45 sites" },
  { title: "Historic cities", text: "Old quarters, bazaars and neighbourhoods where heritage is part of daily life.", href: "/blog/heritage-cities-in-india", cta: "Heritage cities" },
  { title: "Forts and palaces", text: "Hill forts, sea forts and royal palaces across Rajasthan, the Deccan and beyond.", href: "/blog/famous-forts-in-india", cta: "Famous forts" },
  { title: "Archaeology and caves", text: "Harappan cities, Buddhist sites and rock-cut temples, with evidence and tradition kept apart.", href: "/blog/archaeological-sites-in-india", cta: "Archaeological sites" },
  { title: "Arts and crafts", text: "Craft villages, weaving towns, classical dance and music, and regional food.", href: "/blog/handicrafts-of-india", cta: "Handicrafts" },
  { title: "Festivals and living culture", text: "Fairs, festivals and community-led experiences, visited with respect.", href: "/blog/cultural-festivals-in-india", cta: "Cultural festivals" },
];

const FAQS = [
  { q: "What is heritage tourism in India?", a: "Travel to experience India's history and culture: monuments, forts, palaces, archaeological sites and historic cities, as well as living traditions such as crafts, textiles, music, dance, festivals and food." },
  { q: "How many UNESCO World Heritage Sites does India have?", a: "45 as of September 2026: 37 cultural, 7 natural and 1 mixed. The most recent are the Maratha Military Landscapes (2025) and Sarnath (2026)." },
  { q: "Which state is best for heritage tourism?", a: "Rajasthan, Uttar Pradesh, Karnataka, Madhya Pradesh, Gujarat, Maharashtra and Tamil Nadu all have outstanding heritage; the best choice depends on your interests and season." },
  { q: "What is the best time for a heritage trip in India?", a: "October to March for most of the country. Summer is very hot in the plains; the monsoon suits a few places, such as Mandu and Maharashtra's forts." },
  { q: "How many days do I need for a heritage trip?", a: "Five to seven days for the Golden Triangle of Delhi, Agra and Jaipur, and ten to fourteen days for a regional trip such as Rajasthan or South India." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Heritage & Cultural Tourism in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: heritageIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Heritage & Cultural Tourism", item: URL },
      ],
    },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}

function Card({ e, sizes }: { e: AdvIndexEntry; sizes: string }) {
  return (
    <Link href={`/blog/${e.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <span className="relative block h-44 overflow-hidden bg-stone-100">
        <Image src={e.image} alt={e.imageAlt} fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="flex flex-1 flex-col p-5">
        <span className="font-display text-lg font-bold text-stone-950 group-hover:text-forest-700">{e.short}</span>
        <span className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-stone-600">{e.excerpt}</span>
        <span className="mt-auto pt-3 font-sans text-xs font-semibold text-forest-700">Read the guide →</span>
      </span>
    </Link>
  );
}

function Cards({ items, cols = 3 }: { items: AdvIndexEntry[]; cols?: 3 | 4 }) {
  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  const sizes = cols === 4 ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";
  return (
    <ul className={`mt-8 grid gap-5 ${grid}`}>
      {items.map((e) => (
        <li key={e.slug}><Card e={e} sizes={sizes} /></li>
      ))}
    </ul>
  );
}

function Pills({ links }: { links: [string, string][] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2 font-sans text-sm">
      {links.map(([l, h]) => (
        <li key={h}><Link href={h} className="inline-block rounded-full border border-forest-200 bg-white px-4 py-2 font-medium text-stone-800 hover:border-forest-400">{l}</Link></li>
      ))}
    </ul>
  );
}

function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      {intro && <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-600">{intro}</p>}
    </div>
  );
}

function Band({ id, eyebrow, title, intro, items, cols, tone, children }: { id: string; eyebrow: string; title: string; intro?: string; items: string[]; cols?: 3 | 4; tone: "white" | "stone"; children?: React.ReactNode }) {
  return (
    <section className={tone === "white" ? "bg-white py-16" : "bg-stone-50 py-16"}>
      <div className="container-site">
        <SectionHead id={id} eyebrow={eyebrow} title={title} intro={intro} />
        <Cards items={pick(items)} cols={cols} />
        {children}
      </div>
    </section>
  );
}

export default function HeritageCulturalTourismPage() {
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/heritage-cultural-tourism";

  return (
    <>
      <Schema />
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[72vh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={HERO.src} alt={HERO.alt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
          </div>
          <nav className="absolute left-0 right-0 top-24 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-sans text-xs text-white/55">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-white/20">/</li>
              <li className="text-white/35">Heritage &amp; Cultural Tourism</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Heritage &amp; culture</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Heritage &amp; Cultural Tourism in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Forts, palaces, ancient temples, ruined capitals and old cities, alongside the crafts, music, festivals and food that keep India&rsquo;s culture alive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Heritage Trip →</Link>
              <a href="#states" className="btn-outline-light px-7">Explore by state</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2 id="india-heritage">India&rsquo;s heritage</h2>
              <p>
                India&rsquo;s history is visible across more than four thousand years: Harappan cities in Gujarat, Buddhist
                stupas and rock-cut caves, the temple towns of the south, Rajput and Maratha forts, Mughal tombs and
                gardens, sultanate capitals in the Deccan, and colonial-era cities. Forty-five places are UNESCO World
                Heritage Sites, and thousands more are protected by the Archaeological Survey of India and the states.
              </p>
              <p>
                Heritage in India is also living. Weavers, potters and painters work in the same towns their crafts are
                named after, classical dance and music are performed in temples and festivals, and each region&rsquo;s
                food carries its history. Our guides cover both, and separate what the evidence shows from what tradition
                holds, so you can plan a trip that is accurate, respectful and memorable.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                Heritage and cultural tourism in India covers UNESCO sites such as the Taj Mahal, Hampi and Khajuraho,
                the forts and palaces of Rajasthan, historic cities such as Jaipur, Ahmedabad and Varanasi, caves and
                archaeological sites, museums, and living culture: crafts, textiles, dance, music, festivals and food.
                October to March is the best season for most regions.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/how-to-plan-a-heritage-trip-in-india">How to plan a heritage trip →</Link></li>
                <li><Link className="text-link" href="/blog/unesco-world-heritage-sites-in-india">All 45 UNESCO sites →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        <Band id="overview" eyebrow="Start here" title="Where to go and how to plan" items={OVERVIEW} tone="stone" />

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="themes" eyebrow="Explore by theme" title="Ways into India’s heritage" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {THEMES.map((t) => (
                <div key={t.title} className="flex flex-col rounded-2xl border border-stone-200 p-6">
                  <h3 className="font-display text-lg font-bold text-stone-950">{t.title}</h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-stone-600">{t.text}</p>
                  <Link className="text-link mt-4 font-sans text-sm font-semibold" href={t.href}>{t.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Band id="unesco" eyebrow="UNESCO World Heritage Sites" title="Great monuments, one at a time" intro="Visitor guides to individual World Heritage Sites: history, what to see, closures and how to reach." items={UNESCO} cols={4} tone="stone" />

        <Band id="forts" eyebrow="Forts and palaces" title="Forts, palaces and royal cities" intro="Rajasthan’s hill forts, the UNESCO Maratha forts and India’s great palaces, with palace hotels kept separate from palaces you can visit." items={FORTS} tone="white" />

        <Band id="archaeology" eyebrow="Archaeological sites, caves and museums" title="Ancient India" intro="Harappan cities, Buddhist monasteries, rock-cut caves and the museums that hold their finds." items={ANCIENT} tone="stone" />

        <Band id="architecture" eyebrow="Architecture" title="Temples, tombs and colonial-era buildings" intro="How to read India’s great building traditions, and where to see each." items={ARCHITECTURE} cols={4} tone="white" />

        <Band id="cities" eyebrow="Historic cities and heritage trails" title="Old cities, walks and journeys" intro="Old quarters best explored on foot, and the UNESCO toy trains." items={CITIES} tone="stone">
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold text-stone-950">Heritage destination guides</h3>
            <p className="mt-2 max-w-3xl font-sans text-sm text-stone-600">Our destination guides cover each place in depth: sights, how to reach, stays and a day-by-day plan.</p>
            <Pills links={DESTINATIONS} />
          </div>
        </Band>

        <Band id="culture" eyebrow="Arts, crafts, textiles, dance, music and food" title="Living culture" intro="Craft villages and weaving towns, classical and folk performance, and the food heritage of every region." items={CRAFTS} cols={4} tone="white" />

        <Band id="festivals" eyebrow="Cultural festivals" title="Festivals and communities" intro="When and where to go, and how to be a good guest, from Pushkar to Kisama." items={FESTIVALS} cols={4} tone="stone" />

        <Band id="states" eyebrow="State-wise heritage" title="State by state" intro="Each guide covers a state’s UNESCO sites, highlights, crafts, seasons and routes." items={STATES} cols={4} tone="white" />

        <Band id="itineraries" eyebrow="Heritage itineraries" title="Day-by-day routes" intro="Tested routes with drive times, closures to plan around, and shorter versions." items={ITINERARY_PAGES} tone="stone" />

        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p id="packages" className="eyebrow eyebrow-light scroll-mt-24">Heritage tour packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Heritage trips, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from a state, a circuit or a travel style, and we plan the route, stays, guides and pace around your dates.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {packages.map((p) => {
                const prof = getDestinationProfile(p.slug);
                return (
                  <li key={p.slug}>
                    <Link href={`/packages/${p.slug}`} className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-2xl bg-stone-800">
                      <Image src={prof?.heroImage ?? p.image} alt={prof?.heroAlt ?? `${p.name}, India`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      <span className="relative p-4 font-display text-lg font-bold text-white">{p.name} tour packages</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-3 font-sans text-sm">
              {[["Heritage & culture tours", "/packages/heritage-tours"], ["Golden Triangle", "/packages/golden-triangle"], ["Buddhist Circuit", "/packages/buddhist-circuit"], ["Luxury & palace holidays", "/packages/luxury-holidays"], ["Family holidays", "/packages/family-holidays"], ["Group tours", "/packages/group-tours"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Heritage tourism in India: FAQs" />
            <div className="mt-6 divide-y divide-stone-200">
              {FAQS.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-lg font-bold text-stone-950">{f.q}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <div id="plan" className="flex scroll-mt-24 flex-col gap-6 rounded-3xl border border-stone-200 bg-stone-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your heritage trip</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell Kudozz Club which places and themes interest you, your dates and who is travelling, and we&rsquo;ll build a practical route with good guides and time to explore.
                </p>
              </div>
              <Link href={plan} className="btn-primary shrink-0 px-7">Plan My Trip →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
