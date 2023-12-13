import { useCallback, useContext, useMemo } from "react";

import { QueryStringContext } from "@/contexts/QueryStringContext/QueryStringContext";
import type { QueryStringAdapterSetOptions } from "@/contexts/QueryStringContext/types";

type UseQueryStringValue = string | string[] | undefined;
type UseQueryStringResult = [
  UseQueryStringValue,
  (value: string | undefined, options?: QueryStringAdapterSetOptions) => void,
  (options?: QueryStringAdapterSetOptions) => void
];

const FOCUS_KEY = "focus";

export const useFocusQueryString = (): UseQueryStringResult => {
  const adapter = useContext(QueryStringContext);
  if (adapter === null) {
    throw new TypeError("QueryStringContext is not initialized.");
  }

  const queryValue = useMemo(() => adapter.getQuery(FOCUS_KEY), [adapter]);

  const setQueryCallback = useCallback(
    (setVal: string | undefined, options?: QueryStringAdapterSetOptions) => {
      adapter.setQuery(FOCUS_KEY, setVal, options).catch(() => {
        throw new Error("setQuery Error");
      });
    },
    [adapter]
  );

  const clearQueryCallback = useCallback(
    (options?: QueryStringAdapterSetOptions) => {
      adapter.clearQuery(FOCUS_KEY, options).catch(() => {
        throw new Error("clearQuery Error");
      });
    },
    [adapter]
  );

  return [queryValue, setQueryCallback, clearQueryCallback];
};
