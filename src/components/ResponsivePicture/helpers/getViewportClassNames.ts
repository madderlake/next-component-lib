/* eslint-disable max-lines-per-function */
import type { ClassMap } from "../ResponsivePicture.module.scss";
import type { ViewportClassNameValue } from "../types";

interface GetClassNameProps {
  className: string;
  viewport: string;
  value: string;
  baseClass?: string | undefined;
  varPrefix?: string | undefined;
}

interface ApplyToResultProps
  extends Pick<
    GetClassNameProps,
    "className" | "baseClass" | "value" | "varPrefix" | "viewport"
  > {
  result: string[];
  propMap?: Record<string, string> | undefined;
  styles?: ClassMap | undefined;
}

export interface GetViewportClassNamesProps<T extends string>
  extends Pick<
    ApplyToResultProps,
    "baseClass" | "className" | "propMap" | "styles" | "varPrefix"
  > {
  value?: ViewportClassNameValue<T> | undefined;
  reverseOrderViewports: string[];
}

const DEFAULT_CLASS_PREFIX = "vp";
const DEFAULT_VIEWPORT_NAME = "default";

const getClassName = ({
  viewport,
  className,
  value,
  baseClass,
  varPrefix,
}: GetClassNameProps): string => {
  const currentBaseClass = baseClass !== undefined ? `${baseClass}-` : "";
  const currentVarPrefix = varPrefix ?? DEFAULT_CLASS_PREFIX;

  return `${currentBaseClass}${currentVarPrefix}-${className}-${viewport}--${value}`;
};

const applyValueToResult = ({
  className,
  result,
  viewport,
  value,
  propMap,
  varPrefix,
  baseClass,
  styles,
}: ApplyToResultProps): void => {
  // See if there's a prop replacement for this prop in the propMap
  let valueKey: string = value;
  if (
    propMap !== undefined &&
    Object.prototype.hasOwnProperty.call(propMap, value)
  ) {
    valueKey = propMap[value];
  }

  const viewportClassName = getClassName({
    className,
    viewport,
    value: valueKey,
    varPrefix,
    baseClass,
  });

  styles !== undefined && result.push(viewportClassName);
};

export const getViewportClassNames = <
  ClassName extends string,
  T extends string
>({
  className,
  value,
  reverseOrderViewports,
  propMap,
  varPrefix,
  baseClass,
  styles,
}: GetViewportClassNamesProps<T>): ClassName[] => {
  const result: ClassName[] = [];

  if (value === undefined) {
    return result;
  }

  // If the value of a record is a string, it means this is only for defaults
  // If the value is another record, it means it is for a viewport
  if (typeof value === "string") {
    applyValueToResult({
      className,
      result,
      viewport: DEFAULT_VIEWPORT_NAME,
      value,
      propMap,
      varPrefix,
      baseClass,
      styles,
    });

    return result;
  }

  // This iterates from smallest -> largest
  // The last value becomes the default value
  let defaultViewportProps: string | null = null;
  let currentViewportProps: string | null = null;
  for (const viewport of reverseOrderViewports) {
    if (Object.prototype.hasOwnProperty.call(value, viewport)) {
      const viewportProps = value[viewport];
      currentViewportProps = viewportProps;
      if (defaultViewportProps === null) {
        defaultViewportProps = viewportProps;
      }
    }

    if (currentViewportProps !== null) {
      applyValueToResult({
        className,
        result,
        viewport,
        value: currentViewportProps,
        propMap,
        varPrefix,
        baseClass,
        styles,
      });
    }
  }

  if (defaultViewportProps !== null) {
    applyValueToResult({
      className,
      result,
      viewport: DEFAULT_VIEWPORT_NAME,
      value: defaultViewportProps,
      propMap,
      varPrefix,
      baseClass,
      styles,
    });
  }

  return result;
};
