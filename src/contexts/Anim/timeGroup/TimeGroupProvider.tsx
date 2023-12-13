import type { ScrollGroup, TimeGroup } from "@marcom/anim-system";
import React from "react";

import type { TimeGroupContextValue } from "./TimeGroupContext";
import { TimeGroupContext } from "./TimeGroupContext";

export interface TimeGroupProviderProps {
  children: React.ReactNode;
  /** A timegroup that all animations can access */
  timeGroup: TimeGroup;
  /** A DOM ref that is used to anchor the provided scrollGroup */
  anchorRef?: React.RefObject<null | HTMLElement> | undefined;
  /** A scrollGroup that all animations can access */
  scrollGroup?: ScrollGroup;
  /** time when child should start. */
  childStartTime?: number;
  /** amount of time that each start time should be delayed. */
  startDelay?: number;
}

/**
 * Provider that provides a timeGroup, scrollGroup, a ref and shared timings that a component can use to orchestrate timed animations within nested components.
 */
export const TimeGroupProvider = ({
  children,
  anchorRef,
  timeGroup,
  scrollGroup,
  childStartTime = 0,
  startDelay = 0.2,
}: TimeGroupProviderProps): JSX.Element => {
  const GroupValues: TimeGroupContextValue = {
    timeGroup,
    scrollGroup,
    anchorRef,
    childStartTime,
    startDelay,
  };

  return (
    <TimeGroupContext.Provider value={GroupValues}>
      {children}
    </TimeGroupContext.Provider>
  );
};
