"use client";
import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const tripTypes = [
  "Family Holiday",
  "Honeymoon",
  "Couple Trip",
  "Group Tour",
  "Solo Trip",
  "Weekend Getaway",
  "Adventure Trip",
  "Wildlife Trip",
  "Spiritual / Pilgrimage",
  "Luxury Holiday",
  "Budget Holiday",
  "Not sure yet",
];

const steps = [
  {
    step: "01",
    title: "Tell us where you want to go",
    desc: "Share your destination, dates, and who's travelling.",
  },
  {
    step: "02",
    title: "We plan it in-house",
    desc: "Our team builds an itinerary based on your preferences — no outsourced call center, no generic template.",
  },
  {
    step: "03",
    title: "We reply by email",
    desc: "You'll hear back from us at your inbox with a plan to review and refine.",
  },
];

export default function PlanTripPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/plan-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          destination: data.get("destination"),
          travelDates: data.get("travelDates"),
          travelers: data.get("travelers"),
          tripType: data.get("tripType"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-stone-950 pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,134,64,0.14)_0%,_transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-500/15 border border-forest-500/25 rounded-full mb-6">
              <span
                className="text-forest-300 text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Plan Your Trip
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tell us where.
              <br />
              <span className="text-forest-300">We'll plan the journey.</span>
            </h1>
            <p
              className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Kudozz Club's team plans trips across India in-house — no
              outsourced call center, no marketplace of unknown agents. Share
              your destination and preferences below, and we'll get back to
              you by email.
            </p>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="bg-stone-950 pb-16">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="p-5 bg-stone-900 border border-stone-800 rounded-2xl"
                >
                  <span
                    className="text-forest-400 font-bold text-2xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.step}
                  </span>
                  <h3
                    className="text-white font-semibold mt-2 mb-1.5 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-stone-500 text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form ── */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-2xl mx-auto px-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center bg-white border border-stone-200 rounded-3xl p-16 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full gradient-forest flex items-center justify-center mb-6 shadow-xl shadow-forest-900/20">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2
                  className="text-2xl font-bold text-stone-900 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Enquiry received!
                </h2>
                <p
                  className="text-stone-500 text-sm max-w-xs leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Thanks for reaching out. Our team will get back to you by
                  email at connect@kudozz.in.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-stone-300 text-stone-500 hover:text-stone-800 hover:border-stone-400 rounded-full text-sm transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Plan another trip
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-stone-200 rounded-3xl p-8 space-y-6 shadow-sm"
              >
                <div>
                  <h2
                    className="text-xl font-bold text-stone-900 mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Get a custom itinerary
                  </h2>
                  <p
                    className="text-stone-500 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Fields marked * are required — the rest just help us plan
                    faster.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Destination(s) *
                  </label>
                  <input
                    type="text"
                    name="destination"
                    required
                    placeholder="e.g. Rajasthan, Kerala, or 'not sure yet'"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Travel dates
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      placeholder="e.g. Dec 2026, flexible"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Number of travelers
                    </label>
                    <input
                      type="text"
                      name="travelers"
                      placeholder="e.g. 2 adults, 1 child"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Trip type
                  </label>
                  <select
                    name="tripType"
                    defaultValue=""
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all appearance-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <option value="" disabled>
                      Select a trip type...
                    </option>
                    {tripTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Budget range, must-see places, pace of travel, special requirements..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all resize-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                {error && (
                  <p
                    className="text-red-600 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 gradient-forest text-white font-semibold rounded-xl text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-forest-900/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {loading ? "Sending..." : "Get My Custom Itinerary →"}
                </button>

                <p
                  className="text-center text-stone-400 text-xs"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Prefer email? Write to us directly at{" "}
                  <a
                    href="mailto:connect@kudozz.in"
                    className="text-forest-600 hover:text-forest-700 underline"
                  >
                    connect@kudozz.in
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
