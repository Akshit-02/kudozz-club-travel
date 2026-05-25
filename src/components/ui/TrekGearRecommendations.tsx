// src/components/ui/TrekGearRecommendations.tsx
import Link from "next/link";

export interface GearItem {
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: string;
  image: string;
  affiliateUrl: string;
  tag: string;
  tagColor: string;
  why: string;
}

export interface GearSection {
  title: string;
  subtitle: string;
  emoji: string;
  items: GearItem[];
}

// ── Generic trek gear (used for mountain/Himalayan posts) ─────────────────────
export const HIMALAYAN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear that earns its weight on every Himalayan trek",
    emoji: "🎒",
    items: [
      {
        name: "Trekking Jacket",
        description:
          "Waterproof, windproof, and breathable — exactly what you need when afternoon rain hits at 3,500m. Used by thousands of Indian trekkers every season.",
        price: "₹4,999",
        rating: 4.6,
        reviews: "2.1k",
        image: "🧥",
        affiliateUrl:
          "https://www.amazon.in/s?k=waterproof+trekking+jacket&tag=mytech03f_ux19n-21",
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "Afternoon rain is guaranteed on most Himalayan treks. A waterproof shell is the single item you'll be most thankful you packed.",
      },
      {
        name: "Trekking Shoes",
        description:
          "Ankle support, waterproof membrane, grippy Contagrip sole. These handle everything from rocky trail sections to muddy monsoon paths without complaint.",
        price: "₹3,499",
        rating: 4.5,
        reviews: "4.8k",
        image: "👟",
        affiliateUrl:
          "https://www.amazon.in/s?k=waterproof+trekking+shoes&tag=mytech03f_ux19n-21",
        tag: "Most important",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Your feet are your vehicle. Wet, unsupported feet ruin a trek faster than anything else. These are reliable and genuinely waterproof.",
      },
      {
        name: "Trekking Poles",
        description:
          "Collapsible, shock-absorbing, cork grip. The descent from Kheerganga or Rohtang on tired legs without poles is significantly harder than with them.",
        price: "₹2,799",
        rating: 4.4,
        reviews: "1.3k",
        image: "🏔️",
        affiliateUrl:
          "https://www.amazon.in/s?k=trekking+poles+collapsible&tag=mytech03f_ux19n-21",
        tag: "Knees will thank you",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Most people who skip poles regret it on the descent. The knee strain on a long downhill with a loaded pack is real.",
      },
      {
        name: "Water Filter",
        description:
          "Filter directly from Himalayan streams. Removes 99.9999% of bacteria and protozoa. Lighter than carrying extra water, cheaper than buying bottles.",
        price: "₹1,299",
        rating: 4.7,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl:
          "https://www.amazon.in/s?k=lifestraw+water+filter&tag=mytech03f_ux19n-21",
        tag: "Eco + practical",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Mountain streams in most Himalayan treks are clean enough to filter directly — stop buying single-use plastic and carry this instead.",
      },
      {
        name: "Head Torch",
        description:
          "Compact, 150 lumens, 50-hour battery life at 10 lumens. Essential for pre-dawn starts, camp navigation, and the occasional unplanned dark finish.",
        price: "₹1,599",
        rating: 4.5,
        reviews: "890",
        image: "🔦",
        affiliateUrl:
          "https://www.amazon.in/s?k=petzl+head+torch+trekking&tag=mytech03f_ux19n-21",
        tag: "Pre-dawn starts",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Every experienced trekker starts before dawn. A headtorch isn't optional — it's infrastructure. Always carry spare batteries.",
      },
      {
        name: "Pulse Oximeter",
        description:
          "Measures blood oxygen saturation — the critical number for detecting altitude sickness before symptoms become serious. Small, cheap, potentially life-saving.",
        price: "₹799",
        rating: 4.3,
        reviews: "15.4k",
        image: "🩺",
        affiliateUrl:
          "https://www.amazon.in/s?k=pulse+oximeter+trekking&tag=mytech03f_ux19n-21",
        tag: "Safety essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "SpO2 below 85% at rest means descend. You can't know your oxygen level without this. At ₹800 it's one of the best investments for any high-altitude trek.",
      },
    ],
  },
];

