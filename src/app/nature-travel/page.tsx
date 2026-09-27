// /nature-travel: the hub of the Nature Travel cluster. It carries the "nature travel in India"
// pillar copy (nature travel, nature tourism and nature trips are one intent; see
// docs/nature-travel-cannibalization.md) and links to every nature article, the existing
// destination guides that own each place, the itineraries and the nature packages. Species,
// parks and birding stay with Wildlife; hill towns with Hills; activities with Adventure.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { natureIndex, natureEntry } from "@/lib/nature-links";
import type { AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/nature-travel`;
const TITLE = "Nature Travel in India: Forests, Waterfalls, Lakes | Kudozz Club";
const DESCRIPTION =
  "Nature travel in India: the best forests, waterfalls, lakes, valleys and natural wonders, the Western Ghats, Northeast and Himalaya, eco tourism, retreats and trips.";
const HERO = { src: "/images/blogs/uttarakhand/valley-of-flowers/alpine-meadow-snow-peaks-valley-of-flowers.webp", alt: "Alpine meadow below glaciers and snow peaks in the Valley of Flowers, Uttarakhand" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["nature travel India", "nature tourism India", "best nature destinations in India", "nature trips India", "eco tourism India"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const pick = (slugs: string[]) => slugs.map((s) => natureEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));

const OVERVIEW = ["best-nature-destinations-in-india", "natural-wonders-of-india", "how-to-plan-a-nature-trip-in-india"];
const LANDSCAPES = ["forest-destinations-in-india", "waterfalls-in-india", "lakes-in-india", "riverside-destinations-in-india", "valleys-in-india", "natural-caves-in-india"];
const REGIONS = ["himalayan-nature-travel", "western-ghats-nature-travel", "nature-travel-in-northeast-india"];
const STATES = [
  "nature-travel-in-kerala",
  "nature-travel-in-karnataka",
  "nature-travel-in-meghalaya",
  "nature-travel-in-uttarakhand",
  "nature-travel-in-himachal-pradesh",
  "nature-travel-in-odisha",
  "nature-travel-in-madhya-pradesh",
];
const ECO = ["eco-tourism-in-india", "biodiversity-hotspots-in-india", "flower-valleys-and-blooms-in-india", "village-tourism-in-india"];
const SEASONAL = ["best-time-for-nature-travel-in-india"];
const TRAVELLERS = ["nature-getaways-for-couples-in-india", "nature-trips-for-families-in-india", "nature-retreats-in-india", "offbeat-nature-destinations-in-india", "nature-photography-in-india"];
const ITINERARY_PAGES = ["meghalaya-nature-itinerary", "kerala-nature-itinerary", "western-ghats-nature-itinerary"];

// Seasonal pages owned by other clusters (monsoon hills, summer and winter).
const SEASON_LINKS: [string, string][] = [
  ["Monsoon hill stations", "/blog/monsoon-hill-stations-in-india"],
  ["Monsoon treks", "/blog/monsoon-treks-in-india"],
  ["Summer hill stations", "/blog/summer-hill-stations-in-india"],
  ["Winter hill stations", "/blog/winter-hill-stations-in-india"],
  ["Best time for wildlife safaris", "/blog/best-time-for-wildlife-safari-in-india"],
];

// Budget and luxury are merged into the retreats page; these are the related pages elsewhere.
const STYLE_LINKS: [string, string][] = [
  ["Budget hill stations", "/blog/budget-hill-stations-in-india"],
  ["Luxury hill holidays", "/blog/luxury-hill-holidays-in-india"],
  ["Hill stations for couples", "/blog/hill-stations-for-couples-in-india"],
  ["Hill stations for families", "/blog/hill-stations-for-families-in-india"],
];

// Existing destination guides own each natural attraction's own intent.
const DESTINATIONS: [string, string][] = [
  ["Valley of Flowers", "/blog/valley-of-flowers-travel-guide"],
  ["Dzukou Valley", "/blog/dzukou-valley-travel-guide"],
  ["Spiti Valley", "/blog/spiti-valley-travel-guide"],
  ["Tirthan Valley", "/blog/tirthan-valley-travel-guide"],
  ["Ziro Valley", "/blog/ziro-valley-arunachal-travel-guide"],
  ["Nubra Valley", "/blog/nubra-valley-travel-guide"],
  ["Araku Valley", "/blog/araku-valley-travel-guide"],
  ["Jog Falls", "/blog/jog-falls-travel-guide"],
  ["Dudhsagar Falls", "/blog/dudhsagar-falls-travel-guide"],
  ["Athirappilly", "/blog/athirappilly-travel-guide"],
  ["Cherrapunji", "/blog/cherrapunji-travel-guide"],
  ["Nongriat", "/blog/nongriat-travel-guide"],
  ["Dawki", "/blog/dawki-travel-guide"],
  ["Pangong Lake", "/blog/pangong-lake-travel-guide"],
  ["Tso Moriri", "/blog/tso-moriri-travel-guide"],
  ["Chilika Lake", "/blog/chilika-lake-travel-guide"],
  ["Loktak Lake", "/blog/loktak-lake-travel-guide"],
  ["Prashar Lake", "/blog/prashar-lake-travel-guide"],
  ["Gurudongmar Lake", "/blog/gurudongmar-lake-travel-guide"],
  ["Majuli", "/blog/majuli-travel-guide"],
  ["Kumarakom", "/blog/kumarakom-travel-guide"],
  ["Munroe Island", "/blog/munroe-island-travel-guide"],
  ["Borra Caves", "/blog/borra-caves-travel-guide"],
  ["Belum Caves", "/blog/belum-caves-travel-guide"],
  ["Gandikota", "/blog/gandikota-travel-guide"],
  ["Rann of Kutch", "/blog/rann-of-kutch-travel-guide"],
  ["Kaas Plateau", "/blog/kaas-plateau-travel-guide"],
  ["Sundarbans", "/blog/sundarbans-travel-guide"],
  ["Wayanad", "/blog/wayanad-travel-guide"],
  ["Thekkady", "/blog/thekkady-travel-guide"],
];

const ACTIVITIES: [string, string][] = [
  ["Birdwatching", "/blog/birdwatching-in-india"],
  ["National parks", "/blog/best-national-parks-in-india"],
  ["Wildlife sanctuaries", "/blog/best-wildlife-sanctuaries-in-india"],
  ["Responsible wildlife tourism", "/blog/responsible-wildlife-tourism-in-india"],
  ["Trekking", "/blog/trekking-in-india"],
  ["Camping", "/blog/camping-in-india"],
  ["River rafting", "/blog/river-rafting-in-india"],
  ["Kayaking", "/blog/kayaking-in-india"],
  ["Best mountain destinations", "/blog/best-mountain-destinations-in-india"],
  ["Tea tourism", "/blog/tea-tourism-in-india"],
  ["Tribal tourism", "/blog/tribal-tourism-in-india"],
  ["Rock-cut caves", "/blog/rock-cut-caves-in-india"],
];

const PACKAGES = ["kerala", "karnataka", "meghalaya", "uttarakhand", "himachal-pradesh", "odisha", "madhya-pradesh", "sikkim"];

const FAQS = [
  { q: "What are the best nature destinations in India?", a: "The Valley of Flowers, Spiti and Ladakh's lakes in the Himalaya; Meghalaya's root bridges and waterfalls; the Western Ghats of Kerala and Karnataka; Chilika Lake; the Rann of Kutch; and valleys such as Ziro and Dzukou are among the best." },
  { q: "When is the best time for nature travel in India?", a: "October to March suits most regions. April to June is best for the Himalaya, and July to September for waterfalls, the Western Ghats and the Valley of Flowers." },
  { q: "Where can I see waterfalls in India?", a: "Meghalaya around Sohra, Jog Falls and the Western Ghats of Karnataka, Athirappilly in Kerala, Dudhsagar on the Goa border and Chitrakote in Chhattisgarh, best from July to October." },
  { q: "What is eco tourism in India?", a: "Travel that supports conservation and local communities: village homestays, community-run forests, guided walks with local naturalists and low-impact stays. Many claims are marketing, so ask specific questions." },
  { q: "Which is the best state for nature lovers?", a: "Kerala, Meghalaya, Uttarakhand, Himachal Pradesh and Karnataka are the most rewarding; Sikkim, Arunachal Pradesh and Odisha are quieter alternatives." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Nature Travel in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: natureIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Nature Travel", item: URL },
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

export default function NatureTravelPage() {
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/nature-travel";

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
              <li className="text-white/35">Nature Travel</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Forests, waterfalls and valleys</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Nature Travel in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Rainforests and root bridges, Himalayan meadows and high lakes, monsoon waterfalls and quiet backwaters: find the landscape, pick the season, and plan the trip around it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Nature Trip →</Link>
              <a href="#landscapes" className="btn-outline-light px-7">Explore by landscape</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2 id="about">India&rsquo;s natural landscapes</h2>
              <p>
                Few countries pack so many landscapes into one border. The Himalaya holds alpine meadows, glacial lakes and a
                high cold desert; the Western Ghats, a UNESCO World Heritage Site, run the length of the west coast with
                rainforest, grassland and waterfalls; and the Northeast, where rain-soaked plateaus meet the eastern Himalaya,
                is one of the most biodiverse regions in Asia. Between them lie river gorges, salt flats, lagoons and caves.
              </p>
              <p>
                Nature travel here is about matching the place to the season. Waterfalls need the monsoon, Himalayan passes
                open only in summer, and forests and lakes are at their best in the cool, dry months. Our guides cover the
                landscapes, regions and states, with honest notes on seasons, permits and stays. For animals and birding, see
                our wildlife guides; for hill towns, our hill-station guides.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                India&rsquo;s best nature destinations include the Valley of Flowers, Spiti and Ladakh&rsquo;s high lakes,
                Meghalaya&rsquo;s root bridges and waterfalls, the Western Ghats of Kerala and Karnataka, Chilika Lake, the
                Rann of Kutch and valleys such as Ziro and Dzukou. October to March suits most regions, April to June the
                Himalaya, and July to September the waterfalls and flower valleys.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/best-nature-destinations-in-india">Best nature destinations in India →</Link></li>
                <li><Link className="text-link" href="/blog/best-time-for-nature-travel-in-india">Best time for nature travel →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="best" eyebrow="Start here" title="Best nature destinations and natural wonders" />
            <Cards items={pick(OVERVIEW)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="landscapes" eyebrow="By landscape" title="Forests, waterfalls, lakes, rivers, valleys and caves" intro="Each guide compares the best places for one kind of landscape, with seasons and access." />
            <Cards items={pick(LANDSCAPES)} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="regions" eyebrow="By region" title="The Himalaya, the Western Ghats and the Northeast" intro="India's three great nature regions, each with its own seasons and character." />
            <Cards items={pick(REGIONS)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="states" eyebrow="State by state" title="Nature travel by state" intro="The states where nature is the main reason to go, with highlights, seasons and practical tips." />
            <Cards items={pick(STATES)} cols={4} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="eco" eyebrow="Eco tourism and biodiversity" title="Eco tourism, biodiversity, blooms and villages" intro="Travel that supports the places you visit, from community forests to flower seasons." />
            <Cards items={pick(ECO)} cols={4} />
            <div className="mt-10">
              <h3 id="birdwatching" className="scroll-mt-24 font-display text-xl font-bold text-stone-950">Birdwatching and wildlife</h3>
              <p className="mt-2 max-w-3xl font-sans text-sm text-stone-600">Birding, parks and safaris are covered in our wildlife guides, alongside treks, rafting and caves from our Adventure and Heritage guides.</p>
              <Pills links={ACTIVITIES} />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="seasonal" eyebrow="By season" title="When to go" intro="A month-by-month guide, plus our seasonal guides to the hills and parks." />
            <Cards items={pick(SEASONAL)} />
            <Pills links={SEASON_LINKS} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="travellers" eyebrow="By traveller" title="Couples, families, retreats and offbeat places" intro="Budget and luxury stays are compared in the retreats guide." />
            <Cards items={pick(TRAVELLERS)} />
            <Pills links={STYLE_LINKS} />
          </div>
        </section>

        <section className="bg-forest-50 py-16">
          <div className="container-site">
            <SectionHead id="guides" eyebrow="Nature destination guides" title="Destination guides" intro="Each guide covers the place in depth: best time, how to reach, things to do, stays and a day plan." />
            <Pills links={DESTINATIONS} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="itineraries" eyebrow="Itineraries" title="Day-by-day nature routes" intro="Multi-stop routes with drive times, seasons and variations." />
            <Cards items={pick(ITINERARY_PAGES)} />
          </div>
        </section>

        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p id="packages" className="eyebrow eyebrow-light scroll-mt-24">Nature tour packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Nature holidays, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from a state, a travel style or a circuit, and we plan the route, stays and realistic travel days around the season and your dates.
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
              {[["Nature holidays", "/packages/nature-holidays"], ["Wildlife tours", "/packages/wildlife-tours"], ["Hill station holidays", "/packages/hill-station-holidays"], ["Family holidays", "/packages/family-holidays"], ["Honeymoon", "/packages/honeymoon"], ["Budget holidays", "/packages/budget-holidays"], ["Luxury holidays", "/packages/luxury-holidays"], ["Northeast India", "/packages/northeast-india"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Nature travel in India: FAQs" />
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
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your nature trip</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell Kudozz Club which landscapes you want to see, your dates and who is travelling, and we&rsquo;ll turn them into a practical itinerary timed for the right season.
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
