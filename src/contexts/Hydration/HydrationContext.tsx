import React from "react";

export type HydrationContextValue = boolean;

const HydrationContextDefaultValue = false;

export const HydrationContext = React.createContext<HydrationContextValue>(
  HydrationContextDefaultValue
);
