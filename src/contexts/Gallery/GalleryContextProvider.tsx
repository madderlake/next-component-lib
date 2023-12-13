import React, { useEffect, useState } from "react";

import { GalleryContext } from "./GalleryContext";

function buildThresholdList(numSteps: number): number[] {
  const thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);

  return thresholds;
}

interface GalleryContextProviderProps {
  children?: React.ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export function GalleryContextProvider({
  children,
}: GalleryContextProviderProps): JSX.Element {
  interface GalleryEntries {
    [id: string]: {
      ratio: number;
      id: string;
    };
  }

  const [galleryEntries, setGalleryEntries] = useState<GalleryEntries>({});
  const [activeGalleryId, setActiveGalleryId] = useState<string | null>(null);
  const [galleryObserver, setGalleryObserver] =
    useState<IntersectionObserver | null>(null);

  const galleryObserve = (el: Element, id: string): void => {
    if (galleryObserver !== null) {
      setGalleryEntries((currEntries) =>
        Object.assign({}, currEntries, { [id]: null })
      );
      galleryObserver.observe(el);
    }
  };

  const galleryUnobserve = (el: Element, id: string): void => {
    if (galleryObserver !== null) {
      setGalleryEntries((currEntries) => {
        return Object.entries(currEntries).reduce<GalleryEntries>(
          (acc, [key, val]) => {
            if (key !== id) {
              acc[key] = val;
            }

            return acc;
          },
          {}
        );
      });
      galleryObserver.unobserve(el);
    }
  };

  // sorts all entries on gallery intersectionObserver by intersectionRatio
  // first item in the collection is the most visible gallery
  useEffect(() => {
    const active = Object.values(galleryEntries).sort((a, b) => {
      if (a === null || b === null) return 0;
      if (a.ratio < b.ratio) return 1;
      if (b.ratio < a.ratio) return -1;

      return 0;
    })[0];

    setActiveGalleryId(active?.id);
  }, [galleryEntries]);

  // creates intersectionObserver for tracking all of the galleries on the page
  // so that we are able to tell which one is most in view
  useEffect(() => {
    const cb = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ): void => {
      entries.forEach((entry) => {
        setGalleryEntries((current) => {
          return Object.assign({}, current, {
            [entry.target.id]: {
              ratio: entry.intersectionRatio,
              id: entry.target.id,
            },
          });
        });
      });
    };

    const obs = new IntersectionObserver(cb, {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(20),
    });

    setGalleryObserver(obs);

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <GalleryContext.Provider
      value={{
        galleryObserve,
        galleryUnobserve,
        activeGalleryId,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}
