import type {
  RangeViewportsObject,
  ViewportName,
  ViewportsObject,
} from "@/types/Viewport";

import type { ResponsivePictureImageProps } from "../ResponsivePicture";
import type { PicturePropsResult } from "./getPictureProps";
import { getPictureProps } from "./getPictureProps";
import { getSortedImagesAndViewports } from "./getSortedImagesAndViewports";

export interface GetSourcesForViewportsProps {
  viewports: ViewportsObject;
  viewportsOrder: ViewportName[];
  rangeViewports: RangeViewportsObject;
  images: ResponsivePictureImageProps[];
}

export const getSourcesForViewports = ({
  viewports,
  viewportsOrder,
  rangeViewports,
  images,
}: GetSourcesForViewportsProps): PicturePropsResult => {
  // Look at all of the images and figure out what viewports they use
  // and return a sorted object with the data needed to render their media queries
  const imagesViewportsData = getSortedImagesAndViewports(
    images,
    viewports,
    viewportsOrder
  );

  // For each viewport, use the ViewportContext data to get the list
  // of cascading media queries for srcset information for
  // child Picture component
  return getPictureProps(imagesViewportsData, rangeViewports);
};
