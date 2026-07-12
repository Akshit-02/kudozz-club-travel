import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";
import { faqs } from "@/lib/contact-faqs";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Reach the Kudozz Club team for guide feedback, collaborations, corrections, or general enquiries. We reply within 48 hours.",
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
      <ContactPageClient />
    </>
  );
}
