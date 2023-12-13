import type { ScrollGroup } from "@marcom/anim-system";
import type { ElementType } from "react";
import React, { useRef, useState } from "react";

import { useAnim } from "@/hooks/anim/useAnim";

import { ScrollGroupContext } from "./ScrollGroupContext";

export interface ScrollGroupProviderProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Sets the name of scroll group. */
  name: string;
  /** Set the HTML Element type. */
  Tag?: ElementType;
  /** Sets the className of the created element. */
  className?: string;
}

/**
 * The `ScrollGroupProvider` creates two things: a scroll group context which child components can use with the `useScrollGroup()` hook and a wrapping container which is used for the created scroll group target element. This container will be of the element type `Tag` and have the `className` passed to it.
 */
export const ScrollGroupProvider = ({
  name,
  children,
  Tag = "div",
  className,
  ...rest
}: ScrollGroupProviderProps): JSX.Element => {
  const scrollGroupInstanceRef = useRef<ScrollGroup | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [scrollGroup, setScrollGroup] = useState<ScrollGroup | null>(null);

  useAnim(
    (Anim) => {
      if (elementRef.current === null) return;

      scrollGroupInstanceRef.current = Anim.createScrollGroup(
        elementRef.current,
        {
          name: `${name}`,
        }
      );
      setScrollGroup(scrollGroupInstanceRef.current);

      return () => {
        scrollGroupInstanceRef.current?.remove().catch((e) => {
          throw e;
        });
      };
    },
    [name, elementRef]
  );
  const GroupValues = {
    scrollGroupRef: elementRef,
    scrollGroup,
  };

  return (
    <ScrollGroupContext.Provider value={GroupValues}>
      <Tag ref={elementRef} className={className} {...rest}>
        {children}
      </Tag>
    </ScrollGroupContext.Provider>
  );
};
