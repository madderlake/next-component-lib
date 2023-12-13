import { createContext } from "react";

import type { NextRouter } from "next/router";

export type NextRouterContextValue = NextRouter | null;

const NextRouterContextDefaultValue = null;

export const NextRouterContext = createContext<NextRouterContextValue>(
  NextRouterContextDefaultValue
);
