import classnames from "classnames";
import React, { forwardRef } from "react";

import type { ThemeProps } from "@/types/theme";

import styles from "./BaseCard.module.scss";

export type BaseCardProps = React.HTMLAttributes<HTMLDivElement> &
  ThemeProps & {
    analytics?: {
      "data-analytics-activitymap-region-id"?: string;
    };
  };

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  (
    { children, className, theme = "light", analytics, ...rest },
    ref
  ): JSX.Element => (
    <div
      ref={ref}
      className={classnames(
        className,
        styles.baseCard,
        theme === "dark" && styles.darkTheme
      )}
      {...analytics}
      {...rest}
    >
      {children}
    </div>
  )
);

BaseCard.displayName = "BaseCard";
