// /hill-station-travel: the hub of the Hill Station Travel cluster. It carries the
// "hill station travel in India" pillar copy (hill-station travel, hill-station tourism and
// mountain travel are one intent; see docs/hill-station-cannibalization.md) and links to every
// hill-station article, the existing destination guides that own each place, the itineraries
// and the hill-station packages.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { hillsIndex, hillsEntry } from "@/lib/hills-links";
import type { AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/hill-station-travel`;
const TITLE = "Hill Station Travel in India: Where and When to Go | Kudozz Club";
const DESCRIPTION =
  "Hill station travel in India: the best hill stations by region and season, snow, monsoon and summer escapes, couples, families, weekends, itineraries and packages.";
const HERO = { src: "/images/hills/hill-station-travel-india-kanchenjunga-darjeeling.webp", alt: "Kanchenjunga seen from Tiger Hill near Darjeeling" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["hill station travel India", "hill stations in India", "best hill stations in India", "mountain travel India", "hill station tourism"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const pick = (slugs: string[]) => slugs.map((s) => hillsEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));

const OVERVIEW = ["best-hill-stations-in-india", "best-mountain-destinations-in-india", "how-to-plan-a-hill-station-trip"];
const REGIONS = ["himalayan-hill-stations", "hill-stations-in-northeast-india", "hill-stations-in-south-india", "hill-stations-in-western-and-central-india"];
const SEASONS = ["summer-hill-stations-in-india", "winter-hill-stations-in-india", "places-to-see-snow-in-india", "monsoon-hill-stations-in-india"];
const TRAVELLERS = ["hill-stations-for-couples-in-india", "hill-stations-for-families-in-india", "budget-hill-stations-in-india", "luxury-hill-holidays-in-india"];
const WEEKEND = ["hill-stations-near-delhi", "hill-stations-near-mumbai", "hill-stations-near-bengaluru", "hill-stations-near-chennai", "hill-stations-near-kolkata"];
const THEMES = ["mountain-road-trips-in-india", "tea-tourism-in-india", "coffee-plantation-tourism-in-india", "hill-station-packing-list", "responsible-mountain-travel-in-india"];
const ITINERARY_PAGES = ["shimla-manali-itinerary", "uttarakhand-hill-stations-itinerary", "kashmir-itinerary", "darjeeling-sikkim-itinerary", "south-india-hill-stations-itinerary"];
const STATES = [
  "hill-stations-in-himachal-pradesh",
  "hill-stations-in-uttarakhand",
  "hill-stations-in-jammu-and-kashmir",
  "hill-stations-in-sikkim",
  "hill-stations-in-west-bengal",
  "hill-stations-in-meghalaya",
  "hill-stations-in-tamil-nadu",
  "hill-stations-in-kerala",
  "hill-stations-in-karnataka",
  "hill-stations-in-maharashtra",
];

// Existing destination guides own each hill station's own intent.
const DESTINATIONS: [string, string][] = [
  ["Shimla", "/blog/shimla-travel-guide"],
  ["Manali", "/blog/manali-travel-guide"],
  ["Dharamshala", "/blog/dharamshala-travel-guide"],
  ["Dalhousie", "/blog/dalhousie-travel-guide"],
  ["Kasauli", "/blog/kasauli-travel-guide"],
  ["Mussoorie", "/blog/mussoorie-travel-guide"],
  ["Nainital", "/blog/nainital-travel-guide"],
  ["Kausani", "/blog/kausani-travel-guide"],
  ["Auli", "/blog/auli-travel-guide"],
  ["Gulmarg", "/blog/gulmarg-travel-guide"],
  ["Pahalgam", "/blog/pahalgam-travel-guide"],
  ["Srinagar", "/blog/srinagar-travel-guide"],
  ["Darjeeling", "/blog/darjeeling-travel-guide"],
  ["Kalimpong", "/blog/kalimpong-travel-guide"],
  ["Gangtok", "/blog/gangtok-travel-guide"],
  ["Pelling", "/blog/pelling-travel-guide"],
  ["Shillong", "/blog/shillong-travel-guide"],
  ["Tawang", "/blog/tawang-travel-guide"],
  ["Ooty", "/blog/ooty-travel-guide"],
  ["Kodaikanal", "/blog/kodaikanal-travel-guide"],
  ["Munnar", "/blog/munnar-travel-guide"],
  ["Wayanad", "/blog/wayanad-travel-guide"],
  ["Coorg", "/blog/coorg-travel-guide"],
  ["Chikmagalur", "/blog/chikmagalur-travel-guide"],
  ["Mahabaleshwar", "/blog/mahabaleshwar-travel-guide"],
  ["Matheran", "/blog/matheran-travel-guide"],
  ["Mount Abu", "/blog/mount-abu-travel-guide"],
  ["Pachmarhi", "/blog/pachmarhi-travel-guide"],
];

const ACTIVITIES: [string, string][] = [
  ["Trekking", "/blog/trekking-in-india"],
  ["Winter treks", "/blog/winter-treks-in-india"],
  ["Skiing", "/blog/skiing-in-india"],
  ["Paragliding", "/blog/paragliding-in-india"],
  ["Camping", "/blog/camping-in-india"],
  ["River rafting", "/blog/river-rafting-in-india"],
  ["Mountain biking", "/blog/mountain-biking-in-india"],
  ["Toy trains", "/blog/mountain-railways-of-india"],
  ["Birdwatching", "/blog/birdwatching-in-india"],
  ["National parks", "/blog/best-national-parks-in-india"],
  ["Snow leopard tours", "/blog/snow-leopard-tours-in-india"],
  ["Buddhist monasteries", "/blog/buddhist-tourism-in-india"],
];

const PACKAGES = ["himachal-pradesh", "uttarakhand", "kashmir", "sikkim", "meghalaya", "kerala", "tamil-nadu", "karnataka"];

const FAQS = [
  { q: "What are the best hill stations in India?", a: "Shimla, Manali, Mussoorie, Nainital, Gulmarg, Darjeeling, Gangtok, Shillong, Ooty, Kodaikanal, Munnar and Coorg are among the best known; quieter choices include Kausani, Kalimpong and Coonoor." },
  { q: "Which hill stations are best in summer?", a: "The Himalayan towns of Himachal, Uttarakhand and Kashmir, Darjeeling and Sikkim, and the Nilgiris, Kodaikanal and Munnar in the south, from April to June." },
  { q: "Where can I see snow in India?", a: "Gulmarg, Solang near Manali, Kufri and Narkanda, Auli, Tsomgo Lake in Sikkim and Tawang are among the likeliest places, mostly from late December to February; snowfall is never guaranteed." },
  { q: "Which hill station is best for couples?", a: "Gulmarg, Pahalgam, Manali, Kausani, Darjeeling, Pelling, Munnar and Coorg are popular with couples; smaller towns are quieter." },
  { q: "What are the best hill stations near Delhi?", a: "Lansdowne, Kasauli, Mussoorie, Nainital and Shimla are all within about 250 to 350 km." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Hill Station Travel in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: hillsIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Hill Station Travel", item: URL },
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

export default function HillStationTravelPage() {
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/hill-station-travel";

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
              <li className="text-white/35">Hill Station Travel</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Hills and mountains</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Hill Station Travel in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Himalayan towns, tea and coffee country, snow resorts and monsoon hills: choose the right hill for the month, and plan the trip around it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Hill Holiday →</Link>
              <a href="#regions" className="btn-outline-light px-7">Explore by region</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2 id="about">India&rsquo;s hills</h2>
              <p>
                India&rsquo;s hill stations run from the Himalaya to the Western and Eastern Ghats. Some, like Shimla, Mussoorie,
                Darjeeling and Ooty, grew in the 19th century as summer retreats; others are tea and coffee towns, Tibetan
                settlements or quiet ridges with some of the finest mountain views anywhere. Beyond them lie high valleys such
                as Spiti and Ladakh, which are mountain destinations rather than hill stations.
              </p>
              <p>
                The right choice depends on the month. The Himalaya is best from March to June and October to December, with
                snow likely at higher resorts in mid-winter; the southern hills are pleasant for most of the year; and the
                Western Ghats and Meghalaya come alive in the monsoon. Our guides explain the seasons, roads, permits and
                stays, so you can plan a trip that works.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                India&rsquo;s best-known hill stations include Shimla, Manali, Mussoorie, Nainital, Gulmarg, Darjeeling,
                Gangtok, Shillong, Ooty, Kodaikanal, Munnar and Coorg. Go to the Himalaya from March to June or October to
                December, the southern hills from October to May, and the Western Ghats in the monsoon. Snow is likeliest in
                January and February at higher resorts, but never guaranteed.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/best-hill-stations-in-india">Best hill stations in India →</Link></li>
                <li><Link className="text-link" href="/blog/how-to-plan-a-hill-station-trip">How to plan a hill station trip →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="best" eyebrow="Start here" title="Best hill stations and how to plan" />
            <Cards items={pick(OVERVIEW)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="regions" eyebrow="By region" title="Himalayan, Northeast, South and West" intro="Four regions, four very different kinds of hill holiday." />
            <Cards items={pick(REGIONS)} cols={4} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="states" eyebrow="State by state" title="Hill stations by state" intro="Each guide compares a state's hill stations, with seasons, access and routes." />
            <Cards items={pick(STATES)} cols={4} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="seasons" eyebrow="By season" title="Summer, winter and snow, and the monsoon" intro="Where to go in each season, with honest notes on crowds, roads and snowfall." />
            <Cards items={pick(SEASONS)} cols={4} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="travellers" eyebrow="By traveller" title="Couples, families, budget and luxury" />
            <Cards items={pick(TRAVELLERS)} cols={4} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="weekend" eyebrow="Weekend getaways" title="Hill stations near the big cities" intro="Realistic weekend and short-trip options, with trains and drive times." />
            <Cards items={pick(WEEKEND)} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="themes" eyebrow="Road trips, plantations and planning" title="More ways into the hills" />
            <Cards items={pick(THEMES)} />
            <div className="mt-10">
              <h3 id="adventure" className="scroll-mt-24 font-display text-xl font-bold text-stone-950">Adventure, nature and wildlife</h3>
              <p className="mt-2 max-w-3xl font-sans text-sm text-stone-600">Treks, skiing, paragliding and forests, from our Adventure, Wildlife, Heritage and Spiritual guides.</p>
              <Pills links={ACTIVITIES} />
            </div>
          </div>
        </section>

        <section className="bg-forest-50 py-16">
          <div className="container-site">
            <SectionHead id="guides" eyebrow="Hill station guides" title="Destination guides" intro="Each guide covers the place in depth: best time, how to reach, things to do, stays and a day plan." />
            <Pills links={DESTINATIONS} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="itineraries" eyebrow="Itineraries" title="Day-by-day hill routes" intro="Tested multi-destination routes with drive times, seasons and variations." />
            <Cards items={pick(ITINERARY_PAGES)} />
          </div>
        </section>

        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p id="packages" className="eyebrow eyebrow-light scroll-mt-24">Hill station tour packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Hill holidays, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from a state, a travel style or a circuit, and we plan the route, stays and realistic mountain driving days around your dates.
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
              {[["Hill station holidays", "/packages/hill-station-holidays"], ["Honeymoon", "/packages/honeymoon"], ["Family holidays", "/packages/family-holidays"], ["Luxury holidays", "/packages/luxury-holidays"], ["Budget holidays", "/packages/budget-holidays"], ["Weekend getaways", "/packages/weekend-getaways"], ["Northeast India", "/packages/northeast-india"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Hill station travel in India: FAQs" />
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
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your hill holiday</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell Kudozz Club which hills you are considering, your dates and who is travelling, and we&rsquo;ll turn them into a practical itinerary with realistic drives and the right stays.
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
