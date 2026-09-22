import type { Metadata } from "next";
import PlanTripPageClient from "@/components/plan-trip/PlanTripPageClient";

export const metadata: Metadata = {
  title: "Plan Your Trip — Custom India Itinerary",
  description:
    "Tell Kudozz Club where you want to go in India and we'll plan the trip in-house — family holidays, honeymoons, weekend getaways, and more. Get a custom itinerary by email.",
  keywords: [
    "plan India trip",
    "custom India itinerary",
    "India trip planner",
    "get a custom itinerary",
    "Kudozz Club trip planning",
  ],
  alternates: { canonical: "https://club.kudozz.in/plan-your-trip" },
  openGraph: {
    title: "Plan Your Trip — Custom India Itinerary | Kudozz Club",
    description:
      "Tell us where you want to go in India and our in-house team will plan the trip — family holidays, honeymoons, weekend getaways, and more.",
    url: "https://club.kudozz.in/plan-your-trip",
    type: "website",
  },
};

function PlanTripSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Plan Your Trip — Kudozz Club",
          url: "https://club.kudozz.in/plan-your-trip",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Plan Your Trip",
                item: "https://club.kudozz.in/plan-your-trip",
              },
            ],
          },
          mainEntity: {
            "@type": "Service",
            name: "India Trip Planning",
            serviceType: "Custom travel itinerary planning",
            provider: {
              "@type": "Organization",
              name: "Kudozz Club",
              url: "https://club.kudozz.in",
              email: "connect@kudozz.in",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "In-house custom trip planning across India — family holidays, honeymoons, weekend getaways, and more. Pricing is enquiry-based.",
          },
        }),
      }}
    />
  );
}

export default function PlanYourTripPage() {
  return (
    <>
      <PlanTripSchema />
      <PlanTripPageClient />
    </>
  );
}
