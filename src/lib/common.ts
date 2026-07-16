// src/lib/common.ts
export const AMAZON_AFFILIATE_TAG = "mytech0d6-21";

export function amazonSearchUrl(query: string): string {
  return `https://www.amazon.in/s?k=${query}&tag=${AMAZON_AFFILIATE_TAG}`;
}
