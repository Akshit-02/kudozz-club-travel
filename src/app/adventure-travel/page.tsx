// /adventure-travel: the hub of the Adventure Travel cluster. It carries the
// "adventure travel in India" pillar copy (see
// docs/adventure-travel-cannibalization.md) and links down to every activity,
// destination, seasonal and planning article, and across to packages.
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { adventureIndex, adventureByKind, type AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/adventure-travel`;
const TITLE = "Adventure Travel in India: Activities, Destinations & Seasons | Kudozz Club";
const DESCRIPTION =
  "Adventure travel in India: trekking, rafting, paragliding, diving, skiing and more, with the best destinations, seasons, beginner options and trip planning.";
const HERO = {
  src: "/images/adventure/adventure-travel-india-himalaya-trekkers.webp",
  alt: "Snow peaks reflected in Deoria Tal, Uttarakhand",
};

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "adventure travel in India",
    "adventure tourism in India",
    "adventure activities in India",
    "adventure destinations in India",
    "adventure holidays India",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    siteName: "Kudozz Club",
    images: [{ url: HERO.src, alt: HERO.alt }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const bySlug = new Map(adventureIndex.map((e) => [e.slug, e]));
const a = (slug: string) => bySlug.get(slug);

const ACTIVITY_ORDER = [
  "trekking-in-india",
  "river-rafting-in-india",
  "paragliding-in-india",
  "scuba-diving-in-india",
  "skiing-in-india",
  "snorkeling-in-india",
  "bungee-jumping-in-india",
  "skydiving-in-india",
  "hot-air-balloon-rides-in-india",
  "mountain-biking-in-india",
  "best-motorcycle-trips-in-india",
  "rock-climbing-in-india",
  "mountaineering-in-india",
  "camping-in-india",
  "kayaking-in-india",
  "surfing-in-india",
  "water-sports-in-india",
  "desert-adventures-in-india",
];

// Existing guides that already own a destination + activity intent.
const EXISTING_HUBS = [
  { href: "/blog/rishikesh-adventure-travel-guide", name: "Rishikesh", note: "Rafting, bungee, camping and yoga" },
  { href: "/blog/bir-billing-travel-guide", name: "Bir Billing", note: "India's paragliding capital" },
  { href: "/blog/gulmarg-travel-guide", name: "Gulmarg", note: "Skiing and the gondola" },
];

const REGIONS: { name: string; places: { label: string; href: string }[] }[] = [
  {
    name: "North India",
    places: [
      { label: "Ladakh", href: "/blog/adventure-activities-in-ladakh" },
      { label: "Himachal Pradesh", href: "/blog/adventure-activities-in-himachal-pradesh" },
      { label: "Manali", href: "/blog/adventure-activities-in-manali" },
      { label: "Uttarakhand", href: "/blog/adventure-activities-in-uttarakhand" },
      { label: "Rishikesh rafting", href: "/blog/river-rafting-in-rishikesh" },
      { label: "Spiti by motorcycle", href: "/blog/spiti-valley-bike-trip" },
      { label: "Weekends from Delhi", href: "/blog/weekend-adventure-trips-from-delhi" },
    ],
  },
  {
    name: "West India",
    places: [
      { label: "Goa", href: "/blog/adventure-activities-in-goa" },
      { label: "Weekends from Mumbai and Pune", href: "/blog/weekend-adventure-trips-from-mumbai" },
      { label: "Thar Desert and Rann of Kutch", href: "/blog/desert-adventures-in-india" },
      { label: "Hot air ballooning in Rajasthan", href: "/blog/hot-air-balloon-rides-in-india" },
    ],
  },
  {
    name: "South India",
    places: [
      { label: "Weekends from Bengaluru", href: "/blog/weekend-adventure-trips-from-bengaluru" },
      { label: "Surf towns", href: "/blog/surfing-in-india" },
      { label: "Hampi bouldering", href: "/blog/rock-climbing-in-india" },
      { label: "Lakshadweep and Netrani diving", href: "/blog/scuba-diving-in-india" },
    ],
  },
  {
    name: "East and Northeast India",
    places: [
      { label: "Sikkim", href: "/blog/adventure-activities-in-sikkim" },
      { label: "Meghalaya", href: "/blog/adventure-activities-in-meghalaya" },
      { label: "Andaman Islands", href: "/blog/adventure-activities-in-andaman" },
      { label: "Scuba diving in the Andamans", href: "/blog/scuba-diving-in-andaman" },
    ],
  },
];

const SEASONS: { name: string; months: string; ideas: { label: string; href: string }[] }[] = [
  {
    name: "Winter",
    months: "December to February",
    ideas: [
      { label: "Winter snow treks", href: "/blog/winter-treks-in-india" },
      { label: "Skiing at Gulmarg and Auli", href: "/blog/skiing-in-india" },
      { label: "Desert safaris", href: "/blog/desert-adventures-in-india" },
      { label: "Diving in the Andamans", href: "/blog/scuba-diving-in-andaman" },
    ],
  },
  {
    name: "Spring and early summer",
    months: "March to May",
    ideas: [
      { label: "Rafting in Rishikesh", href: "/blog/river-rafting-in-rishikesh" },
      { label: "Paragliding", href: "/blog/paragliding-in-india" },
      { label: "Himalayan treks", href: "/blog/trekking-in-india" },
      { label: "Sikkim treks", href: "/blog/adventure-activities-in-sikkim" },
    ],
  },
  {
    name: "Monsoon",
    months: "June to September",
    ideas: [
      { label: "Monsoon treks", href: "/blog/monsoon-treks-in-india" },
      { label: "Ladakh", href: "/blog/adventure-activities-in-ladakh" },
      { label: "Spiti by motorcycle", href: "/blog/spiti-valley-bike-trip" },
      { label: "Kolad and Coorg rafting", href: "/blog/river-rafting-in-india" },
    ],
  },
  {
    name: "Autumn",
    months: "October to November",
    ideas: [
      { label: "Paragliding at Bir Billing", href: "/blog/paragliding-in-india" },
      { label: "Rafting reopens", href: "/blog/river-rafting-in-india" },
      { label: "Treks in every range", href: "/blog/trekking-in-india" },
      { label: "Water sports in Goa", href: "/blog/adventure-activities-in-goa" },
    ],
  },
];

const BEGINNER = [
  { label: "A short rafting stretch at Rishikesh", href: "/blog/river-rafting-in-rishikesh" },
  { label: "Tandem paragliding", href: "/blog/paragliding-in-india" },
  { label: "Snorkelling and sea walks", href: "/blog/snorkeling-in-india" },
  { label: "A try dive in the Andamans", href: "/blog/scuba-diving-in-andaman" },
  { label: "Calm-water kayaking", href: "/blog/kayaking-in-india" },
  { label: "Easy one- to three-day treks", href: "/blog/beginner-treks-in-india" },
];

const PACKAGE_SLUGS = ["leh-ladakh", "himachal-pradesh", "uttarakhand", "andaman-nicobar", "goa", "meghalaya", "sikkim", "kashmir"];

const FAQS = [
  {
    q: "What are the best adventure activities in India?",
    a: "Trekking, river rafting, paragliding, scuba diving, skiing, bungee jumping, camping and desert safaris are the most popular, along with mountain biking, motorcycle trips, rock climbing, kayaking and surfing.",
  },
  {
    q: "Which is the best place for adventure in India?",
    a: "It depends on the activity and season: Rishikesh for rafting and bungee, Bir Billing for paragliding, Gulmarg for skiing, the Andamans for diving, and Ladakh, Himachal Pradesh and Uttarakhand for treks and road trips.",
  },
  {
    q: "When is the best time for adventure travel in India?",
    a: "October and November suit almost every activity. Winter is for snow treks, skiing, deserts and diving; June to September for Ladakh, Spiti and monsoon treks.",
  },
  {
    q: "Is adventure travel in India safe?",
    a: "Most activities are safe with licensed operators, trained guides, proper equipment and respect for seasons, weather and altitude. Several activities, such as Rishikesh rafting and Himachal paragliding, pause during the monsoon for safety.",
  },
  {
    q: "Can beginners do adventure activities in India?",
    a: "Yes. Tandem paragliding, short rafting stretches, try dives, snorkelling, sea walks, calm-water kayaking and easy treks are designed for first-timers.",
  },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Adventure Travel in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: adventureIndex.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/blog/${e.slug}`,
          name: e.title,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Adventure Travel", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

function Card({ e, sizes }: { e: AdvIndexEntry; sizes: string }) {
  return (
    <Link
      href={`/blog/${e.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
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

function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      {intro && <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-600">{intro}</p>}
    </div>
  );
}

export default function AdventureTravelPage() {
  const activities = ACTIVITY_ORDER.map(a).filter((e): e is AdvIndexEntry => Boolean(e));
  const destinations = adventureByKind("destination");
  const weekends = adventureByKind("weekend");
  const planning = adventureByKind("planning");
  const pillars = adventureByKind("pillar");
  const packages = PACKAGE_SLUGS.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Schema />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[72vh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={HERO.src} alt={HERO.alt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
          </div>
          <nav className="absolute left-0 right-0 top-24 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-sans text-xs text-white/55">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="text-white/20">/</li>
              <li className="text-white/35">Adventure Travel</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Adventure travel</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Adventure Travel in India
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Discover trekking routes, river adventures, mountain escapes, water sports and adrenaline-filled
              experiences across India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/plan-your-trip?from=/adventure-travel&tripType=Adventure%20Trips" className="btn-primary px-7">Plan My Adventure →</Link>
              <a href="#activities" className="btn-outline-light px-7">Explore by activity</a>
            </div>
          </div>
        </section>

        {/* 1. Adventure Travel in India */}
        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2>Adventure travel in India</h2>
              <p>
                India stretches from the Karakoram and the Great Himalaya to coral islands in the Bay of Bengal and
                the Arabian Sea, with deserts, rainforests and a long, surf-washed coast in between. That range makes
                it one of the most varied adventure destinations in the world: in a single year you can raft the
                Ganga at Rishikesh, fly from the paragliding launch at Billing, ski the slopes of Gulmarg, dive the
                reefs of the Andamans and cross 5,000-metre passes in Ladakh.
              </p>
              <p>
                The key to adventure travel in India is timing. Himalayan rivers and air sports pause in the peak
                monsoon, the high passes open only in summer, and the islands and coasts are at their best in winter.
                Each guide below gives the season, difficulty, safety rules and planning details for one activity or
                destination, and links on to the destination guides, itineraries and packages that complete the trip.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                The most popular adventure activities in India are trekking, river rafting, paragliding, scuba
                diving, skiing and camping. Top bases include Rishikesh for rafting, Bir Billing for paragliding,
                Gulmarg for skiing, the Andamans for diving and Ladakh for high-altitude treks and road trips.
                October and November suit almost everything; plan Ladakh for June to September and snow for
                December to March.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/adventure-sports-in-india">Every adventure sport in India →</Link></li>
                <li><Link className="text-link" href="/blog/best-adventure-destinations-in-india">Best adventure destinations →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* 2. Explore by activity */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="activities" eyebrow="Explore by activity" title="Adventure activities" intro="Choose an activity for where to go, the season, difficulty, safety and what to pack." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {activities.map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Adventure destinations */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="destinations" eyebrow="Adventure destinations" title="Where to go for adventure" intro="Destination hubs cover every adventure activity in one place, with links to the full travel guides and things-to-do guides." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {EXISTING_HUBS.map((h) => (
                <Link key={h.href} href={h.href} className="rounded-xl border border-stone-200 p-4 font-sans transition-colors hover:border-forest-300">
                  <span className="block font-semibold text-stone-900">{h.name}</span>
                  <span className="text-sm text-stone-600">{h.note}</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm">
              <Link className="text-link font-semibold" href="/blog/best-adventure-destinations-in-india">See all the best adventure destinations in India →</Link>
            </p>
          </div>
        </section>

        {/* 4. By region */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="regions" eyebrow="Adventure by region" title="Adventure across India's regions" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {REGIONS.map((r) => (
                <div key={r.name} className="rounded-2xl border border-stone-200 bg-white p-6">
                  <h3 className="font-display text-lg font-bold text-stone-950">{r.name}</h3>
                  <ul className="mt-3 space-y-2 font-sans text-sm">
                    {r.places.map((p) => (
                      <li key={p.href + p.label}><Link className="text-link" href={p.href}>{p.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. By season */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="seasons" eyebrow="Adventure by season" title="What to do, month by month" intro="Most Indian adventures have a clear season. Use these starting points, or see the full month-by-month calendar." />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SEASONS.map((s) => (
                <div key={s.name} className="rounded-2xl border border-stone-200 p-6">
                  <h3 className="font-display text-lg font-bold text-stone-950">{s.name}</h3>
                  <p className="font-sans text-xs uppercase tracking-[0.12em] text-stone-500">{s.months}</p>
                  <ul className="mt-3 space-y-2 font-sans text-sm">
                    {s.ideas.map((i) => (
                      <li key={i.label}><Link className="text-link" href={i.href}>{i.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm">
              <Link className="text-link font-semibold" href="/blog/best-time-for-adventure-travel-in-india">Best time for adventure travel in India →</Link>
            </p>
          </div>
        </section>

        {/* 6. Beginner-friendly */}
        <section className="bg-forest-50 py-16">
          <div className="container-site grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHead id="beginners" eyebrow="Beginner-friendly adventures" title="New to adventure?" intro="These activities are designed for first-timers: a pilot, instructor or guide is in control, and you need only basic fitness." />
              <p className="mt-6 font-sans text-sm">
                <Link className="text-link font-semibold" href="/blog/adventure-travel-for-beginners-in-india">Adventure travel for beginners →</Link>
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {BEGINNER.map((b) => (
                <li key={b.label}>
                  <Link href={b.href} className="block h-full rounded-xl border border-forest-200 bg-white p-4 font-sans text-sm font-medium text-stone-800 hover:border-forest-400">
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Trip ideas */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="trip-ideas" eyebrow="Adventure trip ideas" title="Weekend and short trips" intro="Adventure weekends from India's biggest cities, and longer routes that combine several activities." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {weekends.map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 640px) 33vw, 100vw" /></li>
              ))}
            </ul>
            <ul className="mt-6 grid gap-2 font-sans text-sm sm:grid-cols-2">
              <li><Link className="text-link" href="/blog/best-motorcycle-trips-in-india">Manali to Leh and other great rides</Link></li>
              <li><Link className="text-link" href="/blog/spiti-valley-bike-trip">The Spiti Valley circuit</Link></li>
              <li><Link className="text-link" href="/blog/winter-treks-in-india">A winter snow trek week in Uttarakhand</Link></li>
              <li><Link className="text-link" href="/blog/adventure-activities-in-andaman">Port Blair, Havelock and Neil for divers</Link></li>
            </ul>
          </div>
        </section>

        {/* 8. Packages */}
        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p className="eyebrow eyebrow-light">Featured adventure packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Adventure trips, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from our adventure trips page or a destination, and we
              quote for your dates, group and activities.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li className="sm:col-span-2 lg:col-span-4">
                <Link href="/packages/adventure-tours" className="btn-primary px-7">Adventure trip packages →</Link>
              </li>
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
          </div>
        </section>

        {/* 9. Guides */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="guides" eyebrow="Adventure travel guides" title="Plan with confidence" />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...pillars, ...planning].map((e) => (
                <li key={e.slug}><Card e={e} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Adventure travel in India: FAQs" />
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

        {/* 10. Plan */}
        <section className="bg-white py-16">
          <div className="container-site">
            <div className="flex flex-col gap-6 rounded-3xl border border-stone-200 bg-stone-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your adventure trip</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell us your destination, dates, group size and preferred activities. Kudozz Club can help shape
                  the trip around your interests.
                </p>
              </div>
              <Link href="/plan-your-trip?from=/adventure-travel&tripType=Adventure%20Trips" className="btn-primary shrink-0 px-7">Plan My Trip →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
