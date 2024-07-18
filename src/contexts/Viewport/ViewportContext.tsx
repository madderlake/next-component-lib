import React from "react";

import type {
  RangeViewportsObject,
  ScreenPropKeys,
  ScreenPropsObject,
  Viewport,
  ViewportName,
  ViewportsObject,
} from "@/types/Viewport";

import type {
  EEScreenPropCallback,
  EEViewportCallback,
} from "./ViewportEventEmitter";

export type ViewportContextListenerCallback = (
  viewportName: string,
  callback: EEViewportCallback,
) => void;

export interface ViewportContextEvents {
  initialized: boolean;
  onViewport: ViewportContextListenerCallback;
  offViewport: ViewportContextListenerCallback;
  onScreenProp: (
    screenPropName: ScreenPropKeys,
    callback: EEScreenPropCallback,
  ) => void;
  offScreenProp: (
    screenPropName: ScreenPropKeys,
    callback: EEScreenPropCallback,
  ) => void;
}

export interface ViewportContextGetters {
  getCurrentViewport: (viewportNames?: string[]) => Viewport | null;
  getCurrentScreenPropValue: (screenPropName: ScreenPropKeys) => boolean | null;
  getOrderedViewports: (viewportNames: string[]) => string[];
  getEmitterIsDestroyed: () => boolean;
}

export interface ViewportContextValue {
  viewportsOrder: ViewportName[];
  viewports: ViewportsObject;
  rangeViewports: RangeViewportsObject;
  screenProps: ScreenPropsObject;
  events: ViewportContextEvents;
  getters: ViewportContextGetters;
}

export const getViewportEventsDefaultValue = (): ViewportContextEvents => ({
  initialized: false,
  onViewport: () => {},
  offViewport: () => {},
  onScreenProp: () => {},
  offScreenProp: () => {},
});

export const getViewportGettersDefaultValue = (): ViewportContextGetters => ({
  getCurrentViewport: () => null,
  getCurrentScreenPropValue: () => null,
  getOrderedViewports: () => [],
  getEmitterIsDestroyed: () => true,
});

export const ViewportContextDefaultValue: ViewportContextValue = {
  viewportsOrder: [],
  viewports: {},
  rangeViewports: {},
  screenProps: {},
  events: getViewportEventsDefaultValue(),
  getters: getViewportGettersDefaultValue(),
};

export const ViewportContext = React.createContext<ViewportContextValue>(
  ViewportContextDefaultValue,
);
