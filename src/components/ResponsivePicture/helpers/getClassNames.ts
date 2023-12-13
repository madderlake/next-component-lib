/* eslint-disable complexity */
import classnames from "classnames";

import type { ResponsiveImageLayoutType } from "../ResponsivePicture";
import type { ClassMap } from "../ResponsivePicture.module.scss";
import { getViewportClassNames } from "./getViewportClassNames";

interface GetClassNamesProps {
  isHydrated: boolean;
  isRendered: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  renderedClassName?: string | undefined;
  loadingPreventedClassName?: string | undefined;
  loadingClassName?: string | undefined;
  loadedClassName?: string | undefined;
  errorClassName?: string | undefined;
  hydratedClassName?: string | undefined;
  notHydratedClassName?: string | undefined;
  styles: ClassMap;
  containerClass: string;
  pictureClass: string;
  layout?:
    | ResponsiveImageLayoutType
    | Record<string, ResponsiveImageLayoutType>
    | undefined;
  reverseOrderViewports: string[];
}

interface GetClassNamesResult {
  containerClass: string;
  pictureClass: string;
  noScriptPictureClass: string;
}
const SPACES = / +/;

function getScopedClasses(str: string, styles: ClassMap): string {
  return str
    .split(SPACES)
    .filter((item): item is keyof ClassMap => item in styles)
    .map((cls) => styles[cls])
    .join(" ");
}
// eslint-disable-next-line max-lines-per-function
export function getClassNames({
  isHydrated,
  isRendered,
  isLoading,
  isLoaded,
  isError,
  renderedClassName,
  loadingPreventedClassName,
  loadingClassName,
  loadedClassName,
  errorClassName,
  hydratedClassName,
  notHydratedClassName,
  styles,
  containerClass,
  pictureClass,
  layout,
  reverseOrderViewports,
}: GetClassNamesProps): GetClassNamesResult {
  const containerHydratedClass = `${containerClass}--js`;
  const containerNotHydratedClass = `${containerClass}__picture__no-js`;
  const containerRenderedClass = `${containerClass}--rendered`;
  const containerLoadingPreventedClass = `${containerClass}--no-load`;
  const containerActiveClass = `${containerClass}--active`;
  const containerRemovedClass = `${containerClass}--removed`;
  const containerLoadingClass = `${containerClass}--loading`;
  const containerLoadedClass = `${containerClass}--loaded`;
  const containerErrorClass = `${containerClass}--error`;

  const isRemoved = !isHydrated && !isRendered;

  // Get viewport-specific classes for the container
  const containerLayoutClassNames = getViewportClassNames({
    styles,
    baseClass: containerClass,
    className: "layout",
    value: layout,
    reverseOrderViewports,
  });

  // Get all of the classNames to apply to the container
  const containerClasses = classnames(
    containerClass,
    containerLayoutClassNames,
    isHydrated
      ? [containerHydratedClass, hydratedClassName]
      : [containerNotHydratedClass, notHydratedClassName],
    isRendered
      ? [containerRenderedClass, renderedClassName]
      : [containerLoadingPreventedClass, loadingPreventedClassName],
    isRemoved ? [containerRemovedClass] : [containerActiveClass],
    isLoading ? [containerLoadingClass, loadingClassName] : null,
    isLoaded ? [containerLoadedClass, loadedClassName] : null,
    isError ? [containerErrorClass, errorClassName] : null
  );

  // Get all of the classNames to apply to the picture tag
  const pictureClasses = classnames(pictureClass, `${pictureClass}__js`);

  const noScriptPictureClasses = classnames(
    pictureClass,
    `${pictureClass}__no-js`
  );

  return {
    containerClass: getScopedClasses(containerClasses, styles),
    pictureClass: getScopedClasses(pictureClasses, styles),
    noScriptPictureClass: getScopedClasses(noScriptPictureClasses, styles),
  };
}
