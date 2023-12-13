import { useContext } from "react";

import type { TimeGroupContextValue } from "@/contexts/Anim/timeGroup/TimeGroupContext";
import { TimeGroupContext } from "@/contexts/Anim/timeGroup/TimeGroupContext";

export const useTimeGroupContext = (): TimeGroupContextValue | null => {
  const timeGroupContext = useContext(TimeGroupContext);

  return timeGroupContext;
};
