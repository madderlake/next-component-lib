import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export const useArQuickLook = (): boolean | null => {
  const [query, setQuery] = useState<null | boolean>(null);
  useEffect(() => {
    const ua = new UAParser().getResult();
    const testElement = document.createElement("a");
    const arSupported = testElement.relList.supports("ar");
    let iOsVersion: number | null = null;
    if (ua.os.name === "iOS") {
      iOsVersion = parseInt(ua.os.version?.split(".")[0] as string);
    } else {
      setQuery(false);
    }
    let isSupported: boolean;
    if (iOsVersion !== null) {
      isSupported = arSupported && iOsVersion >= 13;
      setQuery(isSupported);
    }
  }, []);

  return query;
};
