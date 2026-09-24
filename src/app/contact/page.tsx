import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactPageClient from "@/components/contact/ContactPageClient";
import { faqs } from "@/lib/contact-faqs";

export const metadata: Metadata = {
  title: { absolute: "Contact Kudozz Club | Plan Your Next Trip" },
  description:
    "Planning an India trip? Tell Kudozz Club where you want to go and we'll take it from there. Or email connect@kudozz.in about guides and collaborations.",
  keywords: [
    "contact Kudozz Club",
    "Kudozz Club email",
    "plan a trip Kudozz Club",
    "travel guide feedback",
    "collaborate with Kudozz Club",
    "report an error travel guide",
  ],
  alternates: { canonical: "https://club.kudozz.in/contact" },
};

function FaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      }}
    />
  );
}

export default function ContactPage() {
  return (
    <>
      <FaqSchema />
      <SiteHeader />
      <ContactPageClient />
      <SiteFooter />
    </>
  );
}
