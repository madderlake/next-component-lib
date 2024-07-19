import React from "react";

import type { GalleryAnalytics } from "@/components/Gallery/Gallery";
import { Gallery } from "@/components/Gallery/Gallery";
import type { GalleryItemAnalytics } from "@/components/Gallery/GalleryItem";
import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import type { ProductTileProps } from "@/components/ProductTile/ProductTile";
import { ProductTile } from "@/components/ProductTile/ProductTile";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";
import { extractGalleryItemAnalytics } from "@/lib/analyticsUtils";

type RequiredTitle = Required<Pick<MomentProps, "title">>;
type MomentPadding = Pick<MomentProps, "noBottomPadding">;
type MomentAnalytics = Required<Pick<MomentProps, "analytics">>;

export type SelectProps = RequiredTitle &
  MomentPadding &
  MomentAnalytics &
  GalleryAnalytics & {
    items: Array<ProductTileProps & GalleryItemAnalytics>;
    sectionHeaderLink?: MomentProps["sectionHeaderLink"];
  };

// eslint-disable-next-line max-lines-per-function
export function Select({
  items,
  sectionHeaderLink,
  title,
  noBottomPadding,
  analytics,
}: SelectProps): JSX.Element {
  const enhanced = useIsEnhanced();
  const collapseAllIndicators = items.every(
    (item) => item.colorItems === undefined || item.colorItems.length === 0,
  );

  const collapseAllBadges = items.every((item) => item.badge === undefined);

  const collapseAllSubheads = items.every(
    (item) => item.subHeading === undefined,
  );

  const sectionAnalytics = {
    "data-analytics-section-engagement":
      analytics["data-analytics-section-engagement"],
    "data-analytics-region": analytics["data-analytics-region"],
  };

  const galleryAnalytics = {
    "data-analytics-gallery-id": analytics["data-analytics-gallery-id"],
  };

  const [productTileItems, galleryItemAnalyticsIds] =
    extractGalleryItemAnalytics(items);

  return (
    <Moment
      name="select-moment"
      backgroundAlt
      enhanced={enhanced}
      title={title}
      sectionHeaderLink={sectionHeaderLink}
      noBottomPadding={noBottomPadding}
      analytics={sectionAnalytics}
    >
      <Gallery
        animate={enhanced}
        analytics={galleryAnalytics}
        itemAnalyticsIds={galleryItemAnalyticsIds}
      >
        {productTileItems.map((props, i) => {
          return (
            <ProductTile
              key={i}
              {...props}
              collapseIndicators={collapseAllIndicators}
              collapseBadges={collapseAllBadges}
              collapseSubheads={collapseAllSubheads}
            />
          );
        })}
      </Gallery>
    </Moment>
  );
}
