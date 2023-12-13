import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export const useIsAndroid = (): boolean | null => {
  const [query, setQuery] = useState<null | boolean>(null);
  useEffect(() => {
    const ua = new UAParser().getResult();

    if (ua.browser.name === "Android Browser") {
      setQuery(true);
    } else {
      setQuery(false);
    }
  }, []);

  return query;
};
