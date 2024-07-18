import { isEqual } from "lodash-es";
import { useContext, useEffect, useMemo, useState } from "react";

import type { ViewportContextValue } from "@/contexts/Viewport/ViewportContext";
import { ViewportContext } from "@/contexts/Viewport/ViewportContext";
import type { Viewport } from "@/types/Viewport";

import { useViewportHandlers } from "./helpers/useViewportHandlers";

type UseViewportProps = string | string[] | undefined;
export type UseViewport = (viewportProps?: UseViewportProps) => Viewport | null;

export const useViewport: UseViewport = (viewportProps) => {
  // Get the list of viewportProps that comes from SassKit and store them
  const [initialProps, setInitialProps] =
    useState<UseViewportProps>(viewportProps);
  // Set a state for the current selected viewport
  const [viewport, setViewport] = useState<Viewport | null>(null);
  // Get the list of viewports, events, and getters from the ViewportsContext
  const { viewports, events, getters } =
    useContext<ViewportContextValue>(ViewportContext);

  // Get the functions to bind on/off for events
  const { onViewport, offViewport } = events;
  // Get the functions that allow getting computed data from the ViewportsContext
  const { getCurrentViewport, getOrderedViewports, getEmitterIsDestroyed } =
    getters;

  // Memoize the value of all of the available viewports by name in order
  const allOrderedViewportNames = useMemo(
    () => getOrderedViewports(Object.keys(viewports)),
    [viewports, getOrderedViewports],
  );

  // Memoize the value of an ordered list of the viewports watched by the hook
  const orderedViewportsToWatch = useMemo((): string[] => {
    let viewportsToWatch: string[] = [];
    if (initialProps !== undefined) {
      if (typeof initialProps === "string") {
        viewportsToWatch = initialProps.split(" ");
      } else {
        viewportsToWatch = initialProps;
      }
    } else {
      viewportsToWatch = Object.keys(viewports);
    }

    return getOrderedViewports(viewportsToWatch);
  }, [initialProps, getOrderedViewports, viewports]);

  // Reset initialProps state if we get new viewport data from the context
  useEffect(() => {
    if (!isEqual(viewportProps, initialProps)) {
      setInitialProps(viewportProps);
    }
  }, [initialProps, viewportProps]);

  // Bind callbacks to onViewport/offViewport to update the selected viewport
  useViewportHandlers({
    setViewport,
    onViewport,
    offViewport,
    getCurrentViewport,
    getEmitterIsDestroyed,
    orderedViewportsToWatch,
    allViewports: viewports,
    allOrderedViewportNames,
  });

  return viewport;
};
