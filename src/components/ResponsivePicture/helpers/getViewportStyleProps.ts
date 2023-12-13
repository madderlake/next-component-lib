import type { ViewportStyleProps, ViewportStyleValue } from "../types";

export interface GetViewportStylePropsResult {
  dataAttrs: Record<string, string>;
  style: Record<string, string>;
}

interface ApplyToResultProps<T extends string> {
  result: GetViewportStylePropsResult;
  viewport: string;
  value: ViewportStyleProps<T>;
  propMap?: Record<string, string> | undefined;
  varPrefix?: string | undefined;
}

export interface GetViewportStylePropsProps<T extends string>
  extends Pick<ApplyToResultProps<T>, "propMap" | "varPrefix"> {
  value: ViewportStyleValue<T>;
  reverseOrderViewports: string[];
}

const DEFAULT_VAR_PREFIX = "vp";
const DEFAULT_VIEWPORT_NAME = "default";

const getStyleVarName = (
  viewport: string,
  prop: string,
  varPrefix?: string
): string => {
  const currentVarPrefix = varPrefix ?? DEFAULT_VAR_PREFIX;

  return `--${currentVarPrefix}-${prop}-${viewport}`;
};

const getDataAttrName = (
  viewport: string,
  prop: string,
  varPrefix?: string
): string => {
  const currentVarPrefix = varPrefix ?? DEFAULT_VAR_PREFIX;

  return `data-${currentVarPrefix}-${prop}-${viewport}`;
};

const isViewportSpecific = <T extends string>(
  value: ViewportStyleValue<T>
): boolean => {
  for (const key in value) {
    if (
      Object.prototype.hasOwnProperty.call(value, key) &&
      typeof value[key] === "object"
    ) {
      return true;
    }
  }

  return false;
};

const applyValueToResult = <T extends string>({
  result,
  viewport,
  value,
  propMap,
  varPrefix,
}: ApplyToResultProps<T>): void => {
  for (const prop in value) {
    if (Object.prototype.hasOwnProperty.call(value, prop)) {
      // See if there's a prop replacement for this prop in the propMap
      let propKey = prop;
      if (
        propMap !== undefined &&
        Object.prototype.hasOwnProperty.call(propMap, prop)
      ) {
        propKey = propMap[prop];
      }

      result.style[getStyleVarName(viewport, propKey, varPrefix)] = value[prop];

      if (viewport !== DEFAULT_VIEWPORT_NAME) {
        result.dataAttrs[getDataAttrName(viewport, propKey, varPrefix)] = "";
      }
    }
  }
};

// eslint-disable-next-line max-lines-per-function
export const getViewportStyleProps = <T extends string>({
  value,
  reverseOrderViewports,
  propMap,
  varPrefix,
}: GetViewportStylePropsProps<T>): GetViewportStylePropsResult => {
  const result: GetViewportStylePropsResult = {
    dataAttrs: {},
    style: {},
  };

  // If the value of a record is a string, it means this is only for defaults
  // If the value is another record, it means it is for a viewport
  if (!isViewportSpecific<T>(value)) {
    const defaultValue = value as ViewportStyleProps<T>;
    applyValueToResult({
      result,
      viewport: DEFAULT_VIEWPORT_NAME,
      value: defaultValue,
      propMap,
      varPrefix,
    });

    return result;
  }

  // This iterates from smallest -> largest
  // The last value becomes the default value
  let defaultViewportProps: Record<string, string> | null = null;
  let currentViewportProps: Record<string, string> | null = null;
  for (const viewport of reverseOrderViewports) {
    if (Object.prototype.hasOwnProperty.call(value, viewport)) {
      const viewportProps = value[viewport] as ViewportStyleProps<T>;
      currentViewportProps = viewportProps;

      if (defaultViewportProps === null) {
        defaultViewportProps = viewportProps;
      }
    }

    if (currentViewportProps !== null) {
      applyValueToResult({
        result,
        viewport,
        value: currentViewportProps,
        propMap,
        varPrefix,
      });
    }
  }

  if (defaultViewportProps !== null) {
    applyValueToResult({
      result,
      viewport: DEFAULT_VIEWPORT_NAME,
      value: defaultViewportProps,
      propMap,
      varPrefix,
    });
  }

  return result;
};
