// /wildlife-tourism: the hub of the Wildlife Tourism cluster. It carries the
// "wildlife tourism in India" pillar copy (see
// docs/wildlife-tourism-cannibalization.md) and links to every wildlife
// article, the existing national park guides that own each park's safari
// intent, their itineraries, and the wildlife packages.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { wildlifeIndex, wildlifeEntry } from "@/lib/wildlife-links";
import type { AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/wildlife-tourism`;
const TITLE = "Wildlife Tourism in India: Parks, Safaris & Planning | Kudozz Club";
const DESCRIPTION =
  "Wildlife tourism in India: national parks, tiger reserves and sanctuaries, safaris, where to see each species, birdwatching, state guides, seasons and responsible travel.";
const HERO = { src: "/images/wildlife/wildlife-tourism-india-tiger.webp", alt: "A Bengal tiger resting in dry grass in Ranthambore National Park" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["wildlife tourism in India", "wildlife travel India", "jungle safari India", "national parks India", "tiger safari India"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const pick = (slugs: string[]) => slugs.map((s) => wildlifeEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));

const DESTINATIONS = ["best-wildlife-destinations-in-india", "where-to-see-wildlife-in-india", "best-national-parks-in-india"];
const TIGER = ["tiger-safari-in-india", "best-tiger-reserves-in-india", "how-to-plan-a-tiger-safari-in-india", "pench-tiger-reserve", "satpura-tiger-reserve", "sariska-tiger-reserve"];
const SPECIES = ["leopard-safari-in-india", "where-to-see-rhinos-in-india", "snow-leopard-tours-in-india", "where-to-see-wildlife-in-india"];
const STATES = [
  "wildlife-tourism-in-madhya-pradesh",
  "wildlife-tourism-in-rajasthan",
  "wildlife-tourism-in-uttarakhand",
  "wildlife-tourism-in-maharashtra",
  "wildlife-tourism-in-karnataka",
  "wildlife-tourism-in-kerala",
  "wildlife-tourism-in-tamil-nadu",
  "wildlife-tourism-in-assam",
  "wildlife-tourism-in-west-bengal",
  "wildlife-tourism-in-odisha",
  "wildlife-tourism-in-gujarat",
];
const GUIDES = ["how-to-plan-a-wildlife-safari-in-india", "best-time-for-wildlife-safari-in-india", "wildlife-safari-packing-list", "wildlife-photography-in-india"];

// Existing destination guides own each park's own safari intent.
const PARK_GUIDES: [string, string][] = [
  ["Jim Corbett", "/blog/jim-corbett-travel-guide"],
  ["Ranthambore", "/blog/ranthambore-travel-guide"],
  ["Kanha", "/blog/kanha-travel-guide"],
  ["Bandhavgarh", "/blog/bandhavgarh-travel-guide"],
  ["Tadoba", "/blog/tadoba-travel-guide"],
  ["Panna", "/blog/panna-travel-guide"],
  ["Kaziranga", "/blog/kaziranga-travel-guide"],
  ["Manas", "/blog/manas-travel-guide"],
  ["Gir", "/blog/gir-national-park-travel-guide"],
  ["Sundarbans", "/blog/sundarbans-travel-guide"],
  ["Kabini (Nagarhole)", "/blog/kabini-travel-guide"],
  ["Bandipur", "/blog/bandipur-travel-guide"],
  ["Periyar (Thekkady)", "/blog/thekkady-travel-guide"],
  ["Dudhwa", "/blog/dudhwa-travel-guide"],
  ["Hemis", "/blog/hemis-travel-guide"],
  ["Namdapha", "/blog/namdapha-travel-guide"],
];

const SANCTUARIES: [string, string][] = [
  ["Pobitora", "/blog/pobitora-travel-guide"],
  ["Wayanad", "/blog/wayanad-travel-guide"],
  ["Kumbhalgarh", "/blog/kumbhalgarh-travel-guide"],
  ["Mount Abu", "/blog/mount-abu-travel-guide"],
  ["Little Rann of Kutch", "/blog/rann-of-kutch-travel-guide"],
  ["Bhitarkanika", "/blog/bhitarkanika-travel-guide"],
];

const BIRDING: [string, string][] = [
  ["Keoladeo, Bharatpur", "/blog/bharatpur-travel-guide"],
  ["Chilika Lake", "/blog/chilika-lake-travel-guide"],
  ["Sultanpur", "/blog/sultanpur-national-park-travel-guide"],
  ["Nameri", "/blog/nameri-travel-guide"],
];

const ITINERARIES: [string, string, string][] = [
  ["Ranthambore", "2 to 3 days", "/blog/ranthambore-travel-guide#visit-plan"],
  ["Jim Corbett", "2 to 3 days", "/blog/jim-corbett-travel-guide#visit-plan"],
  ["Kanha", "3 days", "/blog/kanha-travel-guide#itinerary"],
  ["Bandhavgarh", "3 days", "/blog/bandhavgarh-travel-guide#itinerary"],
  ["Tadoba", "2 to 3 days", "/blog/tadoba-travel-guide#itinerary"],
  ["Kaziranga", "3 days", "/blog/kaziranga-travel-guide#itinerary"],
  ["Gir", "2 days", "/blog/gir-national-park-travel-guide#itinerary"],
  ["Kabini", "2 to 3 days", "/blog/kabini-travel-guide#itinerary"],
];

const PACKAGES = ["madhya-pradesh", "rajasthan", "uttarakhand", "assam", "karnataka", "gujarat", "maharashtra", "kerala"];

const FAQS = [
  { q: "Which is the best place for wildlife tourism in India?", a: "It depends on the animal. The central Indian tiger reserves, Ranthambore and Corbett for tigers; Gir for Asiatic lions; Kaziranga for rhinos; Jawai and Kabini for leopards; Hemis for snow leopards; Keoladeo for birds." },
  { q: "When is the best time for a wildlife safari in India?", a: "Most parks are open from October to June. March to June is often best for sightings; November to February is cooler and best for birds. Most tiger reserve cores close from July to September." },
  { q: "How many national parks and tiger reserves does India have?", a: "About 107 national parks, 573 wildlife sanctuaries and 58 tiger reserves, according to the most recent official figures (2025)." },
  { q: "How do I book a safari in India?", a: "Through each park's official forest department portal, often 90 to 120 days ahead, or through a trusted operator. Carry the ID used for booking." },
  { q: "Are wildlife sightings guaranteed?", a: "No. Animals are wild and move freely. Several drives in one park give the best chance, and the forest is worth seeing for itself." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Wildlife Tourism in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: wildlifeIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Wildlife Tourism", item: URL },
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

export default function WildlifeTourismPage() {
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/wildlife-tourism";
  const sanctuaries = wildlifeEntry("best-wildlife-sanctuaries-in-india");
  const safaris = wildlifeEntry("best-wildlife-safaris-in-india");
  const birding = wildlifeEntry("birdwatching-in-india");
  const responsible = wildlifeEntry("responsible-wildlife-tourism-in-india");

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
              <li className="text-white/35">Wildlife Tourism</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Wildlife tourism</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Wildlife Tourism in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Tigers, lions, rhinos, leopards, elephants and more than 1,300 kinds of birds: find the right park, season and safari for your trip.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Wildlife Trip →</Link>
              <a href="#states" className="btn-outline-light px-7">Explore by state</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2>Wildlife tourism in India</h2>
              <p>
                India is one of the few countries where you can see tigers, Asiatic lions, one-horned rhinos, Asian
                elephants, leopards and snow leopards in the wild. Its protected areas include about 107 national
                parks, 573 wildlife sanctuaries and 58 tiger reserves, from the Himalaya and the terai grasslands to the
                forests of central India, the Western Ghats, the Rann of Kutch and the Sundarbans mangroves.
              </p>
              <p>
                Most parks allow visitors only on official safaris along set routes, with limited vehicles in each zone,
                so planning matters. Choose a park for the animal you most want to see, check its season (most close
                their core zones in the monsoon), book permits early on the official portal, and allow several drives.
                Sightings are never guaranteed, but the forests themselves are worth the trip.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                For tigers, go to Bandhavgarh, Kanha, Pench or Tadoba in central India, or Ranthambore and Corbett in
                the north. Gir is the only wild home of Asiatic lions, Kaziranga has most of the world&rsquo;s
                one-horned rhinos, and Keoladeo is famous for winter birds. Visit between October and June, and book
                permits as soon as they open.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/best-time-for-wildlife-safari-in-india">When to go, month by month →</Link></li>
                <li><Link className="text-link" href="/blog/how-to-plan-a-wildlife-safari-in-india">How to plan a wildlife safari →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 1. Best wildlife destinations */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="destinations" eyebrow="Best wildlife destinations" title="Where to go" intro="Start with the animals you most want to see, then choose the park." />
            <Cards items={pick(DESTINATIONS)} />
          </div>
        </section>

        {/* 2. National parks */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="national-parks" eyebrow="National parks" title="India's national parks" intro="Our destination guides cover each park's safari zones, seasons, stays and budgets." />
            <Pills links={PARK_GUIDES} />
            <p className="mt-6 font-sans text-sm"><Link className="text-link font-semibold" href="/blog/best-national-parks-in-india">Best national parks in India →</Link></p>
          </div>
        </section>

        {/* 3. Tiger reserves */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="tiger-reserves" eyebrow="Tiger reserves" title="Tiger safaris" intro="India has about three-quarters of the world's wild tigers, spread across 58 tiger reserves." />
            <Cards items={pick(TIGER)} />
          </div>
        </section>

        {/* 4 & 5. Sanctuaries and safaris */}
        <section className="bg-white py-16">
          <div className="container-site grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHead id="sanctuaries" eyebrow="Wildlife sanctuaries" title="Quieter protected areas" intro="Sanctuaries are often less crowded, and some are the best places for particular species." />
              {sanctuaries && <div className="mt-6 max-w-md"><Card e={sanctuaries} sizes="(min-width: 1024px) 40vw, 100vw" /></div>}
              <Pills links={SANCTUARIES} />
            </div>
            <div>
              <SectionHead id="safaris" eyebrow="Wildlife safaris" title="Jeep, canter, boat and on foot" intro="Jeep safaris are the standard, but boats, walks and even cycle-rickshaws suit some parks better." />
              {safaris && <div className="mt-6 max-w-md"><Card e={safaris} sizes="(min-width: 1024px) 40vw, 100vw" /></div>}
            </div>
          </div>
        </section>

        {/* 6. By species */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="species" eyebrow="Wildlife by species" title="Where to see each animal" />
            <Cards items={pick(SPECIES)} cols={4} />
          </div>
        </section>

        {/* 7. Birdwatching */}
        <section className="bg-forest-50 py-16">
          <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHead id="birdwatching" eyebrow="Birdwatching" title="Birding in India" intro="Winter wetlands, Himalayan forests and Western Ghats endemics, with November to February the main season." />
              <Pills links={BIRDING} />
            </div>
            {birding && <Card e={birding} sizes="(min-width: 1024px) 50vw, 100vw" />}
          </div>
        </section>

        {/* 8. By state */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="states" eyebrow="Wildlife by state" title="State by state" intro="Each guide compares the parks and sanctuaries in a state, with seasons, stays and sample routes." />
            <Cards items={pick(STATES)} cols={4} />
          </div>
        </section>

        {/* 9. Guides */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="guides" eyebrow="Wildlife travel guides" title="Plan a better safari" />
            <Cards items={pick(GUIDES)} cols={4} />
          </div>
        </section>

        {/* 10. Itineraries */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="itineraries" eyebrow="Wildlife itineraries" title="Day-by-day plans" intro="Each destination guide includes a day-by-day plan; our state guides add multi-park routes." />
            <ul className="mt-8 grid gap-3 font-sans text-sm sm:grid-cols-2 lg:grid-cols-4">
              {ITINERARIES.map(([name, days, href]) => (
                <li key={href}>
                  <Link href={href} className="block rounded-xl border border-stone-200 p-4 hover:border-forest-400">
                    <span className="block font-display text-base font-bold text-stone-950">{name}</span>
                    <span className="text-stone-600">{days}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. Responsible */}
        <section className="bg-forest-50 py-16">
          <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHead id="responsible" eyebrow="Responsible wildlife tourism" title="Travel in a way that helps" intro="Stay in the vehicle, keep quiet, never feed or bait animals, choose ethical operators and support community-run guides and homestays." />
            </div>
            {responsible && <Card e={responsible} sizes="(min-width: 1024px) 50vw, 100vw" />}
          </div>
        </section>

        {/* 12. Packages */}
        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p className="eyebrow eyebrow-light">Wildlife tour packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Wildlife holidays, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from a state or a travel style, and we quote for your dates and group.
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
              {[["Wildlife tours", "/packages/wildlife-tours"], ["Family holidays", "/packages/family-holidays"], ["Honeymoon", "/packages/honeymoon"], ["Luxury holidays", "/packages/luxury-holidays"], ["Weekend getaways", "/packages/weekend-getaways"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Wildlife tourism in India: FAQs" />
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

        {/* 13. Plan */}
        <section className="bg-white py-16">
          <div className="container-site">
            <div id="plan" className="flex scroll-mt-24 flex-col gap-6 rounded-3xl border border-stone-200 bg-stone-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your wildlife trip</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell Kudozz Club your destination, dates, budget and travel style, and we&rsquo;ll plan safaris, stays and transfers around it.
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
