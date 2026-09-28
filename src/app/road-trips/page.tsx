// /road-trips: the hub of the Road Trips cluster. It carries the "road trips in India" pillar copy
// (road trips, road travel and road-trip holidays are one intent; see docs/road-trips-cannibalization.md)
// and links to every road-trip article, the existing route owners in other clusters (mountain road
// trips, the Leh Ladakh guide, motorcycle trips), itineraries and packages. Route pages own the
// journey; destination guides own what to do on arrival.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { roadtripsIndex, roadtripsEntry } from "@/lib/roadtrips-links";
import type { AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/road-trips`;
const TITLE = "Road Trips in India: Routes, Regions and Planning | Kudozz Club";
const DESCRIPTION =
  "Road trips in India: the best routes, Himalayan passes, Rajasthan, South India, the Northeast, ghats and coasts, weekend drives, self-drive, costs and planning.";
const HERO = { src: "/images/roadtrips/road-trips-india-manali-leh-highway.webp", alt: "Herders move sheep along the Manali–Leh highway above Manali, Himachal Pradesh" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["road trips in India", "best road trips in India", "road trip routes India", "self drive India", "weekend road trips"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const pick = (slugs: string[]) => slugs.map((s) => roadtripsEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));

const OVERVIEW = ["best-road-trips-in-india", "how-to-plan-a-road-trip-in-india", "self-drive-trips-in-india"];
const HIMALAYA = ["road-trips-in-himachal-pradesh", "road-trips-in-uttarakhand", "delhi-to-manali-road-trip", "delhi-to-shimla-road-trip", "delhi-to-rishikesh-road-trip", "manali-to-leh-road-trip", "srinagar-to-leh-road-trip", "spiti-valley-road-trip"];
const RAJASTHAN = ["rajasthan-road-trip", "winter-road-trips-in-india"];
const SOUTH = ["south-india-road-trips", "kerala-road-trip", "bengaluru-to-coorg-road-trip", "bengaluru-to-ooty-road-trip", "kochi-to-munnar-road-trip", "chennai-to-pondicherry-road-trip", "bengaluru-to-goa-road-trip"];
const NORTHEAST = ["northeast-india-road-trips", "guwahati-to-tawang-road-trip"];
const GHATS_COAST = ["western-ghats-road-trips", "coastal-road-trips-in-india", "mumbai-to-goa-road-trip", "monsoon-road-trips-in-india"];
const WEEKEND = ["road-trips-from-delhi", "road-trips-from-mumbai", "road-trips-from-bengaluru", "road-trips-from-chennai", "road-trips-from-hyderabad", "road-trips-from-kolkata"];
const PLANNING = ["road-trip-cost-in-india", "road-trip-packing-list", "road-trip-safety-in-india"];
const THEMES = ["wildlife-road-trips-in-india", "food-road-trips-in-india", "road-trips-for-families-in-india", "road-trips-for-couples-in-india"];

// Canonical owners elsewhere on the site for mountain, Ladakh and motorcycle intents.
const HIMALAYA_LINKS: [string, string][] = [
  ["Mountain road trips", "/blog/mountain-road-trips-in-india"],
  ["Leh Ladakh road trip guide", "/blog/leh-ladakh-road-trip-travel-guide"],
  ["Kashmir itinerary", "/blog/kashmir-itinerary"],
  ["Darjeeling and Sikkim itinerary", "/blog/darjeeling-sikkim-itinerary"],
];

const BIKE_LINKS: [string, string][] = [
  ["Best motorcycle trips in India", "/blog/best-motorcycle-trips-in-india"],
  ["Spiti Valley bike trip", "/blog/spiti-valley-bike-trip"],
  ["Adventure activities in Ladakh", "/blog/adventure-activities-in-ladakh"],
  ["Mountain biking in India", "/blog/mountain-biking-in-india"],
];

const ITINERARIES: [string, string][] = [
  ["Shimla Manali itinerary", "/blog/shimla-manali-itinerary"],
  ["Uttarakhand hill stations itinerary", "/blog/uttarakhand-hill-stations-itinerary"],
  ["Kashmir itinerary", "/blog/kashmir-itinerary"],
  ["Rajasthan heritage itinerary", "/blog/rajasthan-heritage-itinerary"],
  ["Golden Triangle itinerary", "/blog/golden-triangle-itinerary"],
  ["Kerala nature itinerary", "/blog/kerala-nature-itinerary"],
  ["South India hill stations itinerary", "/blog/south-india-hill-stations-itinerary"],
  ["Western Ghats nature itinerary", "/blog/western-ghats-nature-itinerary"],
  ["Meghalaya nature itinerary", "/blog/meghalaya-nature-itinerary"],
  ["Darjeeling and Sikkim itinerary", "/blog/darjeeling-sikkim-itinerary"],
];

const CROSS: [string, string][] = [
  ["Nature travel", "/nature-travel"],
  ["Western Ghats nature travel", "/blog/western-ghats-nature-travel"],
  ["Adventure travel", "/adventure-travel"],
  ["Camping in India", "/blog/camping-in-india"],
  ["Wildlife tourism", "/wildlife-tourism"],
  ["Best tiger reserves", "/blog/best-tiger-reserves-in-india"],
  ["Heritage & culture", "/heritage-cultural-tourism"],
  ["Food heritage of India", "/blog/food-heritage-of-india"],
  ["Hill station travel", "/hill-station-travel"],
  ["Beach travel", "/beach-travel"],
];

// Existing destination guides own what to do on arrival.
const DESTINATIONS: [string, string][] = [
  ["Manali", "/blog/manali-travel-guide"],
  ["Shimla", "/blog/shimla-travel-guide"],
  ["Rishikesh", "/blog/rishikesh-adventure-travel-guide"],
  ["Leh", "/blog/leh-travel-guide"],
  ["Spiti Valley", "/blog/spiti-valley-travel-guide"],
  ["Kinnaur", "/blog/kinnaur-travel-guide"],
  ["Nainital", "/blog/nainital-travel-guide"],
  ["Jaipur", "/blog/jaipur-travel-guide"],
  ["Jodhpur", "/blog/jodhpur-travel-guide"],
  ["Udaipur", "/blog/udaipur-city-of-lakes-travel-guide"],
  ["Rann of Kutch", "/blog/rann-of-kutch-travel-guide"],
  ["Coorg", "/blog/coorg-travel-guide"],
  ["Ooty", "/blog/ooty-travel-guide"],
  ["Munnar", "/blog/munnar-travel-guide"],
  ["Mahabalipuram", "/blog/mahabalipuram-travel-guide"],
  ["Hampi", "/blog/hampi-travel-guide"],
  ["Goa", "/blog/goa-beaches-travel-guide"],
  ["Ganpatipule", "/blog/ganpatipule-travel-guide"],
  ["Shillong", "/blog/shillong-travel-guide"],
  ["Tawang", "/blog/tawang-travel-guide"],
];

const PACKAGES = ["himachal-pradesh", "leh-ladakh", "rajasthan", "kerala", "karnataka", "goa", "uttarakhand", "arunachal-pradesh"];

const FAQS = [
  { q: "What are the best road trips in India?", a: "Manali to Leh and Srinagar to Leh, the Spiti circuit, the Rajasthan circuit, Mumbai to Goa along the Konkan, Kerala's hills and backwaters, Bengaluru to Ooty, Chennai to Pondicherry and Guwahati to Tawang are among the best." },
  { q: "When is the best time for a road trip in India?", a: "It depends on the region: summer (June to September) for Ladakh and Spiti, winter (November to February) for Rajasthan, Kutch and the coasts, and the monsoon for the Western Ghats." },
  { q: "How many days do I need for a road trip in India?", a: "Two to three days for a weekend route from a city, five to seven for one region, and ten days or more for the high Himalaya or a Rajasthan circuit." },
  { q: "Is it better to self-drive or hire a car with a driver?", a: "Self-drive suits good highways and short routes; a local driver is often wiser for high mountains, busy old cities and permit areas." },
  { q: "How do I estimate the cost of a road trip?", a: "Add fuel (distance ÷ mileage × fuel price), tolls, stays, food and rental or driver charges, then state entry fees and permits, plus a 10 to 15 per cent buffer." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Road Trips in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: roadtripsIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Road Trips", item: URL },
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

export default function RoadTripsPage() {
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/road-trips";

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
              <li className="text-white/35">Road Trips</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Routes, passes and coasts</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Road Trips in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Himalayan passes, desert highways, ghat roads and coastal drives: choose the route for the season, plan realistic driving days, and make the journey part of the holiday.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Road Trip →</Link>
              <a href="#routes" className="btn-outline-light px-7">Explore routes</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2 id="about">India by road</h2>
              <p>
                A road trip shows India in a way no flight can: the change from plains to foothills, the villages and dhabas
                between cities, and the landscapes you would otherwise skip. New expressways have brought Jaipur, Agra, Dehradun
                and Mysuru within easy reach of the big cities, while the high passes of Ladakh and Spiti, the ghat roads of the
                Western Ghats and the coastal roads of the Konkan and Coromandel remain some of the most memorable drives anywhere.
              </p>
              <p>
                Our road-trip guides focus on the journey: route options, approximate distances and driving times, stops along
                the way, where to spend the night, and the seasonal closures, permits and fees to check before you go. For what
                to do once you arrive, each guide links to our destination and things-to-do pages.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                India&rsquo;s best road trips include Manali to Leh and Srinagar to Leh, the Spiti circuit, the Rajasthan
                circuit, Mumbai to Goa along the Konkan, Kerala&rsquo;s hills and backwaters, Bengaluru to Ooty and Chennai to
                Pondicherry. Drive the Himalaya from June to September, and Rajasthan, Kutch and the coasts from November to
                February. Plan 300 to 450 km a day on highways and 150 to 250 km in the mountains.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/best-road-trips-in-india">Best road trips in India →</Link></li>
                <li><Link className="text-link" href="/blog/how-to-plan-a-road-trip-in-india">How to plan a road trip →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="best" eyebrow="Start here" title="Best road trips, planning and self-drive" />
            <Cards items={pick(OVERVIEW)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="routes" eyebrow="Himalayan road trips" title="Himachal, Uttarakhand, Ladakh and Spiti" intro="State guides and the classic Himalayan routes, with passes, overnight stops and seasons." />
            <Cards items={pick(HIMALAYA)} cols={4} />
            <Pills links={HIMALAYA_LINKS} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="rajasthan" eyebrow="Rajasthan road trips" title="Fort cities and desert highways" intro="The classic circuit from Delhi to Jaipur, Jodhpur, Jaisalmer and Udaipur, and winter drives across the west." />
            <Cards items={pick(RAJASTHAN)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="south" eyebrow="South India road trips" title="Coffee hills, the Nilgiris, Kerala and the coast" intro="Short, scenic routes from Bengaluru, Chennai and Kochi, and the long drive to Goa." />
            <Cards items={pick(SOUTH)} cols={4} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="northeast" eyebrow="Northeast road trips" title="Meghalaya, Assam, Arunachal and Sikkim" intro="Permits, local vehicles and the slow, beautiful roads of the Northeast." />
            <Cards items={pick(NORTHEAST)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="ghats-coast" eyebrow="Western Ghats and coastal road trips" title="Ghat roads, waterfalls and coastal drives" intro="Scenic drives through the Sahyadri and along India's coasts, and when the monsoon makes them shine." />
            <Cards items={pick(GHATS_COAST)} cols={4} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="weekend" eyebrow="Weekend road trips" title="Road trips from India's big cities" intro="Weekend drives and longer trips from six cities, with distances and seasons." />
            <Cards items={pick(WEEKEND)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="self-drive" eyebrow="Self-drive and bike road trips" title="Driving yourself, or riding" intro="Self-drive rentals and routes are covered here; motorcycle trips are covered by our Adventure guides." />
            <Cards items={pick(["self-drive-trips-in-india"])} />
            <Pills links={BIKE_LINKS} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="planning" eyebrow="Road trip planning" title="Cost, packing and safety" />
            <Cards items={pick(PLANNING)} />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="themes" eyebrow="Themed road trips" title="Nature, adventure, wildlife, heritage and food" intro="Route-led trips built around a theme, plus road trips for families and couples." />
            <Cards items={pick(THEMES)} cols={4} />
            <Pills links={CROSS} />
          </div>
        </section>

        <section className="bg-forest-50 py-16">
          <div className="container-site">
            <SectionHead id="itineraries" eyebrow="Road trip itineraries" title="Day-by-day routes" intro="Multi-stop itineraries from our other guides, all of which work by road." />
            <Pills links={ITINERARIES} />
            <div className="mt-10">
              <h3 id="guides" className="scroll-mt-24 font-display text-xl font-bold text-stone-950">Destination guides</h3>
              <p className="mt-2 max-w-3xl font-sans text-sm text-stone-600">What to see and do once you arrive.</p>
              <Pills links={DESTINATIONS} />
            </div>
          </div>
        </section>

        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p id="packages" className="eyebrow eyebrow-light scroll-mt-24">Road trip packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Road trips, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Tell us the route you have in mind, and we plan realistic driving days, overnight stops and stays around your dates, with or without a driver.
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
              {[["Road trip holidays", "/packages/road-trip-holidays"], ["Weekend getaways", "/packages/weekend-getaways"], ["Family holidays", "/packages/family-holidays"], ["Honeymoon", "/packages/honeymoon"], ["Adventure trips", "/packages/adventure-tours"], ["Luxury holidays", "/packages/luxury-holidays"], ["Budget holidays", "/packages/budget-holidays"], ["Northeast India", "/packages/northeast-india"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Road trips in India: FAQs" />
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
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your road trip</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell Kudozz Club your route idea, dates and who is travelling, and we&rsquo;ll turn it into a practical plan with realistic driving days, good overnight stops and the right stays.
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
