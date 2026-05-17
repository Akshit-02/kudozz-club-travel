// src/app/write-for-us/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const guidelines = [
  {
    icon: "📏",
    title: "Length & Format",
    points: [
      "Minimum 1,500 words — we prefer 2,500–4,000 for destination guides",
      "Use clear H2 and H3 headings to structure the piece",
      "Include a practical section: costs, how to get there, best time to visit",
      "Break up long sections with bullet lists, tables, or callout boxes",
    ],
  },
  {
    icon: "📸",
    title: "Photos & Media",
    points: [
      "Submit at least 5 original high-resolution photos (min 1200px wide)",
      "Only photos you personally took — no stock images",
      "Include a landscape hero shot and 2–3 detail/activity shots",
      "Photos should be lightly edited — natural colours preferred",
    ],
  },
  {
    icon: "✍️",
    title: "Tone & Voice",
    points: [
      "Write like you're telling a well-travelled friend, not a tourist brochure",
      "Be specific — exact prices, names of dhabas, permit procedures",
      "Include at least one personal anecdote or moment from the trip",
      "Honest is better than positive — if something isn't worth it, say so",
    ],
  },
  {
    icon: "🔍",
    title: "Research & Accuracy",
    points: [
      "All factual claims must be verifiable or from personal experience",
      "Prices and timings should be as current as possible (state the date)",
      "Do not copy or paraphrase content from other travel blogs",
      "Link to official sources where relevant (permits, government sites)",
    ],
  },
];

const whatWeAccept = [
  {
    emoji: "✅",
    label: "Destination deep-dives (India focus, global welcome)",
  },
  { emoji: "✅", label: "Trekking & adventure guides with route details" },
  { emoji: "✅", label: "Off-beat & hidden gem discoveries" },
  { emoji: "✅", label: "Budget travel breakdowns with real numbers" },
  {
    emoji: "✅",
    label: "Solo travel, female travel, family travel perspectives",
  },
  { emoji: "✅", label: "Cultural & heritage travel stories" },
  { emoji: "✅", label: "Road trip itineraries with maps & stops" },
  {
    emoji: "❌",
    label: "Hotel/resort reviews (we don't accept sponsored stays)",
  },
  { emoji: "❌", label: "Listicles with no original insight or photos" },
  { emoji: "❌", label: "Content previously published elsewhere" },
  { emoji: "❌", label: "Destination content without first-hand experience" },
];

const process = [
  {
    step: "01",
    title: "Send Your Pitch",
    desc: "Fill out the form below with your destination, angle, and 2–3 sample sentences of your writing style. No need to write the full piece yet.",
  },
  {
    step: "02",
    title: "We Review (5–7 days)",
    desc: "Our editor reviews your pitch and either greenlights it, suggests a different angle, or respectfully passes. We reply to every submission.",
  },
  {
    step: "03",
    title: "Write & Submit Draft",
    desc: "Once approved, write the full piece with photos and submit via Google Doc (shared with edit access) within the agreed deadline.",
  },
  {
    step: "04",
    title: "Editing Round",
    desc: "We may suggest edits for clarity, structure, or accuracy. One round of revisions is standard — we keep your voice intact.",
  },
  {
    step: "05",
    title: "Published & Promoted",
    desc: "Your piece goes live with your author bio, photo, and social links. We share it across our newsletter and social channels.",
  },
];

const perks = [
  {
    icon: "🌐",
    title: "Dofollow Author Link",
    desc: "Your bio includes a dofollow link to your website or social — great for SEO.",
  },
  {
    icon: "📬",
    title: "Newsletter Feature",
    desc: "Your guide gets featured in our weekly newsletter to 12,000+ subscribers.",
  },
  {
    icon: "📣",
    title: "Social Amplification",
    desc: "We share every published piece across Instagram, Twitter/X, and Pinterest.",
  },
  {
    icon: "🏅",
    title: "Contributor Badge",
    desc: "A verified Kudozz Club Contributor badge you can display on your own blog or profile.",
  },
];

