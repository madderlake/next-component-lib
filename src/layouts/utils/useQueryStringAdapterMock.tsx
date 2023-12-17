import { useMemo, useReducer } from "react";

import type { QueryStringAdapter } from "@/contexts/QueryStringContext/types";

type QueryStringValue = string | undefined;
type QueryStringState = Record<string, QueryStringValue>;
interface QueryStringReducerAction {
  data: QueryStringState;
}

function reducer(
  state: QueryStringState,
  action: QueryStringReducerAction
): QueryStringState {
  return { ...state, ...action.data };
}

export const useQueryStringAdapterMock = (): QueryStringAdapter => {
  // Create a mock qs adapter
  const [state, dispatch] = useReducer(reducer, {});
  const adapter = useMemo<QueryStringAdapter>(() => {
    return {
      getQuery: (name) => state[name],
      setQuery: async (name, value) => {
        await Promise.resolve();
        dispatch({ data: { [name]: value } });
      },
      clearQuery: async (name) => {
        await Promise.resolve();
        dispatch({ data: { [name]: undefined } });
      },
    };
  }, [state, dispatch]);

  return adapter;
};
