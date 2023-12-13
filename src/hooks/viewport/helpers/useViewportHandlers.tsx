import { useRef } from "react";

import type { ViewportContextListenerCallback } from "@/contexts/Viewport/ViewportContext";
import useIsomorphicLayoutEffect from "@/hooks/useLayoutEffectIsomorphic/useLayoutEffectIsomorphic";
import type { Viewport, ViewportsObject } from "@/types/Viewport";

import { getNearestViewport } from "./getNearestViewport";

interface HandlersGetter {
  callback: (nearestViewport: Viewport | null) => void;
  viewportsToWatch: string[];
  allViewportNames: string[];
  viewports: ViewportsObject;
}

const getHandlers = ({
  callback,
  viewportsToWatch,
  allViewportNames,
  viewports,
}: HandlersGetter): Array<[string, (newViewport: Viewport) => void]> => {
  const handlers: Array<[string, (newViewport: Viewport) => void]> = [];

  for (const viewportName of allViewportNames) {
    const targetViewportName = viewportsToWatch.includes(viewportName)
      ? viewportName
      : undefined;
    const handler = (newViewport: Viewport): void => {
      const nearestViewport = getNearestViewport({
        currentViewportName: newViewport.name,
        targetViewportName,
        orderedViewportNames: viewportsToWatch,
        allOrderedViewportNames: allViewportNames,
        viewports,
      });

      callback(nearestViewport);
    };
    handlers.push([viewportName, handler]);
  }

  return handlers;
};

interface UseViewportHandlersProps {
  setViewport: React.Dispatch<React.SetStateAction<Viewport | null>>;
  onViewport: ViewportContextListenerCallback;
  offViewport: ViewportContextListenerCallback;
  getCurrentViewport: (viewportNames?: string[]) => Viewport | null;
  getEmitterIsDestroyed: () => boolean;
  orderedViewportsToWatch: string[];
  allOrderedViewportNames: string[];
  allViewports: ViewportsObject;
}

/* eslint-disable-next-line max-lines-per-function */
export const useViewportHandlers = ({
  setViewport,
  onViewport,
  offViewport,
  getCurrentViewport,
  getEmitterIsDestroyed,
  orderedViewportsToWatch,
  allOrderedViewportNames,
  allViewports,
}: UseViewportHandlersProps): void => {
  const viewportName = useRef<string | null>(null);
  useIsomorphicLayoutEffect(() => {
    if (!getEmitterIsDestroyed()) {
      const initialViewport = getCurrentViewport(allOrderedViewportNames);
      const viewportToSet =
        initialViewport === null
          ? null
          : getNearestViewport({
              currentViewportName: initialViewport.name,
              orderedViewportNames: orderedViewportsToWatch,
              allOrderedViewportNames,
              viewports: allViewports,
            });
      setViewport(viewportToSet);
      viewportName.current = viewportToSet?.name ?? null;
    }

    const handlers = getHandlers({
      callback: (nearestViewport) => {
        if (
          nearestViewport === null ||
          viewportName.current !== nearestViewport.name
        ) {
          setViewport(nearestViewport);
          viewportName.current = nearestViewport?.name ?? null;
        }
      },
      viewportsToWatch: orderedViewportsToWatch,
      allViewportNames: allOrderedViewportNames,
      viewports: allViewports,
    });

    handlers.forEach(([_viewportName, handler]) =>
      onViewport(_viewportName, handler)
    );

    return () => {
      handlers.forEach(([_viewportName, handler]) =>
        offViewport(_viewportName, handler)
      );
    };
  }, [
    onViewport,
    offViewport,
    getCurrentViewport,
    getEmitterIsDestroyed,
    orderedViewportsToWatch,
    allOrderedViewportNames,
    allViewports,
  ]);
};
