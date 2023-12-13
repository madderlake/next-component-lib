export type ViewportName = string;
export type ViewportOrientation = "landscape" | "portrait";
export type ScreenPropKeys =
  | "inverted-colors"
  | "landscape"
  | "portrait"
  | "retina";

export type ViewportSettingsMap = Record<string, ViewportSettings>;

export interface ViewportSettings {
  minWidth: number;
  maxWidth?: number | undefined;
  content: number;
  query?: string | undefined;
}

export interface RangeViewportSettings {
  minWidth?: number | undefined;
  maxWidth?: number | undefined;
  content: number;
  query: string;
}

export interface ScreenPropSettings {
  query: string;
}

export interface ViewportsObject {
  [viewportName: string]: Viewport;
}

export interface RangeViewportsObject {
  [viewportName: string]: RangeViewport;
}

export interface ScreenPropsObject {
  [propName: string]: ScreenProp;
}

export interface Viewport {
  name: ViewportName;
  settings: ViewportSettings;
}

export interface RangeViewport {
  name: ViewportName;
  viewport: ViewportName;
  settings: RangeViewportSettings;
}

export interface ScreenProp {
  name: string;
  settings: ScreenPropSettings;
}

export interface RawSassKitViewport {
  content: number;
  "min-width"?: number;
  "max-width"?: number;
  query?: string;
}

export interface SerializedSassData {
  readonly [key: string]: string;
}
