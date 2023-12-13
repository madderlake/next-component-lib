import React from "react";

export type LoadImagesContextValue = boolean;

export const LoadImagesContext =
  React.createContext<LoadImagesContextValue>(false);
