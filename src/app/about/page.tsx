// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "About Us — Our Story",
  description:
    "Kudozz Club is a travel community built by explorers, for explorers. Learn about our story, our mission, and the people behind the guides.",
};

const values = [
  {
    icon: "🧭",
    title: "Always Honest",
    desc: "We never take paid placements in our guides. Every recommendation is something we'd genuinely tell a friend.",
  },
  {
    icon: "🔍",
    title: "Deeply Researched",
    desc: "Our guides are built from real trips, local conversations, and obsessive attention to detail — not recycled blog content.",
  },
  {
    icon: "🌱",
    title: "Responsible Travel",
    desc: "We champion slow travel, local economies, and destinations that benefit from thoughtful visitors.",
  },
  {
    icon: "🤝",
    title: "Community First",
    desc: "Kudozz Club is a community, not a media company. Our readers shape what we write next.",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & Lead Writer",
    bio: "Former software engineer turned full-time traveller. Has visited 28 Indian states and counts Spiti Valley as his spiritual home.",
    avatar: "/images/related/spiti-valley.jpg",
    trips: "28 states",
  },
  {
    name: "Sneha Iyer",
    role: "Destination Editor",
    bio: "South India specialist and wildlife photographer. If it involves a forest, a temple, or a backwater, she's probably been twice.",
    avatar: "/images/related/rishikesh.jpg",
    trips: "South & East India",
  },
  {
    name: "Kabir Nair",
    role: "Adventure & Trekking",
    bio: "Certified mountaineer and trekking guide. Has completed 40+ Himalayan treks and writes our most detailed high-altitude guides.",
    avatar: "/images/related/leh-ladakh.jpg",
    trips: "40+ Himalayan treks",
  },
];

const milestones = [
  {
    year: "Nov, 2025",
    event: "Kudozz Club launched as a personal travel journal",
  },
  {
    year: "Dec, 2025",
    event: "First 1,000 newsletter subscribers — purely word of mouth",
  },
  {
    year: "Feb, 2026",
    event: "Expanded to full destination guides & itineraries section",
  },
  {
    year: "Apr, 2026",
    event: "Reached 10,000 monthly readers, launched explore.kudozz.in",
  },
  {
    year: "Jun, 2026",
    event: "12,000+ club members and 350+ published travel guides",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/related/leh-ladakh.jpg"
              alt="About Kudozz Club"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-800/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Our Story
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Built by explorers,
                <br />
                <span className="text-forest-300">for explorers.</span>
              </h1>
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                Kudozz Club started as a simple question: why is honest,
                practical travel information so hard to find? We decided to
                build the answer.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="bg-stone-950 py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <p
              className="text-2xl md:text-3xl text-stone-300 leading-relaxed font-light"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "We believe the best travel experiences come from{" "}
              <span className="text-white font-semibold italic">
                real information
              </span>
              , not polished sponsored content. Every guide we publish is
              something{" "}
              <span className="text-forest-300 font-semibold italic">
                we'd trust ourselves.
              </span>
              "
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-stone-900 border-y border-stone-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800">
              {[
                { value: "120+", label: "Destinations covered" },
                { value: "350+", label: "Guides published" },
                { value: "12K+", label: "Club members" },
                { value: "4", label: "Years on the road" },
              ].map((stat) => (
                <div key={stat.label} className="py-10 px-6 text-center">
                  <div
                    className="text-4xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-stone-500 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  What we stand for
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-5 bg-white rounded-2xl p-6 border border-stone-200 hover:border-forest-200 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-3xl flex-shrink-0 mt-1">{v.icon}</span>
                  <div>
                    <h3
                      className="font-bold text-stone-900 mb-1.5"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-sm text-stone-500 leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        {/* <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-forest-500" />
                <span
                  className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  The humans
                </span>
                <div className="h-px w-8 bg-forest-500" />
              </div>
              <h2
                className="text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Meet the Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3
                    className="font-bold text-stone-900 mb-0.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h3>
                  <div
                    className="text-forest-600 text-xs font-semibold uppercase tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {member.role}
                  </div>
                  <p
                    className="text-sm text-stone-500 leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {member.bio}
                  </p>
                  <span
                    className="inline-block px-3 py-1 text-xs bg-forest-50 text-forest-700 rounded-full border border-forest-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    🗺️ {member.trips}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── Timeline ── */}
        <section className="bg-stone-950 py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14">
              <h2
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Journey
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-stone-800" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex items-start gap-8">
                    <div className="w-16 text-right flex-shrink-0">
                      <span
                        className="text-forest-400 font-bold text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {m.year}
                      </span>
                    </div>
                    <div className="relative flex-shrink-0 mt-1">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${i === milestones.length - 1 ? "bg-forest-500 border-forest-400 shadow-lg shadow-forest-900/50" : "bg-stone-800 border-stone-700"}`}
                      />
                    </div>
                    <p
                      className="text-stone-400 text-sm leading-relaxed pt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Come explore with us.
            </h2>
            <p
              className="text-stone-500 mb-8 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Whether you join the newsletter, read a guide, or reach out to say
              hello — we're glad you're here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/newsletter"
                className="px-7 py-3.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity shadow-md"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Join the Club Free →
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 border border-stone-300 text-stone-700 font-semibold rounded-full text-sm hover:border-forest-400 hover:text-forest-700 transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
