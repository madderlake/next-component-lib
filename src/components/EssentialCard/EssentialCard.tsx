import classnames from "classnames";
import { useContext } from "react";

import { Badge } from "@/components/Badge/Badge";
import type { BaseCardProps } from "@/components/BaseCard/BaseCard";
import { BaseCard } from "@/components/BaseCard/BaseCard";
import { BaseLink as BlockLink } from "@/components/BaseLink/BaseLink";
import type { MarcomLinkProps } from "@/components/MarcomLink/MarcomLink";
import { MarcomLink } from "@/components/MarcomLink/MarcomLink";
import type { ResponsivePictureProps } from "@/components/ResponsivePicture/ResponsivePicture";
import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";
import { LoadImagesContext } from "@/contexts/LoadImages/LoadImagesContext";
import typographyStyles from "@/styles/shared/typography.module.scss";

import styles from "./EssentialCard.module.scss";

export type EssentialCardImagePinning = "left" | "center" | "right";

export interface EssentialCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    Pick<ResponsivePictureProps, "images"> {
  analytics?: BaseCardProps["analytics"];
  badge?: React.ReactNode;
  copy: React.ReactNode;
  header: React.ReactNode;
  imagePinning?: EssentialCardImagePinning;
  link: MarcomLinkProps;
  /** Position of content relative to the card. */
  textPosition?: "top" | "bottom";
  theme?: BaseCardProps["theme"];
}

interface OptionalBadgeProps {
  text: React.ReactNode | undefined;
}

const OptionalBadge = ({ text }: OptionalBadgeProps): JSX.Element | null => {
  return text !== undefined ? (
    <Badge className={styles.badge} framed={false} size="reduced">
      {text}
    </Badge>
  ) : null;
};

// eslint-disable-next-line max-lines-per-function
export function EssentialCard({
  analytics,
  badge,
  className,
  copy,
  header,
  imagePinning = "center",
  images,
  link,
  textPosition = "top",
  theme = "light",
}: EssentialCardProps): JSX.Element {
  className = classnames(
    styles.essentialCard,
    textPosition === "bottom" && styles.bottom,
    className
  );

  const loadImages = useContext(LoadImagesContext);

  return (
    <BaseCard className={className} theme={theme} analytics={analytics}>
      <BlockLink
        className={styles.blockLink}
        href={link.href}
        aria-hidden="true"
        tabIndex={-1}
        rel={link.nofollow ?? false ? "nofollow" : undefined}
        {...link.analytics}
      />
      <div className={styles.text}>
        <OptionalBadge text={badge} />
        <h3 className={classnames(styles.header, typographyStyles.headline)}>
          {header}
        </h3>
        <p className={classnames(typographyStyles.bodyCopy, styles.copy)}>
          {copy}
        </p>
        <MarcomLink
          {...link}
          className={classnames(
            link.className,
            typographyStyles.bodyCopy,
            styles.link
          )}
        />
      </div>
      <ResponsivePicture
        className={classnames(styles.image, styles[`${imagePinning}`])}
        images={images}
        objectFit="none"
        preventLoading={!loadImages}
      />
    </BaseCard>
  );
}
