import classnames from "classnames";
import { useContext } from "react";

import { Badge } from "@/components/Badge/Badge";
import { BaseLink } from "@/components/BaseLink/BaseLink";
import type { ColorIndicatorProps } from "@/components/ColorIndicator/ColorIndicator";
import { ColorIndicator } from "@/components/ColorIndicator/ColorIndicator";
import type { MarcomLinkProps } from "@/components/MarcomLink/MarcomLink";
import { MarcomLink } from "@/components/MarcomLink/MarcomLink";
import type { ResponsivePictureProps } from "@/components/ResponsivePicture/ResponsivePicture";
import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";
import { LoadImagesContext } from "@/contexts/LoadImages/LoadImagesContext";
import typographyStyles from "@/styles/shared/typography.module.scss";
import type { ThemeProps } from "@/types/theme";

import styles from "./ProductTile.module.scss";

type GhostButtonProps = Omit<MarcomLinkProps, "className">;

function GhostButton({
  analytics,
  ariaLabel,
  ...rest
}: GhostButtonProps): JSX.Element {
  return (
    <a
      className={styles.button}
      aria-label={ariaLabel}
      {...rest}
      {...analytics}
    />
  );
}

export interface ProductTileProps
  extends ThemeProps,
    React.HTMLAttributes<HTMLDivElement>,
    Pick<
      ResponsivePictureProps,
      "images" | "objectFit" | "layout" | "objectPosition"
    > {
  badge?: React.ReactNode;
  heading: React.ReactNode;
  subHeading?: React.ReactNode;
  copy: React.ReactNode;
  pricing?: React.ReactNode;
  imageAltText?: string;
  primaryCTA: GhostButtonProps & MarcomLinkProps;
  secondaryCTA?: MarcomLinkProps;
  colorAccessibilityText?: string;
  /** collapse the indicator and its height if none of the tiles in the set has one */
  collapseIndicators?: boolean;
  collapseBadges?: boolean;
  collapseSubheads?: boolean;
  colorItems?: ColorIndicatorProps["items"];
  theme?: "light" | "dark";
  analytics: {
    "data-analytics-activitymap-region-id": string;
  };
}

/* eslint-disable max-lines-per-function, complexity */
export function ProductTile({
  badge,
  heading,
  subHeading,
  copy,
  pricing,
  images,
  primaryCTA,
  secondaryCTA,
  colorAccessibilityText,
  imageAltText = "Product Image",
  layout = "none",
  theme = "light",
  colorItems = [],
  className,
  collapseIndicators = false,
  collapseBadges = false,
  collapseSubheads = false,
  analytics,
  ...rest
}: ProductTileProps): JSX.Element {
  return (
    <div
      {...rest}
      {...analytics}
      className={classnames(
        styles.productTile,
        theme === "dark" && styles.darkTheme,
        className
      )}
    >
      <BaseLink
        href={primaryCTA.href}
        {...primaryCTA.analytics}
        className={styles.contentLink}
      >
        <div className={classnames(styles.productImage)} {...rest}>
          <ResponsivePicture
            images={images}
            layout={layout}
            alt={imageAltText}
            preventLoading={!useContext(LoadImagesContext)}
          />
        </div>
        <div className={classnames(styles.contentGrid)}>
          <div
            className={classnames(
              styles.optionalElementsGrid,
              collapseIndicators && styles.collapsedIndicators,
              collapseBadges && styles.collapsedBadges,
              collapseSubheads && styles.collapsedSubheads
            )}
          >
            {colorItems !== undefined && colorItems.length > 0 && (
              <ColorIndicator
                ariaLabel={colorAccessibilityText}
                items={colorItems}
                className={styles.colorIndicator}
              />
            )}
            {badge !== undefined && (
              /* violator will be updated to "badge" in a future release of SK8 */
              <Badge
                framed={false}
                size="reduced"
                className={classnames(styles.violator)}
              >
                {badge}
              </Badge>
            )}
            <h3
              className={classnames(typographyStyles.headline, styles.heading)}
            >
              {heading}
            </h3>
            {subHeading !== undefined && (
              <span
                className={classnames(
                  typographyStyles.bodyCopySemibold,
                  styles.subHeading
                )}
              >
                {subHeading}
              </span>
            )}
          </div>
          <p className={classnames(typographyStyles.bodyCopy, styles.copy)}>
            {copy}
          </p>
          {pricing !== undefined && (
            <p className={typographyStyles.bodyCopySemibold}>{pricing}</p>
          )}
        </div>
      </BaseLink>

      <div className={styles.tileFooter}>
        <GhostButton {...primaryCTA} />
        {secondaryCTA !== undefined && (
          <MarcomLink
            href={secondaryCTA.href}
            analytics={secondaryCTA.analytics}
            ariaLabel={secondaryCTA.ariaLabel}
            className={classnames(typographyStyles.bodyCopy, styles.buyLink)}
          >
            {secondaryCTA.children}
          </MarcomLink>
        )}
      </div>
    </div>
  );
}
