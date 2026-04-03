import { useEffect, useState } from "react";

export const WP_BASE = "https://dev-reactwebsite.pantheonsite.io/wp-json";

export const WP_PAGE_IDS = {
  INDEX: 170,   // All index page sections (hero, about, services, process, tech, upwork, why, cta)
  HEADER: 32,
  FOOTER: 35,
};

export function useWPPage(pageId: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${WP_BASE}/wp/v2/pages/${pageId}?acf_format=standard&_fields=acf`)
      .then((r) => r.json())
      .then((json) => setData(json?.acf ?? null))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [pageId]);

  return { data, loading, error };
}
