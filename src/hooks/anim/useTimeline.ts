import type { ScrollGroup, TimeGroup } from "@marcom/anim-system";
import { useRef, useState } from "react";

import { useAnim } from "./useAnim";

interface Core {
  /** Anim timeGroup */
  timeGroup: TimeGroup;
}
interface TimeAndScrollGroup extends Core {
  /** Anim scrollGroup */
  scrollGroup: ScrollGroup;
}

export function useTimeline(name: string): Core | null;
export function useTimeline<T extends HTMLElement = HTMLElement>(
  name: string,
  scrollGroupRef?: React.RefObject<T | null>
): TimeAndScrollGroup | null;
export function useTimeline<T extends HTMLElement = HTMLElement>(
  name: string,
  scrollGroupRef?: React.RefObject<T | null>
): Core | TimeAndScrollGroup | null {
  const [timeGroup, setTimeGroup] = useState<null | TimeGroup>(null);
  const scrollGroupInstanceRef = useRef<ScrollGroup | null>(null);

  useAnim(
    (Anim) => {
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      if (scrollGroupRef !== undefined && scrollGroupRef?.current !== null) {
        scrollGroupInstanceRef.current = Anim.createScrollGroup(
          scrollGroupRef.current,
          {
            name: `${name}-controller`,
          }
        );
      }

      const timeline = Anim.createTimeGroup();
      timeline.name = name;
      setTimeGroup(timeline);

      return () => {
        scrollGroupInstanceRef.current?.remove().catch((e) => {
          throw e;
        });
        timeline?.remove().catch((e) => {
          throw e;
        });
      };
    },
    [scrollGroupRef]
  );

  if (timeGroup === null) return null;

  const scrollGroup = scrollGroupInstanceRef.current;

  if (scrollGroupRef === undefined) {
    return { timeGroup };
  } else {
    return scrollGroup !== null ? { timeGroup, scrollGroup } : null;
  }
}
