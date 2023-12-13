import { useContext, useState } from "react";

import type { ViewportContextValue } from "@/contexts/Viewport/ViewportContext";
import { ViewportContext } from "@/contexts/Viewport/ViewportContext";
import useIsomorphicLayoutEffect from "@/hooks/useLayoutEffectIsomorphic/useLayoutEffectIsomorphic";
import type { ScreenPropKeys } from "@/types/Viewport";

export const useScreenProp = (screenProp: ScreenPropKeys): boolean | null => {
  const { events, getters } = useContext<ViewportContextValue>(ViewportContext);
  const { onScreenProp, offScreenProp } = events;
  const { getCurrentScreenPropValue } = getters;
  const [matches, setMatches] = useState<boolean | null>(null);

  useIsomorphicLayoutEffect(() => {
    const handler = (_matches: boolean): void => setMatches(_matches);
    onScreenProp(screenProp, handler);

    const initialValue = getCurrentScreenPropValue(screenProp);

    if (initialValue !== null) {
      setMatches(initialValue);
    }

    return () => {
      offScreenProp(screenProp, handler);
    };
  }, [screenProp, onScreenProp, offScreenProp, getCurrentScreenPropValue]);

  return matches;
};
