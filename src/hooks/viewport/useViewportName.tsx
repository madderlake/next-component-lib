// useViewportName.js
import {
  sassData,
  SassDataObject,
} from "@/contexts/Viewport/SassKitViewportsProvider";
// import { ViewportsObject } from "app/types/Viewport";
import { useState, useEffect } from "react";

type ViewportsObject = SassDataObject["viewports"];
const viewportData: ViewportsObject = sassData.viewports;
const objKeys = Object.keys(viewportData) as Array<keyof ViewportsObject>;

const viewportSizes = objKeys.map((key) => {
  return {
    [key]: viewportData[key],
  };
});
const useViewportName = () => {
  const [_, setViewportName] = useState<string>(
    getViewportName(window.innerWidth),
  );

  function getViewportName(width: number): string {
    let currentViewportName = "";
    viewportSizes.forEach((size) => {
      for (let key in size) {
        const minWidth = size[key]["min-width"];
        const maxWidth = size[key]["max-width"];

        if (
          minWidth !== undefined &&
          maxWidth !== undefined &&
          width >= minWidth &&
          width <= maxWidth
        ) {
          currentViewportName = key;
          console.log(key);
          currentViewportName = key;
        } else {
          if (minWidth !== undefined && width >= minWidth)
            currentViewportName = key;
        }
      }
    });
    return currentViewportName;
  }
  useEffect(() => {
    const handleResize = () => {
      setViewportName(getViewportName(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  //return viewportName;
};

export default useViewportName;
