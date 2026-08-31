import type { Metadata } from "next";
import WriteForUsPageClient from "@/components/write-for-us/WriteForUsPageClient";

export const metadata: Metadata = {
  title: "Write for Us — Contribute a Travel Guide",
  description:
    "Pitch an original, first-hand travel guide to Kudozz Club. Reach 12,000+ readers, get a dofollow author link, and see your story published.",
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
  return <WriteForUsPageClient />;
}
