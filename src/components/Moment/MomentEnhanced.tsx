/* eslint-disable max-lines-per-function */
// import type { Keyframe, KeyframeOptions } from "@marcom/anim-system";
import { useEffect, useRef, useState } from "react";

import { TimeGroupProvider } from "@/contexts/Anim/timeGroup/TimeGroupProvider";
import { useTimeline } from "@/hooks/anim/useTimeline";

import animationStyles from "../../styles/shared/animationDefaults.module.scss";
import type { MomentBaseProps } from "./MomentBase";
import { MomentBase } from "./MomentBase";
import type { MomentRefs } from "./types";

export type MomentEnhancedProps = MomentBaseProps & {
  name: string;
};

export const OPACITY_DURATION = 0.9;
export const MOVE_DURATION = 0.7;
export const STAGGER = 0.15;

export const MomentEnhanced = ({
  children,
  name,
  ...rest
}: MomentEnhancedProps): JSX.Element => {
  const animationRefs = useRef<MomentRefs>(null);
  const anim = useTimeline(name, animationRefs.current?.containerRef);
  const [timelineStart, setTimelineStart] = useState(0);

  useEffect(() => {
    if (anim === null) return;
    const { timeGroup, scrollGroup } = anim;

    const refArray = [animationRefs.current?.headingRef.current];
    if (
      rest.description !== undefined ||
      rest.sectionHeaderLink !== undefined
    ) {
      refArray.push(animationRefs.current?.descriptionRef.current);
    }
    let start = 0.0001;

    const animationKFs: Keyframe[] = [];
    for (const ref of refArray) {
      const opacityKf: any = {
        start,
        end: start + OPACITY_DURATION,
        opacity: [0, 1],
        easeFunction: "easeInOutQuad",
      };
      const moveKf: any = {
        start,
        end: start + MOVE_DURATION,
        y: [null, 0],
        easeFunction: "easeInOutQuad",
      };

      const opacityKey = timeGroup.addKeyframe(ref, opacityKf);
      const moveKey = timeGroup.addKeyframe(ref, moveKf);
      for (const kf of [opacityKey, moveKey]) {
        if (kf !== undefined) {
          animationKFs.push(kf);
        }
      }
      start = start + STAGGER;
    }
    setTimelineStart(start);

    const keyframe = scrollGroup.addEvent(
      animationRefs.current?.containerRef.current,
      {
        start: "t - 85vh",
        end: "t - 85vh",
        event: `${name}-start`,
        onEventOnce: () => {
          timeGroup.play();
        },
      }
    );

    return () => {
      for (const animationKF of animationKFs) {
        //void animationKF.remove();
      }
      if (keyframe !== undefined) {
        void keyframe.remove();
      }
    };
  }, [anim, animationRefs, name, rest.description, rest.sectionHeaderLink]);

  return anim === null ? (
    <MomentBase
      ref={animationRefs}
      enhancedStyles={animationStyles.buildIn}
      {...rest}
    >
      {children}
    </MomentBase>
  ) : (
    <TimeGroupProvider
      childStartTime={timelineStart}
      startDelay={STAGGER}
      anchorRef={animationRefs.current?.containerRef}
      timeGroup={anim.timeGroup}
      scrollGroup={anim.scrollGroup}
    >
      <MomentBase
        ref={animationRefs}
        enhancedStyles={animationStyles.buildIn}
        {...rest}
      >
        {children}
      </MomentBase>
    </TimeGroupProvider>
  );
};
