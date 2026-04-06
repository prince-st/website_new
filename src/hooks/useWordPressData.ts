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
 * ACF with acf_format=standard returns one of:
 *   false / null / undefined  → not set
 *   { url, sizes, alt, ... }  → full WP attachment object  ← most common
 *   { ID, url, ... }          → attachment with ID
 *   "https://..."             → direct URL string
 *   number (attachment ID)    → just the ID (rare, needs separate fetch)
 *
 * @param field  - The raw ACF field value
 * @param size   - Image size to prefer: "full" | "large" | "medium" | "thumbnail"
 */
export function getImageUrl(
  field: any,
  size: "full" | "large" | "medium" | "thumbnail" = "full"
): string | null {
  // Empty / not set
  if (field === false || field === null || field === undefined || field === "") {
    return null;
  }

  // Direct URL string
  if (typeof field === "string") {
    return field.startsWith("http") ? field : null;
  }

  // Number = attachment ID only (acf_format=standard should prevent this, but just in case)
  if (typeof field === "number") {
    // Can't resolve without an extra API call — return null, fallback icon will show
    return null;
  }

  // Object (standard ACF image object)
  if (typeof field === "object") {
    // Try requested size from sizes object
    if (size !== "full" && field.sizes) {
      const sizeUrl = field.sizes[size] || field.sizes[`${size}-width`];
      if (sizeUrl && typeof sizeUrl === "string") return sizeUrl;
    }

    // Primary: direct url property
    if (field.url && typeof field.url === "string") return field.url;

    // Fallback: sizes.full
    if (field.sizes?.full && typeof field.sizes.full === "string") return field.sizes.full;

    // Fallback: guid (raw WP attachment URL)
    if (field.guid && typeof field.guid === "string") return field.guid;

    // Fallback: source_url (REST API format)
    if (field.source_url && typeof field.source_url === "string") return field.source_url;
  }

  return null;
}

/**
 * Get alt text from ACF image field.
 */
export function getImageAlt(field: any, fallback = ""): string {
  if (!field || field === false) return fallback;
  if (typeof field === "object") {
    return field.alt || field.title || field.caption || fallback;
  }
  return fallback;
}

/**
 * Returns true if the field has a usable image URL.
 */
export function hasImage(field: any): boolean {
  return getImageUrl(field) !== null;
}

export function useWPPage(pageId: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
