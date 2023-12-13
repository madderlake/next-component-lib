import type { PageAssetImageItemProps } from "@/types/PageContent";

import type { ResponsivePictureImageProps } from "../ResponsivePicture";

export interface MapPageContentImagesProps {
  id: string;
  props: PageAssetImageItemProps;
}

export const mapPageContentImages = (
  images: MapPageContentImagesProps | MapPageContentImagesProps[] = []
): ResponsivePictureImageProps[] => {
  // Handle the case of a single image being passed vs. an array
  const imagesArr = Array.isArray(images) ? images : [images];

  return imagesArr.reduce(
    (acc: ResponsivePictureImageProps[], { id, props }) => {
      if (
        props.properties.density === null ||
        props.properties.viewport === null
      ) {
        console.warn(
          `Cannot render image "${id}" - image must have density and viewport props.`
        );

        return acc;
      }

      acc.push({
        imageKey: id,
        src: props.src,
        width: props.width,
        height: props.height,
        density: props.properties.density,
        viewport: props.properties.viewport,
      });

      return acc;
    },
    []
  );
};
