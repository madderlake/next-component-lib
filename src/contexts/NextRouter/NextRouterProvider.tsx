import { useRouter } from "next/router";

import { NextRouterContext } from "./NextRouterContext";

export interface RouterProviderProps {
  children?: React.ReactNode;
}

export const NextRouterProvider = ({
  children,
}: RouterProviderProps): JSX.Element => {
  const router = useRouter();

  return (
    <NextRouterContext.Provider value={router}>
      {children}
    </NextRouterContext.Provider>
  );
};
