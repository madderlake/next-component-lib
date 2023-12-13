import { useEffect, useState } from "react";

import { HydrationContext } from "./HydrationContext";

export interface HydrationProviderProps {
  children?: React.ReactNode;
}

export const HydrationProvider = ({
  children,
}: HydrationProviderProps): JSX.Element => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <HydrationContext.Provider value={isHydrated}>
      {children}
    </HydrationContext.Provider>
  );
};
