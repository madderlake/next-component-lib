// import React, { useCallback, useEffect, useMemo, useState } from "react";

// import type { SerializedSassData } from "@/types/Viewport";

// import type { InitialSassKitContext } from "./utils/getInitialSassKitContext";
// import { getInitialSassKitContext } from "./utils/getInitialSassKitContext";
// import type {
//   ViewportContextEvents,
//   ViewportContextGetters,
// } from "./ViewportContext";
// import {
//   getViewportEventsDefaultValue,
//   getViewportGettersDefaultValue,
//   ViewportContext,
// } from "./ViewportContext";
// // import ViewportEventEmitter from "./ViewportEventEmitter";

// export interface ViewportsProviderProps {
//   sassData?: SerializedSassData;
//   children?: React.ReactNode;
// }

// interface RuntimeObjectProps {
//   // vpEventEmitter: ViewportEventEmitter | null;
//   events: ViewportContextEvents;
//   getters: ViewportContextGetters;
// }

// // const getEvents = (
// //   vpEventEmitter: ViewportEventEmitter
// // ): ViewportContextEvents => {
// //   const { onViewport, offViewport, onScreenProp, offScreenProp } =
// //     vpEventEmitter;

// //   return {
// //     initialized: true,
// //     onViewport,
// //     offViewport,
// //     onScreenProp,
// //     offScreenProp,
// //   };
// // };

// // const getGetters = (
// //   vpEventEmitter: ViewportEventEmitter
// // ): ViewportContextGetters => {
// //   const {
// //     getCurrentViewport,
// //     getCurrentScreenPropValue,
// //     getOrderedViewports,
// //     getIsDestroyed,
// //   } = vpEventEmitter;

// // return {
// //   getCurrentViewport,
// //   getCurrentScreenPropValue,
// //   getOrderedViewports,
// //   getEmitterIsDestroyed: getIsDestroyed,
// // };
// //};

// /* eslint-disable-next-line max-lines-per-function */
// export const SassKitViewportsProvider = ({
//   sassData,
//   children,
// }: ViewportsProviderProps): JSX.Element => {
//   if (sassData === undefined) {
//     throw new Error("ViewportsContext is missing");
//   }

//   const {
//     "inverted-colors": invertedColors,
//     landscape,
//     portrait,
//     retina,
//     viewports,
//   } = sassData;

//   const [isReady, setIsReady] = useState<boolean>(false);

//   // TODO: This would be ideal to do in React Server Components since these values generally don't change
//   // Create a ViewportEventEmitter to optimize media query reuse
//   const getInitialContextValue = useCallback((): InitialSassKitContext => {
//     return getInitialSassKitContext({
//       "inverted-colors": invertedColors,
//       landscape,
//       portrait,
//       retina,
//       viewports,
//     });
//   }, [invertedColors, landscape, portrait, retina, viewports]);

//   // const {  events, getters } =
//   //   useMemo((): RuntimeObjectProps => {
//   //     if (!isReady) {
//   //       return {
//   //        //vpEventEmitter: null,
//   //         events: getViewportEventsDefaultValue(),
//   //         getters: getViewportGettersDefaultValue(),
//   //       };
//   //     }
//   //     const initialContextValue = getInitialContextValue();
//   //     //const emitter = new ViewportEventEmitter({ ...initialContextValue });

//   //    // return {
//   //       //vpEventEmitter: emitter,
//   //       // Export out the events that we want to expose to any components and not the whole EE
//   //      // events: getEvents(emitter),
//   //       // Export out getter functions to access current values
//   //       //getters: getGetters(emitter),
//   //    // };
//   //   }, [isReady, getInitialContextValue]);

//   // Cleanup the EE if we unmount this top-level component or get new SK props
//   useEffect(() => {
//     setIsReady(true);

//     return () => {
//       // if (vpEventEmitter !== null) {
//       //   //vpEventEmitter.destroy();
//       // }
//       setIsReady(false);
//     };
//   }, [setIsReady]);

//   return (
//     <ViewportContext.Provider
//       value={{ ...getInitialContextValue(), events, getters }}
//     >
//       {children}
//     </ViewportContext.Provider>
//   );
// };
