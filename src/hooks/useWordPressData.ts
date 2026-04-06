import { useEffect, useState } from "react";

export const WP_BASE = "https://dev-reactwebsite.pantheonsite.io/wp-json";

export const WP_PAGE_IDS = {
  INDEX: 170,
  HEADER: 32,
  FOOTER: 35,
};

/**
 * Safely extract image URL from any ACF image field.
 * ACF with acf_format=standard returns:
 *   - false          → not set
 *   - { url, alt, width, height, ... } → full image object
 *   - "https://..."  → direct URL string (rare)
 */
export function getImageUrl(field: any): string | null {
  if (!field || field === false) return null;
  if (typeof field === "string" && field.startsWith("http")) return field;
  if (typeof field === "object" && field.url) return field.url;
  return null;
}

/**
 * Safely extract image alt text from ACF image field.
 */
export function getImageAlt(field: any, fallback = ""): string {
  if (!field || field === false) return fallback;
  if (typeof field === "object" && field.alt) return field.alt;
  return fallback;
}

export function useWPPage(pageId: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      `${WP_BASE}/wp/v2/pages/${pageId}?acf_format=standard&_fields=acf&_=${Date.now()}`,
      { cache: "no-store" }
    )
      .then((r) => r.json())
      .then((json) => setData(json?.acf ?? null))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [pageId]);

  return { data, loading, error };
}
