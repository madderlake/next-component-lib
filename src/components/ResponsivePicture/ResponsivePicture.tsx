/* eslint-disable max-lines-per-function */
import classnames from "classnames";
import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactEventHandler,
} from "react";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";

import { HydrationContext } from "@/contexts/Hydration/HydrationContext";
import { ViewportContext } from "@/contexts/Viewport/ViewportContext";
import type { ViewportName } from "@/types/Viewport";

import { getClassNames } from "./helpers/getClassNames";
import { getImageSizesObject } from "./helpers/getImageSizesObject";
import { getSourcesForViewports } from "./helpers/getSourcesForViewports";
import type { GetViewportVarsProps } from "./helpers/getViewportVars";
import { getViewportVars } from "./helpers/getViewportVars";
import { useLoadingState } from "./hooks/useLoadingState";
import type { PictureRefType } from "./Picture";
import { Picture } from "./Picture";
import styles from "./ResponsivePicture.module.scss";

export interface ResponsivePictureImageProps {
  imageKey?: string;
  src: string;
  width: number;
  height: number;
  viewport: string;
  density: number;
}

export interface PictureSourceMetadata {
  viewport: ViewportName;
}

export type ResponsiveImageLayoutType = "none" | "fill" | "sized";
export type ResponsiveImageObjectFitType =
  | "fill"
  | "contain"
  | "cover"
  | "none"
  | "scale-down"
  | "inherit";

export interface ResponsivePictureProps
  extends HTMLAttributes<HTMLElement>,
    Pick<GetViewportVarsProps, "objectFit" | "objectPosition"> {
  images: ResponsivePictureImageProps[];
  preventLoading?: boolean;
  as?: ElementType;
  alt?: string;
  className?: string;
  renderedClassName?: string;
  loadingPreventedClassName?: string;
  loadingClassName?: string;
  loadedClassName?: string;
  errorClassName?: string;
  hydratedClassName?: string;
  notHydratedClassName?: string;
  imgClassName?: string;
  style?: CSSProperties;
  layout?:
    | ResponsiveImageLayoutType
    | Record<string, ResponsiveImageLayoutType>;
  pictureClassName?: string;
  onLoadStart?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

export interface ResponsivePictureRefType {
  container: HTMLElement | null;
  picture: HTMLPictureElement | null;
  img: HTMLImageElement | null;
}

// forwardRef to access Picture element child elements if needed
const ResponsivePictureComponent = forwardRef<
  ResponsivePictureRefType,
  ResponsivePictureProps
>(
  /* eslint-disable-next-line max-lines-per-function */
  (
    {
      as: Tag = "figure",
      alt,
      className,
      renderedClassName,
      loadingPreventedClassName,
      loadingClassName,
      loadedClassName,
      errorClassName,
      hydratedClassName,
      notHydratedClassName,
      imgClassName,
      pictureClassName,
      images = [],
      layout = "sized",
      objectFit,
      objectPosition,
      style,
      onLoadStart: onLoadStartArg,
      onLoad: onLoadArg,
      onError: onErrorArg,
      preventLoading = false,
      ...rest
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLElement>(null);
    const pictureRef = useRef<PictureRefType>(null);
    const shouldRenderImages = !preventLoading;

    const { isLoading, isLoaded, isError, onLoadStart, onLoad, onError } =
      useLoadingState({
        shouldRenderImages,
        pictureRef,
        onLoadStart: onLoadStartArg,
        onLoad: onLoadArg,
        onError: onErrorArg,
      });

    const isHydrated = useContext(HydrationContext);
    const { viewportsOrder, viewports, rangeViewports } =
      useContext(ViewportContext);

    // Get the picture tag image data and the styles used at each media query
    const {
      pictureSources,
      pictureSourcesMetadata,
      reverseOrderUsedViewports,
    } = getSourcesForViewports({
      viewports,
      viewportsOrder,
      rangeViewports,
      images: shouldRenderImages
        ? images
        : images.map((img) => ({ ...img, src: "" })),
    });

    const baseClassName = "responsive-picture";
    const pictureBaseClassName = `${baseClassName}__picture`;

    // Get all of the classNames to apply to the container
    const { containerClass, pictureClass, noScriptPictureClass } =
      getClassNames({
        isHydrated,
        isRendered: shouldRenderImages,
        isLoading,
        isLoaded,
        isError,
        renderedClassName,
        loadingPreventedClassName,
        loadingClassName,
        loadedClassName,
        errorClassName,
        hydratedClassName,
        notHydratedClassName,
        styles,
        containerClass: baseClassName,
        pictureClass: pictureBaseClassName,
        layout,
        reverseOrderViewports: reverseOrderUsedViewports,
      });

    // Get imgProps for things like objectPosition and objectFit
    const sizes = getImageSizesObject({
      sources: pictureSources,
      sourcesMetadata: pictureSourcesMetadata,
    });

    const viewportVarProps = getViewportVars({
      sizes,
      objectFit,
      objectPosition,
      reverseOrderViewports: reverseOrderUsedViewports,
    });

    // Merge styles with viewportProps to prevent overriding
    const containerStyle =
      style !== undefined
        ? { ...style, ...viewportVarProps.style }
        : viewportVarProps.style;

    return (
      <Tag
        {...rest}
        {...viewportVarProps}
        style={containerStyle}
        as={Tag}
        ref={containerRef}
        className={classnames(containerClass, className)}
      >
        <Picture
          alt={alt}
          className={classnames(pictureClass, pictureClassName)}
          ref={pictureRef}
          sources={pictureSources}
          imgClassName={imgClassName}
          onLoadStart={onLoadStart as ReactEventHandler<HTMLImageElement>}
          onLoad={onLoad as ReactEventHandler<HTMLImageElement>}
          onError={onError as ReactEventHandler<HTMLImageElement>}
        />
        {!isHydrated && !shouldRenderImages ? (
          <noscript>
            <Picture
              alt={alt}
              className={noScriptPictureClass}
              sources={
                getSourcesForViewports({
                  viewports,
                  viewportsOrder,
                  rangeViewports,
                  images,
                }).pictureSources
              }
              imgClassName={imgClassName}
            />
          </noscript>
        ) : null}
      </Tag>
    );
  },
);

ResponsivePictureComponent.displayName = "ResponsivePicture";

export const ResponsivePicture = ResponsivePictureComponent;
