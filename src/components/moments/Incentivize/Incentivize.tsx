import React, { useState } from "react";

import type { GalleryAnalytics } from "@/components/Gallery/Gallery";
import { Gallery } from "@/components/Gallery/Gallery";
import type { GalleryItemAnalytics } from "@/components/Gallery/GalleryItem";
import type { IconCardProps } from "@/components/IconCard/IconCard";
import { IconCard } from "@/components/IconCard/IconCard";
import type { IconCardTermsModalProps } from "@/components/IconCardModal/IconCardTermsModal/IconCardTermsModal";
import { IconCardTermsModal } from "@/components/IconCardModal/IconCardTermsModal/IconCardTermsModal";
import { ModalProvider } from "@/components/Modal/ModalProvider";
import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";
import { extractGalleryItemAnalytics } from "@/lib/analyticsUtils";

type Theme = Pick<MomentProps, "theme">;

type RequiredTitle = Required<Pick<MomentProps, "title">>;
type MomentPadding = Pick<MomentProps, "noBottomPadding">;
type MomentAnalytics = Required<Pick<MomentProps, "analytics">>;

export type IncentivizeProps = RequiredTitle &
  MomentPadding &
  Theme &
  MomentAnalytics &
  GalleryAnalytics & {
    items: IncentivizeItem[];
    sectionHeaderLink?: MomentProps["sectionHeaderLink"];
  };

interface ModalContent extends IconCardTermsModalProps {
  contentType: "terms";
}
interface IconCardItem extends IconCardProps {
  modalContent: ModalContent;
}

export type IncentivizeItem = IconCardItem & GalleryItemAnalytics;

// eslint-disable-next-line max-lines-per-function
export function Incentivize({
  items,
  sectionHeaderLink,
  theme,
  title,
  analytics,
}: IncentivizeProps): JSX.Element {
  const [currentModalContent, setCurrentModalContent] =
    useState<ModalContent | null>(null);
  const enhanced = useIsEnhanced();
  const sectionAnalytics = {
    "data-analytics-section-engagement":
      analytics["data-analytics-section-engagement"],
    "data-analytics-region": analytics["data-analytics-region"],
  };
  const galleryAnalytics = {
    "data-analytics-gallery-id": analytics["data-analytics-gallery-id"],
  };

  const [iconCardItems, galleryItemAnalyticsIds] =
    extractGalleryItemAnalytics(items);

  return (
    <>
      <Moment
        name="incentivize-moment"
        title={title}
        backgroundAlt
        enhanced={enhanced}
        sectionHeaderLink={sectionHeaderLink}
        theme={theme}
        analytics={sectionAnalytics}
      >
        <ModalProvider>
          <Gallery
            animate={enhanced}
            analytics={galleryAnalytics}
            itemAnalyticsIds={galleryItemAnalyticsIds}
          >
            {iconCardItems.map(({ modalContent, ...iconCardProps }, idx) => {
              return (
                <IconCard
                  key={idx}
                  {...iconCardProps}
                  onClick={() => setCurrentModalContent(modalContent)}
                />
              );
            })}
          </Gallery>
          {currentModalContent !== null &&
            currentModalContent.contentType === "terms" && (
              <IconCardTermsModal
                topicLabel={currentModalContent.topicLabel}
                headline={currentModalContent.headline}
                inlineHeader={currentModalContent.inlineHeader}
                link={currentModalContent.link}
                analytics={currentModalContent.analytics}
                role={undefined}
                children={undefined}
                closeTimeoutMS={undefined}
                shouldCloseOnOverlayClick={undefined}
              />
            )}
        </ModalProvider>
      </Moment>
    </>
  );
}
