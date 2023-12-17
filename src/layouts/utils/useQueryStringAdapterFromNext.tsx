import { omit } from "lodash-es";
import type { NextRouter } from "next/router";
import { useMemo, useRef } from "react";

import type {
  QueryStringAdapter,
  QueryStringAdapterSetOptions,
} from "@/contexts/QueryStringContext/types";

interface AdapterProps {
  router: NextRouter;
}

const ROUTER_OPTIONS = { scroll: false, shallow: true };

const handleRouting = async (
  router: NextRouter,
  route: { query: { [x: string]: string | string[] | undefined } },
  options?: QueryStringAdapterSetOptions
): Promise<void> => {
  if (options?.history ?? false) {
    await router.push(route, undefined, ROUTER_OPTIONS);
  } else {
    await router.replace(route, undefined, ROUTER_OPTIONS);
  }
};

export const useQueryStringAdapterFromNext = ({
  router,
}: AdapterProps): QueryStringAdapter => {
  const routerRef = useRef(router);
  const queryRef = useRef(router.query);
  const pathRef = useRef(router.asPath);
  const { asPath, query } = router;

  if (pathRef.current !== asPath) {
    pathRef.current = asPath;
    queryRef.current = query;
  }

  return useMemo<QueryStringAdapter>(
    () => ({
      getQuery: (name) => queryRef.current[name] ?? undefined,
      setQuery: async (name, value, options) => {
        if (window === undefined) {
          return await Promise.resolve();
        }

        const newRoute = { query: { ...queryRef.current, [name]: value } };
        await handleRouting(routerRef.current, newRoute, options);
      },
      clearQuery: async (name, options) => {
        if (window === undefined) {
          return await Promise.resolve();
        }

        const newRoute = { query: omit(queryRef.current, name) };
        await handleRouting(routerRef.current, newRoute, options);
      },
    }),
    // Watch the asPath value as a way to determine when we should
    // rebuild the return value
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [asPath]
  );
};
