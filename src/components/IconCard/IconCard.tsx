import classnames from "classnames";

import type { ModalCardProps } from "@/components/ModalCard/ModalCard";
import { ModalCard } from "@/components/ModalCard/ModalCard";
import typographyStyles from "@/styles/shared/typography.module.scss";
import type { ThemeProps } from "@/types/theme";

import styles from "./IconCard.module.scss";

export type IconCardProps = ThemeProps &
  Omit<ModalCardProps, "controlClassName"> & {
    icon: {
      src: string;
      width: number;
      height: number;
    };
    headline: React.ReactNode;
    copy: React.ReactNode;
  };

export function IconCard({
  children,
  icon,
  headline,
  copy,
  theme = "light",
  className,
  accessibilityText,
  ...rest
}: IconCardProps): JSX.Element {
  return (
    <ModalCard
      theme={theme}
      accessibilityText={accessibilityText}
      className={classnames(className, styles.iconCard)}
      {...rest}
    >
      <img src={icon.src} alt="" width={icon.width} height={icon.height} />
      <h2 className={classnames(typographyStyles.headline, styles.headline)}>
        {headline}
      </h2>
      <p className={typographyStyles.bodyCopy}>{copy}</p>
    </ModalCard>
  );
}
