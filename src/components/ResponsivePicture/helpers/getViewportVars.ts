import type { HTMLAttributes } from "react";

import type { ResponsiveImageObjectFitType } from "../ResponsivePicture";
import type { ImageSizesObject } from "./getImageSizesObject";
import { getViewportCSSVarProps } from "./getViewportCSSVarProps";
import { getViewportStyleProps } from "./getViewportStyleProps";

export interface GetViewportVarsProps {
  sizes: ImageSizesObject;
  objectFit?:
    | ResponsiveImageObjectFitType
    | Record<string, ResponsiveImageObjectFitType>
    | undefined;
  objectPosition?: string | Record<string, string> | undefined;
  reverseOrderViewports: string[];
}

export const getViewportVars = ({
  sizes,
  objectPosition,
  objectFit,
  reverseOrderViewports,
}: GetViewportVarsProps): HTMLAttributes<HTMLImageElement> => {
  // Apply sizes information
  const sizesProps = getViewportStyleProps({
    value: sizes,
    reverseOrderViewports,
    propMap: { cssWidth: "w", cssHeight: "h" },
  });

  // Apply objectPosition information
  const objectPositionProps = getViewportCSSVarProps({
    name: "objectPosition",
    value: objectPosition,
    reverseOrderViewports,
    propMap: { objectPosition: "op" },
  });

  // Apply objectFit information
  const objectFitProps = getViewportCSSVarProps({
    name: "objectFit",
    value: objectFit,
    reverseOrderViewports,
    propMap: { objectFit: "of" },
  });

  // Merge props and return
  return {
    ...sizesProps.dataAttrs,
    ...objectPositionProps,
    ...objectFitProps,
    style: {
      ...sizesProps.style,
      ...objectPositionProps.style,
      ...objectFitProps.style,
    },
  };
};
