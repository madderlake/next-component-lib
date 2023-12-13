import { sortedIndexBy } from "lodash-es";

import type { Viewport, ViewportName, ViewportsObject } from "@/types/Viewport";

import type { ResponsivePictureImageProps } from "../ResponsivePicture";

const getViewportSortValue = (
  viewport: Viewport,
  viewportsOrder: ViewportName[]
): number => {
  const val = viewportsOrder.indexOf(viewport.name);
  if (val === -1) {
    throw new RangeError(
      `Viewport "${viewport.name}" is an invalid viewport name.`
    );
  }

  return val;
};

// Add the viewport to the array while maintaining that the list is sorted
// from smallest -> largest viewport using the viewportsOrder data
const addSortedViewportToArr = (
  viewport: Viewport,
  arr: Viewport[],
  viewportsOrder: ViewportName[]
): void => {
  arr.splice(
    sortedIndexBy(arr, viewport, (vpToSort) =>
      getViewportSortValue(vpToSort, viewportsOrder)
    ),
    0,
    viewport
  );
};

// Add the image to the array while maintaining that the list is sorted
// from lowest DPI -> highest DPI (image.density)
const addSortedImageToArr = (
  image: ResponsivePictureImageProps,
  arr: ResponsivePictureImageProps[]
): void => {
  arr.splice(sortedIndexBy(arr, image, "density"), 0, image);
};

export interface ImageViewportsData {
  viewports: Viewport[];
  images: {
    [key: string]: ResponsivePictureImageProps[];
  };
}

export const getSortedImagesAndViewports = (
  images: ResponsivePictureImageProps[],
  viewports: ViewportsObject,
  viewportsOrder: ViewportName[]
): ImageViewportsData => {
  const result: ImageViewportsData = { viewports: [], images: {} };
  for (const image of images) {
    const { viewport: viewportName } = image;
    if (!Object.prototype.hasOwnProperty.call(viewports, viewportName)) {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(result.images, viewportName)) {
      // Add sorted viewport using binary-search insert (faster than looping at the end)
      addSortedViewportToArr(
        viewports[viewportName],
        result.viewports,
        viewportsOrder
      );
      result.images[viewportName] = [];
    }
    // Add sorted image using binary-search insert
    addSortedImageToArr(image, result.images[viewportName]);
  }

  return result;
};
