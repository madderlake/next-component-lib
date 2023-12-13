import type { Viewport, ViewportsObject } from "@/types/Viewport";

interface GetNearestViewportProps {
  currentViewportName: string;
  targetViewportName?: string | undefined;
  orderedViewportNames: string[];
  allOrderedViewportNames: string[];
  viewports: ViewportsObject;
}

export const getNearestViewport = ({
  currentViewportName,
  targetViewportName,
  orderedViewportNames,
  allOrderedViewportNames,
  viewports,
}: GetNearestViewportProps): Viewport | null => {
  if (
    targetViewportName !== undefined &&
    currentViewportName === targetViewportName
  ) {
    return viewports[targetViewportName];
  }

  const currentViewportIndex =
    orderedViewportNames.indexOf(currentViewportName);

  if (currentViewportIndex !== -1) {
    return viewports[currentViewportName];
  }

  const indexInFullList = allOrderedViewportNames.indexOf(currentViewportName);
  if (indexInFullList === -1) {
    return null;
  }

  for (let i = indexInFullList; i > -1; i--) {
    if (orderedViewportNames.includes(allOrderedViewportNames[i])) {
      return viewports[allOrderedViewportNames[i]];
    }
  }

  return viewports[orderedViewportNames[0]];
};
