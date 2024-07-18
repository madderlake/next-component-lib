import type { CSSProperties } from "react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

export interface PictureSource {
  sourceKey?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  media?: string | undefined;
  srcset: string;
}

export interface PictureProps {
  alt?: string | undefined;
  width?: number;
  height?: number;
  src?: string;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  imgClassName?: string | undefined;
  onLoadStart?: React.ReactEventHandler<HTMLImageElement>;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  sources: PictureSource[];
  loading?: "lazy" | "eager";
  objectPosition?: string;
}

export interface PictureRefType {
  picture: HTMLPictureElement | null;
  img: HTMLImageElement | null;
}

// forwardRef is used here since there are lots of good use cases
// for needing access to the Picture element's DOM element
const PictureComponent = forwardRef<PictureRefType, PictureProps>(
  // eslint-disable-next-line max-lines-per-function
  (
    {
      alt = "",
      width,
      height,
      // src,
      className,
      imgClassName,
      sources = [],
      children,
      onLoadStart,
      onLoad,
      onError,
      loading,
      objectPosition,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const pictureRef = useRef<HTMLPictureElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    // Allow both the picture and image element refs to be returned
    // useImperativeHandle(ref, () => ({
    //   get picture() {
    //     return pictureRef.current;
    //   },
    //   get img() {
    //     return imgRef.current;
    //   },
    // }));

    const inlineStyles = {
      objectPosition,
    };

    return (
      <picture className={className} ref={pictureRef} {...rest}>
        {sources.map(
          ({
            sourceKey,
            srcset,
            // width: srcWidth,
            // height: srcHeight,
            media,
          }) => {
            // Chrome supports locking the width and height to the source element
            // and other browsers are going to follow soon. This will
            // future-proof this to make any layout shift disappear
            // once that lands more broadly
            //
            // https://chromestatus.com/feature/5737185317748736
            // https://github.com/whatwg/html/pull/5894
            return (
              <source
                key={sourceKey}
                srcSet={srcset}
                // width={srcWidth}
                // height={srcHeight}
                media={media}
              />
            );
          },
        )}
        <img
          ref={imgRef}
          className={imgClassName}
          alt={alt}
          // width={width}
          // height={height}
          src={imgRef.current?.currentSrc}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onError={onError}
          loading={loading}
          style={inlineStyles}
        />
        {children}
      </picture>
    );
  },
);

// eslint seems to require this with forwardRef
PictureComponent.displayName = "Picture";

export const Picture = PictureComponent;
