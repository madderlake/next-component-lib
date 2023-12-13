import type { PictureSource } from "../Picture";
import type { PictureSourceMetadata } from "../ResponsivePicture";

export interface GetImageSizesObjectProps {
  sources: PictureSource[];
  sourcesMetadata: PictureSourceMetadata[];
}

export interface ImageSizesObject {
  [viewport: string]: {
    cssWidth: string;
    cssHeight: string;
  };
}

export const getImageSizesObject = ({
  sources,
  sourcesMetadata,
}: GetImageSizesObjectProps): ImageSizesObject => {
  const sizes: ImageSizesObject = {};
  for (let i = 0; i < sources.length; i++) {
    const { width, height } = sources[i];
    const { viewport } = sourcesMetadata[i];

    if (width !== undefined && height !== undefined) {
      sizes[viewport] = {
        cssWidth: `${width}px`,
        cssHeight: `${height}px`,
      };
    }
  }

  return sizes;
};
