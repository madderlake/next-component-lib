import type { SyntheticEvent } from "react";

import type { GalleryItemAnalytics } from "@/components/Gallery/GalleryItem";

export const GALLERY_CREATED = "galleryCreated";
export const GALLERY_INTERACTED = "galleryInteracted";

export const fireGalleryCreated = (
  galleryId: string,
  galleryItems: string[]
): void => {
  dispatchEvent(
    new CustomEvent(GALLERY_CREATED, {
      detail: { galleryId, galleryItems },
    })
  );
};

export const fireGalleryInteracted = (
  galleryId: string,
  indx: number,
  interactionEvent?: SyntheticEvent | KeyboardEvent
): void => {
  dispatchEvent(
    new CustomEvent(GALLERY_INTERACTED, {
      detail: { galleryId, indx, interactionEvent },
    })
  );
};

export const extractGalleryItemAnalytics = <T>(
  items: Array<T & GalleryItemAnalytics>
): [
  T[],
  Array<GalleryItemAnalytics["analytics"]["data-analytics-gallery-item-id"]>
] => {
  return items.reduce<
    [
      T[],
      Array<GalleryItemAnalytics["analytics"]["data-analytics-gallery-item-id"]>
    ]
  >(
    (prev, currentItem) => {
      const [prevTransformedItems, prevGalleryItemIds] = prev;
      const { "data-analytics-gallery-item-id": deleted, ...updatedAnalytics } =
        currentItem.analytics;

      const transformedItem = {
        ...currentItem,
        analytics: updatedAnalytics,
      };
      const newTransformedItems = [...prevTransformedItems, transformedItem];

      const newGalleryItemIds = [
        ...prevGalleryItemIds,
        currentItem.analytics["data-analytics-gallery-item-id"],
      ];

      return [newTransformedItems, newGalleryItemIds];
    },
    [[], []]
  );
};
