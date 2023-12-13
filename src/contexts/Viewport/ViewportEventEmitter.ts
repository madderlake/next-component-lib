// import EventEmitterMicro from "@marcom/ac-event-emitter-micro";

import type {
  RangeViewport,
  RangeViewportsObject,
  ScreenPropsObject,
  Viewport,
  ViewportName,
  ViewportsObject,
} from "@/types/Viewport";

type EECallback = EEViewportCallback | EEScreenPropCallback;
export type EEViewportCallback = (viewport: Viewport) => void;
export type EEScreenPropCallback = (matches: boolean) => void;

interface IterateViewportMediaQueries {
  bindHandler?: boolean;
  viewportNames?: ViewportName[] | undefined;
}

interface MediaQueryCacheItem {
  mediaQuery: MediaQueryList;
  handler: (event: MediaQueryListEvent) => void;
}

interface ViewportEventEmitterEmitterProps {
  viewportsOrder: ViewportName[];
  viewports: ViewportsObject;
  rangeViewports: RangeViewportsObject;
  screenProps: ScreenPropsObject;
}

class ViewportEventEmitter {
  protected viewportsOrder: ViewportName[];
  protected viewports: ViewportsObject;
  protected rangeViewports: RangeViewportsObject;
  protected screenProps: ScreenPropsObject;
  private mediaQueriesInitialized: boolean;
  private activeViewportName: string | null;
  private readonly activeScreenPropValues: Map<string, boolean>;
  // private readonly emitter: EventEmitterMicro;
  private mediaQueriesCache: MediaQueryCacheItem[];
  private callbackCount: number;
  private didDestroy: boolean;

  constructor({
    viewportsOrder,
    viewports,
    rangeViewports,
    screenProps,
  }: ViewportEventEmitterEmitterProps) {
    this.viewportsOrder = viewportsOrder;
    this.viewports = viewports;
    this.rangeViewports = rangeViewports;
    this.screenProps = screenProps;
    this.mediaQueriesInitialized = false;
    this.activeViewportName = null;
    this.activeScreenPropValues = new Map<string, boolean>();
    // this.emitter = new EventEmitterMicro();
    this.mediaQueriesCache = [];
    this.callbackCount = 0;
    this.didDestroy = false;
  }

  static getScreenPropEmitterKey(screenPropName: string): string {
    return `screen:${screenPropName}`;
  }

  static getViewportEmitterKey(screenPropName: string): string {
    return `viewport:${screenPropName}`;
  }

  public getCurrentViewport = (viewportNames?: string[]): Viewport | null => {
    if (this.didDestroy) {
      throw new Error("ViewportEmitter already destroyed, cannot get viewport");
    }

    // Get cached viewport if bound
    if (
      viewportNames === undefined &&
      this.mediaQueriesInitialized &&
      this.activeViewportName !== null
    ) {
      return this.viewports[this.activeViewportName];
    }

    return this._iterateViewportMediaQueries({ viewportNames });
  };

  public getCurrentScreenPropValue = (
    screenPropName: string
  ): boolean | null => {
    if (
      this.mediaQueriesInitialized &&
      this.activeScreenPropValues.has(screenPropName)
    ) {
      return this.activeScreenPropValues.get(screenPropName) ?? null;
    }

    if (
      Object.prototype.hasOwnProperty.call(this.screenProps, screenPropName)
    ) {
      const screenProp = this.screenProps[screenPropName];
      if (screenProp === undefined) {
        return null;
      }

      const mediaQuery = window.matchMedia(screenProp.settings.query);

      return mediaQuery.matches;
    }

    return null;
  };

  public getOrderedViewports = (viewportNames?: string[]): string[] => {
    let orderedViewports = this.viewportsOrder;
    if (viewportNames !== undefined) {
      orderedViewports = orderedViewports.filter((vp) =>
        viewportNames.includes(vp)
      );
    }

    return orderedViewports;
  };

  public getIsDestroyed = (): boolean => {
    return this.didDestroy;
  };

  public onViewport = (
    viewportName: string,
    callback: EEViewportCallback
  ): boolean => {
    if (!this._hasViewport(viewportName)) {
      return false;
    }

    const emitterKey = ViewportEventEmitter.getViewportEmitterKey(viewportName);

    return this._on(emitterKey, callback);
  };

  public onScreenProp = (
    screenPropName: string,
    callback: EEScreenPropCallback
  ): boolean => {
    if (!this.activeScreenPropValues.has(screenPropName)) {
      return false;
    }

    const emitterKey =
      ViewportEventEmitter.getScreenPropEmitterKey(screenPropName);

    return this._on(emitterKey, callback);
  };

  public offViewport = (
    viewportName: string,
    callback?: EEViewportCallback
  ): boolean => {
    if (!this._hasViewport(viewportName)) {
      return false;
    }

    const emitterKey = ViewportEventEmitter.getViewportEmitterKey(viewportName);

    return this._off(emitterKey, callback);
  };

  public offScreenProp = (
    screenPropName: string,
    callback?: EEScreenPropCallback
  ): boolean => {
    if (!this.activeScreenPropValues.has(screenPropName)) {
      return false;
    }

    const emitterKey =
      ViewportEventEmitter.getScreenPropEmitterKey(screenPropName);

    return this._off(emitterKey, callback);
  };

