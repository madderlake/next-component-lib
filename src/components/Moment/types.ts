import type React from "react";

export interface MomentRefs {
  containerRef: React.RefObject<HTMLElement | null>;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
}
