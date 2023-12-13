import { useContext } from "react";

import type { ScrollGroupContextValue } from "@/contexts/Anim/scrollGroup/ScrollGroupContext";
import { ScrollGroupContext } from "@/contexts/Anim/scrollGroup/ScrollGroupContext";

export const useScrollGroup = (): ScrollGroupContextValue | null => {
  const scrollGroupContext = useContext(ScrollGroupContext);

  return scrollGroupContext;
};