// ── Beach / tropical destination gear ────────────────────────────────────────
export const BEACH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear that makes tropical travel genuinely better",
    emoji: "🏖️",
    items: [
      {
        name: "Sea to Summit Dry Bag Set",
        description:
          "Waterproof dry bags in three sizes — keep phones, cameras, and documents dry on boat transfers, water sports, and unexpected monsoon showers.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "3.2k",
        image: "🎒",
        affiliateUrl:
          "https://www.amazon.in/s?k=waterproof+dry+bag+travel&tag=mytech03f_ux19n-21",
        tag: "Waterproof essentials",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Salt water and electronics are a catastrophic combination. A dry bag costs ₹1,000. A new phone doesn't.",
      },
      {
        name: "Banana Boat Sport SPF 50+ Sunscreen",
        description:
          "Reef-safe, water-resistant for 80 minutes, broad spectrum UVA/UVB. At tropical latitudes the UV index regularly hits 11 — SPF 50 is the minimum.",
        price: "₹549",
        rating: 4.4,
        reviews: "8.7k",
        image: "🧴",
        affiliateUrl:
          "https://www.amazon.in/s?k=SPF+50+sunscreen+water+resistant&tag=mytech03f_ux19n-21",
        tag: "UV index 11",
        tagColor: "bg-amber-100 text-amber-700",
        why: "A day without sunscreen at tropical latitudes means a painful, trip-ruining sunburn. Apply before you leave the room. Reapply every 2 hours.",
      },
    ],
  },
];

// ── South India / forest / wildlife gear ─────────────────────────────────────
export const FOREST_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear recommended for forest, wildlife, and coffee country travel",
    emoji: "🌿",
    items: [
      {
        name: "Binoculars",
        description:
          "Phase-coated optics, waterproof, fog-proof. The difference between seeing a distant elephant-shaped blob and actually watching an elephant is 8x magnification.",
        price: "₹8,999",
        rating: 4.6,
        reviews: "1.8k",
        image: "🔭",
        affiliateUrl:
          "https://www.amazon.in/s?k=binoculars+8x42+wildlife+safari&tag=mytech03f_ux19n-21",
        tag: "Wildlife essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A safari without binoculars is like a concert in the wrong seat. You'll see the leopard-shaped shadow; binoculars let you actually watch it move.",
      },
      {
        name: "Convertible Trousers",
        description:
          "Zip-off legs convert trousers to shorts. Omni-Shield moisture wicking. UPF 50+ sun protection. The perfect single item for forest walks, temple visits, and restaurant dinners.",
        price: "₹3,499",
        rating: 4.4,
        reviews: "2.1k",
        image: "👖",
        affiliateUrl:
          "https://www.amazon.in/s?k=convertible+trekking+trousers+UPF&tag=mytech03f_ux19n-21",
        tag: "Versatile",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Forest walks and restaurant dinners require different dress. These handle both without a change of outfit — one less item to pack.",
      },
      {
        name: "Insect Repellent",
        description:
          "Treats clothing and gear — binds to fabric and remains effective for 6 weeks or 6 washings. Odourless when dry. The most effective tick and leech deterrent available.",
        price: "₹1,899",
        rating: 4.5,
        reviews: "920",
        image: "🦟",
        affiliateUrl:
          "https://www.amazon.in/s?k=permethrin+clothing+insect+repellent&tag=mytech03f_ux19n-21",
        tag: "Leeches + ticks",
        tagColor: "bg-red-100 text-red-700",
        why: "Monsoon forest trails in Coorg and similar destinations have leeches. Permethrin on your trousers and socks is far more effective than DEET on skin.",
      },
    ],
  },
];

