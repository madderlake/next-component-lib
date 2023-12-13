import React, { useEffect, useState } from "react";

import type { LoadImagesContextValue } from "./LoadImagesContext";
import { LoadImagesContext } from "./LoadImagesContext";

export interface LoadImagesProviderProps {
  children?: React.ReactNode;
  containerRef: React.RefObject<HTMLElement>;
}

export const LoadImagesProvider = ({
  children,
  containerRef,
}: LoadImagesProviderProps): JSX.Element => {
  const [loadImages, setLoadImages] = useState<LoadImagesContextValue>(false);

  const callbackFunc = (entries: IntersectionObserverEntry[]): null => {
    const [entry] = entries;

    if (entry?.isIntersecting) setLoadImages(true);

    return null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, {
      root: null,
      rootMargin: "0px 0px 100%",
      threshold: 0,
    });

    const containerRefCurr = containerRef.current;

    if (containerRefCurr != null) {
      observer.observe(containerRefCurr);

      if (loadImages) observer.unobserve(containerRefCurr);
    }
  });

  return (
    <LoadImagesContext.Provider value={loadImages}>
      {children}
    </LoadImagesContext.Provider>
  );
};
