import classnames from "classnames";
import React from "react";

import styles from "./Control.module.scss";
import {
  ArrowNextIcon,
  ArrowPerviousIcon,
  CloseIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
} from "./Icons";

const icons = {
  plus: () => <PlusIcon className={styles.centeredSmallIcon} />,
  close: () => <CloseIcon className={styles.centeredSmallIcon} />,
  play: () => <PlayIcon className={styles.centeredSmallIcon} />,
  pause: () => <PauseIcon className={styles.centeredSmallIcon} />,
  arrowPrevious: () => <ArrowPerviousIcon className={styles.paddleNavIcons} />,
  arrowNext: () => <ArrowNextIcon className={styles.paddleNavIcons} />,
};

interface BaseProps {
  as?: "span" | "button";
  icon: "plus" | "close" | "play" | "pause" | "arrowPrevious" | "arrowNext";
  disabled?: boolean;
  theme?: "light" | "dark";
}

type ConditionalProps =
  | ({
      as?: "span";
      analytics?: never;
      disabled?: never;
    } & React.HTMLAttributes<HTMLSpanElement>)
  | ({
      as?: "button";
      disabled?: boolean;
      analytics?:
        | {
            "data-analytics-title": string;
            "data-analytics-click": string;
          }
        | undefined;
    } & React.HTMLAttributes<HTMLButtonElement>);

export type ControlProps = BaseProps & ConditionalProps;

export function Control({
  as = "button",
  icon,
  className,
  analytics,
  disabled = false,
  theme = "light",
  ...rest
}: ControlProps): JSX.Element {
  const El = as;
  const Icon = icons[icon];

  return (
    <El
      className={classnames(
        className,
        styles.control,
        theme === "dark" && styles.controlDarkTheme
      )}
      disabled={disabled}
      {...analytics}
      {...rest}
    >
      <Icon />
    </El>
  );
}
