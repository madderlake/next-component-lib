import React, { useCallback, useEffect, useState } from "react";

import { debounce } from "@marcom/function-utils";

import {
  getViewportHeight,
  getViewportWidth,
} from "@/lib/getViewportDimensions";

import { WindowContext } from "./WindowContext";

interface WindowContextProviderProps {
  wait: number;
  children: React.ReactNode;
}

export function WindowContextProvider({
  children,
  wait = 300,
}: WindowContextProviderProps): JSX.Element {
  const getScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.scrollY;
    }

    return 0;
  }, []);

  const [clientHeight, setClientHeight] = useState<number>(getViewportHeight());
  const [clientWidth, setClientWidth] = useState<number>(getViewportWidth());
  const [scrollY, setScrollY] = useState<number>(getScroll());

  // updates clientWidth and clientHeight on resize
  useEffect(() => {
    let handleResize = (): void => {
      setClientHeight(getViewportHeight());
      setClientWidth(getViewportWidth());
    };

    handleResize = debounce(handleResize, wait, {});

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wait]);

  // updates scrollY on raf loop
  useEffect(() => {
    let rafId: number;
    const run = (): void => {
      setScrollY(getScroll());
      rafId = window.requestAnimationFrame(run);
    };
    requestAnimationFrame(run);

    return () => cancelAnimationFrame(rafId);
  }, [getScroll]);

  return (
    <WindowContext.Provider value={{ clientHeight, clientWidth, scrollY }}>
      {children}
    </WindowContext.Provider>
  );
}
