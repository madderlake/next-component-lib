import classnames from "classnames";

import type { SfIconProps } from "./BaseIcon";
import { BaseIcon } from "./BaseIcon";
import styles from "./BaseIconBidi.module.scss";

export type BaseIconBidiProps = SfIconProps & {
  charRtl: string;
  charLtr: string;
};

export function BaseIconBidi({
  className,
  charRtl,
  charLtr,
  style,
  ...rest
}: BaseIconBidiProps): JSX.Element {
  const classNames = classnames(className, styles.icon);
  const iconStyle: React.CSSProperties = {
    ...style,
    ["--sficon-char-rtl" as string]: `'${charRtl}'`,
  };

  return (
    <BaseIcon
      char={charLtr}
      style={iconStyle}
      className={classNames}
      {...rest}
    />
  );
}
