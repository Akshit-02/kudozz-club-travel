// /spiritual-tourism: the hub of the Spiritual Tourism cluster. It carries the
// "spiritual tourism in India" pillar copy (spiritual, religious and pilgrimage
// tourism are one intent; see docs/spiritual-tourism-cannibalization.md) and
// links to every spiritual article, the existing destination guides that own
// each sacred place, their itineraries, and the spiritual packages.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { spiritualIndex, spiritualEntry } from "@/lib/spiritual-links";
import type { AdvIndexEntry } from "@/lib/adventure-links";
import { getStatePackage } from "@/lib/all-states-data";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/spiritual-tourism`;
const TITLE = "Spiritual Tourism in India: Pilgrimages & Temples | Kudozz Club";
const DESCRIPTION =
  "Spiritual tourism in India: pilgrimage places of every faith, the Jyotirlingas, Char Dham, Shakti Peethas, Buddhist Circuit, Sikh and Jain tirthas, and planning.";
const HERO = { src: "/images/spiritual/spiritual-tourism-india-varanasi-aarti.webp", alt: "Priests performing the evening Ganga Aarti at Dashashwamedh Ghat, Varanasi" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["spiritual tourism in India", "pilgrimage tourism India", "religious tourism India", "spiritual travel India", "pilgrimage places India"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Kudozz Club", images: [{ url: HERO.src, alt: HERO.alt }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO.src] },
};

const pick = (slugs: string[]) => slugs.map((s) => spiritualEntry(s)).filter((e): e is AdvIndexEntry => Boolean(e));

const OVERVIEW = ["best-pilgrimage-places-in-india", "famous-temples-in-india", "how-to-plan-a-pilgrimage-in-india"];
const JYOTIRLINGA = ["12-jyotirlingas-in-india", "jyotirlinga-yatra", "jyotirlingas-in-maharashtra", "trimbakeshwar-jyotirlinga", "bhimashankar-jyotirlinga", "grishneshwar-jyotirlinga", "nageshwar-jyotirlinga"];
const CHAR_DHAM = ["char-dham-yatra-guide", "char-dham-of-india", "kedarnath-badrinath-yatra"];
const BUDDHIST = ["buddhist-circuit-in-india", "buddhist-tourism-in-india"];
const SIKH = ["sikh-pilgrimage-in-india", "panj-takht-yatra", "hemkund-sahib-yatra"];
const JAIN = ["jain-pilgrimage-in-india", "ranakpur-jain-temple", "shravanabelagola-gommateshwara"];
const STATES = [
  "spiritual-tourism-in-uttar-pradesh",
  "spiritual-tourism-in-uttarakhand",
  "spiritual-tourism-in-gujarat",
  "spiritual-tourism-in-rajasthan",
  "spiritual-tourism-in-maharashtra",
  "spiritual-tourism-in-madhya-pradesh",
  "spiritual-tourism-in-tamil-nadu",
  "spiritual-tourism-in-karnataka",
  "spiritual-tourism-in-kerala",
  "spiritual-tourism-in-andhra-pradesh",
  "spiritual-tourism-in-odisha",
  "spiritual-tourism-in-west-bengal",
  "spiritual-tourism-in-bihar",
  "spiritual-tourism-in-himachal-pradesh",
  "spiritual-tourism-in-jammu-and-kashmir",
];
const ITINERARY_PAGES = ["ayodhya-varanasi-prayagraj-tour", "pilgrimage-trips-from-delhi", "pilgrimage-trips-from-mumbai"];
const GUIDES = ["pilgrimage-packing-list", "spiritual-festivals-in-india", "kumbh-mela", "yoga-and-meditation-retreats-in-india", "yoga-in-rishikesh"];

// Existing destination guides own each sacred place's own intent.
const DESTINATIONS: [string, string][] = [
  ["Varanasi", "/blog/varanasi-travel-guide"],
  ["Ayodhya", "/blog/ayodhya-travel-guide"],
  ["Haridwar", "/blog/haridwar-travel-guide"],
  ["Rishikesh", "/blog/things-to-do-in-rishikesh"],
  ["Mathura", "/blog/mathura-travel-guide"],
  ["Vrindavan", "/blog/vrindavan-travel-guide"],
  ["Prayagraj", "/blog/prayagraj-travel-guide"],
  ["Ujjain", "/blog/ujjain-travel-guide"],
  ["Somnath", "/blog/somnath-travel-guide"],
  ["Dwarka", "/blog/dwarka-travel-guide"],
  ["Shirdi", "/blog/shirdi-travel-guide"],
  ["Tirupati", "/blog/tirupati-travel-guide"],
  ["Rameswaram", "/blog/rameswaram-travel-guide"],
  ["Puri", "/blog/puri-travel-guide"],
  ["Amritsar", "/blog/golden-temple-travel-guide"],
  ["Bodh Gaya", "/blog/bodh-gaya-travel-guide"],
  ["Pushkar", "/blog/pushkar-travel-guide"],
  ["Madurai", "/blog/madurai-travel-guide"],
  ["Kedarnath", "/blog/kedarnath-travel-guide"],
  ["Badrinath", "/blog/badrinath-travel-guide"],
  ["Vaishno Devi (Katra)", "/blog/katra-travel-guide"],
  ["Ajmer", "/blog/ajmer-travel-guide"],
];

const ITINERARIES: [string, string, string][] = [
  ["Varanasi", "2 to 3 days", "/blog/varanasi-travel-guide#visit-plan"],
  ["Ayodhya", "1 to 2 days", "/blog/ayodhya-travel-guide#visit-plan"],
  ["Haridwar", "1 to 2 days", "/blog/haridwar-travel-guide#visit-plan"],
  ["Ujjain", "1 to 2 days", "/blog/ujjain-travel-guide#itinerary"],
  ["Tirupati", "2 days", "/blog/tirupati-travel-guide#itinerary"],
  ["Shirdi", "1 to 2 days", "/blog/shirdi-travel-guide#itinerary"],
  ["Puri", "2 to 3 days", "/blog/puri-travel-guide#visit-plan"],
  ["Vaishno Devi", "2 to 3 days", "/blog/katra-travel-guide#itinerary"],
];

const PACKAGES = ["uttarakhand", "uttar-pradesh", "gujarat", "tamil-nadu", "punjab", "odisha", "maharashtra", "bihar"];

const TRADITIONS: { title: string; text: string; href: string; cta: string }[] = [
  { title: "Hindu pilgrimage", text: "Sacred rivers and cities, the Jyotirlingas, the Char Dham, the Shakti Peethas and great temple towns.", href: "/blog/best-pilgrimage-places-in-india", cta: "Pilgrimage places" },
  { title: "Buddhist", text: "The places of the Buddha's life in Bihar and Uttar Pradesh, and living monasteries in the Himalaya.", href: "/blog/buddhist-circuit-in-india", cta: "The Buddhist Circuit" },
  { title: "Sikh", text: "The Golden Temple, the five Takhts and Hemkund Sahib, with langar open to all.", href: "/blog/sikh-pilgrimage-in-india", cta: "Sikh pilgrimage" },
  { title: "Jain", text: "Temple hills at Palitana and Sammed Shikharji, and the marble temples of Ranakpur and Dilwara.", href: "/blog/jain-pilgrimage-in-india", cta: "Jain tirthas" },
  { title: "Sufi", text: "Dargahs at Ajmer, Nizamuddin and Fatehpur Sikri, with qawwali and the Urs.", href: "/blog/sufi-shrines-in-india", cta: "Sufi shrines" },
  { title: "Yoga and retreats", text: "Ashrams, yoga schools and meditation courses, from Rishikesh to Kerala.", href: "/blog/yoga-and-meditation-retreats-in-india", cta: "Retreats" },
];

const FAQS = [
  { q: "What is spiritual tourism in India?", a: "Travel to sacred places and for spiritual practice: pilgrimages to temples, gurdwaras, monasteries, Jain tirthas and dargahs, festivals such as the Kumbh Mela, and yoga and meditation retreats." },
  { q: "Which are the most important pilgrimage places in India?", a: "Among them are Varanasi, the Char Dham, Tirumala, Vaishno Devi, the twelve Jyotirlingas, Puri, Rameswaram, the Golden Temple, Bodh Gaya, Palitana and Ajmer Sharif." },
  { q: "What is the difference between the Char Dham and the Chota Char Dham?", a: "The Char Dham of India are Badrinath, Dwarka, Puri and Rameswaram. The Char Dham Yatra of Uttarakhand, sometimes called the Chota Char Dham, covers Yamunotri, Gangotri, Kedarnath and Badrinath." },
  { q: "Do I need to book darshan in advance?", a: "At many major shrines, yes: Tirumala, Vaishno Devi, Amarnath, the Char Dham and some special aartis need advance booking or registration on official portals." },
  { q: "When is the best time for a pilgrimage in India?", a: "October to March suits most of the plains and the south. Himalayan shrines are open only from about April or May to November, with May to June and September to October the best windows." },
];

function Schema() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "Spiritual Tourism in India",
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Country", name: "India" },
      primaryImageOfPage: `${SITE_URL}${HERO.src}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: spiritualIndex.map((e, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/blog/${e.slug}`, name: e.title })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Spiritual Tourism", item: URL },
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

export default function SpiritualTourismPage() {
  const packages = PACKAGES.map((s) => getStatePackage(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const plan = "/plan-your-trip?from=/spiritual-tourism";
  const shakti = spiritualEntry("shakti-peethas-in-india");
  const sufi = spiritualEntry("sufi-shrines-in-india");

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
              <li className="text-white/35">Spiritual Tourism</li>
            </ol>
          </nav>
          <div className="container-site relative z-10 pb-16 pt-36">
            <p className="eyebrow eyebrow-light">Spiritual tourism</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Spiritual Tourism in India</h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
              Sacred rivers, temple towns, Himalayan shrines, gurdwaras, monasteries and dargahs: plan a pilgrimage with the right season, bookings and pace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={plan} className="btn-primary px-7">Plan My Pilgrimage →</Link>
              <a href="#states" className="btn-outline-light px-7">Explore by state</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="prose-travel max-w-none">
              <h2>Spiritual India</h2>
              <p>
                India is the birthplace of Hinduism, Buddhism, Jainism and Sikhism, and home to some of the most
                important Sufi shrines in the world. Pilgrimage is one of the main reasons Indians travel: to bathe in the
                Ganga at Varanasi or Haridwar, to take darshan at Tirumala or Vaishno Devi, to complete the Char Dham or
                the twelve Jyotirlingas, to pray at the Golden Temple, Bodh Gaya or Ajmer Sharif.
              </p>
              <p>
                Good planning makes the journey easier. Himalayan shrines open only in summer, many shrines require
                registration or advance darshan booking on official portals, and festivals bring very large crowds. Our
                guides explain each tradition and place, and note where lists and traditions differ, so you can plan
                with confidence and respect.
              </p>
            </div>
            <aside className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="font-display text-xl font-bold text-stone-950">Quick answer</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-800">
                Spiritual tourism in India covers pilgrimages of every faith: Hindu circuits such as the Char Dham and the
                twelve Jyotirlingas, sacred cities such as Varanasi and Tirupati, the Golden Temple and Panj Takht, the
                Buddhist Circuit, Jain tirthas, Sufi dargahs, and yoga retreats. Most of India is best from October to
                March; Himalayan shrines open from about April or May to November.
              </p>
              <ul className="mt-4 space-y-1.5 font-sans text-sm text-stone-700">
                <li><Link className="text-link" href="/blog/how-to-plan-a-pilgrimage-in-india">How to plan a pilgrimage →</Link></li>
                <li><Link className="text-link" href="/blog/spiritual-festivals-in-india">Festivals, month by month →</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="overview" eyebrow="Start here" title="Where to go and how to plan" />
            <Cards items={pick(OVERVIEW)} />
          </div>
        </section>

        {/* Traditions */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="traditions" eyebrow="Major pilgrimage traditions" title="Every faith, its own journeys" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TRADITIONS.map((t) => (
                <div key={t.title} className="flex flex-col rounded-2xl border border-stone-200 p-6">
                  <h3 className="font-display text-lg font-bold text-stone-950">{t.title}</h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-stone-600">{t.text}</p>
                  <Link className="text-link mt-4 font-sans text-sm font-semibold" href={t.href}>{t.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jyotirlingas */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="jyotirlingas" eyebrow="Jyotirlingas" title="The twelve Jyotirlingas" intro="Twelve Shiva shrines across eight states, from Kedarnath to Rameswaram. Three are claimed by more than one temple; our guides explain the traditions." />
            <Cards items={pick(JYOTIRLINGA)} cols={4} />
          </div>
        </section>

        {/* Char Dham */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="char-dham" eyebrow="Char Dham" title="Two Char Dhams, kept distinct" intro="The Char Dham Yatra of Uttarakhand (Yamunotri, Gangotri, Kedarnath, Badrinath) and the four dhams of India (Badrinath, Dwarka, Puri, Rameswaram)." />
            <Cards items={pick(CHAR_DHAM)} />
            <p className="mt-6 font-sans text-sm"><Link className="text-link font-semibold" href="/packages/char-dham-yatra">Char Dham Yatra packages →</Link></p>
          </div>
        </section>

        {/* Shakti Peethas and Sufi */}
        <section className="bg-stone-50 py-16">
          <div className="container-site grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHead id="shakti-peethas" eyebrow="Shakti Peethas" title="Seats of the Goddess" intro="Lists give 18, 51 or more; Kamakhya, Kalighat and Jwalamukhi are among the most visited." />
              {shakti && <div className="mt-6 max-w-md"><Card e={shakti} sizes="(min-width: 1024px) 40vw, 100vw" /></div>}
            </div>
            <div>
              <SectionHead id="sufi" eyebrow="Sufi shrines" title="Dargahs and qawwali" intro="Ajmer Sharif, Nizamuddin and Fatehpur Sikri welcome visitors of all faiths." />
              {sufi && <div className="mt-6 max-w-md"><Card e={sufi} sizes="(min-width: 1024px) 40vw, 100vw" /></div>}
            </div>
          </div>
        </section>

        {/* Buddhist, Sikh, Jain */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="buddhist" eyebrow="Buddhist Circuit" title="In the Buddha's footsteps" />
            <Cards items={pick(BUDDHIST)} />
            <p className="mt-6 font-sans text-sm"><Link className="text-link font-semibold" href="/packages/buddhist-circuit">Buddhist Circuit packages →</Link></p>
          </div>
        </section>
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="sikh" eyebrow="Sikh pilgrimage" title="Gurdwaras and the five Takhts" />
            <Cards items={pick(SIKH)} />
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="jain" eyebrow="Jain pilgrimage" title="Tirthas and marble temples" />
            <Cards items={pick(JAIN)} />
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-forest-50 py-16">
          <div className="container-site">
            <SectionHead id="destinations" eyebrow="Spiritual destinations" title="Sacred cities and temple towns" intro="Our destination guides cover each place's temples, darshan, how to reach, stays and a day-by-day plan." />
            <Pills links={DESTINATIONS} />
          </div>
        </section>

        {/* States */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="states" eyebrow="State-wise spiritual travel" title="State by state" intro="Each guide compares a state's sacred places, with routes, stays and seasons." />
            <Cards items={pick(STATES)} cols={4} />
          </div>
        </section>

        {/* Itineraries */}
        <section className="bg-stone-50 py-16">
          <div className="container-site">
            <SectionHead id="itineraries" eyebrow="Pilgrimage itineraries" title="Day-by-day plans" intro="Circuit and short-trip itineraries, plus the day plans in our destination guides." />
            <Cards items={pick(ITINERARY_PAGES)} />
            <ul className="mt-8 grid gap-3 font-sans text-sm sm:grid-cols-2 lg:grid-cols-4">
              {ITINERARIES.map(([name, days, href]) => (
                <li key={href}>
                  <Link href={href} className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-forest-400">
                    <span className="block font-display text-base font-bold text-stone-950">{name}</span>
                    <span className="text-stone-600">{days}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-stone-950 py-16">
          <div className="container-site">
            <p className="eyebrow eyebrow-light">Spiritual tour packages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Pilgrimages, planned around you</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-stone-300">
              Every Kudozz Club trip is customized. Start from a circuit, a state or a travel style, and we plan the route, stays and pace around your dates.
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
              {[["Spiritual & pilgrimage tours", "/packages/spiritual-tours"], ["Char Dham Yatra", "/packages/char-dham-yatra"], ["Buddhist Circuit", "/packages/buddhist-circuit"], ["Family holidays", "/packages/family-holidays"], ["Budget holidays", "/packages/budget-holidays"], ["Group tours", "/packages/group-tours"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/20 hover:bg-white/20">{l}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guides */}
        <section className="bg-white py-16">
          <div className="container-site">
            <SectionHead id="guides" eyebrow="Travel guides" title="Festivals, retreats and practical advice" />
            <Cards items={pick(GUIDES)} cols={4} />
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="container-site max-w-3xl">
            <SectionHead id="faq" eyebrow="FAQs" title="Spiritual tourism in India: FAQs" />
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

        {/* Plan */}
        <section className="bg-white py-16">
          <div className="container-site">
            <div id="plan" className="flex scroll-mt-24 flex-col gap-6 rounded-3xl border border-stone-200 bg-stone-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">Plan your pilgrimage</h2>
                <p className="mt-2 max-w-xl font-sans text-base text-stone-600">
                  Tell Kudozz Club where you want to go, your dates, budget and who is travelling, and we&rsquo;ll build a practical route with time for darshan and rest.
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
