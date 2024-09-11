import classnames from "classnames";
import { useContext } from "react";

import type { ModalCardProps } from "@/components/ModalCard/ModalCard";
import { ModalCard } from "@/components/ModalCard/ModalCard";
import type { ResponsivePictureProps } from "@/components/ResponsivePicture/ResponsivePicture";
import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";
import { LoadImagesContext } from "@/contexts/LoadImages/LoadImagesContext";
import { useTextZoom } from "@/hooks/textZoom/useTextZoom";
import typographyStyles from "@/styles/shared/typography.module.scss";
import type { ThemeProps } from "@/types/theme";

import styles from "./FeatureCard.module.scss";

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export interface FeatureCardProps
  extends ThemeProps,
    Pick<ResponsivePictureProps, "images">,
    Pick<ModalCardProps, "accessibilityText"> {
  topicLabel: React.ReactNode;
  headline: React.ReactNode;
  objectPosition?: "center top" | "center center" | "center bottom";
  textZoomBackgroundColor?: RGBA;
  imgAlt?: string;
}

export function FeatureCard({
  topicLabel,
  headline,
  images,
  theme = "light",
  textZoomBackgroundColor,
  objectPosition,
  imgAlt,
  accessibilityText,
  ...rest
}: FeatureCardProps): JSX.Element {
  const textZoom = useTextZoom();
  const fallbackTextBg =
    theme === "light" ? styles.fillLightAlpha : styles.fillDarkAlpha;
  const textBg = textZoomBackgroundColor ?? fallbackTextBg;

  return (
    <ModalCard
      theme={theme}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ ["--text-bg" as any]: textBg }}
      className={classnames(styles.featureCard, {
        [styles.textZoom]: textZoom,
      })}
      accessibilityText={accessibilityText}
      {...rest}
    >
      <h3 className={styles.topicLabel}>{topicLabel}</h3>
      <p className={classnames(typographyStyles.headline, styles.headline)}>
        {headline}
      </p>

      <div className={styles.backgroundImage}>
        <ResponsivePicture
          images={images}
          objectPosition={objectPosition}
          objectFit="none"
          style={{ width: "100%", height: "100%" }}
          preventLoading={!useContext(LoadImagesContext)}
          alt={imgAlt}
        />
      </div>
    </ModalCard>
  );
}
