import React from "react";

export type BaseExperienceContextValue = boolean | null;

const BaseExperienceContextDefaultValue = null;

export const BaseExperienceContext =
  React.createContext<BaseExperienceContextValue>(
    BaseExperienceContextDefaultValue
  );
