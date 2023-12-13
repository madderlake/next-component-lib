import { useEffect, useState } from "react";

export const useIsHydrated = () => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    // sets to `true` after JS hydration
    setIsHydrated(true);
  }, []);

  return {
    isHydrated
  };
};
