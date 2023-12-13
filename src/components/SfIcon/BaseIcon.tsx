import classnames from "classnames";

import styles from "./BaseIcon.module.scss";

type IconPosition = "before" | "after";

export type BaseIconProps = React.HTMLAttributes<HTMLSpanElement> & {
  position?: IconPosition;
  char: string;
};

export type SfIconProps = React.HTMLAttributes<HTMLSpanElement> & {
  position?: IconPosition;
};

export function BaseIcon({
  position = "after",
  className,
  char,
  style,
  ...rest
}: BaseIconProps): JSX.Element {
  const classNames = classnames(
    className,
    styles.icon,
    position === "after" && styles.iconAfter,
    position === "before" && styles.iconBefore
  );

  const iconStyle: React.CSSProperties = {
    ["--sficon-char-ltr" as string]: `'${char}'`,
    ...style,
  };

  return <span style={iconStyle} className={classNames} {...rest} />;
}
