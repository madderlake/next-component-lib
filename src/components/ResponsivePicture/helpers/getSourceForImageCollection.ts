import type { PictureSource } from "../Picture";
import type { ResponsivePictureImageProps } from "../ResponsivePicture";

export interface GetSourceForImageCollectionProps {
  sourceKey: string;
  images: ResponsivePictureImageProps[];
  viewportMediaQuery: string;
}

export const getSourceForImageCollection = ({
  sourceKey,
  images,
  viewportMediaQuery,
}: GetSourceForImageCollectionProps): PictureSource => {
  // Generate a srcset for the image
  const srcset = images.reduce((acc, { src, density = 1 }, idx) => {
    let srcsetVal = `${src}`;
    if (src.length > 0 && density > 1) {
      srcsetVal += ` ${String(density)}x`;
    }

    if (idx > 0) {
      acc += ", ";
    }
    acc += srcsetVal;

    return acc;
  }, "");

  // Since images are already sorted here, we can assume the last
  // one acts as the lowest density image (best for width/height data)
  const lastImage = images[images.length - 1];

  let width: number | undefined, height: number | undefined;
  if (lastImage !== undefined) {
    width = lastImage.width / lastImage.density;
    height = lastImage.height / lastImage.density;
  }

  return {
    sourceKey,
    srcset,
    width,
    height,
    media: viewportMediaQuery.length > 0 ? viewportMediaQuery : undefined,
  };
};
