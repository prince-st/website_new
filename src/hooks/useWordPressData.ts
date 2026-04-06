import { useEffect, useState } from "react";

export const WP_BASE = "https://dev-reactwebsite.pantheonsite.io/wp-json";

export const WP_PAGE_IDS = {
  INDEX: 170,
  HEADER: 32,
  FOOTER: 35,
};

/**
 * Safely extract image URL from ANY ACF image field format.
 *
 * ACF with acf_format=standard can return:
 *   false                          → not set / empty
 *   { url, sizes, alt, ... }       → full WP image object (most common)
 *   { url }                        → minimal image object
 *   "https://..."                  → direct URL string
 *   { ID, url, ... }               → image with ID
 *   { sizes: { thumbnail, medium, large, full } } → with sizes
 */
export function getImageUrl(field: any, size: "full" | "large" | "medium" | "thumbnail" = "full"): string | null {
  if (!field || field === false || field === null || field === undefined) return null;

  // Direct string URL
  if (typeof field === "string") {
    return field.startsWith("http") ? field : null;
  }

  // Object with url property (standard ACF image object)
  if (typeof field === "object") {
    // Try requested size first
    if (size !== "full" && field.sizes?.[size]) return field.sizes[size];
    // Fall back to full url
    if (field.url) return field.url;
    // Try sizes.full
    if (field.sizes?.full) return field.sizes.full;
    // Try guid (WordPress attachment URL)
    if (field.guid) return field.guid;
  }

  return null;
}

/**
 * Get image alt text from ACF image field.
 */
export function getImageAlt(field: any, fallback = ""): string {
  if (!field || field === false) return fallback;
  if (typeof field === "object") {
    return field.alt || field.title || fallback;
  }
  return fallback;
}

/**
 * Check if an ACF image field has a valid image.
 */
export function hasImage(field: any): boolean {
  return getImageUrl(field) !== null;
}

export function useWPPage(pageId: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Timestamp busts any server/CDN cache so ACF changes show immediately
    const url = `${WP_BASE}/wp/v2/pages/${pageId}?acf_format=standard&_fields=acf&_=${Date.now()}`;

    fetch(url, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => setData(json?.acf ?? null))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [pageId]);

  return { data, loading, error };
}
