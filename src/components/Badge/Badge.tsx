import classnames from "classnames";

import "./Badge.css";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Sets the border of the badge */
  framed?: boolean;
  /** Sets the shape of the badge */
  shape?: "inline" | "none";
  /** Changes the size of the badge */
  size?: "reduced";
};

export function Badge({
  children,
  className,
  framed = true,
  shape,
  size,
  ...rest
}: BadgeProps): JSX.Element {
  className = classnames(
    className,
    "badge",
    !framed && "badge-frameless",
    shape === "inline" && "badge-inline",
    size === "reduced" && "badge-reduced"
  );

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
}
