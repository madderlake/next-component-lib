import classnames from "classnames";
import React from "react";

import { Control } from "@/components/Control/Control";
import responsiveStyles from "@/styles/shared/responsive-content.module.scss";

import styles from "./PaddleNav.module.scss";

type PaddleNavOptions = React.HTMLAttributes<HTMLSpanElement> & {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  disablePrevious?: boolean;
  disableNext?: boolean;
  onPrevClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onNextClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export type PaddleNavProps = Omit<PaddleNavOptions, "children">;

export function PaddleNav({
  ariaLabelPrevious = "Previous",
  ariaLabelNext = "Next",
  disablePrevious = false,
  disableNext = false,
  onNextClick,
  onPrevClick,
  className = "",
  ...rest
}: PaddleNavProps): JSX.Element {
  return (
    <div
      className={classnames(
        styles.paddlenav,
        responsiveStyles.responsiveContent,
        className
      )}
      data-analytics-gallery-interaction-type="paddlenav"
      {...rest}
    >
      <ul className={styles.grid}>
        <li>
          <Control
            icon="arrowPrevious"
            as="button"
            onClick={onPrevClick}
            aria-label={ariaLabelPrevious}
            disabled={disablePrevious}
          />
        </li>
        <li>
          <Control
            icon="arrowNext"
            as="button"
            onClick={onNextClick}
            aria-label={ariaLabelNext}
            disabled={disableNext}
          />
        </li>
      </ul>
    </div>
  );
}
