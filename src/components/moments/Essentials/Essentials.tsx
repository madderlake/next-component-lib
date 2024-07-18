import classnames from "classnames";

import type { EssentialCardProps } from "@/components/EssentialCard/EssentialCard";
import { EssentialCard } from "@/components/EssentialCard/EssentialCard";
import type { GalleryAnalytics } from "@/components/Gallery/Gallery";
import { Gallery } from "@/components/Gallery/Gallery";
import type { GalleryItemAnalytics } from "@/components/Gallery/GalleryItem";
import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";
import { useViewport } from "@/hooks/viewport/useViewport";
import responsiveStyles from "@/styles/shared/responsive-content.module.scss";
import { extractGalleryItemAnalytics } from "@/lib/analyticsUtils";

import { StaggeredFadeIn } from "../../StaggeredFadeIn/StaggeredFadeIn";
import styles from "./Essentials.module.scss";

type RequiredTitle = Required<Pick<MomentProps, "title">>;
type MomentPadding = Pick<MomentProps, "noBottomPadding">;
type MomentAnalytics = Required<Pick<MomentProps, "analytics">>;

export type EssentialsProps = RequiredTitle &
  MomentPadding &
  MomentAnalytics &
  GalleryAnalytics & {
    items: Array<EssentialCardProps & GalleryItemAnalytics>;
    sectionHeaderLink?: MomentProps["sectionHeaderLink"];
  };

// eslint-disable-next-line max-lines-per-function
export function Essentials({
  items,
  sectionHeaderLink,
  analytics,
  title,
}: EssentialsProps): JSX.Element {
  const viewport = useViewport();
  const enhanced = useIsEnhanced();

  const small =
    viewport !== null &&
    (viewport.name === "small" || viewport.name === "xsmall");

  // Separate overarching analytics to their respective components
  const sectionAnalytics = {
    "data-analytics-section-engagement":
      analytics["data-analytics-section-engagement"],
    "data-analytics-region": analytics["data-analytics-region"],
  };

  const galleryAnalytics = {
    "data-analytics-gallery-id": analytics["data-analytics-gallery-id"],
  };

  const [essentialCardItems, galleryItemAnalyticsIds] =
    extractGalleryItemAnalytics(items);

  const contents = small ? (
    <Gallery
      animate={enhanced}
      analytics={galleryAnalytics}
      itemAnalyticsIds={galleryItemAnalyticsIds}
    >
      {essentialCardItems.map((props, i) => (
        <EssentialCard key={i} {...props} /> // `animate` intentionally not set
      ))}
    </Gallery>
  ) : (
    <div
      className={classnames(
        responsiveStyles.responsiveContent,
        styles.responsiveContainer
      )}
    >
      {essentialCardItems.map((props, i) => (
        <StaggeredFadeIn
          animate={enhanced}
          className={props.className}
          itemIdx={i}
          key={i}
          visible={true}
        >
          <EssentialCard {...props} />
        </StaggeredFadeIn>
      ))}
    </div>
  );

  return (
    <Moment
      name="essentials-moment"
      title={title}
      enhanced={enhanced}
      sectionHeaderLink={sectionHeaderLink}
      analytics={sectionAnalytics}
    >
      {contents}
    </Moment>
  );
}
