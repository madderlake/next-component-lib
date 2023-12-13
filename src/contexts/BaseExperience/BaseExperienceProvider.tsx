import { useState } from "react";

import { useIsAndroid } from "@/hooks/featureDetect/useIsAndroid";
import { usePrefersReducedMotion } from "@/hooks/featureDetect/usePrefersReducedMotion";
import { useSmallDesktop } from "@/hooks/featureDetect/useSmallDesktop";
import useIsomorphicLayoutEffect from "@/hooks/useLayoutEffectIsomorphic/useLayoutEffectIsomorphic";

import type { BaseExperienceContextValue } from "./BaseExperienceContext";
import { BaseExperienceContext } from "./BaseExperienceContext";

export interface BaseExperienceProviderProps {
  children?: React.ReactNode;
  triggers?: boolean[];
}
export const BaseExperienceProvider = ({
  children,
  triggers = [],
}: BaseExperienceProviderProps): JSX.Element => {
  const [shouldEnhance, setShouldEnhance] =
    useState<BaseExperienceContextValue>(null);
  const isDesktopSmall = useSmallDesktop();
  const isPrefersReducedMotion = usePrefersReducedMotion();
  const isAndroid = useIsAndroid();

  const triggersBaseExperience = [
    isPrefersReducedMotion,
    isAndroid,
    isDesktopSmall,
    ...triggers,
  ];

  useIsomorphicLayoutEffect(() => {
    if (triggersBaseExperience.some((test) => test === true)) {
      setShouldEnhance(false);
    } else {
      setShouldEnhance(true);
    }
  }, [isDesktopSmall, ...triggers]);

  return (
    <BaseExperienceContext.Provider value={shouldEnhance}>
      {children}
    </BaseExperienceContext.Provider>
  );
};
