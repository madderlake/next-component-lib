import classNames from "classnames";
import { useEffect, useRef } from "react";

import { useTimeGroupContext } from "@/hooks/anim/useTimeGroupContext";
import animationStyles from "@/styles/shared/animationDefaults.module.scss";
import responsiveStyle from "@/styles/shared/responsive-content.module.scss";

import {
  type ImageAccordionProps,
  ImageAccordion,
} from "../../ImageAccordion/ImageAccordion";
import { MOVE_DURATION, OPACITY_DURATION } from "../../Moment/MomentEnhanced";

export type AugmentAccordionProps = ImageAccordionProps & {
  animate: boolean;
};

export function AugmentAccordion({
  items,
  animate,
}: AugmentAccordionProps): JSX.Element {
  const anim = useTimeGroupContext();
  const animationRef = useRef(null);

  const buildInStyles = classNames(
    {
      [animationStyles.noBuildIn]: !animate,
    },
    {
      [animationStyles.buildIn]: animate,
    },
  );

  useEffect(() => {
    if (anim === null || animationRef.current === null) {
      return;
    }

    const { timeGroup, childStartTime, startDelay } = anim;
    const start = childStartTime + startDelay;

    const opacityKeyframe = timeGroup.addKeyframe(animationRef.current, {
      start,
      end: start + OPACITY_DURATION,
      opacity: [0, 1],
      easeFunction: "easeInOutQuad",
    });

    const moveKeyframe = timeGroup.addKeyframe(animationRef.current, {
      start,
      end: start + MOVE_DURATION,
      y: [animationStyles.verticalMovement, 0],
      easeFunction: "easeInOutQuad",
    });

    return () => {
      void opacityKeyframe.remove();
      void moveKeyframe.remove();
    };
  }, [anim, animationRef]);

  return (
    <div className={responsiveStyle.responsiveContent}>
      <ImageAccordion
        items={items}
        ref={animationRef}
        className={buildInStyles}
      />
    </div>
  );
}
