import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WriteForUsPageClient from "@/components/write-for-us/WriteForUsPageClient";

export const metadata: Metadata = {
  title: "Write for Us — Contribute a Travel Guide",
  description:
    "Pitch an original, first-hand India travel guide to Kudozz Club and get published with an author bio link.",
  keywords: [
    "write for us travel",
    "travel guest post India",
    "contribute travel guide",
    "travel blog guest writer",
    "pitch a travel article",
    "travel writing submissions India",
  ],
  alternates: { canonical: "https://club.kudozz.in/write-for-us" },
};

export default function WriteForUsPage() {
  return (
    <>
      <SiteHeader />
      <WriteForUsPageClient />
      <SiteFooter />
    </>
  );
}
