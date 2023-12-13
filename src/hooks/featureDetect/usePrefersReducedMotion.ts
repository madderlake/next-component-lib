import { useEffect, useState } from "react";

export const usePrefersReducedMotion = (): boolean | null => {
  const [query, setQuery] = useState<null | boolean>(null);
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setQuery(motionQuery?.matches);
  }, []);

  return query;
};