export default function WriteForUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/manali/hero.jpg"
              alt="Write for Kudozz Club"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/70 to-stone-800/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute top-28 right-8 sm:right-14 z-10">
            <div className="flex flex-col items-center gap-1 px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center">
              <span className="text-3xl">✍️</span>
              <span
                className="text-white text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Open to
                <br />
                Contributors
              </span>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Contribute
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-[1.05]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Share your story
                <br />
                <span className="text-forest-300">with 12,000 explorers.</span>
              </h1>
              <p
                className="text-white/70 text-lg leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                Kudozz Club publishes original, first-hand travel guides from
                real travellers. If you've been somewhere worth writing about,
                we want to hear from you.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { value: "12K+", label: "Newsletter readers" },
                  { value: "48hr", label: "Pitch response time" },
                  { value: "Free", label: "No fees to submit" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-white/45 text-xs uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PERKS
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-950 py-20 border-b border-stone-800">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-400 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  What you get
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Why write for Kudozz Club?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-forest-700/50 hover:bg-stone-800/80 transition-all duration-300 group"
                >
                  <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {perk.icon}
                  </span>
                  <h3
                    className="font-bold text-white mb-2 text-sm"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {perk.title}
                  </h3>
                  <p
                    className="text-stone-500 text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WHAT WE ACCEPT
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Content types
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold text-stone-900 mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  What we accept
                  <br />& what we don't
                </h2>
                <p
                  className="text-stone-500 text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  We keep our standards high so every guide is genuinely useful
                  to our readers. We'd rather publish one great piece than ten
                  mediocre ones.
                </p>
                <ul className="space-y-3">
                  {whatWeAccept.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">
                        {item.emoji}
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${item.emoji === "❌" ? "text-stone-400 line-through decoration-stone-400/50" : "text-stone-700"}`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guidelines */}
              <div className="space-y-5">
                {guidelines.map((g) => (
                  <div
                    key={g.title}
                    className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-forest-200 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl">{g.icon}</span>
                      <h3
                        className="font-bold text-stone-900"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {g.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {g.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-stone-500"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <span className="text-forest-400 font-bold mt-0.5 flex-shrink-0">
                            →
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PROCESS
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-950 py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-400 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  How it works
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                From pitch to published
              </h2>
            </div>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-forest-600 via-forest-800 to-transparent hidden sm:block" />

              <div className="space-y-8">
                {process.map((step, i) => (
                  <div key={step.step} className="flex gap-6 group">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          i === 0
                            ? "gradient-forest text-white shadow-lg shadow-forest-900/40"
                            : "bg-stone-900 border border-stone-700 text-stone-500 group-hover:border-forest-700/50 group-hover:text-forest-400"
                        }`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {step.step}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-2 pt-2">
                      <h3
                        className="font-bold text-white mb-1.5 group-hover:text-forest-300 transition-colors"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-stone-500 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PITCH FORM
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Submit a pitch
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl font-bold text-stone-900 mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ready to contribute?
              </h2>
              <p
                className="text-stone-500 text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Fill out the form below. We'll get back to you within 5–7
                working days.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white border border-stone-200 rounded-3xl p-16 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full gradient-forest flex items-center justify-center mx-auto mb-6 shadow-xl shadow-forest-900/20">
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
                  Pitch received!
                </h2>
                <p
                  className="text-stone-500 text-sm max-w-sm mx-auto leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Thank you for pitching to Kudozz Club. Our editor will review
                  your submission and reply to your email within 5–7 working
                  days.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-stone-300 text-stone-600 hover:border-forest-400 hover:text-forest-700 rounded-full text-sm transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Submit another pitch
                  </button>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Browse our guides →
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm space-y-6"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 focus:bg-white transition-all"
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
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 focus:bg-white transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                </div>

                {/* Website / Portfolio */}
                <div>
                  <label
                    className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Your Website / Portfolio / Instagram
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 focus:bg-white transition-all"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                {/* Destination */}
                <div>
                  <label
                    className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Destination / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Spiti Valley in October, Solo trek to Kedarkantha..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 focus:bg-white transition-all"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                {/* Content Type */}
                <div>
                  <label
                    className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Content Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Destination Guide",
                      "Trekking Route",
                      "Road Trip",
                      "Budget Breakdown",
                      "Off-beat Discovery",
                      "Cultural Story",
                      "Solo Travel",
                      "Family Travel",
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full cursor-pointer hover:border-forest-400 hover:bg-forest-50 transition-colors group text-sm"
                      >
                        <input
                          type="radio"
                          name="contentType"
                          value={type}
                          className="accent-forest-500 w-3 h-3"
                        />
                        <span
                          className="text-stone-500 group-hover:text-stone-700"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pitch */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="text-xs font-semibold text-stone-400 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Your Pitch * (100–300 words)
                    </label>
                    <span
                      className={`text-xs ${charCount > 300 ? "text-red-400" : charCount > 80 ? "text-forest-500" : "text-stone-400"}`}
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {charCount} / 300
                    </span>
                  </div>
                  <textarea
                    required
                    rows={6}
                    placeholder="Describe your piece — what's the destination, what's the unique angle, what will readers take away? Include 2–3 sentences written in the voice you'd use for the article."
                    onChange={(e) =>
                      setCharCount(
                        e.target.value.split(/\s+/).filter(Boolean).length,
                      )
                    }
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 focus:bg-white transition-all resize-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  <p
                    className="text-xs text-stone-400 mt-1.5"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Word count shown above. Aim for 100–300 words in this pitch
                    field.
                  </p>
                </div>

                {/* Have photos? */}
                <div>
                  <label
                    className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Do you have original photos? *
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: "yes-many", label: "Yes — 10+ photos" },
                      { value: "yes-some", label: "Yes — 5–10 photos" },
                      { value: "no", label: "No original photos" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="photos"
                          value={opt.value}
                          required
                          className="accent-forest-500 w-4 h-4"
                        />
                        <span
                          className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {/* Warning */}
                  <p
                    className="text-xs text-amber-600 mt-2 flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    We require at least 5 original photos. Pitches without
                    photos are unlikely to be accepted.
                  </p>
                </div>

                {/* Agreement */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    className="accent-forest-500 w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span
                    className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-700 transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    I confirm this is original, first-hand content that has not
                    been published elsewhere. I've read the{" "}
                    <a
                      href="#guidelines"
                      className="text-forest-600 underline hover:text-forest-800"
                    >
                      content guidelines
                    </a>{" "}
                    and agree to them.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 gradient-forest text-white font-semibold rounded-xl text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-forest-900/20"
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
                      Submitting your pitch...
                    </>
                  ) : (
                    "Submit My Pitch →"
                  )}
                </button>

                <p
                  className="text-center text-xs text-stone-400"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Questions? Email us at{" "}
                  <a
                    href="mailto:connect@kudozz.in"
                    className="text-forest-600 hover:text-forest-800 underline"
                  >
                    connect@kudozz.in
                  </a>
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
