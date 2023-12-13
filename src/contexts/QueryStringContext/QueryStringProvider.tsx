import type { QueryStringContextValue } from "./QueryStringContext";
import { QueryStringContext } from "./QueryStringContext";

export interface QueryStringProviderProps {
  children?: React.ReactNode;
  adapter: QueryStringContextValue;
}

export const QueryStringProvider = ({
  adapter,
  children,
}: QueryStringProviderProps): JSX.Element => {
  return (
    <QueryStringContext.Provider value={adapter}>
      {children}
    </QueryStringContext.Provider>
  );
};
