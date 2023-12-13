import { useContext } from "react";

import { BaseExperienceContext } from "@/contexts/BaseExperience/BaseExperienceContext";

export const useIsEnhanced = (): boolean => {
  const enhanced = useContext(BaseExperienceContext);
  if (enhanced === null) {
    return false;
  }

  return enhanced;
};
