import type { ScrollGroup } from "@marcom/anim-system";
import React from "react";

export interface ScrollGroupContextValue {
  scrollGroup: null | ScrollGroup;
  scrollGroupRef: React.RefObject<null | HTMLElement>;
}

export const ScrollGroupContext =
  React.createContext<ScrollGroupContextValue | null>(null);
