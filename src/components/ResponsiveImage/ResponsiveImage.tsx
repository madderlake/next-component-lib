// import React, { CSSProperties, ElementType, HTMLAttributes, forwardRef } from "react";
import React, {
  forwardRef,
  useState,
  useContext,
  useImperativeHandle,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  useRef,
} from "react";
import classnames from "classnames";
import { getSourceForImageCollection } from "../ResponsivePicture/helpers/getSourceForImageCollection";
import { sassData } from "@/contexts/Viewport/SassKitViewportsProvider";
import { Picture, PictureRefType } from "./Picture";

import type { ImageData } from "./types";
import {
  ResponsiveImageLayoutType,
  ResponsivePictureImageProps,
  ResponsivePictureProps,
  ResponsivePictureRefType,
} from "../ResponsivePicture/ResponsivePicture";
import { GetViewportVarsProps } from "../ResponsivePicture/helpers/getViewportVars";
import { ViewportContext } from "@/contexts/Viewport/ViewportContext";
import type {
  SassDataObject,
  ViewportNameMap,
} from "@/contexts/Viewport/SassKitViewportsProvider";

import useViewportName from "@/hooks/viewport/useViewportName";

export interface ResponsiveImageProps
  extends HTMLAttributes<HTMLElement>,
    Pick<GetViewportVarsProps, "objectFit" | "objectPosition"> {
  images: ResponsivePictureImageProps[];
  preventLoading?: boolean;
  as?: ElementType;
  alt?: string;
  className?: string;
  // renderedClassName?: string;
  // loadingPreventedClassName?: string;
  // loadingClassName?: string;
  // loadedClassName?: string;
  // errorClassName?: string;
  // hydratedClassName?: string;
  // notHydratedClassName?: string;
  imgClassName?: string;
  style?: CSSProperties;
  layout?:
    | ResponsiveImageLayoutType
    | Record<string, ResponsiveImageLayoutType>;
  pictureClassName?: string;
  // onLoadStart?: () => void;
  // onLoad?: () => void;
  // onError?: () => void;
}
type ViewportsObject = SassDataObject["viewports"];

const viewports: ViewportsObject = sassData.viewports;
// const objKeys = Object.keys(viewports) as Array<keyof ViewportsObject>;

// const viewportSizes = objKeys.map((key) => {
//   return {
//     [key]: viewports[key],
//   };
// });

// console.log(viewportSizes);

// export const createSources = () => {
//   // for each viewport in SassData that matches the viewport in ImageData, find the corresponding media query and, if density = 2, add 2x label
//   const objKeys = Object.keys(viewports) as Array<keyof ViewportsObject>;
//   let srcSet = [];

//   function safeKeys<T extends ViewportsObject>(obj: T) {
//     return Object.keys(obj) as Array<keyof T>;
//   }
// };
// console.log("p", createSources());

export const ResponsiveImage = forwardRef<
  ResponsivePictureRefType,
  ResponsivePictureProps
>(
  (
    {
      as: Tag = "figure",
      alt,
      className,
      // renderedClassName,
      // loadingPreventedClassName,
      // loadingClassName,
      // loadedClassName,
      // errorClassName,
      // hydratedClassName,
      // notHydratedClassName,
      imgClassName,
      // pictureClassName,
      images = [],
      // layout = "sized",
      // objectFit,
      // objectPosition,
      style,
      // onLoadStart: onLoadStartArg,
      // onLoad: onLoadArg,
      // onError: onErrorArg,
      preventLoading = false,
      ...rest
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLElement>(null);
    const pictureRef = useRef<PictureRefType>(null);
    const shouldRenderImages = !preventLoading;
    // const sassData: SassDataObject | {} = useContext(ViewportContext);
    const viewportName = useViewportName();

    function groupBy(xs: Array<any>, key: string, output?: string): Array<any> {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, []);
    }
    const imageSources = groupBy(images, "viewport");
    console.log(Object.values(imageSources));
    const srcset = Object.values(imageSources).map((img: Array<any>) => {
      console.log(img);
      return img.reduce((acc: string, { src, density = 1 }, idx: number) => {
        //console.log(src);
        let srcsetVal = `${src}`;

        if (density > 1) {
          srcsetVal += ` ${String(density)}x`;
        }

        if (idx > 0) {
          acc += ", ";
        }

        acc += srcsetVal;
        console.log(acc);
        return acc;
      }, "");
    });
    // const srcset = imageSources.reduce((acc, { src, density = 1 }, idx) => {
    //   let srcsetVal = `${src}`;
    //   if (src !== "" && density > 1) {
    //     srcsetVal += ` ${String(density)}x`;
    //   }

    //   if (idx > 0) {
    //     acc += ", ";
    //   }
    //   acc += srcsetVal;

    //   return acc;
    // }, "");
    console.log(srcset);
    return (
      <Tag
        {...rest}
        //{...viewportVarProps}
        //style={containerStyle}
        as={Tag}
        ref={containerRef}
        //className={classnames(containerClass, className)}
      >
        <Picture
          alt={alt}
          //className={classnames(pictureClass, pictureClassName)}
          ref={pictureRef}
          sources={[]}
          imgClassName={imgClassName}
          // onLoadStart={onLoadStart as ReactEventHandler<HTMLImageElement>}
          // onLoad={onLoad as ReactEventHandler<HTMLImageElement>}
          //onError={onError as ReactEventHandler<HTMLImageElement>}
        />
        {/*{!isHydrated && !shouldRenderImages ? (
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
    ) : null}*/}
      </Tag>
    );
  },
);
