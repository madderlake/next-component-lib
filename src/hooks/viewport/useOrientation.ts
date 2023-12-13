import type { ViewportOrientation } from "@/types/Viewport";

import { useScreenProp } from "./useScreenProp";

export const useOrientation = (): ViewportOrientation | null => {
  const value = useScreenProp("portrait");

  if (value === null) {
    return null;
  }

  return value ? "portrait" : "landscape";
};
