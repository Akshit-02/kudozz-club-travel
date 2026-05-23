// src/app/newsletter/page.tsx
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Join the Club — Free Travel Newsletter",
  description:
    "Get weekly travel guides, hidden gems, and curated itineraries delivered to your inbox. Join 12,000+ explorers in the Kudozz Club newsletter.",
};

const perks = [
  {
    icon: "🗺️",
    title: "Weekly Destination Guides",
    desc: "Deep-dive guides to India's most incredible places, from popular peaks to hidden valleys.",
  },
  {
    icon: "📋",
    title: "Ready-to-use Itineraries",
    desc: "Day-by-day trip plans you can copy, tweak, and take with you — no planning stress.",
  },
  {
    icon: "💡",
    title: "Insider Tips & Hacks",
    desc: "Visa tricks, budget hacks, packing lists, and local secrets you won't find on Google.",
  },
  {
    icon: "🏨",
    title: "Stay & Eat Recommendations",
    desc: "Curated stays and local eateries handpicked by our team — not sponsored, always honest.",
  },
  {
    icon: "📸",
    title: "Photo Spots & Hidden Gems",
    desc: "The lesser-known viewpoints, trails, and cafes that make a trip truly unforgettable.",
  },
  {
    icon: "🎒",
    title: "Seasonal Travel Alerts",
    desc: "Best time to go, festival dates, weather warnings — we keep you ahead of the calendar.",
  },
];

const testimonials = [
  {
    name: "Aditya R.",
    location: "Mumbai",
    text: "Honestly the best travel newsletter I've subscribed to. Every edition has something genuinely useful.",
  },
  {
    name: "Priya S.",
    location: "Bangalore",
    text: "Planned my entire Spiti trip using their guides. Saved so much time and the trip was perfect.",
  },
  {
    name: "Rahul M.",
    location: "Delhi",
    text: "The itineraries are so detailed. Feels like a friend who's already been there is walking you through it.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-stone-950">
          <div className="absolute inset-0">
            <img
              src="/images/destinations/manali/hero.jpg"
              alt="Newsletter hero"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/50 to-stone-950" />
          </div>
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto px-6 pt-28 pb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-500/20 border border-forest-500/30 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
              <span
                className="text-forest-300 text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Free Newsletter
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Travel smarter.
              <br />
              <span className="text-forest-300">Explore deeper.</span>
            </h1>
            <p
              className="text-white/65 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Join 12,000+ explorers who get our weekly travel guides, curated
              itineraries, and hidden gems — straight to their inbox.
            </p>
          </div>
        </section>

        {/* ── Sign-up Form ── */}
        <section className="bg-stone-950 pb-24">
          <div className="max-w-xl mx-auto px-6">
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 shadow-2xl -mt-8 relative z-10">
              <h2
                className="text-xl font-bold text-white mb-1 text-center"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Join the Kudozz Club
              </h2>
              <p
                className="text-stone-500 text-sm text-center mb-7"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                No spam. Unsubscribe anytime. Takes 10 seconds.
              </p>

              <form
                action="/api/newsletter"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Aditya"
                      required
                      className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Sharma"
                      className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Travel Interests
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mountains",
                      "Beaches",
                      "Heritage",
                      "Adventure",
                      "Road Trips",
                      "Budget Travel",
                    ].map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-2 px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-full cursor-pointer hover:border-forest-500/50 transition-colors group"
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          className="accent-forest-500 w-3 h-3"
                        />
                        <span
                          className="text-xs text-stone-400 group-hover:text-stone-300"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 gradient-forest text-white font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-forest-900/30 text-sm mt-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Join Free — Get My First Guide →
                </button>
              </form>

              <p
                className="text-center text-xs text-stone-600 mt-4"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                By subscribing you agree to our{" "}
                <a
                  href="/privacy"
                  className="text-stone-500 hover:text-stone-300 underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── What You Get ── */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  What's inside
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Every edition includes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-forest-200 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {perk.icon}
                  </span>
                  <h3
                    className="font-bold text-stone-900 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {perk.title}
                  </h3>
                  <p
                    className="text-sm text-stone-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14">
              <h2
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What our readers say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-6"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-stone-600 text-sm leading-relaxed mb-5 italic"
                    style={{ fontFamily: "var(--font-source-serif)" }}
                  >
                    "{t.text}"
                  </p>
                  <div>
                    <div
                      className="font-semibold text-stone-800 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-stone-400 text-xs"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
