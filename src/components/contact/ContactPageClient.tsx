"use client";
import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/contact-faqs";

const reasons = [
  { value: "guide-feedback", label: "Guide Feedback" },
  { value: "write-for-us", label: "Write for Us" },
  { value: "collaboration", label: "Collaboration / Partnership" },
  { value: "correction", label: "Report an Error" },
  { value: "general", label: "General Enquiry" },
];

export default function ContactPageClient() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          reason: data.get("reason"),
          subject: data.get("subject"),
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
      <main>
        {/* ── Hero: trip enquiries first ── */}
        <section className="bg-stone-950 pb-16 pt-32 sm:pt-36">
          <div className="container-site max-w-4xl">
            <p className="eyebrow eyebrow-light">Contact Kudozz Club</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
              Let&rsquo;s Plan Your Next Trip
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone-300 sm:text-lg">
              Have a destination in mind? Already know your dates? Or simply know
              that you need a break? Tell us what you&rsquo;re looking for and
              we&rsquo;ll take it from there.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/plan-your-trip?from=/contact" className="btn-primary px-8">
                Plan My Trip →
              </Link>
              <a href="mailto:connect@kudozz.in" className="btn-outline-light px-8">
                Email connect@kudozz.in
              </a>
            </div>
          </div>
        </section>

        {/* ── Other enquiries ── */}
        <div className="bg-stone-950 pb-6">
          <div className="container-site max-w-6xl border-t border-stone-800 pt-12">
            <h2 className="font-display text-2xl font-bold text-white">Not about a trip?</h2>
            <p className="mt-2 max-w-2xl font-sans text-sm text-stone-400">
              Use the form below for guide feedback, corrections, collaborations
              or writing for us. Trip requests are faster through the{" "}
              <Link href="/plan-your-trip" className="font-semibold text-saffron-300 underline underline-offset-4">
                Plan My Trip form
              </Link>
              .
            </p>
          </div>
        </div>

        {/* ── Contact Grid ── */}
        <section className="bg-stone-950 pb-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left — Info cards */}
              <div className="space-y-5">
                {/* Plan a trip */}
                <Link
                  href="/plan-your-trip"
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-forest-900/50 to-stone-900 border border-forest-700/40 rounded-2xl hover:border-forest-500/60 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-forest flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-xs text-forest-400 uppercase tracking-widest font-semibold mb-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Planning a trip?
                    </div>
                    <div
                      className="text-white font-medium group-hover:text-forest-300 transition-colors"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Use our trip planning form →
                    </div>
                    <div
                      className="text-stone-500 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Faster than the general contact form below
                    </div>
                  </div>
                </Link>

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
                      For anything, trip or otherwise
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
                      Weekly guide drops, free forever
                    </div>
                  </div>
                </Link>

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
                      Thanks for reaching out. We&rsquo;ll reply by email.
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
                        Other enquiries
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
                          name="name"
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
                          name="email"
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
                        name="reason"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all appearance-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <option value="" disabled>
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
                        name="subject"
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
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us more..."
                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all resize-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      />
                    </div>

                    {error && (
                      <p
                        className="text-red-400 text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {error}
                      </p>
                    )}

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
    </>
  );
}
