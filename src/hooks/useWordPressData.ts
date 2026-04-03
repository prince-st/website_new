import { useEffect, useState } from "react";

export const WP_BASE = "https://dev-reactwebsite.pantheonsite.io/wp-json";

export const WP_PAGE_IDS = {
  INDEX: 170,
  HEADER: 32,
  FOOTER: 35,
};

export function useWPPage(pageId: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // cache: "no-store" ensures every render fetches fresh data from WordPress
    // so ACF changes reflect immediately without needing a rebuild
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
