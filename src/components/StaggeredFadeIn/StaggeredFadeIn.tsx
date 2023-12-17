import classNames from "classnames";
import { useEffect, useRef } from "react";

import { useTimeGroupContext } from "@/hooks/anim/useTimeGroupContext";

import animationStyles from "../../styles/shared/animationDefaults.module.scss";
import { MOVE_DURATION, OPACITY_DURATION } from "../Moment/MomentEnhanced";
import styles from "./StaggeredFadeIn.module.scss";

export interface StaggeredFadeInProps
  extends React.HTMLAttributes<HTMLDivElement> {
  itemIdx?: number | undefined;
  animate: boolean;
  visible?: boolean | null;
}

// eslint-disable-next-line max-lines-per-function
export function StaggeredFadeIn({
  itemIdx,
  animate,
  children,
  visible = true,
  className,
}: StaggeredFadeInProps): JSX.Element {
  const animGroups = useTimeGroupContext();
  const animationWrapperRef = useRef(null);
  const wrapperStyles = classNames(
    styles.animationWrapper,
    className,
    {
      [animationStyles.noBuildIn]: !animate || visible === false,
    },
    {
      [animationStyles.buildIn]: animate,
    }
  );

  useEffect(() => {
    if (
      animationWrapperRef.current === null ||
      animationWrapperRef.current === undefined ||
      animGroups === null ||
      visible === null ||
      !visible
    ) {
      return;
    }

    const { timeGroup, childStartTime, startDelay } = animGroups;
    const start = childStartTime + startDelay;
    const staggerStart =
      start + startDelay * (itemIdx === undefined ? 0 : itemIdx);

    const opacityKeyframe = timeGroup.addKeyframe(animationWrapperRef.current, {
      start: staggerStart,
      end: staggerStart + OPACITY_DURATION,
      opacity: [0, 1],
      easeFunction: "easeInOutQuad",
    });

    const moveKeyframe = timeGroup.addKeyframe(animationWrapperRef.current, {
      start: staggerStart,
      end: staggerStart + MOVE_DURATION,
      y: [null, 0],
      easeFunction: "easeInOutQuad",
    });

    return () => {
      void opacityKeyframe.remove();
      void moveKeyframe.remove();
    };
  }, [animationWrapperRef, itemIdx, animGroups, animate, visible]);

  return (
    <div ref={animationWrapperRef} className={wrapperStyles}>
      {children}
    </div>
  );
}
