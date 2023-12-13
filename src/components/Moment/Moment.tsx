import React from "react";

import { MomentBase } from "./MomentBase";
import type { MomentEnhancedProps } from "./MomentEnhanced";
import { MomentEnhanced } from "./MomentEnhanced";

export type MomentProps = MomentEnhancedProps & {
  /** Whether or not to use the enhanced variant, which includes animations. */
  enhanced: boolean;
};

export const Moment = ({
  children,
  enhanced,
  name,
  ...rest
}: MomentProps): JSX.Element => {
  return enhanced ? (
    <MomentEnhanced name={name} {...rest}>
      {children}
    </MomentEnhanced>
  ) : (
    <MomentBase {...rest}> {children}</MomentBase>
  );
};
