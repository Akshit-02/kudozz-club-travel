// src/app/contact/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const reasons = [
  { value: "guide-feedback", label: "Guide Feedback" },
  { value: "write-for-us", label: "Write for Us" },
  { value: "collaboration", label: "Collaboration / Partnership" },
  { value: "correction", label: "Report an Error" },
  { value: "general", label: "General Enquiry" },
];

const faqs = [
  {
    q: "Do you accept guest posts?",
    a: "Yes! We love hearing from passionate travellers. Reach out with your pitch via the contact form and select 'Write for Us'.",
  },
  {
    q: "Are your guides sponsored?",
    a: "Never. Every recommendation is genuine. We don't accept paid placements in our editorial content.",
  },
  {
    q: "How often is the newsletter sent?",
    a: "Once a week, every Sunday morning. Occasionally we send a bonus edition for special destinations or seasonal alerts.",
  },
  {
    q: "Can I reuse your content?",
    a: "Please don't reproduce our guides without permission. For partnerships or licensing, reach out and we'll be happy to discuss.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // Simulate API call
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-stone-950 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,134,64,0.12)_0%,_transparent_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.03] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-500/15 border border-forest-500/25 rounded-full mb-6">
              <span
                className="text-forest-300 text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Say Hello
              </span>
            </div>
            <h1
              className="text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We'd love to
              <br />
              <span className="text-forest-300">hear from you.</span>
            </h1>
            <p
              className="text-white/60 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Whether it's feedback on a guide, a collaboration idea, or just a
              travel story you want to share — our inbox is always open.
            </p>
          </div>
        </section>

        {/* ── Contact Grid ── */}
        <section className="bg-stone-950 pb-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left — Info cards */}
              <div className="space-y-5">
                {/* Email */}
                <a
                  href="mailto:connect@kudozz.in"
                  className="flex items-start gap-4 p-5 bg-stone-900 border border-stone-800 rounded-2xl hover:border-forest-600/40 hover:bg-stone-800/80 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-forest flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-forest-900/40 transition-shadow">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Email us
                    </div>
                    <div
                      className="text-white font-medium group-hover:text-forest-400 transition-colors"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      connect@kudozz.in
                    </div>
                    <div
                      className="text-stone-600 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      We reply within 48 hours
                    </div>
                  </div>
                </a>

                {/* Newsletter */}
                <Link
                  href="/newsletter"
                  className="flex items-start gap-4 p-5 bg-stone-900 border border-stone-800 rounded-2xl hover:border-forest-600/40 hover:bg-stone-800/80 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📬</span>
                  </div>
                  <div>
                    <div
                      className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Newsletter
                    </div>
                    <div
                      className="text-white font-medium group-hover:text-amber-400 transition-colors"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Join Kudozz Club
                    </div>
                    <div
                      className="text-stone-600 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      12,000+ explorers subscribed
                    </div>
                  </div>
                </Link>

                {/* Response time */}
                <div className="p-5 bg-stone-900 border border-stone-800 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
                    <span
                      className="text-xs text-stone-400 uppercase tracking-widest font-semibold"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Typical response
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Under 48hrs
                  </div>
                  <p
                    className="text-stone-500 text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    We're a small team, but we read every message.
                    Collaborations & write-for-us enquiries may take a bit
                    longer.
                  </p>
                </div>

                {/* Write for us */}
                <div className="p-5 bg-gradient-to-br from-forest-900/40 to-stone-900 border border-forest-800/40 rounded-2xl">
                  <h3
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    ✍️ Write for Us
                  </h3>
                  <p
                    className="text-stone-400 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Passionate traveller with a story to tell? We'd love to
                    feature your writing and photos.
                  </p>
                  <div
                    className="text-forest-400 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Use the form → select "Write for Us"
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full bg-stone-900 border border-stone-800 rounded-3xl p-16 text-center">
                    <div className="w-16 h-16 rounded-full gradient-forest flex items-center justify-center mb-6 shadow-xl shadow-forest-900/40">
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
                      className="text-2xl font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Message sent!
                    </h2>
                    <p
                      className="text-stone-400 text-sm max-w-xs leading-relaxed mb-8"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Thanks for reaching out. We'll get back to you within 48
                      hours at connect@kudozz.in.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 border border-stone-700 text-stone-400 hover:text-white hover:border-stone-500 rounded-full text-sm transition-colors"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-stone-900 border border-stone-800 rounded-3xl p-8 space-y-6"
                  >
                    <div>
                      <h2
                        className="text-xl font-bold text-white mb-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Send us a message
                      </h2>
                      <p
                        className="text-stone-500 text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        All fields marked * are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        />
                      </div>
                      <div>
                        <label
                          className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
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
                        Reason *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all appearance-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <option value="" disabled selected>
                          Select a reason...
                        </option>
                        {reasons.map((r) => (
                          <option key={r.value} value={r.value}>
                            {r.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Brief subject line"
                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      />
                    </div>

                    <div>
                      <label
                        className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us more..."
                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all resize-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 gradient-forest text-white font-semibold rounded-xl text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-forest-900/30"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message →"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Frequently Asked
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-forest-200 hover:shadow-sm transition-all duration-200"
                >
                  <h3
                    className="font-bold text-stone-900 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="text-stone-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {faq.a}
                  </p>
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
