import { useScreenProp } from "./useScreenProp";

export const useRetina = (): boolean | null => {
  return useScreenProp("retina");
};
