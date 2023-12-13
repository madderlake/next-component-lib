import type { ScrollGroup, TimeGroup } from "@marcom/anim-system";
import React from "react";

interface Core {
  readonly childStartTime: number;
  readonly startDelay: number;
}
interface Scroll {
  readonly scrollGroup?: ScrollGroup | undefined;
  readonly anchorRef?: React.RefObject<null | HTMLElement> | undefined;
}

interface Time extends Core {
  readonly timeGroup: TimeGroup;
}

export type TimeGroupContextValue = Time & Scroll;

export const TimeGroupContext =
  React.createContext<TimeGroupContextValue | null>(null);
