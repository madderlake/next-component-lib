import { useEffect, useState } from "react";

export const useTouchAvailable = (): boolean | null => {
  const [query, setQuery] = useState<null | boolean>(null);
  useEffect(() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");
    setQuery(touchQuery?.matches);
  }, []);

  return query;
};
