import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

// Self-hosted via next/font: no render-blocking Google Fonts request, and
// size-adjusted fallbacks keep CLS near zero while the web fonts load.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
// Body serif for guide text. Not preloaded: it isn't used above the fold on
// the commercial pages, so preloading it only delays the headline font.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
  preload: false,
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const DEFAULT_DESCRIPTION =
  "Kudozz Club is an India-focused travel agency that plans customized trips across all 36 states and union territories, backed by 580+ in-depth destination guides. Tell us where you want to go and we'll build the trip around you.";

// ── Site-wide default metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://club.kudozz.in"),

  title: {
    default: "Kudozz Club | India Travel Agency & Custom Trip Planning",
    template: "%s | Kudozz Club",
  },
  description: DEFAULT_DESCRIPTION,

  keywords: [
    "travel agency in India",
    "India tour packages",
    "customized India trips",
    "India trip planner",
    "travel guide",
    "travel itinerary",
    "best places to visit in India",
    "India travel blog",
    "India travel guide",
    "Himalayan travel",
    "Ladakh travel guide",
    "Jammu and Kashmir travel guide",
    "Delhi travel guide",
    "Daman and Diu travel guide",
    "Manali",
    "Leh Ladakh",
    "Srinagar",
    "solo travel India",
    "adventure travel India",
    "offbeat destinations India",
    "weekend getaways from Delhi",
    "budget travel itinerary India",
    "how to plan a trip to India",
    "Kudozz Club",
    "Kudoz Club",
    "Kudos Club",
    "Kudoss Club",
  ],

  creator: "Kudozz Club",
  publisher: "Kudozz Club",

  // Open Graph
  openGraph: {
    title: "Kudozz Club | India Travel Agency & Custom Trip Planning",
    description: DEFAULT_DESCRIPTION,
    type: "website",
    locale: "en_IN",
    url: "https://club.kudozz.in",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kudozz Club, India travel agency",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    site: "@kudozz.in",
    creator: "@kudozz.in",
    title: "Kudozz Club | India Travel Agency & Custom Trip Planning",
    description: DEFAULT_DESCRIPTION,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // // Manifest for PWA
  // manifest: "/site.webmanifest",

  // Canonical URLs are set per page. There is deliberately no site-wide
  // default here: a root-level canonical is inherited by any page that
  // forgets its own (and by the 404 page), pointing them all at "/".

  authors: [
    {
      name: "Kudozz Club",
      url: "https://club.kudozz.in",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${sourceSerif.variable} ${dmSans.variable}`}
    >
      <head>

        <meta
          name="google-site-verification"
          content="0hbFb6pYWfYAfW77QdmlDy2euqOTCP7XfVqyGeac39s"
        />
        {/* JSON-LD: Organisation schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://club.kudozz.in/#organization",
              name: "Kudozz Club",
              alternateName: [
                "Kudoz Club",
                "Kudos Club",
                "Kudoss Club",
                "Kudoz",
                "Kudos",
              ],
              description:
                "Kudozz Club is an India-focused travel agency that plans customized trips across India in-house, backed by a library of 580+ destination guides covering every Indian state and union territory.",
              url: "https://club.kudozz.in",
              logo: "https://club.kudozz.in/favicon.ico",
              email: "connect@kudozz.in",
              areaServed: { "@type": "Country", name: "India" },
              knowsAbout: [
                "India Travel",
                "Customized India Tours",
                "India Trip Planning",
                "Travel Itineraries",
                "Family Holidays in India",
                "Honeymoon Destinations in India",
                "Pilgrimage Travel in India",
                "Wildlife Travel in India",
              ],
              sameAs: [
                "https://twitter.com/kudozz.in",
                "https://instagram.com/kudozz.in",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://club.kudozz.in/#website",
              name: "Kudozz Club",
              publisher: { "@id": "https://club.kudozz.in/#organization" },
              alternateName: ["Kudoz Club", "Kudos Club", "Kudoss Club"],
              url: "https://club.kudozz.in",
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6C19X2ET68"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6C19X2ET68');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-stone-50 antialiased">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
