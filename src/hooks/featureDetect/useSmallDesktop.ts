import { useEffect, useState } from "react";

import { useViewport } from "@/hooks/viewport/useViewport";

import { useTouchAvailable } from "./useTouchAvailable";

export const useSmallDesktop = (): boolean | null => {
  const [query, setQuery] = useState<null | boolean>(null);
  const isTouchAvailable = useTouchAvailable();
  const viewport = useViewport(["small", "medium"]);
  useEffect(() => {
    if (isTouchAvailable === false && viewport?.name === "small") {
      setQuery(true);
    } else {
      setQuery(false);
    }
  }, [viewport, isTouchAvailable]);

  return query;
};
