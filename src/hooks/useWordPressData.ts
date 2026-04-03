import { useEffect, useState } from "react";

export const WP_BASE = "https://dev-reactwebsite.pantheonsite.io/wp-json";

// WordPress Page IDs
export const WP_PAGE_IDS = {
  ABOUT: 170,
  HEADER: 32,
  FOOTER: 35,
};

export async function fetchACFPage(pageId: number) {
  const res = await fetch(`${WP_BASE}/acf/v3/pages/${pageId}`);
  if (!res.ok) throw new Error(`Failed to fetch ACF page ${pageId}`);
  return res.json();
}

export function useACFPage(pageId: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchACFPage(pageId)
      .then((json) => setData(json?.acf ?? json))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [pageId]);

  return { data, loading, error };
}
