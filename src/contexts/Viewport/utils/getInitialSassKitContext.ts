import type {
  RangeViewportsObject,
  ScreenPropsObject,
  SerializedSassData,
  ViewportName,
  ViewportsObject,
} from "@/types/Viewport";

import { getSassKitScreenProps } from "./getSassKitScreenProps";
import { getSassKitViewports } from "./getSassKitViewports";

export interface InitialSassKitContext {
  viewportsOrder: ViewportName[];
  viewports: ViewportsObject;
  rangeViewports: RangeViewportsObject;
  screenProps: ScreenPropsObject;
}

export const getInitialSassKitContext = (
  sassData: SerializedSassData,
): InitialSassKitContext => {
  const { viewports: skViewports, ...skScreenProps } = sassData;
  // Get viewports Data
  const { viewportsOrder, viewports, rangeViewports } =
    getSassKitViewports(skViewports);
  // Get orientation, retina, inverted-colors, etc. data
  const screenProps = getSassKitScreenProps(skScreenProps);

  return {
    viewportsOrder: [...viewportsOrder],
    viewports: { ...viewports },
    rangeViewports: { ...rangeViewports },
    screenProps: { ...screenProps },
  };
};
