import type { RangeViewportsObject } from "@/types/Viewport";

import type { PictureSource } from "../Picture";
import type { PictureSourceMetadata } from "../ResponsivePicture";
import type { ImageViewportsData } from "./getSortedImagesAndViewports";
import { getSourceForImageCollection } from "./getSourceForImageCollection";

export interface PictureViewportStyle {
  query: string;
  width: number;
  height: number;
}

export interface PicturePropsResult {
  pictureSources: PictureSource[];
  pictureSourcesMetadata: PictureSourceMetadata[];
  reverseOrderUsedViewports: string[];
}

export const getPictureProps = (
  data: ImageViewportsData,
  rangeViewports: RangeViewportsObject
): PicturePropsResult => {
  const result: PicturePropsResult = {
    pictureSources: [],
    pictureSourcesMetadata: [],
    reverseOrderUsedViewports: [],
  };

  // Iterating on data.viewports array will ensure srcset order is correct
  const viewportsLength = data.viewports.length;
  for (let i = 0; i < viewportsLength; i++) {
    const { name: viewportName } = data.viewports[i];
    if (!Object.prototype.hasOwnProperty.call(data.images, viewportName)) {
      continue;
    }

    let viewportMediaQuery = "";
    // We don't want to add a media query for the last image since the last
    // source should be the largest and extend indefinitely
    // Also, the largest image should be the "fallback"
    if (i !== viewportsLength - 1) {
      const rangeKey = `range:${viewportName} down`;
      const rangeViewport = rangeViewports[rangeKey];
      if (rangeViewport === undefined) {
        throw new TypeError(`Cannot find range viewport "${rangeKey}".`);
      }
      viewportMediaQuery = rangeViewport.settings.query;
    }

    // For each image, build up the picture image prop
    const images = data.images[viewportName];
    const sourceProps = getSourceForImageCollection({
      sourceKey: viewportName,
      images,
      viewportMediaQuery,
    });

    // Store arrays of the picture source data as well as a matching
    // array for extra metadata that can be used by custom stylers as needed
    result.pictureSources.push(sourceProps);
    result.pictureSourcesMetadata.push({ viewport: viewportName });
    result.reverseOrderUsedViewports.unshift(viewportName);
  }

  return result;
};