// ── Spiritual / cultural destination gear ─────────────────────────────────────
export const SPIRITUAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Practical items for temple towns, ashrams, and pilgrimage routes",
    emoji: "🙏",
    items: [
      {
        name: "RFID Blocking Travel Wallet",
        description:
          "Slim, RFID-blocking card holder that fits in a kurta pocket. Temple towns and crowded ghats are prime pickpocket environments — don't carry your main wallet.",
        price: "₹699",
        rating: 4.3,
        reviews: "5.4k",
        image: "👛",
        affiliateUrl:
          "https://www.amazon.in/s?k=RFID+travel+wallet+slim&tag=mytech03f_ux19n-21",
        tag: "Smart precaution",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Crowded ghats and temple queues are where pickpockets work. Keep cash and one card in a slim wallet; leave the rest at the guesthouse.",
      },
      {
        name: "Organic Cotton Stole / Scarf",
        description:
          "Lightweight, quick-dry, multi-purpose — head covering at Gurudwaras, shoulder covering at temples, picnic blanket, and improvised bag. One item, ten uses.",
        price: "₹399",
        rating: 4.4,
        reviews: "3.1k",
        image: "🧣",
        affiliateUrl:
          "https://www.amazon.in/s?k=cotton+stole+travel+multipurpose&tag=mytech03f_ux19n-21",
        tag: "Temple dress code",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Most temples, Gurudwaras, and mosques require covered heads and shoulders. Carrying a stole means you're never turned away at the entrance.",
      },
    ],
  },
];

// ── Props for the main component ─────────────────────────────────────────────
interface TrekGearProps {
  sections?: GearSection[];
  destination?: string;
}

// ── Star Rating component ─────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${
            star <= Math.floor(rating)
              ? "text-amber-400"
              : star - 0.5 <= rating
                ? "text-amber-300"
                : "text-stone-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function TrekGearRecommendations({
  sections = HIMALAYAN_GEAR,
  destination = "this trip",
}: TrekGearProps) {
  return (
    <section className="mt-16 pt-12 border-t border-stone-200">
      {/* Section header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-forest-500" />
          <span
            className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Gear Guide
          </span>
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          What to Pack for {destination}
        </h2>
        <p
          className="text-stone-500 text-sm max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Gear we've tested or rely on recommendations from people who have.
          Nothing here is sponsored — these are genuine picks based on what
          actually works on the trail.
        </p>

        {/* Affiliate disclosure — subtle but present */}
        <p
          className="text-stone-400 text-xs mt-2 flex items-center gap-1.5"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <svg
            className="w-3 h-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          As an Amazon Associate, we earn from qualifying purchases. Links may
          earn a small commission at no extra cost to you.
        </p>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="mb-14">
          {/* Grid of gear cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl border border-stone-200 hover:border-forest-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card top — emoji icon + tag */}
                <div className="bg-stone-50 px-5 pt-5 pb-4 flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                    {item.image}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full flex-shrink-0 mt-1 ${item.tagColor}`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Card body */}
                <div className="px-5 pb-5 flex flex-col flex-1">
                  {/* Name + rating */}
                  <div className="mb-2">
                    <h3
                      className="font-bold text-stone-900 text-sm leading-snug mb-1.5 group-hover:text-forest-700 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Why we recommend — the key section */}
                  <div className="bg-forest-50 rounded-lg px-3 py-2.5">
                    <p
                      className="text-xs text-forest-800 leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span className="font-semibold">Why carry it: </span>
                      {item.why}
                    </p>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
                    <Link
                      href={item.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-stone-900 text-xs font-bold rounded-xl transition-colors active:scale-95"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Shop Now
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse all link */}
          <div className="mt-6 flex justify-center">
            <Link
              href={`https://www.amazon.in/s?k=trekking+gear+india&tag=mytech03f_ux19n-21`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 px-6 py-3 border border-stone-200 text-stone-500 hover:border-amber-400 hover:text-amber-600 rounded-full text-xs font-semibold transition-all"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Browse all trekking gears
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
