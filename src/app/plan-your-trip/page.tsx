import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PlanTripPageClient from "@/components/plan-trip/PlanTripPageClient";

export const metadata: Metadata = {
  title: "Plan Your Trip | Custom India Itinerary",
  description:
    "Tell Kudozz Club where you want to go, when, and your budget. Our team plans a customized India itinerary around you: family holidays, honeymoons, pilgrimages and more.",
  keywords: [
    "India trip planner",
    "India travel planner",
    "customized India tour",
    "plan India trip",
    "custom India itinerary",
    "India trip planner",
    "get a custom itinerary",
    "Kudozz Club trip planning",
  ],
  alternates: { canonical: "https://club.kudozz.in/plan-your-trip" },
  openGraph: {
    title: "Plan Your Trip | Custom India Itinerary | Kudozz Club",
    description:
      "Tell us where you want to go in India and our in-house team will plan the trip around your dates, budget and travel style.",
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
          name: "Plan Your Trip With Kudozz Club",
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
            provider: { "@id": "https://club.kudozz.in/#organization" },
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
      <SiteHeader />
      <PlanTripPageClient />
      <SiteFooter />
    </>
  );
}