  public destroy = (): void => {
    //this.emitter.destroy();
    this._teardownMediaQueries();
    this.viewports = {};
    this.rangeViewports = {};
    this.screenProps = {};
    this.callbackCount = 0;
    this.didDestroy = true;
  };

  private _on(eventName: string, callback: EECallback): boolean {
    if (!this.mediaQueriesInitialized) {
      this._setupMediaQueries();
    }

    // this.emitter.on(eventName, callback);
    this.callbackCount++;

    return true;
  }

  private _off(eventName: string, callback?: EECallback): boolean {
    // this.emitter.off(eventName, callback);
    this.callbackCount--;

    if (this.callbackCount === 0) {
      this._teardownMediaQueries();
    }

    return true;
  }

  private _setupMediaQueries(): void {
    if (this.mediaQueriesInitialized) {
      return;
    }

    // Bind viewport media queries
    this._setupViewportMediaQueries();

    // Bind screen prop media queries
    this._setupScreenPropMediaQueries();

    this.mediaQueriesInitialized = true;
  }

  private _getRangeViewportsForIndex(
    viewportIdx: number,
    viewportsLen: number,
    viewportName: ViewportName
  ): RangeViewport[] {
    const rangeViewports = [this.rangeViewports[`range:${viewportName} only`]];

    // Add additional viewport triggers as needed
    if (viewportIdx === 0) {
      rangeViewports.push(this.rangeViewports[`range:${viewportName} down`]);
    }

    if (viewportIdx === viewportsLen - 1) {
      rangeViewports.push(this.rangeViewports[`range:${viewportName} up`]);
    }

    return rangeViewports;
  }

  private _iterateViewportMediaQueries({
    bindHandler = false,
    viewportNames,
  }: IterateViewportMediaQueries): Viewport | null {
    let initialMatchingViewport: Viewport | null = null;
    const orderedViewports = this.getOrderedViewports(viewportNames);

    for (let i = orderedViewports.length - 1; i > -1; i--) {
      const vpName = orderedViewports[i];
      if (Object.prototype.hasOwnProperty.call(this.viewports, vpName)) {
        const rangeViewports = this._getRangeViewportsForIndex(
          i,
          orderedViewports.length,
          vpName
        );

        for (const rangeViewport of rangeViewports) {
          const mediaQuery = window.matchMedia(rangeViewport.settings.query);

          if (mediaQuery.matches) {
            initialMatchingViewport =
              this._getViewportForRangeViewport(rangeViewport);
          }

          if (bindHandler) {
            // Create an event listener
            const handler = (event: MediaQueryListEvent): void => {
              if (event.matches) {
                this._handleViewportMediaQueryChange(rangeViewport);
              }
            };

            // Attach the event listener to know when the matches value changes
            mediaQuery.addEventListener("change", handler);
            this.mediaQueriesCache.push({ mediaQuery, handler });
          }
        }
      }
    }

    return initialMatchingViewport;
  }

  private _setupViewportMediaQueries(): void {
    const initialMatchingViewport = this._iterateViewportMediaQueries({
      bindHandler: true,
    });

    this.activeViewportName = initialMatchingViewport?.name ?? null;
  }

  private _setupScreenPropMediaQueries(): void {
    for (const screenPropName in this.screenProps) {
      if (
        Object.prototype.hasOwnProperty.call(this.screenProps, screenPropName)
      ) {
        const screenProp = this.screenProps[screenPropName];
        const mediaQuery = window.matchMedia(screenProp.settings.query);

        this.activeScreenPropValues.set(screenPropName, mediaQuery.matches);

        // Create an event listener
        const handler = (event: MediaQueryListEvent): void => {
          this._handleScreenPropMediaQueryChange(screenPropName, event.matches);
        };

        // Attach the event listener to know when the matches value changes
        mediaQuery.addEventListener("change", handler);
        this.mediaQueriesCache.push({ mediaQuery, handler });
      }
    }
  }

  private _teardownMediaQueries(): void {
    for (const { mediaQuery, handler } of this.mediaQueriesCache) {
      mediaQuery.removeEventListener("change", handler);
    }

    this.mediaQueriesCache = [];
    this.activeViewportName = null;
    this.activeScreenPropValues.clear();
    this.mediaQueriesInitialized = false;
  }

  private _handleViewportMediaQueryChange(rangeViewport: RangeViewport): void {
    const viewportName = rangeViewport.viewport;
    if (viewportName !== this.activeViewportName) {
      const viewportObj = this._getViewportForRangeViewport(rangeViewport);
      if (viewportObj !== null) {
        this.activeViewportName = viewportName;
        const emitterKey =
          ViewportEventEmitter.getViewportEmitterKey(viewportName);
        // this.emitter.trigger(emitterKey, { ...viewportObj });
      }
    }
  }

  private _handleScreenPropMediaQueryChange(
    screenPropName: string,
    matches: boolean
  ): void {
    if (this.activeScreenPropValues.get(screenPropName) !== matches) {
      this.activeScreenPropValues.set(screenPropName, matches);
      const emitterKey =
        ViewportEventEmitter.getScreenPropEmitterKey(screenPropName);
      //this.emitter.trigger(emitterKey, matches);
    }
  }

  private _getViewportForRangeViewport(
    rangeViewport: RangeViewport
  ): Viewport | null {
    return this.viewports[rangeViewport.viewport] ?? null;
  }

  private _hasViewport(viewportName: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.viewports, viewportName);
  }
}

export default ViewportEventEmitter;
