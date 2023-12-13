import classnames from "classnames";

import type { BaseLinkProps } from "@/components/BaseLink/BaseLink";
import { BaseLink } from "@/components/BaseLink/BaseLink";
import * as SfIcon from "@/components/SfIcon";

import styles from "./StandardsLink.module.scss";

export interface StandardsLinkProps extends BaseLinkProps {
  ariaLabel?: string;
  icon?: "more" | "external" | "download" | null;
  position?: "before" | "after";
}

const iconMap = {
  more: SfIcon.ChevronBidi,
  external: SfIcon.ExternalBidi,
  download: SfIcon.Download,
};

export function StandardsLink({
  children,
  className,
  ariaLabel,
  icon = null,
  position = "after",
  ...rest
}: StandardsLinkProps): JSX.Element {
  const linkClassNames = classnames(
    className,
    styles.link,
    icon !== undefined && styles.withIcon
  );
  const positionalClass =
    position === "after" ? styles.iconAfter : styles.iconBefore;
  const iconClassNames = classnames(styles.icon, positionalClass);
  const Icon = icon !== null ? iconMap[icon] : null;

  return (
    <BaseLink className={linkClassNames} {...rest} aria-label={ariaLabel}>
      {Icon !== null && position === "before" && (
        <Icon position={position} className={iconClassNames} />
      )}
      <span className={styles.copy}>{children}</span>
      {Icon !== null && position === "after" && (
        <Icon position={position} className={iconClassNames} />
      )}
    </BaseLink>
  );
}
