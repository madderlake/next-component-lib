import { deserialize } from "@marcom/sass-utilities";
import { sortedIndexBy } from "lodash-es";

import type {
  RangeViewportSettings,
  RangeViewportsObject,
  RawSassKitViewport,
  Viewport,
  ViewportName,
  ViewportSettings,
  ViewportsObject,
} from "@/types/Viewport";

import { autoprefixQuery } from "./autoprefixQuery";

const RANGE_VIEWPORT_PREFIX = "range:";

const getViewportSortValue = (viewport: Viewport): number =>
  viewport.settings.minWidth;

// Add the viewport to the array while maintaining that the list is sorted
// from smallest -> largest viewport (by settings.minWidth)
const addSortedViewportToArr = (
  viewport: Viewport,
  arr: ViewportName[],
  viewportCache: Viewport[]
): void => {
  const insertionIdx = sortedIndexBy(
    viewportCache,
    viewport,
    getViewportSortValue
  );
  arr.splice(insertionIdx, 0, viewport.name);
  viewportCache.splice(insertionIdx, 0, viewport);
};

const getViewportNameFromRangeViewport = (name: string): string => {
  return name.substring(RANGE_VIEWPORT_PREFIX.length, name.indexOf(" "));
};

const populateSettings = (
  name: string,
  rawViewport: RawSassKitViewport,
  isRangeViewport: boolean
): ViewportSettings | RangeViewportSettings => {
  const settings: Partial<ViewportSettings> | Partial<RangeViewportSettings> =
    {};

  if (typeof rawViewport["max-width"] === "number") {
    settings.maxWidth = rawViewport["max-width"];
  }

  if (!isRangeViewport || typeof rawViewport["min-width"] === "number") {
    settings.minWidth = rawViewport["min-width"];
  }

  if (isRangeViewport || typeof rawViewport.query === "string") {
    settings.query = autoprefixQuery(name, rawViewport.query ?? "");
  }

  return settings as ViewportSettings | RangeViewportSettings;
};

interface SassKitViewports {
  viewportsOrder: ViewportName[];
  viewports: ViewportsObject;
  rangeViewports: RangeViewportsObject;
}

// Parses the raw SassKit viewports data from Sass exports and turns them into well-formed typed objects
export const getSassKitViewports = (
  sassViewportsStr: string
): SassKitViewports => {
  const deserializedViewports = deserialize(sassViewportsStr);
  const sassObj = deserializedViewports as {
    [key: string]: RawSassKitViewport;
  };

  const orderedViewportsCache: Viewport[] = [];

  const result: SassKitViewports = {
    viewportsOrder: [],
    viewports: {},
    rangeViewports: {},
  };

  for (const vpKey in sassObj) {
    if (Object.prototype.hasOwnProperty.call(sassObj, vpKey)) {
      const rawViewport = sassObj[vpKey];
      const isRangeViewport = vpKey.startsWith(RANGE_VIEWPORT_PREFIX);
      const settings = populateSettings(vpKey, rawViewport, isRangeViewport);

      if (isRangeViewport) {
        const typedSettings = settings as RangeViewportSettings;
        const viewport = {
          name: vpKey,
          viewport: getViewportNameFromRangeViewport(vpKey),
          settings: typedSettings,
        };
        result.rangeViewports[vpKey] = viewport;
      } else {
        const typedSettings = settings as ViewportSettings;
        const viewport = { name: vpKey, settings: typedSettings };
        result.viewports[vpKey] = viewport;
        addSortedViewportToArr(
          viewport,
          result.viewportsOrder,
          orderedViewportsCache
        );
      }
    }
  }

  return result;
};
