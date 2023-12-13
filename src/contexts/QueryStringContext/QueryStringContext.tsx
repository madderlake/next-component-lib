import React from "react";

import type { QueryStringAdapter } from "./types";

export type QueryStringContextValue = QueryStringAdapter | null;

const QueryStringContextDefaultValue: QueryStringContextValue = null;

export const QueryStringContext = React.createContext<QueryStringContextValue>(
  QueryStringContextDefaultValue
);
