// Drop-in replacement for next/link with prefetching off by default.
// On Vercel every prefetched .rsc payload that misses the CDN is billed as an
// ISR read (~95 KB each here), and article pages carry dozens of internal
// links, so viewport prefetching would burn the Hobby quota. Pass
// prefetch={true} on a specific link to opt back in.
import NextLink from "next/link";
import type { ComponentProps } from "react";

export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
