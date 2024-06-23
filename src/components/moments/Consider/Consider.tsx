import React, { useMemo, useContext } from "react";

import type { FeatureCardProps } from "@/components/FeatureCard/FeatureCard";
import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import { FeatureCardModal, type FeatureCardModalProps } from "@/components/FeatureCardModal/FeatureCardModal";
import type { GalleryAnalytics } from "@/components/Gallery/Gallery";
import { Gallery } from "@/components/Gallery/Gallery";
import type { GalleryItemAnalytics } from "@/components/Gallery/GalleryItem";
import { QueryStringModalProvider } from "@/components/Modal/QueryStringModalProvider";
import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";
import { NextRouterContext } from "@/contexts/NextRouter/NextRouterContext";
import { extractGalleryItemAnalytics } from "@/lib/analyticsUtils";

type RequiredTitle = Required<Pick<MomentProps, "title">>;
type MomentPadding = Pick<MomentProps, "noBottomPadding">;
type MomentAnalytics = Required<Pick<MomentProps, "analytics">>;
type ConsiderModal = {
  modal: FeatureCardModalProps;
};

export type ConsiderProps = RequiredTitle &
  MomentPadding &
  MomentAnalytics &
  GalleryAnalytics & {
    items: Array<FeatureCardProps & ConsiderModal & GalleryItemAnalytics>;
    queryStringKey: string;
  };

// eslint-disable-next-line max-lines-per-function
export function Consider({
  analytics,
  items,
  noBottomPadding,
  queryStringKey,
  title,
}: ConsiderProps): JSX.Element {
  const enhanced = useIsEnhanced();
  const router = useContext(NextRouterContext);

  // Separate overarching analytics to their respective components
  const sectionAnalytics = {
    "data-analytics-section-engagement":
      analytics["data-analytics-section-engagement"],
    "data-analytics-region": analytics["data-analytics-region"],
  };
  const galleryAnalytics = {
    "data-analytics-gallery-id": analytics["data-analytics-gallery-id"],
  };

  const [featureCardItems, galleryItemAnalyticsIds] =
    extractGalleryItemAnalytics(items);

  // prevent flash re-render when modal is open on first page load
  const isQueryModal = router?.query?.focus?.includes(queryStringKey);
  const shouldEnhance = useMemo(() => isQueryModal ? false : enhanced, [enhanced]);

  return (
    <Moment
      name="consider-moment"
      title={title}
      enhanced={shouldEnhance}
      noBottomPadding={noBottomPadding}
      {...sectionAnalytics}
    >
      <Gallery
        animate={shouldEnhance}
        analytics={galleryAnalytics}
        itemAnalyticsIds={galleryItemAnalyticsIds}
      >
        {featureCardItems.map((item, idx) => {
          const { modal, ...rest } = item;
          return (
            // TODO: lift modal provider out of loop
            <QueryStringModalProvider
              key={idx}
              focusKey={`${queryStringKey}-${idx + 1}`}
            >
              <FeatureCard {...rest} />
              <FeatureCardModal {...modal} />
            </QueryStringModalProvider>
          );
        })}
      </Gallery>
    </Moment>
  );
}
