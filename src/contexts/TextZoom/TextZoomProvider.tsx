import React, { useEffect, useState } from "react";

import { TextZoom } from "@marcom/ac-accessibility";

import { TextZoomContext } from "./TextZoomContext";

interface TextZoomContexProviderProps {
  children?: React.ReactNode;
}

interface ZoomEvent extends Event {
  detail?: {
    currentSize: number;
    originalSize: number;
  };
}

// eslint-disable-next-line max-lines-per-function
export function TextZoomContexProvider({
  children,
}: TextZoomContexProviderProps): JSX.Element {
  const [zoomRatio, setZoomRatio] = useState<null | number>(null);

  useEffect(() => {
    const onZoom: EventListener = (evt: ZoomEvent): void => {
      if (evt.detail !== undefined) {
        setZoomRatio(evt.detail.currentSize / evt.detail.originalSize);
      }
    };

    window.addEventListener("resize:text-zoom", onZoom);

    TextZoom.detect();

    return () => {
      window.removeEventListener("resize:text-zoom", onZoom);
    };
  }, []);

  return (
    <TextZoomContext.Provider
      value={{
        zoomRatio,
      }}
    >
      {children}
    </TextZoomContext.Provider>
  );
}
